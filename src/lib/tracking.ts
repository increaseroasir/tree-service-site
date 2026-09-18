// CRM form-tracking helper (GoHighLevel / LeadConnector external tracking).
// trackingPayload.formData/formLabels are only for standard CRM field keys.
// Non-standard/custom fields must go through customFields/fileFields/imageDataFields
// using the id returned by register_custom_field. Labels stay human-readable.
type StandardTrackingFieldKey = string;
type RegisteredCustomFieldId = string;
type TrackingCustomField = { value?: unknown; label: string };
type TrackingFileField = { file?: File; label: string };
type TrackingImageDataField = { dataUrl?: string; label: string };

const TRACKING_ENDPOINT =
  "https://backend.leadconnectorhq.com/external-tracking/events";

// Per-client values. Set them in .env (see .env.example); the placeholders
// below keep the template building but make the form report "not connected"
// instead of posting into someone else's CRM.
const envVar = (key: string, fallback: string) =>
  (import.meta.env?.[key] as string | undefined) || fallback;

// Getters so the values are read at call time (lets tests stub env).
export const CRM_CONFIG = {
  get trackingId() {
    return envVar("VITE_GHL_TRACKING_ID", "REPLACE_TRACKING_ID");
  },
  get locationId() {
    return envVar("VITE_GHL_LOCATION_ID", "REPLACE_LOCATION_ID");
  },
  get projectId() {
    return envVar("VITE_GHL_PROJECT_ID", "REPLACE_PROJECT_ID");
  },
  // Custom field registered for the "Service Type" selector. Register it in
  // the client's location and put the id in .env.
  get serviceTypeFieldId() {
    return envVar(
      "VITE_GHL_SERVICE_TYPE_FIELD_ID",
      "REPLACE_SERVICE_TYPE_FIELD_ID",
    );
  },
};

export const crmIsConfigured = () =>
  ![
    CRM_CONFIG.trackingId,
    CRM_CONFIG.locationId,
    CRM_CONFIG.projectId,
    CRM_CONFIG.serviceTypeFieldId,
  ].some((v) => v.startsWith("REPLACE_"));

export const postTrackingEvent = (
  trackingPayload: Record<string, unknown> & {
    formData: Record<StandardTrackingFieldKey, unknown>;
    formLabels: Record<StandardTrackingFieldKey, string>;
  },
  options: {
    customFields?: Record<RegisteredCustomFieldId, TrackingCustomField>;
    fileFields?: Record<RegisteredCustomFieldId, TrackingFileField>;
    imageDataFields?: Record<RegisteredCustomFieldId, TrackingImageDataField>;
  } = {},
): Promise<Response> => {
  const { customFields = {}, fileFields = {}, imageDataFields = {} } = options;
  const eventPayload = {
    ...trackingPayload,
    formData: { ...trackingPayload.formData },
    formLabels: { ...trackingPayload.formLabels },
  };
  const body = new FormData();

  for (const [key, field] of Object.entries(customFields)) {
    if (field.value === undefined) continue;
    eventPayload.formData[key] = field.value;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(imageDataFields)) {
    const dataUrl = field.dataUrl;
    if (!dataUrl) continue;
    if (!dataUrl.startsWith("data:image/")) {
      throw new Error("Image data field must be a data:image/* base64 string");
    }
    eventPayload.formData[key] = dataUrl;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(fileFields)) {
    const file = field.file;
    if (!file) continue;
    if (file.size > 50 * 1024 * 1024) {
      throw new Error("File must be 50 MB or smaller");
    }
    eventPayload.formData[key] = {
      filename: file.name,
      size: file.size,
      type: file.type || "application/octet-stream",
    };
    eventPayload.formLabels[key] = file.name;
    body.append(key, file, file.name);
  }

  for (const key of Object.keys(eventPayload.formData)) {
    eventPayload.formLabels[key] ||= key;
  }

  body.append("event", JSON.stringify(eventPayload));

  return fetch(TRACKING_ENDPOINT, {
    method: "POST",
    headers: {
      version: "2021-07-28",
    },
    body,
  });
};
