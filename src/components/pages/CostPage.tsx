import { Link } from "@tanstack/react-router";
import PageLayout from "@/components/site/PageLayout";
import QuoteForm from "@/components/site/QuoteForm";
import {
  PHONE,
  PHONE_HREF,
  SMS_HREF,
  ROUTES,
  COST_FACTORS,
  ILLUSTRATIVE_RANGES,
  COST_FAQ,
} from "@/lib/content";

const INCLUDED = [
  "Free written quote, itemized line by line",
  "Every limb rigged and lowered near structures",
  "Brush chipped, wood hauled, lawn raked",
  "Utility locate before any stump grinding",
  "Certificate of insurance on request",
];

const CostPage = () => (
  <PageLayout>
    <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-3.5 text-sm text-[#8e8878]">
      <Link to={ROUTES.home} className="text-[#8e8878]">
        Home
      </Link>{" "}
      / <span className="text-[#5d6862]">Tree removal cost</span>
    </div>

    <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-5">
      <div
        className="text-[15px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--accent))]"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        Cost guide · illustrative only
      </div>
      <h1
        className="text-[38px] md:text-[62px] leading-[1] font-bold uppercase mt-3 max-w-[26ch] [text-wrap:balance]"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        How much does tree removal cost?
      </h1>
      <p className="text-[19px] leading-[1.55] text-[#454f4a] mt-4 max-w-[66ch]">
        It depends on six things, and most of them you can see from your
        driveway. Below is what moves the number so you know what you're
        paying for and can spot a quote that's missing something. For your
        actual price,{" "}
        <a href={SMS_HREF} className="underline text-[hsl(var(--primary))]">
          text us a photo
        </a>{" "}
        — it's free and usually same-day.
      </p>
    </div>

    <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-8">
      <div className="bg-[hsl(var(--primary))] text-white grid grid-cols-2 md:grid-cols-4">
        {ILLUSTRATIVE_RANGES.map((r, i) => (
          <div
            key={r.material}
            className={
              "p-5 md:p-6 " +
              (i < ILLUSTRATIVE_RANGES.length - 1
                ? "border-b md:border-b-0 md:border-r border-[#2c6650]"
                : "")
            }
          >
            <div
              className="text-[26px] md:text-[34px] font-bold text-[hsl(var(--accent))]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {r.perFoot}
            </div>
            <div className="text-[15px] text-[#c3d6cc]">{r.material}</div>
            <div className="text-[13px] text-[#9fb0a8]">{r.note}</div>
          </div>
        ))}
      </div>
      <p className="text-[15px] leading-[1.6] text-[#8e8878] mt-3.5">
        Relative cost bands (lowest → highest), not dollar quotes. A small tree
        in an open yard is the cheapest job we do; a big tree over a house that
        needs a crane, or a storm call-out, is the most expensive.
      </p>
    </div>

    <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-16 cv-auto">
      <h2
        className="text-[30px] md:text-[44px] font-bold uppercase inline-block pb-[10px] border-b-[3px] border-[hsl(var(--accent))]"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        What moves the price
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
        {COST_FACTORS.map((f) => (
          <div
            key={f.title}
            className="bg-white border border-border p-6 md:p-8"
          >
            <h3
              className="text-[22px] font-bold uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {f.title}
            </h3>
            <p className="text-base leading-[1.55] text-[#5d6862] mt-2">
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </div>

    <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-16 cv-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-[hsl(var(--primary))] text-white p-7 md:p-8">
          <h2
            className="text-[28px] md:text-[32px] font-bold uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Separate lines on every quote
          </h2>
          <ul className="mt-4 flex flex-col gap-3 text-[17px] text-[#dbe8e1]">
            <li className="border-b border-[#2c6650] pb-2.5">
              Tree removal (per tree)
            </li>
            <li className="border-b border-[#2c6650] pb-2.5">
              Stump grinding (per stump)
            </li>
            <li className="border-b border-[#2c6650] pb-2.5">
              Wood haul-away — or leave it for firewood and save
            </li>
            <li className="border-b border-[#2c6650] pb-2.5">
              Crane, if there's no other safe way
            </li>
            <li>Emergency call-out rate</li>
          </ul>
          <p className="text-sm text-[#9fb0a8] mt-4">
            You pick what you want. A quote that's one lump number is hiding
            something.
          </p>
        </div>
        <div className="bg-white border border-border p-7 md:p-8">
          <h2
            className="text-[28px] md:text-[32px] font-bold uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Always included
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5 text-[17px] text-[#454f4a]">
            {INCLUDED.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-16 cv-auto">
      <h2
        className="text-[30px] md:text-[44px] font-bold uppercase inline-block pb-[10px] border-b-[3px] border-[hsl(var(--accent))]"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        Pricing questions
      </h2>
      <div className="flex flex-col gap-px bg-border border border-border mt-6">
        {COST_FAQ.map((item) => (
          <div key={item.q} className="bg-white p-6 md:p-7">
            <h3
              className="text-[22px] md:text-[24px] font-bold uppercase"
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
    </div>

    <div className="max-w-[1120px] mx-auto px-5 md:px-6 py-16">
      <div className="bg-[hsl(var(--forest-dark))] text-white p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h2
            className="text-[30px] md:text-[42px] leading-[1.03] font-bold uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Get your exact number
          </h2>
          <p className="text-[18px] leading-[1.55] text-[#b8c2bc] mt-3.5">
            Cost factors only get you so far. A photo or a 20-minute visit gets
            you a written, itemized price for your actual tree — free.
          </p>
          <div className="flex flex-col gap-3 mt-6">
            <a
              href={SMS_HREF}
              className="bg-white text-[hsl(var(--primary))] text-xl font-bold uppercase tracking-[0.07em] px-6 py-4 text-center"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Text us a photo
            </a>
            <a
              href={PHONE_HREF}
              className="border-2 border-[#6d8579] text-white text-xl font-bold uppercase tracking-[0.07em] px-6 py-[15px] text-center"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Call {PHONE}
            </a>
          </div>
        </div>
        <div
          id="quote-form"
          className="bg-white text-[hsl(var(--foreground))] p-6 md:p-7 scroll-mt-24"
        >
          <h3
            className="text-2xl font-bold uppercase mb-1"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Or send the form
          </h3>
          <p className="text-base text-[#5d6862] mb-5">
            We call you back. No obligation.
          </p>
          <QuoteForm idPrefix="cost" showProjectFields={false} />
        </div>
      </div>
    </div>
  </PageLayout>
);

export default CostPage;
