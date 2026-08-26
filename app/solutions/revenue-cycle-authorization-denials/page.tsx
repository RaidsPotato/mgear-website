import type { Metadata } from "next";
import Link from "next/link";
import { SolutionPageLayout } from "@/components/SolutionPageLayout";

export const metadata: Metadata = {
  title: "MGear for Revenue Cycle, Authorization & Denials Leadership",
  description:
    "Authorization delays, denials, and underpayments — connected from the moment they start to the appeal, the payer rule, or the manager alert that resolves them.",
};

export default function Page() {
  return (
    <SolutionPageLayout
      eyebrow="Solutions — Revenue Cycle, Authorization & Denials Leadership"
      headline="Every Denial Risk, Visible While the Stay Is Still Open"
      subheadline="Authorization delays don't sit in a queue. Denials don't wait for someone to notice a P2P outcome. Underpayments don't require a manual audit to surface. All three are visible the moment the data that produces them exists."
      financialImpact={
        <p>
          Across this cluster, the platform earns{" "}
          <strong className="text-charcoal">increased authorization efficiency</strong>,{" "}
          <strong className="text-charcoal">reduced preventable denials</strong>,{" "}
          <strong className="text-charcoal">faster appeal turnaround</strong>,{" "}
          <strong className="text-charcoal">recovery of underpayments</strong>,{" "}
          <strong className="text-charcoal">recovery of unpaid claims</strong>, and{" "}
          <strong className="text-charcoal">reduced revenue leakage</strong>.
        </p>
      }
      aiCapabilities={
        <p>
          <strong className="text-charcoal">Authorization Assistant</strong> reduces
          manual work in tracking and routing authorization requests and status.{" "}
          <strong className="text-charcoal">Workflow Automation</strong> creates an
          appeal and deep-links it to the originating case the moment a P2P outcome is
          upheld. AI does not replace authorization or denials staff — humans remain
          responsible for every authorization and appeal decision.
        </p>
      }
      integrationCapabilities={
        <>
          Authorization and denial data connect to the hospital&apos;s EHR via FHIR and
          HL7, and to payers through the platform&apos;s payer connectivity.{" "}
          <strong className="text-charcoal">CMS-0057-F</strong>, the federal
          prior-authorization interoperability rule, applies directly to this cluster.
        </>
      }
      screenshots={[
        { src: "/screenshots/auth-01-authorizations.png", alt: "MGear authorization tracker" },
        { src: "/screenshots/denial-01-appeals-queue.png", alt: "MGear denials and appeals workspace" },
      ]}
      faqs={[
        {
          question: "What's the difference between this page and the Authorization or Denial Management module pages?",
          answer:
            "This page is the leadership rollup across authorization, denials, and contract-derived reimbursement. The individual module pages go deeper on how each one works day to day.",
        },
        {
          question: "How fast does an appeal start after a denial is upheld?",
          answer: "Immediately and automatically — Workflow Automation drafts the appeal and deep-links it to the originating case the moment the outcome is captured.",
        },
        {
          question: "Where's the full financial case study?",
          answer: "The Results page, built around the Providence behavioral health program — a program that cost $395K returned $4.87M net.",
        },
      ]}
    >
      <h2 className="text-section font-semibold text-charcoal">
        The revenue risks this covers
      </h2>
      <p className="mt-4 max-w-3xl text-body text-slate-600">
        Authorization delays, missed payer notifications, preventable denials,
        underpayments, unpaid claims, and revenue leakage are named directly among the
        platform&apos;s core problems. This cluster — authorization, denials, and the
        contract terms that govern both — is where most of them start, or are caught.
      </p>

      <h2 className="mt-10 text-section font-semibold text-charcoal">
        The chain that starts at authorization
      </h2>
      <p className="mt-4 max-w-3xl text-body text-slate-600">
        When an authorization stalls: Payer Communication is notified immediately,
        Payor Grid checks that payer&apos;s specific requirements, the delay shows up on
        Analytics in real time, Quality flags it as a workflow issue, a manager is
        alerted, and the team resolves it before discharge.
      </p>

      <h2 className="mt-10 text-section font-semibold text-charcoal">
        The chain that closes a denial
      </h2>
      <p className="mt-4 max-w-3xl text-body text-slate-600">
        When a payer denies while the patient is in-house, a P2P case is created and
        scheduled with a physician advisor automatically. Overturned means the stay is
        authorized and no appeal is needed. Upheld means an appeal is drafted
        automatically, deep-linked back into the exact case that produced it — nobody
        re-keys a case or emails a spreadsheet between authorization staff, physician
        advisors, and appeals.
      </p>

      <h2 className="mt-10 text-section font-semibold text-charcoal">
        The contract that teaches the rest of the platform
      </h2>
      <p className="mt-4 max-w-3xl text-body text-slate-600">
        Contract Intelligence extracts reimbursement terms, covered services,
        authorization rules, notification rules, and operational requirements from an
        uploaded payer contract. That reaches Payor Grid without anyone typing the terms
        in, which reaches Authorization, Payer Communication, and Denial Management from
        there — so an underpayment against the contracted rate becomes visible instead
        of invisible, and Analytics can measure actual payment against contracted
        payment.
      </p>

      <h2 className="mt-10 text-section font-semibold text-charcoal">
        The number this adds up to
      </h2>
      <p className="mt-4 max-w-3xl text-body text-slate-600">
        At the platform level, this same coordination pattern is what produced the
        outcome on the{" "}
        <Link href="/results" className="font-semibold text-brand underline underline-offset-2">
          Results page
        </Link>
        : a program that cost $395K returned $4.87M net.
      </p>
    </SolutionPageLayout>
  );
}
