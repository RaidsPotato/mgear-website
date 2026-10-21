import { isValidElement, type CSSProperties, type ReactNode } from "react";
import clsx from "clsx";
import { Reveal } from "@/components/Reveal";

export function Card({
  icon,
  title,
  children,
  accent = false,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  accent?: boolean;
}) {
  return (
    <div
      className={`h-full rounded-xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        accent
          ? "border-brand/25 bg-[#f2f9f4] hover:shadow-brand/10"
          : "border-slate-200 bg-white hover:border-brand/30"
      }`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="text-lg font-semibold text-charcoal">{title}</h3>
      </div>
      <div className="mt-4 text-body text-slate-600">{children}</div>
    </div>
  );
}

// Roughly how much room a piece of content needs, in characters, with a small
// charge for every block that starts a new line (list items, paragraphs). It
// only has to be good enough to compare two cards.
function textWeight(node: ReactNode): number {
  if (node == null || typeof node === "boolean") return 0;
  if (typeof node === "string" || typeof node === "number") return String(node).length;
  if (Array.isArray(node)) return node.reduce<number>((n, c) => n + textWeight(c), 0);
  if (isValidElement(node)) {
    const inner = textWeight((node.props as { children?: ReactNode }).children);
    return inner + (node.type === "li" ? 45 : node.type === "p" ? 30 : 0);
  }
  return 0;
}

type CardSpec = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  accent?: boolean;
  // Extra room the content needs that textWeight cannot see (a divider and its
  // spacing, say), in the same character-equivalent units.
  bonus?: number;
};

// Two cards that sit side by side. Giving both the same width and stretching
// them to the same height leaves a big empty hole inside whichever has less
// text, so instead:
//  - the card with more text gets proportionally more width (a wider column
//    holds the same text in fewer lines), which brings the two heights close
//    together, and the small leftover is absorbed by the normal stretch;
//  - when the difference is too big for that to help (a long numbered
//    workflow next to a short paragraph), the short card stops stretching and
//    becomes a sticky side note that stays in view while the long one scrolls.
// Below the lg breakpoint they stack as usual.
export function CardPair({ left, right }: { left: CardSpec; right: CardSpec }) {
  const wl = textWeight(left.children) + (left.bonus ?? 0);
  const wr = textWeight(right.children) + (right.bonus ?? 0);
  const share = Math.min(0.62, Math.max(0.38, wl / (wl + wr || 1)));
  const lopsided = Math.max(wl, wr) / Math.max(1, Math.min(wl, wr)) >= 2.4;
  const leftIsHeavier = wl >= wr;

  const cols = { "--cols": `${share}fr ${1 - share}fr` } as CSSProperties;

  return (
    <div
      className={clsx(
        "mt-8 grid gap-6 lg:[grid-template-columns:var(--cols)]",
        lopsided && "lg:items-start"
      )}
      style={cols}
    >
      <Reveal className={clsx(!lopsided && "h-full", lopsided && !leftIsHeavier && "lg:sticky lg:top-28")}>
        <Card icon={left.icon} title={left.title} accent={left.accent}>
          {left.children}
        </Card>
      </Reveal>
      <Reveal
        delay={0.1}
        className={clsx(!lopsided && "h-full", lopsided && leftIsHeavier && "lg:sticky lg:top-28")}
      >
        <Card icon={right.icon} title={right.title} accent={right.accent}>
          {right.children}
        </Card>
      </Reveal>
    </div>
  );
}
