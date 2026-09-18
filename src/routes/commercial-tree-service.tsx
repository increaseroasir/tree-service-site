import { createFileRoute } from "@tanstack/react-router";
import ServicePage from "@/components/site/ServicePage";
import { IMAGES } from "@/lib/content";
import {
  COMMERCIAL_TYPES,
  COMMERCIAL_INCLUDED,
  COMMERCIAL_FAQ,
  COMMERCIAL_GALLERY,
} from "@/lib/services";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/commercial-tree-service")({
  head: () =>
    pageHead({
      title: "Commercial & HOA Tree Service Minneapolis–St. Paul",
      description:
        "Tree care for retail lots, offices, HOAs, and multifamily properties. Per-tree inventory, work scheduled around business hours, one invoice, storm-priority callback on contract.",
      path: "/commercial-tree-service",
      image: IMAGES.commercial,
    }),
  component: () => (
    <ServicePage
      crumb="Commercial & HOA"
      eyebrow="Commercial & HOA · Minneapolis–St. Paul"
      h1="Tree care for properties with a lot of trees"
      blurb="Retail lots, office parks, HOA common areas, and apartment complexes. We walk the property, inventory every tree, and give you a plan you can put in the budget — then show up on a schedule, before opening, with one invoice."
      heroImage={IMAGES.commercial}
      heroAlt="Crew working on trees at a commercial property"
      serviceType="Commercial & HOA"
      stats={[
        { v: "Inventory", l: "Every tree, prioritized" },
        { v: "Off-hours", l: "Scheduled around business" },
        { v: "One invoice", l: "Itemized per tree or area" },
        { v: "Priority", l: "Storm callback on contract" },
      ]}
      typesTitle="Properties we work"
      typesIntro="Same crew every visit, so they know the property."
      types={COMMERCIAL_TYPES}
      includedTitle="What's included"
      included={COMMERCIAL_INCLUDED}
      costTitle="What affects the cost"
      costBody="Commercial work is priced per tree from the inventory, with a lower rate on an annual contract than on one-off calls. Access, hours restrictions, and whether the lot has to stay open during work move the number."
      galleryTitle="Recent commercial work"
      gallery={COMMERCIAL_GALLERY}
      faqTitle="Commercial & HOA questions"
      faq={COMMERCIAL_FAQ}
      ctaTitle="Get a plan for the property"
      ctaBody="Send the address and a contact. We'll walk it, inventory the trees, and send a written plan with pricing — no charge for the walk."
    />
  ),
});
