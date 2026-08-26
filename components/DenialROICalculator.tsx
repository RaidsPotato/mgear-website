"use client";

import { useState } from "react";

type Mode = "total" | "category";

const reductionOptions = ["10", "15", "25", "50"];

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

// Shared so every field — text input or select — renders at the exact same
// height and baseline. Native <select> UA styling doesn't reliably match a
// text <input> on padding alone, which is what threw the two fields out of
// alignment; `appearance-none` plus a custom arrow (below) removes that
// browser-supplied styling entirely.
const fieldClass =
  "mt-1.5 h-11 w-full rounded-lg border border-slate-300 px-3.5 text-body text-charcoal focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand";

function MoneyInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (digits: string) => void;
  placeholder?: string;
}) {
  const display = value ? Number(value).toLocaleString("en-US") : "";
  return (
    <div className="relative mt-1.5">
      <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
        $
      </span>
      <input
        type="text"
        inputMode="numeric"
        value={display}
        onChange={(e) => onChange(e.target.value.replace(/[^0-9]/g, ""))}
        placeholder={placeholder}
        className={`${fieldClass} mt-0 pl-7`}
      />
    </div>
  );
}

function ReductionSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative mt-1.5">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${fieldClass} mt-0 appearance-none bg-white pr-9`}
      >
        <option value="">Select %</option>
        {reductionOptions.map((opt) => (
          <option key={opt} value={opt}>
            {opt}%
          </option>
        ))}
      </select>
      <svg
        aria-hidden
        width="10"
        height="6"
        viewBox="0 0 10 6"
        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 fill-slate-400"
      >
        <path d="M0 0 L5 6 L10 0 Z" />
      </svg>
    </div>
  );
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
  const [totalReduction, setTotalReduction] = useState("");
  const [rows, setRows] = useState(
    categoryDefs.map((c) => ({ ...c, amount: "", reduction: "" }))
  );

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
    <div className="rounded-xl border border-brand/25 bg-gradient-to-b from-[#f2f9f4] to-white px-6 py-8 sm:px-10">
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
        <div className="mt-5 grid gap-4 sm:max-w-md sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-charcoal">
              Total Annual Denial Write-Offs
            </span>
            <MoneyInput
              value={totalWriteOffs}
              onChange={setTotalWriteOffs}
              placeholder="500,000"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-charcoal">
              Reduction with MGear (%)*
            </span>
            <ReductionSelect value={totalReduction} onChange={setTotalReduction} />
          </label>
        </div>
      ) : (
        <div className="mt-5 space-y-3">
          {rows.map((r) => (
            <div
              key={r.id}
              className="grid gap-3 rounded-lg border border-slate-200 bg-white p-4 sm:grid-cols-[1.2fr_1fr_1fr] sm:items-end"
            >
              <p className="text-sm font-semibold text-charcoal">{r.label}</p>
              <label className="block">
                <span className="text-xs text-slate-500">Annual Write-Offs ($)</span>
                <MoneyInput
                  value={r.amount}
                  onChange={(v) => updateRow(r.id, "amount", v)}
                  placeholder="0"
                />
              </label>
              <label className="block">
                <span className="text-xs text-slate-500">Reduction with MGear (%)*</span>
                <ReductionSelect
                  value={r.reduction}
                  onChange={(v) => updateRow(r.id, "reduction", v)}
                />
              </label>
            </div>
          ))}
          {categoryTotal > 0 && (
            <p className="text-xs text-slate-500">
              Categories entered total {currency(categoryTotal)}.
            </p>
          )}
        </div>
      )}

      <div className="mt-8 rounded-lg border border-brand/30 bg-white p-5">
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
