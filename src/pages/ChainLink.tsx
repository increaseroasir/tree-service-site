import MaterialPage from "@/components/fence/MaterialPage";
import { IMAGES } from "@/lib/content";
import {
  CHAINLINK_STYLES,
  CHAINLINK_INCLUDED,
  CHAINLINK_FAQ,
  CHAINLINK_GALLERY,
} from "@/lib/materials";

const ChainLink = () => (
  <MaterialPage
    crumb="Chain link fence"
    eyebrow="Chain link fencing"
    h1="Chain link fence installation"
    blurb="Galvanized and color-coated chain link — the lowest-cost, most durable fencing option. See-through, so it's not for privacy, but ideal for side yards, dog runs, and commercial lots."
    heroImage={IMAGES.chainLink}
    heroAlt="Galvanized chain link fence in a yard"
    stats={[
      { v: "4–6 ft", l: "Common residential height" },
      { v: "1 day", l: "Typical install time" },
      { v: "Galvanized", l: "Rust-resistant for decades" },
      { v: "Up to 10 ft", l: "Commercial security height" },
    ]}
    stylesTitle="Chain link styles we build"
    stylesIntro="Galvanized, color-coated, tall security, and dog runs."
    styles={CHAINLINK_STYLES}
    includedTitle="What's included"
    included={CHAINLINK_INCLUDED}
    costTitle="What affects the cost"
    costBody="Chain link is the lowest-cost material per foot. Height, wire gauge, color-coating, and gate count move the number. Commercial heights use heavier gauge and closer posts for wind load — which is why we measure on site before quoting."
    galleryTitle="Recent chain link fences"
    gallery={CHAINLINK_GALLERY}
    faqTitle="Chain link fence questions"
    faq={CHAINLINK_FAQ}
    ctaTitle="Get your chain link price"
  />
);

export default ChainLink;
