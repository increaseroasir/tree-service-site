// Persistent, non-removable demo label. This is a fictional demo site, not a
// real contractor. Kept visible on every page.
const DemoBadge = () => (
  <div
    className="bg-[var(--accent)] text-white text-center text-[11px] md:text-xs font-semibold uppercase tracking-[0.14em] px-3 py-1.5"
    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
  >
    Demo website — fictional company for design demonstration only
  </div>
);

export default DemoBadge;
