import { SERVICE_PICKER } from "@/lib/content";

// Helps the homeowner self-qualify: remove, trim, brace, or ask.
const ServicePicker = () => (
  <section
    id="which-service"
    className="max-w-[1240px] mx-auto px-5 md:px-7 pt-[34px] md:pt-[78px] pb-[34px] cv-auto"
  >
    <h2
      className="text-[32px] md:text-[46px] font-bold uppercase inline-block pb-[10px] border-b-[3px] border-[var(--accent)]"
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      Not sure what the tree needs?
    </h2>
    <p className="text-base md:text-[18px] text-[var(--muted-foreground)] mt-2 md:mt-[10px]">
      Here's how we sort it at the visit. Removal isn't always the answer, and we'll say so.
    </p>
    {/* Mobile: horizontal scroll */}
    <div className="flex md:hidden gap-[14px] mt-[18px] overflow-x-auto pr-5 snap-x snap-mandatory pb-2">
      {SERVICE_PICKER.map((m) => (
        <div key={m.title} className="flex-none w-[272px] snap-start bg-white border border-border">
          <div className="h-[150px] overflow-hidden">
            <img
              src={m.image}
              alt={m.alt}
              className="w-full h-full object-cover block"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="px-4 pt-4 pb-5">
            <h3
              className="text-[21px] font-semibold uppercase mt-[6px]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {m.title}
            </h3>
            <p className="text-[15px] leading-[1.5] text-[var(--muted-foreground)]">{m.body}</p>
          </div>
        </div>
      ))}
    </div>
    {/* Desktop: grid */}
    <div className="hidden md:grid md:grid-cols-4 gap-5 mt-[30px]">
      {SERVICE_PICKER.map((m) => (
        <div key={m.title} className="bg-white border border-border">
          <div className="h-[170px] overflow-hidden">
            <img
              src={m.image}
              alt={m.alt}
              className="w-full h-full object-cover block"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="px-[22px] pt-5 pb-6">
            <h3
              className="text-2xl font-semibold uppercase mb-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {m.title}
            </h3>
            <p className="text-base leading-[1.55] text-[var(--muted-foreground)]">{m.body}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ServicePicker;
