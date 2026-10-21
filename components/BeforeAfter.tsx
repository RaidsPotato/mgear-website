import type { CSSProperties } from "react";
import { Reveal } from "./Reveal";

type Panel = {
  eyebrow: string;
  heading: string;
  points: string[];
};

/**
 * A two-panel "siloed today / connected with MGear" comparison.
 *
 * This is MGear's actual thesis from 02-CONNECTION-MAP.md rendered as a
 * side-by-side rather than as prose: ten disconnected systems on the left,
 * one coordinating platform on the right. The reference sites in this space
 * lead with exactly this structure because the contrast carries the pitch.
 *
 * Color stays in-brand: the "before" panel is neutral slate, the "after"
 * panel is brand-tinted. No decorative color — the tint means "this is the
 * MGear side," nothing more.
 */
export function BeforeAfter({ before, after }: { before: Panel; after: Panel }) {
  // The panel with more text gets a little more width so the two end up about
  // the same height instead of one stretching with empty space inside (same
  // idea as CardPair, with a tighter clamp since these should read as equals).
  const wb = before.points.join(" ").length;
  const wa = after.points.join(" ").length * 1.10; // its check icons take more width than the "before" dots
  const share = Math.min(0.60, Math.max(0.40, wb / (wb + wa || 1)));
  const cols = { "--cols": `${share}fr auto ${1 - share}fr` } as CSSProperties;

  return (
    <div
      className="grid items-stretch gap-4 lg:[grid-template-columns:var(--cols)]"
      style={cols}
    >
      <Reveal className="h-full">
        <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-surface-alt p-6 sm:p-7">
          <p className="text-label font-semibold uppercase tracking-[0.06em] text-slate-500">
            {before.eyebrow}
          </p>
          <h3 className="mt-2 text-section font-semibold text-charcoal">
            {before.heading}
          </h3>
          <ul className="mt-4 space-y-2.5 text-body text-slate-600">
            {before.points.map((p) => (
              <li key={p} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-[0.6rem] h-1.5 w-1.5 flex-none rounded-full bg-slate-400"
                />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <div className="hidden items-center justify-center lg:flex" aria-hidden>
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          className="fill-none stroke-brand"
          strokeWidth="2"
        >
          <path
            d="M5 12h14M13 6l6 6-6 6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <Reveal delay={0.1} className="h-full">
        <div className="flex h-full flex-col rounded-xl border border-brand/30 bg-[#f2f9f4] p-6 sm:p-7">
          <p className="text-label font-semibold uppercase tracking-[0.06em] text-brand">
            {after.eyebrow}
          </p>
          <h3 className="mt-2 text-section font-semibold text-charcoal">
            {after.heading}
          </h3>
          <ul className="mt-4 space-y-2.5 text-body text-slate-700">
            {after.points.map((p) => (
              <li key={p} className="flex gap-3">
                <svg
                  aria-hidden
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  className="mt-[0.3rem] flex-none fill-none stroke-brand"
                  strokeWidth="2.5"
                >
                  <path
                    d="M20 6 9 17l-5-5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
