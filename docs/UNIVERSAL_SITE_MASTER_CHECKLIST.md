# UNIVERSAL SITE MASTER CHECKLIST
Every box, every site, before it takes a dollar of traffic. Merged from: the plumbing contract, the 36-item page checklist, the HomeBuddy/Perspective teardowns, and every check added during the hottublaunch.com hardening (the lab site — what got proven there ports here).

**How to use:** pick the funnel type, build the marked sections, check every box, then run Part 6 until all gates are green AND each has been shown able to go red. A box nobody verified is unchecked, whatever anyone reports.

| Funnel type | Sections |
|---|---|
| B2B opt-in (single form) | CORE parts 1–7 + B2B add-ons |
| B2B survey (multi-step) | CORE + SURVEY + B2B |
| B2C opt-in | CORE + B2C |
| B2C survey | CORE + SURVEY + B2C |

Placeholders: `{site}` `{pixel_id}` `{location_id}` `{prefix}` (cookie prefix, e.g. `htl_`).

---

# PART 1 · PAGE — copy, offer, trust, UX
*(source: HB = HomeBuddy live, P = Perspective.co, OURS = stack contract)*

## 1.1 Headline
- [ ] Formula: specific number + timeframe + mechanism, product name withheld (HB)
- [ ] Specificity over roundness — "410,000", never "hundreds of thousands"
- [ ] Stated timeframe in the H1
- [ ] Curiosity gap: mechanism named, product isn't
- [ ] Third-person aggregate, never "you" — passes Meta's personal-attribute filter
- [ ] Pre-qualifying subhead under the H1 to shed unqualified clicks

## 1.2 Body copy
- [ ] Benefit bullets, 5 max, outcome-framed
- [ ] Hedged verbs only ("helps protect") — never "guaranteed"
- [ ] Every superlative carries an asterisk + real footnote citing a real source
- [ ] No "cure"/"guaranteed results"/"miracle"/before-after language
- [ ] No second-person financial, health, or appearance claims
- [ ] Emotional ownership language inside the flow ("your new ___")
- [ ] Visible "Advertorial" label if the page reads editorial (FTC 16 CFR §255)

## 1.3 Trust
- [ ] Named testimonials — first name + last initial + one concrete detail
- [ ] Results/install gallery as proof of scale
- [ ] One media/authority badge
- [ ] One big cumulative number
- [ ] Affinity block if it fits (veterans, local, family-owned)
- [ ] Award/credential claims carry substantiation footnotes
- [ ] Terms + Privacy link to REAL pages, not `#`

## 1.4 CTA and exits
- [ ] Soft CTA copy — curiosity not commitment ("See local price")
- [ ] Repeated identical CTA block mid-page and bottom
- [ ] No header nav, no footer sitemap, no organic link off the funnel
- [ ] At most one deliberate exit, monetizing the wrong audience
- [ ] Consent line visible at the contact step, plain language

## 1.5 Thank-you page
- [ ] Confirms what happens next and when
- [ ] One template, parameter-varied, if multiple offers will run
- [ ] Stripped of heavy assets — loads near-instant
- [ ] **Fires nothing on load or reload** (wired in Part 2; page must not add its own events)

## 1.6 SURVEY add-on — question UX
- [ ] One question per screen; big tap cards, 2–4 options, Next button
- [ ] No typing until the end
- [ ] Multi-select screens where the question needs it
- [ ] Progress indicator (bar or "Step 1/4")
- [ ] Contact fields LAST — sunk cost is the mechanism
- [ ] Back navigation shows prior answers still selected
- [ ] Optional mascot/speech-bubble welcome
- [ ] Every question raises lead value
- [ ] One intent question that routes or scores
- [ ] One personalization/ownership question mid-quiz
- [ ] Length tested — 6 vs 9 vs 12 steps
- [ ] Validating interstitial before contact screen (spinner + "verifying fit" + testimonials)
- [ ] Contact screen framed as reward — "You're approved — last step"
- [ ] Proof strip pinned under every screen (badges + concrete count)
- [ ] CTA carries the concrete thing ("Save My Seat — Wednesday 2PM ET")
- [ ] Exit-intent modal with REAL choice paths, not just dismiss

