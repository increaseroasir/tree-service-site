import { Link } from "react-router-dom";
import { ROUTES } from "@/lib/content";

// Sweepstakes removed per requirements. Replaced with a helpful planning CTA.
const Giveaway = () => (
  <section className="bg-[hsl(var(--primary))] text-white">
    <div className="max-w-[1240px] mx-auto px-5 md:px-7 py-6 md:py-[34px] flex flex-col md:flex-row md:items-center md:justify-between gap-[14px] md:gap-[30px] md:flex-wrap">
      <span
        className="text-2xl md:text-[28px] font-semibold uppercase leading-[1.05] md:tracking-[0.03em]"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        Not sure what you need? Read our before-your-estimate guide
      </span>
      <Link
        to={ROUTES.beforeEstimate}
        className="text-center bg-white text-[hsl(var(--primary))] text-[18px] font-bold uppercase tracking-[0.08em] py-[14px] px-5 md:px-6 hover:bg-[hsl(var(--cream))] transition-colors"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        Read the guide
      </Link>
    </div>
  </section>
);

export default Giveaway;
