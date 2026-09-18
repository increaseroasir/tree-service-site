import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import QuoteForm from "@/components/site/QuoteForm";
import { CRM_CONFIG } from "@/lib/tracking";

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

const getEvent = () => {
  expect(captured).not.toBeNull();
  const body = captured!.body;
  return JSON.parse(body.get("event") as string) as {
    formId: string;
    formData: Record<string, unknown> & { calendar_notes?: string };
  };
};

describe("QuoteForm — calendar_notes folding", () => {
  beforeEach(() => {
    captured = null;
    vi.stubGlobal(
      "fetch",
      vi.fn(async (url: string, init?: RequestInit) => {
        captured = {
          url,
          body: init?.body as FormData,
        };
        return new Response("{}", { status: 200 });
      }),
    );
    vi.stubGlobal("crypto", {
      randomUUID: () => "test-uuid",
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("folds tree count and urgency into calendar_notes alongside the user's notes", async () => {
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

    fireEvent.click(screen.getByRole("button", { name: /get my free quote/i }));

    await waitFor(() => expect(captured).not.toBeNull());

    const event = getEvent();
    const notes = event.formData.calendar_notes ?? "";
    expect(event.formId).toBe("free-quote");
    expect(notes).toContain("Big maple leaning over the garage.");
    expect(notes).toContain("Number of trees: 2–3 trees");
    expect(notes).toContain("Urgency: This week");
  });

  it("sends defaults for tree count and urgency when the user leaves them alone", async () => {
    render(<QuoteForm idPrefix="contact" showProjectFields />);

    fillRequired();
    fireEvent.change(screen.getByLabelText("What do you need?"), {
      target: { value: "Stump Grinding" },
    });
    fireEvent.change(screen.getByLabelText(/Anything we should know/), {
      target: { value: "Just getting prices for now." },
    });

    fireEvent.click(screen.getByRole("button", { name: /get my free quote/i }));

    await waitFor(() => expect(captured).not.toBeNull());

    const notes = getEvent().formData.calendar_notes ?? "";
    expect(notes).toContain("Just getting prices for now.");
    expect(notes).toContain("Number of trees: Not sure");
    expect(notes).toContain("Urgency: This month");
  });

  it("short form (no project fields) still sends notes and maps service type", async () => {
    render(<QuoteForm idPrefix="hero" showProjectFields={false} />);

    fillRequired();
    fireEvent.change(screen.getByLabelText("What do you need?"), {
      target: { value: "Emergency / Storm Damage" },
    });
    expect(screen.queryByLabelText("How many trees?")).toBeNull();
    expect(screen.queryByLabelText("How soon?")).toBeNull();

    fireEvent.change(screen.getByLabelText(/Anything we should know/), {
      target: { value: "Limb on the garage roof." },
    });

    fireEvent.click(screen.getByRole("button", { name: /get my free quote/i }));

    await waitFor(() => expect(captured).not.toBeNull());

    const event = getEvent();
    const notes = event.formData.calendar_notes ?? "";
    expect(notes).toContain("Limb on the garage roof.");
    expect(notes).not.toContain("Number of trees");
    expect(notes).not.toContain("Urgency");

    // Service type custom field is mapped by the registered field id.
    expect(event.formData[CRM_CONFIG.serviceTypeFieldId]).toBe(
      "Emergency / Storm Damage",
    );
  });

  it("preselects the service type from the defaultServiceType prop", () => {
    render(
      <QuoteForm
        idPrefix="svc"
        showProjectFields={false}
        defaultServiceType="Stump Grinding"
      />,
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
    fireEvent.click(screen.getByRole("button", { name: /get my free quote/i }));
    await waitFor(() =>
      expect(screen.getByText(/Something went wrong/)).toBeInTheDocument(),
    );
    expect(screen.queryByText(/Got it/)).toBeNull();
    // Inputs preserved.
    expect((screen.getByLabelText("First name") as HTMLInputElement).value).toBe(
      "Dana",
    );
  });
});
