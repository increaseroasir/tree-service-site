import { Link } from "react-router-dom";
import { Wordmark } from "@/components/site/Header";
import {
  COMPANY,
  PHONE,
  PHONE_HREF,
  FOOTER_COLUMNS,
  ROUTES,
} from "@/lib/content";

const Footer = () => (
  <footer className="bg-[hsl(var(--forest-dark))] text-[#98a49d]">
    <div className="max-w-[1240px] mx-auto px-5 md:px-7 pt-[34px] md:pt-[60px] pb-[30px] md:grid md:grid-cols-[1.2fr_1fr_1fr] md:gap-10">
      <div>
        <Wordmark light />
        <p className="text-base leading-[1.6] mt-4 max-w-[34ch]">
          Tree removal, trimming, stump grinding, and 24/7 storm response
          across the {COMPANY.metro}. Our own insured crews.
        </p>
        <a
          href={PHONE_HREF}
          className="block text-[22px] md:text-2xl text-white mt-[18px]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {PHONE}
        </a>

        {/* Mobile link columns */}
        <div className="grid grid-cols-2 gap-6 mt-[26px] md:hidden">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <div
                className="text-sm uppercase tracking-[0.18em] text-white"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {col.heading}
              </div>
              <div className="flex flex-col gap-2 mt-3 text-[15px]">
                {col.links.map((l) => (
                  <Link key={l.label} to={l.href} className="text-[#98a49d]">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop link columns */}
      {FOOTER_COLUMNS.map((col) => (
        <div key={col.heading} className="hidden md:block">
          <div
            className="text-[15px] uppercase tracking-[0.18em] text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {col.heading}
          </div>
          <div className="flex flex-col gap-[9px] mt-[14px] text-base">
            {col.links.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                className="text-[#98a49d] hover:text-[hsl(var(--cream))] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="max-w-[1240px] mx-auto px-5 md:px-7 pb-[30px] md:pb-[44px]">
      <p className="text-xs md:text-[13px] leading-[1.6] text-[#6f7c75] mb-3 md:mb-[14px] border-t border-[#2f3833] pt-[18px] md:pt-[22px]">
        {COMPANY.name} is a fictional demo website created for design and
        layout demonstration. It is not a real contractor. No job is booked by
        submitting a form; a follow-up call is required to confirm any
        appointment. Pricing shown anywhere on this site is illustrative only
        and not a quote. Insurance and certification statements must be
        verified for any real company before launch.
      </p>
      <div className="flex flex-col md:flex-row md:justify-between gap-2 md:gap-5 text-xs md:text-[13px] text-[#6f7c75]">
        <span>©2026 {COMPANY.name} — Demo site.</span>
        <Link to={ROUTES.home} className="hover:text-[hsl(var(--cream))]">
          Back to home
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
