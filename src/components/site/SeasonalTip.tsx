import { Link } from "@tanstack/react-router";
import { MAIN_CITY_SLUG, ROUTES } from "@/lib/content";

// Local-expertise banner. Oak wilt risk window per Minnesota DNR: high
// April–July. Demonstrates the company knows the region without inventing
// a claim about itself.
const SeasonalTip = () => (
  <section className="bg-[var(--primary)] text-white cv-auto">
    <div className="max-w-[1240px] mx-auto px-5 md:px-7 py-6 md:py-[34px] flex flex-col md:flex-row md:items-center md:justify-between gap-[14px] md:gap-[30px] md:flex-wrap">
      <div>
        <div
          className="text-sm uppercase tracking-[0.18em] text-[var(--cream)]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Minnesota tree tip
        </div>
        <span
          className="block text-2xl md:text-[28px] font-semibold uppercase leading-[1.05] md:tracking-[0.03em] mt-1"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Don't prune oaks April through July. That's how oak wilt spreads.
        </span>
        <p className="text-[#d3ded8] text-base mt-2 max-w-[70ch]">
          We schedule oak work for November–March. If a company offers to trim your oak in June,
          that tells you something.
        </p>
      </div>
      <Link
        to={ROUTES.city}
        params={{ city: MAIN_CITY_SLUG }}
        className="text-center bg-white text-[var(--primary)] text-[18px] font-bold uppercase tracking-[0.08em] py-[14px] px-5 md:px-6 hover:bg-[var(--cream)] transition-colors"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        More local tree rules
      </Link>
    </div>
  </section>
);

export default SeasonalTip;
