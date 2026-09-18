import { Link } from "react-router-dom";
import { SERVICE_AREAS, ROUTES } from "@/lib/content";

const ServiceAreas = () => (
  <section
    id="areas"
    className="max-w-[1240px] mx-auto px-5 md:px-7 py-[34px] md:py-[76px]"
  >
    <h2
      className="text-[30px] md:text-[40px] leading-[1.05] font-bold uppercase md:max-w-[24ch] inline-block pb-[10px] border-b-[3px] border-[hsl(var(--accent))]"
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      Tree service across the Minneapolis–St. Paul metro
    </h2>
    <p className="text-base md:text-[18px] leading-[1.55] md:leading-[1.6] text-[hsl(var(--muted-foreground))] mt-3 md:mt-4 md:max-w-[70ch]">
      Old-growth elms and oaks on tight city lots, ash dying across the
      suburbs, and straight-line winds every summer. We know which trees are
      yours, which belong to the city, and when it's safe to cut them.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-[10px] md:gap-3 mt-5 md:mt-7">
      {SERVICE_AREAS.map((city) => (
        <Link
          key={city}
          to={ROUTES.minneapolis}
          className="bg-white border border-border px-[14px] py-[13px] text-[17px] md:text-[19px] uppercase tracking-[0.04em] text-[hsl(var(--primary))] hover:border-[hsl(var(--primary))] transition-colors"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {city}
        </Link>
      ))}
    </div>
  </section>
);

export default ServiceAreas;
