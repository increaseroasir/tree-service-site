// Centralized content for Ironwood Fence Co. — fictional demo site.
// Minneapolis / Twin Cities fencing context. No fabricated reviews, license
// numbers, discounts, guarantees, finance amounts, or performance figures.
// Pricing is presented as cost *factors* with clearly-labelled illustrative
// ranges only — never as a quote.

export const IMAGES = {
  hero: "https://vibe.filesafe.space/1789069681037500741/assets/f5a52abe-ce69-46a7-b5bc-71c8740db51d.png",
  woodPrivacy:
    "https://vibe.filesafe.space/1789069681037500741/assets/c27e6928-f5d0-49a1-8e38-62a88945d707.png",
  vinyl:
    "https://vibe.filesafe.space/1789069681037500741/assets/8cb092b7-8f40-49e2-8835-8eb854c23f05.png",
  aluminum:
    "https://vibe.filesafe.space/1789069681037500741/assets/29662c07-b2dd-4df3-bce1-bb56a35c5689.png",
  chainLink:
    "https://vibe.filesafe.space/1789069681037500741/assets/5eb06665-e79d-4226-b0cb-bb3191f3de9c.png",
  gates:
    "https://vibe.filesafe.space/1789069681037500741/assets/d4a42bb3-31bd-411e-9bee-5b746139277c.png",
  pool: "https://vibe.filesafe.space/1789069681037500741/assets/b6f7a407-6749-41c7-b47f-318aa3c7ad23.png",
  commercial:
    "https://vibe.filesafe.space/1789069681037500741/assets/4f7e3b3a-8fd5-4c5d-ad9e-67889b70d395.png",
  repairStaining:
    "https://vibe.filesafe.space/1789069681037500741/assets/dbcfca09-dfc8-4828-a453-0cb6861d8e0f.png",
  postDetail:
    "https://vibe.filesafe.space/1789069681037500741/assets/b43841ec-857c-4588-9a57-d7ec579e6cd3.png",
  stepWalkLine:
    "https://vibe.filesafe.space/1789069681037500741/assets/75e6eacc-f9ed-4aaf-af1c-dc80c8312cdd.png",
  stepEstimate:
    "https://vibe.filesafe.space/1789069681037500741/assets/5bd5ff57-3c24-43f2-bd64-4c5836b1420d.png",
  stepInstall:
    "https://vibe.filesafe.space/1789069681037500741/assets/16fe4bb9-8c57-4a0c-b50e-783a1407356f.png",
  testimonialDana:
    "https://vibe.filesafe.space/1789069681037500741/assets/4301f111-91a8-4b90-afe8-d6e57ab3d4b5.png",
  testimonialPool:
    "https://vibe.filesafe.space/1789069681037500741/assets/75080809-c2a7-4236-a5ce-6b9eb5c28a5a.png",
  testimonialGate:
    "https://vibe.filesafe.space/1789069681037500741/assets/18da1870-7cc5-4c53-abef-849cf8fe8447.png",
};

// Fictional demo phone (555 number). Real CRM integration is preserved
// separately in src/lib/tracking.ts and is not changed here.
export const PHONE = "1-800-555-0134";
export const PHONE_HREF = "tel:18005550134";

export const ROUTES = {
  home: "/",
  contact: "/contact",
  beforeEstimate: "/before-your-estimate",
  cost: "/fence-cost",
  woodPrivacy: "/wood-privacy-fence",
  vinyl: "/vinyl-fence",
  aluminum: "/aluminum-fence",
  chainLink: "/chain-link-fence",
  minneapolis: "/fence-installation-minneapolis-mn",
  projects: "/projects",
};

// Hash routes for preselecting fence type on the contact form.
export const CONTACT_PRESELECT: Record<string, string> = {
  gates: "Gates & Openers",
  pool: "Pool Fencing",
  commercial: "Commercial",
  repair: "Repair & Staining",
};

