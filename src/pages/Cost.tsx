import { Link } from "react-router-dom";
import PageLayout from "@/components/fence/PageLayout";
import {
  PHONE,
  PHONE_HREF,
  ROUTES,
  COST_FACTORS,
  ILLUSTRATIVE_RANGES,
  COST_FAQ,
} from "@/lib/content";

const INCLUDED = [
  "Utility locate called in and marked",
  "Permit pulled when local code requires",
  "Posts set in concrete, below the frost line",
  "Hot-dip galvanized hardware",
  "Site raked and debris hauled off",
];

const Cost = () => (
  <PageLayout>
    <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-3.5 text-sm text-[#8e8878]">
      <Link to={ROUTES.home} className="text-[#8e8878]">
        Home
      </Link>{" "}
      / <span className="text-[#5d6862]">Fence cost</span>
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
        What affects the cost of a fence?
      </h1>
      <p className="text-[19px] leading-[1.55] text-[#454f4a] mt-4 max-w-[66ch]">
        Fence pricing is figured by the linear foot, plus gates and any
        tear-out. There's no single number — material, slope, soil, and access
        all move the per-foot price. Below are the factors that decide it, so
        you know what you're paying for. We measure on site before quoting.
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
        Relative cost bands (lowest → highest), not dollar quotes. Chain link is
        generally the least expensive per foot; vinyl privacy is generally the
        most. Your exact price depends on the factors below.
      </p>
    </div>

    <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-16">
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

    <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-[hsl(var(--primary))] text-white p-7 md:p-8">
          <h2
            className="text-[28px] md:text-[32px] font-bold uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Add-ons to plan for
          </h2>
          <ul className="mt-4 flex flex-col gap-3 text-[17px] text-[#dbe8e1]">
            <li className="border-b border-[#2c6650] pb-2.5">
              Walk gates (framed, steel-reinforced)
            </li>
            <li className="border-b border-[#2c6650] pb-2.5">
              Double drive gates
            </li>
            <li className="border-b border-[#2c6650] pb-2.5">
              Gate openers (wired)
            </li>
            <li className="border-b border-[#2c6650] pb-2.5">
              Stain &amp; seal (per foot)
            </li>
            <li>Old fence removal &amp; haul-off (per foot)</li>
          </ul>
          <p className="text-sm text-[#9fb0a8] mt-4">
            Each add-on is priced separately at the estimate so you see exactly
            what each line item costs.
          </p>
        </div>
        <div className="bg-white border border-border p-7 md:p-8">
          <h2
            className="text-[28px] md:text-[32px] font-bold uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            What's always included
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5 text-[17px] text-[#454f4a]">
            {INCLUDED.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-16">
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
      <div className="bg-[hsl(var(--forest-dark))] text-white p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2
            className="text-[30px] md:text-[42px] leading-[1.03] font-bold uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Get your exact number
          </h2>
          <p className="text-[18px] leading-[1.55] text-[#b8c2bc] mt-3.5">
            Cost factors only get you so far. A 45-minute measure gets you a
            written per-foot price for your actual yard — free.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link
            to={ROUTES.contact}
            className="bg-[hsl(var(--accent))] text-white text-xl font-bold uppercase tracking-[0.07em] px-7 py-4 text-center"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Find out my price
          </Link>
          <a
            href={PHONE_HREF}
            className="border-2 border-[#6d8579] text-white text-xl font-bold uppercase tracking-[0.07em] px-6 py-[15px] text-center"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Call {PHONE}
          </a>
        </div>
      </div>
    </div>
  </PageLayout>
);

export default Cost;
