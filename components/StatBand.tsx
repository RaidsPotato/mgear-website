import Link from "next/link";
import { AnimatedStat } from "@/components/AnimatedStat";

export type Stat = { value: string; label: string };

/**
 * The proof strip that sits directly under a hero — the pattern every
 * reference site in this space uses to put outcomes above the fold.
 *
 * Rendered plain (no scroll-reveal): it sits at or near the fold on load,
 * where a fade-in would read as a flash rather than a reveal.
 *
 * Every number here must be sourced and attributed. The Providence
 * behavioral health figures come from 01-PRODUCT-TRUTH.md section 8; per
 * [OPEN-1] they are always shown as one named program's result, never as a
 * generalized claim, which is why `caption` is effectively required.
 */
export function StatBand({
  stats,
  caption,
  captionHref,
  size = "md",
  tone = "light",
}: {
  stats: Stat[];
  caption?: string;
  captionHref?: string;
  size?: "md" | "lg";
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={`overflow-hidden rounded-xl border ${
        isDark ? "border-white/15" : "border-slate-200"
      }`}
    >
      <dl
        className={`grid grid-cols-2 gap-px sm:grid-cols-4 ${
          isDark ? "bg-white/10" : "bg-slate-200"
        }`}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className={`px-5 text-center ${size === "lg" ? "py-8" : "py-6"} ${
              isDark ? "bg-charcoal" : "bg-surface-alt"
            }`}
          >
            <dt className="sr-only">{s.label}</dt>
            <dd>
              <AnimatedStat
                value={s.value}
                className={`block font-bold tracking-tight text-gradient-brand ${
                  size === "lg"
                    ? "text-3xl sm:text-4xl lg:text-5xl"
                    : "text-2xl sm:text-3xl"
                }`}
              />
              <p
                className={`mt-2 text-caption ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {s.label}
              </p>
            </dd>
          </div>
        ))}
      </dl>
      {caption && (
        <p
          className={`border-t px-5 py-3 text-center text-caption ${
            isDark
              ? "border-white/15 bg-white/5 text-slate-400"
              : "border-slate-200 bg-white text-slate-500"
          }`}
        >
          {captionHref ? (
            <Link
              href={captionHref}
              className={isDark ? "hover:text-white" : "hover:text-brand"}
            >
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
