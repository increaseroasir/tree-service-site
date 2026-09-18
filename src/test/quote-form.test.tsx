import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { CONSENT_TEXT, CONSENT_VERSION } from "@/lib/consent";

// The form talks to the server function only. Mock it and inspect the data.
const submitLead = vi.fn();
vi.mock("@/server/lead", () => ({
  submitLead: (args: { data: unknown }) => submitLead(args.data),
}));

import QuoteForm from "@/components/site/QuoteForm";

const fillRequired = () => {
  fireEvent.change(screen.getByLabelText("First name"), { target: { value: "Dana" } });
  fireEvent.change(screen.getByLabelText("Last name"), { target: { value: "Whitfield" } });
  fireEvent.change(screen.getByLabelText("Phone"), { target: { value: "(612) 555-0134" } });
  fireEvent.change(screen.getByLabelText("Email"), { target: { value: "dana@example.com" } });
};
const checkConsent = () => fireEvent.click(screen.getByRole("checkbox"));
const submit = () =>
  fireEvent.click(screen.getByRole("button", { name: /get my free quote/i }));

const clearCookies = () => {
  for (const c of document.cookie.split(";")) {
    const name = c.split("=")[0].trim();
    if (name) document.cookie = `${name}=; Max-Age=0; Path=/`;
  }
};

type Sent = {
  firstName: string;
  serviceType: string;
  treeCount?: string;
  urgency?: string;
  notes?: string;
  consent: { version: string; text: string; url: string; timestamp: string };
  attribution: { leadId: string; first: unknown; fbc: string };
  page: { url: string; path: string };
};
const sent = (): Sent => submitLead.mock.calls[0][0] as Sent;

describe("QuoteForm", () => {
  beforeEach(() => {
    submitLead.mockReset();
    submitLead.mockResolvedValue({ ok: true, leadId: "lead-1" });
    clearCookies();
    let n = 0;
    vi.stubGlobal("crypto", { randomUUID: () => `test-uuid-${++n}` });
  });
  afterEach(() => vi.unstubAllGlobals());

  it("sends the lead with consent record and attribution to the server function", async () => {
    render(<QuoteForm idPrefix="contact" showProjectFields />);
    fillRequired();
    fireEvent.change(screen.getByLabelText("What do you need?"), { target: { value: "Tree Removal" } });
    fireEvent.change(screen.getByLabelText("How many trees?"), { target: { value: "2–3 trees" } });
    fireEvent.change(screen.getByLabelText("How soon?"), { target: { value: "This week" } });
    fireEvent.change(screen.getByLabelText(/Anything we should know/), {
      target: { value: "Big maple leaning over the garage." },
    });
    checkConsent();
    submit();
    await waitFor(() => expect(submitLead).toHaveBeenCalledTimes(1));
    const d = sent();
    expect(d.firstName).toBe("Dana");
    expect(d.serviceType).toBe("Tree Removal");
    expect(d.treeCount).toBe("2–3 trees");
    expect(d.urgency).toBe("This week");
    expect(d.notes).toBe("Big maple leaning over the garage.");
    expect(d.consent.version).toBe(CONSENT_VERSION);
    expect(d.consent.text).toBe(CONSENT_TEXT);
    expect(d.consent.timestamp).toMatch(/^\d{4}-/);
    expect(d.attribution.leadId).toBe("test-uuid-1");
    expect(d.attribution.first).not.toBeNull();
    expect(d.page.path).toBe("/");
    await waitFor(() => expect(screen.getByText(/Got it/)).toBeInTheDocument());
  });

  it("does not submit without consent", async () => {
    render(<QuoteForm idPrefix="c" showProjectFields={false} />);
    fillRequired();
    fireEvent.submit(
      screen.getByRole("button", { name: /get my free quote/i }).closest("form")!,
    );
    await new Promise((r) => setTimeout(r, 20));
    expect(submitLead).not.toHaveBeenCalled();
  });

  it("short form omits tree count and urgency", async () => {
    render(<QuoteForm idPrefix="hero" showProjectFields={false} />);
    fillRequired();
    expect(screen.queryByLabelText("How many trees?")).toBeNull();
    checkConsent();
    submit();
    await waitFor(() => expect(submitLead).toHaveBeenCalledTimes(1));
    expect(sent().treeCount).toBe("");
    expect(sent().urgency).toBe("");
  });

  it("preselects the service type from the defaultServiceType prop", () => {
    render(<QuoteForm idPrefix="svc" showProjectFields={false} defaultServiceType="Stump Grinding" />);
    expect((screen.getByLabelText("What do you need?") as HTMLSelectElement).value).toBe(
      "Stump Grinding",
    );
  });

  it("shows the error state and keeps inputs when the server reports crm_error", async () => {
    submitLead.mockResolvedValue({ ok: false, reason: "crm_error" });
    render(<QuoteForm idPrefix="err" showProjectFields={false} />);
    fillRequired();
    checkConsent();
    submit();
    await waitFor(() => expect(screen.getByText(/Something went wrong/)).toBeInTheDocument());
    expect(screen.queryByText(/Got it/)).toBeNull();
    expect((screen.getByLabelText("First name") as HTMLInputElement).value).toBe("Dana");
  });

  it("shows not-connected when the server reports unconfigured", async () => {
    submitLead.mockResolvedValue({ ok: false, reason: "unconfigured" });
    render(<QuoteForm idPrefix="nc" showProjectFields={false} />);
    fillRequired();
    checkConsent();
    submit();
    await waitFor(() => expect(screen.getByText(/isn't connected to a CRM/)).toBeInTheDocument());
  });

  it("shows the error state when the server function throws", async () => {
    submitLead.mockRejectedValue(new Error("network"));
    render(<QuoteForm idPrefix="th" showProjectFields={false} />);
    fillRequired();
    checkConsent();
    submit();
    await waitFor(() => expect(screen.getByText(/Something went wrong/)).toBeInTheDocument());
  });

  it("first-touch cookie is write-once, last-touch updates on a new campaign", () => {
    window.history.replaceState({}, "", "/?utm_source=facebook&utm_campaign=c1&fbclid=abc");
    render(<QuoteForm idPrefix="a1" showProjectFields={false} />);
    expect(document.cookie).toContain("nt_attr_first=");
    expect(document.cookie).toContain("_fbc=");
    const firstBefore = document.cookie.match(/nt_attr_first=([^;]*)/)![1];
    window.history.replaceState({}, "", "/?utm_source=google&gclid=xyz");
    render(<QuoteForm idPrefix="a2" showProjectFields={false} />);
    expect(document.cookie.match(/nt_attr_first=([^;]*)/)![1]).toBe(firstBefore);
    expect(decodeURIComponent(document.cookie)).toContain('"gclid":"xyz"');
    window.history.replaceState({}, "", "/");
  });
});
