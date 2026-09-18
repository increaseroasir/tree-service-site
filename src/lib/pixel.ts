// Browser half of the Meta conversion. Loads nothing unless META_PIXEL_ID is
// set on the server. Fires Lead at SUBMIT with the server's event_id, gated on
// duplicate === false and nothing else. Never fires on thank-you load.
//
// Normalization mirrors src/server/meta.ts exactly.

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  loaded?: boolean;
  version?: string;
  push?: unknown;
};
declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

let pixelId = "";
export const setPixelId = (id: string) => {
  pixelId = id;
};
export const getPixelId = () => pixelId;

const normEmail = (v: string) => v.trim().toLowerCase();
const normName = (v: string) =>
  v.trim().toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");
const normPhone = (v: string) => {
  const d = v.replace(/\D/g, "");
  return d.length === 10 ? `1${d}` : d;
};

const sha256 = async (v: string) => {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(v));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
};

/** Standard Meta bootstrap, injected once, after the page is idle. */
export const loadPixel = (id: string) => {
  if (!id || typeof window === "undefined" || window.fbq) return;
  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue.push(args);
  } as Fbq;
  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.push = fbq;
  window.fbq = fbq;
  window._fbq = fbq;
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(s);
  fbq("init", id);
  fbq("track", "PageView");
};

export type LeadUser = {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  leadUuid: string;
};

/**
 * Fire the browser Lead with the server's event id. Resolves after a short
 * beacon grace so callers can navigate safely afterwards.
 */
export const trackLead = async (
  eventId: string,
  user: LeadUser,
  graceMs = 300,
): Promise<boolean> => {
  if (!pixelId || typeof window === "undefined" || !window.fbq) return false;
  // Hashed Advanced Matching, same normalization as the server's CAPI call.
  const am = {
    em: await sha256(normEmail(user.email)),
    ph: await sha256(normPhone(user.phone)),
    fn: await sha256(normName(user.firstName)),
    ln: await sha256(normName(user.lastName)),
    external_id: await sha256(user.leadUuid),
  };
  window.fbq("init", pixelId, am);
  window.fbq("track", "Lead", { value: 0, currency: "USD" }, { eventID: eventId });
  await new Promise((r) => setTimeout(r, graceMs));
  return true;
};
