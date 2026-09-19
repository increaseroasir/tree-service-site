import type { ReactNode } from "react";
import { Wordmark } from "@/components/site/Header";
import DemoBadge from "@/components/site/DemoBadge";
import { COMPANY, PHONE, PHONE_HREF, ROUTES } from "@/lib/content";

// Paid-traffic layout (checklist 1.4): no header nav, no footer sitemap, no
// organic link off the funnel. The only exits are the phone and the legal
// pages the consent line must link to.
const FunnelLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background flex flex-col">
    <DemoBadge />
    <header className="bg-white border-b border-border">
      <div className="max-w-[1120px] mx-auto px-4 md:px-7 py-3 flex items-center justify-between">
        <Wordmark />
        <a
          href={PHONE_HREF}
          className="bg-[var(--accent)] text-white text-[17px] font-bold uppercase tracking-[0.06em] px-4 py-2.5 whitespace-nowrap"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Call {PHONE}
        </a>
      </div>
    </header>
    <main className="flex-1">{children}</main>
    <footer className="bg-[var(--forest-dark)] text-[#6f7c75] text-xs">
      <div className="max-w-[1120px] mx-auto px-5 md:px-7 py-5 flex flex-col md:flex-row md:justify-between gap-2">
        <span>
          ©2026 {COMPANY.name} — Demo site. Pricing shown is illustrative only and not a quote.
        </span>
        <span className="flex gap-4">
          <a href={ROUTES.privacy} className="underline">
            Privacy
          </a>
          <a href={ROUTES.terms} className="underline">
            Terms
          </a>
        </span>
      </div>
    </footer>
  </div>
);

export default FunnelLayout;
