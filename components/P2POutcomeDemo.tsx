"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { StatusBadge } from "./StatusBadge";

type Outcome = "overturned" | "upheld";

const outcomes: Record<
  Outcome,
  { label: string; sub: string; badge: string; detail: string }
> = {
  overturned: {
    label: "Overturned",
    sub: "Stay authorized, no appeal",
    badge: "Stay Authorized",
    detail: "No appeal needed — the case closes right here.",
  },
  upheld: {
    label: "Upheld",
    sub: "Appeal drafted automatically",
    badge: "Appeal Drafted",
    detail: "Deep-linked back into the exact case that produced it — nobody drafts a new record from scratch.",
  },
};

function CheckIcon({ active }: { active: boolean }) {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden>
      <circle
        cx="15"
        cy="15"
        r="13"
        fill={active ? "#16a34a" : "white"}
        stroke={active ? "#16a34a" : "#cbd5e1"}
        strokeWidth="2"
      />
      <motion.path
        d="M9 15.5l4 4 8-8.5"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={false}
        animate={{ pathLength: active ? 1 : 0, opacity: active ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />
    </svg>
  );
}

function DocumentIcon({ active }: { active: boolean }) {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden>
      <circle
        cx="15"
        cy="15"
        r="13"
        fill={active ? "#16a34a" : "white"}
        stroke={active ? "#16a34a" : "#cbd5e1"}
        strokeWidth="2"
      />
      <motion.path
        d="M11 8.5h5l3 3v10h-8z"
        stroke="white"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={false}
        animate={{ pathLength: active ? 1 : 0, opacity: active ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      <motion.g
        initial={false}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 0.25, delay: active ? 0.3 : 0 }}
      >
        <line x1="12.5" y1="17" x2="17.5" y2="17" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="12.5" y1="19.5" x2="17.5" y2="19.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      </motion.g>
    </svg>
  );
}

export function P2POutcomeDemo() {
  const [selected, setSelected] = useState<Outcome | null>(null);

  return (
    <div className="rounded-xl border border-brand/25 bg-gradient-to-b from-[#f2f9f4] to-white px-6 py-8 sm:px-10">
      <span className="eyebrow">Try it — the outcome routes itself</span>

      <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm">
        <span className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-slate-600">
          Denial recorded
        </span>
        <span className="text-slate-300">→</span>
        <span className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-slate-600">
          P2P case created
        </span>
        <span className="text-slate-300">→</span>
        <span className="rounded-md border border-brand/30 bg-brand/10 px-2.5 py-1 font-medium text-brand">
          Advisor on the call
        </span>
      </div>

      <p className="mt-6 text-sm font-semibold text-charcoal">What does the advisor decide?</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {(Object.keys(outcomes) as Outcome[]).map((key) => {
          const isActive = selected === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setSelected(key)}
              className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-left transition-colors ${
                isActive
                  ? "border-brand bg-brand/5"
                  : "border-slate-200 bg-white hover:border-brand/40"
              }`}
            >
              {key === "overturned" ? <CheckIcon active={isActive} /> : <DocumentIcon active={isActive} />}
              <span>
                <span className="block text-sm font-semibold text-charcoal">{outcomes[key].label}</span>
                <span className="block text-xs text-slate-500">{outcomes[key].sub}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-5 min-h-[7rem]">
        {selected ? (
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="rounded-lg border border-slate-200 bg-white px-5 py-4"
          >
            <StatusBadge status={selected === "overturned" ? "approved" : "pending"}>
              {outcomes[selected].badge}
            </StatusBadge>
            <p className="mt-2 text-sm text-slate-600">{outcomes[selected].detail}</p>
            <p className="mt-3 border-t border-slate-100 pt-3 text-sm text-slate-500">
              Either way: overturn rates and advisor performance update in Analytics —
              the same canonical record every dashboard on the platform reads from.
            </p>
          </motion.div>
        ) : (
          <p className="pt-4 text-sm text-slate-400">
            Click Overturned or Upheld to see what happens next — automatically.
          </p>
        )}
      </div>
    </div>
  );
}
