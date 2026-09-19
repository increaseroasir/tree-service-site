# Northline Tree Co. — tree service website template

Direct-response website template for a tree service company, built on the
same stack GoHighLevel AI Studio uses: **TanStack Start (React 19) + Vite +
Tailwind v4**. Every page is server-rendered per request (SSR), with a server-side
lead pipeline: attribution cookies on arrival, one lead endpoint, Meta pixel +
Conversions API sharing a server-minted event id, failure alerts, and a no-JS fallback.

The company, phone number, jobs, and photos are fictional placeholders. There
are no fabricated reviews, license numbers, ratings, or dollar prices.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home: quote form above the fold on desktop, emergency strip, services, proof, process, self-qualifier, CTA |
| `/free-quote` | Full quote form + emergency call box + text-a-photo box. `#removal`, `#stump`, `#cabling` etc. preselect the service |
| `/tree-removal` | Money page |
| `/tree-trimming`, `/stump-grinding` | Service pages |
| `/emergency-tree-service` | Phone-first storm page |
| `/lot-clearing`, `/cabling-bracing`, `/arborist-consultation`, `/commercial-tree-service` | Secondary service pages |
| `/tree-removal-cost` | "How much does tree removal cost" |
| `/tree-service/$city` | One page per service-area city, from `CITIES` in content.ts (8 cities) |
| `/recent-work`, `/recent-work/$slug` | Job gallery, one page per job (9) |
| `/what-to-expect` | Objection handling |
| `/lp/tree-removal` | **Paid-traffic landing page.** No nav, no sitemap, noindex. Point ads here |
| `/thank-you` | No-JS submit destination. Fires nothing |
| `/privacy`, `/terms` | Reflect what the site actually collects |
| `POST /api/lead` | Native form fallback, 303 to `/thank-you` |

## Speed

- SSR on every request. Prerender is off on purpose: the request middleware and the secrets-backed pixel id need a live server.
- Home HTML is ~10 KB gzipped. Shared JS is React 19 + TanStack Router/Start (~127 KB gz), loaded once and cached; each route's own chunk is 1–6 KB gz.
- No UI library. The shadcn/Radix kit from the original template is gone.
- Two font families, two weights each, `preconnect` + `display=swap`, no `@import` in CSS.
- Hero image `fetchpriority="high"`; everything below the fold `loading="lazy" decoding="async"` with width/height set.
- Below-fold sections use `content-visibility: auto` (`.cv-auto`).
- Per-route `<title>`, description, canonical, Open Graph, and LocalBusiness JSON-LD on the home page.

## Deploying for a real company

Edit `src/lib/content.ts`:

1. `COMPANY` (name, metro, url, hours), `PHONE`, `PHONE_HREF`, `SMS_HREF`.
2. `IMAGES` — replace `public/images/*` with real job photos. Biggest conversion lever on the site.
3. `TRUST_POINTS` — must be true for the company (insurance, certification).
4. `REVIEWS` — paste real reviews; the section renders only when non-empty.
5. `CITIES` — the service-area pages. Minnesota facts (oak wilt April–July, boulevard trees) are regional; swap for the new metro.
6. `PROJECTS` — replace the illustrative jobs.

`src/lib/services.ts` holds the copy for the seven secondary service pages.

Leads go through the `submitLead` server function in `src/lib/lead.functions.ts`. Set `GHL_TRACKING_ID`, `GHL_LOCATION_ID`, `GHL_PROJECT_ID`, and `GHL_SERVICE_TYPE_FIELD_ID` as server secrets (AI Studio Cloud → Secrets, or `.env` locally). They never reach the browser. Consent text lives in `src/lib/consent.ts`; attribution cookies in `src/lib/attribution.ts`.

Before launch: remove `DemoBadge` from `PageLayout.tsx`, the demo disclaimer in `Footer.tsx`, and the `robots: noindex` meta in `src/routes/__root.tsx`.

## Scripts

```bash
npm install
npm run dev        # http://localhost:8080
npm run build      # prerenders to dist/client
npm run lint
npm test
npx tsc --noEmit
node scripts/make-placeholders.mjs   # regenerate placeholder SVGs
```

The lockfile is not tracked (template policy).
