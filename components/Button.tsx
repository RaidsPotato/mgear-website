import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-dark shadow-sm hover:shadow-md",
  secondary:
    "bg-white text-charcoal border border-slate-300 hover:border-brand hover:text-brand",
  ghost: "text-brand hover:text-brand-dark underline underline-offset-4",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
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
