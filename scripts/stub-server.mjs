// Local recorder for the lead path (checklist Part 6: "Stub server records
// exact outbound payloads locally — assertions run on what actually left").
// Stands in for GoHighLevel, Meta CAPI, and the alert webhook.
//
//   node scripts/stub-server.mjs            # listens on :9099, logs to scripts/stub-log.jsonl
//   BREAK=crm|capi node scripts/stub-server.mjs   # make that endpoint return 500 (prove gates go RED)
//
// Run the app against it:
//   GHL_TRACKING_ID=t GHL_LOCATION_ID=l GHL_PROJECT_ID=p GHL_SERVICE_TYPE_FIELD_ID=f \
//   GHL_TRACKING_ENDPOINT=http://localhost:9099/ghl META_GRAPH_BASE=http://localhost:9099/meta \
//   META_PIXEL_ID=123 META_CAPI_ACCESS_TOKEN=tok ALERT_WEBHOOK_URL=http://localhost:9099/alert npm run dev
import { createServer } from "node:http";
import { appendFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const log = join(dirname(fileURLToPath(import.meta.url)), "stub-log.jsonl");
writeFileSync(log, "");
const brk = process.env.BREAK ?? "";

createServer((req, res) => {
  const chunks = [];
  req.on("data", (c) => chunks.push(c));
  req.on("end", () => {
    const raw = Buffer.concat(chunks).toString("utf8");
    const kind = req.url.startsWith("/ghl") ? "crm" : req.url.startsWith("/meta") ? "capi" : "alert";
    let body = raw;
    if (kind === "crm") {
      const m = raw.match(/name="event"\r\n\r\n([\s\S]*?)\r\n--/);
      body = m ? JSON.parse(m[1]) : raw;
    } else {
      try { body = JSON.parse(raw); } catch { /* keep raw */ }
    }
    appendFileSync(log, JSON.stringify({ kind, url: req.url.replace(/access_token=[^&]+/, "access_token=REDACTED"), body }) + "\n");
    const fail = brk === kind;
    res.writeHead(fail ? 500 : 200, { "Content-Type": "application/json" });
    res.end(fail ? '{"error":"stub break mode"}' : "{}");
  });
}).listen(9099, () => console.log(`stub recorder on :9099 (break=${brk || "none"}) → ${log}`));
