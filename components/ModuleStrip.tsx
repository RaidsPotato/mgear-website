"use client";

import { Fragment } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { moduleLinks } from "@/lib/nav";

const descriptors: Record<string, string> = {
  "/modules/utilization-management": "reviews, medical necessity",
  "/modules/authorization-management": "requests, status, escalations",
  "/modules/payor-grid": "payer rules, notification windows",
  "/modules/payer-communication": "notifications, documentation",
  "/modules/p2p-management": "physician-advisor escalations",
  "/modules/denial-management": "appeals, underpayments",
  "/modules/contract-management": "payer terms, extracted rules",
  "/modules/conversational-analytics": "governed, natural-language answers",
  "/modules/quality-management": "review and workflow auditing",
  "/modules/productivity": "staffing, scheduling, performance",
  "/modules/emr-integration": "FHIR, HL7, Epic, Oracle Health, MEDITECH",
};

// The stage groupings follow the order work moves in 02-CONNECTION-MAP.md's
// whole-system picture (review -> authorization -> payer rules and contact ->
// denial/P2P outcomes -> analytics, quality and productivity), with EMR
// Integration underneath because that map shows it feeding every box. The
// stage names are navigation labels, not product claims.
const stages: { label: string; hrefs: string[] }[] = [
  {
    label: "Review & authorize",
    hrefs: ["/modules/utilization-management", "/modules/authorization-management"],
  },
  {
    label: "Payer rules & contact",
    hrefs: [
      "/modules/payor-grid",
      "/modules/payer-communication",
      "/modules/contract-management",
    ],
  },
  {
    label: "Resolve outcomes",
    hrefs: ["/modules/p2p-management", "/modules/denial-management"],
  },
  {
    label: "See, audit & improve",
    hrefs: [
      "/modules/conversational-analytics",
      "/modules/quality-management",
      "/modules/productivity",
    ],
  },
];

const label = (href: string) => moduleLinks.find((m) => m.href === href)?.label ?? href;

// Deliberately NOT a flat card grid — 02-CONNECTION-MAP.md names that the
// failure mode. Modules are grouped into stages that hand off to the next
// stage with an arrow, and EMR Integration runs underneath feeding all of
// them, so it still reads as one connected flow.
export function ModuleStrip() {
  const emr = "/modules/emr-integration";

  return (
    <div>
      <div className="flex flex-col items-stretch lg:flex-row lg:items-start">
        {stages.map((stage, si) => (
          <Fragment key={stage.label}>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: si * 0.08, duration: 0.4, ease: "easeOut" }}
              className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="eyebrow">{stage.label}</p>
              <ul className="mt-4 space-y-3">
                {stage.hrefs.map((href) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="block rounded-md font-medium text-charcoal hover:text-brand"
                    >
                      {label(href)}
                    </Link>
                    <span className="block text-sm text-slate-500">{descriptors[href]}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {si < stages.length - 1 && (
              <span
                aria-hidden
                className="flex h-8 flex-none items-center justify-center text-brand/60 lg:h-24 lg:w-10 lg:self-start"
              >
                <svg
                  width="22"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="rotate-90 lg:rotate-0"
                >
                  <path d="M1 6h19M15 1.5 20 6l-5 4.5" />
                </svg>
              </span>
            )}
          </Fragment>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
        className="mt-3 flex flex-col gap-1 rounded-xl border border-brand/25 bg-[#f2f9f4] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
      >
        <div>
          <Link href={emr} className="font-medium text-charcoal hover:text-brand">
            {label(emr)}
          </Link>
          <span className="ml-2 text-sm text-slate-500">({descriptors[emr]})</span>
        </div>
        <p className="text-sm text-slate-600">Feeds every module above, continuously.</p>
      </motion.div>
    </div>
  );
}
