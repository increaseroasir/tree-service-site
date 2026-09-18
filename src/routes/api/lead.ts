// POST /api/lead — the no-JS / fetch-failed fallback (checklist 2.4). The form
// posts here natively as form-data; we answer 303 to the thank-you page. JS
// submits use the submitLead server function instead and get JSON back.
import { createFileRoute } from "@tanstack/react-router";
import { CONSENT_TEXT, CONSENT_VERSION } from "@/lib/consent";
import { handleLead } from "@/server/lead-core";
import { requestDeps } from "@/server/request-deps";

const s = (v: FormDataEntryValue | null) => (typeof v === "string" ? v : "");

export const Route = createFileRoute("/api/lead")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const form = await request.formData();
        const referer = request.headers.get("referer") ?? "";
        const back = referer || "/free-quote";
        const consented = s(form.get("consent")) === "on";

        const result = await handleLead(
          {
            firstName: s(form.get("first_name")),
            lastName: s(form.get("last_name")),
            email: s(form.get("email")),
            phone: s(form.get("phone")),
            serviceType: s(form.get("service_type")),
            treeCount: s(form.get("tree_count")),
            urgency: s(form.get("urgency")),
            notes: s(form.get("calendar_notes")),
            // Consent is the exact rendered sentence, never a boolean.
            consent: consented
              ? {
                  version: CONSENT_VERSION,
                  text: CONSENT_TEXT,
                  url: referer,
                  timestamp: new Date().toISOString(),
                }
              : {},
            attribution: {}, // identity + attribution come from server cookies
            page: {
              url: referer,
              title: "",
              path: referer ? new URL(referer).pathname : "",
              userAgent: request.headers.get("user-agent") ?? "",
            },
          },
          requestDeps(),
        );

        const to = result.ok
          ? result.redirect
          : `${back}${back.includes("?") ? "&" : "?"}lead_error=${result.reason ?? "error"}`;
        return new Response(null, { status: 303, headers: { Location: to } });
      },
    },
  },
});
