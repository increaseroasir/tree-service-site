import { createFileRoute } from "@tanstack/react-router";
import PageLayout from "@/components/site/PageLayout";
import Hero from "@/components/site/Hero";
import Stats from "@/components/site/Stats";
import Services from "@/components/site/Services";
import Guarantee from "@/components/site/Guarantee";
import Process from "@/components/site/Process";
import ServicePicker from "@/components/site/ServicePicker";
import Reviews from "@/components/site/Reviews";
import CtaSection from "@/components/site/CtaSection";
import ServiceAreas from "@/components/site/ServiceAreas";
import SeasonalTip from "@/components/site/SeasonalTip";
import { CITIES, PHONE } from "@/lib/content";
import { localBusinessJsonLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead({
      title: "Tree Removal, Trimming & Stump Grinding in Minneapolis, MN",
      description:
        "Tree removal, trimming and pruning, stump grinding, and 24/7 storm damage response across the Minneapolis–St. Paul metro. Free written quotes, insured crews, cleanup included.",
      path: "/",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: localBusinessJsonLd(
          CITIES.map((c) => `${c.name}, ${c.state}`),
          PHONE,
        ),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageLayout>
      <Hero />
      <Stats />
      <Services />
      <Guarantee />
      <Process />
      <ServicePicker />
      <Reviews />
      <CtaSection />
      <ServiceAreas />
      <SeasonalTip />
    </PageLayout>
  );
}
