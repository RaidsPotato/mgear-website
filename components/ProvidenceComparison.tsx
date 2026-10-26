import { AnimatedStat } from "./AnimatedStat";

// The Providence results are TWO programs, not one (management, 2026-10-25):
//  - ED utilization management: admission rate 11% -> 16%, ~$5.26M additional
//    annual revenue (and the ~$395K cost / ~$4.87M net pair, which Max's review
//    annotated as the ED program's — the cost's owner is the one thing still
//    unconfirmed).
//  - Behavioral health: denial rate 35% -> 0%, authorization approval 100%,
//    ~$4.1M additional revenue since it started.
// Each metric carries its program so nothing is read as belonging to the other.
// Both before/after states are on screen at once (no toggle to discover).
const tiles = [
  { program: "ED utilization management", label: "Admission rate", without: 11, with: 16 },
  { program: "Behavioral health", label: "Denial rate", without: 35, with: 0 },
  { program: "Behavioral health", label: "Authorization approval rate", with: 100 },
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
      <span className="eyebrow">Two Providence programs</span>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {tiles.map((t) => (
          <div
            key={t.program + t.label}
            className="flex flex-col rounded-lg border border-brand/30 bg-white px-5 py-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.06em] text-brand">
              {t.program}
            </p>
            <p className="mt-2 text-sm text-slate-500">{t.label}</p>
            <div className="mt-4 flex items-end gap-4">
              {"without" in t && (
                <>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.06em] text-slate-400">
                      Without MGear
                    </p>
                    <p className="mt-1 text-3xl font-bold tabular-nums text-slate-400">
                      {t.without}%
                    </p>
                  </div>
                  <Arrow />
                </>
              )}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.06em] text-brand">
                  With MGear
                </p>
                <AnimatedStat
                  value={"without" in t ? `${t.without}% → ${t.with}%` : `${t.with}%`}
                  className="mt-1 block text-4xl font-bold tabular-nums text-brand"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-slate-500">
        <strong className="text-charcoal">ED program:</strong> about{" "}
        <strong className="text-charcoal">$5.26M</strong> in additional annual revenue on a
        program cost of about <strong className="text-charcoal">$395K</strong> —{" "}
        <strong className="text-charcoal">$4.87M</strong> net.{" "}
        <strong className="text-charcoal">Behavioral health program:</strong> about{" "}
        <strong className="text-charcoal">$4.1M</strong> in additional revenue since it
        started.
      </p>
    </div>
  );
}
