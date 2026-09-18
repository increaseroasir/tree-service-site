import { useState, type FormEvent } from "react";
import { CRM_CONFIG, postTrackingEvent } from "@/lib/tracking";

const FENCE_TYPES = [
  "Wood Privacy",
  "Vinyl",
  "Aluminum",
  "Chain Link",
  "Gates & Openers",
  "Pool Fencing",
  "Commercial",
  "Repair & Staining",
  "Not sure yet",
];

const FOOTAGE_OPTIONS = [
  "Not sure",
  "Under 100 ft",
  "100–200 ft",
  "200–350 ft",
  "Over 350 ft",
];

const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Next 30 days",
  "1–3 months",
  "Just getting prices",
];

const inputClass =
  "w-full bg-white border border-[#cfc9bb] text-[hsl(var(--foreground))] placeholder-[#8e8878] px-[14px] py-[13px] focus:outline-none focus:border-[hsl(var(--primary))] transition-colors text-[17px]";
const labelClass =
  "block text-[16px] font-bold uppercase tracking-[0.1em] text-[#454f4a] mb-[6px]";
const btnClass =
  "block w-full text-center bg-[hsl(var(--accent))] text-white text-[21px] font-bold uppercase tracking-[0.07em] py-[18px] px-6 mt-[22px] hover:bg-[#8f4e14] transition-colors disabled:opacity-60";

type Props = {
  /** unique prefix so field ids don't collide when two forms render */
  idPrefix?: string;
  showProjectFields?: boolean;
  /** preselect the fence-type dropdown, e.g. "Gates & Openers" */
  defaultFenceType?: string;
};

/**
 * Estimate form wired to the existing CRM tracking integration.
 * Success state is ONLY shown after the tracking request resolves
 * successfully; on error the inputs are preserved and an error is shown.
 */
const EstimateForm = ({
  idPrefix = "ef",
  showProjectFields = true,
  defaultFenceType,
}: Props) => {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("first_name") || "").trim();
    const lastName = String(data.get("last_name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const fenceType = String(data.get("fence_type") || "").trim();
    const footage = String(data.get("footage") || "").trim();
    const timeline = String(data.get("timeline") || "").trim();
    const notes = String(data.get("calendar_notes") || "").trim();

    // Fold optional project fields into calendar_notes so they reach the CRM
    // alongside the homeowner's own notes. Omit empty/missing values entirely.
    const noteParts: string[] = [];
    if (notes) noteParts.push(notes);
    if (footage) noteParts.push(`Approximate fence length: ${footage}`);
    if (timeline) noteParts.push(`Desired timeline: ${timeline}`);
    const combinedNotes = noteParts.join("\n");

    if (!firstName || !lastName || !email || !phone) return;

    setStatus("submitting");

    const trackingPayload = {
      type: "external_form_submission",
      timestamp: Date.now(),
      formId: "free-estimate",
      formData: {
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        calendar_notes: combinedNotes,
      },
      formLabels: {
        first_name: "First name",
        last_name: "Last name",
        email: "Email",
        phone: "Phone",
        calendar_notes: "Project details",
      },
      url: window.location.href,
      title: document.title,
      path: window.location.pathname,
      userAgent: navigator.userAgent,
      trackingId: CRM_CONFIG.trackingId,
      locationId: CRM_CONFIG.locationId,
      projectId: CRM_CONFIG.projectId,
      sessionId: crypto.randomUUID(),
      properties: {
        deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent)
          ? "mobile"
          : "desktop",
        source: "ai_studio",
        projectId: CRM_CONFIG.projectId,
        formName: "Free Estimate",
      },
    };

    try {
      const res = await postTrackingEvent(trackingPayload, {
        customFields: {
          [CRM_CONFIG.fenceTypeFieldId]: {
            value: fenceType,
            label: "Fence Type",
          },
        },
      });
      if (!res.ok) throw new Error("Tracking request failed");
      setStatus("success");
      form.reset();
    } catch {
      // Preserve inputs — do NOT show a false success.
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div
          className="text-[26px] font-bold uppercase text-[hsl(var(--primary))]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Thanks — request received
        </div>
        <p className="text-[#5d6862] mt-3">
          We'll reach out within one business day to schedule your free,
          no-pressure estimate. Nothing is booked yet — we'll confirm a time
          with you first.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm uppercase tracking-[0.12em] text-[hsl(var(--primary))] underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {status === "error" && (
        <div className="border border-[hsl(var(--accent))] bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] px-4 py-3 text-sm">
          Something went wrong sending your request. Your details are still here
          — please try again in a moment.
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${idPrefix}_first_name`} className={labelClass}>
            First name
          </label>
          <input
            id={`${idPrefix}_first_name`}
            name="first_name"
            type="text"
            required
            autoComplete="given-name"
            className={inputClass}
            placeholder="Dana"
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}_last_name`} className={labelClass}>
            Last name
          </label>
          <input
            id={`${idPrefix}_last_name`}
            name="last_name"
            type="text"
            required
            autoComplete="family-name"
            className={inputClass}
            placeholder="Whitfield"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${idPrefix}_phone`} className={labelClass}>
            Phone
          </label>
          <input
            id={`${idPrefix}_phone`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClass}
            placeholder="(612) 555-0134"
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}_email`} className={labelClass}>
            Email
          </label>
          <input
            id={`${idPrefix}_email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${idPrefix}_fence_type`} className={labelClass}>
          Fence type
        </label>
        <select
          id={`${idPrefix}_fence_type`}
          name="fence_type"
          defaultValue={defaultFenceType ?? ""}
          className={inputClass}
        >
          {!defaultFenceType && (
            <option value="" disabled>
              Select a fence type
            </option>
          )}
          {FENCE_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {showProjectFields && (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor={`${idPrefix}_footage`} className={labelClass}>
              Approximate footage
            </label>
            <select
              id={`${idPrefix}_footage`}
              name="footage"
              defaultValue="Not sure"
              className={inputClass}
            >
              {FOOTAGE_OPTIONS.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor={`${idPrefix}_timeline`} className={labelClass}>
              Timeline
            </label>
            <select
              id={`${idPrefix}_timeline`}
              name="timeline"
              defaultValue="As soon as possible"
              className={inputClass}
            >
              {TIMELINE_OPTIONS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      <div>
        <label htmlFor={`${idPrefix}_notes`} className={labelClass}>
          Anything we should know?
        </label>
        <textarea
          id={`${idPrefix}_notes`}
          name="calendar_notes"
          rows={4}
          className={inputClass}
          placeholder="Sloped back yard, dog needs to stay in, HOA requires approval…"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className={btnClass}
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {status === "submitting" ? "Sending…" : "Find out my price"}
      </button>
      <p className="text-sm text-[#8e8878]">
        We call within one business day. We don't sell your information, and
        there's no obligation to book.
      </p>
    </form>
  );
};

export default EstimateForm;
