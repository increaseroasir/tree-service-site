// SERVER-ONLY. Team alerts. Every failure on the lead path calls this; silence
// is impossible by design. Alert names are constants so they are greppable.
//
// ALERT_WEBHOOK_URL accepts any Slack-compatible incoming webhook ({ text }).
// Until a database exists, the CRM-failure alert carries the full lead so the
// lead is never lost even when the CRM is down.

export const ALERTS = {
  CRM_FAILED: "ALERT_CRM_FAILED",
  CAPI_FAILED: "ALERT_CAPI_FAILED",
  LEAD_UNCONFIGURED: "ALERT_LEAD_UNCONFIGURED",
} as const;
export type AlertName = (typeof ALERTS)[keyof typeof ALERTS];

export const sendAlert = async (
  name: AlertName,
  detail: Record<string, unknown>,
  deps: {
    env?: Record<string, string | undefined> | undefined;
    fetchImpl?: typeof fetch | undefined;
  } = {},
): Promise<boolean> => {
  const url = ((deps.env ?? process.env)["ALERT_WEBHOOK_URL"] ?? "").trim();
  // Always leave a server log line too — but never ONLY a log line when a
  // webhook is configured.
  console.error(`[${name}]`, JSON.stringify(detail));
  if (!url) return false;
  try {
    const res = await (deps.fetchImpl ?? fetch)(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: `*${name}*\n\`\`\`${JSON.stringify(detail, null, 2)}\`\`\``,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
};
