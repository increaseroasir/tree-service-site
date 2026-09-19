// SERVER-ONLY. Meta Conversions API. One sender, one dataset, no test codes.
// The browser pixel fires the same event with the same event_id and Meta
// merges them into ONE counted conversion.
//
// Normalization here is the single source of truth; src/lib/pixel.ts mirrors
// it exactly for browser Advanced Matching.

export type MetaConfig = {
  pixelId: string;
  accessToken: string;
  /** Override only for the local stub server. */
  graphBase: string;
};

export const readMetaConfig = (
  env: Record<string, string | undefined> = process.env,
): MetaConfig | null => {
  const pixelId = (env["META_PIXEL_ID"] ?? "").trim();
  const accessToken = (env["META_CAPI_ACCESS_TOKEN"] ?? "").trim();
  const graphBase = (env["META_GRAPH_BASE"] ?? "").trim() || "https://graph.facebook.com";
  return pixelId && accessToken ? { pixelId, accessToken, graphBase } : null;
};

// --- normalization (mirrored in src/lib/pixel.ts) -------------------------
export const normEmail = (v: string) => v.trim().toLowerCase();
export const normName = (v: string) =>
  v
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]/gu, "");
/** Digits only, with country code. 10-digit US numbers get a leading 1. */
export const normPhone = (v: string) => {
  const d = v.replace(/\D/g, "");
  return d.length === 10 ? `1${d}` : d;
};
export const normState = (v: string) => v.trim().toLowerCase().slice(0, 2);

export const sha256 = async (v: string): Promise<string> => {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(v));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
};

export type MetaLeadInput = {
  eventId: string;
  eventSourceUrl: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  state?: string | undefined;
  leadUuid: string;
  ip?: string | undefined;
  userAgent?: string | undefined;
  fbp?: string | undefined;
  fbc?: string | undefined;
  eventName?: string | undefined; // chosen deliberately; never renamed mid-flight
};

export const buildMetaEvent = async (i: MetaLeadInput, nowMs = Date.now()) => {
  const user_data: Record<string, unknown> = {
    em: [await sha256(normEmail(i.email))],
    ph: [await sha256(normPhone(i.phone))],
    fn: [await sha256(normName(i.firstName))],
    ln: [await sha256(normName(i.lastName))],
    external_id: [await sha256(i.leadUuid)],
  };
  if (i.state) user_data["st"] = [await sha256(normState(i.state))];
  if (i.ip) user_data["client_ip_address"] = i.ip;
  if (i.userAgent) user_data["client_user_agent"] = i.userAgent;
  if (i.fbp) user_data["fbp"] = i.fbp;
  if (i.fbc) user_data["fbc"] = i.fbc;

  return {
    data: [
      {
        event_name: i.eventName ?? "Lead",
        event_time: Math.floor(nowMs / 1000),
        event_id: i.eventId,
        action_source: "website",
        event_source_url: i.eventSourceUrl,
        user_data,
        // Lead itself carries 0 — buyers carry the money (downstream stages).
        custom_data: { value: 0, currency: "USD" },
      },
    ],
  };
};

export const sendMetaLead = async (
  cfg: MetaConfig,
  input: MetaLeadInput,
  fetchImpl: typeof fetch = fetch,
): Promise<{ ok: boolean; status: number }> => {
  const body = await buildMetaEvent(input);
  const res = await fetchImpl(
    `${cfg.graphBase}/v21.0/${cfg.pixelId}/events?access_token=${encodeURIComponent(cfg.accessToken)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    },
  );
  return { ok: res.ok, status: res.status };
};
