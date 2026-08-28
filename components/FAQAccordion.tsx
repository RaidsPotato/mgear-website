"use client";

import { useState } from "react";
import clsx from "clsx";

export type FAQItem = { question: string; answer: string };

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-charcoal">{item.question}</span>
              <span
                className={clsx(
                  "shrink-0 text-brand text-xl leading-none transition-transform",
                  isOpen && "rotate-45"
                )}
              >
                +
              </span>
            </button>
            <div
              className={clsx(
                "grid transition-all duration-200 ease-out",
                isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
              )}
              style={{ overflow: "hidden" }}
            >
              <div className="min-h-0">
                <p className="text-slate-600 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
