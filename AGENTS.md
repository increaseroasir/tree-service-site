# AGENTS.md — rules for any agent working in this repo

You are editing a direct-response tree service website template that gets
imported into GoHighLevel AI Studio and cloned per client. Read this whole file
before changing anything. When this file and the code disagree, this file wins.

## What this is

- **Stack:** TanStack Start (React 19) + Vite 7 + Tailwind v4. File-based routes
  in `src/routes/`. Every route is prerendered to static HTML at build time
  (`prerender.enabled` in `vite.config.ts`). There is no request-time server in
  the deployed output.
- **Content lives in data, not JSX.** `src/lib/content.ts` (company, phone,
  images, routes, cities, jobs, home copy) and `src/lib/services.ts` (secondary
  service pages). Change copy there. Components read from it.
- **One form:** `src/components/site/QuoteForm.tsx` is the only lead form.
  Every page renders it. It posts to GoHighLevel's external-tracking endpoint
  via `src/lib/tracking.ts`. Do not add a second form or a second submit path.
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
5. **No secrets in code.** CRM ids come from `.env` (see `.env.example`). Never
   commit `.env`. Never paste ids into `tracking.ts`.
6. **Keep it fast.** No UI kits, no analytics or pixel scripts until the client
   is live and the checklist's Part 5 is being done deliberately. Images are
   WebP under 350 KB in `public/images/`. Below-fold sections use `.cv-auto`.
   Two font families, two weights each. If you add a dependency, justify it in
   the commit message.
7. **Every route gets `head()`** with title, description, and canonical via
   `pageHead()` in `src/lib/seo.ts`. New pages are `noindex` until launch is
   approved (root sets `robots: noindex` for the whole demo).
8. **Verify in a browser, not just a build.** Build passing proves nothing about
   hydration. After changing a route or the form, load it, check the console
   for errors, and submit the form once with placeholder config.

## Deploying for a real client (in order)

1. `src/lib/content.ts`: `COMPANY`, `PHONE`, `PHONE_HREF`, `SMS_HREF`,
   `TRUST_POINTS`, `CITIES`, `PROJECTS`, `REVIEWS`.
2. Replace every file in `public/images/` with the client's real photos, same
   filenames, WebP, 1200px wide (1600 for hero). `scripts/convert-images.py`
   shows the resize/encode settings.
3. Register a "Service Type" custom field in the client's GHL location. Put its
   id and the tracking/location/project ids in `.env`.
4. `src/lib/consent.ts`: put the client's legal name in the sentence, bump the
   version.
5. `src/routes/privacy.tsx` and `terms.tsx`: replace the demo notice sections.
6. Remove `DemoBadge` from `PageLayout.tsx` and the demo paragraph in
   `Footer.tsx`. Remove `robots: noindex` in `src/routes/__root.tsx`.
7. Run the checklist. Anything in `docs/CHECKLIST_STATUS.md` marked ❌ that the
   client is paying for gets built before paid traffic, not after.

## Commands

```bash
npm install
npm run dev        # http://localhost:8080
npm run build      # prerenders to dist/client, regenerates src/routeTree.gen.ts
npx tsc --noEmit   # run AFTER build if you added routes
npm run lint
npm test
```

## What is deliberately not here

- No server-side lead endpoint, database, event ids, or Meta CAPI. The
  checklist requires them for paid traffic. They need a real host with a
  server (the prerendered output has none). That is phase 2 and needs a
  decision on where the database lives before anyone starts it.
- No survey / multi-step funnel. This is the organic website. A paid landing
  page for the same client should be a separate route built to Part 1 of the
  checklist in full (no nav, no footer sitemap).
