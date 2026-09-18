import ServicePage from "@/components/site/ServicePage";
import { IMAGES } from "@/lib/content";
import {
  TRIMMING_TYPES,
  TRIMMING_INCLUDED,
  TRIMMING_FAQ,
  TRIMMING_GALLERY,
} from "@/lib/services";

const TreeTrimming = () => (
  <ServicePage
    crumb="Tree trimming & pruning"
    eyebrow="Trimming & pruning · Minneapolis–St. Paul"
    h1="Tree trimming that keeps the tree and clears the house"
    blurb="Limbs off the roof, deadwood out of the canopy, and the lower branches up where you can mow. Cuts made at the branch collar so the tree seals. Oaks and elms only in the safe season."
    heroImage={IMAGES.trimming}
    heroAlt="Climber pruning a mature tree above a roof"
    serviceType="Tree Trimming & Pruning"
    stats={[
      { v: "Nov – Mar", l: "Oak pruning window (oak wilt safe)" },
      { v: "No topping", l: "Proper cuts only" },
      { v: "Per tree", l: "Written price for each" },
      { v: "Cleanup", l: "Brush chipped, lawn raked" },
    ]}
    typesTitle="Pruning we do"
    typesIntro="Four reasons people call, one way we do it."
    types={TRIMMING_TYPES}
    includedTitle="What's included"
    included={TRIMMING_INCLUDED}
    costTitle="What affects the cost"
    costBody="Trimming is priced per tree by how much comes out and how hard it is to reach. A few dead limbs over an open lawn is a quick climb. Clearing a roofline on a big maple with a narrow gate is most of a day."
    galleryTitle="Recent pruning"
    gallery={TRIMMING_GALLERY}
    faqTitle="Tree trimming questions"
    faq={TRIMMING_FAQ}
    ctaTitle="Get your trees priced"
    ctaBody="Photo of the tree with the house in frame gets you a ballpark. A visit gets you a per-tree written price and a straight answer on what actually needs cutting."
  />
);

export default TreeTrimming;
