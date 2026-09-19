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

// Lot & brush clearing ---------------------------------------------------
export const CLEARING_TYPES = [
  {
    image: IMAGES.clearing,
    alt: "Lot cleared for construction",
    title: "Buildable lot clearing",
    body: "Trees and brush cleared for a house, garage, or addition. Stumps ground or pulled so the excavator isn't fighting roots.",
  },
  {
    image: IMAGES.trimming,
    alt: "Overgrown property edge",
    title: "Overgrown edges",
    body: "The back property line nobody's touched in twenty years. Buckthorn, boxelder, and volunteer trees cut and chipped.",
  },
  {
    image: IMAGES.rigging,
    alt: "Selective thinning in a wooded yard",
    title: "Selective thinning",
    body: "Keep the good trees, take out the crowded, dead, and invasive ones. More light, healthier canopy, better view.",
  },
  {
    image: IMAGES.commercial,
    alt: "Fence line cleared",
    title: "Fence and utility lines",
    body: "Brush and small trees cleared along a fence run or easement so the fence crew or utility can get in.",
  },
];

export const CLEARING_INCLUDED = [
  "Free visit and written quote by the area or by the tree",
  "Everything chipped on site or hauled — your choice",
  "Stumps ground or pulled for buildable lots",
  "Buckthorn and invasives cut and stump-treated on request",
  "Trees you want kept are flagged and protected",
  "Site raked and ready for the next crew",
  "Certificate of insurance on request",
];

export const CLEARING_FAQ = [
  {
    q: "How is lot clearing priced?",
    a: "By the area for brush and small trees, plus per tree for anything big enough to need rigging. We walk the lot with you, flag what stays, and give a written price for the rest.",
  },
  {
    q: "Do I need a permit to clear a lot?",
    a: "Depends on the city and whether it's part of a building permit. Some metro cities require a tree preservation plan on new construction. We'll tell you at the visit what applies.",
  },
  {
    q: "What about buckthorn?",
    a: "Cut it and it comes back unless the stump is treated. We cut, chip, and treat stumps so it stays gone. Follow-up on seedlings the next year is cheap; ignoring it isn't.",
  },
  {
    q: "Can you leave the chips?",
    a: "Yes. Chips left on site are free mulch and save you the haul-away line. We can spread them or leave a pile where you want it.",
  },
];

export const CLEARING_GALLERY = [
  { image: IMAGES.clearing, alt: "Cleared building lot", caption: "Plymouth · buildable lot" },
  { image: IMAGES.trimming, alt: "Cleared property edge", caption: "Maple Grove · back line" },
  { image: IMAGES.rigging, alt: "Thinned wooded yard", caption: "Eagan · selective thinning" },
  { image: IMAGES.commercial, alt: "Cleared fence line", caption: "Brooklyn Park · fence run" },
];

// Cabling & bracing --------------------------------------------------------
export const CABLING_TYPES = [
  {
    image: IMAGES.cabling,
    alt: "Steel cable between two leaders",
    title: "Co-dominant stems",
    body: "Two trunks growing from one union with bark pinched between them — the classic split waiting to happen. A cable high in the canopy takes the load off.",
  },
  {
    image: IMAGES.rigging,
    alt: "Brace rod through a split",
    title: "Brace rods",
    body: "A crack that's already started. Threaded steel rods through the union hold it closed while the cable above stops it from spreading.",
  },
  {
    image: IMAGES.jobOak,
    alt: "Large limb over a house supported",
    title: "Heavy limbs over a roof",
    body: "That one huge limb over the bedroom you don't want to lose. Cabled to the main stem so it can't drop.",
  },
  {
    image: IMAGES.health,
    alt: "Arborist inspecting cable hardware",
    title: "Inspection & re-tension",
    body: "Existing hardware checked every few years and re-tensioned or replaced as the tree grows.",
  },
];

export const CABLING_INCLUDED = [
  "Arborist assessment of whether the tree is worth saving",
  "Written quote — cabling vs. removal side by side",
  "Extra-high-strength steel or synthetic cable systems",
  "Through-rods where the union has already cracked",
  "Light pruning to reduce load on the weak point",
  "Inspection schedule so you know when to have it checked",
  "Certificate of insurance on request",
];

export const CABLING_FAQ = [
  {
    q: "Is cabling cheaper than removal?",
    a: "Usually by a lot, on a big tree. You keep the shade and the tree keeps growing. The trade-off is that cabling needs inspection every few years, and it's not a fix for a tree that's already rotten at the union.",
  },
  {
    q: "Will the cable hurt the tree?",
    a: "Installed correctly, no. The hardware is placed to let the tree grow around it and inspected as it does. Wrapping a cable around a limb — which we don't do — is what girdles trees.",
  },
  {
    q: "How long does cabling last?",
    a: "Steel systems last decades if inspected. We recommend a look every three to five years, and after any major storm, to re-tension and check the anchors.",
  },
  {
    q: "Can any tree be cabled?",
    a: "No. If the union is rotten, the trunk is hollow, or the tree is already leaning at the root, cabling just delays a removal. We'll tell you straight at the assessment which one you have.",
  },
];

export const CABLING_GALLERY = [
  { image: IMAGES.cabling, alt: "Cabled maple", caption: "Bloomington · split maple" },
  { image: IMAGES.jobOak, alt: "Cabled oak limb", caption: "Edina · limb over roof" },
  { image: IMAGES.rigging, alt: "Brace rod install", caption: "St. Paul · through-rod" },
  { image: IMAGES.health, alt: "Cable inspection", caption: "Minneapolis · inspection" },
];

