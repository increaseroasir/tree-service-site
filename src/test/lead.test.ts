import { describe, it, expect, vi } from "vitest";
import { buildLeadEvent, handleLead, validateLeadInput } from "@/server/lead";
import { CONSENT_TEXT, CONSENT_VERSION } from "@/lib/consent";

const cfg = {
  trackingId: "tk_test",
  locationId: "loc_test",
  projectId: "proj_test",
  serviceTypeFieldId: "field_test",
};

const consent = {
  version: CONSENT_VERSION,
  text: CONSENT_TEXT,
  url: "https://example.test/free-quote",
  timestamp: "2026-09-18T00:00:00.000Z",
};

const attribution = {
  leadId: "lead-123",
  first: {
    url: "https://example.test/",
    query: "utm_source=facebook&fbclid=abc",
    params: { utmSource: "facebook", fbclid: "abc" },
    ts: "2026-09-17T00:00:00.000Z",
  },
  last: null,
  fbp: "",
  fbc: "fb.1.1.abc",
};

const page = {
  url: "https://example.test/free-quote",
  title: "Quote",
  path: "/free-quote",
  userAgent: "iPhone",
};

const good = {
  firstName: "Dana",
  lastName: "Whitfield",
  email: "dana@example.com",
  phone: "(612) 555-0134",
  serviceType: "Tree Removal",
  treeCount: "2–3 trees",
  urgency: "This week",
  notes: "Big maple over the garage.",
  consent,
  attribution,
  page,
};

describe("validateLeadInput", () => {
  it("rejects missing contact fields", () => {
    expect(() => validateLeadInput({ ...good, phone: "" })).toThrow();
  });
  it("rejects a missing consent record", () => {
    expect(() => validateLeadInput({ ...good, consent: {} })).toThrow();
  });
});

describe("buildLeadEvent", () => {
  it("folds notes, consent, and attribution; maps the service field by id", () => {
    const { payload, customFields, leadId } = buildLeadEvent(
      validateLeadInput(good),
      cfg,
    );
    const notes = payload.formData.calendar_notes;
    expect(notes).toContain("Big maple over the garage.");
    expect(notes).toContain("Number of trees: 2–3 trees");
    expect(notes).toContain("Urgency: This week");
    expect(notes).toContain(`Consent ${CONSENT_VERSION}`);
    expect(notes).toContain(CONSENT_TEXT);
    expect(notes).toContain("Lead id: lead-123");
    expect(notes).toContain("First touch: https://example.test/?utm_source=facebook&fbclid=abc");
    expect(notes).toContain("fbc: fb.1.1.abc");
    expect(payload.sessionId).toBe("lead-123");
    expect(leadId).toBe("lead-123");
    expect(payload.trackingId).toBe("tk_test");
    expect(payload.properties.deviceType).toBe("mobile");
    expect(payload.properties.consentVersion).toBe(CONSENT_VERSION);
    expect(customFields.field_test.value).toBe("Tree Removal");
  });
});

describe("handleLead", () => {
  const env = {
    GHL_TRACKING_ID: "tk_test",
    GHL_LOCATION_ID: "loc_test",
    GHL_PROJECT_ID: "proj_test",
    GHL_SERVICE_TYPE_FIELD_ID: "field_test",
  };

  it("refuses to post when config is missing", async () => {
    const fetchImpl = vi.fn();
    const r = await handleLead(good, { env: {}, fetchImpl });
    expect(r).toEqual({ ok: false, reason: "unconfigured" });
    expect(fetchImpl).not.toHaveBeenCalled();
  });

  it("posts one multipart event to LeadConnector and returns the lead id", async () => {
    const fetchImpl = vi.fn(async (_url: RequestInfo | URL, init?: RequestInit) => {
      const body = init?.body as FormData;
      const event = JSON.parse(body.get("event") as string);
      expect(event.formData.field_test).toBe("Tree Removal");
      expect(event.formLabels.field_test).toBe("Service Type");
      return new Response("{}", { status: 200 });
    });
    const r = await handleLead(good, { env, fetchImpl });
    expect(r).toEqual({ ok: true, leadId: "lead-123" });
    expect(fetchImpl).toHaveBeenCalledTimes(1);
    expect(String(fetchImpl.mock.calls[0][0])).toContain("leadconnectorhq.com");
  });

  it("reports crm_error on a non-2xx and never claims success", async () => {
    const fetchImpl = vi.fn(async () => new Response("nope", { status: 500 }));
    const r = await handleLead(good, { env, fetchImpl });
    expect(r).toEqual({ ok: false, reason: "crm_error" });
  });

  it("reports invalid on bad input without touching the CRM", async () => {
    const fetchImpl = vi.fn();
    const r = await handleLead({ firstName: "x" }, { env, fetchImpl });
    expect(r).toEqual({ ok: false, reason: "invalid" });
    expect(fetchImpl).not.toHaveBeenCalled();
  });
});
