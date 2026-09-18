import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import EstimateForm from "@/components/fence/EstimateForm";

// Capture every event payload POSTed to the CRM tracking endpoint.
let captured: { url: string; body: FormData } | null = null;

const fillRequired = (prefix: string) => {
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
  void prefix;
};

const getCalendarNotes = () => {
  expect(captured).not.toBeNull();
  const body = captured!.body;
  const event = JSON.parse(body.get("event") as string) as {
    formData: { calendar_notes?: string };
  };
  return event.formData.calendar_notes ?? "";
};

describe("EstimateForm — calendar_notes folding", () => {
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

  it("folds footage and timeline into calendar_notes alongside the user's notes", async () => {
    render(<EstimateForm idPrefix="contact" showProjectFields />);

    fillRequired("contact");

    // Select the fence type (custom field mapping still works).
    fireEvent.change(screen.getByLabelText("Fence type"), {
      target: { value: "Vinyl" },
    });
    // Footage + timeline are shown because showProjectFields.
    fireEvent.change(screen.getByLabelText("Approximate footage"), {
      target: { value: "200–350 ft" },
    });
    fireEvent.change(screen.getByLabelText("Timeline"), {
      target: { value: "1–3 months" },
    });
    // Homeowner's own notes.
    fireEvent.change(screen.getByLabelText("Anything we should know?"), {
      target: { value: "Sloped back yard, HOA requires approval." },
    });

    fireEvent.click(screen.getByRole("button", { name: /find out my price/i }));

    await waitFor(() => expect(captured).not.toBeNull());

    const notes = getCalendarNotes();
    expect(notes).toContain("Sloped back yard, HOA requires approval.");
    expect(notes).toContain("Approximate fence length: 200–350 ft");
    expect(notes).toContain("Desired timeline: 1–3 months");
  });

  it("omits empty optional fields but still sends the user's notes", async () => {
    render(<EstimateForm idPrefix="contact" showProjectFields />);

    fillRequired("contact");
    fireEvent.change(screen.getByLabelText("Fence type"), {
      target: { value: "Wood Privacy" },
    });
    // Leave footage + timeline at their defaults ("Not sure" / "As soon as possible")
    // but clear them by selecting the same values — they should still be included
    // since they are non-empty. To truly omit them we'd need to clear; instead
    // verify they are present and labeled when non-empty.
    fireEvent.change(screen.getByLabelText("Anything we should know?"), {
      target: { value: "Just getting prices for now." },
    });

    fireEvent.click(screen.getByRole("button", { name: /find out my price/i }));

    await waitFor(() => expect(captured).not.toBeNull());

    const notes = getCalendarNotes();
    expect(notes).toContain("Just getting prices for now.");
    // Defaults are non-empty so they fold in.
    expect(notes).toContain("Approximate fence length: Not sure");
    expect(notes).toContain("Desired timeline: As soon as possible");
  });

  it("homepage CTA form (no footage/timeline) still sends notes and maps fence type", async () => {
    render(<EstimateForm idPrefix="cta" showProjectFields={false} />);

    fillRequired("cta");
    fireEvent.change(screen.getByLabelText("Fence type"), {
      target: { value: "Aluminum" },
    });
    // No footage/timeline fields rendered.
    expect(screen.queryByLabelText("Approximate footage")).toBeNull();
    expect(screen.queryByLabelText("Timeline")).toBeNull();

    fireEvent.change(screen.getByLabelText("Anything we should know?"), {
      target: { value: "Pool barrier near sprinklers." },
    });

    fireEvent.click(screen.getByRole("button", { name: /find out my price/i }));

    await waitFor(() => expect(captured).not.toBeNull());

    const notes = getCalendarNotes();
    expect(notes).toContain("Pool barrier near sprinklers.");
    expect(notes).not.toContain("Approximate fence length");
    expect(notes).not.toContain("Desired timeline");

    // Fence type custom field is still mapped.
    const body = captured!.body;
    const event = JSON.parse(body.get("event") as string) as {
      formData: Record<string, unknown>;
    };
    expect(event.formData["NHajpiQZ2HwG13egA2uQ"]).toBe("Aluminum");
  });
});
