import { Link } from "react-router-dom";
import EstimateForm from "@/components/fence/EstimateForm";
import { ROUTES } from "@/lib/content";

const CtaSection = () => (
  <section id="estimate" className="bg-[hsl(var(--forest-dark))] text-white">
    <div className="max-w-[1240px] mx-auto px-5 md:px-7 pt-9 pb-9 md:py-[76px] md:grid md:grid-cols-2 md:gap-[60px] md:items-center">
      <div>
        <h2
          className="text-[34px] md:text-[48px] leading-[1.02] font-bold uppercase"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Ready to get started?
        </h2>
        <p className="text-[17px] md:text-[19px] leading-[1.5] md:leading-[1.55] text-[#b8c2bc] mt-[14px] md:mt-[18px]">
          Free, no-pressure estimates seven days a week. Most yards take about
          45 minutes to measure.
        </p>
        <div className="border-l-[3px] border-[hsl(var(--accent))] pl-[18px] md:pl-7 mt-6 md:mt-0">
          <div
            className="text-sm md:text-base uppercase tracking-[0.18em] text-[hsl(var(--cream))]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Your estimate includes
          </div>
          <div className="flex flex-col gap-[10px] md:gap-3 mt-3 md:mt-4 text-base md:text-[18px] text-[#dbe2dd]">
            <span>Property-line walkthrough and exact footage</span>
            <span>Material and height options with samples in hand</span>
            <span>A written per-foot price for your yard</span>
            <span>Permit and HOA paperwork handled by us</span>
          </div>
        </div>
        <p className="text-sm text-[#9fb0a8] mt-6">
          Want to prepare first?{" "}
          <Link to={ROUTES.beforeEstimate} className="underline">
            Read our before-your-estimate guide
          </Link>
          .
        </p>
      </div>

      <div
        id="estimate-form"
        className="bg-white text-[hsl(var(--foreground))] p-6 md:p-8 mt-6 md:mt-0 scroll-mt-24"
      >
        <h3
          className="text-2xl md:text-[30px] font-bold uppercase mb-1"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Request an estimate
        </h3>
        <p className="text-base text-[#5d6862] mb-5">
          Enter your name, phone number and email to request an estimate.
        </p>
        <EstimateForm idPrefix="cta" showProjectFields={false} />
      </div>
    </div>
  </section>
);

export default CtaSection;
