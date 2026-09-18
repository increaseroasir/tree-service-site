// THE lead pipeline (pure, no framework imports, fully unit-tested). Both
// entry points call handleLead(): the submitLead server function
// (src/server/lead.ts) for JS submits, and POST /api/lead
// (src/routes/api/lead.ts) for the no-JS / fetch-failed native fallback.
//
// Checklist Part 2 as implemented here:
//   2.3  identity comes from the server's own cookie; browser-supplied ids are
//        ignored when that cookie exists
//   2.4  always answers {ok, leadUuid, eventId, duplicate, redirect}; a CRM or
//        pixel failure never silently loses the lead (alert carries the lead)
//   2.5  server mints the event_id unconditionally; browser pixel + CAPI share it
//   2.6  24h ad-signal suppression on email/phone; failed send retries under
//        the SAME event id; duplicates are still stored, synced, and thanked
//
// NOT here yet (needs a database): DB-first write, DB-level dedup across
// devices, stage push-back. Add the DB write at the marked line below.
import { consentRecordToLine, type ConsentRecord } from "@/lib/consent";
import {
  COOKIES,
  COOKIE_MAX_AGE,
  attributionToLines,
  safeParseTouch,
  uuidv7,
  type AttributionSnapshot,
} from "@/lib/attribution-core";
import { postTrackingEvent, readCrmConfig, type CrmConfig } from "@/lib/tracking";
import { normEmail, normPhone, readMetaConfig, sendMetaLead, sha256 } from "./meta";
import { ALERTS, sendAlert } from "./alerts";

export type LeadInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceType: string;
  treeCount?: string;
  urgency?: string;
  notes?: string;
  consent: ConsentRecord;
  attribution: AttributionSnapshot;
  page: { url: string; title: string; path: string; userAgent: string };
};

export type LeadReason = "unconfigured" | "invalid" | "crm_error";

/** All keys, always — errors too. */
export type LeadResult = {
  ok: boolean;
  leadUuid: string;
  eventId: string;
  duplicate: boolean;
  redirect: string;
  reason?: LeadReason;
};

export const THANK_YOU_PATH = "/thank-you";
const DAY = 60 * 60 * 24;

const trim = (v: unknown) => (typeof v === "string" ? v.trim() : "");

/** Validates and normalizes the browser input. Throws on anything unusable. */
export const validateLeadInput = (raw: unknown): LeadInput => {
  const d = (raw ?? {}) as Record<string, unknown>;
  const input: LeadInput = {
    firstName: trim(d.firstName),
    lastName: trim(d.lastName),
    email: trim(d.email),
    phone: trim(d.phone),
    serviceType: trim(d.serviceType),
    treeCount: trim(d.treeCount) || undefined,
    urgency: trim(d.urgency) || undefined,
    notes: trim(d.notes) || undefined,
    consent: (d.consent ?? {}) as ConsentRecord,
    attribution: (d.attribution ?? {}) as AttributionSnapshot,
    page: {
      url: trim((d.page as Record<string, unknown>)?.url),
      title: trim((d.page as Record<string, unknown>)?.title),
      path: trim((d.page as Record<string, unknown>)?.path),
      userAgent: trim((d.page as Record<string, unknown>)?.userAgent),
    },
  };
  if (!input.firstName || !input.lastName || !input.email || !input.phone) {
    throw new Error("Missing required contact fields");
  }
  if (!input.consent?.text || !input.consent?.version) {
    throw new Error("Missing consent record");
  }
  return input;
};

/** Pure: builds the CRM event from a lead. Unit-tested without a network. */
export const buildLeadEvent = (
  input: LeadInput,
  cfg: CrmConfig,
  ids: { leadUuid: string; eventId: string; duplicate: boolean },
) => {
  const noteParts: string[] = [];
  if (input.notes) noteParts.push(input.notes);
  if (input.treeCount) noteParts.push(`Number of trees: ${input.treeCount}`);
  if (input.urgency) noteParts.push(`Urgency: ${input.urgency}`);
  noteParts.push(consentRecordToLine(input.consent));
  noteParts.push(...attributionToLines(input.attribution));
  noteParts.push(`Event id: ${ids.eventId}${ids.duplicate ? " (duplicate within 24h)" : ""}`);

  const payload = {
    type: "external_form_submission",
    timestamp: Date.now(),
    formId: "free-quote",
    formData: {
      first_name: input.firstName,
      last_name: input.lastName,
      email: input.email,
      phone: input.phone,
      calendar_notes: noteParts.join("\n"),
    },
    formLabels: {
      first_name: "First name",
      last_name: "Last name",
      email: "Email",
      phone: "Phone",
      calendar_notes: "Job details",
    },
    url: input.page.url,
    title: input.page.title,
    path: input.page.path,
    userAgent: input.page.userAgent,
    trackingId: cfg.trackingId,
    locationId: cfg.locationId,
    projectId: cfg.projectId,
    sessionId: ids.leadUuid,
    properties: {
      deviceType: /Mobile|Android|iPhone/i.test(input.page.userAgent)
        ? "mobile"
        : "desktop",
      source: "ai_studio",
      projectId: cfg.projectId,
      formName: "Free Quote",
      consentVersion: input.consent.version,
      eventId: ids.eventId,
    },
  };

  const customFields = {
    [cfg.serviceTypeFieldId]: { value: input.serviceType, label: "Service Type" },
  };
  return { payload, customFields };
};

