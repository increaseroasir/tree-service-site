// Centralized content for Northline Tree Co. — fictional demo site for a
// Minneapolis / Twin Cities tree service. Every claim on the site is either a
// process commitment the company controls (written quote, cleanup, insured)
// or a regional fact (oak wilt window, boulevard tree rules). No fabricated
// reviews, license numbers, ratings, job counts, or dollar prices.
//
// To deploy for a real company: change COMPANY, PHONE, IMAGES, SERVICE_AREAS,
// and paste real reviews into REVIEWS. Everything else reads from here.

export const COMPANY = {
  name: "Northline Tree Co.",
  short: "Northline Tree",
  city: "Minneapolis, MN",
  metro: "Minneapolis–St. Paul metro",
  // Hours shown on the quote page. Emergency line is separate.
  hours: [
    { day: "Monday – Friday", time: "7:00 am – 6:00 pm" },
    { day: "Saturday", time: "8:00 am – 4:00 pm" },
    { day: "Sunday", time: "Emergency calls only" },
  ],
};

// Fictional demo phone (555 number). Real CRM integration lives in
// src/lib/tracking.ts and is not changed here.
export const PHONE = "1-800-555-0134";
export const PHONE_HREF = "tel:18005550134";
// "Text a photo" CTA. The ?& form works on both iOS and Android.
export const SMS_HREF =
  "sms:18005550134?&body=Hi%2C%20I%27d%20like%20a%20quote.%20Here%27s%20a%20photo%20of%20the%20tree%3A";

// All images are local placeholder SVGs so the demo renders without any
// external asset. Swap each for a real job photo — that is the single biggest
// conversion lever on a tree service site.
export const IMAGES = {
  hero: "/images/hero.svg",
  removal: "/images/tree-removal.svg",
  trimming: "/images/tree-trimming.svg",
  stump: "/images/stump-grinding.svg",
  emergency: "/images/storm-damage.svg",
  clearing: "/images/lot-clearing.svg",
  cabling: "/images/cabling-bracing.svg",
  health: "/images/tree-health.svg",
  commercial: "/images/commercial.svg",
  rigging: "/images/rigging-detail.svg",
  stepPhoto: "/images/step-photo.svg",
  stepQuote: "/images/step-quote.svg",
  stepCrew: "/images/step-crew.svg",
  jobTightLot: "/images/job-tight-lot.svg",
  jobStorm: "/images/job-storm.svg",
  jobOak: "/images/job-oak.svg",
};

export const ROUTES = {
  home: "/",
  contact: "/free-quote",
  whatToExpect: "/what-to-expect",
  cost: "/tree-removal-cost",
  removal: "/tree-removal",
  trimming: "/tree-trimming",
  stump: "/stump-grinding",
  emergency: "/emergency-tree-service",
  minneapolis: "/tree-service-minneapolis-mn",
  work: "/recent-work",
};

// Hash routes for preselecting the service on the quote form.
export const CONTACT_PRESELECT: Record<string, string> = {
  removal: "Tree Removal",
  trimming: "Tree Trimming & Pruning",
  stump: "Stump Grinding",
  emergency: "Emergency / Storm Damage",
  clearing: "Lot & Brush Clearing",
  cabling: "Cabling & Bracing",
  health: "Tree Health / Arborist Visit",
  commercial: "Commercial & HOA",
};

export const NAV_LINKS = [
  { label: "Removal", href: ROUTES.removal },
  { label: "Trimming", href: ROUTES.trimming },
  { label: "Stumps", href: ROUTES.stump },
  { label: "Emergency", href: ROUTES.emergency },
  { label: "Cost", href: ROUTES.cost },
  { label: "Our Work", href: ROUTES.work },
  { label: "Minneapolis", href: ROUTES.minneapolis },
];

export const TOPBAR_LINKS = [
  { label: "What to expect", href: ROUTES.whatToExpect },
  { label: "Tree removal cost", href: ROUTES.cost },
  { label: "Recent work", href: ROUTES.work },
];

// Trust points shown under the hero CTA and in the quote sidebar. These are
// commitments the company makes, not statistics. Edit to match the real
// company before launch.
export const TRUST_POINTS = [
  "Fully insured crews",
  "Certified arborist on staff",
  "Free written quotes",
  "Cleanup included on every job",
];

