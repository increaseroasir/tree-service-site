import { Link, useParams, Navigate } from "react-router-dom";
import PageLayout from "@/components/fence/PageLayout";
import { PHONE, PHONE_HREF, ROUTES, PROJECTS } from "@/lib/content";

const FILTERS = [
  "All projects",
  "Wood",
  "Vinyl",
  "Aluminum",
  "Chain link",
  "Gates",
  "Pool",
];

const Projects = () => {
  const { slug } = useParams();

  if (slug) {
    const project = PROJECTS.find((p) => p.slug === slug);
    if (!project) return <Navigate to={ROUTES.projects} replace />;
    const similar = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

    return (
      <PageLayout>
        <div className="max-w-[1240px] mx-auto px-5 md:px-6 pt-3.5 text-sm text-[#8e8878]">
          <Link to={ROUTES.home} className="text-[#8e8878]">
            Home
          </Link>{" "}
          /{" "}
          <Link to={ROUTES.projects} className="text-[#8e8878]">
            Projects
          </Link>{" "}
          / <span className="text-[#5d6862]">{project.title}</span>
        </div>

        <div className="max-w-[1240px] mx-auto px-5 md:px-6 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <div
                className="text-[15px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--accent))]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {project.city} · {project.zip}
              </div>
              <h1
                className="text-[34px] md:text-[54px] leading-[1.02] font-bold uppercase mt-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {project.title}
              </h1>
              <p className="text-[19px] leading-[1.6] text-[#454f4a] mt-4">
                {project.summary}
              </p>
              <p className="text-[19px] leading-[1.6] text-[#454f4a] mt-3.5">
                {project.detail}
              </p>
              <div className="flex gap-3 flex-wrap mt-6">
                <Link
                  to={ROUTES.contact}
                  className="bg-[hsl(var(--accent))] text-white text-[19px] font-bold uppercase tracking-[0.07em] px-6 py-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Find out my price
                </Link>
                <Link
                  to={ROUTES.woodPrivacy}
                  className="border-2 border-[#cfc9bb] text-[hsl(var(--primary))] text-[19px] font-bold uppercase tracking-[0.07em] px-6 py-[14px]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  See wood privacy fencing
                </Link>
              </div>
            </div>
            <div className="bg-white border border-border p-6 md:p-7">
              <div
                className="text-[15px] uppercase tracking-[0.18em] text-[#8e8878]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Project details
              </div>
              <div className="flex flex-col gap-3 mt-3.5">
                {[
                  ["Location", `${project.city} ${project.zip}`],
                  ["Material", project.material],
                  ["Style", project.style],
                  ["Footage", project.footage],
                  ["Gates", project.gates],
                  ["Build time", project.buildTime],
                  ["Tear-out", project.tearOut],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between gap-3.5 border-b border-[#eeeae1] pb-2.5 last:border-0"
                  >
                    <span className="text-base text-[#5d6862]">{k}</span>
                    <strong className="text-base">{v}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto px-5 md:px-6 pt-8">
          <div className="h-[300px] md:h-[460px] overflow-hidden">
            <img
              src={project.image}
              alt={project.alt}
              className="w-full h-full object-cover block"
              loading="lazy"
            />
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto px-5 md:px-6 pt-16">
          <h2
            className="text-[28px] md:text-[40px] font-bold uppercase inline-block pb-[10px] border-b-[3px] border-[hsl(var(--accent))]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Similar projects nearby
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-[18px] mt-7">
            {similar.map((p) => (
              <Link
                key={p.slug}
                to={`${ROUTES.projects}/${p.slug}`}
                className="bg-white border border-border block"
              >
                <div className="h-[180px] overflow-hidden">
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
                    {p.city.split(",")[0]}
                  </div>
                  <h3
                    className="text-[21px] font-bold uppercase mt-1 mb-1.5"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {p.title}
                  </h3>
                  <div className="text-base text-[#5d6862]">{p.meta}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto px-5 md:px-6 py-16">
          <div className="bg-[hsl(var(--forest-dark))] text-white p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2
                className="text-[30px] md:text-[42px] leading-[1.03] font-bold uppercase"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Want one like this?
              </h2>
              <p className="text-[18px] leading-[1.55] text-[#b8c2bc] mt-3.5">
                Free on-site estimates seven days a week. Bring up any project
                on this page and we'll price the same build for your yard.
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
  }

  // Gallery view
  return (
    <PageLayout>
      <div className="max-w-[1240px] mx-auto px-5 md:px-6 pt-7">
        <div
          className="text-[15px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--accent))]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Project gallery
        </div>
        <h1
          className="text-[38px] md:text-[58px] leading-[1] font-bold uppercase mt-3"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Fences we've built around the metro
        </h1>
        <p className="text-[19px] leading-[1.55] text-[#454f4a] mt-3.5 max-w-[62ch]">
          Every job below was measured, built, and cleaned up by our own crew.
          Footage, material, and city are listed as installed.
        </p>
        <div className="flex gap-2.5 flex-wrap mt-6">
          {FILTERS.map((f, i) => (
            <span
              key={f}
              className={
                "text-[17px] font-bold uppercase tracking-[0.06em] px-4 py-2.5 " +
                (i === 0
                  ? "bg-[hsl(var(--primary))] text-white"
                  : "bg-white border border-border text-[hsl(var(--primary))]")
              }
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-5 md:px-6 pt-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p) => (
            <Link
              key={p.slug}
              to={`${ROUTES.projects}/${p.slug}`}
              className="bg-white border border-border block hover:border-[hsl(var(--primary))] transition-colors"
            >
              <div className="h-[220px] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.alt}
                  className="w-full h-full object-cover block"
                  loading="lazy"
                />
              </div>
              <div className="p-4 md:p-5">
                <div
                  className="text-sm uppercase tracking-[0.14em] text-[hsl(var(--accent))]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {p.city} · {p.zip}
                </div>
                <h3
                  className="text-[21px] md:text-[23px] font-bold uppercase mt-1 mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {p.title}
                </h3>
                <div className="text-base text-[#5d6862]">{p.meta}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-5 md:px-6 py-16">
        <div className="bg-[hsl(var(--forest-dark))] text-white p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2
              className="text-[30px] md:text-[42px] leading-[1.03] font-bold uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Want one like this?
            </h2>
            <p className="text-[18px] leading-[1.55] text-[#b8c2bc] mt-3.5">
              Free on-site estimates seven days a week. Bring up any project on
              this page and we'll price the same build for your yard.
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
};

export default Projects;