export type CookieJar = {
  get: (name: string) => string | undefined;
  set: (name: string, value: string, maxAgeSeconds: number) => void;
};

export type LeadDeps = {
  env?: Record<string, string | undefined>;
  fetchImpl?: typeof fetch;
  cookies?: CookieJar;
  ip?: string;
  userAgent?: string;
};

const emptyJar: CookieJar = { get: () => undefined, set: () => {} };

type ConvMarker = { e: string; p: string; t: number };
const readConv = (s: string | undefined): ConvMarker | null => {
  try {
    return s ? (JSON.parse(s) as ConvMarker) : null;
  } catch {
    return null;
  }
};

export const handleLead = async (
  raw: unknown,
  deps: LeadDeps = {},
): Promise<LeadResult> => {
  const env = deps.env ?? process.env;
  const jar = deps.cookies ?? emptyJar;
  const fetchImpl = deps.fetchImpl;

  // Server mints the event id unconditionally — one authority. A previously
  // FAILED conversion retries under the SAME id.
  const eventId = jar.get(COOKIES.retryEvent) || uuidv7();
  const base: LeadResult = {
    ok: false,
    leadUuid: "",
    eventId,
    duplicate: false,
    redirect: "",
  };

  let input: LeadInput;
  try {
    input = validateLeadInput(raw);
  } catch {
    return { ...base, reason: "invalid" };
  }

  // Identity: the server's cookie wins. Browser-supplied ids are a fallback
  // only when no cookie exists (static host); otherwise mint one now.
  let leadUuid = jar.get(COOKIES.lead) || "";
  if (!leadUuid) {
    leadUuid = input.attribution.leadId || uuidv7();
    jar.set(COOKIES.lead, leadUuid, COOKIE_MAX_AGE);
  }
  const attribution: AttributionSnapshot = {
    leadId: leadUuid,
    first: safeParseTouch(jar.get(COOKIES.first)) ?? input.attribution.first ?? null,
    last: safeParseTouch(jar.get(COOKIES.last)) ?? input.attribution.last ?? null,
    fbp: jar.get(COOKIES.fbp) || input.attribution.fbp || "",
    fbc: jar.get(COOKIES.fbc) || input.attribution.fbc || "",
  };
  input = { ...input, attribution };
  const userAgent = deps.userAgent || input.page.userAgent;

  // 24h suppression: lower(email) OR last-10-digit phone, only where a prior
  // conversion succeeded. Ad-signal only — the human is still stored + thanked.
  const emailHash = await sha256(normEmail(input.email));
  const phone10 = normPhone(input.phone).slice(-10);
  const conv = readConv(jar.get(COOKIES.conv));
  const duplicate = !!conv && (conv.e === emailHash || (!!phone10 && conv.p === phone10));

  const result: LeadResult = { ...base, leadUuid, duplicate };

  const crm = readCrmConfig(env);
  if (!crm) {
    await sendAlert(ALERTS.LEAD_UNCONFIGURED, { leadUuid, path: input.page.path }, { env, fetchImpl });
    return { ...result, reason: "unconfigured" };
  }

  // >>> DATABASE WRITE GOES HERE, FIRST, when a database exists. Everything
  // >>> below becomes a downstream copy that cannot fail the lead.

  const { payload, customFields } = buildLeadEvent(input, crm, { leadUuid, eventId, duplicate });
  let crmOk = false;
  try {
    const res = await postTrackingEvent(payload, { customFields }, fetchImpl, crm.endpoint);
    crmOk = res.ok;
  } catch {
    crmOk = false;
  }
  if (!crmOk) {
    // The alert carries the whole lead so a CRM outage cannot lose it.
    const delivered = await sendAlert(
      ALERTS.CRM_FAILED,
      { leadUuid, eventId, lead: payload.formData, serviceType: input.serviceType },
      { env, fetchImpl },
    );
    if (!delivered) return { ...result, reason: "crm_error" };
  }

  const meta = readMetaConfig(env);
  if (meta && !duplicate) {
    let capiOk = false;
    try {
      const r = await sendMetaLead(
        meta,
        {
          eventId,
          eventSourceUrl: input.page.url,
          email: input.email,
          phone: input.phone,
          firstName: input.firstName,
          lastName: input.lastName,
          leadUuid,
          ip: deps.ip,
          userAgent,
          fbp: attribution.fbp,
          fbc: attribution.fbc,
        },
        fetchImpl,
      );
      capiOk = r.ok;
    } catch {
      capiOk = false;
    }
    if (capiOk) {
      jar.set(COOKIES.conv, JSON.stringify({ e: emailHash, p: phone10, t: Date.now() }), DAY);
      jar.set(COOKIES.retryEvent, "", 0);
    } else {
      // Retry allowed under the SAME event id. The lead itself is fine.
      jar.set(COOKIES.retryEvent, eventId, DAY);
      await sendAlert(ALERTS.CAPI_FAILED, { leadUuid, eventId }, { env, fetchImpl });
    }
  } else if (!meta && !duplicate) {
    jar.set(COOKIES.conv, JSON.stringify({ e: emailHash, p: phone10, t: Date.now() }), DAY);
  }

  return { ...result, ok: true, redirect: THANK_YOU_PATH };
};
