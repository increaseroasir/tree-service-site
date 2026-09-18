import { describe, it, expect, vi } from "vitest";
import { buildLeadEvent, handleLead, validateLeadInput, type CookieJar } from "@/server/lead-core";
import { buildMetaEvent, normPhone, sha256 } from "@/server/meta";
import { COOKIES, parseTouch, synthFbc, uuidv7 } from "@/lib/attribution-core";
import { CONSENT_TEXT, CONSENT_VERSION } from "@/lib/consent";

const cfg = { trackingId: "tk_test", locationId: "loc_test", projectId: "proj_test", serviceTypeFieldId: "field_test", endpoint: "https://backend.leadconnectorhq.com/external-tracking/events" };
const crmEnv = { GHL_TRACKING_ID: "tk_test", GHL_LOCATION_ID: "loc_test", GHL_PROJECT_ID: "proj_test", GHL_SERVICE_TYPE_FIELD_ID: "field_test" };
const metaEnv = { META_PIXEL_ID: "123", META_CAPI_ACCESS_TOKEN: "tok" };

const consent = { version: CONSENT_VERSION, text: CONSENT_TEXT, url: "https://example.test/free-quote", timestamp: "2026-09-18T00:00:00.000Z" };
const attribution = {
  leadId: "browser-supplied",
  first: { url: "https://example.test/", query: "utm_source=facebook&fbclid=abc", params: { utmSource: "facebook", fbclid: "abc" }, ts: "2026-09-17T00:00:00.000Z" },
  last: null, fbp: "", fbc: "fb.1.1.abc",
};
const page = { url: "https://example.test/free-quote", title: "Quote", path: "/free-quote", userAgent: "iPhone" };
const good = { firstName: "Dana", lastName: "Whitfield", email: "Dana@Example.com ", phone: "(612) 555-0134", serviceType: "Tree Removal", treeCount: "2–3 trees", urgency: "This week", notes: "Big maple over the garage.", consent, attribution, page };

const jar = (init: Record<string, string> = {}): CookieJar & { data: Record<string, string> } => {
  const data = { ...init };
  return { data, get: (n) => data[n], set: (n, v, maxAge) => { if (maxAge === 0) delete data[n]; else data[n] = v; } };
};

const router = (routes: { crm?: number; capi?: number; alert?: number }) => {
  const calls: { url: string; body: unknown }[] = [];
  const fetchImpl = vi.fn(async (url: RequestInfo | URL, init?: RequestInit) => {
    const u = String(url);
    calls.push({ url: u, body: init?.body });
    if (u.includes("leadconnectorhq")) return new Response("{}", { status: routes.crm ?? 200 });
    if (u.includes("graph.facebook.com")) return new Response("{}", { status: routes.capi ?? 200 });
    return new Response("ok", { status: routes.alert ?? 200 });
  }) as unknown as typeof fetch;
  return { fetchImpl, calls };
};

