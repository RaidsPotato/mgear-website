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
    <section className={clsx("mx-auto px-6 py-16 sm:py-20", maxWidth, className)}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow mb-3">{children}</p>;
}
