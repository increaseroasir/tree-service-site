import { REVIEWS } from "@/lib/content";

// Renders only when real reviews have been pasted into REVIEWS in content.ts.
// The demo ships with none — no fabricated social proof.
const Reviews = () => {
  if (REVIEWS.length === 0) return null;
  return (
    <section
      id="reviews"
      className="bg-white border-y border-border"
    >
      <div className="max-w-[1240px] mx-auto px-5 md:px-7 py-[34px] md:py-[70px]">
        <h2
          className="text-[32px] md:text-[46px] font-bold uppercase inline-block pb-[10px] border-b-[3px] border-[hsl(var(--accent))]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          What neighbors say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mt-7">
          {REVIEWS.map((r) => (
            <blockquote
              key={`${r.name}-${r.city}`}
              className="bg-[hsl(var(--background))] border border-border p-6 flex flex-col gap-3"
            >
              <p className="text-[17px] leading-[1.55] text-[#454f4a]">
                “{r.text}”
              </p>
              <footer
                className="text-[15px] uppercase tracking-[0.08em] text-[hsl(var(--primary))] mt-auto"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {r.name} · {r.city} · {r.service}
                {r.source && (
                  <span className="text-[#8e8878]"> · via {r.source}</span>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
