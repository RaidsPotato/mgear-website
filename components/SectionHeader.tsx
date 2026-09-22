import { ReactNode } from "react";
import clsx from "clsx";

/**
 * The consistent lead-in for a section: a letter-spaced eyebrow, a heading,
 * and an optional standfirst. Used everywhere so every section opens the
 * same way — one of the things that makes a site read as designed rather
 * than assembled.
 */
export function SectionHeader({
  eyebrow,
  heading,
  lead,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  heading: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={clsx(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <p
          className={clsx(
            "text-label font-semibold uppercase tracking-[0.06em]",
            tone === "dark" ? "text-brand" : "text-brand"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "text-section font-semibold",
          eyebrow && "mt-3",
          tone === "dark" ? "text-white" : "text-charcoal"
        )}
      >
        {heading}
      </h2>
      {lead && (
        <p
          className={clsx(
            "mt-4 text-lead",
            tone === "dark" ? "text-slate-300" : "text-slate-600"
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
