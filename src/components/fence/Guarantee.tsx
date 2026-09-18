import { IMAGES } from "@/lib/content";

const Guarantee = () => (
  <section className="max-w-[1240px] mx-auto px-5 md:px-7 py-[34px] md:py-[70px]">
    <div className="bg-[hsl(var(--primary))] text-white md:grid md:grid-cols-2">
      {/* Mobile: image on top */}
      <div className="h-[190px] overflow-hidden md:hidden">
        <img
          src={IMAGES.postDetail}
          alt="Fence post set in concrete below the frost line"
          className="w-full h-full object-cover block"
          loading="lazy"
        />
      </div>
      <div className="px-[22px] md:px-[56px] md:py-[60px] pt-[26px] pb-[30px] md:pt-[60px]">
        <div
          className="text-sm md:text-base font-bold uppercase tracking-[0.18em] text-[hsl(var(--cream))]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Built for Minnesota winters
        </div>
        <h2
          className="text-[32px] md:text-[44px] leading-[1.02] font-bold uppercase mt-3 md:mt-4"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Posts set below the frost line so the fence stays put
        </h2>
        <p className="text-[17px] md:text-[19px] leading-[1.5] md:leading-[1.55] text-[#d3ded8] mt-[14px] md:mt-5">
          Freeze-thaw heave is the main reason fences lean in Minnesota. We dig
          post holes below the local frost depth, set every post in concrete,
          and use hot-dip galvanized hardware that won't rust in wet soil.
        </p>
        <div className="flex flex-col md:flex-row gap-[9px] md:gap-[14px] mt-5 md:mt-7 md:flex-wrap">
          {[
            "Posts set in concrete",
            "Own crews, no subs",
            "Permits handled",
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
          src={IMAGES.postDetail}
          alt="Fence post set in concrete below the frost line"
          className="w-full h-full min-h-[400px] object-cover block"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default Guarantee;
