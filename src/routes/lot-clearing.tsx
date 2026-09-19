import { createFileRoute } from "@tanstack/react-router";
import ServicePage from "@/components/site/ServicePage";
import { IMAGES } from "@/lib/content";
import { CLEARING_TYPES, CLEARING_INCLUDED, CLEARING_FAQ, CLEARING_GALLERY } from "@/lib/services";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/lot-clearing")({
  head: () =>
    pageHead({
      title: "Lot Clearing & Brush Removal Minneapolis–St. Paul",
      description:
        "Buildable lot clearing, overgrown property edges, buckthorn removal, and selective thinning. Chipped on site or hauled, stumps ground, site ready for the next crew.",
      path: "/lot-clearing",
      image: IMAGES.clearing,
    }),
  component: () => (
    <ServicePage
      crumb="Lot & brush clearing"
      eyebrow="Lot & brush clearing · Minneapolis–St. Paul"
      h1="Lot clearing and brush removal, done in one visit"
      blurb="From a buildable lot for a new garage to the back property line nobody's touched in twenty years. We flag what stays, cut and chip the rest, grind or pull the stumps, and leave the site ready for the next crew."
      heroImage={IMAGES.clearing}
      heroAlt="Cleared lot with brush piled for chipping"
      serviceType="Lot & Brush Clearing"
      stats={[
        { v: "By the area", l: "Brush and small trees" },
        { v: "Per tree", l: "Anything that needs rigging" },
        { v: "Chip or haul", l: "Your choice" },
        { v: "Stumps", l: "Ground or pulled" },
      ]}
      typesTitle="Clearing we do"
      typesIntro="Four jobs we see every week."
      types={CLEARING_TYPES}
      includedTitle="What's included"
      included={CLEARING_INCLUDED}
      costTitle="What affects the cost"
      costBody="Clearing is priced by the area for brush and small trees, plus per tree for anything big enough to rig. Density, access for the chipper, and whether stumps come out move the number. Leaving the chips on site as mulch takes the haul-away line off."
      galleryTitle="Recent clearing"
      gallery={CLEARING_GALLERY}
      faqTitle="Lot clearing questions"
      faq={CLEARING_FAQ}
      ctaTitle="Get the lot priced"
      ctaBody="A few photos of the area and a rough idea of what you want kept is enough for a ballpark. For a firm number we walk it with you — free."
    />
  ),
});