export const SERVICES = [
  {
    name: "Tree Removal",
    tagline: "Dead, leaning, or too close to the house",
    image: IMAGES.removal,
    alt: "Crew removing a large tree in sections near a house",
    href: ROUTES.removal,
  },
  {
    name: "Trimming & Pruning",
    tagline: "Clear the roof, the lines, and the deadwood",
    image: IMAGES.trimming,
    alt: "Climber pruning a mature tree",
    href: ROUTES.trimming,
  },
  {
    name: "Stump Grinding",
    tagline: "Gone below grade, ready to seed",
    image: IMAGES.stump,
    alt: "Stump grinder clearing a stump in a lawn",
    href: ROUTES.stump,
  },
  {
    name: "Emergency Storm Damage",
    tagline: "Tree down? We answer 24/7",
    image: IMAGES.emergency,
    alt: "Storm-damaged tree fallen across a yard",
    href: ROUTES.emergency,
  },
  {
    name: "Lot & Brush Clearing",
    tagline: "Buildable lots and overgrown edges",
    image: IMAGES.clearing,
    alt: "Cleared lot with brush piled for chipping",
    href: `${ROUTES.contact}#clearing`,
  },
  {
    name: "Cabling & Bracing",
    tagline: "Save a split tree instead of cutting it",
    image: IMAGES.cabling,
    alt: "Steel cable installed between two large limbs",
    href: `${ROUTES.contact}#cabling`,
  },
  {
    name: "Tree Health & Arborist Visit",
    tagline: "Oak wilt, ash borer, and 'is it dying?'",
    image: IMAGES.health,
    alt: "Arborist inspecting a tree trunk",
    href: `${ROUTES.contact}#health`,
  },
  {
    name: "Commercial & HOA",
    tagline: "Scheduled care for properties with many trees",
    image: IMAGES.commercial,
    alt: "Crew working on trees at a commercial property",
    href: `${ROUTES.contact}#commercial`,
  },
];

// Process commitments for the homepage stat band. Not performance claims.
export const STATS = [
  { value: "24/7", label: "Emergency line for storm damage and hazard trees" },
  { value: "Free", label: "Written quote, no obligation, no pressure" },
  { value: "Insured", label: "Crew and equipment covered on your property" },
  { value: "Cleanup", label: "Wood hauled, chips blown, lawn raked" },
];

export const STEPS = [
  {
    image: IMAGES.stepPhoto,
    alt: "Homeowner photographing a tree with a phone",
    label: "Step 1",
    title: "Send a photo or book a visit",
    body: "Text us a picture of the tree and we can often quote from it. For big removals or anything near power lines, we come look in person — free.",
  },
  {
    image: IMAGES.stepQuote,
    alt: "Arborist reviewing an itemized quote on a tablet",
    label: "Step 2",
    title: "Get a written, itemized price",
    body: "Removal, stump grinding, and haul-away are separate lines so you can pick what you want. The number you approve is the number you pay.",
  },
  {
    image: IMAGES.stepCrew,
    alt: "Crew lowering a limb with rigging",
    label: "Step 3",
    title: "Crew shows up, tree comes down, yard gets raked",
    body: "Our own crew rigs and lowers every piece so nothing lands on your roof, fence, or garden. We chip, haul, and rake before we leave.",
  },
];

// Helps a homeowner self-qualify. Replaces the fence "materials" comparison.
export const SERVICE_PICKER = [
  {
    image: IMAGES.removal,
    alt: "Tree being removed",
    title: "Remove it",
    body: "Dead, hollow, leaning toward the house, cracked at a union, or roots lifting the foundation. Removal is the safe call.",
  },
  {
    image: IMAGES.trimming,
    alt: "Tree being pruned",
    title: "Trim it",
    body: "Healthy tree, wrong shape. Limbs on the roof, over the driveway, into the lines, or dead branches that drop in wind.",
  },
  {
    image: IMAGES.cabling,
    alt: "Cabled tree",
    title: "Brace it",
    body: "A big tree with a split or weak crotch you'd rather keep. Steel cables and rods take the load off the weak point.",
  },
  {
    image: IMAGES.health,
    alt: "Arborist inspecting a tree",
    title: "Not sure",
    body: "Thinning canopy, early leaf drop, fungus at the base. An arborist visit tells you if it's savable before you spend on either.",
  },
];

