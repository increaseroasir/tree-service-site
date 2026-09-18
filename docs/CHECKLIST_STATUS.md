# Checklist status — Northline tree template vs UNIVERSAL_SITE_MASTER_CHECKLIST

Graded 2026-09-18 against `docs/UNIVERSAL_SITE_MASTER_CHECKLIST.md` (copied from the
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
| 1.3 Terms + Privacy links to real pages | ❌ | **Gap.** No privacy or terms routes yet |
| 1.4 Repeated CTA mid-page and bottom | ✅ | Hero form, CTA section, sticky mobile bar |
| 1.4 Consent line at the contact step | ◐ | Microcopy says "a real person calls you back", but no TCPA consent sentence or checkbox |
| 1.5 Thank-you confirms next step, fires nothing on reload | ✅ | Inline success state, no page load, no events |
| 1.7 B2C: "Free, no-obligation" microcopy | ✅ | |
| 1.7 B2C: TCPA-sized consent ("we WILL text and call") | ❌ | **Gap.** |
| 1.7 B2C: geo-localized H1 | ◐ | 8 static city pages, not visitor geo |

## Part 2 · Plumbing

| Item | Status | Notes |
|---|---|---|
| 2.1 Ad URL template | — | Ads-side; nothing in code blocks it |
| 2.2 Server-side attribution capture (first/last touch cookies, fbc synth, 90-day) | ❌ | **Gap.** Site is prerendered static HTML, so there is no request-time server. Client-side capture is the only option in this deployment |
| 2.3 Lead UUID minted on arrival, write-once cookie | ❌ | Form uses `crypto.randomUUID()` per submit as sessionId, not a persistent lead id |
| 2.4 Lead POSTs to YOUR endpoint, DB first, CRM downstream | ❌ | **Gap.** Form posts straight to GHL LeadConnector `external-tracking/events`, as the original template did. A CRM outage loses the lead |
| 2.4 Fetch failure falls back to native form POST | ❌ | Error state preserves inputs and shows a message; no native fallback |
| 2.4 One shared submit module for all forms | ✅ | `QuoteForm` + `tracking.ts` used by every form on the site |
| 2.4 Descriptive `name` + `type="email"/"tel"` | ✅ | |
| 2.5 Conversion firing (event_id, pixel + CAPI dedup) | ❌ | No pixel, no CAPI. Nothing to fire yet |
| 2.6 Dedup / stage push-back / gclid stored | ❌ | Depends on 2.4 |

## Part 3 · Consent

| Item | Status | Notes |
|---|---|---|
| Consent stored as exact sentence + version + URL + timestamp | ❌ | **Gap.** No consent record at all |
| Not granted by default | — | No checkbox exists yet |
| Privacy policy reflects what's collected | ❌ | No privacy page |

## Part 4 · CRM sub-account

| Item | Status | Notes |
|---|---|---|
| Field IDs in versioned config | ✅ | `CRM_CONFIG` in `src/lib/tracking.ts` |
| Custom fields exist before first lead | ❌ | IDs still point at the fence demo's location; must be re-registered per client |

## Parts 5–7

Platform config, data stores/alerts/gates, and security are deployment-time work
and are not started. Nothing in the template blocks them.

## Part 8 · Never copy

✅ Clean. Home HTML ~10 KB gz, no third-party scripts, no pixels, no test codes,
no consent-by-default.

## What closes the gaps, in order

1. **No infra needed, ~1 hour:** TCPA consent checkbox with a versioned sentence
   from one source file, stored into the CRM payload; privacy + terms routes;
   client-side first/last-touch attribution cookies (UTM map, gclid, fbclid→fbc)
   attached to every submit.
2. **Needs a DB target and a server, ~1–2 days:** own `/api/lead` endpoint, lead
   UUID cookie, DB-first write with CRM downstream, event_id minting, Meta CAPI
   with pixel dedup, stage push-back endpoint, alerts. TanStack Start supports
   server routes, but the prerendered static deployment does not run them; this
   layer needs a real host (Cloudflare Workers or similar) or a separate worker.
