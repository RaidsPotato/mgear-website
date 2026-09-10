import { ReactNode } from "react";
import clsx from "clsx";

export function Section({
  children,
  className = "",
  width = "default",
}: {
  children: ReactNode;
  className?: string;
  width?: "default" | "narrow" | "wide";
}) {
  const maxWidth =
    width === "narrow" ? "max-w-3xl" : width === "wide" ? "max-w-7xl" : "max-w-5xl";
  return (
    <section className={clsx("mx-auto px-6 py-10 sm:py-14", maxWidth, className)}>
      {children}
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
