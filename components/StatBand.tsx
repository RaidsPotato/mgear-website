import Link from "next/link";
import { Reveal } from "./Reveal";

export type Stat = { value: string; label: string };

/**
 * The proof strip that sits directly under a hero — the pattern every
 * reference site in this space uses to put outcomes above the fold.
 *
 * Every number rendered here must be sourced and attributed. The Providence
 * behavioral health figures come from 01-PRODUCT-TRUTH.md section 8; per
 * [OPEN-1] they are always shown as one named program's result, never as a
 * generalized claim, which is why `caption` is not optional in practice.
 */
export function StatBand({
  stats,
  caption,
  captionHref,
}: {
  stats: Stat[];
  caption?: string;
  captionHref?: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200">
      <dl className="grid grid-cols-2 gap-px bg-slate-200 sm:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} className="bg-surface-alt">
            <div className="px-5 py-6 text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <p className="text-2xl font-bold tracking-tight text-brand sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1.5 text-caption text-slate-600">{s.label}</p>
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
      {caption && (
        <p className="border-t border-slate-200 bg-white px-5 py-3 text-center text-caption text-slate-500">
          {captionHref ? (
            <Link href={captionHref} className="hover:text-brand">
              {caption} &rarr;
            </Link>
          ) : (
            caption
          )}
        </p>
      )}
    </div>
  );
}
