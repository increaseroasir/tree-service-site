import { createFileRoute } from "@tanstack/react-router";
import ServicePage from "@/components/site/ServicePage";
import { IMAGES } from "@/lib/content";
import {
  CABLING_TYPES,
  CABLING_INCLUDED,
  CABLING_FAQ,
  CABLING_GALLERY,
} from "@/lib/services";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/cabling-bracing")({
  head: () =>
    pageHead({
      title: "Tree Cabling & Bracing Minneapolis–St. Paul — Save the Tree",
      description:
        "Steel cables and brace rods for split unions, co-dominant stems, and heavy limbs over the roof. Usually far cheaper than removal. Arborist assessment first.",
      path: "/cabling-bracing",
      image: IMAGES.cabling,
    }),
  component: () => (
    <ServicePage
      crumb="Cabling & bracing"
      eyebrow="Cabling & bracing · Minneapolis–St. Paul"
      h1="Save the split tree instead of cutting it down"
      blurb="A big shade tree with a weak crotch or a crack at the union doesn't always have to come down. Steel cables high in the canopy and brace rods through the union take the load off the weak point. Usually a fraction of the cost of removal, and you keep the tree."
      heroImage={IMAGES.cabling}
      heroAlt="Steel cable installed between two large limbs"
      serviceType="Cabling & Bracing"
      stats={[
        { v: "Fraction", l: "Of removal cost on a big tree" },
        { v: "Assessed", l: "Arborist decides if it's worth it" },
        { v: "3–5 yrs", l: "Inspection interval" },
        { v: "Decades", l: "Steel system life when inspected" },
      ]}
      typesTitle="What we cable and brace"
      typesIntro="The four situations where hardware beats a chainsaw."
      types={CABLING_TYPES}
      includedTitle="What's included"
      included={CABLING_INCLUDED}
      costTitle="What affects the cost"
      costBody="Cabling is priced by the number of cables and rods, the height of the install, and whether the tree needs pruning to reduce load first. Even a two-cable system on a big maple is usually well under what removing that tree would cost."
      galleryTitle="Recent cabling"
      gallery={CABLING_GALLERY}
      faqTitle="Cabling & bracing questions"
      faq={CABLING_FAQ}
      ctaTitle="Find out if your tree can be saved"
      ctaBody="Text a photo of the split or the union. We'll tell you whether it's a cabling job, a pruning job, or a removal — and price both so you can decide."
    />
  ),
});
