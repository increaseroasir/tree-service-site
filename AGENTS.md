<!-- VIBE:BEGIN -->
> [!IMPORTANT]
> This project is connected to AI Studio. Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on AI Studio's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to AI Studio and show up in
> the editor, so keep the branch in a working state.
<!-- VIBE:END -->

# Rules for any agent working in this project

You are editing a direct-response tree service website template that gets
imported into GoHighLevel AI Studio and cloned per client. Read this whole file
before changing anything. When this file and the code disagree, this file wins.

## What this is

- **Stack:** the AI Studio `tanstack_start_ts` scaffold, unmodified: TanStack
  Start (React 19), Vite 8 via `@leadconnector/vite-tanstack-config`, Tailwind
  v4, SSR on every request. This branch was assembled ON TOP of a fresh AI
  Studio export and verified to build, typecheck (their strict tsconfig: 0
  errors), and run on that exact config.
- **Scaffold files — do not edit:** `vite.config.ts`, `package.json`,
  `tsconfig.json`, `src/server.ts`, `src/router.tsx`, `src/lib/error-*.ts`,
  `src/lib/vibe-error-reporting.ts`, `src/components/ui/*`. The site does not
  use the ui kit; it is left in place only because the scaffold ships it.
- **Two scaffold files carry one addition each — keep both halves:**
  `src/start.ts` (scaffold error + CSRF middleware, PLUS `attributionMiddleware`
  last in the array) and `src/routes/__root.tsx` (scaffold shell/error/404 and
  QueryClientProvider, PLUS the head tags, the `getPublicConfig` loader, and
  `<MetaPixel>`).
- **File naming is load-bearing.** The build blocks any import of a `server/`
  folder from browser-reachable code. Server functions live in
  `src/lib/*.functions.ts`; server-only code lives in `src/lib/*.server.ts`
  and may only be used inside server handlers. Never create `src/server/`.
- **Colors** are oklch values in `src/styles.css` and are used as
  `var(--primary)`, never `hsl(var(--primary))`.
- **Content lives in data, not JSX.** `src/lib/content.ts` (company, phone,
  images, routes, cities, jobs, home copy) and `src/lib/services.ts` (secondary
  service pages). Change copy there. Components read from it.
- **One form, one pipeline:** `src/components/site/QuoteForm.tsx` is the only
  lead form. It calls the `submitLead` server function (`src/lib/lead.functions.ts`);
  if that fetch fails it falls back to a native POST to `/api/lead`. Both end in
  `handleLead` (`src/lib/lead-core.server.ts`), the only place a lead leaves the
  site: CRM forward, Meta CAPI, alerts. Do not add a second form, a second
  pipeline, or any CRM/Meta call from the browser.
- **Tracking layout:** request middleware `src/lib/attribution.middleware.ts`
  (cookies on arrival) → `src/lib/attribution-core.ts` (shared pure logic) →
  `src/lib/meta.server.ts` (CAPI, the normalization source of truth) ↔
  `src/lib/pixel.ts` (browser half, mirrors that normalization) →
  `src/lib/alerts.server.ts`. SSR per request is required; never enable prerender.
- **Two surfaces:** the organic site (nav, footer, SEO pages) and the paid
  funnel (`/lp/*` + `/thank-you` on `FunnelLayout`: no nav, no sitemap, noindex).
  Ads point at `/lp/*`, never at the homepage.
- **Docs:** `docs/UNIVERSAL_SITE_MASTER_CHECKLIST.md` is the standard every site
  is graded against. `docs/CHECKLIST_STATUS.md` is the current grade. Update
  the status doc when you close or open a gap.

## Hard rules

1. **Never invent proof.** No fake reviews, ratings, license numbers, years in
   business, job counts, awards, or dollar prices. `REVIEWS` stays empty until a
   real client pastes real reviews. Trust claims in `TRUST_POINTS` must be true
   for the deployed company.
2. **Consent is one string in one file.** `src/lib/consent.ts` holds the
   sentence and the version. The checkbox label and the stored record are that
   same string. To change wording, bump `CONSENT_VERSION`. Never edit a version
   in place. The checkbox is never pre-checked.
3. **Attribution is write-once.** `src/lib/attribution.ts` sets `nt_lead` and
   `nt_attr_first` once and never overwrites them. Do not "fix" that.
4. **The form never shows success unless the request succeeded.** On any
   failure, keep the inputs and show the error. On placeholder CRM config, show
   "not connected" and do not post.
