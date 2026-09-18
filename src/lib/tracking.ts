// SERVER-ONLY. GoHighLevel / LeadConnector external-tracking client.
// Imported by the submitLead server function only (src/server/lead.ts), so
// none of this — and none of the ids — reaches the browser bundle.
//
// trackingPayload.formData/formLabels are only for standard CRM field keys.
// Non-standard/custom fields must go through customFields using the id of a
// custom field registered in the client's location.
type StandardTrackingFieldKey = string;
type RegisteredCustomFieldId = string;
type TrackingCustomField = { value?: unknown; label: string };

const TRACKING_ENDPOINT =
  "https://backend.leadconnectorhq.com/external-tracking/events";

export type CrmConfig = {
  trackingId: string;
  locationId: string;
  projectId: string;
  serviceTypeFieldId: string;
};

/**
 * Read per-client ids from the server environment (AI Studio Secrets, or a
 * local .env — see .env.example). Returns null when any are missing so the
 * caller can refuse to post rather than post into the wrong CRM.
 */
export const readCrmConfig = (
  env: Record<string, string | undefined> = process.env,
): CrmConfig | null => {
  const cfg = {
    trackingId: env.GHL_TRACKING_ID ?? "",
    locationId: env.GHL_LOCATION_ID ?? "",
    projectId: env.GHL_PROJECT_ID ?? "",
    serviceTypeFieldId: env.GHL_SERVICE_TYPE_FIELD_ID ?? "",
  };
  return Object.values(cfg).every((v) => v.trim().length > 0) ? cfg : null;
};

export const postTrackingEvent = (
  trackingPayload: Record<string, unknown> & {
    formData: Record<StandardTrackingFieldKey, unknown>;
    formLabels: Record<StandardTrackingFieldKey, string>;
  },
  options: {
    customFields?: Record<RegisteredCustomFieldId, TrackingCustomField>;
  } = {},
  fetchImpl: typeof fetch = fetch,
): Promise<Response> => {
  const { customFields = {} } = options;
  const eventPayload = {
    ...trackingPayload,
    formData: { ...trackingPayload.formData },
    formLabels: { ...trackingPayload.formLabels },
  };

  for (const [key, field] of Object.entries(customFields)) {
    if (field.value === undefined) continue;
    eventPayload.formData[key] = field.value;
    eventPayload.formLabels[key] = field.label;
  }
  for (const key of Object.keys(eventPayload.formData)) {
    eventPayload.formLabels[key] ||= key;
  }

  const body = new FormData();
  body.append("event", JSON.stringify(eventPayload));

  return fetchImpl(TRACKING_ENDPOINT, {
    method: "POST",
    headers: { version: "2021-07-28" },
    body,
  });
};
