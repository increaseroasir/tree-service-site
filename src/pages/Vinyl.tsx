import MaterialPage from "@/components/fence/MaterialPage";
import { IMAGES } from "@/lib/content";
import {
  VINYL_STYLES,
  VINYL_INCLUDED,
  VINYL_FAQ,
  VINYL_GALLERY,
} from "@/lib/materials";

const Vinyl = () => (
  <MaterialPage
    crumb="Vinyl fence"
    eyebrow="Vinyl fencing"
    h1="Vinyl fence installation"
    blurb="PVC vinyl privacy and picket fencing that won't rot, rust, or need paint. Impact-rated for cold Minnesota winters, with posts set below the local frost line."
    heroImage={IMAGES.vinyl}
    heroAlt="White vinyl privacy fence in a backyard"
    stats={[
      { v: "6 ft", l: "Common privacy height" },
      { v: "1–2 days", l: "Typical install time" },
      { v: "Below frost line", l: "Post depth" },
      { v: "No paint", l: "Maintenance-free material" },
    ]}
    stylesTitle="Vinyl styles we build"
    stylesIntro="Privacy, semi-private, and picket — same low-maintenance PVC."
    styles={VINYL_STYLES}
    includedTitle="What's included"
    included={VINYL_INCLUDED}
    costTitle="What affects the cost"
    costBody="Vinyl is priced per linear foot and costs more up front than wood. The trade-off is near-zero maintenance over a long life. Taller privacy panels, gates, and tear-out move the number — which is why we measure on site before quoting."
    galleryTitle="Recent vinyl fences"
    gallery={VINYL_GALLERY}
    faqTitle="Vinyl fence questions"
    faq={VINYL_FAQ}
    ctaTitle="Get your vinyl fence price"
  />
);

export default Vinyl;
