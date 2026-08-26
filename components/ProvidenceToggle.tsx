"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

const states = {
  without: { label: "Without MGear", admission: 11, denial: 35 },
  with: { label: "With MGear", admission: 16, denial: 0 },
} as const;

function AnimatedNumber({ value }: { value: number }) {
  const mv = useMotionValue(value);
  const [display, setDisplay] = useState(value);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const controls = animate(mv, value, {
      duration: 0.7,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <>{display}%</>;
}

export function ProvidenceToggle() {
  const [withMGear, setWithMGear] = useState(false);
  const current = withMGear ? states.with : states.without;

  return (
    <div
      className={`rounded-xl border px-6 py-8 transition-colors duration-500 sm:px-10 ${
        withMGear
          ? "border-brand/40 bg-gradient-to-br from-[#eafbf1] via-[#f2f9f4] to-white shadow-lg shadow-brand/10"
          : "border-slate-200 bg-gradient-to-br from-slate-50 to-white"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span className="eyebrow">The Providence behavioral health program</span>

        <button
          type="button"
          role="switch"
          aria-checked={withMGear}
          onClick={() => setWithMGear((v) => !v)}
          className="flex items-center gap-3 rounded-full border border-slate-300 bg-white px-3 py-2 text-sm font-medium shadow-sm transition-shadow hover:shadow-md"
        >
          <span className={withMGear ? "text-slate-400" : "font-semibold text-charcoal"}>
            Without MGear
          </span>
          <span
            className={`relative inline-flex h-6 w-12 flex-none items-center rounded-full transition-colors duration-300 ${
              withMGear ? "bg-brand" : "bg-slate-300"
            }`}
          >
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="inline-block h-5 w-5 rounded-full bg-white shadow"
              style={{ marginLeft: withMGear ? "1.5rem" : "0.15rem" }}
            />
          </span>
          <span className={withMGear ? "font-semibold text-brand" : "text-slate-400"}>
            With MGear
          </span>
        </button>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 0.4 }}
          key={`admission-${withMGear}`}
          className={`rounded-lg border px-5 py-5 transition-colors duration-500 ${
            withMGear ? "border-brand/30 bg-white" : "border-slate-200 bg-white"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">Admission rate</p>
            {withMGear && (
              <motion.span
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xs font-semibold text-brand"
              >
                ↑ improved
              </motion.span>
            )}
          </div>
          <p className={`mt-1 text-4xl font-bold tabular-nums ${withMGear ? "text-brand" : "text-charcoal"}`}>
            <AnimatedNumber value={current.admission} />
          </p>
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 0.4 }}
          key={`denial-${withMGear}`}
          className={`rounded-lg border px-5 py-5 transition-colors duration-500 ${
            withMGear ? "border-brand/30 bg-white" : "border-slate-200 bg-white"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">Behavioral health denial rate</p>
            {withMGear && (
              <motion.span
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xs font-semibold text-brand"
              >
                ↓ improved
              </motion.span>
            )}
          </div>
          <p className={`mt-1 text-4xl font-bold tabular-nums ${withMGear ? "text-brand" : "text-charcoal"}`}>
            <AnimatedNumber value={current.denial} />
          </p>
        </motion.div>
      </div>

      <p className="mt-6 text-sm text-slate-500">
        Authorization approval rate reached <strong className="text-charcoal">100%</strong>{" "}
        with MGear running. A program that cost{" "}
        <strong className="text-charcoal">$395K</strong> a year returned{" "}
        <strong className="text-charcoal">$4.87M</strong> net.
      </p>
    </div>
  );
}
