import type { Metadata } from "next";
import { ModulePageLayout } from "@/components/ModulePageLayout";

export const metadata: Metadata = {
  title: "Payor Grid — Automated Payer Rules and Compliance Engine",
  description:
    "Payer requirements, notification windows, and documentation rules enforced automatically — payer compliance measured, not assumed.",
};

export default function Page() {
  return (
    <ModulePageLayout
      eyebrow="Module — Payor Grid"
      headline="The Binder Every Hospital Has, Turned Into Something That Enforces Itself"
      subheadline="Payer requirements don't just sit in a document somebody has to remember to check. They watch the actual work in real time, and flag the moment it drifts."
      receives="extracted terms from Contract Management; requirement checks from Authorization Management and Payer Communication."
      sends="payer rules and notification requirements that govern how both of those modules work; deviation data to the Payer Compliance analytics tab."
      problem="Every hospital has a binder — physical, or in someone's head — of what each payer wants: notification windows, documentation format, submission endpoints, the right contact. It lives with whoever's been there longest, and it's the first thing that breaks when that person is out. Payor Grid replaces the binder with something the platform itself checks against, continuously."
      whatItDoes="Payer requirements. Notification rules. Documentation submission rules. Contacts. Authorization rules. Operational guidance. Payer-specific workflows."
      workflow="Payor Grid holds each payer's rules — notification windows, documentation requirements, submission endpoints, contacts. A rules engine watches the actual work against those rules continuously. The moment work departs from what a payer requires, a deviation is recorded automatically. The Payer Compliance analytics tab reads that deviation stream directly — so payer compliance becomes a measured number, not an opinion someone offers in a meeting."
      businessValue="Nobody has to remember which payer wants a fax versus a portal upload, or which one requires 24-hour notification versus 72. The rules live in one place, apply themselves to the actual work, and tell a manager the moment something is about to miss a requirement — not after the denial letter arrives."
      financialImpact={
        <p>
          The direct outcome is{" "}
          <strong className="text-charcoal">improved payer compliance</strong> — and
          because a large share of denials happen on technicalities like a missed
          notification window rather than a clinical dispute, this module also
          contributes to{" "}
          <strong className="text-charcoal">reduced preventable denials</strong>.
        </p>
      }
      aiCapabilities="Payor Grid's core intelligence is the rules engine — a deterministic system that checks real work against configured payer rules, not one of MGear's seven named AI capabilities. Where Payor Grid's rules are populated by Contract Intelligence's AI extraction, that upstream step is AI-assisted; the rules engine itself is not."
      integrationCapabilities={
        <>
          <p>
            Payor Grid&apos;s rules are populated in part by Contract Management — when
            a hospital uploads a payer contract, Contract Intelligence extracts
            reimbursement terms, covered services, and notification rules directly into
            Payor Grid, without anyone typing them in.
          </p>
          <p className="mt-4 rounded-lg border border-dashed border-brand/40 bg-brand/5 px-4 py-3 text-sm">
            <strong className="text-charcoal">Future Vision:</strong> Payor Grid is
            positioned to communicate directly with payer portals via API — submitting
            and checking status without a person working through each payer&apos;s own
            website. This is forward-looking, not a current capability.
          </p>
        </>
      }
      futureRoadmap="Direct EMR-to-payer-portal API connectivity is the one clearly forward-looking item assigned to this module."
      screenshots={[
        { src: "/screenshots/payer-01-payer-grid.png", alt: "MGear Payor Grid — payer rules and requirements" },
      ]}
      faqs={[
        {
          question: "How does Payor Grid know what each payer requires?",
          answer: "Rules are configured directly and, where a hospital has uploaded payer contracts, extracted from those contracts into the Grid.",
        },
        {
          question: "What happens when work drifts from a payer's rules?",
          answer: "A deviation is recorded automatically the moment it happens, visible on the Payer Compliance analytics tab immediately.",
        },
        {
          question: "Will Payor Grid connect directly to payer portals?",
          answer: "That's a future direction, not a current capability — direct API communication so requests and status checks don't require a person working through each payer's website separately.",
        },
      ]}
    />
  );
}
