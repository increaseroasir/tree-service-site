// Service-specific content for the Trimming, Stump Grinding, and Emergency
// pages. Educational only — no fabricated reviews, claims, or guarantees.
import { IMAGES } from "./content";

// Trimming & pruning ---------------------------------------------------
export const TRIMMING_TYPES = [
  {
    image: IMAGES.trimming,
    alt: "Limbs pruned clear of a roof",
    title: "Roof & gutter clearance",
    body: "Limbs lifted off the roofline so leaves stop filling the gutters and squirrels lose their bridge to the attic.",
  },
  {
    image: IMAGES.rigging,
    alt: "Deadwood removed from a canopy",
    title: "Deadwood removal",
    body: "Dead and hanging branches taken out before wind drops them on the car, the deck, or someone's head.",
  },
  {
    image: IMAGES.health,
    alt: "Thinned canopy letting light through",
    title: "Crown thinning & raising",
    body: "Open the canopy for light and wind, or raise the lower limbs so you can mow and see the street.",
  },
  {
    image: IMAGES.jobOak,
    alt: "Oak pruned in winter",
    title: "Oak & elm, timed right",
    body: "Oaks pruned November–March only, outside the oak wilt window. Elms handled the same way for Dutch elm disease.",
  },
];

export const TRIMMING_INCLUDED = [
  "Free written quote, per tree",
  "Cuts made at the branch collar so the tree seals",
  "No topping, no flush cuts, no spikes on trees we keep",
  "Oaks and elms scheduled outside disease windows",
  "Brush chipped, wood hauled, lawn raked",
  "Roof, lines, and driveway cleared before we leave",
  "Certificate of insurance on request",
];

export const TRIMMING_FAQ = [
  {
    q: "When is the best time to trim?",
    a: "For most trees, late winter while dormant — you can see the structure and the tree heals fast in spring. Oaks must be pruned November through March to avoid oak wilt. Dead limbs can come off any time of year.",
  },
  {
    q: "Will you top my tree?",
    a: "No. Topping (cutting the main leaders back to stubs) leaves the tree weak, ugly, and prone to rot. If a tree is too tall for where it is, we'll talk about crown reduction done properly, or removal.",
  },
  {
    q: "How often should a tree be trimmed?",
    a: "Mature shade trees every three to five years. Young trees more often to set good structure. Fruit trees yearly. We'll tell you at the visit what yours actually needs.",
  },
  {
    q: "Can you trim the limbs over the power line?",
    a: "Limbs near the service drop to your house, yes. Anything in the main utility lines has to be done by the utility's own crew — we'll point you to who to call.",
  },
];

export const TRIMMING_GALLERY = [
  {
    image: IMAGES.trimming,
    alt: "Roof clearance pruning",
    caption: "Minneapolis · roof clearance",
  },
  {
    image: IMAGES.jobOak,
    alt: "Winter oak pruning",
    caption: "St. Paul · winter oaks",
  },
  {
    image: IMAGES.health,
    alt: "Crown thinning",
    caption: "Edina · crown thinning",
  },
  {
    image: IMAGES.commercial,
    alt: "Commercial pruning",
    caption: "Bloomington · lot clearance",
  },
];

// Stump grinding -------------------------------------------------------
export const STUMP_TYPES = [
  {
    image: IMAGES.stump,
    alt: "Single stump ground below grade",
    title: "Single stump",
    body: "Ground 6–12 inches below grade, chips raked back into the hole. Ready to seed or sod.",
  },
  {
    image: IMAGES.clearing,
    alt: "Multiple stumps ground",
    title: "Multiple stumps",
    body: "Left behind by a previous contractor or a storm. Priced per stump with a multi-stump rate.",
  },
  {
    image: IMAGES.rigging,
    alt: "Walk-behind grinder through a gate",
    title: "Tight access",
    body: "Walk-behind grinder fits through a 36-inch gate for backyard stumps the big machine can't reach.",
  },
  {
    image: IMAGES.removal,
    alt: "Surface roots ground",
    title: "Surface roots",
    body: "Roots heaving the lawn or the walk ground down along with the stump so the mower stops hitting them.",
  },
];

export const STUMP_INCLUDED = [
  "Free quote from a photo or a visit",
  "Utility locate called in before we grind",
  "Ground 6–12 inches below grade",
  "Chips raked into the hole or hauled — your choice",
  "Surface roots ground on request",
  "Lawn raked and walk swept before we leave",
  "Certificate of insurance on request",
];

