import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import PageLayout from "@/components/site/PageLayout";
import { ROUTES } from "@/lib/content";

export type LegalSection = { title: string; body: ReactNode };

const LegalPage = ({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) => (
  <PageLayout mobileBar={false}>
    <div className="max-w-[820px] mx-auto px-5 md:px-6 pt-3.5 text-sm text-[#8e8878]">
      <Link to={ROUTES.home} className="text-[#8e8878]">
        Home
      </Link>{" "}
      / <span className="text-[#5d6862]">{title}</span>
    </div>
    <article className="max-w-[820px] mx-auto px-5 md:px-6 pt-6 pb-20">
      <h1
        className="text-[38px] md:text-[54px] leading-[1] font-bold uppercase"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {title}
      </h1>
      <p className="text-sm text-[#8e8878] mt-2">Last updated {updated}</p>
      <p className="text-[18px] leading-[1.6] text-[#454f4a] mt-5">{intro}</p>
      {sections.map((s) => (
        <section key={s.title} className="mt-8">
          <h2
            className="text-[26px] font-bold uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {s.title}
          </h2>
          <div className="text-[17px] leading-[1.65] text-[#454f4a] mt-2 flex flex-col gap-3">
            {s.body}
          </div>
        </section>
      ))}
    </article>
  </PageLayout>
);

export default LegalPage;
