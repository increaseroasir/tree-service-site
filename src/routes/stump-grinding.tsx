import { createFileRoute } from "@tanstack/react-router";
import ServicePage from "@/components/site/ServicePage";
import { IMAGES } from "@/lib/content";
import { STUMP_TYPES, STUMP_INCLUDED, STUMP_FAQ, STUMP_GALLERY } from "@/lib/services";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/stump-grinding")({
  head: () =>
    pageHead({
      title: "Stump Grinding Minneapolis–St. Paul — Below Grade, Ready to Seed",
      description:
        "Stumps ground 6–12 inches below grade. Walk-behind grinder for backyards the truck can't reach. Utility locate first. Per-stump pricing with a multi-stump rate.",
      path: "/stump-grinding",
      image: IMAGES.stump,
    }),
  component: () => (
    <ServicePage
      crumb="Stump grinding"
      eyebrow="Stump grinding · Minneapolis–St. Paul"
      h1="Stump grinding, gone below grade"
      blurb="Stumps ground 6–12 inches below the lawn so you can seed, sod, or plant over them. Walk-behind grinder for backyards the truck can't reach. Utility locate called in first, every time."
      heroImage={IMAGES.stump}
      heroAlt="Stump grinder clearing a stump in a lawn"
      serviceType="Stump Grinding"
      stats={[
        { v: "6–12 in.", l: "Below grade, ready to seed" },
        { v: "36 in. gate", l: "Walk-behind grinder fits" },
        { v: "Per stump", l: "Multi-stump rate available" },
        { v: "Located", l: "Utility locate before we grind" },
      ]}
      typesTitle="Stump jobs we do"
      typesIntro="From one stump in the front yard to a field of them."
      types={STUMP_TYPES}
      includedTitle="What's included"
      included={STUMP_INCLUDED}
      costTitle="What affects the cost"
      costBody="Stumps are priced by diameter and access. A 12-inch stump by the driveway is quick. A 36-inch oak stump behind a narrow gate, plus surface roots, takes the small machine and most of a morning. Multiple stumps in one visit get a lower per-stump rate."
      galleryTitle="Recent stump work"
      gallery={STUMP_GALLERY}
      faqTitle="Stump grinding questions"
      faq={STUMP_FAQ}
      ctaTitle="Get your stumps priced"
      ctaBody="A photo with something for scale — a shoe, a tape measure — is usually enough for a firm price. Text it or send the form."
    />
  ),
});