export const STUMP_FAQ = [
  {
    q: "How deep do you grind?",
    a: "Six to twelve inches below grade is standard — deep enough to seed or sod over. If you're planting a new tree in the same spot we grind deeper and haul the chips out.",
  },
  {
    q: "Will the stump grow back?",
    a: "Grinding removes the stump and the crown where new shoots start. A few species (boxelder, poplar, black locust) can send up suckers from surviving roots for a season; mowing them off ends it.",
  },
  {
    q: "What about the chips?",
    a: "By default we rake them back into the hole and mound them slightly — they settle over a few months. If you want topsoil-ready right away we haul the chips and you backfill with soil.",
  },
  {
    q: "Do you need a utility locate for a stump?",
    a: "Yes. Gas and electric lines can run shallower than you'd think. We call it in on every grinding job; it's free and takes a couple of days.",
  },
];

export const STUMP_GALLERY = [
  {
    image: IMAGES.stump,
    alt: "Stump ground below grade",
    caption: "Minneapolis · single stump",
  },
  {
    image: IMAGES.clearing,
    alt: "Seven stumps ground",
    caption: "Maple Grove · seven stumps",
  },
  {
    image: IMAGES.rigging,
    alt: "Walk-behind grinder in a backyard",
    caption: "Plymouth · through the gate",
  },
  {
    image: IMAGES.removal,
    alt: "Surface roots ground",
    caption: "St. Paul · surface roots",
  },
];

// Emergency / storm damage ---------------------------------------------
export const EMERGENCY_TYPES = [
  {
    image: IMAGES.emergency,
    alt: "Tree on a roof after a storm",
    title: "Tree on the house",
    body: "We get the weight off the structure first, tarp the opening, then finish the removal in daylight.",
  },
  {
    image: IMAGES.jobStorm,
    alt: "Uprooted tree in a yard",
    title: "Uprooted or blown down",
    body: "Trees down across the yard, driveway, or fence. Cut, chipped, hauled, and the root ball dealt with.",
  },
  {
    image: IMAGES.rigging,
    alt: "Hanging broken limb",
    title: "Hangers & widowmakers",
    body: "A broken limb hung up in the canopy is the most dangerous thing in your yard. We rope it down before it decides on its own.",
  },
  {
    image: IMAGES.removal,
    alt: "Cracked leaning tree",
    title: "Cracked & leaning",
    body: "Storm-cracked trunks and new leans. We'll tell you if it can wait for a scheduled removal or needs to go now.",
  },
];

export const EMERGENCY_INCLUDED = [
  "Phone answered 24/7 — a person, not a machine",
  "Structure secured and tarped first",
  "Photos documented for your insurance claim",
  "Every piece rigged off the roof, never dragged",
  "Debris chipped and hauled",
  "Emergency rate quoted before we start",
  "Certificate of insurance on request",
];

export const EMERGENCY_FAQ = [
  {
    q: "A tree is on my house. What do I do right now?",
    a: "Get everyone out of the rooms under it. If any wire is down, stay away and call the utility. Then call us — we'll ask for a photo, give you an ETA, and tell you what it'll cost before we roll.",
  },
  {
    q: "Does insurance cover this?",
    a: "Usually, if the tree damaged a structure. Removing a tree that fell in the open yard often isn't covered. We document everything with photos and itemize the invoice so your adjuster has what they need. We can't promise what your policy pays.",
  },
  {
    q: "How fast can you get here?",
    a: "After a big storm, everyone's calling. Trees on houses and blocked driveways go first. We give you an honest ETA on the phone rather than a promise we can't keep.",
  },
  {
    q: "Is emergency work more expensive?",
    a: "Yes. A night call-out pulls a crew off scheduled work and often needs a crane. If the tree is down in the open and nothing's damaged, we'll tell you it can wait for a normal-rate scheduled removal.",
  },
];

export const EMERGENCY_GALLERY = [
  {
    image: IMAGES.jobStorm,
    alt: "Storm oak removed from a roof",
    caption: "Edina · oak on roof",
  },
  {
    image: IMAGES.emergency,
    alt: "Uprooted tree cleared",
    caption: "Minneapolis · uprooted maple",
  },
  {
    image: IMAGES.rigging,
    alt: "Hanging limb roped down",
    caption: "St. Paul · hanger removed",
  },
  {
    image: IMAGES.jobTightLot,
    alt: "Driveway cleared after storm",
    caption: "Plymouth · driveway cleared",
  },
];
