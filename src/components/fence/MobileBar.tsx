import { Link } from "react-router-dom";
import { PHONE, PHONE_HREF, ROUTES } from "@/lib/content";

const MobileBar = () => (
  <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#ddd8ce] px-3 py-[10px] flex gap-[10px] z-50 max-w-[640px] mx-auto">
    <a
      href={PHONE_HREF}
      className="flex-none w-[108px] text-center border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] text-lg font-bold uppercase tracking-[0.06em] py-[14px] px-2"
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      Call
    </a>
    <Link
      to={ROUTES.contact}
      className="flex-1 text-center bg-[hsl(var(--accent))] text-white text-lg font-bold uppercase tracking-[0.06em] py-[14px] px-2"
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      Free estimate
    </Link>
  </div>
);

export default MobileBar;
