import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import QuoteForm from "@/components/site/QuoteForm";
import { CRM_CONFIG } from "@/lib/tracking";
import { CONSENT_TEXT, CONSENT_VERSION } from "@/lib/consent";

// Capture every event payload POSTed to the CRM tracking endpoint.
let captured: { url: string; body: FormData } | null = null;

const fillRequired = () => {
  fireEvent.change(screen.getByLabelText("First name"), {
    target: { value: "Dana" },
  });
  fireEvent.change(screen.getByLabelText("Last name"), {
    target: { value: "Whitfield" },
  });
  fireEvent.change(screen.getByLabelText("Phone"), {
    target: { value: "(612) 555-0134" },
  });
  fireEvent.change(screen.getByLabelText("Email"), {
    target: { value: "dana@example.com" },
  });
};

const checkConsent = () => {
  fireEvent.click(screen.getByRole("checkbox"));
};

const submit = () =>
  fireEvent.click(screen.getByRole("button", { name: /get my free quote/i }));

const getEvent = () => {
  expect(captured).not.toBeNull();
  const body = captured!.body;
  return JSON.parse(body.get("event") as string) as {
    formId: string;
    sessionId: string;
    formData: Record<string, unknown> & { calendar_notes?: string };
    properties: Record<string, unknown>;
  };
};

const clearCookies = () => {
  for (const c of document.cookie.split(";")) {
    const name = c.split("=")[0].trim();
    if (name) document.cookie = `${name}=; Max-Age=0; Path=/`;
  }
};

describe("QuoteForm", () => {
  beforeEach(() => {
    captured = null;
    clearCookies();
    vi.stubEnv("VITE_GHL_TRACKING_ID", "tk_test");
    vi.stubEnv("VITE_GHL_LOCATION_ID", "loc_test");
    vi.stubEnv("VITE_GHL_PROJECT_ID", "proj_test");
    vi.stubEnv("VITE_GHL_SERVICE_TYPE_FIELD_ID", "field_test");
    vi.stubGlobal(
      "fetch",
      vi.fn(async (url: string, init?: RequestInit) => {
        captured = { url, body: init?.body as FormData };
        return new Response("{}", { status: 200 });
      }),
    );
    let n = 0;
    vi.stubGlobal("crypto", {
      randomUUID: () => `test-uuid-${++n}`,
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.unstubAllEnvs();
  });

  it("folds tree count, urgency, consent and attribution into calendar_notes", async () => {
    render(<QuoteForm idPrefix="contact" showProjectFields />);

    fillRequired();
    fireEvent.change(screen.getByLabelText("What do you need?"), {
      target: { value: "Tree Removal" },
    });
    fireEvent.change(screen.getByLabelText("How many trees?"), {
      target: { value: "2–3 trees" },
    });
    fireEvent.change(screen.getByLabelText("How soon?"), {
      target: { value: "This week" },
    });
    fireEvent.change(screen.getByLabelText(/Anything we should know/), {
      target: { value: "Big maple leaning over the garage." },
    });
    checkConsent();
    submit();

    await waitFor(() => expect(captured).not.toBeNull());

    const event = getEvent();
    const notes = event.formData.calendar_notes ?? "";
    expect(event.formId).toBe("free-quote");
    expect(notes).toContain("Big maple leaning over the garage.");
    expect(notes).toContain("Number of trees: 2–3 trees");
    expect(notes).toContain("Urgency: This week");
    // Consent record: exact rendered sentence + version + url + timestamp.
    expect(notes).toContain(`Consent ${CONSENT_VERSION}`);
    expect(notes).toContain(CONSENT_TEXT);
    expect(event.properties.consentVersion).toBe(CONSENT_VERSION);
    // Attribution: lead id minted on arrival rides as sessionId and in notes.
    expect(notes).toContain("Lead id: test-uuid-1");
    expect(event.sessionId).toBe("test-uuid-1");
    expect(notes).toContain("First touch:");
    // Service type custom field mapped by the registered id.
    expect(event.formData[CRM_CONFIG.serviceTypeFieldId]).toBe("Tree Removal");
    expect(CRM_CONFIG.serviceTypeFieldId).toBe("field_test");
  });

  it("does not submit without consent", async () => {
    render(<QuoteForm idPrefix="c" showProjectFields={false} />);
    fillRequired();
    // Bypass native `required` by submitting the form element directly.
    fireEvent.submit(screen.getByRole("button", { name: /get my free quote/i }).closest("form")!);
    await new Promise((r) => setTimeout(r, 20));
    expect(captured).toBeNull();
  });

  it("short form (no project fields) omits tree count and urgency", async () => {
    render(<QuoteForm idPrefix="hero" showProjectFields={false} />);
    fillRequired();
    fireEvent.change(screen.getByLabelText("What do you need?"), {
      target: { value: "Emergency / Storm Damage" },
    });
    expect(screen.queryByLabelText("How many trees?")).toBeNull();
    expect(screen.queryByLabelText("How soon?")).toBeNull();
    checkConsent();
    submit();
    await waitFor(() => expect(captured).not.toBeNull());
    const notes = getEvent().formData.calendar_notes ?? "";
    expect(notes).not.toContain("Number of trees");
    expect(notes).not.toContain("Urgency");
  });

  it("preselects the service type from the defaultServiceType prop", () => {
    render(
      <QuoteForm idPrefix="svc" showProjectFields={false} defaultServiceType="Stump Grinding" />,
    );
    expect(
      (screen.getByLabelText("What do you need?") as HTMLSelectElement).value,
    ).toBe("Stump Grinding");
  });

  it("does not show success when the tracking request fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response("nope", { status: 500 })),
    );
    render(<QuoteForm idPrefix="err" showProjectFields={false} />);
    fillRequired();
    checkConsent();
    submit();
    await waitFor(() =>
      expect(screen.getByText(/Something went wrong/)).toBeInTheDocument(),
    );
    expect(screen.queryByText(/Got it/)).toBeNull();
    expect((screen.getByLabelText("First name") as HTMLInputElement).value).toBe("Dana");
  });

  it("refuses to post when the CRM config is still placeholders", async () => {
    vi.unstubAllEnvs();
    render(<QuoteForm idPrefix="nc" showProjectFields={false} />);
    fillRequired();
    checkConsent();
    submit();
    await waitFor(() =>
      expect(screen.getByText(/isn't connected to a CRM/)).toBeInTheDocument(),
    );
    expect(captured).toBeNull();
  });

  it("first-touch cookie is write-once, last-touch updates on a new campaign", () => {
    window.history.replaceState({}, "", "/?utm_source=facebook&utm_campaign=c1&fbclid=abc");
    render(<QuoteForm idPrefix="a1" showProjectFields={false} />);
    expect(document.cookie).toContain("nt_attr_first=");
    expect(document.cookie).toContain("_fbc=");
    const firstBefore = document.cookie.match(/nt_attr_first=([^;]*)/)![1];

    window.history.replaceState({}, "", "/?utm_source=google&gclid=xyz");
    render(<QuoteForm idPrefix="a2" showProjectFields={false} />);
    const firstAfter = document.cookie.match(/nt_attr_first=([^;]*)/)![1];
    expect(firstAfter).toBe(firstBefore);
    expect(decodeURIComponent(document.cookie)).toContain('"gclid":"xyz"');
    window.history.replaceState({}, "", "/");
  });
});
