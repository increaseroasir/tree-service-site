# Checklist status — Northline tree template vs UNIVERSAL_SITE_MASTER_CHECKLIST

Graded 2026-09-18 (updated same day after tier-1 work) against `docs/UNIVERSAL_SITE_MASTER_CHECKLIST.md` (copied from the
Tree Service shared drive). Funnel type: **B2C opt-in**, but note this template is a
multi-page organic/SEO website with nav and footer, not a single-page paid funnel.
Part 1.4's "no header nav, no footer sitemap" is a funnel rule and is intentionally
not applied here. A paid-traffic landing page for this client should be a separate
route built to Part 1 in full.

Legend: ✅ met · ◐ partial · ❌ not built · — not applicable to this template

## Part 1 · Page

| Item | Status | Notes |
|---|---|---|
| 1.1 Headline formula (number + timeframe + mechanism) | ◐ | `/lp/tree-removal`: third-person aggregate, timeframe ("under 24 hours"), mechanism ("from a phone photo"). No specific number — none invented; add the client's real one |
| 1.1 Third-person, never "you" | ✅ | On the LP H1 and subhead |
| 1.1 Pre-qualifying subhead | ✅ | Sub-copy names metro, insured crews, cleanup |
| 1.2 Hedged verbs, no "guaranteed", no fabricated claims | ✅ | No reviews, ratings, license numbers, or prices invented |
| 1.3 Named testimonials | ❌ | `REVIEWS` array is empty on purpose; section renders when real ones are pasted |
| 1.3 Gallery as proof of scale | ✅ | 9 job pages, 22 photos |
| 1.3 Authority badge / big cumulative number | ❌ | None invented; add when the client has real ones |
| 1.3 Terms + Privacy links to real pages | ✅ | `/privacy` and `/terms` routes, linked from footer and the consent line |
| 1.4 Repeated identical CTA mid-page and bottom | ✅ | LP uses the same CTA block top and bottom |
| 1.4 No header nav, no footer sitemap, no organic link off the funnel | ✅ | `/lp/tree-removal` + `FunnelLayout`: only exits are phone, `/privacy`, `/terms`. Organic site keeps its nav on purpose |
| 1.4 Soft CTA copy | ✅ | "See my local price" on the LP |
| 1.4 Consent line at the contact step | ✅ | Unchecked-by-default checkbox; label is the consent sentence from `src/lib/consent.ts` |
| 1.5 Thank-you confirms next step, fires nothing on reload | ✅ | `/thank-you` (no-JS path) and inline success (JS path); neither fires events |
| 1.7 B2C: "Free, no-obligation" microcopy | ✅ | |
| 1.7 B2C: TCPA-sized consent ("we WILL text and call") | ✅ | "may call and text me… including with automated technology… Reply STOP" |
| 1.7 B2C: geo-localized H1 | ◐ | 8 static city pages, not visitor geo |

## Part 2 · Plumbing

Proven in `docs/EVIDENCE_2026-09-18.md` against a local recorder, including forced failures.

| Item | Status | Notes |
|---|---|---|
| 2.1 Ad URL template | — | Ads-side. The site stores the raw query verbatim, so any template works, including reserved gclid/msclkid slots |
| 2.2 Attribution captured server-side, request layer, before any script | ✅ | `src/lib/attribution.middleware.ts` (global request middleware in `src/start.ts`). Write-once first touch with raw query, overwrite slim last touch, explicit UTM map, `_fbc` synthesized from `fbclid`, 90-day cookies. Browser code is only a fallback for static hosts |
| 2.3 Lead UUID (uuidv7) minted on arrival by the server, write-once cookie | ✅ | `nt_lead`. At submit the server's cookie wins; browser-supplied ids are ignored when it exists. Reader returns '' when absent, never mints |
| 2.4 Lead POSTs to YOUR endpoint | ✅ | `submitLead` server function + `POST /api/lead`, both → `handleLead` in `src/lib/lead-core.server.ts` |
| 2.4 Your database written FIRST | ❌ | **No database.** Marked insertion point in `handleLead`. Mitigation below |
| 2.4 CRM/pixel failure can never fail the lead | ◐ | CAPI failure never fails the lead. CRM failure sends `ALERT_CRM_FAILED` carrying the full lead and still thanks the visitor; only if the alert channel is also down does the visitor see an error. Needs `ALERT_WEBHOOK_URL` |
| 2.4 JSON `{ok, leadUuid, eventId, duplicate, redirect}` always, errors too | ✅ | Tested |
| 2.4 303 only as the no-JS fallback | ✅ | `/api/lead` → 303; JS path gets JSON |
| 2.4 Every failure → alert, never only a console line | ✅ | `src/lib/alerts.server.ts`; names greppable: `ALERT_CRM_FAILED`, `ALERT_CAPI_FAILED`, `ALERT_LEAD_UNCONFIGURED`. No status column (no DB) |
| 2.4 Fetch failure → native form POST | ✅ | Form has `action="/api/lead" method="post"`; on a thrown fetch it calls `form.submit()` |
| 2.4 One shared submit module | ✅ | One form component, one pipeline |
| 2.4 Descriptive `name` + `type="email"/"tel"` | ✅ | |
| 2.5 Fires at SUBMIT, never on thank-you | ✅ | `/thank-you` fires nothing (reload-tested) |
| 2.5 Server mints event_id; pixel + CAPI share it | ✅ | Same id seen in CRM, CAPI, and browser `fbq` |
| 2.5 Browser half gated on `duplicate === false` only | ✅ | Tested |
| 2.5 Hashed Advanced Matching, normalization identical to server | ✅ | `src/lib/pixel.ts` mirrors `src/lib/meta.server.ts` |
| 2.5 CAPI user_data: em ph fn ln external_id IP UA fbp fbc | ✅ | `st`/`ct`/`zp` not collected by this form |
| 2.5 Beacon grace ~300ms | ✅ | |
| 2.5 Event name chosen deliberately | ✅ | `Lead`. Do not rename mid-flight |
| 2.6 24h suppression on lower(email) OR last-10 phone, only after a successful conversion | ◐ | Cookie-based (`nt_conv`), so same-browser only. Cross-device dedup needs the DB |
| 2.6 Failed conversion retries under the SAME event id | ✅ | `nt_evt`; proven in break mode |
| 2.6 Suppression is ad-signal-only | ✅ | Duplicate still reaches the CRM and is thanked |
| 2.6 Stage push-back (Qualified → Booked → Showed → Purchase w/ real value) | ❌ | Needs the DB (UNIQUE(lead,event)) and a `/api/lead-stage` route with a Bearer secret |
| 2.6 gclid stored on every lead | ✅ | In first/last touch and as its own line in the CRM notes |

