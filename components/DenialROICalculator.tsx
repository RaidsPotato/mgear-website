"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

type Mode = "total" | "category";

// A 2x2 of buttons instead of a dropdown, so the choice is visible and one
// click. 30% is the low end of the 30-40% year-one figure in the footnote below
// (that figure itself is still an unsourced open item); 40% is the high end.
const reductionOptions = ["10", "25", "30", "40"];
const DEFAULT_REDUCTION = "30";

// Example figures filled in when the estimator first scrolls into view, so it
// never sits on $0. They are ILLUSTRATIVE, invented for the demo, and labeled as
// such on screen; the first time a visitor touches a field they are cleared.
// The total matches the "500,000" placeholder the field has always shown.
const EXAMPLE_TOTAL = "500000";
const EXAMPLE_ROWS: Record<string, string> = {
  clinicals: "200000",
  authorization: "175000",
  levelOfCare: "125000",
};

const categoryDefs = [
  { id: "clinicals", label: "Lack of Clinicals" },
  { id: "authorization", label: "No Authorization" },
  { id: "levelOfCare", label: "Level of Care (Inpatient)" },
];

function currency(n: number) {
  if (!isFinite(n) || isNaN(n)) return "$0";
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

const fieldClass =
  "h-10 w-full rounded-lg border border-slate-300 px-3.5 text-body text-charcoal focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand";

function MoneyInput({
  value,
  onChange,
  onFocus,
  placeholder,
}: {
  value: string;
  onChange: (digits: string) => void;
  onFocus?: () => void;
  placeholder?: string;
}) {
  const display = value ? Number(value).toLocaleString("en-US") : "";
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
        $
      </span>
      <input
        type="text"
        inputMode="numeric"
        value={display}
        onChange={(e) => onChange(e.target.value.replace(/[^0-9]/g, ""))}
        onFocus={onFocus}
        placeholder={placeholder}
        className={`${fieldClass} pl-7`}
      />
    </div>
  );
}

function ReductionButtons({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div role="radiogroup" aria-label="Reduction with MGear" className="grid grid-cols-2 gap-2">
      {reductionOptions.map((opt) => {
        const selected = value === opt;
        return (
          <button
            key={opt}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(opt)}
            className={clsx(
              "h-9 rounded-lg border text-sm font-semibold transition-colors",
              selected
                ? "border-brand bg-brand text-white shadow-sm"
                : "border-slate-300 bg-white text-slate-600 hover:border-brand/50 hover:text-brand"
            )}
          >
            {opt}%
          </button>
        );
      })}
    </div>
  );
}

// One grid for the column headings and every row so the columns line up, and
// every cell is vertically centered against the (taller) 2x2 button group.
const ROW_GRID = "sm:grid-cols-[1.1fr_1fr_1fr]";

function ColumnHeadings({ first }: { first: string }) {
  return (
    <div
      className={`mb-2 hidden gap-4 px-4 text-xs font-medium text-slate-500 sm:grid ${ROW_GRID}`}
    >
      <span>{first}</span>
      <span>Annual Write-Offs ($)</span>
      <span>Reduction with MGear (%)*</span>
    </div>
  );
}

// On phones there is no heading row, so each field carries its own label.
function MobileLabel({ children }: { children: string }) {
  return <span className="mb-1 block text-xs text-slate-500 sm:hidden">{children}</span>;
}

