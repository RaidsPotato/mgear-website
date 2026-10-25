import type { Metadata } from "next";
import { ModulePageLayout } from "@/components/ModulePageLayout";
import { EMR_LIST } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Utilization Management — Real-Time Hospital UM Software",
  description:
    "Initial, admission and concurrent InterQual/MCG reviews connected directly to authorization and physician escalation — not a standalone UM tool.",
};

export default function Page() {
  return (
    <ModulePageLayout
      number={1}
      eyebrow="Module — Utilization Management"
      headline="Every Review, Connected to What Happens Next"
      subheadline="Utilization Management doesn't just decide medical necessity — that decision sets off everything downstream that protects the revenue tied to it."
      receives="Demographic and clinical data from the patient's chart."
      sends="Medical necessity reviews to Authorization Management, Payer Communication, P2P Management and Denial Management."
      problem="Missed admission opportunities and observation overutilization both start here — a review that happens too late, or a level-of-care decision made without full information, becomes lost revenue before the patient is ever discharged. UM's job is to catch that in real time, not reconstruct it afterward."
      whatItDoes="Initial, Admission and Concurrent InterQual/MCG Reviews. Medical necessity determinations. Physician escalation when a case needs advisor judgment. Avoidable-days tracking. Level-of-care validation. Reconciliation with the patient's actual and authorization statuses."
      workflow={
        <>
          <p>
            A review runs through a structured three-step process ending in a final
            documented outcome — visible live on the ED and inpatient dashboards as it
            happens, not compiled after the fact.
          </p>
          <p className="mt-4">
            Reviews aren&apos;t isolated events: an inpatient review that flags a
            level-of-care question routes straight into a physician escalation without
            anyone re-entering the case; a completed review becomes the authorization
            request without a second data-entry step.
          </p>
        </>
      }
      businessValue="Reviews and escalations happen inside one continuous workflow instead of a UM team working from a spreadsheet and paging a physician advisor separately. Avoidable days are tracked as they accumulate, not reconstructed at month-end. The live dashboards mean a UM director can see today's ED and inpatient status in real time, not the next morning."
      financialImpact={
        <p>
          Reviews decided correctly and on time protect three outcomes directly:{" "}
          <strong className="text-charcoal">increased inpatient admissions</strong>,{" "}
          <strong className="text-charcoal">reduced observation overutilization</strong>,
          and <strong className="text-charcoal">reduced avoidable days</strong>. Every
          review this module completes is a chance to capture one of those.
        </p>
      }
      integrationCapabilities={`Admission and clinical data arrive via FHIR and HL7 from the hospital's EHR — ${EMR_LIST} — feeding the ED and inpatient dashboards continuously.`}
      screenshots={[
        { src: "/screenshots/um-01-ed-bed-board.png", alt: "MGear ED dashboard — live emergency department review" },
        { src: "/screenshots/um-02-ip-dashboard.png", alt: "MGear inpatient dashboard — in-house, discharge, and finished queues" },
      ]}
      openItems={[
        "Reconciling each review with the patient's actual status, the physician's order and the payer authorization, and sending reviews on to Payer Communication, P2P Management and Denial Management, come from a product review dated 2026-10-20 and have not yet been confirmed against the product build.",
      ]}
      faqs={[
        {
          question: "How does a UM review become an authorization request?",
          answer: "Automatically. A completed review routes directly into Authorization Management — no separate data entry.",
        },
        {
          question: "Does AI make the medical necessity decision?",
          answer: "No. AI plays no part in medical necessity or level-of-care decisions — those remain with UM staff and physicians.",
        },
        {
          question: "Which EHRs feed UM's dashboards?",
          answer: `${EMR_LIST}, via FHIR and HL7.`,
        },
      ]}
    />
  );
}
