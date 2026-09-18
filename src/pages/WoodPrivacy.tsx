import { Link } from "react-router-dom";
import PageLayout from "@/components/fence/PageLayout";
import {
  IMAGES,
  PHONE,
  PHONE_HREF,
  ROUTES,
  WOOD_STYLES,
  WOOD_INCLUDED,
  WOOD_FAQ,
  WOOD_GALLERY,
} from "@/lib/content";

const WoodPrivacy = () => (
  <PageLayout>
    <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-3.5 text-sm text-[#8e8878]">
      <Link to={ROUTES.home} className="text-[#8e8878]">
        Home
      </Link>{" "}
      / <span className="text-[#5d6862]">Wood privacy fence</span>
    </div>

    <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div
            className="text-[15px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--accent))]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Wood privacy fencing
          </div>
          <h1
            className="text-[38px] md:text-[62px] leading-[1] font-bold uppercase mt-3 [text-wrap:balance]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Cedar privacy fence installation
          </h1>
          <p className="text-[19px] leading-[1.55] text-[#454f4a] mt-4 max-w-[58ch]">
            Six-foot cedar privacy fence, built board-on-board or side-by-side,
            with every post set in concrete below the frost line. Installed by
            our own crews.
          </p>
          <div className="flex gap-3 flex-wrap mt-6">
            <Link
              to={ROUTES.contact}
              className="bg-[hsl(var(--accent))] text-white text-[19px] font-bold uppercase tracking-[0.07em] px-6 py-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Find out my price
            </Link>
            <a
              href={PHONE_HREF}
              className="border-2 border-[#cfc9bb] text-[hsl(var(--primary))] text-[19px] font-bold uppercase tracking-[0.07em] px-6 py-[14px]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Call {PHONE}
            </a>
          </div>
          <div className="text-base text-[#5d6862] mt-3.5">
            Priced per linear foot ·{" "}
            <Link
              to={ROUTES.cost}
              className="text-[hsl(var(--primary))] underline"
            >
              See cost factors
            </Link>
          </div>
        </div>
        <div className="h-[300px] md:h-[400px] overflow-hidden">
          <img
            src={IMAGES.woodPrivacy}
            alt="Six-foot cedar privacy fence in a backyard"
            className="w-full h-full object-cover block"
            loading="eager"
          />
        </div>
      </div>
    </div>

    <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-9">
      <div className="bg-white border border-border grid grid-cols-2 md:grid-cols-4">
        {[
          { v: "6 ft", l: "Common privacy height" },
          { v: "1–2 days", l: "Typical install time" },
          { v: "Below frost line", l: "Post depth" },
          { v: "Permits", l: "Pulled when required" },
        ].map((s, i) => (
          <div
            key={s.l}
            className={
              "p-5 md:p-6 " +
              (i < 3 ? "border-b md:border-b-0 md:border-r border-border" : "")
            }
          >
            <div
              className="text-[22px] md:text-[26px] font-bold text-[hsl(var(--primary))]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {s.v}
            </div>
            <div className="text-[15px] text-[#5d6862]">{s.l}</div>
          </div>
        ))}
      </div>
    </div>

    <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-14">
      <h2
        className="text-[30px] md:text-[42px] font-bold uppercase inline-block pb-[10px] border-b-[3px] border-[hsl(var(--accent))]"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        Styles we build
      </h2>
      <p className="text-[18px] text-[#5d6862] mt-2">
        Same cedar, four different looks. We bring samples to the estimate.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[18px] mt-7">
        {WOOD_STYLES.map((s) => (
          <div key={s.title} className="bg-white border border-border">
            <div className="h-[150px] overflow-hidden">
              <img
                src={s.image}
                alt={s.alt}
                className="w-full h-full object-cover block"
                loading="lazy"
              />
            </div>
            <div className="p-4 md:p-[18px]">
              <h3
                className="text-[22px] font-bold uppercase"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {s.title}
              </h3>
              <p className="text-base leading-[1.5] text-[#5d6862] mt-1.5">
                {s.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-[hsl(var(--primary))] text-white p-7 md:p-8">
          <h2
            className="text-[28px] md:text-[32px] font-bold uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            What's included
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5 text-[17px] text-[#e2ebe6]">
            {WOOD_INCLUDED.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white border border-border p-7 md:p-8">
          <h2
            className="text-[28px] md:text-[32px] font-bold uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            What affects the cost
          </h2>
          <p className="text-base leading-[1.55] text-[#5d6862] mt-4">
            Wood privacy is priced per linear foot. Board-on-board costs more
            than side-by-side because it uses more material. Slope, rock, and
            tear-out move the number — which is why we measure on site before
            quoting.
          </p>
          <Link
            to={ROUTES.cost}
            className="inline-block mt-5 text-[hsl(var(--primary))] font-bold uppercase tracking-[0.04em] underline"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            See full cost guide →
          </Link>
        </div>
      </div>
    </div>

    <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-14">
      <h2
        className="text-[30px] md:text-[42px] font-bold uppercase inline-block pb-[10px] border-b-[3px] border-[hsl(var(--accent))]"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        Recent cedar fences
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mt-6">
        {WOOD_GALLERY.map((g) => (
          <div key={g.caption} className="relative h-[200px] overflow-hidden">
            <img
              src={g.image}
              alt={g.alt}
              className="w-full h-full object-cover block"
              loading="lazy"
            />
            <div
              className="absolute left-0 bottom-0 bg-[hsl(var(--forest-dark))] text-[hsl(var(--cream))] text-[13px] tracking-[0.12em] uppercase px-3 py-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {g.caption}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-14">
      <h2
        className="text-[30px] md:text-[42px] font-bold uppercase inline-block pb-[10px] border-b-[3px] border-[hsl(var(--accent))]"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        Wood privacy fence questions
      </h2>
      <div className="flex flex-col gap-px bg-border border border-border mt-6">
        {WOOD_FAQ.map((item) => (
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

    <div className="max-w-[1120px] mx-auto px-5 md:px-6 py-14">
      <div className="bg-[hsl(var(--forest-dark))] text-white p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2
            className="text-[30px] md:text-[42px] leading-[1.03] font-bold uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Get your cedar fence price
          </h2>
          <p className="text-[18px] leading-[1.55] text-[#b8c2bc] mt-3.5">
            Free on-site estimates seven days a week. Most yards take about 45
            minutes to measure, and you'll have a written per-foot price before
            we leave.
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

export default WoodPrivacy;