// Paste real customer reviews here. The section only renders when this array
// has entries — no fabricated reviews in the demo.
export type Review = {
  name: string;
  city: string;
  service: string;
  text: string;
  source?: string;
};
export const REVIEWS: Review[] = [];

export const SERVICE_AREAS = [
  "Minneapolis, MN",
  "St. Paul, MN",
  "Bloomington, MN",
  "Edina, MN",
  "Plymouth, MN",
  "Maple Grove, MN",
  "Brooklyn Park, MN",
  "Eagan, MN",
];

// Cost factors (no dollar quotes). Used on the cost page and service pages.
export const COST_FACTORS = [
  {
    title: "Height & trunk size",
    body: "A 70-foot cottonwood takes a bucket truck, rigging, and a full day. A 20-foot crabapple takes an hour. Size is the first thing that moves the price.",
  },
  {
    title: "What it's next to",
    body: "A tree over the house, garage, fence, or power lines has to come down in small, roped pieces. A tree in an open yard can be felled whole.",
  },
  {
    title: "Access for equipment",
    body: "If the bucket truck and chipper can reach the tree, the job goes fast. Backyards with a narrow gate mean climbing and carrying wood by hand.",
  },
  {
    title: "Condition of the tree",
    body: "Dead and storm-cracked trees are unpredictable and take more care to rig. Hazard trees cost more than healthy ones of the same size.",
  },
  {
    title: "Stump & haul-away",
    body: "Stump grinding and hauling the wood are priced as separate lines. Leave the wood for firewood or the stump for later and the number drops.",
  },
  {
    title: "Emergency timing",
    body: "A tree on the roof after a storm is a call-out with a crew pulled off other work. Emergency rates are higher than scheduled work.",
  },
];

// Clearly-labelled ILLUSTRATIVE relative bands only — not a quote.
export const ILLUSTRATIVE_RANGES = [
  {
    material: "Small tree, open yard",
    note: "Under 30 ft, clear drop zone",
    perFoot: "Lowest",
  },
  {
    material: "Medium tree, some rigging",
    note: "30–60 ft, near fence or garden",
    perFoot: "Mid",
  },
  {
    material: "Large tree, roped down",
    note: "60 ft+, over house or lines",
    perFoot: "Higher",
  },
  {
    material: "Crane or emergency",
    note: "No access, or tree already down on a structure",
    perFoot: "Highest",
  },
];

export const COST_FAQ = [
  {
    q: "Why do tree removal quotes vary so much?",
    a: "Insurance, equipment, and crew size. A two-person outfit with a pickup can undercut anyone on a small tree in an open yard. On a big tree over your house, the low quote is usually missing the rigging, the bucket truck, or the insurance that pays if something goes wrong. Ask for a certificate of insurance before you sign.",
  },
  {
    q: "Do you charge for the quote?",
    a: "No. Text a photo or book a visit and you get a written, itemized price. There's no fee and no obligation if you decide not to move forward.",
  },
  {
    q: "Is stump grinding included?",
    a: "It's a separate line on every quote so you can choose. Most people grind the stump; some leave it and plant around it. Either way you see the price before deciding.",
  },
  {
    q: "Can the price change after the quote?",
    a: "Only if the scope changes. If we open a trunk and find it's hollow, we tell you before we keep cutting. We don't invoice surprises.",
  },
];

// Tree removal service page
export const REMOVAL_TYPES = [
  {
    image: IMAGES.removal,
    alt: "Large tree removed in sections",
    title: "Hazard removal",
    body: "Dead, hollow, or leaning trees taken down in roped sections before a storm does it for you.",
  },
  {
    image: IMAGES.rigging,
    alt: "Rigging over a house roof",
    title: "Over-the-house removal",
    body: "Trees above roofs, garages, and fences. Every piece is rigged and lowered, never dropped.",
  },
  {
    image: IMAGES.stump,
    alt: "Stump ground below grade",
    title: "Removal + stump",
    body: "Tree down and stump ground the same visit, so the lawn is ready to seed when we leave.",
  },
  {
    image: IMAGES.clearing,
    alt: "Multiple trees cleared from a lot",
    title: "Multiple trees",
    body: "Ash removals, lot clearing, or thinning a wooded edge. Priced per tree with a multi-tree rate.",
  },
];