// Arborist consultation ----------------------------------------------------
export const ARBORIST_TYPES = [
  {
    image: IMAGES.health,
    alt: "Arborist inspecting a trunk",
    title: "Is it dying?",
    body: "Thinning crown, early leaf drop, mushrooms at the base, bark coming off. We tell you what it is and whether it's savable.",
  },
  {
    image: IMAGES.jobOak,
    alt: "Oak leaves showing wilt",
    title: "Oak wilt & ash borer",
    body: "Diagnosis, what it means for the neighboring trees, and whether treatment is worth it or the tree should come out before it spreads.",
  },
  {
    image: IMAGES.rigging,
    alt: "Tree leaning over a house",
    title: "Hazard assessment",
    body: "A written opinion on the big tree over your house — before storm season, before you buy the house, or for your insurance company.",
  },
  {
    image: IMAGES.trimming,
    alt: "Young tree being shaped",
    title: "Planting & young tree care",
    body: "What to plant where, and structural pruning while the tree is young so you're not paying for a big correction in twenty years.",
  },
];

export const ARBORIST_INCLUDED = [
  "On-site visit by a certified arborist",
  "Plain-English diagnosis, not a sales pitch",
  "Written report on request for insurance, HOA, or a home purchase",
  "Treatment options with honest odds of success",
  "Removal only recommended when it's actually the answer",
  "Consultation fee credited toward any work you book",
  "Certificate of insurance on request",
];

export const ARBORIST_FAQ = [
  {
    q: "Is the consultation free?",
    a: "Quotes for work are always free. A standalone written assessment — for insurance, a home purchase, or an HOA dispute — has a fee, which we credit back if you book any work with us.",
  },
  {
    q: "Can you treat emerald ash borer?",
    a: "Healthy ash can be treated with trunk injections every two to three years, and it works if you start before the tree is more than about a third dead. Past that, removal is the honest recommendation.",
  },
  {
    q: "My oak dropped its leaves in July. Is it oak wilt?",
    a: "Possibly. Red oaks with oak wilt wilt from the top down in early summer and can die in weeks. Bur and white oaks go slower. Don't prune it, don't let anyone cut it until we've looked, and call us — it matters for every oak within fifty feet.",
  },
  {
    q: "Do you sell fertilizer or treatments?",
    a: "We do trunk injections for ash borer and some fungal issues when they're warranted. We don't push annual treatment programs. If your tree doesn't need anything, we'll say so.",
  },
];

export const ARBORIST_GALLERY = [
  { image: IMAGES.health, alt: "Arborist visit", caption: "Edina · hazard assessment" },
  { image: IMAGES.jobOak, alt: "Oak wilt diagnosis", caption: "Eagan · oak wilt" },
  { image: IMAGES.trimming, alt: "Young tree pruning", caption: "Plymouth · structural pruning" },
  { image: IMAGES.rigging, alt: "Ash treatment", caption: "Maple Grove · ash injection" },
];

// Commercial & HOA ---------------------------------------------------------
export const COMMERCIAL_TYPES = [
  {
    image: IMAGES.commercial,
    alt: "Trees pruned on a retail lot",
    title: "Retail & office",
    body: "Sign and light-pole clearance, parking lot canopy, entrance sightlines. Done before opening so the lot stays usable.",
  },
  {
    image: IMAGES.trimming,
    alt: "HOA common-area trees",
    title: "HOA common areas",
    body: "Boulevards, ponds, and entrance monuments on a yearly pruning schedule, with one invoice and one point of contact.",
  },
  {
    image: IMAGES.removal,
    alt: "Multi-tree removal at an apartment complex",
    title: "Apartments & multifamily",
    body: "Ash removals and hazard trees across a property, staged so residents keep their parking and walkways.",
  },
  {
    image: IMAGES.emergency,
    alt: "Storm cleanup at a business",
    title: "Storm response contracts",
    body: "Priority callback after a storm for properties on contract. Photos and itemized invoices for the insurance file.",
  },
];

export const COMMERCIAL_INCLUDED = [
  "Property walk and written multi-year plan",
  "Per-tree inventory with priorities: hazard, clearance, cosmetic",
  "Work scheduled around business hours and residents",
  "One invoice, itemized per tree or per area",
  "Certificate of insurance naming the property, on request",
  "Storm-priority callback for contract properties",
  "Same crew, so they know the property",
];

export const COMMERCIAL_FAQ = [
  {
    q: "Do you work with property managers?",
    a: "Yes. Most of our commercial work comes through property managers and HOA boards. We give you a per-tree inventory, a plan you can put in the budget, and one invoice per visit.",
  },
  {
    q: "Can you name our property as additional insured?",
    a: "Yes. Tell us the entity name and we'll have the certificate issued before the first visit.",
  },
  {
    q: "How do you handle residents' parking?",
    a: "We stage work by section, post notices a few days ahead where you want them, and keep drive lanes open. Nobody comes home to a blocked garage.",
  },
  {
    q: "Do you offer annual contracts?",
    a: "Yes. A yearly pruning and inspection schedule with a fixed price, plus storm-priority callback. It's cheaper per tree than calling one at a time.",
  },
];

export const COMMERCIAL_GALLERY = [
  { image: IMAGES.commercial, alt: "Retail lot pruning", caption: "Minneapolis · retail lot" },
  { image: IMAGES.trimming, alt: "HOA boulevard pruning", caption: "Eagan · HOA boulevards" },
  { image: IMAGES.removal, alt: "Apartment ash removal", caption: "Bloomington · multifamily" },
  {
    image: IMAGES.emergency,
    alt: "Commercial storm cleanup",
    caption: "Brooklyn Park · storm contract",
  },
];