## Part 3 · Consent

| Item | Status | Notes |
|---|---|---|
| Consent stored as exact sentence + version + URL + timestamp | ✅ | Stored in CRM notes plus `consentVersion` property; sentence and version from one file |
| Not granted by default | ✅ | Checkbox unchecked; submit blocked without it (tested) |
| Privacy policy reflects what's collected | ✅ | `/privacy` lists the form fields, the three cookies, fbc, and the CRM vendor |

## Part 4 · CRM sub-account

| Item | Status | Notes |
|---|---|---|
| Field IDs in versioned config | ✅ | Read server-side from `GHL_*` secrets (`readCrmConfig` in `src/lib/tracking.server.ts`); missing values make the endpoint refuse to post |
| Custom fields exist before first lead | ❌ | Per-client: register "Service Type" in the client's location and set the id in `.env` |

## Part 5 · Platform config

| Item | Status | Notes |
|---|---|---|
| Client Hints header on LP responses | ✅ | Set by the request middleware on every HTML response |
| ONE pixel per site, never a second sender | ✅ | One id from `META_PIXEL_ID`; no GHL-side pixel integration should be added on top |
| No `test_event_code` in any config | ✅ | None in code; asserted in tests |
| Automatic events / AM toggles, EMQ 8+, ads URL template | — | Done in Events Manager per client |
| GA4 / Google enhanced conversions | ❌ | Not wired. Wire it when Google Ads spend starts, not before |

## Part 6 · Verification

| Item | Status | Notes |
|---|---|---|
| Stub server records exact outbound payloads | ✅ | `scripts/stub-server.mjs` |
| Every gate proven able to go RED | ✅ | `BREAK=crm` / `BREAK=capi`; transcript kept in `docs/EVIDENCE_2026-09-18.md` |
| Runtime claims get a browser tab | ✅ | Live submit verified in a browser, console clean |
| DB master record, sheet projection | ❌ | No database |
| Live acceptance on prod (one test lead, then deleted everywhere) | ❌ | First client clone |

## Part 7 · Security & ops

| Item | Status | Notes |
|---|---|---|
| Secrets never in code, chat, or commits | ✅ | All in AI Studio Secrets / `.env`; verified absent from the client bundle |
| Fail closed when unconfigured | ✅ | No CRM ids → refuses to post. No Meta ids → no pixel, no CAPI |
| New page rule: noindex + out of sitemap | ✅ | LP and thank-you are noindex and unlinked from the organic site |
| Ops docs exist | ✅ | `AGENTS.md`, this file, evidence transcript, the checklist |

## Part 8 · Never copy

✅ Clean. Home HTML ~10 KB gz, no third-party scripts, no pixels, no test codes,
no consent-by-default.

## What closes the gaps, in order

1. ~~Consent checkbox, privacy + terms routes, client-side attribution cookies.~~ **Done 2026-09-18.**
2. ~~Server-side attribution + lead id, event ids, Meta pixel + CAPI dedup, alerts, no-JS fallback, thank-you page, paid landing page.~~ **Done 2026-09-18**, proven with forced failures.
3. **Still needs a database:** DB-first write (marked line in `handleLead`),
   cross-device dedup, status columns, stage push-back to Meta with real
   dollar values, sheet projection. AI Studio has the server but no database;
   pick one (Neon/Supabase Postgres, Turso, Cloudflare D1). New secrets then:
   `DATABASE_URL`, `STAGE_WEBHOOK_SECRET`.
