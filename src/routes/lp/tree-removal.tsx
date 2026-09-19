import { createFileRoute } from "@tanstack/react-router";
import FunnelLayout from "@/components/site/FunnelLayout";
import QuoteForm from "@/components/site/QuoteForm";
import { IMAGES, PHONE, PHONE_HREF, SMS_HREF, PROJECTS } from "@/lib/content";
import { pageHead } from "@/lib/seo";

// Paid-traffic landing page, built to checklist Part 1:
//  - H1: third-person aggregate (never "you" — Meta personal-attribute filter),
//    timeframe + mechanism. No invented number; add a real one per client.
//  - pre-qualifying subhead, ≤5 outcome bullets, hedged verbs
//  - identical CTA block mid-page and bottom, no nav, no footer sitemap
//  - consent line at the contact step (inside QuoteForm)
// Ad-only: noindex, not linked from the organic site, not in any sitemap.
const BULLETS = [
  "A price from a photo, usually the same day",
  "Removal, stump, and haul-away on separate lines",
  "Every piece near the house roped and lowered",
  "Insured crew, certificate on request",
  "Wood hauled and lawn raked before the crew leaves",
];

const Cta = ({ id }: { id: string }) => (
  <div className="bg-white text-[var(--foreground)] p-6 md:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
    <h2
      className="text-[26px] leading-[1.05] font-bold uppercase"
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      See the local price
    </h2>
    <p className="text-base text-[#5d6862] mt-1 mb-5">Free, no obligation. Takes 30 seconds.</p>
    <QuoteForm
      idPrefix={id}
      showProjectFields={false}
      defaultServiceType="Tree Removal"
      buttonLabel="See my local price"
    />
  </div>
);

export const Route = createFileRoute("/lp/tree-removal")({
  head: () => {
    const h = pageHead({
      title: "Tree Removal Quotes From a Photo — Minneapolis–St. Paul",
      description:
        "Twin Cities homeowners are getting written tree removal prices from a phone photo, usually within 24 hours. Free, no obligation.",
      path: "/lp/tree-removal",
      image: IMAGES.removal,
    });
    return { ...h, meta: [...h.meta, { name: "robots", content: "noindex,nofollow" }] };
  },
  component: () => (
    <FunnelLayout>
      <section className="bg-[var(--primary)] text-white">
        <div className="max-w-[1120px] mx-auto px-5 md:px-7 py-9 md:py-14 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-9 md:gap-12 items-start">
          <div>
            <span
              className="inline-block bg-[var(--accent)] px-3 py-[7px] text-sm font-bold uppercase tracking-[0.16em]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Minneapolis–St. Paul homeowners
            </span>
            <h1
              className="text-[40px] md:text-[60px] leading-[0.98] font-bold uppercase mt-4 [text-wrap:balance]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Twin Cities homeowners are getting tree removal prices from a phone photo in under 24
              hours
            </h1>
            <p className="text-[19px] leading-[1.5] text-[#d3ded8] mt-4 max-w-[46ch]">
              For single-family homes in the metro with a dead, leaning, or storm-damaged tree. Not
              for utility line clearing or trees in the boulevard.
            </p>
            <ul className="mt-6 flex flex-col gap-2.5 text-[18px] text-[#e2ebe6]">
              {BULLETS.map((b) => (
                <li key={b} className="flex gap-2.5">
                  <span className="mt-[9px] w-2 h-2 bg-[var(--accent)] flex-none" />
                  {b}
                </li>
              ))}
            </ul>
            <p className="text-base text-[#9fb0a8] mt-6">
              Tree already on the house?{" "}
              <a href={PHONE_HREF} className="text-white font-semibold underline">
                Call {PHONE}
              </a>{" "}
              or{" "}
              <a href={SMS_HREF} className="underline">
                text a photo
              </a>
              .
            </p>
          </div>
          <Cta id="lp1" />
        </div>
      </section>

      <section className="max-w-[1120px] mx-auto px-5 md:px-7 py-12">
        <h2
          className="text-[30px] md:text-[40px] font-bold uppercase inline-block pb-[10px] border-b-[3px] border-[var(--accent)]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Recent removals around the metro
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {PROJECTS.filter((p) => p.service === "Tree removal")
            .slice(0, 3)
            .map((p) => (
              <div key={p.slug} className="bg-white border border-border">
                <div className="h-[190px] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.alt}
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-4">
                  <div
                    className="text-sm uppercase tracking-[0.14em] text-[var(--accent)]"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {p.city}
                  </div>
                  <h3
                    className="text-[21px] font-bold uppercase mt-1"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-base text-[#5d6862] mt-1">{p.meta}</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="bg-[var(--forest-dark)]">
        <div className="max-w-[560px] mx-auto px-5 py-12">
          <Cta id="lp2" />
        </div>
      </section>
    </FunnelLayout>
  ),
});
