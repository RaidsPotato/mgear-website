import { ReactNode } from "react";
import clsx from "clsx";
import { Button } from "@/components/Button";

export type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "inverse" | "ghost";
};

/**
 * The top-of-page block. Every page opens with one, so the header-to-content
 * transition is a deliberate step rather than text floating on white.
 *
 * `tone="light"` (default) sits on a faint off-white ground. `tone="dark"`
 * is the charcoal + animated-glow treatment used site-wide now.
 *
 * The composition varies by what's passed in, not just the copy — that's
 * the fix for every page reading as the same template with different
 * words:
 *   - `numeral` — a large faint outlined number in the corner (module
 *     pages, "01"-"11"), so each one reads as its own entry in a set
 *     rather than an identical shell.
 *   - `badges` — a floating row of chips under the lead (AI, Security,
 *     Interoperability), giving those conceptual pages a hero that
 *     previews their actual content instead of plain text on the glow.
 *   - `compact` — shorter vertical padding, for lower-key utility pages
 *     (Contact, legal, Company) so they don't carry the same towering
 *     weight as a flagship or product page.
 *   - `size="lg"` is the homepage-scale hero (text-hero); default is the
 *     inner-page scale (text-page-title).
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  actions,
  children,
  size = "md",
  width = "wide",
  tone = "light",
  numeral,
  badges,
  compact = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  actions?: HeroAction[];
  children?: ReactNode;
  size?: "md" | "lg";
  width?: "default" | "wide";
  tone?: "light" | "dark";
  numeral?: string;
  badges?: string[];
  compact?: boolean;
}) {
  const isDark = tone === "dark";
  return (
    <section
      className={clsx(
        "relative overflow-hidden",
        isDark ? "hero-glow bg-charcoal" : "border-b border-slate-200 bg-surface-alt"
      )}
    >
      {numeral && (
        <span
          aria-hidden
          className={clsx(
            "pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 select-none font-bold leading-none",
            "text-[9rem] sm:text-[13rem]",
            isDark ? "text-white/[0.06]" : "text-charcoal/[0.05]"
          )}
          style={{ WebkitTextStroke: isDark ? "1px rgba(255,255,255,0.1)" : undefined }}
        >
          {numeral}
        </span>
      )}
      <div
        className={clsx(
          "relative mx-auto px-6",
          compact ? "pt-14 pb-12 sm:pt-16 sm:pb-14" : "pt-16 pb-14 sm:pt-24 sm:pb-20",
          width === "wide" ? "max-w-7xl" : "max-w-5xl"
        )}
      >
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-label font-semibold uppercase tracking-[0.06em] text-brand">
              {eyebrow}
            </p>
          )}
          <h1
            className={clsx(
              "font-bold",
              isDark ? "text-white" : "text-charcoal",
              eyebrow && "mt-4",
              size === "lg" ? "text-hero" : "text-page-title"
            )}
          >
            {title}
          </h1>
          {lead && (
            <p className={clsx("mt-6 text-lead", isDark ? "text-slate-300" : "text-slate-600")}>
              {lead}
            </p>
          )}
          {actions && actions.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {actions.map((a) => (
                <Button key={a.href} href={a.href} variant={a.variant ?? "primary"}>
                  {a.label}
                </Button>
              ))}
            </div>
          )}
          {badges && badges.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className={clsx(
                    "rounded-full border px-3.5 py-1.5 text-sm",
                    isDark
                      ? "border-white/15 bg-white/5 text-slate-200"
                      : "border-slate-200 bg-white text-slate-700"
                  )}
                >
                  {b}
                </span>
              ))}
            </div>
          )}
        </div>
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}