function PillToggle<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
}) {
  return (
    <div className="inline-flex rounded-full border border-slate-300 bg-white p-1">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            value === opt.value
              ? "bg-brand text-white"
              : "text-slate-600 hover:text-brand"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export function DenialROICalculator() {
  const [totalWriteOffs, setTotalWriteOffs] = useState("");
  const [mode, setMode] = useState<Mode>("category");
  const [totalReduction, setTotalReduction] = useState(DEFAULT_REDUCTION);
  const [rows, setRows] = useState(
    categoryDefs.map((c) => ({ ...c, amount: "", reduction: DEFAULT_REDUCTION }))
  );
  // True while the figures on screen are the illustrative examples rather than
  // anything the visitor typed.
  const [isExample, setIsExample] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Fill the example figures the first time the estimator scrolls into view.
  // Only fields still empty are filled, so a visitor who got there first and
  // started typing is never overwritten.
  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const step = reduced ? 0 : 170;
        setIsExample(true);
        categoryDefs.forEach((c, i) => {
          timers.push(
            setTimeout(
              () =>
                setRows((prev) =>
                  prev.map((r) =>
                    r.id === c.id && r.amount === "" ? { ...r, amount: EXAMPLE_ROWS[c.id] } : r
                  )
                ),
              step * (i + 1)
            )
          );
        });
        timers.push(
          setTimeout(
            () => setTotalWriteOffs((prev) => (prev === "" ? EXAMPLE_TOTAL : prev)),
            step * (categoryDefs.length + 1)
          )
        );
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  function clearExamples() {
    setRows((prev) => prev.map((r) => ({ ...r, amount: "" })));
    setTotalWriteOffs("");
    setIsExample(false);
  }

  const total = parseFloat(totalWriteOffs) || 0;

  const breakdown = rows.map((r) => {
    const amount = parseFloat(r.amount) || 0;
    const reduction = (parseFloat(r.reduction) || 0) / 100;
    const improvement = amount * reduction;
    return { ...r, amount, improvement };
  });

  const categoryTotal = breakdown.reduce((sum, b) => sum + b.amount, 0);

  // Figures entered are always treated as annual.
  const annual =
    mode === "total"
      ? total * ((parseFloat(totalReduction) || 0) / 100)
      : breakdown.reduce((sum, b) => sum + b.improvement, 0);

  const monthly = annual / 12;

  function updateRow(id: string, field: "amount" | "reduction", value: string) {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  }

  return (
    <div
      ref={rootRef}
      className="rounded-xl border border-brand/25 bg-gradient-to-b from-[#f2f9f4] to-white px-6 py-8 sm:px-10"
    >
      <span className="eyebrow">Denial Prevention ROI Estimator</span>
      <p className="mt-3 max-w-2xl text-body text-slate-600">
        Enter your own annual write-off figures — MGear doesn&apos;t supply those
        numbers here. This just does the arithmetic on the amounts and targets you
        provide.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="text-sm font-medium text-charcoal">Breakdown:</span>
        <PillToggle
          value={mode}
          onChange={setMode}
          options={[
            { value: "total", label: "Total Denials" },
            { value: "category", label: "By Category" },
          ]}
        />
      </div>

      {mode === "total" ? (
        <div className="mt-6">
          <ColumnHeadings first="" />
          <div
            className={`grid gap-4 rounded-lg border border-slate-200 bg-white p-4 sm:items-center ${ROW_GRID}`}
          >
            <p className="text-sm font-semibold text-charcoal">All denial write-offs</p>
            <label className="block">
              <MobileLabel>Total Annual Denial Write-Offs ($)</MobileLabel>
              <MoneyInput
                value={totalWriteOffs}
                onChange={setTotalWriteOffs}
                onFocus={isExample ? clearExamples : undefined}
                placeholder="500,000"
              />
            </label>
            <div>
              <MobileLabel>Reduction with MGear (%)*</MobileLabel>
              <ReductionButtons value={totalReduction} onChange={setTotalReduction} />
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-6">
          <ColumnHeadings first="Category" />
          <div className="space-y-3">
            {rows.map((r) => (
              <div
                key={r.id}
                className={`grid gap-4 rounded-lg border border-slate-200 bg-white p-4 sm:items-center ${ROW_GRID}`}
              >
                <p className="text-sm font-semibold text-charcoal">{r.label}</p>
                <label className="block">
                  <MobileLabel>Annual Write-Offs ($)</MobileLabel>
                  <MoneyInput
                    value={r.amount}
                    onChange={(v) => updateRow(r.id, "amount", v)}
                    onFocus={isExample ? clearExamples : undefined}
                    placeholder="0"
                  />
                </label>
                <div>
                  <MobileLabel>Reduction with MGear (%)*</MobileLabel>
                  <ReductionButtons
                    value={r.reduction}
                    onChange={(v) => updateRow(r.id, "reduction", v)}
                  />
                </div>
              </div>
            ))}
          </div>
          {categoryTotal > 0 && (
            <p className="mt-3 text-xs text-slate-500">
              Categories entered total {currency(categoryTotal)}.
            </p>
          )}
        </div>
      )}

      {isExample && (
        <p className="mt-4 text-sm text-slate-600">
          <strong className="font-semibold text-charcoal">Example figures</strong> are
          shown so you can see how it works — they&apos;re illustrative, not real data.{" "}
          <button
            type="button"
            onClick={clearExamples}
            className="font-medium text-brand underline underline-offset-2 hover:text-brand-dark"
          >
            Clear them
          </button>{" "}
          and enter your own.
        </p>
      )}

      <div className="mt-6 rounded-lg border border-brand/30 bg-white p-5">
        <p className="text-sm font-semibold text-charcoal">Estimated Improvement</p>

        {mode === "category" && categoryTotal > 0 && (
          <ul className="mt-3 space-y-1 text-sm text-slate-600">
            {breakdown
              .filter((b) => b.amount)
              .map((b) => (
                <li key={b.id}>
                  {b.label}: {currency(b.amount)} in denials → {currency(b.improvement)}{" "}
                  recovery opportunity
                </li>
              ))}
          </ul>
        )}

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs text-slate-500">Monthly improvement</p>
            <p className="text-3xl font-bold text-brand">{currency(monthly)}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Annual improvement</p>
            <p className="text-3xl font-bold text-brand">{currency(annual)}</p>
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs text-slate-400">
        This is a planning estimate based on the figures and targets you enter — not a
        guarantee of results. *On average, MGear&apos;s workflow has been able to
        decrease denials by 30–40% in year one.
      </p>
    </div>
  );
}
