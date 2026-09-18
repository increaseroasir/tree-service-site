import { Link } from "@tanstack/react-router";
import { PHONE, PHONE_HREF, ROUTES, TOPBAR_LINKS } from "@/lib/content";

// Emergency strip. On mobile it collapses to a single tappable line.
const TopBar = () => (
  <div className="bg-[hsl(var(--forest-dark))] text-[hsl(var(--cream))] text-[13px]">
    <div className="max-w-[1240px] mx-auto px-4 md:px-7 py-2 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-6 text-center md:text-left">
      <a
        href={PHONE_HREF}
        className="text-[15px] uppercase tracking-[0.1em] flex items-center gap-2"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        <span className="inline-block w-2 h-2 rounded-full bg-[hsl(var(--accent))] animate-pulse" />
        <span>
          Tree down or on the house?{" "}
          <span className="text-white font-bold">24/7 emergency line</span>
          <span className="md:hidden"> · tap to call</span>
        </span>
      </a>
      <div className="hidden md:flex gap-[22px] items-center text-[#cfd6d1]">
        {TOPBAR_LINKS.map((l) => (
          <Link
            key={l.label}
            to={l.to}
            className="text-[#cfd6d1] hover:text-[hsl(var(--cream))]"
          >
            {l.label}
          </Link>
        ))}
        <Link
          to={ROUTES.emergency}
          className="text-[#cfd6d1] hover:text-[hsl(var(--cream))]"
        >
          Storm damage
        </Link>
        <a href={PHONE_HREF} className="text-[hsl(var(--cream))] font-semibold">
          Call · {PHONE}
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;
