import { Link } from "react-router-dom";
import QuoteForm from "@/components/site/QuoteForm";
import { PHONE, PHONE_HREF, ROUTES } from "@/lib/content";

const CtaSection = () => (
  <section id="quote" className="bg-[hsl(var(--forest-dark))] text-white">
    <div className="max-w-[1240px] mx-auto px-5 md:px-7 pt-9 pb-9 md:py-[76px] md:grid md:grid-cols-2 md:gap-[60px] md:items-center">
      <div>
        <h2
          className="text-[34px] md:text-[48px] leading-[1.02] font-bold uppercase"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Get the tree handled this week
        </h2>
        <p className="text-[17px] md:text-[19px] leading-[1.5] md:leading-[1.55] text-[#b8c2bc] mt-[14px] md:mt-[18px]">
          Fill this out and a person from our office calls you back. Most
          quotes are in your inbox within 24 hours. Emergencies get a call
          within minutes.
        </p>
        <div className="border-l-[3px] border-[hsl(var(--accent))] pl-[18px] md:pl-7 mt-6">
          <div
            className="text-sm md:text-base uppercase tracking-[0.18em] text-[hsl(var(--cream))]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Every quote includes
          </div>
          <div className="flex flex-col gap-[10px] md:gap-3 mt-3 md:mt-4 text-base md:text-[18px] text-[#dbe2dd]">
            <span>A written, itemized price — removal, stump, haul-away</span>
            <span>An honest answer on whether the tree can be saved</span>
            <span>A real schedule window, not "sometime next month"</span>
            <span>Cleanup included. No hidden disposal fees.</span>
          </div>
        </div>
        <p className="text-base text-[#9fb0a8] mt-6">
          Rather talk to someone?{" "}
          <a href={PHONE_HREF} className="text-white font-semibold underline">
            Call {PHONE}
          </a>
          . Want to know what happens first?{" "}
          <Link to={ROUTES.whatToExpect} className="underline">
            Read what to expect
          </Link>
          .
        </p>
      </div>

      <div
        id="quote-form"
        className="bg-white text-[hsl(var(--foreground))] p-6 md:p-8 mt-6 md:mt-0 scroll-mt-24"
      >
        <h3
          className="text-2xl md:text-[30px] font-bold uppercase mb-1"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Request your free quote
        </h3>
        <p className="text-base text-[#5d6862] mb-5">
          Name, phone, and what you need. That's it.
        </p>
        <QuoteForm idPrefix="cta" showProjectFields={false} />
      </div>
    </div>
  </section>
);

export default CtaSection;
