import type { Metadata } from "next";
import { ModulePageLayout } from "@/components/ModulePageLayout";

export const metadata: Metadata = {
  title: "Denial Management — Hospital Appeals and Underpayment Recovery Software",
  description:
    "Appeals created automatically from upheld physician-advisor outcomes, and underpayments made visible through automatic reimbursement reconciliation.",
};

export default function Page() {
  return (
    <ModulePageLayout
      eyebrow="Module — Denial Management"
      headline="The Appeal Starts Itself. The Underpayment Doesn't Stay Hidden."
      subheadline="When a P2P call is upheld, the appeal is created and linked back to that case automatically. When a payer pays less than the contract says they owe, this module is what makes that visible."
      receives="upheld outcomes from P2P Management; denials recorded in Authorization Management; expected reimbursement terms from Payor Grid."
      sends="appeal and reimbursement data to Analytics."
      problem="Preventable denials, underpayments, unpaid claims, and revenue leakage are named directly among the platform's core problems. An underpayment that no one catches because reconciling actual payment against the contract takes hours nobody has is revenue lost as surely as a denial that's never appealed."
      whatItDoes="All appeal levels. Appeal status and outcomes. Reimbursement reconciliation. Expected reimbursement. Underpayments. Unpaid claims. Proactive escalations."
      workflow={
        <>
          <p>
            When a P2P call is upheld, an appeal is created automatically and
            deep-linked back into the exact case that produced it — no one drafts a new
            record from scratch.
          </p>
          <p className="mt-4">
            On the reimbursement side, this module holds the expected reimbursement for
            each payer, sourced from Payor Grid&apos;s contract-derived terms. Actual
            payment is reconciled against that expected figure automatically — so an
            underpayment shows up as a number on a worklist, not something someone has
            to go looking for.
          </p>
        </>
      }
      businessValue="An appeal doesn't wait for someone to notice a denial was upheld and start paperwork from zero. An underpayment doesn't require a manual audit to surface. Both are visible the moment the data that produces them exists."
      financialImpact={
        <p>
          This module earns{" "}
          <strong className="text-charcoal">recovery of underpayments</strong>,{" "}
          <strong className="text-charcoal">recovery of unpaid claims</strong>, and{" "}
          <strong className="text-charcoal">reduced revenue leakage</strong> directly.
        </p>
      }
      aiCapabilities={
        <p>
          <strong className="text-charcoal">Workflow Automation</strong>, one of
          MGear&apos;s named AI capabilities, is what creates the appeal automatically
          and deep-links it to the originating case the moment a P2P outcome is upheld.
          AI does not replace denials staff — humans remain responsible for every
          appeal decision.
        </p>
      }
      integrationCapabilities="Denial Management connects to the same EMR integration and payer connectivity as the rest of the platform, and specifically to Payor Grid for contract-derived expected-reimbursement figures."
      screenshots={[
        { src: "/screenshots/denial-01-appeals-queue.png", alt: "MGear denials and appeals workspace" },
      ]}
      faqs={[
        {
          question: "How does an appeal get created?",
          answer: "When a P2P outcome is upheld, Workflow Automation creates the appeal and links it back to that case automatically — no manual drafting from scratch.",
        },
        {
          question: "How does Denial Management know if we were underpaid?",
          answer: "It holds each payer's expected reimbursement, sourced from Payor Grid's contract-derived terms, and reconciles actual payment against it automatically.",
        },
        {
          question: "Does AI decide whether to appeal, or write the appeal's argument?",
          answer: "No. Workflow Automation creates and links the appeal record. The appeal decision and its content remain with denials staff.",
        },
      ]}
    />
  );
}
