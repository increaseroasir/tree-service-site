// Pure attribution helpers shared by the server request middleware
// (src/lib/attribution.middleware.ts) and the browser fallback
// (src/lib/attribution.ts). No DOM, no Node APIs.

export const COOKIE_PREFIX = "nt_";
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 90; // ~90 days

export const COOKIES = {
  lead: `${COOKIE_PREFIX}lead`,
  first: `${COOKIE_PREFIX}attr_first`,
  last: `${COOKIE_PREFIX}attr_last`,
  conv: `${COOKIE_PREFIX}conv`, // 24h conversion marker (ad-signal dedup)
  retryEvent: `${COOKIE_PREFIX}evt`, // event id to reuse after a failed send
  fbc: "_fbc",
  fbp: "_fbp",
} as const;

// Explicit snake_case → camelCase map. Never params.get("utmSource").
export const UTM_MAP: Record<string, string> = {
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
  query: string; // raw, verbatim — includes params we don't parse yet
  params: Record<string, string>;
  ts: string;
};

export type AttributionSnapshot = {
  leadId: string;
  first: Touch | null;
  last: Touch | null;
  fbp: string;
  fbc: string;
};

export const parseTouch = (href: string, now = new Date()): Touch => {
  const url = new URL(href);
  const params: Record<string, string> = {};
  for (const [k, v] of url.searchParams) {
    const mapped = UTM_MAP[k.toLowerCase()];
    if (mapped && v) params[mapped] = v;
  }
  return {
    url: url.origin + url.pathname,
    query: url.search.replace(/^\?/, ""),
    params,
    ts: now.toISOString(),
  };
};

export const hasSignal = (t: Touch) => Object.keys(t.params).length > 0;

/** Slim shape for the overwrite cookie. */
export const slimTouch = (t: Touch): Touch => ({
  url: t.url,
  query: "",
  params: t.params,
  ts: t.ts,
});

/** Meta click id cookie value, synthesized when the pixel cookie is absent. */
export const synthFbc = (fbclid: string, nowMs = Date.now()) => `fb.1.${nowMs}.${fbclid}`;

export const safeParseTouch = (s: string | undefined | null): Touch | null => {
  if (!s) return null;
  try {
    const t = JSON.parse(s) as Touch;
    return t && typeof t.url === "string" ? t : null;
  } catch {
    return null;
  }
};

/** RFC 9562 UUIDv7: 48-bit ms timestamp, then random. Sortable by time. */
export const uuidv7 = (
  nowMs = Date.now(),
  random: (n: number) => Uint8Array = (n) => crypto.getRandomValues(new Uint8Array(n)),
): string => {
  const b = new Uint8Array(16);
  const r = random(10);
  let ts = BigInt(nowMs);
  for (let i = 5; i >= 0; i--) {
    b[i] = Number(ts & 0xffn);
    ts >>= 8n;
  }
  b.set(r, 6);
  b[6] = ((b[6] ?? 0) & 0x0f) | 0x70; // version 7
  b[8] = ((b[8] ?? 0) & 0x3f) | 0x80; // variant
  const h = [...b].map((x) => x.toString(16).padStart(2, "0")).join("");
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
};

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
    a.first?.params["gclid"] || a.last?.params["gclid"]
      ? `gclid: ${a.last?.params["gclid"] || a.first?.params["gclid"]}`
      : "",
    a.fbc ? `fbc: ${a.fbc}` : "",
    a.fbp ? `fbp: ${a.fbp}` : "",
  ].filter(Boolean);
