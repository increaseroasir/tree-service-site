import ServicePage from "@/components/site/ServicePage";
import {
  IMAGES,
  REMOVAL_TYPES,
  REMOVAL_INCLUDED,
  REMOVAL_FAQ,
  REMOVAL_GALLERY,
} from "@/lib/content";

const TreeRemoval = () => (
  <ServicePage
    crumb="Tree removal"
    eyebrow="Tree removal · Minneapolis–St. Paul"
    h1="Tree removal, roped down and hauled away"
    blurb="Dead, leaning, storm-cracked, or just too close to the house. Our own insured crew takes it down in controlled pieces, chips the brush, hauls the wood, and rakes the lawn. Stump grinding is a separate line so you choose."
    heroImage={IMAGES.removal}
    heroAlt="Crew removing a large tree in sections near a house"
    serviceType="Tree Removal"
    stats={[
      { v: "Half day – 1 day", l: "Most single-tree removals" },
      { v: "Rigged", l: "Every piece near a structure" },
      { v: "Itemized", l: "Removal, stump, haul-away separate" },
      { v: "Insured", l: "Certificate on request" },
    ]}
    typesTitle="Removals we do every week"
    typesIntro="Same crew, same rigging, four common situations."
    types={REMOVAL_TYPES}
    includedTitle="What's included"
    included={REMOVAL_INCLUDED}
    costTitle="What affects the cost"
    costBody="Tree removal is priced per tree. Height, what it's hanging over, and whether the truck can reach it move the number most. Dead and storm-damaged trees cost more than healthy ones of the same size because they're unpredictable to rig."
    galleryTitle="Recent removals"
    gallery={REMOVAL_GALLERY}
    faqTitle="Tree removal questions"
    faq={REMOVAL_FAQ}
    ctaTitle="Get the tree priced"
    ctaBody="Text a photo for a same-day ballpark, or book a free visit for a written itemized price. If pruning or cabling would save the tree, we'll tell you."
  />
);

export default TreeRemoval;
