// Browser side of attribution. The server request middleware
// (src/server/attribution-middleware.ts) is the authority: it mints the lead
// id and writes the touch cookies on every HTML request, before any script.
// This file is the FALLBACK for hosts that serve static HTML: it only fills
// cookies that are still missing and never overwrites a server-written one.
import {
  COOKIES,
  COOKIE_MAX_AGE,
  hasSignal,
  parseTouch,
  safeParseTouch,
  slimTouch,
  synthFbc,
  uuidv7,
  type AttributionSnapshot,
} from "./attribution-core";

export type { AttributionSnapshot, Touch } from "./attribution-core";
export { attributionToLines } from "./attribution-core";

const isBrowser = () => typeof document !== "undefined";

/** Returns '' when absent. NEVER mints a fallback id. */
export const readCookie = (name: string): string => {
  if (!isBrowser()) return "";
  const m = document.cookie.match(
    new RegExp(
      "(?:^|; )" + name.replace(/[$()*+.?[\\\]^{|}]/g, "\\$&") + "=([^;]*)",
    ),
  );
  return m ? decodeURIComponent(m[1]) : "";
};

const writeCookie = (name: string, value: string, maxAge = COOKIE_MAX_AGE) => {
  if (!isBrowser()) return;
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${maxAge}; Path=/; SameSite=Lax${secure}`;
};

/** Call once per page load. Fills only what the server did not. */
export const captureAttribution = () => {
  if (!isBrowser()) return;
  if (!readCookie(COOKIES.lead)) writeCookie(COOKIES.lead, uuidv7());

  const touch = parseTouch(window.location.href);
  if (!readCookie(COOKIES.first)) {
    writeCookie(COOKIES.first, JSON.stringify(touch));
  }
  if (hasSignal(touch) || !readCookie(COOKIES.last)) {
    writeCookie(COOKIES.last, JSON.stringify(slimTouch(touch)));
  }
  if (touch.params.fbclid && !readCookie(COOKIES.fbc)) {
    writeCookie(COOKIES.fbc, synthFbc(touch.params.fbclid));
  }
};

/** Snapshot for the submit. Empty strings / nulls when absent. */
export const getAttribution = (): AttributionSnapshot => ({
  leadId: readCookie(COOKIES.lead),
  first: safeParseTouch(readCookie(COOKIES.first)),
  last: safeParseTouch(readCookie(COOKIES.last)),
  fbp: readCookie(COOKIES.fbp),
  fbc: readCookie(COOKIES.fbc),
});
