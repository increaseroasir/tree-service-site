import { useEffect, useState, type FormEvent } from "react";
import { CRM_CONFIG, crmIsConfigured, postTrackingEvent } from "@/lib/tracking";
import { ROUTES, SMS_HREF } from "@/lib/content";
import {
  CONSENT_TEXT,
  buildConsentRecord,
  consentRecordToLine,
} from "@/lib/consent";
import {
  attributionToLines,
  captureAttribution,
  getAttribution,
} from "@/lib/attribution";

const SERVICE_TYPES = [
  "Tree Removal",
  "Tree Trimming & Pruning",
  "Stump Grinding",
  "Emergency / Storm Damage",
  "Lot & Brush Clearing",
  "Cabling & Bracing",
  "Tree Health / Arborist Visit",
  "Commercial & HOA",
  "Not sure yet",
];

const TREE_COUNT_OPTIONS = ["Not sure", "1 tree", "2–3 trees", "4+ trees"];

const URGENCY_OPTIONS = [
  "Emergency — tree down or hazard now",
  "This week",
  "This month",
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
  /** show tree count + urgency (full quote page); hidden on short forms */
  showProjectFields?: boolean;
  /** preselect the service dropdown, e.g. "Stump Grinding" */
  defaultServiceType?: string;
  /** submit button text */
  buttonLabel?: string;
};

/**
 * Quote form wired to the CRM tracking integration.
 * - Consent is an unchecked-by-default checkbox whose label IS the stored
 *   consent text (one source: src/lib/consent.ts).
 * - Attribution cookies (first/last touch, lead id, fbc) ride along in notes.
 * - Success state is ONLY shown after the tracking request resolves
 *   successfully; on error the inputs are preserved and an error is shown.
 */
const QuoteForm = ({
  idPrefix = "qf",
  showProjectFields = true,
  defaultServiceType,
  buttonLabel = "Get my free quote",
}: Props) => {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error" | "unconfigured"
  >("idle");

  // Capture attribution on arrival, client-side (no request-time server in
  // the prerendered deployment). Runs once per mount; cookies are write-once.
  useEffect(() => {
    captureAttribution();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("first_name") || "").trim();
    const lastName = String(data.get("last_name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const serviceType = String(data.get("service_type") || "").trim();
    const treeCount = String(data.get("tree_count") || "").trim();
    const urgency = String(data.get("urgency") || "").trim();
    const notes = String(data.get("calendar_notes") || "").trim();
    const consented = data.get("consent") === "on";

    if (!firstName || !lastName || !email || !phone || !consented) return;

    if (!crmIsConfigured()) {
      setStatus("unconfigured");
      return;
    }

    // Fold everything non-standard into calendar_notes so it reaches the CRM
    // without needing extra registered custom fields.
    const attribution = getAttribution();
    const consent = buildConsentRecord();
    const noteParts: string[] = [];
    if (notes) noteParts.push(notes);
    if (treeCount) noteParts.push(`Number of trees: ${treeCount}`);
    if (urgency) noteParts.push(`Urgency: ${urgency}`);
    noteParts.push(consentRecordToLine(consent));
    noteParts.push(...attributionToLines(attribution));
    const combinedNotes = noteParts.join("\n");

    setStatus("submitting");

    const trackingPayload = {
      type: "external_form_submission",
      timestamp: Date.now(),
      formId: "free-quote",
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
        calendar_notes: "Job details",
      },
      url: window.location.href,
      title: document.title,
      path: window.location.pathname,
      userAgent: navigator.userAgent,
      trackingId: CRM_CONFIG.trackingId,
      locationId: CRM_CONFIG.locationId,
      projectId: CRM_CONFIG.projectId,
      // Persistent lead id from the arrival cookie; random only if absent.
      sessionId: attribution.leadId || crypto.randomUUID(),
      properties: {
        deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent)
          ? "mobile"
          : "desktop",
        source: "ai_studio",
        projectId: CRM_CONFIG.projectId,
        formName: "Free Quote",
        consentVersion: consent.version,
      },
    };

    try {
      const res = await postTrackingEvent(trackingPayload, {
        customFields: {
          [CRM_CONFIG.serviceTypeFieldId]: {
            value: serviceType,
            label: "Service Type",
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
          Got it — we'll call you shortly
        </div>
        <p className="text-[#5d6862] mt-3">
          A person from our office will call to confirm details and set a time.
          If it's an emergency, don't wait on us — call the number at the top of
          the page now.
        </p>
        <a
          href={SMS_HREF}
          className="inline-block mt-5 border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] text-lg font-bold uppercase tracking-[0.06em] px-5 py-3"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Text us a photo of the tree
        </a>
        <div>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-6 text-sm uppercase tracking-[0.12em] text-[hsl(var(--primary))] underline"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {status === "error" && (
        <div className="border border-[hsl(var(--accent))] bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] px-4 py-3 text-sm">
          Something went wrong sending your request. Your details are still here
          — please try again, or just call us.
        </div>
      )}
      {status === "unconfigured" && (
        <div className="border border-[hsl(var(--accent))] bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] px-4 py-3 text-sm">
          This demo form isn't connected to a CRM yet. Call or text us instead.
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
        <label htmlFor={`${idPrefix}_service_type`} className={labelClass}>
          What do you need?
        </label>
        <select
          id={`${idPrefix}_service_type`}
          name="service_type"
          defaultValue={defaultServiceType ?? ""}
          className={inputClass}
        >
          {!defaultServiceType && (
            <option value="" disabled>
              Select a service
            </option>
          )}
          {SERVICE_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {showProjectFields && (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor={`${idPrefix}_tree_count`} className={labelClass}>
              How many trees?
            </label>
            <select
              id={`${idPrefix}_tree_count`}
              name="tree_count"
              defaultValue="Not sure"
              className={inputClass}
            >
              {TREE_COUNT_OPTIONS.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor={`${idPrefix}_urgency`} className={labelClass}>
              How soon?
            </label>
            <select
              id={`${idPrefix}_urgency`}
              name="urgency"
              defaultValue="This month"
              className={inputClass}
            >
              {URGENCY_OPTIONS.map((t) => (
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
          Anything we should know?{" "}
          <span className="normal-case tracking-normal font-normal text-[#8e8878]">
            (optional)
          </span>
        </label>
        <textarea
          id={`${idPrefix}_notes`}
          name="calendar_notes"
          rows={3}
          className={inputClass}
          placeholder="Big maple leaning over the garage, backyard gate is narrow…"
        />
      </div>

      <label
        htmlFor={`${idPrefix}_consent`}
        className="flex gap-3 items-start text-[14px] leading-[1.45] text-[#454f4a]"
      >
        <input
          id={`${idPrefix}_consent`}
          name="consent"
          type="checkbox"
          required
          className="mt-[3px] w-[18px] h-[18px] flex-none accent-[hsl(var(--primary))]"
        />
        <span>
          {CONSENT_TEXT}{" "}
          <a href={ROUTES.privacy} className="underline">
            Privacy
          </a>{" "}
          ·{" "}
          <a href={ROUTES.terms} className="underline">
            Terms
          </a>
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className={btnClass}
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {status === "submitting" ? "Sending…" : buttonLabel}
      </button>
      <p className="text-sm text-[#8e8878]">
        A real person calls you back. No spam, no selling your info, no
        obligation to book. Or skip the form and{" "}
        <a href={SMS_HREF} className="underline text-[hsl(var(--primary))]">
          text us a photo
        </a>
        .
      </p>
    </form>
  );
};

export default QuoteForm;
