# Northline Tree Co. — tree service website template

Direct-response website template for a tree service company. React + TypeScript
+ Vite + Tailwind, built on the GoHighLevel "vibe" template and wired to the
LeadConnector external-tracking endpoint for form leads.

The company, phone number, jobs, and photos are fictional placeholders. There
are no fabricated reviews, license numbers, ratings, or dollar prices.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home: form above the fold on desktop, emergency strip, services, proof, process, self-qualifier, CTA |
| `/free-quote` | Full quote form + emergency call box + text-a-photo box. `#removal`, `#stump` etc. preselect the service |
| `/tree-removal` | Money page |
| `/tree-trimming` | Service page |
| `/stump-grinding` | Service page |
| `/emergency-tree-service` | Phone-first storm page |
| `/tree-removal-cost` | "How much does tree removal cost" — factors, relative bands, itemized-quote pitch |
| `/tree-service-minneapolis-mn` | Location page with real regional rules (oak wilt window, boulevard trees) |
| `/recent-work`, `/recent-work/:slug` | Job gallery |
| `/what-to-expect` | Objection handling |

## Deploying for a real company

Edit `src/lib/content.ts`:

1. `COMPANY`, `PHONE`, `PHONE_HREF`, `SMS_HREF`
2. `IMAGES` — replace every `public/images/*.svg` placeholder with a real job photo. This is the biggest conversion lever.
3. `TRUST_POINTS` — must be true for the company (insurance, certification).
4. `REVIEWS` — paste real reviews; the section renders only when non-empty.
5. `SERVICE_AREAS`, `MSP_*` — swap the metro. The Minneapolis facts (oak wilt April–July, Park Board boulevard trees) are Minnesota-specific.
6. `PROJECTS` — replace the illustrative jobs with real ones.

Edit `src/lib/tracking.ts`: `CRM_CONFIG` (tracking id, location id, project id) and re-register the "Service Type" custom field for the new location.

Remove `DemoBadge` from `PageLayout.tsx` and the demo disclaimer in `Footer.tsx`, and drop `noindex` from `index.html`.

## Scripts

```bash
npm install
npm run dev        # http://localhost:8080
npm run build
npm run lint
npm test
npx tsc --noEmit -p tsconfig.app.json
node scripts/make-placeholders.mjs   # regenerate placeholder SVGs
```

This repository does not track `package-lock.json`.
