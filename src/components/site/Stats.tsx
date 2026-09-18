import { STATS } from "@/lib/content";

const Stats = () => (
  <div className="bg-white border-b border-border">
    <div className="max-w-[1240px] mx-auto px-5 md:px-7 py-5 md:py-[26px] grid grid-cols-2 md:grid-cols-4 gap-y-[18px] gap-x-4 md:gap-7">
      {STATS.map((s) => (
        <div key={s.label} className="flex flex-col gap-[2px]">
          <div
            className="text-[30px] md:text-[34px] font-bold text-[hsl(var(--primary))]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {s.value}
          </div>
          <div className="text-sm md:text-[15px] text-[hsl(var(--muted-foreground))]">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Stats;
