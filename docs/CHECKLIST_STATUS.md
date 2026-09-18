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
| 1.1 Headline formula (number + timeframe + mechanism) | ◐ | "Free written quote, usually within 24 hours" carries the timeframe; H1 is an SEO headline, not a funnel headline |
| 1.1 Pre-qualifying subhead | ✅ | Sub-copy names metro, insured crews, cleanup |
| 1.2 Hedged verbs, no "guaranteed", no fabricated claims | ✅ | No reviews, ratings, license numbers, or prices invented |
| 1.3 Named testimonials | ❌ | `REVIEWS` array is empty on purpose; section renders when real ones are pasted |
| 1.3 Gallery as proof of scale | ✅ | 9 job pages, 22 photos |
| 1.3 Authority badge / big cumulative number | ❌ | None invented; add when the client has real ones |
| 1.3 Terms + Privacy links to real pages | ✅ | `/privacy` and `/terms` routes, linked from footer and the consent line |
| 1.4 Repeated CTA mid-page and bottom | ✅ | Hero form, CTA section, sticky mobile bar |
| 1.4 Consent line at the contact step | ✅ | Unchecked-by-default checkbox; label is the consent sentence from `src/lib/consent.ts` |
| 1.5 Thank-you confirms next step, fires nothing on reload | ✅ | Inline success state, no page load, no events |
| 1.7 B2C: "Free, no-obligation" microcopy | ✅ | |
| 1.7 B2C: TCPA-sized consent ("we WILL text and call") | ✅ | "may call and text me… including with automated technology… Reply STOP" |
| 1.7 B2C: geo-localized H1 | ◐ | 8 static city pages, not visitor geo |

## Part 2 · Plumbing

| Item | Status | Notes |
|---|---|---|
| 2.1 Ad URL template | — | Ads-side; nothing in code blocks it |
| 2.2 Attribution capture (first/last touch cookies, fbc synth, 90-day) | ◐ | Built client-side in `src/lib/attribution.ts`: write-once first touch, overwrite last touch, explicit UTM map, gclid/msclkid/fbclid, `_fbc` synthesized, 90-day cookies. Not server-side: the prerendered output has no request-time server, so blocked-JS visitors are not captured |
| 2.3 Lead UUID minted on arrival, write-once cookie | ◐ | `nt_lead` cookie minted on arrival, write-once, sent as `sessionId` and in notes. Minted in the browser, not by a server |
| 2.4 Lead POSTs to YOUR endpoint, DB first, CRM downstream | ◐ | Form posts to the `submitLead` server function (`src/server/lead.ts`), which validates, builds the event, and forwards to GHL. CRM ids are server-only secrets and never reach the bundle (verified by grepping `dist/client`). Still no database, so a CRM outage still loses the lead |
| 2.4 Fetch failure falls back to native form POST | ❌ | Error state preserves inputs and shows a message; no native fallback |
| 2.4 One shared submit module for all forms | ✅ | `QuoteForm` + `tracking.ts` used by every form on the site |
| 2.4 Descriptive `name` + `type="email"/"tel"` | ✅ | |
| 2.5 Conversion firing (event_id, pixel + CAPI dedup) | ❌ | No pixel, no CAPI. Nothing to fire yet |
| 2.6 Dedup / stage push-back / gclid stored | ❌ | Depends on 2.4 |

## Part 3 · Consent

| Item | Status | Notes |
|---|---|---|
| Consent stored as exact sentence + version + URL + timestamp | ✅ | Stored in CRM notes plus `consentVersion` property; sentence and version from one file |
| Not granted by default | ✅ | Checkbox unchecked; submit blocked without it (tested) |
| Privacy policy reflects what's collected | ✅ | `/privacy` lists the form fields, the three cookies, fbc, and the CRM vendor |

## Part 4 · CRM sub-account

| Item | Status | Notes |
|---|---|---|
| Field IDs in versioned config | ✅ | Read server-side from `GHL_*` secrets (`readCrmConfig` in `src/lib/tracking.ts`); missing values make the endpoint refuse to post |
| Custom fields exist before first lead | ❌ | Per-client: register "Service Type" in the client's location and set the id in `.env` |

## Parts 5–7

Platform config, data stores/alerts/gates, and security are deployment-time work
and are not started. Nothing in the template blocks them.

## Part 8 · Never copy

✅ Clean. Home HTML ~10 KB gz, no third-party scripts, no pixels, no test codes,
no consent-by-default.

## What closes the gaps, in order

1. ~~Consent checkbox, privacy + terms routes, client-side attribution cookies.~~ **Done 2026-09-18.**
2. **Needs a database, ~1–2 days:** AI Studio runs the server (SSR, server
   functions, REST routes, secrets) but provides no database. Pick one (Neon or
   Supabase Postgres, Turso, or Cloudflare D1), then inside `handleLead`: write
   the lead FIRST, forward to GHL as a downstream copy that cannot fail the
   lead, mint the event id, fire Meta CAPI with pixel dedup, add the stage
   push-back REST route and failure alerts. New secrets at that point:
   `DATABASE_URL`, `META_PIXEL_ID`, `META_CAPI_ACCESS_TOKEN`, `ALERT_WEBHOOK_URL`,
   `STAGE_WEBHOOK_SECRET`.
