// Centralized content for Northline Tree Co. — fictional demo site for a
// Minneapolis / Twin Cities tree service. Every claim on the site is either a
// process commitment the company controls (written quote, cleanup, insured)
// or a regional fact (oak wilt window, boulevard tree rules). No fabricated
// reviews, license numbers, ratings, job counts, or dollar prices.
//
// To deploy for a real company: change COMPANY, PHONE, IMAGES, CITIES,
// and paste real reviews into REVIEWS. Everything else reads from here.

export const COMPANY = {
  name: "Northline Tree Co.",
  short: "Northline Tree",
  city: "Minneapolis, MN",
  metro: "Minneapolis–St. Paul metro",
  // Public site origin, used for canonical URLs and structured data.
  url: "https://northline-tree-demo.example",
  // Hours shown on the quote page. Emergency line is separate.
  hours: [
    { day: "Monday – Friday", time: "7:00 am – 6:00 pm" },
    { day: "Saturday", time: "8:00 am – 4:00 pm" },
    { day: "Sunday", time: "Emergency calls only" },
  ],
} as const;

// Fictional demo phone (555 number). Real CRM integration lives in
// src/lib/tracking.server.ts and is not changed here.
export const PHONE = "1-800-555-0134";
export const PHONE_HREF = "tel:18005550134";
// "Text a photo" CTA. The ?& form works on both iOS and Android.
export const SMS_HREF =
  "sms:18005550134?&body=Hi%2C%20I%27d%20like%20a%20quote.%20Here%27s%20a%20photo%20of%20the%20tree%3A";

// Local WebP photos in public/images (AI-generated for the demo; see
// scripts/convert-images.py). Swap each for a real crew/job photo before
// launch — that is the single biggest conversion lever on a tree service site.
export const IMAGES = {
  hero: "/images/hero.webp",
  removal: "/images/tree-removal.webp",
  trimming: "/images/tree-trimming.webp",
  stump: "/images/stump-grinding.webp",
  emergency: "/images/storm-damage.webp",
  clearing: "/images/lot-clearing.webp",
  cabling: "/images/cabling-bracing.webp",
  health: "/images/tree-health.webp",
  commercial: "/images/commercial.webp",
  rigging: "/images/rigging-detail.webp",
  stepPhoto: "/images/step-photo.webp",
  stepQuote: "/images/step-quote.webp",
  stepCrew: "/images/step-crew.webp",
  jobTightLot: "/images/job-tight-lot.webp",
  jobStorm: "/images/job-storm.webp",
  jobOak: "/images/job-oak.webp",
  jobAsh: "/images/job-ash.webp",
  jobCabledMaple: "/images/job-cabled-maple.webp",
  jobCommercialLot: "/images/job-commercial-lot.webp",
  jobStumps: "/images/job-stumps.webp",
  jobSpruce: "/images/job-spruce.webp",
  jobOakWilt: "/images/job-oak-wilt.webp",
} as const;

// Route paths. `as const` so TanStack Router's typed <Link to> accepts them.
export const ROUTES = {
  home: "/",
  contact: "/free-quote",
  whatToExpect: "/what-to-expect",
  cost: "/tree-removal-cost",
  removal: "/tree-removal",
  trimming: "/tree-trimming",
  stump: "/stump-grinding",
  emergency: "/emergency-tree-service",
  clearing: "/lot-clearing",
  cabling: "/cabling-bracing",
  arborist: "/arborist-consultation",
  commercial: "/commercial-tree-service",
  work: "/recent-work",
  workDetail: "/recent-work/$slug",
  city: "/tree-service/$city",
  privacy: "/privacy",
  terms: "/terms",
} as const;

export const MAIN_CITY_SLUG = "minneapolis-mn";

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
  { label: "Removal", to: ROUTES.removal },
  { label: "Trimming", to: ROUTES.trimming },
  { label: "Stumps", to: ROUTES.stump },
  { label: "Emergency", to: ROUTES.emergency },
  { label: "Cost", to: ROUTES.cost },
  { label: "Our Work", to: ROUTES.work },
] as const;