export const REMOVAL_INCLUDED = [
  "Free written quote, itemized",
  "Utility locate called in before any grinding",
  "Every limb rigged and lowered near structures",
  "Wood chipped or cut and hauled away",
  "Chips blown and lawn raked before we leave",
  "Stump grinding available as a separate line",
  "Certificate of insurance on request",
];

export const REMOVAL_FAQ = [
  {
    q: "How do I know if my tree needs to come down?",
    a: "Dead top, mushrooms at the base, a crack running down the trunk, a lean that's getting worse, or roots heaving the sidewalk. Any one of those is worth a look. We'll tell you at the visit if pruning or cabling would save it instead — a removal we talk you out of is fine with us.",
  },
  {
    q: "Do I need a permit to remove a tree in Minneapolis?",
    a: "Trees on your own property generally don't need a city permit. Trees in the boulevard between the sidewalk and street belong to the Park Board and need their approval first. We tell you which one you have at the quote.",
  },
  {
    q: "What happens to the wood?",
    a: "Your choice. We chip the brush and haul the trunk wood by default. If you want firewood we'll buck it to length and stack it — that takes a line off the quote.",
  },
  {
    q: "Will it damage my lawn?",
    a: "We put down mats where the equipment crosses turf and lower pieces instead of dropping them. Anything we disturb gets raked and repaired before we call the job done.",
  },
];

export const REMOVAL_GALLERY = [
  {
    image: IMAGES.jobTightLot,
    alt: "Tree removed from a tight backyard",
    caption: "Minneapolis · tight backyard",
  },
  {
    image: IMAGES.jobOak,
    alt: "Large oak removed over a house",
    caption: "St. Paul · over the roof",
  },
  {
    image: IMAGES.clearing,
    alt: "Ash trees removed from a lot",
    caption: "Edina · four ash trees",
  },
  {
    image: IMAGES.stump,
    alt: "Stump ground and backfilled",
    caption: "Plymouth · removal + stump",
  },
];

// What-to-expect page
export const PREP_STEPS = [
  {
    label: "Step 1",
    title: "The quote",
    body: "Text a photo for a fast ballpark, or book a visit. At the visit we walk the tree with you, check what's under it, confirm access for the truck and chipper, and leave a written itemized price.",
  },
  {
    label: "Step 2",
    title: "Scheduling",
    body: "Once you approve the quote we call in the utility locate if we're grinding a stump, check whether the tree is a boulevard tree, and lock a date. Storm and hazard trees jump the line.",
  },
  {
    label: "Step 3",
    title: "The job",
    body: "Our own crew arrives with the bucket truck or climber, rigs every piece near structures, and lowers it. Nothing gets dropped on your roof, fence, or garden.",
  },
  {
    label: "Step 4",
    title: "Cleanup & walkthrough",
    body: "We chip the brush, haul the wood, blow the chips off the drive, and rake the lawn. Then we walk the yard with you before anyone leaves.",
  },
];

export const PREP_FAQ = [
  {
    q: "Do I need to be home?",
    a: "For the quote it helps — walking the tree together is how we settle what stays, what goes, and where the wood ends up. For the job itself, no. Most customers are at work. We text before we start and after we finish.",
  },
  {
    q: "Can you quote from a photo?",
    a: "Often, yes. A photo of the whole tree with the house in frame lets us size it and see what it's over. For anything near power lines or a big removal we'll still come look before giving a firm number.",
  },
  {
    q: "What about power lines?",
    a: "Limbs within reach of the service drop to your house we handle. Anything touching the main utility lines has to be cleared by the utility first — we'll tell you who to call and can coordinate the timing.",
  },
  {
    q: "How long does a removal take?",
    a: "Most single trees are done in half a day to a day, including cleanup. Big removals over a house can run two days. Stump grinding adds an hour or two. You get a real window in writing.",
  },
  {
    q: "What should I do to prepare?",
    a: "Move cars out of the driveway, unlock the gate, and keep pets and kids inside during the work. Mark sprinkler heads if you know where they are. We bring everything else.",
  },
];

// Minneapolis location page
export const MSP_NEIGHBORHOODS = [
  "Northeast",
  "North Loop",
  "Uptown",
  "Linden Hills",
  "Powderhorn",
  "Longfellow",
  "Seward",
  "Kenwood",
  "Loring Park",
  "Downtown East",
];

