"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Rect = { x: number; y: number; width: number; height: number };

type NodeId =
  | "patientAccess"
  | "um"
  | "auth"
  | "payerComm"
  | "contract"
  | "payorGrid"
  | "physicianAdvisors"
  | "denial"
  | "analytics"
  | "quality"
  | "productivity"
  | "alerts";

const nodes: {
  id: NodeId;
  title: string;
  sub: string;
  row: number;
  col: number; // 1-4
  receives: string;
  sends: string;
}[] = [
  {
    id: "patientAccess",
    title: "Patient Access / Admitting",
    sub: "",
    row: 1,
    col: 1,
    receives: "the patient at admission.",
    sends: "admission data to Utilization Management the moment a patient is registered.",
  },
  {
    id: "um",
    title: "Utilization Management",
    sub: "ED / OBS / IP, medical necessity",
    row: 1,
    col: 2,
    receives: "admission data from Patient Access and Admitting.",
    sends: "completed reviews to Authorization Management; physician escalations to Physician Advisors when a case needs an advisor.",
  },
  {
    id: "auth",
    title: "Authorization",
    sub: "requests, TAR, defers",
    row: 1,
    col: 3,
    receives: "completed reviews from Utilization Management.",
    sends: "notifications to Payer Communication; requirement checks to Payor Grid; denials trigger a case in Physician Advisors.",
  },
  {
    id: "payerComm",
    title: "Payer Communication",
    sub: "notifications, calls, documents",
    row: 1,
    col: 4,
    receives: "notifications from Authorization Management; that payer's specific requirements from Payor Grid.",
    sends: "compliance data to Analytics.",
  },
  {
    id: "physicianAdvisors",
    title: "Physician Advisors",
    sub: "P2P scheduling, overturn rates",
    row: 2,
    col: 2,
    receives: "physician escalations from Utilization Management; denial cases from Authorization Management.",
    sends: "overturned outcomes back to Authorization; upheld outcomes to Denial Management; overturn rates and advisor performance to Analytics.",
  },
  {
    id: "payorGrid",
    title: "Payor Grid",
    sub: "payer rules, notification requirements",
    row: 2,
    col: 3,
    receives: "extracted terms from Contract Intelligence; requirement checks from Authorization and Payer Communication.",
    sends: "payer rules and notification requirements that govern how both of those modules work; deviation data to Analytics.",
  },
  {
    id: "contract",
    title: "Contract Intelligence",
    sub: "extracted terms",
    row: 2,
    col: 4,
    receives: "payer contracts, uploaded directly by the hospital.",
    sends: "extracted reimbursement terms, covered services, and authorization/notification rules to Payor Grid.",
  },
  {
    id: "denial",
    title: "Denial Management",
    sub: "appeals, underpayments, unpaid claims",
    row: 3,
    col: 3,
    receives: "upheld outcomes from Physician Advisors; denials from Authorization; expected reimbursement from Payor Grid.",
    sends: "appeal and reimbursement data to Analytics.",
  },
  {
    id: "quality",
    title: "Quality Management",
    sub: "workflow audit",
    row: 4,
    col: 1,
    receives: "review and workflow data from Utilization Management and Authorization Management.",
    sends: "workflow-delay flags to managers; review-quality data to Analytics.",
  },
  {
    id: "productivity",
    title: "Productivity",
    sub: "staffing, workload",
    row: 4,
    col: 2,
    receives: "staffing, scheduling, and workload data across departments.",
    sends: "performance data to Analytics.",
  },
  {
    id: "alerts",
    title: "Alerts",
    sub: "the human is told",
    row: 4,
    col: 3,
    receives: "workflow-delay flags and threshold breaches from across the platform.",
    sends: "the notification that gets a manager to act — the step before a human intervenes.",
  },
  // Analytics reads from every module here — six converging lines into one
  // small box, from every corner of the diagram, is exactly what made this
  // hard to follow. It's rendered as its own band below instead, the same
  // way EMR Integration already communicates "feeds everything" without
  // drawing a line to all eleven modules.
  {
    id: "analytics",
    title: "Analytics",
    sub: "dashboards",
    row: 0,
    col: 0,
    receives: "a read-only feed from every module on the platform — it never holds its own version of a fact.",
    sends: "the same canonical numbers to every dashboard and role that reads them.",
  },
];

