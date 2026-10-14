import { AnimatedStat } from "./AnimatedStat";

// Replaces the old Without/With switch (ProvidenceToggle). Visitors had to
// notice a toggle and flip it to see the "after" — per Max's 2026-10-14
// review, many wouldn't. Both states are now on screen at once. The figures
// and the program label are unchanged from the toggle; how they're
// attributed (ED program vs. behavioral program) is a separate open item.
const metrics = [
  { label: "Admission rate", without: 11, with: 16 },
  { label: "Behavioral health denial rate", without: 35, with: 0 },
] as const;

function Arrow() {
  return (
    <svg
      aria-hidden
      width="26"
      height="12"
      viewBox="0 0 22 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mb-3 flex-none text-brand"
    >
      <path d="M1 6h19M15 1.5 20 6l-5 4.5" />
    </svg>
  );
}

export function ProvidenceComparison() {
  return (
    <div className="rounded-xl border border-brand/40 bg-gradient-to-br from-[#eafbf1] via-[#f2f9f4] to-white px-6 py-8 shadow-lg shadow-brand/10 sm:px-10">
      <span className="eyebrow">The Providence behavioral health program</span>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-lg border border-brand/30 bg-white px-5 py-5">
            <p className="text-sm text-slate-500">{m.label}</p>
            <div className="mt-4 flex items-end gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.06em] text-slate-400">
                  Without MGear
                </p>
                <p className="mt-1 text-3xl font-bold tabular-nums text-slate-400">{m.without}%</p>
              </div>
              <Arrow />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.06em] text-brand">
                  With MGear
                </p>
                <AnimatedStat
                  value={`${m.without}% → ${m.with}%`}
                  className="mt-1 block text-4xl font-bold tabular-nums text-brand"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-slate-500">
        Authorization approval rate reached <strong className="text-charcoal">100%</strong>{" "}
        with MGear running. A program that cost{" "}
        <strong className="text-charcoal">$395K</strong> a year returned{" "}
        <strong className="text-charcoal">$4.87M</strong> net.
      </p>
    </div>
  );
}