5. **No secrets in code, none in the browser.** `GHL_*`, `META_*`,
   `ALERT_WEBHOOK_URL` live in AI Studio Cloud → Secrets (or a local `.env`; see
   `.env.example`). Never prefix them `VITE_`. Server-only modules
   (every `src/lib/*.server.ts` file)
   may only be used inside server handlers — the build fails if one leaks into
   client code, and that failure is correct. The pixel id is the single public
   value and travels through `getPublicConfig()`.
6. **Conversion rules.** The server mints the event id. Pixel and CAPI share it.
   The browser fires only when `duplicate === false`. Nothing fires on
   thank-you. The event name is `Lead`; never rename it or invent variants.
   Never add a `test_event_code`. Never add a second pixel or a GHL-side pixel
   integration on top of this one.
7. **Prove changes to the lead path.** Run `scripts/stub-server.mjs`, submit
   once, read `scripts/stub-log.jsonl`, then rerun with `BREAK=crm` and
   `BREAK=capi`. A gate that has only passed has not been tested. Add the
   result to a new `docs/EVIDENCE_<date>.md`.
8. **Keep it fast.** No UI kits, no analytics or pixel scripts until the client
   is live and the checklist's Part 5 is being done deliberately. Images are
   WebP under 350 KB in `public/images/`. Below-fold sections use `.cv-auto`.
   Two font families, two weights each. If you add a dependency, justify it in
   the commit message.
9. **Every route gets `head()`** with title, description, and canonical via
   `pageHead()` in `src/lib/seo.ts`. New pages are `noindex` until launch is
   approved (root sets `robots: noindex` for the whole demo).
10. **Verify in a browser, not just a build.** Build passing proves nothing about
   hydration. After changing a route or the form, load it, check the console
   for errors, and submit the form once with placeholder config.

## Deploying for a real client (in order)

1. `src/lib/content.ts`: `COMPANY`, `PHONE`, `PHONE_HREF`, `SMS_HREF`,
   `TRUST_POINTS`, `CITIES`, `PROJECTS`, `REVIEWS`.
2. Replace every file in `public/images/` with the client's real photos, same
   filenames, WebP, 1200px wide (1600 for hero). `scripts/convert-images.py`
   shows the resize/encode settings.
3. Register a "Service Type" custom field in the client's GHL location. Add
   `GHL_TRACKING_ID`, `GHL_LOCATION_ID`, `GHL_PROJECT_ID`,
   `GHL_SERVICE_TYPE_FIELD_ID`, `META_PIXEL_ID`, `META_CAPI_ACCESS_TOKEN`, and
   `ALERT_WEBHOOK_URL` in AI Studio → Cloud → Secrets. Then do the live
   acceptance walk: one tagged visit, ONE test lead, confirm it in GHL (open
   the contact, read the notes), confirm one deduplicated Lead in Events
   Manager → Test Events, then delete the test lead everywhere.
4. `src/lib/consent.ts`: put the client's legal name in the sentence, bump the
   version.
5. `src/routes/privacy.tsx` and `terms.tsx`: replace the demo notice sections.
6. Remove `DemoBadge` from `PageLayout.tsx` and the demo paragraph in
   `Footer.tsx`. Remove `robots: noindex` in `src/routes/__root.tsx`.
7. Run the checklist. Anything in `docs/CHECKLIST_STATUS.md` marked ❌ that the
   client is paying for gets built before paid traffic, not after.

## Commands

```bash
bun install        # or npm install
bun run dev
bun run build      # or npm run build; regenerates src/routeTree.gen.ts
node scripts/stub-server.mjs   # local recorder for the lead path (see file header)
npx tsc --noEmit   # run AFTER build if you added routes
bun run lint
# Unit tests (25) live on the `main` branch of the source repo, where vitest is
# installed. Do not add test deps to this scaffold's package.json.
```

## What is deliberately not here

- No database. So: no DB-first write, no cross-device dedup (the 24h
  suppression is cookie-based), no stage push-back to Meta, no sheet. AI Studio
  has the server but no database; pick one, then write the lead at the marked
  line in `handleLead` (`src/lib/lead-core.server.ts`) BEFORE the CRM call.
- No survey / multi-step funnel. This is the organic website. A paid landing
  page for the same client should be a separate route built to Part 1 of the
  checklist in full (no nav, no footer sitemap).
