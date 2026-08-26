"use client";

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
  "/modules/emr-integration": "FHIR, HL7, Epic, Cerner, Meditech",
};

// Deliberately NOT a card grid — 02-CONNECTION-MAP.md names this the failure
// mode. Rendered as one continuous connected flow instead.
export function ModuleStrip() {
  return (
    <div className="flex flex-wrap items-center gap-x-1 gap-y-3 text-sm leading-relaxed">
      {moduleLinks.map((m, i) => (
        <span key={m.href} className="flex items-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Link
              href={m.href}
              className="rounded-md px-1.5 py-0.5 font-medium text-charcoal hover:bg-surface-alt hover:text-brand"
            >
              {m.label}
            </Link>
            <span className="text-slate-400"> ({descriptors[m.href]})</span>
          </motion.span>
          {i < moduleLinks.length - 1 && (
            <span className="mx-2 text-brand/50">&rarr;</span>
          )}
        </span>
      ))}
    </div>
  );
}
