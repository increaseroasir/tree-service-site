import ServicePage from "@/components/site/ServicePage";
import { IMAGES } from "@/lib/content";
import {
  EMERGENCY_TYPES,
  EMERGENCY_INCLUDED,
  EMERGENCY_FAQ,
  EMERGENCY_GALLERY,
} from "@/lib/services";

const Emergency = () => (
  <ServicePage
    emergency
    crumb="Emergency tree service"
    eyebrow="24/7 storm damage · Minneapolis–St. Paul"
    h1="Tree on the house? Call now."
    blurb="A person answers the phone day or night. We get the weight off the structure, tarp the opening, photograph everything for your insurance, and finish the removal in daylight. Emergency rate quoted before we roll."
    heroImage={IMAGES.emergency}
    heroAlt="Storm-damaged tree fallen onto a house roof"
    serviceType="Emergency / Storm Damage"
    stats={[
      { v: "24/7", l: "Phone answered by a person" },
      { v: "First", l: "Structure secured and tarped" },
      { v: "Photos", l: "Documented for your claim" },
      { v: "Quoted", l: "Rate agreed before we start" },
    ]}
    typesTitle="Storm calls we take"
    typesIntro="Trees on houses go first. Then blocked driveways. Then everything else."
    types={EMERGENCY_TYPES}
    includedTitle="What's included"
    included={EMERGENCY_INCLUDED}
    costTitle="What affects the cost"
    costBody="Emergency work costs more than scheduled work: a crew comes off other jobs, often at night, and a tree on a roof usually needs a crane. If the tree is down in the open and nothing's damaged, we'll tell you it can wait for a normal-rate removal."
    galleryTitle="Recent storm work"
    gallery={EMERGENCY_GALLERY}
    faqTitle="Storm damage questions"
    faq={EMERGENCY_FAQ}
    ctaTitle="Don't wait on the form. Call."
    ctaBody="If a tree is on a structure or a limb is hanging over where people walk, call the number and text a photo. We'll give you an honest ETA and a price on the phone."
  />
);

export default Emergency;