export const TOPBAR_LINKS = [
  { label: "What to expect", to: ROUTES.whatToExpect },
  { label: "Tree removal cost", to: ROUTES.cost },
  { label: "Recent work", to: ROUTES.work },
] as const;

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
    to: ROUTES.removal,
  },
  {
    name: "Trimming & Pruning",
    tagline: "Clear the roof, the lines, and the deadwood",
    image: IMAGES.trimming,
    alt: "Climber pruning a mature tree",
    to: ROUTES.trimming,
  },
  {
    name: "Stump Grinding",
    tagline: "Gone below grade, ready to seed",
    image: IMAGES.stump,
    alt: "Stump grinder clearing a stump in a lawn",
    to: ROUTES.stump,
  },
  {
    name: "Emergency Storm Damage",
    tagline: "Tree down? We answer 24/7",
    image: IMAGES.emergency,
    alt: "Storm-damaged tree fallen across a yard",
    to: ROUTES.emergency,
  },
  {
    name: "Lot & Brush Clearing",
    tagline: "Buildable lots and overgrown edges",
    image: IMAGES.clearing,
    alt: "Cleared lot with brush piled for chipping",
    to: ROUTES.clearing,
  },
  {
    name: "Cabling & Bracing",
    tagline: "Save a split tree instead of cutting it",
    image: IMAGES.cabling,
    alt: "Steel cable installed between two large limbs",
    to: ROUTES.cabling,
  },
  {
    name: "Arborist Consultation",
    tagline: "Oak wilt, ash borer, and 'is it dying?'",
    image: IMAGES.health,
    alt: "Arborist inspecting a tree trunk",
    to: ROUTES.arborist,
  },
  {
    name: "Commercial & HOA",
    tagline: "Scheduled care for properties with many trees",
    image: IMAGES.commercial,
    alt: "Crew working on trees at a commercial property",
    to: ROUTES.commercial,
  },
] as const;

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

// Helps a homeowner self-qualify.
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
    q: "Do I need a permit to remove a tree?",
    a: "Trees on your own property generally don't need a city permit in most metro cities. Trees in the boulevard between the sidewalk and street belong to the city and need approval first. We tell you which one you have at the quote.",
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