export const NAV_LINKS = [
  { label: "Wood Privacy", href: ROUTES.woodPrivacy },
  { label: "Vinyl", href: ROUTES.vinyl },
  { label: "Aluminum", href: ROUTES.aluminum },
  { label: "Chain Link", href: ROUTES.chainLink },
  { label: "Projects", href: ROUTES.projects },
  { label: "Minneapolis", href: ROUTES.minneapolis },
  { label: "Cost", href: ROUTES.cost },
  { label: "Contact", href: ROUTES.contact },
];

export const TOPBAR_LINKS = [
  { label: "Before your estimate", href: ROUTES.beforeEstimate },
  { label: "Fence cost", href: ROUTES.cost },
  { label: "Projects", href: ROUTES.projects },
];

export const SERVICES = [
  {
    name: "Wood Privacy",
    image: IMAGES.woodPrivacy,
    alt: "Cedar wood privacy fence",
    href: ROUTES.woodPrivacy,
  },
  {
    name: "Vinyl",
    image: IMAGES.vinyl,
    alt: "White vinyl privacy fence",
    href: ROUTES.vinyl,
  },
  {
    name: "Ornamental Aluminum",
    image: IMAGES.aluminum,
    alt: "Black ornamental aluminum fence",
    href: ROUTES.aluminum,
  },
  {
    name: "Chain Link",
    image: IMAGES.chainLink,
    alt: "Galvanized chain link fence",
    href: ROUTES.chainLink,
  },
  {
    name: "Gates & Openers",
    image: IMAGES.gates,
    alt: "Black double swing driveway gate",
    href: `${ROUTES.contact}#gates`,
  },
  {
    name: "Pool Fencing",
    image: IMAGES.pool,
    alt: "Black aluminum pool safety fence",
    href: `${ROUTES.contact}#pool`,
  },
  {
    name: "Commercial",
    image: IMAGES.commercial,
    alt: "Commercial chain link security fence",
    href: `${ROUTES.contact}#commercial`,
  },
  {
    name: "Repair & Staining",
    image: IMAGES.repairStaining,
    alt: "Applying stain to a weathered wood fence",
    href: `${ROUTES.contact}#repair`,
  },
];

// Educational facts (not company performance claims) for the homepage stat band.
export const STATS = [
  {
    value: "Varies",
    label: "Local frost depth — posts set below to resist heave",
  },
  { value: "6 ft", label: "Common residential privacy fence height" },
  { value: "Permits", label: "Pulled when local code requires one" },
  { value: "Locate", label: "Utility lines marked before any digging" },
];

export const STEPS = [
  {
    image: IMAGES.stepWalkLine,
    alt: "Estimator and homeowner walking the property line",
    label: "Step 1",
    title: "Walk the line",
    body: "We walk your property line with you, check grade and access, mark utilities, and show you material samples in daylight.",
  },
  {
    image: IMAGES.stepEstimate,
    alt: "Estimator showing a quote on a tablet",
    label: "Step 2",
    title: "Price it on the spot",
    body: "You get a written, per-foot price before we leave, plus a realistic install window based on your yard.",
  },
  {
    image: IMAGES.stepInstall,
    alt: "Crew setting a fence post with an auger",
    label: "Step 3",
    title: "Build and clean up",
    body: "Our own crews dig, set and hang everything, then haul off the old fence and rake the site before they go.",
  },
];

