import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { COMPANY, PHONE, PHONE_HREF, NAV_LINKS, ROUTES } from "@/lib/content";

const Logo = ({ light = false }: { light?: boolean }) => {
  const color = light ? "hsl(var(--cream))" : "hsl(var(--primary))";
  return (
    <svg
      width="28"
      height="30"
      viewBox="0 0 28 30"
      aria-hidden="true"
      className="w-[22px] h-[24px] md:w-[28px] md:h-[30px]"
    >
      <path d="M14 1 L26 16 H19 L25 24 H16 V29 H12 V24 H3 L9 16 H2 Z" fill={color} />
    </svg>
  );
};

export const Wordmark = ({ light = false }: { light?: boolean }) => (
  <span className="flex items-center gap-2 md:gap-[9px] whitespace-nowrap">
    <Logo light={light} />
    <span
      className={
        "text-[23px] md:text-[30px] font-bold uppercase tracking-[0.02em] " +
        (light ? "text-white" : "text-[hsl(var(--foreground))]")
      }
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      {COMPANY.short}
    </span>
  </span>
);

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="bg-white border-b border-border sticky top-0 z-40">
      <div className="max-w-[1240px] mx-auto flex items-center gap-3 md:gap-7 px-4 md:px-7 py-3 md:py-4">
        <button
          aria-label="Open menu"
          className="md:hidden flex flex-col gap-[5px] w-6 py-1.5"
          onClick={() => setOpen(!open)}
        >
          <span className="block h-[2px] bg-[hsl(var(--foreground))]" />
          <span className="block h-[2px] bg-[hsl(var(--foreground))]" />
          <span className="block h-[2px] bg-[hsl(var(--foreground))]" />
        </button>

        <Link to={ROUTES.home} className="mx-auto md:mx-0">
          <Wordmark />
        </Link>

        <nav
          className="hidden md:flex gap-[18px] lg:gap-[22px] ml-auto text-[17px] lg:text-[18px] font-semibold uppercase tracking-[0.04em] whitespace-nowrap"
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

        <a
          href={PHONE_HREF}
          className="hidden lg:flex flex-col items-end leading-none whitespace-nowrap text-[hsl(var(--primary))]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          <span className="text-[12px] uppercase tracking-[0.16em] text-[#8e8878]">
            Call or text
          </span>
          <span className="text-[24px] font-bold">{PHONE}</span>
        </a>

        <Link
          to={ROUTES.contact}
          className="hidden md:block whitespace-nowrap bg-[hsl(var(--accent))] text-white text-[18px] font-bold uppercase tracking-[0.08em] px-[22px] py-[14px] hover:bg-[#8f4e14] transition-colors"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Free Quote
        </Link>

        <a
          href={PHONE_HREF}
          className="md:hidden w-11 h-11 bg-[hsl(var(--accent))] text-white flex items-center justify-center text-[13px] font-bold tracking-[0.06em]"
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
            to={ROUTES.whatToExpect}
            className="text-[hsl(var(--primary))] font-medium"
            onClick={() => setOpen(false)}
          >
            What to expect
          </Link>
          <Link
            to={ROUTES.contact}
            className="text-[hsl(var(--primary))] font-medium"
            onClick={() => setOpen(false)}
          >
            Free Quote
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
