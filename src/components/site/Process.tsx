import { STEPS } from "@/lib/content";

const Process = () => (
  <section id="process" className="bg-white border-y border-border cv-auto">
    <div className="max-w-[1240px] mx-auto px-5 md:px-7 py-[34px] md:py-[78px]">
      <h2
        className="text-[32px] md:text-[46px] font-bold uppercase inline-block pb-[10px] border-b-[3px] border-[var(--accent)]"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        Three steps. No surprises.
      </h2>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-[26px] md:gap-7 mt-[22px] md:mt-9">
        {STEPS.map((step) => (
          <div key={step.title}>
            <div className="h-[170px] md:h-[200px] overflow-hidden">
              <img
                src={step.image}
                alt={step.alt}
                className="w-full h-full object-cover block"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div
              className="text-sm md:text-[15px] uppercase tracking-[0.18em] text-[var(--accent)] mt-[14px] md:mt-[18px]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {step.label}
            </div>
            <h3
              className="text-2xl md:text-[28px] font-bold uppercase mt-1 mb-[6px] md:mb-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {step.title}
            </h3>
            <p className="text-base md:text-[17px] leading-[1.5] md:leading-[1.55] text-[var(--muted-foreground)]">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