// Educational material comparison (replaces fabricated testimonials).
export const MATERIALS = [
  {
    image: IMAGES.woodPrivacy,
    alt: "Cedar wood privacy fence",
    title: "Wood",
    body: "Cedar and pressure-treated pine. Natural look, can be stained, needs periodic refinishing. Good for privacy on a budget.",
  },
  {
    image: IMAGES.vinyl,
    alt: "White vinyl privacy fence",
    title: "Vinyl",
    body: "PVC panels that won't rot or need paint. Higher up-front cost, very low maintenance. Holds up to moisture and cold.",
  },
  {
    image: IMAGES.aluminum,
    alt: "Black ornamental aluminum fence",
    title: "Aluminum",
    body: "Powder-coated ornamental pickets. Won't rust, open look, popular for front yards and pool code barriers.",
  },
  {
    image: IMAGES.chainLink,
    alt: "Galvanized chain link fence",
    title: "Chain Link",
    body: "Galvanized or coated steel mesh. Lowest cost, durable, see-through. Common for pets, side yards, and commercial lots.",
  },
];

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

// Cost factors (no dollar quotes). Used on the cost page and service page.
export const COST_FACTORS = [
  {
    title: "Material & height",
    body: "Taller fences and premium materials (cedar, vinyl, aluminum) use more material per foot than short chain link.",
  },
  {
    title: "Slope & grade",
    body: "Stepping or racking panels across a drop adds labor and custom cuts. A sloped lot typically runs more than a flat one.",
  },
  {
    title: "Soil & rock",
    body: "Glacial till and buried rock mean hand-digging or a rock bit on some post holes, which adds time per affected post.",
  },
  {
    title: "Tear-out & haul-off",
    body: "Removing an existing fence adds labor and disposal. Cost depends on what it's made of and how it was set.",
  },
  {
    title: "Gates & access",
    body: "Walk gates, double drive gates, and openers add material and wiring. Tight access can mean carrying materials by hand.",
  },
  {
    title: "Finish & hardware",
    body: "Stain/sealer, hot-dip hardware, and post caps are add-ons that extend the life and look of the fence.",
  },
];

// Clearly-labelled ILLUSTRATIVE ranges only — not a quote. Per-foot, installed.
export const ILLUSTRATIVE_RANGES = [
  {
    material: "4 ft chain link",
    note: "Galvanized, top rail",
    perFoot: "Lowest",
  },
  {
    material: "6 ft wood, side-by-side",
    note: "Pine or cedar",
    perFoot: "Mid",
  },
  {
    material: "6 ft wood, board-on-board",
    note: "Cedar, no gaps as wood dries",
    perFoot: "Mid-high",
  },
  {
    material: "5 ft ornamental aluminum",
    note: "Powder-coated, spear top",
    perFoot: "Higher",
  },
  {
    material: "6 ft vinyl privacy",
    note: "Tongue-and-groove panel",
    perFoot: "Highest",
  },
];

export const COST_FAQ = [
  {
    q: "Why do fence quotes vary so much?",
    a: "Post depth, concrete, hardware grade, and whether the crew is employed or subcontracted all change the number. A low quote often shows up in one of those places — and again a few winters later when posts start to heave.",
  },
  {
    q: "Do you charge for the estimate?",
    a: "No. Estimates are free and you get a written per-foot price before we leave. There's no fee if you decide not to move forward.",
  },
  {
    q: "Can the price change after the quote?",
    a: "Only if the scope changes. If we hit unexpected rock, we tell you before we keep digging — we don't invoice surprises.",
  },
  {
    q: "How is the price figured?",
    a: "By the linear foot of fence line, plus gates and any tear-out. The factors above are what move the per-foot number up or down.",
  },
];

// Wood privacy service page
export const WOOD_STYLES = [
  {
    image: IMAGES.woodPrivacy,
    alt: "Board-on-board cedar fence",
    title: "Board-on-board",
    body: "Overlapping pickets, no gaps as the wood dries. The most-requested full-privacy build.",
  },
  {
    image: IMAGES.repairStaining,
    alt: "Stained cedar fence",
    title: "Stained & sealed",
    body: "Add a stain after the wood cures to hold color and slow weathering from sun and moisture.",
  },
  {
    image: IMAGES.gates,
    alt: "Wood fence with drive gate",
    title: "With drive gate",
    body: "Single or double gates framed in steel so they don't sag, with an optional opener.",
  },
  {
    image: IMAGES.postDetail,
    alt: "Cedar fence post set in concrete",
    title: "Stepped for slope",
    body: "On grade changes we step or rack the panels instead of leaving gaps underneath.",
  },
];

