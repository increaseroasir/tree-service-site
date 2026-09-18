import { Link } from "react-router-dom";
import PageLayout from "@/components/fence/PageLayout";
import {
  IMAGES,
  PHONE,
  PHONE_HREF,
  ROUTES,
  PREP_STEPS,
  PREP_FAQ,
} from "@/lib/content";

const PREP_INCLUDES = [
  "Property-line walkthrough and exact footage",
  "Material and height options with samples in hand",
  "A written per-foot price for your yard",
  "Permit and HOA paperwork handled by us",
];

const BeforeYourEstimate = () => (
  <PageLayout>
    <section className="bg-[hsl(150_18%_18%)]">
      <div className="max-w-[1080px] mx-auto px-5 md:px-7 pt-8 md:pt-14 pb-[60px]">
        <span
          className="inline-block bg-[hsl(var(--accent))] text-white px-3.5 py-2 text-[15px] font-bold uppercase tracking-[0.16em]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Before your estimate
        </span>
        <h1
          className="text-white text-[44px] md:text-[70px] leading-[0.98] font-bold uppercase mt-5 max-w-[22ch]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          How to prepare for your estimate
        </h1>
        <p className="text-[20px] leading-[1.55] text-[#d3ded8] mt-[18px] max-w-[60ch]">
          Take two minutes to read through this page before we arrive — it
          covers exactly what happens at the visit and how our crews protect
          your property on every job. This is preparation information only; no
          appointment is booked until you confirm a time with us.
        </p>
        <div className="mt-[34px] overflow-hidden">
          <img
            src={IMAGES.stepWalkLine}
            alt="Estimator walking a backyard property line with a homeowner"
            className="w-full h-[300px] md:h-[440px] object-cover block"
            loading="eager"
          />
        </div>
      </div>
    </section>

    <section className="bg-white border-b border-border">
      <div className="max-w-[1080px] mx-auto px-5 md:px-7 py-9 grid grid-cols-1 md:grid-cols-2 gap-9 items-start">
        <div className="overflow-hidden">
          <img
            src={IMAGES.stepEstimate}
            alt="Estimator reviewing a fence quote on a tablet"
            className="w-full h-[240px] object-cover block"
            loading="lazy"
          />
        </div>
        <div>
          <div
            className="text-[15px] uppercase tracking-[0.18em] text-[hsl(var(--accent))]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Your estimator
          </div>
          <h2
            className="text-[30px] md:text-[36px] font-bold uppercase mt-2"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            What to expect at the visit
          </h2>
          <p className="text-[18px] leading-[1.6] text-[#454f4a] mt-3 max-w-[70ch]">
            The estimator walks your property line with you, measures exact
            footage, checks grade and gate access, and leaves a written per-foot
            price before leaving. We carry proof of insurance on request before
            any work begins.
          </p>
          <div className="flex gap-2.5 flex-wrap mt-[18px]">
            {[
              "Own crews, no subs",
              "Utility locate called in",
              "On-time visits",
              "No obligation",
            ].map((item) => (
              <span
                key={item}
                className="border border-[#d8d3c8] px-3.5 py-2 text-base uppercase tracking-[0.06em] text-[hsl(var(--primary))]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="max-w-[1080px] mx-auto px-5 md:px-7 pt-16">
      <h2
        className="text-[32px] md:text-[44px] font-bold uppercase"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        What happens next
      </h2>
      <p className="text-[18px] text-[#5d6862] mt-2">
        Four steps, no surprises.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-7">
        {PREP_STEPS.map((step) => (
          <div
            key={step.title}
            className="bg-white border border-border p-6 md:p-7"
          >
            <div
              className="text-[15px] uppercase tracking-[0.18em] text-[hsl(var(--accent))]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {step.label}
            </div>
            <h3
              className="text-[28px] font-bold uppercase mt-1.5 mb-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {step.title}
            </h3>
            <p className="text-[17px] leading-[1.55] text-[#5d6862]">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </section>

    <section className="max-w-[1080px] mx-auto px-5 md:px-7 pt-16">
      <h2
        className="text-[32px] md:text-[44px] font-bold uppercase"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        Frequently asked questions
      </h2>
      <p className="text-[18px] text-[#5d6862] mt-2">
        Answers to what most homeowners ask before their estimate.
      </p>
      <div className="flex flex-col gap-px bg-border mt-6 border border-border">
        {PREP_FAQ.map((item) => (
          <div key={item.q} className="bg-white p-6 md:p-7">
            <h3
              className="text-[24px] md:text-[26px] font-bold uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {item.q}
            </h3>
            <p className="text-[17px] leading-[1.6] text-[#5d6862] mt-2">
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </section>

    <section className="max-w-[1080px] mx-auto px-5 md:px-7 py-16">
      <div className="bg-[hsl(var(--primary))] text-white p-7 md:p-11 flex flex-col md:flex-row md:items-center md:justify-between gap-8 flex-wrap">
        <div className="max-w-[56ch]">
          <h2
            className="text-[32px] md:text-[40px] leading-[1.02] font-bold uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Ready to request an estimate?
          </h2>
          <p className="text-[18px] leading-[1.55] text-[#d3ded8] mt-3">
            Submitting a request starts the conversation — nothing is booked
            until you confirm a time with us.
          </p>
          <ul className="mt-5 flex flex-col gap-2 text-[#dbe2dd]">
            {PREP_INCLUDES.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <Link
            to={ROUTES.contact}
            className="bg-white text-[hsl(var(--primary))] text-xl font-bold uppercase tracking-[0.06em] px-7 py-4 text-center"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Request an estimate
          </Link>
          <a
            href={PHONE_HREF}
            className="border-2 border-[#6d8579] text-white text-xl font-bold uppercase tracking-[0.06em] px-6 py-[14px] text-center"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default BeforeYourEstimate;