// `primary` edges are the core left-to-right, then-down story — shown by
// default so the diagram reads cleanly at a glance. `primary: false` edges
// are real, sourced connections too (governance/return relationships, and
// everything feeding Analytics), but only reveal themselves when a visitor
// clicks the node they touch — otherwise 20 overlapping lines reads as noise
// instead of a system.
//
// `route: "left-bus"` is for edges that would otherwise have to cut
// diagonally through unrelated boxes to reach Quality Management, which sits
// a full row below and to the left of its sources. Instead they exit their
// source leftward, run down a shared vertical lane to the left of the whole
// grid, and enter Quality from its left edge — a right-angle path through
// open margin instead of a diagonal through other cards.
//
// `route: "top-bus"` is for quality → alerts specifically: same row, but
// Productivity sits directly between them, so the line rises into the gutter
// above row 4, runs across above Productivity's box, then drops into Alerts
// — never crossing the box that's in the way.
//
// `route: "elbow"` is for the one primary edge that's neither same-row nor
// same-column — physicianAdvisors → denial. Drops halfway, turns, drops the
// rest of the way in, instead of a diagonal cutting across the gap.
const edges: {
  from: NodeId;
  to: NodeId;
  primary: boolean;
  route?: "left-bus" | "top-bus" | "elbow";
}[] = [
  { from: "patientAccess", to: "um", primary: true },
  { from: "um", to: "auth", primary: true },
  { from: "auth", to: "payerComm", primary: true },
  { from: "um", to: "physicianAdvisors", primary: true },
  { from: "auth", to: "payorGrid", primary: true },
  { from: "contract", to: "payorGrid", primary: true },
  { from: "physicianAdvisors", to: "denial", primary: true, route: "elbow" },
  { from: "um", to: "quality", primary: true, route: "left-bus" },
  { from: "auth", to: "quality", primary: true, route: "left-bus" },
  { from: "quality", to: "alerts", primary: true, route: "top-bus" },

  { from: "payorGrid", to: "auth", primary: false },
  { from: "payorGrid", to: "payerComm", primary: false },
  { from: "auth", to: "physicianAdvisors", primary: false },
  { from: "payorGrid", to: "denial", primary: false },
];

// Every module here sends to Analytics — drawn as a band connection rather
// than six individual crossing lines. Still real, still sourced, just not
// point-to-point.
const analyticsFeeders: NodeId[] = [
  "payerComm",
  "payorGrid",
  "physicianAdvisors",
  "denial",
  "quality",
  "productivity",
];

