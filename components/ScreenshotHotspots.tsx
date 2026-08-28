"use client";

import { useState } from "react";
import { ZoomableImage } from "@/components/ZoomableImage";

type Align = "left" | "center" | "right";
type VAlign = "up" | "down";

type Hotspot = {
  id: string;
  left: string;
  top: string;
  align: Align;
  vAlign: VAlign;
  label: string;
  detail: string;
};

// Positions are picked to land in empty margin — never on top of a number,
// label, or chart title — using the real screenshot's actual layout, not a
// guess. `align` controls which way the popup opens horizontally, `vAlign`
// vertically, so it never runs off the card edge or reaches into the next
// marker's own space. The three stat-tile markers open upward into the
// screenshot's own header area, which is empty and has no other marker in
// it — opening downward from there reached straight into the "Denial $ by
// payer" marker one row below.
const hotspots: Hotspot[] = [
  {
    id: "denied",
    left: "26.25%",
    top: "24.2%",
    align: "right",
    vAlign: "up",
    label: "Denied $ — $44.2M, trailing 24 mo",
    detail: "The number Denial Management works to recover — every appeal and reconciliation on the platform ties back to this figure.",
  },
  {
    id: "underpayment",
    left: "50%",
    top: "24.2%",
    align: "right",
    vAlign: "up",
    label: "Underpayment Variance — $57.2M",
    detail: "Paid short of what the contract allows. Denial Management reconciles actual payment against Payor Grid's contract-derived expected reimbursement automatically, so this figure surfaces on its own instead of requiring a manual audit.",
  },
  {
    id: "collection",
    left: "97%",
    top: "24.2%",
    align: "right",
    vAlign: "up",
    label: "Net Collection Rate — 92.7%",
    detail: "Paid ÷ allowed, tracked against a target. This is one of the numbers behind the platform's stated outcome of increased reimbursement accuracy.",
  },
  {
    id: "denial-by-payer",
    left: "49%",
    top: "32.2%",
    align: "center",
    vAlign: "down",
    label: "Denial $ by payer",
    detail: "Denied dollars ranked by payer — the same canonical figures Payor Grid's compliance tracking and Denial Management both read from, per the platform's one-owner-per-fact design.",
  },
  {
    id: "ar-aging",
    left: "96.5%",
    top: "65.7%",
    align: "right",
    vAlign: "down",
    label: "AR aging",
    detail: "Outstanding receivables broken out by age bucket — visible continuously, not reconstructed at month-end.",
  },
];

const popupAlignClass: Record<Align, string> = {
  left: "left-0",
  center: "left-1/2 -translate-x-1/2",
  right: "right-0",
};

const popupVAlignClass: Record<VAlign, string> = {
  down: "top-8",
  up: "bottom-8",
};

export function ScreenshotHotspots() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl border border-slate-200 shadow-md">
        <ZoomableImage
          src="/screenshots/analytics-05-financial.png"
          alt="MGear financial analytics — denied dollars, underpayment variance, and net collection rate by payer"
          width={2000}
          height={1250}
          className="h-auto w-full"
        />
      </div>

      {/* Markers and popups live in their own layer, deliberately outside
          the image's overflow-hidden wrapper above, so a popup near an edge
          can extend past the screenshot without being clipped by the
          rounded-corner mask. */}
      <div className="pointer-events-none absolute inset-0">
        {hotspots.map((h) => (
          <div
            key={h.id}
            className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: h.left, top: h.top }}
          >
            <span className="relative flex h-6 w-6">
              {/* Always mounted — every marker's ping shares one continuous
                  animation clock so they all stay in phase. Conditionally
                  mounting/unmounting this on hover restarts its CSS
                  animation from zero each time, which is what knocked them
                  out of sync with each other. Opacity hides it without
                  touching the clock. */}
              <span
                className={`absolute inset-0 animate-ping rounded-full bg-brand ${
                  active === h.id ? "opacity-0" : "opacity-75"
                }`}
              />
              <button
                type="button"
                aria-label={h.label}
                onClick={() => setActive((prev) => (prev === h.id ? null : h.id))}
                onMouseEnter={() => setActive(h.id)}
                onMouseLeave={() => setActive((prev) => (prev === h.id ? null : prev))}
                className={`relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white shadow-md transition-transform ${
                  active === h.id ? "scale-110 bg-brand-dark" : "bg-brand hover:scale-110"
                }`}
              >
                +
              </button>
            </span>

            {active === h.id && (
              <div
                className={`absolute z-10 w-64 rounded-lg border border-slate-200 bg-white px-4 py-3 text-left shadow-lg sm:w-72 ${popupAlignClass[h.align]} ${popupVAlignClass[h.vAlign]}`}
              >
                <p className="text-sm font-semibold text-charcoal">{h.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">{h.detail}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