export const MSP_NEARBY = [
  "St. Paul",
  "Bloomington",
  "Edina",
  "Plymouth",
  "Maple Grove",
  "Brooklyn Park",
  "Eagan",
  "Minnetonka",
];

// Regional facts. Verified against Minnesota DNR and Minneapolis Park &
// Recreation Board guidance as of 2026 — re-check before publishing for a
// real company; rules change.
export const MSP_LOCAL_NOTES = [
  {
    title: "Oak wilt: no oak pruning April–July",
    body: "The Minnesota DNR rates oak wilt risk high from April through July, when sap beetles carry the fungus to fresh cuts. We schedule oak trimming for November through March and won't cut a healthy oak in the risk window.",
  },
  {
    title: "Boulevard trees belong to the Park Board",
    body: "Trees between the sidewalk and the street are managed by the Minneapolis Park & Recreation Board. Pruning or removal needs their approval first. We tell you at the quote which trees are yours to decide on.",
  },
  {
    title: "Emerald ash borer",
    body: "Ash trees across the metro are dying from ash borer. A dead ash gets brittle fast and is dangerous to climb, so removal is safer and cheaper sooner rather than later. We can also tell you if a healthy ash is worth treating.",
  },
  {
    title: "Utility locate before grinding",
    body: "Stump grinding goes below grade, so we call in a utility locate first. State law requires it and it's free to the homeowner.",
  },
];

