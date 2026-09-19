import { Link } from "@tanstack/react-router";
import { PHONE_HREF, SMS_HREF, ROUTES } from "@/lib/content";

// Sticky mobile action bar: call, text a photo, free quote.
const MobileBar = () => (
  <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#ddd8ce] px-3 py-[10px] flex gap-[8px] z-50 max-w-[640px] mx-auto">
    <a
      href={PHONE_HREF}
      className="flex-none w-[84px] text-center bg-[var(--primary)] text-white text-lg font-bold uppercase tracking-[0.06em] py-[14px] px-2"
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      Call
    </a>
    <a
      href={SMS_HREF}
      className="flex-none w-[84px] text-center border-2 border-[var(--primary)] text-[var(--primary)] text-lg font-bold uppercase tracking-[0.06em] py-[12px] px-2"
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      Text
    </a>
    <Link
      to={ROUTES.contact}
      className="flex-1 text-center bg-[var(--accent)] text-white text-lg font-bold uppercase tracking-[0.06em] py-[14px] px-2"
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      Free quote
    </Link>
  </div>
);

export default MobileBar;
