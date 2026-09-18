// Client-side attribution capture. The site is prerendered static HTML, so
// there is no request-time server to do this in middleware (checklist 2.2).
// This is the browser fallback: first-touch is write-once, last-touch is
// overwritten, both live in 90-day cookies and ride along on every submit.
//
// Cookie prefix: nt_ (Northline Tree). Change COOKIE_PREFIX per client.

const COOKIE_PREFIX = "nt_";
const MAX_AGE = 60 * 60 * 24 * 90; // 90 days

// Explicit snake_case → camelCase map. Never params.get("utmSource").
const UTM_MAP: Record<string, string> = {
  utm_source: "utmSource",
  utm_medium: "utmMedium",
  utm_campaign: "utmCampaign",
  utm_term: "utmTerm",
  utm_content: "utmContent",
  gclid: "gclid",
  msclkid: "msclkid",
  fbclid: "fbclid",
  ttclid: "ttclid",
  ref: "ref",
};

export type Touch = {
  url: string;
  query: string; // raw, verbatim
  params: Record<string, string>;
  ts: string;
};

const isBrowser = () => typeof document !== "undefined";

export const readCookie = (name: string): string => {
  if (!isBrowser()) return "";
  const m = document.cookie.match(
    new RegExp("(?:^|; )" + name.replace(/[$()*+.?[\\\]^{|}]/g, "\\$&") + "=([^;]*)"),
  );
  return m ? decodeURIComponent(m[1]) : "";
};

const writeCookie = (name: string, value: string) => {
  if (!isBrowser()) return;
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${MAX_AGE}; Path=/; SameSite=Lax${secure}`;
};

const parseTouch = (): Touch => {
  const url = new URL(window.location.href);
  const params: Record<string, string> = {};
  for (const [k, v] of url.searchParams) {
    const mapped = UTM_MAP[k.toLowerCase()];
    if (mapped) params[mapped] = v;
  }
  return {
    url: url.origin + url.pathname,
    query: url.search.replace(/^\?/, ""),
    params,
    ts: new Date().toISOString(),
  };
};

const hasSignal = (t: Touch) => Object.keys(t.params).length > 0;

/**
 * Call once per page load. Writes nt_lead (write-once id), nt_attr_first
 * (write-once) and nt_attr_last (overwrite when the URL carries a signal).
 */
export const captureAttribution = () => {
  if (!isBrowser()) return;
  const lead = readCookie(`${COOKIE_PREFIX}lead`);
  if (!lead) writeCookie(`${COOKIE_PREFIX}lead`, crypto.randomUUID());

  const touch = parseTouch();
  const first = readCookie(`${COOKIE_PREFIX}attr_first`);
  if (!first) writeCookie(`${COOKIE_PREFIX}attr_first`, JSON.stringify(touch));
  if (hasSignal(touch) || !readCookie(`${COOKIE_PREFIX}attr_last`)) {
    writeCookie(`${COOKIE_PREFIX}attr_last`, JSON.stringify(touch));
  }

  // Meta: synthesize _fbc from fbclid when the pixel cookie is absent.
  if (touch.params.fbclid && !readCookie("_fbc")) {
    writeCookie("_fbc", `fb.1.${Date.now()}.${touch.params.fbclid}`);
  }
};

const safeParse = (s: string): Touch | null => {
  try {
    return s ? (JSON.parse(s) as Touch) : null;
  } catch {
    return null;
  }
};

export type AttributionSnapshot = {
  leadId: string;
  first: Touch | null;
  last: Touch | null;
  fbp: string;
  fbc: string;
};

/** Read everything the submit needs. Returns '' / null when absent, never mints. */
export const getAttribution = (): AttributionSnapshot => ({
  leadId: readCookie(`${COOKIE_PREFIX}lead`),
  first: safeParse(readCookie(`${COOKIE_PREFIX}attr_first`)),
  last: safeParse(readCookie(`${COOKIE_PREFIX}attr_last`)),
  fbp: readCookie("_fbp"),
  fbc: readCookie("_fbc"),
});

const touchToText = (label: string, t: Touch | null) => {
  if (!t) return "";
  const p = Object.entries(t.params)
    .map(([k, v]) => `${k}=${v}`)
    .join(" ");
  return `${label}: ${t.url}${t.query ? "?" + t.query : ""} (${t.ts})${p ? " " + p : ""}`;
};

/** Multi-line block for the CRM notes field. */
export const attributionToLines = (a: AttributionSnapshot): string[] =>
  [
    a.leadId ? `Lead id: ${a.leadId}` : "",
    touchToText("First touch", a.first),
    touchToText("Last touch", a.last),
    a.fbc ? `fbc: ${a.fbc}` : "",
    a.fbp ? `fbp: ${a.fbp}` : "",
  ].filter(Boolean);
