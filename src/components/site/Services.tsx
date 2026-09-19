import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/lib/content";

const Services = () => (
  <section
    id="services"
    className="max-w-[1240px] mx-auto px-5 md:px-7 pt-[34px] md:pt-20 pb-2 md:pb-5"
  >
    <h2
      className="text-[32px] md:text-[46px] font-bold uppercase leading-[1.02] md:tracking-[0.01em] inline-block pb-[10px] border-b-[3px] border-[var(--accent)]"
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      What do you need done?
    </h2>
    <p className="text-base md:text-[18px] text-[var(--muted-foreground)] mt-2 md:mt-[10px]">
      Pick the closest one. We'll sort out the details on the call.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mt-5 md:mt-[34px]">
      {SERVICES.map((s) => (
        <Link
          key={s.name}
          to={s.to}
          className="bg-white border border-border block hover:border-[var(--primary)] transition-colors"
        >
          <div className="h-[104px] md:h-[150px] overflow-hidden">
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
          <div className="px-3 md:px-[18px] py-[11px] md:py-4">
            <div
              className="text-[18px] md:text-[22px] leading-[1.05] font-semibold uppercase tracking-[0.04em] md:tracking-[0.05em] text-[var(--foreground)]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {s.name}
            </div>
            <div className="text-[13px] md:text-[15px] text-[var(--muted-foreground)] mt-1 leading-[1.35]">
              {s.tagline}
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default Services;