export function WholeSystemDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Partial<Record<NodeId, HTMLDivElement | null>>>({});
  const [rects, setRects] = useState<Partial<Record<NodeId, Rect>> | null>(null);
  const [selected, setSelected] = useState<NodeId | null>(null);

  const connectedIds = new Set<NodeId>();
  if (selected) {
    connectedIds.add(selected);
    edges.forEach(({ from, to }) => {
      if (from === selected) connectedIds.add(to);
      if (to === selected) connectedIds.add(from);
    });
    if (selected === "analytics") {
      analyticsFeeders.forEach((id) => connectedIds.add(id));
    } else if (analyticsFeeders.includes(selected)) {
      connectedIds.add("analytics");
    }
  }
  const selectedNode = selected ? nodes.find((n) => n.id === selected) : null;
  const analyticsActive = selected !== null && connectedIds.has("analytics");

  useLayoutEffect(() => {
    function measure() {
      const container = containerRef.current;
      if (!container) return;
      const next: Partial<Record<NodeId, Rect>> = {};
      for (const n of nodes) {
        const el = nodeRefs.current[n.id];
        if (!el) continue;
        let x = 0;
        let y = 0;
        let node: HTMLElement | null = el;
        while (node && node !== container) {
          x += node.offsetLeft;
          y += node.offsetTop;
          node = node.offsetParent as HTMLElement | null;
        }
        next[n.id] = { x, y, width: el.offsetWidth, height: el.offsetHeight };
      }
      setRects(next);
    }
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const rows = [1, 2, 3, 4].map((r) => nodes.filter((n) => n.row === r));

  return (
    <div
      ref={containerRef}
      className="relative rounded-xl border border-brand/25 bg-gradient-to-b from-[#f2f9f4] to-white px-6 py-10 sm:px-10"
    >
      <span className="eyebrow absolute -top-3 left-6 bg-white px-3">
        The patient is still admitted
      </span>

      <div className="flex flex-col gap-8">
        {rows.map((rowNodes, ri) => (
          <div key={ri} className="grid grid-cols-1 gap-3 sm:grid-cols-4">
            {[1, 2, 3, 4].map((col) => {
              const n = rowNodes.find((x) => x.col === col);
              if (!n) return <div key={col} className="hidden sm:block" />;
              const isSelected = selected === n.id;
              const isDimmed = selected !== null && !connectedIds.has(n.id);
              return (
                <motion.button
                  key={n.id}
                  type="button"
                  onClick={() => setSelected((prev) => (prev === n.id ? null : n.id))}
                  ref={(el) => {
                    nodeRefs.current[n.id] = el;
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: ri * 0.12, ease: "easeOut" }}
                  className={`flex flex-col justify-center rounded-lg border px-4 py-3 text-left shadow-xs transition-all ${
                    isSelected
                      ? "border-brand bg-brand/5 ring-2 ring-brand/40"
                      : "border-slate-200 bg-white hover:border-brand/40"
                  } ${isDimmed ? "opacity-40" : "opacity-100"}`}
                >
                  <span className="text-sm font-medium text-charcoal">{n.title}</span>
                  {n.sub && <span className="mt-0.5 text-xs text-slate-500">{n.sub}</span>}
                </motion.button>
              );
            })}
          </div>
        ))}
      </div>

      <p className="mt-3 text-center text-xs text-slate-400">
        Productivity and Alerts each receive from across the platform rather than
        one specific box — click either one to see exactly what feeds it.
      </p>

      <button
        type="button"
        onClick={() => setSelected((prev) => (prev === "analytics" ? null : "analytics"))}
        className={`mt-5 flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-3 text-center text-sm font-medium transition-all ${
          selected === "analytics"
            ? "border-brand bg-brand/10 text-brand ring-2 ring-brand/40"
            : analyticsActive
              ? "border-brand/60 bg-brand/5 text-brand"
              : "border-brand/30 bg-white text-charcoal hover:border-brand/50"
        }`}
      >
        <span aria-hidden>↑</span>
        Analytics — dashboards, reading a governed feed from every module above
      </button>

      <div className="mt-3 rounded-lg border border-dashed border-brand/40 bg-brand/5 px-4 py-3 text-center text-xs font-medium text-brand">
        EMR Integration — FHIR · HL7 · Epic · Cerner · Meditech · Paragon — feeds every box above, continuously
      </div>

      <div className="mt-5 min-h-[4.5rem] rounded-lg border border-slate-200 bg-white px-5 py-4">
        {selectedNode ? (
          <>
            <p className="text-sm font-semibold text-charcoal">{selectedNode.title}</p>
            <p className="mt-1.5 text-sm text-slate-600">
              <strong className="font-medium text-charcoal">Receives:</strong> {selectedNode.receives}
            </p>
            <p className="mt-1 text-sm text-slate-600">
              <strong className="font-medium text-charcoal">Sends:</strong> {selectedNode.sends}
            </p>
          </>
        ) : (
          <p className="text-sm text-slate-400">Click any box to see what it receives and sends.</p>
        )}
      </div>

      {rects && (
        <svg
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-visible"
        >
          <defs>
            <marker
              id="wsd-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#16a34a" fillOpacity={0.55} />
            </marker>
          </defs>
          {edges
            .filter((e) => e.primary)
            .map(({ from, to, route }, i) => {
              const a = rects[from];
              const b = rects[to];
              if (!a || !b) return null;
              const sameRow = Math.abs(a.y - b.y) < 4;
              let d: string;
              if (route === "left-bus") {
                // Right-angle route through open margin: drop from the
                // source's bottom into the row gutter, run left to a lane
                // outside the whole grid (nothing is ever positioned further
                // left, so this can never cross a box), then back in at the
                // target's left edge. um and auth each get their own lane so
                // the two lines stay visually distinct instead of merging.
                const busX = Math.min(...Object.values(rects).map((r) => r!.x)) - (from === "um" ? 16 : 28);
                const startX = a.x + a.width / 2;
                const dropY = a.y + a.height + (from === "um" ? 10 : 20);
                const endY = b.y + b.height / 2;
                d = `M ${startX} ${a.y + a.height} L ${startX} ${dropY} L ${busX} ${dropY} L ${busX} ${endY} L ${b.x} ${endY}`;
              } else if (route === "top-bus") {
                // Rise into the gutter above this row, cross above whatever
                // sits between the two boxes, then drop into the target —
                // same idea as left-bus, rotated to clear a same-row
                // neighbor instead of a different row.
                const riseY = a.y - 12;
                const startX = a.x + a.width / 2;
                const endX = b.x + b.width / 2;
                d = `M ${startX} ${a.y} L ${startX} ${riseY} L ${endX} ${riseY} L ${endX} ${b.y}`;
              } else if (route === "elbow") {
                // Drop straight down from the source, turn at the midpoint
                // between the two rows, then drop straight down into the
                // target — a right angle instead of a diagonal cutting
                // across the gap between them.
                const startX = a.x + a.width / 2;
                const endX = b.x + b.width / 2;
                const startY = a.y + a.height;
                const endY = b.y;
                const midY = (startY + endY) / 2;
                d = `M ${startX} ${startY} L ${startX} ${midY} L ${endX} ${midY} L ${endX} ${endY}`;
              } else {
                let x1: number, y1: number, x2: number, y2: number;
                if (sameRow) {
                  const leftToRight = a.x < b.x;
                  x1 = leftToRight ? a.x + a.width : a.x;
                  y1 = a.y + a.height / 2;
                  x2 = leftToRight ? b.x : b.x + b.width;
                  y2 = b.y + b.height / 2;
                } else {
                  x1 = a.x + a.width / 2;
                  y1 = a.y < b.y ? a.y + a.height : a.y;
                  x2 = b.x + b.width / 2;
                  y2 = a.y < b.y ? b.y : b.y + b.height;
                }
                const midX = (x1 + x2) / 2;
                const midY = (y1 + y2) / 2;
                d = sameRow
                  ? `M ${x1} ${y1} L ${x2} ${y2}`
                  : `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`;
              }
              // Deliberately not "both ends happen to be in the connected
              // set" — um and physicianAdvisors are both neighbors of auth
              // through separate edges, which would wrongly light up the
              // unrelated um→physicianAdvisors line too. Only an edge that
              // directly touches the selected node should brighten.
              const isConnected = selected !== null && (from === selected || to === selected);

              // This is the entire line-drawing budget — always exactly the
              // seven primary edges, never more. Selecting a node only ever
              // dims the ones that aren't part of its story and brightens
              // the ones that are; it can never add a line that wasn't
              // already on screen. Everything else a click reveals (the
              // governance/return relationships, the Analytics feeds) is
              // conveyed as text in the panel below instead of another line,
              // on purpose — a diagram that can only get cleaner or the same
              // when you click, never messier.
              let opacity = 0.55;
              let width = 1.5;
              if (selected !== null) {
                opacity = isConnected ? 0.9 : 0.12;
                width = isConnected ? 2.5 : 1;
              }

              return (
                <path
                  key={i}
                  d={d}
                  fill="none"
                  stroke="#16a34a"
                  strokeOpacity={opacity}
                  strokeWidth={width}
                  markerEnd="url(#wsd-arrow)"
                />
              );
            })}
        </svg>
      )}
    </div>
  );
}