export const WOOD_INCLUDED = [
  "Utility locate called in and marked",
  "Permit pulled when local code requires",
  "Posts set in concrete, below the frost line",
  "Hot-dip galvanized hardware throughout",
  "Old fence torn out and hauled away",
  "Work line raked and blown clean",
  "Gate-by-gate walkthrough before we leave",
];

export const WOOD_FAQ = [
  {
    q: "How long does a wood fence last in Minnesota?",
    a: "Fifteen to twenty years is typical when posts are set below the local frost line and the fence is stained every few years. Freeze-thaw and moisture at ground level are hard on untreated wood, which is why post depth matters more than picket grade. Local frost depth varies by municipality — confirm the required post depth before building.",
  },
  {
    q: "Board-on-board or side-by-side?",
    a: "Side-by-side costs less; board-on-board stays private after the wood shrinks. If full screening matters to you, spend there before spending on height.",
  },
  {
    q: "Do I need a permit?",
    a: "Many residential fences under a set height don't need a building permit, but setbacks, corner-lot sight lines, and HOA rules still apply. We check all three and handle the paperwork. Verify current rules with your city before publishing any claim.",
  },
  {
    q: "Which side faces my neighbor?",
    a: "Your call, and worth deciding before install day. Board-on-board looks the same from both sides, which is why it's the easy answer on shared lines.",
  },
];

export const WOOD_GALLERY = [
  {
    image: IMAGES.testimonialDana,
    alt: "Cedar privacy fence on a sloped lot",
    caption: "Minneapolis · board-on-board",
  },
  {
    image: IMAGES.woodPrivacy,
    alt: "Six-foot cedar fence",
    caption: "St. Paul · side-by-side",
  },
  {
    image: IMAGES.gates,
    alt: "Cedar fence with double drive gate",
    caption: "Edina · double gate",
  },
  {
    image: IMAGES.repairStaining,
    alt: "Stained cedar fence",
    caption: "Plymouth · stained",
  },
];

// Before-your-estimate page
export const PREP_STEPS = [
  {
    label: "Step 1",
    title: "The estimate",
    body: "We arrive on time, walk your property line with you, measure exact footage, check grade and gate access, and leave a written per-foot price before we go.",
  },
  {
    label: "Step 2",
    title: "Permits & scheduling",
    body: "Once you approve the quote we pull any required permit, file HOA paperwork, and call in the utility locate. Then we lock a date that works for your schedule.",
  },
  {
    label: "Step 3",
    title: "The install",
    body: "Our own crew digs, sets every post in concrete below the frost line, and hangs panels and gates on hot-dip hardware.",
  },
  {
    label: "Step 4",
    title: "Walkthrough & cleanup",
    body: "We haul off the old fence, rake and blow the work line, then walk the finished fence with you gate by gate before anyone leaves.",
  },
];

