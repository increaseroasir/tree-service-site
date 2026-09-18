import { PHONE, PHONE_HREF, TOPBAR_LINKS } from "@/lib/content";

const TopBar = () => (
  <div className="bg-[hsl(var(--forest-dark))] text-[hsl(var(--cream))] text-[13px]">
    <div className="max-w-[1240px] mx-auto px-4 md:px-7 py-2 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-6 text-center md:text-left">
      <span
        className="text-[15px] uppercase tracking-[0.12em]"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        Minneapolis, MN — serving the Twin Cities metro
      </span>
      <div className="hidden md:flex gap-[22px] items-center text-[#cfd6d1]">
        {TOPBAR_LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="text-[#cfd6d1] hover:text-[hsl(var(--cream))]"
          >
            {l.label}
          </a>
        ))}
        <a href={PHONE_HREF} className="text-[hsl(var(--cream))] font-semibold">
          Call · {PHONE}
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;