// Regional facts shared by every city page. Verified against Minnesota DNR
// guidance as of 2026 — re-check before publishing for a real company.
export const MN_LOCAL_NOTES = [
  {
    title: "Oak wilt: no oak pruning April–July",
    body: "The Minnesota DNR rates oak wilt risk high from April through July, when sap beetles carry the fungus to fresh cuts. We schedule oak trimming for November through March and won't cut a healthy oak in the risk window.",
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

// City pages. One entry per service area; each renders at /tree-service/$city.
// Neighborhood lists are illustrative — verify before publishing.
export type City = {
  slug: string;
  name: string;
  state: string;
  zips: string;
  intro: string;
  terrainTitle: string;
  terrain: string[];
  boulevard: { title: string; body: string };
  stats: { v: string; l: string }[];
  neighborhoods: string[];
};

export const CITIES: City[] = [
  {
    slug: "minneapolis-mn",
    name: "Minneapolis",
    state: "MN",
    zips: "554xx",
    intro:
      "Big old trees on small city lots, alleys instead of driveways, and a Park Board that owns the boulevard trees. We work Minneapolis every day and know which trees are yours to decide on, when it's safe to cut them, and how to get a 70-foot maple down without touching either neighbor's roof.",
    terrainTitle: "Working trees on a city lot",
    terrain: [
      "Minneapolis lots are narrow, the trees are old and tall, and the drop zone is usually somebody's roof. We rig from the alley when we can reach, climb when we can't, and lower every piece on a rope. Ground mats go down where the truck crosses turf.",
      "Straight-line winds every summer take down cottonwoods and silver maples first. If you have one over the house, a hazard assessment before storm season is cheaper than a crane after.",
    ],
    boulevard: {
      title: "Boulevard trees belong to the Park Board",
      body: "Trees between the sidewalk and the street are managed by the Minneapolis Park & Recreation Board. Pruning or removal needs their approval first. We tell you at the quote which trees are yours to decide on.",
    },
    stats: [
      { v: "Nov – Mar", l: "Oak pruning window" },
      { v: "Park Board", l: "Owns boulevard trees" },
      { v: "Alley access", l: "Bucket truck or climb" },
      { v: "24/7", l: "Storm line" },
    ],
    neighborhoods: [
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
    ],
  },
  {
    slug: "st-paul-mn",
    name: "St. Paul",
    state: "MN",
    zips: "551xx",
    intro:
      "St. Paul's older neighborhoods have some of the biggest elms and oaks left in the metro, on lots that were platted before bucket trucks existed. We climb what we can't reach, work around stone walls and retaining walls on the bluffs, and time oak and elm work for the safe season.",
    terrainTitle: "Old trees, tight lots, steep bluffs",
    terrain: [
      "Highland and Mac-Groveland lots often have a 90-foot oak in the back with a garage, a fence, and a neighbor's garage all under it. Those come down in roped sections from a climber, not a truck.",
      "Along the river bluffs and in the East Side, slopes mean the crew is working on grade. We stage wood uphill and lower everything so nothing rolls toward the house.",
    ],
    boulevard: {
      title: "Boulevard trees are city-owned",
      body: "Trees in the strip between sidewalk and curb are managed by St. Paul Forestry. Work on them needs the city's sign-off first. We'll tell you at the quote which of your trees that applies to.",
    },
    stats: [
      { v: "Nov – Mar", l: "Oak & elm pruning window" },
      { v: "City Forestry", l: "Owns boulevard trees" },
      { v: "Climbed", l: "When the truck can't reach" },
      { v: "24/7", l: "Storm line" },
    ],
    neighborhoods: [
      "Highland Park",
      "Mac-Groveland",
      "Summit Hill",
      "Como",
      "St. Anthony Park",
      "Merriam Park",
      "Dayton's Bluff",
      "Payne-Phalen",
    ],
  },
  {
    slug: "bloomington-mn",
    name: "Bloomington",
    state: "MN",
    zips: "5542x, 5543x",
    intro:
      "Bloomington runs from wooded river-bluff lots near Hyland to wide suburban yards on the east side. That means big mature oaks with oak wilt pockets on one end and 1970s ash and spruce dying on the other. We handle both, with equipment that fits the lot.",
    terrainTitle: "Oaks on the bluffs, ash in the subdivisions",
    terrain: [
      "West Bloomington's oak stands are exactly where oak wilt spreads root-to-root. If one oak in a group dies, we'll tell you what's actually at risk and when it's safe to cut so you don't lose the rest.",
      "East side yards usually have truck access from the driveway, which keeps removals fast and the price down. Where they don't, we climb.",
    ],
    boulevard: {
      title: "Boulevard and park-adjacent trees",
      body: "Trees in the city right-of-way and along parkland are the city's call. We check before quoting so you're not paying for a tree you don't control.",
    },
    stats: [
      { v: "Nov – Mar", l: "Oak pruning window" },
      { v: "Oak wilt", l: "Known pockets west side" },
      { v: "Driveway access", l: "Most east-side lots" },
      { v: "24/7", l: "Storm line" },
    ],
    neighborhoods: [
      "West Bloomington",
      "East Bloomington",
      "Oxboro",
      "Penn-American",
      "Normandale",
      "Hyland area",
      "Nine Mile Creek",
      "Valley View",
    ],
  },
  {
    slug: "edina-mn",
    name: "Edina",
    state: "MN",
    zips: "5541x, 5543x",
    intro:
      "Edina yards are built around their trees — big oaks and maples that make the lot. Our default here is to save what can be saved: proper pruning, cabling on split unions, and treatment advice before anyone talks removal. When a tree does have to go, it comes down clean with the lawn and plantings intact.",
    terrainTitle: "Keeping the trees that make the lot",
    terrain: [
      "Country Club and Morningside lots have mature canopy and landscaping right up to the trunk. We rig every piece, use ground mats, and hand-carry wood where a truck would rut the lawn.",
      "Many neighborhoods have architectural or HOA review. We'll tell you at the quote if your removal needs a form and can supply the arborist letter that usually goes with it.",
    ],
    boulevard: {
      title: "Boulevard trees and city review",
      body: "Trees in the boulevard are the city's. Some Edina removals on private property also require a permit depending on size and location — we check the current rule at the quote rather than guess.",
    },
    stats: [
      { v: "Nov – Mar", l: "Oak pruning window" },
      { v: "Save first", l: "Prune or cable before removal" },
      { v: "Mats down", l: "Lawn and beds protected" },
      { v: "24/7", l: "Storm line" },
    ],
    neighborhoods: [
      "Country Club",
      "Morningside",
      "Indian Hills",
      "Cahill",
      "Southdale area",
      "Interlachen",
      "Braemar",
      "Parkwood Knolls",
    ],
  },
  {
    slug: "plymouth-mn",
    name: "Plymouth",
    state: "MN",
    zips: "5544x",
    intro:
      "Plymouth's subdivisions were planted heavy on ash in the 80s and 90s, and emerald ash borer is taking them out street by street. We do a lot of multi-tree ash removals here at a per-tree rate, plus storm cleanup around the lakes where the wind comes across open water.",
    terrainTitle: "Ash removals and lakeside wind",
    terrain: [
      "If you have three or four dead ash in a row, we take them all in one day with the bucket truck and grind the stumps the same visit. Dead ash is brittle, so we don't climb it — that's a safety rule, not a preference.",
      "Lots on Medicine Lake and Bass Lake catch straight-line wind with nothing to slow it. Cottonwoods and willows near the water are the first to fail; we can tell you which ones are a risk before a storm decides.",
    ],
    boulevard: {
      title: "Boulevard trees",
      body: "Trees in the right-of-way between sidewalk and street are managed by the city. We'll confirm which trees are yours before quoting.",
    },
    stats: [
      { v: "Per tree", l: "Multi-ash rate" },
      { v: "Bucket truck", l: "No climbing dead ash" },
      { v: "Same visit", l: "Stumps ground with removal" },
      { v: "24/7", l: "Storm line" },
    ],
    neighborhoods: [
      "Plymouth Creek",
      "Medicine Lake",
      "Bass Lake",
      "Fernbrook",
      "Vicksburg",
      "Zachary Lane",
      "Wayzata schools area",
      "Parkers Lake",
    ],
  },
  {
    slug: "maple-grove-mn",
    name: "Maple Grove",
    state: "MN",
    zips: "55311, 55369",
    intro:
      "Maple Grove has good equipment access on most lots and a lot of trees planted at the same time — which means a lot of them failing at the same time. Dead ash, dying Colorado spruce, and overgrown front-yard maples are most of what we do here.",
    terrainTitle: "Same-age trees, same-year problems",
    terrain: [
      "Blue spruce planted in the 90s are losing needles to fungal needle cast across the north metro. We'll tell you honestly whether yours can be treated or has already passed the point where removal is the only option.",
      "Wide driveways and open side yards mean the bucket truck and chipper can usually park next to the tree. That's the cheapest removal there is, and we price it that way.",
    ],
    boulevard: {
      title: "Boulevard trees",
      body: "Right-of-way trees are managed by the city. We check before quoting so you know which trees are yours to decide on.",
    },
    stats: [
      { v: "Truck access", l: "Most lots — lower cost" },
      { v: "Spruce", l: "Needle cast assessments" },
      { v: "Per tree", l: "Multi-tree rate" },
      { v: "24/7", l: "Storm line" },
    ],
    neighborhoods: [
      "Arbor Lakes",
      "Rice Lake",
      "Weaver Lake",
      "Fish Lake",
      "Elm Creek",
      "Eagle Lake",
      "Bottineau",
      "Cedar Island Lake",
    ],
  },
  {
    slug: "brooklyn-park-mn",
    name: "Brooklyn Park",
    state: "MN",
    zips: "55428, 55443, 55444, 55445",
    intro:
      "Brooklyn Park gets hit hard by summer storms coming across the northwest metro, and the big cottonwoods and silver maples along the creeks are the first to go. We run storm response here every summer and do a steady stream of ash removals the rest of the year.",
    terrainTitle: "Storm trees and creek-side cottonwoods",
    terrain: [
      "Cottonwoods along Shingle Creek and the Mississippi corridor grow fast, hollow out, and drop limbs the size of small trees. If you have one over the house, get it looked at before July.",
      "Older neighborhoods have mature ash on nearly every lot. We price multi-tree removals per tree and grind the stumps the same day so the yard is ready to reseed.",
    ],
    boulevard: {
      title: "Boulevard trees",
      body: "Trees in the city right-of-way are the city's responsibility. We confirm ownership at the quote.",
    },
    stats: [
      { v: "Storm crews", l: "Every summer" },
      { v: "Per tree", l: "Multi-ash rate" },
      { v: "Photos", l: "For insurance claims" },
      { v: "24/7", l: "Storm line" },
    ],
    neighborhoods: [
      "Edinburgh",
      "Brookdale",
      "Noble Parkway",
      "Zane Avenue",
      "Shingle Creek",
      "Oak Grove",
      "River Park",
      "Xerxes",
    ],
  },
  {
    slug: "eagan-mn",
    name: "Eagan",
    state: "MN",
    zips: "55121, 55122, 55123",
    intro:
      "Eagan is oak country, and oak wilt is a real problem in Dakota County. Timing matters here more than anywhere else in the metro: we won't prune or cut a healthy oak April through July, and if you have a dying oak in a stand we'll tell you what that means for its neighbors.",
    terrainTitle: "Oak wilt and hillside lots",
    terrain: [
      "Oak wilt moves through root grafts between neighboring oaks. Removing one infected tree the wrong way can spread it. We cut in the safe window, seal wounds when a cut can't wait, and can point you to root-graft disruption if a stand is at risk.",
      "A lot of Eagan lots drop steeply to a pond or wetland behind the house. We stage from the driveway and lower wood uphill so nothing ends up in the water or on the neighbor's deck.",
    ],
    boulevard: {
      title: "Boulevard trees",
      body: "Trees in the right-of-way belong to the city. We'll confirm which trees are yours to decide on before quoting.",
    },
    stats: [
      { v: "Nov – Mar", l: "Oak pruning window — strict" },
      { v: "Root grafts", l: "Oak wilt spread checked" },
      { v: "Slopes", l: "Rigged uphill" },
      { v: "24/7", l: "Storm line" },
    ],
    neighborhoods: [
      "Cedar Grove",
      "Wescott",
      "Thomas Lake",
      "Blackhawk",
      "Wilderness Run",
      "Lexington-Diffley",
      "Northview",
      "Pilot Knob",
    ],
  },
];

export const getCity = (slug: string) => CITIES.find((c) => c.slug === slug);

// Recent work gallery (illustrative demo jobs)
export const PROJECTS = [
  {
    slug: "silver-maple-over-garage",
    city: "Minneapolis, MN",
    citySlug: "minneapolis-mn",
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
    citySlug: "edina-mn",
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
    citySlug: "st-paul-mn",
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
    citySlug: "plymouth-mn",
    zip: "55447",
    title: "Four ash trees, one day",
    meta: "Ash borer · multi-tree rate",
    image: IMAGES.jobAsh,
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
    citySlug: "bloomington-mn",
    zip: "55437",
    title: "Cabling a split maple instead of removing it",
    meta: "Cabling & bracing · tree saved",
    image: IMAGES.jobCabledMaple,
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
    citySlug: "minneapolis-mn",
    zip: "55414",
    title: "Commercial lot cleanup",
    meta: "12 trees pruned · lot edge cleared",
    image: IMAGES.jobCommercialLot,
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
    citySlug: "maple-grove-mn",
    zip: "55369",
    title: "Seven stumps, one visit",
    meta: "Stump grinding · ready to seed",
    image: IMAGES.jobStumps,
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
    citySlug: "brooklyn-park-mn",
    zip: "55444",
    title: "Dying spruce line along a driveway",
    meta: "Six spruce · needle cast · 1 day",
    image: IMAGES.jobSpruce,
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
  {
    slug: "oak-stand-eagan",
    city: "Eagan, MN",
    citySlug: "eagan-mn",
    zip: "55123",
    title: "Oak wilt removal without losing the stand",
    meta: "Removal · winter · root grafts checked",
    image: IMAGES.jobOakWilt,
    alt: "Infected oak removed from a stand in Eagan",
    service: "Tree removal",
    size: "One 55 ft red oak, infected",
    access: "Hillside, climbed",
    stump: "Ground",
    duration: "1 day",
    wood: "Hauled off site",
    summary:
      "One red oak in a stand of five showed oak wilt. Removed in January outside the risk window, wood hauled off site rather than left as firewood, and the homeowner pointed to root-graft disruption for the rest.",
    detail:
      "Infected oak wood left on site can spread the fungus. Hauling it and timing the cut for winter protected the remaining four trees.",
  },
];

export const FOOTER_COLUMNS = [
  {
    heading: "Services",
    links: [
      { label: "Tree removal", to: ROUTES.removal },
      { label: "Trimming & pruning", to: ROUTES.trimming },
      { label: "Stump grinding", to: ROUTES.stump },
      { label: "Emergency storm damage", to: ROUTES.emergency },
      { label: "Lot & brush clearing", to: ROUTES.clearing },
      { label: "Cabling & bracing", to: ROUTES.cabling },
      { label: "Arborist consultation", to: ROUTES.arborist },
      { label: "Commercial & HOA", to: ROUTES.commercial },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Tree removal cost", to: ROUTES.cost },
      { label: "Recent work", to: ROUTES.work },
      { label: "What to expect", to: ROUTES.whatToExpect },
      { label: "Free quote", to: ROUTES.contact },
      { label: "Privacy policy", to: ROUTES.privacy },
      { label: "Terms of service", to: ROUTES.terms },
    ],
  },
] as const;
