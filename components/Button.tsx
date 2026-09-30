import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost" | "inverse";

const styles: Record<Variant, string> = {
  primary: "btn-gradient-brand text-white shadow-sm hover:shadow-md",
  secondary:
    "bg-white text-charcoal border border-slate-300 hover:border-brand hover:text-brand",
  ghost: "text-brand hover:text-brand-dark underline underline-offset-4",
  // For use on a dark (charcoal) ground — a transparent outline that
  // resolves to solid white on hover, so it reads clearly against charcoal
  // without needing a per-instance className override.
  inverse:
    "border border-white/40 text-white hover:border-white hover:bg-white/10",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  target,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** Pass "_blank" for an external destination (e.g. a booking page) —
   * adds rel="noopener noreferrer" automatically. */
  target?: "_blank";
}) {
  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={clsx(
        "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors",
        styles[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
