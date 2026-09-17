import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { ModulePageLayout } from "@/components/ModulePageLayout";

export const metadata: Metadata = {
  title: "Contract Management — AI Contract Intelligence for Hospitals",
  description:
    "Upload a payer contract once. Reimbursement terms, authorization rules, and notification windows reach every module that needs them automatically.",
};

export default function Page() {
  return (
    <>
      <Section width="wide" className="pb-0 pt-8">
        <div className="rounded-lg border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900">
          This module&apos;s AI extraction capability is being built ahead of
          go-to-market. This page is written present-tense per product leadership&apos;s
          ruling — and now doubles as the specification for that build.
        </div>
      </Section>
      <ModulePageLayout
        eyebrow="Module — Contract Management"
        headline="One Contract, Five Modules Updated"
        subheadline="Upload a payer contract once. Every module that needs its terms gets them — without anyone typing a single rule by hand."
        receives="payer contracts, uploaded directly by the hospital."
        sends="extracted reimbursement terms, covered services, authorization/notification rules to Payor Grid — which reaches Authorization, Payer Communication, Denial Management, and Analytics from there."
        problem="A standalone contract management tool extracts a contract's terms and puts them in a document. Then nobody reads that document at the moment it actually matters — when an authorization request goes out, when a notification window is about to close, when a payment comes in short. Contract Management exists so the terms don't sit in a document at all. They go directly into the systems doing the work."
        whatItDoes="Hospitals upload payer contracts. Contract Intelligence extracts reimbursement terms, covered services, authorization rules, notification rules, and operational requirements — feeding Payor Grid, Denial Management, Analytics, Authorization Management, and Payer Communication."
        workflow={
          <>
            <p>
              A contract goes in. From there, one input changes five modules without
              anyone re-entering anything: Payor Grid gains that payer&apos;s rules.
              Authorization Management knows what needs authorizing under this specific
              contract. Payer Communication knows the notification windows. Denial
              Management knows the expected reimbursement, so a payment that comes in
              short becomes a visible underpayment. Analytics measures actual payment
              against what the contract says was owed.
            </p>
            <p className="mt-4">
              This is the honest answer to &ldquo;why not just buy a contract management
              tool&rdquo;: extracting the terms was never the hard part. Getting them to
              the systems that act on them, at the moment they matter, is.
            </p>
          </>
        }
        businessValue="Nobody re-keys a payer's rate schedule into Payor Grid by hand, and nobody has to remember to check the contract when a payment looks light. The contract's terms are already where the work happens."
        financialImpact={
          <p>
            This module contributes directly to{" "}
            <strong className="text-charcoal">increased reimbursement accuracy</strong>{" "}
            and <strong className="text-charcoal">recovery of underpayments</strong>.
          </p>
        }
        aiCapabilities={
          <p>
            <strong className="text-charcoal">Contract Intelligence</strong>, one of
            MGear&apos;s named AI capabilities, performs the extraction described above.
            AI assists operations — humans remain responsible for reviewing and
            confirming what the system extracts.
          </p>
        }
        integrationCapabilities="Contract Management's output flows into Payor Grid and, from there, into the platform's EMR and payer connectivity."
        futureRoadmap="This page's copy is the build specification for Contract Intelligence — the extraction capability described above ships ahead of go-to-market."
        screenshots={[]}
        faqs={[
          {
            question: "How does Contract Intelligence know what's in a contract?",
            answer: "It extracts reimbursement terms, covered services, and authorization and notification rules directly from the uploaded contract.",
          },
          {
            question: "Does AI replace the staff who manage payer contracts?",
            answer: "No. AI assists with extraction. Staff remain responsible for reviewing and confirming what's extracted.",
          },
          {
            question: "Why not just use a standalone contract management tool?",
            answer: "A standalone tool extracts the terms and stores them in a document. This module sends those terms directly into the systems that act on them, at the moment they matter.",
          },
        ]}
      />
    </>
  );
}
