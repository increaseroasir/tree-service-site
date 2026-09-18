import { IMAGES } from "@/lib/content";

// Risk-reversal block. Every line is a process commitment the company
// controls, not a statistic.
const Guarantee = () => (
  <section className="max-w-[1240px] mx-auto px-5 md:px-7 py-[34px] md:py-[70px]">
    <div className="bg-[hsl(var(--primary))] text-white md:grid md:grid-cols-2">
      {/* Mobile: image on top */}
      <div className="h-[190px] overflow-hidden md:hidden">
        <img
          src={IMAGES.rigging}
          alt="Limb being lowered on a rope over a roof"
          className="w-full h-full object-cover block"
          loading="lazy"
        />
      </div>
      <div className="px-[22px] md:px-[56px] md:py-[60px] pt-[26px] pb-[30px] md:pt-[60px]">
        <div
          className="text-sm md:text-base font-bold uppercase tracking-[0.18em] text-[hsl(var(--cream))]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Why homeowners pick us
        </div>
        <h2
          className="text-[32px] md:text-[44px] leading-[1.02] font-bold uppercase mt-3 md:mt-4"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          The price you approve is the price you pay. Nothing lands on your
          roof.
        </h2>
        <p className="text-[17px] md:text-[19px] leading-[1.5] md:leading-[1.55] text-[#d3ded8] mt-[14px] md:mt-5">
          The cheap tree guy drops limbs and hopes. We rig and lower every piece
          near a structure, carry insurance that covers your property, and put
          removal, stump, and haul-away on separate lines so you choose what
          you pay for. If we find something unexpected inside the trunk, you
          hear about it before we keep cutting.
        </p>
        <div className="flex flex-col md:flex-row gap-[9px] md:gap-[14px] mt-5 md:mt-7 md:flex-wrap">
          {[
            "Itemized written quote",
            "Insured on your property",
            "Own crew, no day labor",
            "Cleanup included",
          ].map((item) => (
            <span
              key={item}
              className="border border-[#6d8579] px-3 py-[9px] md:px-[14px] text-base md:text-[16px] uppercase tracking-[0.06em]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      {/* Desktop: image on right */}
      <div className="hidden md:block min-h-[400px] overflow-hidden">
        <img
          src={IMAGES.rigging}
          alt="Limb being lowered on a rope over a roof"
          className="w-full h-full min-h-[400px] object-cover block"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default Guarantee;
