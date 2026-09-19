import { Link } from "@tanstack/react-router";
import PageLayout from "@/components/site/PageLayout";
import QuoteForm from "@/components/site/QuoteForm";
import {
  CITIES,
  IMAGES,
  MN_LOCAL_NOTES,
  PHONE,
  PHONE_HREF,
  PROJECTS,
  ROUTES,
  SERVICES,
  SMS_HREF,
  TRUST_POINTS,
  type City,
} from "@/lib/content";

// One template for every service-area city. Content comes from CITIES in
// content.ts; jobs are pulled from PROJECTS by city.
const CityPage = ({ city }: { city: City }) => {
  const jobs = PROJECTS.filter((p) => p.citySlug === city.slug).slice(0, 3);
  const fallbackJobs = jobs.length ? jobs : PROJECTS.slice(0, 3);
  const nearby = CITIES.filter((c) => c.slug !== city.slug);
  const label = `${city.name}, ${city.state}`;

  return (
    <PageLayout>
      <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-3.5 text-sm text-[#8e8878]">
        <Link to={ROUTES.home} className="text-[#8e8878]">
          Home
        </Link>{" "}
        / <span className="text-[#5d6862]">{label}</span>
      </div>

      <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div
              className="text-[15px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Tree service in {label} · {city.zips}
            </div>
            <h1
              className="text-[38px] md:text-[62px] leading-[1] font-bold uppercase mt-3 [text-wrap:balance]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Tree removal & trimming in {city.name}
            </h1>
            <p className="text-[19px] leading-[1.55] text-[#454f4a] mt-4 max-w-[58ch]">
              {city.intro}
            </p>
            <div className="flex gap-3 flex-wrap mt-6">
              <a
                href="#quote-form"
                className="bg-[var(--accent)] text-white text-[19px] font-bold uppercase tracking-[0.07em] px-6 py-4"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Get my free quote
              </a>
              <a
                href={PHONE_HREF}
                className="border-2 border-[#cfc9bb] text-[var(--primary)] text-[19px] font-bold uppercase tracking-[0.07em] px-6 py-[14px]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Call {PHONE}
              </a>
            </div>
            <ul
              className="flex flex-wrap gap-x-4 gap-y-1 mt-4 text-[14px] uppercase tracking-[0.08em] text-[#5d6862]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {TRUST_POINTS.map((t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 bg-[var(--accent)]" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="h-[300px] md:h-[400px] overflow-hidden">
            <img
              src={IMAGES.hero}
              alt={`Tree removal on a ${city.name} lot`}
              width={1200}
              height={800}
              className="w-full h-full object-cover block"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-9">
        <div className="bg-white border border-border grid grid-cols-2 md:grid-cols-4">
          {city.stats.map((s, i) => (
            <div
              key={s.l}
              className={
                "p-5 md:p-6 " + (i < 3 ? "border-b md:border-b-0 md:border-r border-border" : "")
              }
            >
              <div
                className="text-[20px] md:text-[26px] font-bold text-[var(--primary)]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {s.v}
              </div>
              <div className="text-[15px] text-[#5d6862]">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-14 cv-auto">
        <h2
          className="text-[30px] md:text-[42px] font-bold uppercase inline-block pb-[10px] border-b-[3px] border-[var(--accent)]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          What we do in {city.name}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-[18px] mt-6">
          {SERVICES.map((s) => (
            <Link key={s.name} to={s.to} className="bg-white border border-border block">
              <div className="h-[130px] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.alt}
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover block"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-4">
                <h3
                  className="text-[20px] leading-[1.05] font-bold uppercase"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {s.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-14 cv-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-[var(--primary)] text-white p-7 md:p-8">
            <h2
              className="text-[28px] md:text-[32px] font-bold uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {city.terrainTitle}
            </h2>
            {city.terrain.map((p) => (
              <p key={p.slice(0, 40)} className="text-[17px] leading-[1.6] text-[#e2ebe6] mt-3.5">
                {p}
              </p>
            ))}
          </div>
          <div className="bg-white border border-border p-7 md:p-8">
            <h2
              className="text-[28px] md:text-[32px] font-bold uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {city.name} tree rules that matter
            </h2>
            <div className="flex flex-col gap-3.5 mt-4">
              {[city.boulevard, ...MN_LOCAL_NOTES].map((n) => (
                <div key={n.title} className="border-b border-[#eeeae1] pb-3">
                  <div
                    className="text-[19px] font-semibold uppercase tracking-[0.03em]"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {n.title}
                  </div>
                  <p className="text-base leading-[1.55] text-[#5d6862] mt-1">{n.body}</p>
                </div>
              ))}
            </div>
            <p className="text-sm leading-[1.6] text-[#8e8878] mt-4">
              Sources: Minnesota DNR oak wilt guidance; city forestry policy. Verify current rules
              before publishing for a real company — they change.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-14 cv-auto">
        <h2
          className="text-[30px] md:text-[42px] font-bold uppercase inline-block pb-[10px] border-b-[3px] border-[var(--accent)]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {jobs.length ? `Recent ${city.name} jobs` : "Recent jobs nearby"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {fallbackJobs.map((p) => (
            <Link
              key={p.slug}
              to={ROUTES.workDetail}
              params={{ slug: p.slug }}
              className="bg-white border border-border block"
            >
              <div className="h-[190px] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.alt}
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover block"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-4 md:p-[18px]">
                <div
                  className="text-sm uppercase tracking-[0.14em] text-[var(--accent)]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {p.city} · {p.zip}
                </div>
                <h3
                  className="text-[21px] font-bold uppercase mt-1 mb-1.5"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {p.title}
                </h3>
                <p className="text-base leading-[1.5] text-[#5d6862]">{p.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-14 cv-auto">
        <h2
          className="text-[30px] md:text-[42px] font-bold uppercase inline-block pb-[10px] border-b-[3px] border-[var(--accent)]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Neighborhoods we serve in {city.name}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mt-6">
          {city.neighborhoods.map((n) => (
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
          {nearby.map((c) => (
            <Link
              key={c.slug}
              to={ROUTES.city}
              params={{ city: c.slug }}
              className="text-[var(--primary)]"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-[1120px] mx-auto px-5 md:px-6 py-14">
        <div className="bg-[var(--forest-dark)] text-white p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h2
              className="text-[30px] md:text-[42px] leading-[1.03] font-bold uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Get your {city.name} tree priced
            </h2>
            <p className="text-[18px] leading-[1.55] text-[#b8c2bc] mt-3.5">
              Photo for a ballpark, visit for a written itemized price. A person calls you back.
            </p>
            <div className="flex flex-col gap-3 mt-6">
              <a
                href={PHONE_HREF}
                className="bg-white text-[var(--primary)] text-xl font-bold uppercase tracking-[0.07em] px-6 py-4 text-center"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Call {PHONE}
              </a>
              <a
                href={SMS_HREF}
                className="border-2 border-[#6d8579] text-white text-xl font-bold uppercase tracking-[0.07em] px-6 py-[15px] text-center"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Text us a photo
              </a>
            </div>
          </div>
          <div
            id="quote-form"
            className="bg-white text-[var(--foreground)] p-6 md:p-7 scroll-mt-24"
          >
            <h3
              className="text-2xl font-bold uppercase mb-1"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Get a free quote
            </h3>
            <p className="text-base text-[#5d6862] mb-5">We call you back. No obligation.</p>
            <QuoteForm idPrefix="city" showProjectFields={false} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CityPage;
