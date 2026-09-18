import { createFileRoute } from "@tanstack/react-router";
import ServicePage from "@/components/site/ServicePage";
import { IMAGES } from "@/lib/content";
import {
  ARBORIST_TYPES,
  ARBORIST_INCLUDED,
  ARBORIST_FAQ,
  ARBORIST_GALLERY,
} from "@/lib/services";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/arborist-consultation")({
  head: () =>
    pageHead({
      title: "Certified Arborist Consultation Minneapolis–St. Paul",
      description:
        "Is the tree dying? Oak wilt, emerald ash borer, hazard assessments, and written reports for insurance or a home purchase. Plain-English diagnosis, not a sales pitch.",
      path: "/arborist-consultation",
      image: IMAGES.health,
    }),
  component: () => (
    <ServicePage
      crumb="Arborist consultation"
      eyebrow="Arborist consultation · Minneapolis–St. Paul"
      h1="Is the tree dying? Ask an arborist, not a salesman."
      blurb="Thinning canopy, early leaf drop, mushrooms at the base, or a big tree over the house you're not sure about. A certified arborist looks at it, tells you what it is in plain English, and gives you the options — including doing nothing."
      heroImage={IMAGES.health}
      heroAlt="Arborist inspecting a tree trunk"
      serviceType="Tree Health / Arborist Visit"
      stats={[
        { v: "Certified", l: "Arborist on every visit" },
        { v: "Written", l: "Reports for insurance or a sale" },
        { v: "Credited", l: "Fee applied to any work booked" },
        { v: "Honest", l: "Removal only when it's the answer" },
      ]}
      typesTitle="What people ask us to look at"
      typesIntro="Four visits we make every week."
      types={ARBORIST_TYPES}
      includedTitle="What's included"
      included={ARBORIST_INCLUDED}
      costTitle="What affects the cost"
      costBody="Quotes for work are free. A standalone written assessment — for insurance, an HOA, or a home purchase — has a flat fee that we credit back if you book any work. Treatment costs depend on trunk size and what's being treated."
      galleryTitle="Recent assessments"
      gallery={ARBORIST_GALLERY}
      faqTitle="Tree health questions"
      faq={ARBORIST_FAQ}
      ctaTitle="Get a straight answer on your tree"
      ctaBody="Text a photo of the whole tree and a close-up of what's worrying you. We'll tell you if it needs a visit, and what it's likely to be."
    />
  ),
});
