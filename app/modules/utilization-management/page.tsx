import type { Metadata } from "next";
import { ModulePageLayout } from "@/components/ModulePageLayout";

export const metadata: Metadata = {
  title: "Utilization Management — Real-Time Hospital UM Software",
  description:
    "ED, observation, and inpatient reviews connected directly to authorization and physician escalation — not a standalone UM tool.",
};

export default function Page() {
  return (
    <ModulePageLayout
      eyebrow="Module — Utilization Management"
      headline="Every Review, Connected to What Happens Next"
      subheadline="Utilization Management doesn't just decide medical necessity — that decision sets off everything downstream that protects the revenue tied to it."
      receives="admission data from Patient Access and Admitting the moment a patient is registered."
      sends="completed reviews to Authorization Management, which starts the authorization process automatically; physician escalations to P2P Management when a case needs an advisor."
      problem="Missed admission opportunities and observation overutilization both start here — a review that happens too late, or a level-of-care decision made without full information, becomes lost revenue before the patient is ever discharged. UM's job is to catch that in real time, not reconstruct it afterward."
      whatItDoes="ED, observation, and inpatient reviews. Medical necessity determinations. Physician escalation when a case needs advisor judgment. Avoidable-days tracking. Level-of-care validation."
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
          review this module completes is a chance to capture one of those — or lose it
          if the review comes too late for the modules downstream to act on it.
        </p>
      }
      aiCapabilities={
        <p>
          Utilization Management itself doesn&apos;t carry a named AI feature of its
          own. The AI capability that touches it is downstream:{" "}
          <strong className="text-charcoal">AI Quality Auditor</strong>, part of Quality
          Management, audits UM&apos;s review quality and workflow compliance using the
          data UM sends it. As always: AI does not replace clinicians. AI assists
          operations. Humans remain responsible for every medical necessity and
          level-of-care decision.
        </p>
      }
      integrationCapabilities="Admission and clinical data arrive via FHIR and HL7 from the hospital's EHR — Epic, Cerner, Meditech, Paragon, or Health Samurai Aidbox — feeding the ED and inpatient dashboards continuously."
      futureRoadmap="As Quality Management ships, review auditing for UM deepens using the same data UM already sends today — no new integration required on UM's side."
      screenshots={[
        { src: "/screenshots/um-01-ed-bed-board.png", alt: "MGear ED dashboard — live emergency department review" },
        { src: "/screenshots/um-02-ip-dashboard.png", alt: "MGear inpatient dashboard — in-house, discharge, and finished queues" },
      ]}
      faqs={[
        {
          question: "How does a UM review become an authorization request?",
          answer: "Automatically. A completed review routes directly into Authorization Management — no separate data entry.",
        },
        {
          question: "Does AI make the medical necessity decision?",
          answer: "No. AI assists with review-quality auditing downstream in Quality Management. The medical necessity and level-of-care decisions remain with UM staff and physicians.",
        },
        {
          question: "Which EHRs feed UM's dashboards?",
          answer: "Epic, Cerner, Meditech, Paragon, and Health Samurai Aidbox, via FHIR and HL7.",
        },
      ]}
    />
  );
}