## 1.7 B2C add-on
- [ ] Geo-localized H1 (visitor's city before any input)
- [ ] ZIP is the hero CTA — first input IS the call to action
- [ ] "Free, no-obligation" microcopy under it
- [ ] ZIP screen is a confirm-tap (pre-resolved), not typing
- [ ] Out-of-area → polite dead end, not a wasted funnel
- [ ] SEO content below fold only if the page should also rank; paid variants ad-only
- [ ] Consent language sized for TCPA — you WILL text and call

## 1.8 B2B add-on
- [ ] Drop geo H1 + ZIP hero when selling nationally
- [ ] Qualification questions firmographic, double as scoring (title, spend, size)
- [ ] Offer is a scheduled thing or deliverable (seat/audit/playbook), not an estimate
- [ ] CTA names the concrete slot
- [ ] Disqualification is a feature — wrong-fit answers dead-end
- [ ] "You Qualify / You're Approved" framing
- [ ] Business-email field; decide out loud whether personal domains disqualify, enforce server-side

---

# PART 2 · PLUMBING — attribution, identity, firing
*(this is where sites silently lose money; every item here was live-proven on the lab site)*

## 2.1 Ad URL template
- [ ] One template, all platforms, macros substituted at click:
  `utm_source=facebook&utm_medium=paid&utm_campaign={{campaign.id}}&utm_term={{adset.id}}&utm_content={{ad.id}}-{{ad.name}}` — ad-NAME level, not just id
- [ ] Reserved empty slots for gclid / msclkid / affiliate id so one template serves all sources
- [ ] Internal taxonomy params where needed

## 2.2 Attribution capture — SERVER-side, request layer
- [ ] Captured by middleware on every HTML request, BEFORE any page script; survives redirects and blocked JS
- [ ] Raw query stored VERBATIM on first touch, including params you don't parse yet
- [ ] First URL + first query = write-once cookie ({prefix}attr_first); never overwritten — the campaign that earned them
- [ ] Last URL + last query = overwrite cookie ({prefix}attr_last), slim shape
- [ ] `_fbp` / `_fbc` read server-side from the Cookie header; `fbc` SYNTHESIZED from fbclid when the cookie is absent
- [ ] UTMs parsed only through an explicit snake_case→camelCase map — never `params.get('utmSource')` (this exact bug shipped for months once)
- [ ] Cookies ~90-day Max-Age
- [ ] Walk a fully tagged URL to the last step and read the submit payload before launch

## 2.3 Identity
- [ ] Lead UUID (real uuidv7) minted on ARRIVAL by the server, write-once cookie — before any form exists
- [ ] Cookie, never sessionStorage (dies with the tab)
- [ ] Cookie-read helper returns '' when absent — NEVER mints a fallback id
- [ ] Returning visitor recognized, not duplicated; server ignores browser-supplied ids when its cookie exists

## 2.4 The record
- [ ] Lead POSTs to YOUR endpoint, not a third-party form service
- [ ] Your database written FIRST; CRM, sheet, pixels are all downstream copies
- [ ] A CRM/sheet/pixel failure can NEVER fail the lead
- [ ] JSON response with all keys always: `{ok, leadUuid, eventId, duplicate, redirect}` — errors too
- [ ] Never a bare 303 for JS submits (nothing to gate the pixel on); 303 kept only as the no-JS form-data fallback
- [ ] Every failure → status column on the lead row AND an alert to the team (Telegram/Slack). Never only a console line. Silence impossible by design
- [ ] Fetch failure in the browser falls back to native form POST — the lead is never lost
- [ ] One shared client submit module for ALL forms — no per-page tracking scripts, ever
- [ ] Form validation duck-types values (RadioNodeList ≠ HTMLInputElement — an instanceof check once bricked every radio form silently)
- [ ] Descriptive `name` attributes + `type="email"`/`type="tel"` on fields (Meta auto-detect reads them)

## 2.5 Conversion firing
- [ ] Fires at SUBMIT, never on thank-you load; refresh double-fires nothing
- [ ] Server mints the event_id unconditionally — one authority
- [ ] Browser pixel + server CAPI share that event_id → platform merges into ONE counted conversion
- [ ] Browser half gated on `duplicate === false` and nothing else
- [ ] Hashed Advanced Matching on the browser init: em, ph, fn, ln, external_id — normalization identical to the server's
- [ ] Server CAPI user_data: em, ph, fn, ln, st (+ ct/zp when collected), external_id (hashed lead uuid), IP, UA, fbp, fbc
- [ ] Beacon grace (~300ms) before navigation
- [ ] Event name chosen deliberately (Lead vs CompleteRegistration — worth testing; never rename mid-flight)

## 2.6 Dedup and value
- [ ] 24h suppression: lower(email) OR last-10-digit phone, only where prior conversion succeeded
- [ ] Prior FAILED conversion → retry allowed under the SAME event id
- [ ] Suppression is ad-signal-only — duplicate human still stored + synced + thanked
- [ ] Real dollar values on downstream events (Lead itself carries 0 — buyers carry the money)
- [ ] CRM stages push back: Qualified → Schedule/Booked → Showed → Purchase(real amount REQUIRED, reject without it)
- [ ] ONE event name per real stage — never invent variants to dodge dedup; DB-level UNIQUE(lead, event) makes double sources safe (CRM + booking page both firing Schedule = first wins)
- [ ] Stage endpoint: Bearer secret, fail-closed when unconfigured; failed send → 5xx so the caller retries, same event id; browser path (booking page) allowed for ONE event only, identity from cookie only, action_source `website` with fresh IP/UA/fbp/fbc; CRM path `system_generated` with NO fake visitor signals
- [ ] gclid stored on every lead row → Google offline-conversion imports work the day Ads turns on

## 2.7 SURVEY add-on — per-step signal
- [ ] URL pattern chosen deliberately: real URL per step (back-button + per-step retargeting) or one URL with virtual pageviews — both proven
- [ ] Real-URL steps 2+: noindex + canonical to funnel entry, out of sitemap
- [ ] Attribution params ride EVERY step transition including the first CTA click
- [ ] Back button restores the previous answer
- [ ] Multi-tab guard — two tabs must not double-fire
- [ ] page_view on every screen advance
- [ ] A step event per answer `{question, answer, step}`
- [ ] InitiateCheckout (or named funnel_start) once when the wizard opens
- [ ] Named per-step events, not Meta auto-detect reliance
- [ ] Pre-minted rotating event id — next event's id exists before it fires
- [ ] Per-session sequence counter on every event (catches double-fires/ordering)
- [ ] Retention timers 30s/60s/2m/3m/5m/10m/30m for engagement audiences
- [ ] Progressive Advanced Matching — hash + attach each identifier the moment it's collected
- [ ] Quiz answers actually IN the submit payload (the classic survey bug: answers die in sessionStorage)
- [ ] Question set preloads up front — zero-latency taps
- [ ] At least one answer routes/scores downstream
- [ ] Exit-modal buttons fire their own named events
- [ ] A/B infrastructure for question order and copy

## 2.8 B2C plumbing add-on
- [ ] Geo resolved server-side from the request before any input
- [ ] ZIP cached ~1h client-side; known ZIP skips the step
- [ ] Out-of-area = dead end with its OWN named event, not a lead
## 2.9 B2B plumbing add-on
- [ ] Geo/ZIP layer dropped for national sellers
- [ ] Qualification answers stored as structured fields, not free text
- [ ] Disqualifying answers dead-end, never enter the lead pool
- [ ] Personal-domain email policy enforced server-side
- [ ] Consent still applies — B2B doesn't exempt texting/calling mobiles
- [ ] Longer cycle = the stage feedback loop matters MORE; wire it

---

# PART 3 · CONSENT & COMPLIANCE
- [ ] Consent stored as the EXACT rendered sentence + version + page URL + timestamp — never a boolean
- [ ] Rendered checkbox label and stored consent_text are the SAME string, from ONE source file
- [ ] Version bumped on any wording change — never edited in place
- [ ] No-consent leads flagged uncontactable-by-automation — human dial only
- [ ] Every automated SMS/email sequence in the CRM conditions on the consent tag; nothing ever messages a no-consent contact
- [ ] Consent NOT granted by default (never copy that)
- [ ] TrustedForm/Jornaya only if you resell leads; otherwise skip
- [ ] Privacy policy reflects what's actually collected (incl. pre-submit capture if built)

# PART 4 · CRM SUB-ACCOUNT (GHL or equivalent)
- [ ] Custom fields the site writes exist BEFORE first lead, verified by exact key/ID (missing field = silent drop): lead_uuid + consent_record + the site's qualification fields
- [ ] Field IDs live in versioned config (vars), deploy atomically with code — not hand-typed secrets
- [ ] Tags auto-created on upsert, zero setup: universal intake tag (`{brand}-website`) · consent-captured | no-consent-no-automation · source-/medium-/campaign-{slug} · funnel-{page} · source-organic-or-direct fallback
- [ ] Standard fields mapped: name, email, phone, company, state, source label
- [ ] Custom value `stage_webhook_secret` set = the worker's secret (custom values are visible to all sub-account users → Settings admin-only, dedicated secret per endpoint, rotate on staff departure)
- [ ] Pipeline stages map 1:1 to stage events; each stage wired to exactly ONE workflow; no stage fires two event names
- [ ] Stage workflows send the exact contract: POST {site}/api/lead-stage, Bearer custom value, body leadUuid + email fallback + event; Purchase carries the real opportunity value
- [ ] Nothing anywhere edits or clears contact.lead_uuid
- [ ] Speed-to-lead / reply / appointment / internal-alert workflows built and consent-gated
- [ ] User/role audit done; leftover fields from other templates reference-checked before deletion (deletion wipes data on all contacts, irreversibly)
- [ ] CRM outage drill understood: leads keep landing in YOUR DB + alert fires; nothing lost

# PART 5 · PLATFORM CONFIG (free, config-only, almost always skipped)
Meta:
- [ ] Automatic Events ON · Automatic Advanced Matching ON · Manual AM also on · Structured Site Data ON
- [ ] Client Hints header on LP responses: `Permissions-Policy: ch-ua-model=(*), ch-ua-platform-version=(*), ch-ua-full-version=(*)` + Accept-CH
- [ ] ONE pixel/dataset per site; never a second sender (no CAPI Gateway, no partner one-click on top of a direct integration — dedup breaks outside your event ids)
- [ ] NO test_event_code in any server config, ever — test codes live in the Test Events browser tab only
- [ ] Verify beacons actually leave the browser (Test Events tab); verify counted events + EMQ in Overview (badges live in Test Events; Overview shows totals; dedup breakdown = event → View details)
- [ ] EMQ target: 8+ (lab site runs 9.2); "Update recommended" nags at that level = ignore
- [ ] Ads repointed off any legacy paths; URL template applied on every ad
GA4 / Google:
- [ ] gtag on all pages; `generate_lead` fired same-gate as the pixel with transaction_id = the Meta event id
- [ ] Enhanced conversions: `gtag('set','user_data',...)` with raw email/E.164 phone (Google hashes client-side)
- [ ] GA4 admin: generate_lead = Key Event · retention 14 months · User-provided data collection ON
- [ ] When Ads runs: link GA4, import the conversion, auto-tagging ON, enhanced conversions ON

# PART 6 · DATA STORES, ALERTS, VERIFICATION
Stores:
- [ ] DB is the master record: identity, full attribution, consent, per-system status columns, ghl_contact_id, event ids; dedup indexes on lower(email) + last-10 phone; stage-events table UNIQUE(lead,event)
- [ ] Sheet is a projection — upserted by lead id (one lead one row forever), written at an EXPLICIT row number, never `:append` (append drifts diagonally when table detection breaks — proven corruption), never hand-edited, rebuildable from DB
- [ ] Alert worker live; every alert name greppable in code; alert proof done (a real alert received)
Verification culture (non-negotiable):
- [ ] Automated gate suite walks the funnel like a visitor: routes · tagged walk → cookies → payload → DB → CAPI payload · one submit = one deduped event with the server's id · duplicate = suppressed but stored · failed conversion = alert + retry · thank-you reload = nothing · record in DB + CRM + sheet with statuses ok AND full CRM field mapping asserted BY VALUE · stages fire once each w/ values, repeat = no-op · hygiene grep (no test codes, no secret-shaped literals, no private keys)
- [ ] EVERY gate proven able to go RED via a break mode, output kept — a check that has only ever passed has never been tested
- [ ] Stub server records exact outbound payloads locally — assertions run on what actually left, not on intent
- [ ] Live acceptance: tagged walk on prod, cookies verified (probe with `Accept: text/html` — bare curl -I lies), ONE test lead max (each is a real counted platform event), verified in DB + CRM (open the contact, read the fields) + sheet + Events Manager, then deleted from ALL THREE
- [ ] Runtime claims get a browser tab; builds passing prove nothing

# PART 7 · SECURITY & OPS
- [ ] Secrets flow: vault → `wrangler secret put` (or equivalent). Never in chat, files, LLM context, or commits; hygiene gate greps for secret shapes
- [ ] Every webhook secret dedicated to its one endpoint; rotation = both sides in one operation
- [ ] API keys IP-restricted where the platform allows
- [ ] Fail closed: unconfigured secret = endpoint refuses, never open
- [ ] Preview deploy is default; prod deploy only with explicit owner approval; migrations applied deliberately
- [ ] New page rule: noindex prop + robots.txt path + smoke route + out of sitemap
- [ ] Test leads deleted from DB + CRM + sheet when done — they sit in pipelines looking like applicants
- [ ] Ops docs exist: rulebook (AGENTS.md), deploy runbook, evidence transcript, master reference — and the checklist doc wins when code disagrees with it

# PART 8 · NEVER COPY
- 14-second mobile LCP / 3.4MB pages / 147 scripts — their LTV covers it, yours doesn't
- Client-side-only conversion events — ad blockers eat them
- Two pixels firing the same event on one page (lead-marketplace pattern only)
- Consent granted by default with no visible choice
- 26 ad platforms wired at once — wire the one you're spending on
- Renamed stage events to dodge dedup
- A test_event_code anywhere near production config

---
*Standard: every site ships all applicable boxes, passes the gate suite green, has shown every gate red once, and survives one live acceptance walk — before it takes paid traffic.*
