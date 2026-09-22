import { ReactNode } from "react";
import clsx from "clsx";

type Tone = "default" | "alt" | "dark" | "brand";
type Width = "default" | "narrow" | "wide";

const toneClass: Record<Tone, string> = {
  // light-wash: a very faint brand-green radial wash instead of flat white —
  // a flat white band next to the glowing dark/brand bands read as a dead
  // stop, "stiff." Same gradients-now-allowed override as hero-glow, just
  // dialed down since this sits behind ordinary body copy.
  default: "bg-background light-wash",
  alt: "bg-surface-alt light-wash",
  // hero-glow: every dark band gets the animated brand-green ambient glow,
  // not just page heroes — that's what keeps the dark moments feeling
  // alive instead of flat, per leadership's 2026-09-21 gradients/motion
  // override.
  dark: "hero-glow bg-charcoal text-slate-200",
  brand: "bg-gradient-to-br from-[#eafbf1] via-[#f2f9f4] to-[#edf8f1]",
};

const widthClass: Record<Width, string> = {
  narrow: "max-w-3xl",
  default: "max-w-5xl",
  wide: "max-w-7xl",
};

/**
 * A full-bleed band with a width-constrained inner column.
 *
 * `tone` paints the whole band, so stacked sections alternate between
 * white, off-white (`alt`), a green-tint (`brand`) and charcoal (`dark`).
 * That surface contrast — not extra whitespace — is what gives a page its
 * rhythm; a run of identical white sections reads as an unstyled template.
 *
 * `divide` draws a hairline top border, for when two same-tone bands sit
 * next to each other and need a seam. `className` styles the inner column
 * (padding overrides, layout); `outerClassName` the full-bleed band.
 */
export function Section({
  children,
  className = "",
  outerClassName = "",
  width = "default",
  tone = "default",
  divide = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  outerClassName?: string;
  width?: Width;
  tone?: Tone;
  divide?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={clsx(
        toneClass[tone],
        id && "scroll-mt-20",
        divide && "border-t border-slate-100",
        outerClassName
      )}
    >
      <div
        className={clsx("mx-auto px-6 py-14 sm:py-20", widthClass[width], className)}
      >
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={clsx("eyebrow mb-3", className)}>{children}</p>;
}
