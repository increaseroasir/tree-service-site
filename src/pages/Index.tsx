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
import { COMPANY, PHONE, SERVICE_AREAS } from "@/lib/content";

const Index = () => {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            name: COMPANY.name,
            telephone: PHONE,
            areaServed: SERVICE_AREAS,
            description:
              "Tree removal, trimming and pruning, stump grinding, and 24/7 storm damage response across the Minneapolis–St. Paul metro. Free written quotes, insured crews.",
          }),
        }}
      />
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
};

export default Index;
