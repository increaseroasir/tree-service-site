// Generates branded placeholder SVGs into public/images so the demo renders
// with zero external assets. Replace each file with a real job photo of the
// same name (any format — update IMAGES in src/lib/content.ts if the
// extension changes).
//
//   node scripts/make-placeholders.mjs
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, "..", "public", "images");
mkdirSync(out, { recursive: true });

const files = {
  "hero": "Crew · large removal over a house",
  "tree-removal": "Tree removal",
  "tree-trimming": "Trimming & pruning",
  "stump-grinding": "Stump grinding",
  "storm-damage": "Emergency storm damage",
  "lot-clearing": "Lot & brush clearing",
  "cabling-bracing": "Cabling & bracing",
  "tree-health": "Arborist visit",
  "commercial": "Commercial & HOA",
  "rigging-detail": "Rigging · limb lowered on rope",
  "step-photo": "Step 1 · text a photo",
  "step-quote": "Step 2 · written quote",
  "step-crew": "Step 3 · crew on site",
  "job-tight-lot": "Job · tight city lot",
  "job-storm": "Job · storm oak on roof",
  "job-oak": "Job · winter oak pruning",
};

// Simple tree silhouettes; positions vary per file so cards don't look identical.
const tree = (x, y, s, fill) =>
  `<g transform="translate(${x} ${y}) scale(${s})" fill="${fill}">
    <path d="M0 -120 L60 -40 H30 L70 20 H20 V60 H-20 V20 H-70 L-30 -40 H-60 Z"/>
  </g>`;

let i = 0;
for (const [name, label] of Object.entries(files)) {
  const seed = i++;
  const w = 1200;
  const h = 800;
  const t1 = tree(300 + (seed * 37) % 200, 520, 2.2 + (seed % 3) * 0.3, "#1f3a2d");
  const t2 = tree(820 + (seed * 53) % 160, 560, 1.6 + (seed % 2) * 0.4, "#24463a");
  const t3 = tree(580 + (seed * 29) % 120, 600, 1.1, "#1a3026");
  const esc = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)} placeholder">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#3f6a56"/>
      <stop offset="1" stop-color="#2c4a3d"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#sky)"/>
  <rect y="640" width="${w}" height="160" fill="#1b2e25"/>
  ${t1}${t2}${t3}
  <rect x="40" y="40" width="${label.length * 15 + 60}" height="56" fill="#a3521d"/>
  <text x="70" y="78" font-family="Barlow Condensed, Impact, Arial Narrow, sans-serif" font-size="28" font-weight="700" fill="#fff" letter-spacing="2">${esc(label.toUpperCase())}</text>
  <text x="40" y="770" font-family="Arial, sans-serif" font-size="20" fill="#9fb0a8">PLACEHOLDER — replace with a real job photo (public/images/${name}.svg)</text>
</svg>
`;
  writeFileSync(join(out, `${name}.svg`), svg);
}
console.log(`wrote ${Object.keys(files).length} placeholders to ${out}`);
