import { Link } from "react-router-dom";
import PageLayout from "@/components/fence/PageLayout";
import {
  IMAGES,
  PHONE,
  PHONE_HREF,
  ROUTES,
  SERVICES,
  MSP_NEIGHBORHOODS,
  MSP_NEARBY,
  MSP_PERMIT_NOTES,
} from "@/lib/content";

const MSP_PROJECTS = [
  {
    image: IMAGES.pool,
    alt: "Pool safety fence installed in Minneapolis",
    area: "Linden Hills · 55408",
    title: "Pool barrier, 140 ft",
    body: "Black aluminum with a self-closing gate. Permit pulled and inspection passed.",
  },
  {
    image: IMAGES.woodPrivacy,
    alt: "Cedar privacy fence installed in Minneapolis",
    area: "Longfellow · 55406",
    title: "Cedar privacy, 205 ft",
    body: "Board-on-board, stepped across a grade drop. Two days start to finish.",
  },
  {
    image: IMAGES.vinyl,
    alt: "Vinyl fence installed in Minneapolis",
    area: "Northeast · 55413",
    title: "Vinyl privacy, 165 ft",
    body: "White vinyl replacing failed chain link. Old fence hauled the same day.",
  },
];

const Minneapolis = () => (
  <PageLayout>
    <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-3.5 text-sm text-[#8e8878]">
      <Link to={ROUTES.home} className="text-[#8e8878]">
        Home
      </Link>{" "}
      / <span className="text-[#5d6862]">Minneapolis, MN</span>
    </div>

    <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div
            className="text-[15px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--accent))]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Fence company in Minneapolis, MN
          </div>
          <h1
            className="text-[38px] md:text-[62px] leading-[1] font-bold uppercase mt-3 [text-wrap:balance]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Fence installation in Minneapolis
          </h1>
          <p className="text-[19px] leading-[1.55] text-[#454f4a] mt-4 max-w-[58ch]">
            Wood, vinyl, aluminum and chain link, installed by our own crews
            across Minneapolis and the Twin Cities metro. Posts set below the
            local frost line so the fence holds up through freeze-thaw — local
            frost depth varies, so confirm the required post depth with your
            municipality.
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
        </div>
        <div className="h-[300px] md:h-[400px] overflow-hidden">
          <img
            src={IMAGES.hero}
            alt="New cedar privacy fence in a Minneapolis backyard"
            className="w-full h-full object-cover block"
            loading="eager"
          />
        </div>
      </div>
    </div>

    <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-9">
      <div className="bg-white border border-border grid grid-cols-2 md:grid-cols-4">
        {[
          { v: "Below frost line", l: "Post depth for heave resistance" },
          { v: "Own crews", l: "No subcontractors" },
          { v: "Permits", l: "Pulled when required" },
          { v: "HOA", l: "Submittals handled for you" },
        ].map((s, i) => (
          <div
            key={s.l}
            className={
              "p-5 md:p-6 " +
              (i < 3 ? "border-b md:border-b-0 md:border-r border-border" : "")
            }
          >
            <div
              className="text-[20px] md:text-[26px] font-bold text-[hsl(var(--primary))]"
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
        Fencing we install
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-[18px] mt-6">
        {SERVICES.map((s) => (
          <Link
            key={s.name}
            to={s.href}
            className="bg-white border border-border block"
          >
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
                {s.name}
              </h3>
            </div>
          </Link>
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
            Building fence in Minnesota soil
          </h2>
          <p className="text-[17px] leading-[1.6] text-[#e2ebe6] mt-3.5">
            Minneapolis sits on glacial till over clay, and older neighborhoods
            have mature root systems that eat auger bits. We set posts below the
            frost line with concrete collars, hand-dig near irrigation lines,
            and carry a rock bit on every truck so a hard hole doesn't turn into
            a second trip.
          </p>
          <p className="text-[17px] leading-[1.6] text-[#e2ebe6] mt-3">
            Winter freeze-thaw is the main reason fences lean here. Deep post
            holes and proper drainage backfill are how we keep them plumb.
          </p>
        </div>
        <div className="bg-white border border-border p-7 md:p-8">
          <h2
            className="text-[28px] md:text-[32px] font-bold uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Minneapolis permits &amp; HOA rules
          </h2>
          <div className="flex flex-col gap-3.5 mt-4">
            {MSP_PERMIT_NOTES.map((n) => (
              <div key={n.title} className="border-b border-[#eeeae1] pb-3">
                <div
                  className="text-[19px] font-semibold uppercase tracking-[0.03em]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {n.title}
                </div>
                <p className="text-base leading-[1.55] text-[#5d6862] mt-1">
                  {n.body}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm leading-[1.6] text-[#8e8878] mt-4">
            Verify current rules with the City of Minneapolis before publishing
            any specific code claim — codes change.
          </p>
        </div>
      </div>
    </div>

    <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-14">
      <h2
        className="text-[30px] md:text-[42px] font-bold uppercase inline-block pb-[10px] border-b-[3px] border-[hsl(var(--accent))]"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        Recent Minneapolis projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {MSP_PROJECTS.map((p) => (
          <div key={p.title} className="bg-white border border-border">
            <div className="h-[190px] overflow-hidden">
              <img
                src={p.image}
                alt={p.alt}
                className="w-full h-full object-cover block"
                loading="lazy"
              />
            </div>
            <div className="p-4 md:p-[18px]">
              <div
                className="text-sm uppercase tracking-[0.14em] text-[hsl(var(--accent))]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {p.area}
              </div>
              <h3
                className="text-[21px] font-bold uppercase mt-1 mb-1.5"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {p.title}
              </h3>
              <p className="text-base leading-[1.5] text-[#5d6862]">{p.body}</p>
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
        Neighborhoods we serve in Minneapolis
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mt-6">
        {MSP_NEIGHBORHOODS.map((n) => (
          <div
            key={n}
            className="bg-white border border-border px-3.5 py-3 text-[18px] uppercase tracking-[0.03em]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {n}
          </div>
        ))}
      </div>
      <div className="flex gap-4 flex-wrap mt-5 text-base">
        <span className="text-[#8e8878]">Nearby cities:</span>
        {MSP_NEARBY.map((c) => (
          <Link
            key={c}
            to={ROUTES.minneapolis}
            className="text-[hsl(var(--primary))]"
          >
            {c}
          </Link>
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
            Find out my price
          </h2>
          <p className="text-[18px] leading-[1.55] text-[#b8c2bc] mt-3.5">
            Seven days a week. You'll have a written per-foot price before we
            leave your driveway.
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

export default Minneapolis;