export const PREP_FAQ = [
  {
    q: "Do I need to be home for the estimate?",
    a: "It helps a lot. Walking the line together is how we settle height, gate placement, and which side the good face goes on. If you can't be there, we can measure and email a written quote the same day.",
  },
  {
    q: "Do I need a survey or a permit?",
    a: "We pull the permit and handle HOA submittals for you. If your property pins can't be found, we'll tell you at the estimate whether a survey is worth it before anything gets dug.",
  },
  {
    q: "Will the install damage my lawn or sprinklers?",
    a: "We call in the utility locate, hand-dig near irrigation heads, and use ground mats where equipment has to cross turf. Anything we disturb gets repaired before we call the job done.",
  },
  {
    q: "How long does a fence take to install?",
    a: "Most residential yards are one to two days once materials are on site. Gates with openers add a half day. You'll get a real window in writing, not a 'sometime next month.'",
  },
  {
    q: "What should I do to prepare?",
    a: "Mark any sprinkler heads you know of, note where you'd like gates, check your HOA's fence rules if you have one, and keep pets inside during the visit. That's it — we bring everything else.",
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

export const MSP_PERMIT_NOTES = [
  {
    title: "Height limits",
    body: "Rear and side yards commonly allow six feet; front yards are lower, with reduced heights at corner-lot sight triangles. Rules vary by city.",
  },
  {
    title: "Permits",
    body: "Many residential fences under a set height don't need a building permit, but pool barriers usually do. We pull it either way when one is required.",
  },
  {
    title: "HOA review",
    body: "Many subdivisions require architectural approval. We prepare the submittal packet with drawings and material specs — you just sign it.",
  },
  {
    title: "Utility locate",
    body: "Called in on every job. State law requires it before digging, and it's free to the homeowner.",
  },
];

// Projects gallery (illustrative demo projects)
export const PROJECTS = [
  {
    slug: "cedar-privacy-sloped-lot",
    city: "Minneapolis, MN",
    zip: "55408",
    title: "Cedar privacy on a sloped lot",
    meta: "210 ft · board-on-board · 2 days",
    image: IMAGES.woodPrivacy,
    alt: "Cedar board-on-board privacy fence in Minneapolis",
    material: "Western red cedar",
    style: "6 ft board-on-board",
    footage: "210 linear feet",
    gates: "One framed walk gate",
    buildTime: "2 days",
    tearOut: "Yes — old wood hauled",
    summary:
      "The back property line dropped several feet from one corner to the other, and the previous fence had been built level — leaving gaps underneath. We stepped the panels so the top line reads straight from the patio while the bottom follows grade.",
    detail:
      "Two posts hit glacial rock about eighteen inches down. We switched to a rock bit rather than shifting the post spacing, which kept the panel rhythm consistent across the run. Old fence out, new fence up, site raked in two days.",
  },
  {
    slug: "pool-barrier-aluminum",
    city: "Edina, MN",
    zip: "55436",
    title: "Pool barrier, permitted",
    meta: "140 ft · aluminum · 2 gates",
    image: IMAGES.pool,
    alt: "Black aluminum pool safety fence in Edina",
    material: "Powder-coated aluminum",
    style: "5 ft pool barrier",
    footage: "140 linear feet",
    gates: "Two self-closing gates",
    buildTime: "1.5 days",
    tearOut: "No",
    summary:
      "Code-compliant pool fence with self-closing, self-latching gates. Permit pulled and inspection passed before the pool was filled.",
    detail:
      "Aluminum was chosen for its rust resistance near chlorinated water. Gate hardware was set to self-close and self-latch from any open position to meet barrier code.",
  },
  {
    slug: "double-drive-gate",
    city: "Plymouth, MN",
    zip: "55447",
    title: "Double drive gate with opener",
    meta: "240 ft · cedar & steel frame",
    image: IMAGES.gates,
    alt: "Double swing driveway gate in Plymouth",
    material: "Cedar on steel frame",
    style: "6 ft privacy with drive gate",
    footage: "240 linear feet",
    gates: "Double drive gate + opener",
    buildTime: "2.5 days",
    tearOut: "Partial",
    summary:
      "Steel-framed double swing gate with a wired opener, hung on cedar privacy runs on both sides of the drive.",
    detail:
      "The steel frame keeps the wide gate from sagging over time. The opener was wired and tested the same afternoon it was hung.",
  },
  {
    slug: "vinyl-replacement",
    city: "St. Paul, MN",
    zip: "55116",
    title: "Vinyl replacing failed chain link",
    meta: "165 ft · vinyl · tear-out included",
    image: IMAGES.vinyl,
    alt: "White vinyl privacy fence in St. Paul",
    material: "White vinyl privacy",
    style: "6 ft tongue-and-groove",
    footage: "165 linear feet",
    gates: "One walk gate",
    buildTime: "2 days",
    tearOut: "Yes — chain link hauled",
    summary:
      "HOA-approved white vinyl replacing a rusted chain link fence. Old fence hauled the same day it came out.",
    detail:
      "Vinyl was chosen for zero maintenance in a wet, shaded side yard. Posts were set below the frost line to prevent heave.",
  },
  {
    slug: "front-yard-aluminum",
    city: "Bloomington, MN",
    zip: "55437",
    title: "Front-yard ornamental aluminum",
    meta: "120 ft · spear top · HOA approved",
    image: IMAGES.aluminum,
    alt: "Ornamental aluminum fence in Bloomington",
    material: "Powder-coated aluminum",
    style: "4 ft spear top",
    footage: "120 linear feet",
    gates: "One walk gate",
    buildTime: "1 day",
    tearOut: "No",
    summary:
      "Open ornamental aluminum for a front yard, kept under the corner-lot sight-line height limit and approved by the HOA.",
    detail:
      "Spear-top pickets were spaced to meet the HOA's openness requirement while still defining the property line.",
  },
  {
    slug: "commercial-security",
    city: "Minneapolis, MN",
    zip: "55414",
    title: "Equipment yard security fence",
    meta: "620 ft · 8 ft chain link",
    image: IMAGES.commercial,
    alt: "Commercial security fence in Minneapolis",
    material: "Galvanized chain link",
    style: "8 ft commercial",
    footage: "620 linear feet",
    gates: "One drive gate",
    buildTime: "1 week",
    tearOut: "No",
    summary:
      "Eight-foot galvanized chain link around an equipment yard, with a wide drive gate for delivery access.",
    detail:
      "Posts were set deeper and closer together to handle the extra height and wind load on the long runs.",
  },
  {
    slug: "storm-repair-restain",
    city: "Maple Grove, MN",
    zip: "55369",
    title: "Storm repair and restain",
    meta: "180 ft · 3 sections rebuilt",
    image: IMAGES.repairStaining,
    alt: "Restained wood fence in Maple Grove",
    material: "Existing cedar, restained",
    style: "6 ft privacy, repaired",
    footage: "180 linear feet",
    gates: "Existing gate re-hung",
    buildTime: "1 day",
    tearOut: "3 sections",
    summary:
      "A storm dropped a limb across three sections. We braced it the next morning, rebuilt the damaged panels, and restained the whole run to match.",
    detail:
      "Restaining the full run blended the new pickets with the older wood so the repair doesn't read as a patch.",
  },
  {
    slug: "dog-run-chain-link",
    city: "Brooklyn Park, MN",
    zip: "55444",
    title: "Dog run and side yard",
    meta: "190 ft · 4 ft chain link · 1 day",
    image: IMAGES.chainLink,
    alt: "Galvanized chain link fence in Brooklyn Park",
    material: "Galvanized chain link",
    style: "4 ft chain link",
    footage: "190 linear feet",
    gates: "One walk gate",
    buildTime: "1 day",
    tearOut: "No",
    summary:
      "Four-foot chain link for a side-yard dog run — durable, see-through, and quick to install.",
    detail:
      "A tight-bottom rail keeps the run secure at ground level where a determined dog might otherwise push under.",
  },
];

export const FOOTER_COLUMNS = [
  {
    heading: "Fencing",
    links: [
      { label: "Wood privacy", href: ROUTES.woodPrivacy },
      { label: "Fence cost", href: ROUTES.cost },
      { label: "Projects", href: ROUTES.projects },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Minneapolis", href: ROUTES.minneapolis },
      { label: "Before your estimate", href: ROUTES.beforeEstimate },
      { label: "Contact", href: ROUTES.contact },
    ],
  },
];
