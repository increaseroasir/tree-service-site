// ONE source for the consent sentence. The rendered checkbox label and the
// stored consent record are this same string. Bump CONSENT_VERSION on any
// wording change; never edit a version in place.
export const CONSENT_VERSION = "2026-09-18.v1";

export const CONSENT_TEXT =
  "By checking this box I agree that Northline Tree Co. may call and text me at the number I provided about my request, including with automated technology. Consent is not a condition of purchase. Message and data rates may apply. Reply STOP to opt out.";

export type ConsentRecord = {
  version: string;
  text: string;
  url: string;
  timestamp: string;
};

export const buildConsentRecord = (): ConsentRecord => ({
  version: CONSENT_VERSION,
  text: CONSENT_TEXT,
  url: typeof window === "undefined" ? "" : window.location.href,
  timestamp: new Date().toISOString(),
});

/** Single line for the CRM notes field. */
export const consentRecordToLine = (r: ConsentRecord) =>
  `Consent ${r.version} at ${r.timestamp} on ${r.url}: "${r.text}"`;
