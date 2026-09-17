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
 * `tone="light"` (default) sits on a faint off-white ground — the standard
 * for module/solution/hub pages. `tone="dark"` is the flagship treatment
 * (charcoal, white text) reserved for the handful of highest-traffic pages
 * (Home, Platform Overview, Results) so it stays a signal, not wallpaper.
 *
 * `size="lg"` is the homepage-scale hero (text-hero); the default is the
 * inner-page scale (text-page-title).
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
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  actions?: HeroAction[];
  children?: ReactNode;
  size?: "md" | "lg";
  width?: "default" | "wide";
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <section
      className={
        isDark ? "bg-charcoal" : "border-b border-slate-200 bg-surface-alt"
      }
    >
      <div
        className={clsx(
          "mx-auto px-6 pt-16 pb-14 sm:pt-24 sm:pb-20",
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
        </div>
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}