describe("attribution-core", () => {
  it("uuidv7 is version 7, time-sortable", () => {
    const a = uuidv7(1000), b = uuidv7(2000);
    expect(a).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-7[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
    expect(a < b).toBe(true);
  });
  it("parses UTMs through the explicit map and keeps the raw query verbatim", () => {
    const t = parseTouch("https://x.test/p?utm_source=facebook&utm_content=ad1-name&gclid=g1&weird=keepme");
    expect(t.params).toEqual({ utmSource: "facebook", utmContent: "ad1-name", gclid: "g1" });
    expect(t.query).toContain("weird=keepme");
  });
  it("synthesizes fbc from fbclid", () => {
    expect(synthFbc("abc", 5)).toBe("fb.1.5.abc");
  });
});

describe("meta", () => {
  it("normalizes phone to digits with country code and hashes user data", async () => {
    expect(normPhone("(612) 555-0134")).toBe("16125550134");
    const ev = await buildMetaEvent({ eventId: "e1", eventSourceUrl: "https://x.test/", email: " Dana@Example.com", phone: "(612) 555-0134", firstName: "Dana", lastName: "Whitfield", leadUuid: "lead-1", ip: "1.2.3.4", userAgent: "UA", fbp: "fbp1", fbc: "fbc1" }, 1700000000000);
    const d = ev.data[0];
    expect(d.event_name).toBe("Lead");
    expect(d.event_id).toBe("e1");
    expect(d.action_source).toBe("website");
    expect(d.user_data.em).toEqual([await sha256("dana@example.com")]);
    expect(d.user_data.ph).toEqual([await sha256("16125550134")]);
    expect(d.user_data.external_id).toEqual([await sha256("lead-1")]);
    expect(d.user_data.client_ip_address).toBe("1.2.3.4");
    expect(d.user_data.fbc).toBe("fbc1");
    expect(JSON.stringify(ev)).not.toContain("test_event_code");
  });
});

describe("validateLeadInput", () => {
  it("rejects missing contact fields", () => { expect(() => validateLeadInput({ ...good, phone: "" })).toThrow(); });
  it("rejects a missing consent record", () => { expect(() => validateLeadInput({ ...good, consent: {} })).toThrow(); });
});

describe("buildLeadEvent", () => {
  it("folds notes, consent, attribution and the event id; maps the service field by id", () => {
    const { payload, customFields } = buildLeadEvent(validateLeadInput(good), cfg, { leadUuid: "lead-123", eventId: "evt-1", duplicate: false });
    const notes = payload.formData.calendar_notes;
    expect(notes).toContain("Number of trees: 2–3 trees");
    expect(notes).toContain(`Consent ${CONSENT_VERSION}`);
    expect(notes).toContain(CONSENT_TEXT);
    expect(notes).toContain("First touch: https://example.test/?utm_source=facebook&fbclid=abc");
    expect(notes).toContain("Event id: evt-1");
    expect(payload.sessionId).toBe("lead-123");
    expect(payload.properties.eventId).toBe("evt-1");
    expect(customFields.field_test.value).toBe("Tree Removal");
  });
});

describe("handleLead", () => {
  it("always returns every key, even on invalid input", async () => {
    const r = await handleLead({ firstName: "x" }, { env: crmEnv });
    expect(Object.keys(r).sort()).toEqual(["duplicate", "eventId", "leadUuid", "ok", "reason", "redirect"].sort());
    expect(r.ok).toBe(false);
    expect(r.reason).toBe("invalid");
    expect(r.eventId).not.toBe("");
  });

  it("refuses to post when CRM config is missing", async () => {
    const { fetchImpl, calls } = router({});
    const r = await handleLead(good, { env: {}, fetchImpl, cookies: jar() });
    expect(r.ok).toBe(false);
    expect(r.reason).toBe("unconfigured");
    expect(calls.some((c) => c.url.includes("leadconnectorhq"))).toBe(false);
  });

  it("server cookie identity wins over the browser-supplied id", async () => {
    const { fetchImpl } = router({});
    const r = await handleLead(good, { env: crmEnv, fetchImpl, cookies: jar({ [COOKIES.lead]: "server-lead" }) });
    expect(r.leadUuid).toBe("server-lead");
  });

  it("one submit = CRM + one CAPI Lead sharing the server's event id; marks conversion", async () => {
    const { fetchImpl, calls } = router({});
    const j = jar({ [COOKIES.lead]: "server-lead", [COOKIES.fbc]: "fb.1.9.zzz" });
    const r = await handleLead(good, { env: { ...crmEnv, ...metaEnv }, fetchImpl, cookies: j, ip: "9.9.9.9", userAgent: "UA-1" });
    expect(r).toMatchObject({ ok: true, duplicate: false, redirect: "/thank-you", leadUuid: "server-lead" });
    const capi = calls.filter((c) => c.url.includes("graph.facebook.com"));
    expect(capi).toHaveLength(1);
    const body = JSON.parse(String(capi[0].body));
    expect(body.data[0].event_id).toBe(r.eventId);
    expect(body.data[0].user_data.fbc).toBe("fb.1.9.zzz");
    expect(body.data[0].user_data.client_ip_address).toBe("9.9.9.9");
    expect(j.data[COOKIES.conv]).toBeTruthy();
  });

  it("duplicate within 24h: suppressed for ads, still stored in the CRM and thanked", async () => {
    const { fetchImpl, calls } = router({});
    const j = jar();
    const env = { ...crmEnv, ...metaEnv };
    await handleLead(good, { env, fetchImpl, cookies: j });
    const r2 = await handleLead({ ...good, email: "DANA@example.com" }, { env, fetchImpl, cookies: j });
    expect(r2).toMatchObject({ ok: true, duplicate: true, redirect: "/thank-you" });
    expect(calls.filter((c) => c.url.includes("graph.facebook.com"))).toHaveLength(1);
    expect(calls.filter((c) => c.url.includes("leadconnectorhq"))).toHaveLength(2);
  });

  it("failed CAPI: lead still ok, alert fires, retry reuses the SAME event id", async () => {
    const env = { ...crmEnv, ...metaEnv, ALERT_WEBHOOK_URL: "https://hooks.test/x" };
    const j = jar();
    const bad = router({ capi: 500 });
    const r1 = await handleLead(good, { env, fetchImpl: bad.fetchImpl, cookies: j });
    expect(r1.ok).toBe(true);
    expect(j.data[COOKIES.retryEvent]).toBe(r1.eventId);
    expect(j.data[COOKIES.conv]).toBeUndefined();
    expect(bad.calls.some((c) => c.url.includes("hooks.test") && String(c.body).includes("ALERT_CAPI_FAILED"))).toBe(true);
    const okr = router({});
    const r2 = await handleLead(good, { env, fetchImpl: okr.fetchImpl, cookies: j });
    expect(r2.eventId).toBe(r1.eventId);
    expect(r2.duplicate).toBe(false);
    expect(j.data[COOKIES.retryEvent]).toBeUndefined();
  });

  it("CRM down + alert delivered: the lead is NOT lost (alert carries it) and the visitor is thanked", async () => {
    const env = { ...crmEnv, ALERT_WEBHOOK_URL: "https://hooks.test/x" };
    const { fetchImpl, calls } = router({ crm: 500 });
    const r = await handleLead(good, { env, fetchImpl, cookies: jar() });
    expect(r.ok).toBe(true);
    const alert = calls.find((c) => c.url.includes("hooks.test"));
    expect(String(alert?.body)).toContain("ALERT_CRM_FAILED");
    expect(String(alert?.body)).toContain("Whitfield");
  });

  it("CRM down + no alert channel: never claims success", async () => {
    const { fetchImpl } = router({ crm: 500 });
    const r = await handleLead(good, { env: crmEnv, fetchImpl, cookies: jar() });
    expect(r).toMatchObject({ ok: false, reason: "crm_error" });
  });
});
