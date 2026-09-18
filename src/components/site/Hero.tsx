import { Link } from "react-router-dom";
import QuoteForm from "@/components/site/QuoteForm";
import {
  IMAGES,
  PHONE,
  PHONE_HREF,
  SMS_HREF,
  ROUTES,
  TRUST_POINTS,
} from "@/lib/content";

const TrustRow = ({ className = "" }: { className?: string }) => (
  <ul
    className={
      "flex flex-wrap gap-x-4 gap-y-1.5 text-[15px] uppercase tracking-[0.08em] text-[#cfd6d1] " +
      className
    }
    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
  >
    {TRUST_POINTS.map((t) => (
      <li key={t} className="flex items-center gap-1.5">
        <span className="inline-block w-1.5 h-1.5 bg-[hsl(var(--accent))]" />
        {t}
      </li>
    ))}
  </ul>
);

const Hero = () => (
  <section className="bg-[hsl(var(--primary))]">
    {/* Mobile: short image, headline, two CTAs. Form is one tap away via the
        sticky bottom bar and the CTA section below. */}
    <div className="md:hidden">
      <div className="h-[220px] overflow-hidden">
        <img
          src={IMAGES.hero}
          alt="Crew removing a large tree next to a house"
          className="w-full h-full object-cover block"
          loading="eager"
        />
      </div>
      <div className="px-5 pt-6 pb-8">
        <span
          className="inline-block bg-[hsl(var(--accent))] text-white px-3 py-[7px] text-sm font-bold uppercase tracking-[0.16em]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Tree removal · trimming · stumps
        </span>
        <h1
          className="text-white text-[42px] leading-[0.98] font-bold uppercase mt-4"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Dangerous tree? We'll take it down and haul it away.
        </h1>
        <p className="text-[18px] leading-[1.45] text-[#d3ded8] mt-[14px]">
          Free written quote, usually within 24 hours. Insured crews across the
          Minneapolis–St. Paul metro. Cleanup included.
        </p>
        <Link
          to={ROUTES.contact}
          className="block text-center bg-[hsl(var(--accent))] text-white text-xl font-bold uppercase tracking-[0.06em] py-[17px] px-5 mt-[22px] hover:bg-[#8f4e14] transition-colors"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Get my free quote
        </Link>
        <a
          href={PHONE_HREF}
          className="block text-center border-2 border-[#6d8579] text-white text-xl font-bold uppercase tracking-[0.06em] py-[15px] px-5 mt-3 hover:border-white transition-colors"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Call {PHONE}
        </a>
        <a
          href={SMS_HREF}
          className="block text-center text-[#d3ded8] underline text-base mt-4"
        >
          Or text us a photo of the tree for a fast ballpark
        </a>
        <TrustRow className="mt-5" />
      </div>
    </div>

    {/* Desktop: headline left, quote form right — the form is above the fold. */}
    <div className="hidden md:block relative">
      <img
        src={IMAGES.hero}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        loading="eager"
      />
      <div className="relative max-w-[1240px] mx-auto px-7 py-16 grid grid-cols-[1.15fr_0.85fr] gap-14 items-center min-h-[600px]">
        <div>
          <span
            className="inline-block bg-[hsl(var(--accent))] text-white px-[14px] py-2 text-base font-bold uppercase tracking-[0.16em]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Tree removal · trimming · stump grinding
          </span>
          <h1
            className="text-white text-[68px] leading-[0.98] font-bold uppercase mt-[22px] tracking-[0.01em] [text-wrap:balance]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Dangerous tree?
            <br />
            We'll take it down and haul it away.
          </h1>
          <p className="text-[21px] leading-[1.5] text-[#d3ded8] mt-5 max-w-[34ch]">
            Free written quote, usually within 24 hours. Insured crews across
            the Minneapolis–St. Paul metro. Every job ends with the wood hauled
            and the lawn raked.
          </p>
          <div className="flex gap-[14px] mt-8 flex-wrap items-center">
            <a
              href={PHONE_HREF}
              className="bg-white text-[hsl(var(--primary))] text-xl font-bold uppercase tracking-[0.08em] px-[30px] py-[18px] hover:bg-[hsl(var(--cream))] transition-colors"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Call {PHONE}
            </a>
            <a
              href={SMS_HREF}
              className="border-2 border-[#6d8579] text-white text-xl font-bold uppercase tracking-[0.08em] px-7 py-4 hover:border-white transition-colors"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Text a photo
            </a>
          </div>
          <TrustRow className="mt-7" />
          <p className="text-base text-[#9fb0a8] mt-4">
            Wondering what it'll cost?{" "}
            <Link to={ROUTES.cost} className="text-[#9fb0a8] underline">
              See what moves the price
            </Link>
          </p>
        </div>

        <div
          id="hero-form"
          className="bg-white text-[hsl(var(--foreground))] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
        >
          <h2
            className="text-[28px] leading-[1.05] font-bold uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Get your free quote
          </h2>
          <p className="text-base text-[#5d6862] mt-1 mb-5">
            Takes 30 seconds. We call you back — no obligation.
          </p>
          <QuoteForm idPrefix="hero" showProjectFields={false} />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
