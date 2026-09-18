import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PHONE, PHONE_HREF, NAV_LINKS, ROUTES } from "@/lib/content";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="bg-white border-b border-border sticky top-0 z-40">
      <div className="max-w-[1240px] mx-auto flex items-center gap-3 md:gap-9 px-4 md:px-7 py-3 md:py-4">
        <button
          aria-label="Open menu"
          className="md:hidden flex flex-col gap-[5px] w-6 py-1.5"
          onClick={() => setOpen(!open)}
        >
          <span className="block h-[2px] bg-[hsl(var(--foreground))]" />
          <span className="block h-[2px] bg-[hsl(var(--foreground))]" />
          <span className="block h-[2px] bg-[hsl(var(--foreground))]" />
        </button>

        <Link
          to={ROUTES.home}
          className="flex items-baseline gap-[7px] md:gap-[9px] mx-auto md:mx-0"
        >
          <span
            className="block w-5 h-[23px] md:w-[26px] md:h-[30px] border-t-[3px] md:border-t-4 border-[hsl(var(--primary))]"
            style={{
              background:
                "repeating-linear-gradient(90deg, hsl(var(--primary)) 0 4px, transparent 4px 7px)",
            }}
          />
          <span
            className="text-[23px] md:text-[30px] font-bold uppercase tracking-[0.02em] text-[hsl(var(--foreground))]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Ironwood Fence
          </span>
        </Link>

        <nav
          className="hidden md:flex gap-[26px] ml-auto text-[19px] font-semibold uppercase tracking-[0.06em]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className={
                "text-[hsl(var(--foreground))] pb-[2px] border-b-[3px] transition-colors " +
                (pathname === l.href
                  ? "border-[hsl(var(--accent))]"
                  : "border-transparent hover:border-[hsl(var(--accent))]")
              }
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to={ROUTES.contact}
          className="hidden md:block bg-[hsl(var(--accent))] text-white text-[18px] font-bold uppercase tracking-[0.08em] px-[22px] py-[14px] hover:bg-[#8f4e14] transition-colors"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Free Estimate
        </Link>

        <a
          href={PHONE_HREF}
          className="md:hidden w-11 h-11 border-[1.5px] border-[hsl(var(--primary))] text-[hsl(var(--primary))] flex items-center justify-center text-[13px] font-bold tracking-[0.06em]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Call
        </a>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border px-4 py-3 flex flex-col gap-3 bg-white">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className="text-[hsl(var(--primary))] font-medium"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to={ROUTES.contact}
            className="text-[hsl(var(--primary))] font-medium"
            onClick={() => setOpen(false)}
          >
            Free Estimate
          </Link>
          <a
            href={PHONE_HREF}
            className="text-[hsl(var(--primary))] font-medium"
          >
            Call {PHONE}
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