// Recent work gallery (illustrative demo jobs)
export const PROJECTS = [
  {
    slug: "silver-maple-over-garage",
    city: "Minneapolis, MN",
    zip: "55408",
    title: "Silver maple over a garage",
    meta: "65 ft · roped down · 1 day",
    image: IMAGES.jobTightLot,
    alt: "Silver maple removed over a garage in Minneapolis",
    service: "Tree removal",
    size: "65 ft silver maple",
    access: "Alley, bucket truck",
    stump: "Ground 8 in. below grade",
    duration: "1 day",
    wood: "Chipped and hauled",
    summary:
      "A silver maple with a split at the main union, leaning over the garage and the neighbor's fence. Every limb was rigged and lowered into the alley so nothing touched either roof.",
    detail:
      "The split union meant the tree couldn't be climbed safely, so we worked it from the bucket truck in the alley. Stump ground the same afternoon and backfilled with chips.",
  },
  {
    slug: "storm-oak-on-roof",
    city: "Edina, MN",
    zip: "55436",
    title: "Storm oak on a roof",
    meta: "Emergency · same-night response",
    image: IMAGES.jobStorm,
    alt: "Storm-damaged oak removed from a roof in Edina",
    service: "Emergency storm damage",
    size: "50 ft red oak, uprooted",
    access: "Front yard, crane",
    stump: "Root ball removed",
    duration: "Night call + 1 day",
    wood: "Hauled",
    summary:
      "A straight-line wind put a red oak across the roof at 9 pm. We had it tarped and the load off the trusses that night and finished the removal the next morning.",
    detail:
      "The trunk was lifted off the roof with a crane rather than cut in place to avoid further damage. Photos were provided for the homeowner's insurance claim.",
  },
  {
    slug: "boulevard-oak-pruning",
    city: "St. Paul, MN",
    zip: "55116",
    title: "Winter oak pruning, four trees",
    meta: "Pruning · February · oak wilt safe",
    image: IMAGES.jobOak,
    alt: "Mature oaks pruned in winter in St. Paul",
    service: "Trimming & pruning",
    size: "Four mature bur oaks",
    access: "Climbed",
    stump: "n/a",
    duration: "1 day",
    wood: "Chipped on site",
    summary:
      "Deadwood and roof clearance on four bur oaks, scheduled in February so the cuts were outside the oak wilt risk window.",
    detail:
      "Climbed rather than bucket-trucked to protect the lawn and a stone wall. Cuts kept to the branch collar so the tree seals properly.",
  },
  {
    slug: "four-ash-removals",
    city: "Plymouth, MN",
    zip: "55447",
    title: "Four ash trees, one day",
    meta: "Ash borer · multi-tree rate",
    image: IMAGES.clearing,
    alt: "Four ash trees removed in Plymouth",
    service: "Tree removal",
    size: "Four 40–50 ft ash",
    access: "Side yard, bucket truck",
    stump: "All four ground",
    duration: "1 day",
    wood: "Hauled",
    summary:
      "Four ash trees killed by emerald ash borer along a side yard. Removed and stumps ground in a single day at a multi-tree rate.",
    detail:
      "Dead ash gets brittle, so the crew worked from the bucket rather than climbing. All four stumps ground and the strip raked ready for seed.",
  },
  {
    slug: "cabled-split-maple",
    city: "Bloomington, MN",
    zip: "55437",
    title: "Cabling a split maple instead of removing it",
    meta: "Cabling & bracing · tree saved",
    image: IMAGES.cabling,
    alt: "Steel cable installed in a split maple in Bloomington",
    service: "Cabling & bracing",
    size: "60 ft Norway maple",
    access: "Climbed",
    stump: "n/a",
    duration: "Half day",
    wood: "Light pruning chipped",
    summary:
      "A big shade maple with a weak co-dominant stem the homeowner wanted to keep. Two steel cables and a through-rod took the load off the union.",
    detail:
      "Cabling ran well under the cost of removal and kept the shade over the patio. We recommend an inspection every few years to check the hardware.",
  },
  {
    slug: "commercial-lot-cleanup",
    city: "Minneapolis, MN",
    zip: "55414",
    title: "Commercial lot cleanup",
    meta: "12 trees pruned · lot edge cleared",
    image: IMAGES.commercial,
    alt: "Commercial property trees pruned in Minneapolis",
    service: "Commercial & HOA",
    size: "12 trees + overgrown edge",
    access: "Parking lot, bucket truck",
    stump: "Six small stumps ground",
    duration: "2 days",
    wood: "Chipped and hauled",
    summary:
      "Sign and light-pole clearance on a retail lot plus clearing the brush line at the back. Scheduled around business hours.",
    detail:
      "Work was done before opening so the lot stayed usable. Set up on a yearly pruning schedule afterward.",
  },
  {
    slug: "stump-field-backyard",
    city: "Maple Grove, MN",
    zip: "55369",
    title: "Seven stumps, one visit",
    meta: "Stump grinding · ready to seed",
    image: IMAGES.stump,
    alt: "Multiple stumps ground in a Maple Grove backyard",
    service: "Stump grinding",
    size: "Seven stumps, 8–30 in.",
    access: "Gate, walk-behind grinder",
    stump: "All ground below grade",
    duration: "Half day",
    wood: "Chips left for backfill",
    summary:
      "Stumps left behind by a previous contractor, ground out in one visit so the homeowner could seed the yard that weekend.",
    detail:
      "A narrow gate meant a walk-behind grinder. Utility locate called in first; all stumps ground below grade and backfilled with their own chips.",
  },
  {
    slug: "spruce-line-removal",
    city: "Brooklyn Park, MN",
    zip: "55444",
    title: "Dying spruce line along a driveway",
    meta: "Six spruce · needle cast · 1 day",
    image: IMAGES.removal,
    alt: "Row of spruce trees removed in Brooklyn Park",
    service: "Tree removal",
    size: "Six 35 ft spruce",
    access: "Driveway, bucket truck",
    stump: "Ground",
    duration: "1 day",
    wood: "Chipped and hauled",
    summary:
      "A row of Colorado spruce lost to needle cast, taken down along a driveway without touching the pavement or the neighbor's landscaping.",
    detail:
      "Felled toward the open lawn one at a time. Stumps ground and the strip raked so new plantings could go in.",
  },
];

export const FOOTER_COLUMNS = [
  {
    heading: "Services",
    links: [
      { label: "Tree removal", href: ROUTES.removal },
      { label: "Trimming & pruning", href: ROUTES.trimming },
      { label: "Stump grinding", href: ROUTES.stump },
      { label: "Emergency storm damage", href: ROUTES.emergency },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Tree removal cost", href: ROUTES.cost },
      { label: "Recent work", href: ROUTES.work },
      { label: "Minneapolis", href: ROUTES.minneapolis },
      { label: "What to expect", href: ROUTES.whatToExpect },
      { label: "Free quote", href: ROUTES.contact },
    ],
  },
];
