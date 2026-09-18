import { Link } from "react-router-dom";
import { IMAGES, PHONE, PHONE_HREF, ROUTES } from "@/lib/content";

const Hero = () => (
  <section className="bg-[hsl(var(--primary))]">
    {/* Mobile: stacked image + text */}
    <div className="md:hidden">
      <div className="h-[280px] overflow-hidden">
        <img
          src={IMAGES.hero}
          alt="New cedar privacy fence along a backyard lawn"
          className="w-full h-full object-cover block"
          loading="eager"
        />
      </div>
      <div className="px-5 pt-7 pb-8">
        <span
          className="inline-block bg-[hsl(var(--accent))] text-white px-3 py-[7px] text-sm font-bold uppercase tracking-[0.16em]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Fence installation
        </span>
        <h1
          className="text-white text-[46px] leading-[0.98] font-bold uppercase mt-4"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Cedar, vinyl &amp; aluminum fences in Minneapolis
        </h1>
        <p className="text-[18px] leading-[1.45] text-[#d3ded8] mt-[14px]">
          Wood, vinyl, aluminum and chain link — built by our own crews, with
          posts set below the frost line.
        </p>
        <p className="text-[15px] text-[#9fb0a8] mt-3">
          Free, no-pressure estimates.{" "}
          <Link to={ROUTES.cost} className="text-[#9fb0a8] underline">
            See cost factors
          </Link>
        </p>
        <Link
          to={ROUTES.contact}
          className="block text-center bg-[hsl(var(--accent))] text-white text-xl font-bold uppercase tracking-[0.06em] py-[17px] px-5 mt-[22px] hover:bg-[#8f4e14] transition-colors"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Schedule my free estimate
        </Link>
        <a
          href={PHONE_HREF}
          className="block text-center border-2 border-[#6d8579] text-white text-xl font-bold uppercase tracking-[0.06em] py-[15px] px-5 mt-3 hover:border-white transition-colors"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Call {PHONE}
        </a>
      </div>
    </div>

    {/* Desktop: split image / text */}
    <div className="hidden md:grid grid-cols-2 items-stretch min-h-[560px]">
      <div className="overflow-hidden min-h-[560px]">
        <img
          src={IMAGES.hero}
          alt="New cedar privacy fence along a backyard lawn"
          className="w-full h-full min-h-[560px] object-cover block"
          loading="eager"
        />
      </div>
      <div className="px-[72px] py-16 flex flex-col justify-center items-start">
        <span
          className="inline-block bg-[hsl(var(--accent))] text-white px-[14px] py-2 text-base font-bold uppercase tracking-[0.16em]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Fence installation
        </span>
        <h1
          className="text-white text-[76px] leading-[0.98] font-bold uppercase mt-[22px] tracking-[0.01em] [text-wrap:balance]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Cedar, vinyl &amp; aluminum
          <br />
          fences in Minneapolis
        </h1>
        <p className="text-[21px] leading-[1.5] text-[#d3ded8] mt-5 max-w-[30ch]">
          Wood, vinyl, aluminum and chain link — built by our own crews, with
          posts set below the frost line.
        </p>
        <p className="text-base text-[#9fb0a8] mt-[14px]">
          Free, no-pressure estimates.{" "}
          <Link to={ROUTES.cost} className="text-[#9fb0a8] underline">
            See cost factors
          </Link>
        </p>
        <div className="flex gap-[14px] mt-8 flex-wrap">
          <Link
            to={ROUTES.contact}
            className="bg-[hsl(var(--accent))] text-white text-xl font-bold uppercase tracking-[0.08em] px-[30px] py-[18px] hover:bg-[#8f4e14] transition-colors"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Schedule my free estimate
          </Link>
          <a
            href={PHONE_HREF}
            className="border-2 border-[#6d8579] text-white text-xl font-bold uppercase tracking-[0.08em] px-7 py-4 hover:border-white transition-colors"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Call {PHONE}
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
