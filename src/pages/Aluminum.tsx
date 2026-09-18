import MaterialPage from "@/components/fence/MaterialPage";
import { IMAGES } from "@/lib/content";
import {
  ALUMINUM_STYLES,
  ALUMINUM_INCLUDED,
  ALUMINUM_FAQ,
  ALUMINUM_GALLERY,
} from "@/lib/materials";

const Aluminum = () => (
  <MaterialPage
    crumb="Aluminum fence"
    eyebrow="Ornamental aluminum fencing"
    h1="Aluminum fence installation"
    blurb="Powder-coated ornamental aluminum picket fencing that won't rust. A popular choice for front yards, pool barriers, and properties near sprinklers or chlorinated water."
    heroImage={IMAGES.aluminum}
    heroAlt="Black ornamental aluminum fence in a front yard"
    stats={[
      { v: "4–5 ft", l: "Common height" },
      { v: "1–2 days", l: "Typical install time" },
      { v: "Rust-proof", l: "Won't corrode" },
      { v: "Pool code", l: "Builds meet barrier rules" },
    ]}
    stylesTitle="Aluminum styles we build"
    stylesIntro="Spear top, flat top, pool barrier, and drive gates — all rust-proof."
    styles={ALUMINUM_STYLES}
    includedTitle="What's included"
    included={ALUMINUM_INCLUDED}
    costTitle="What affects the cost"
    costBody="Aluminum is priced per linear foot and is often similar to vinyl. It's open (see-through) so you get less privacy but a lighter, rust-proof look. Height, gates, and pool-barrier code add to the number — which is why we measure on site before quoting."
    galleryTitle="Recent aluminum fences"
    gallery={ALUMINUM_GALLERY}
    faqTitle="Aluminum fence questions"
    faq={ALUMINUM_FAQ}
    ctaTitle="Get your aluminum fence price"
  />
);

export default Aluminum;
