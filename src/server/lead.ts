// The one lead endpoint. Every form on the site calls submitLead(); the
// browser never sees the CRM ids or the CRM call.
//
// Checklist 2.4: "Lead POSTs to YOUR endpoint." This is that endpoint. It
// forwards to GoHighLevel today. When a database exists, write it here FIRST
// and make the CRM call a downstream copy that cannot fail the lead.
import { createServerFn } from "@tanstack/react-start";
import { consentRecordToLine, type ConsentRecord } from "@/lib/consent";
import { attributionToLines, type AttributionSnapshot } from "@/lib/attribution";
import { postTrackingEvent, readCrmConfig, type CrmConfig } from "@/lib/tracking";

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

export type LeadResult =
  | { ok: true; leadId: string }
  | { ok: false; reason: "unconfigured" | "invalid" | "crm_error" };

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
    page: (d.page ?? {}) as LeadInput["page"],
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
export const buildLeadEvent = (input: LeadInput, cfg: CrmConfig) => {
  const noteParts: string[] = [];
  if (input.notes) noteParts.push(input.notes);
  if (input.treeCount) noteParts.push(`Number of trees: ${input.treeCount}`);
  if (input.urgency) noteParts.push(`Urgency: ${input.urgency}`);
  noteParts.push(consentRecordToLine(input.consent));
  noteParts.push(...attributionToLines(input.attribution));

  const leadId = input.attribution.leadId || crypto.randomUUID();

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
    sessionId: leadId,
    properties: {
      deviceType: /Mobile|Android|iPhone/i.test(input.page.userAgent)
        ? "mobile"
        : "desktop",
      source: "ai_studio",
      projectId: cfg.projectId,
      formName: "Free Quote",
      consentVersion: input.consent.version,
    },
  };

  const customFields = {
    [cfg.serviceTypeFieldId]: {
      value: input.serviceType,
      label: "Service Type",
    },
  };

  return { payload, customFields, leadId };
};

/** Orchestration, injectable for tests. */
export const handleLead = async (
  raw: unknown,
  deps: {
    env?: Record<string, string | undefined>;
    fetchImpl?: typeof fetch;
  } = {},
): Promise<LeadResult> => {
  let input: LeadInput;
  try {
    input = validateLeadInput(raw);
  } catch {
    return { ok: false, reason: "invalid" };
  }
  const cfg = readCrmConfig(deps.env ?? process.env);
  if (!cfg) return { ok: false, reason: "unconfigured" };

  const { payload, customFields, leadId } = buildLeadEvent(input, cfg);
  try {
    const res = await postTrackingEvent(payload, { customFields }, deps.fetchImpl);
    if (!res.ok) return { ok: false, reason: "crm_error" };
    return { ok: true, leadId };
  } catch {
    return { ok: false, reason: "crm_error" };
  }
};

export const submitLead = createServerFn({ method: "POST" })
  .validator((data: unknown) => data)
  .handler(async ({ data }) => handleLead(data));
