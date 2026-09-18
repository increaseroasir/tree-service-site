import PageLayout from "@/components/fence/PageLayout";
import Hero from "@/components/fence/Hero";
import Stats from "@/components/fence/Stats";
import Services from "@/components/fence/Services";
import Guarantee from "@/components/fence/Guarantee";
import Process from "@/components/fence/Process";
import Materials from "@/components/fence/Materials";
import CtaSection from "@/components/fence/CtaSection";
import ServiceAreas from "@/components/fence/ServiceAreas";
import Giveaway from "@/components/fence/Giveaway";

const Index = () => {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            name: "Ironwood Fence Co.",
            telephone: "1-800-555-0134",
            areaServed: [
              "Minneapolis, MN",
              "St. Paul, MN",
              "Bloomington, MN",
              "Edina, MN",
              "Plymouth, MN",
              "Maple Grove, MN",
            ],
            description:
              "Wood, vinyl, aluminum and chain link fence installation across the Minneapolis–St. Paul metro. Free estimates, own crews.",
          }),
        }}
      />
      <Hero />
      <Stats />
      <Services />
      <Guarantee />
      <Process />
      <Materials />
      <CtaSection />
      <ServiceAreas />
      <Giveaway />
    </PageLayout>
  );
};

export default Index;
