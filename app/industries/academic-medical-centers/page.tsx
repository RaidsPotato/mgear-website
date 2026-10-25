import type { Metadata } from "next";
import { SolutionPageLayout } from "@/components/SolutionPageLayout";
import { EMR_LIST } from "@/lib/copy";

export const metadata: Metadata = {
  title: "MGear for Academic Medical Centers — One Platform Coordinating Every Department",
  description:
    "Ten departments are each responsible for a piece of protecting revenue. At academic-medical-center scale, that coordination problem doesn't get smaller — MGear connects it in real time.",
};

export default function Page() {
  return (
    <SolutionPageLayout
      eyebrow="Industries — Academic Medical Centers"
      headline="The Same Platform, Coordinating Every Department You Already Have"
      subheadline="Ten departments are each responsible for some piece of protecting hospital revenue. At the scale of an academic medical center, that coordination problem is not smaller — it's the exact one this platform exists to solve."
      financialImpact={
        <p>
          Every module connects to money:{" "}
          <strong className="text-charcoal">increased inpatient admissions</strong>,{" "}
          <strong className="text-charcoal">reduced observation overutilization</strong>,{" "}
          <strong className="text-charcoal">reduced avoidable days</strong>,{" "}
          <strong className="text-charcoal">reduced preventable denials</strong>,{" "}
          <strong className="text-charcoal">increased authorization efficiency</strong>,{" "}
          <strong className="text-charcoal">recovery of underpayments and unpaid claims</strong>,{" "}
          <strong className="text-charcoal">increased reimbursement accuracy</strong>, and{" "}
          <strong className="text-charcoal">improved payer compliance</strong>.
        </p>
      }
      aiCapabilities="AI Quality Auditor, Authorization Assistant, Payer Communication Assistant, Contract Intelligence, Conversational Analytics, Operational Intelligence, and Workflow Automation are the platform's named AI capabilities. AI does not replace clinicians. AI assists operations. Humans remain responsible for every operational and clinical decision."
      integrationCapabilities="CMS-0057-F readiness, FHIR interoperability, HL7 interoperability, SMART on FHIR, payer connectivity, HIPAA architecture, role-based access, audit logging, enterprise security, cloud architecture, multi-hospital SaaS deployment, and enterprise scalability are all stated platform capabilities. Role-based access and audit logging are visible in the working product today."
      screenshots={[
        { src: "/screenshots/analytics-01-executive-dashboard.png", alt: "MGear executive dashboard — every module on one screen" },
      ]}
      openItems={[
        "The cause-finding, resend and escalation steps in the day-to-day sequence come from a product review dated 2026-10-20 and have not yet been confirmed against the product build. The list of supported EHRs is still to be confirmed with the integration workstream.",
      ]}
      faqs={[
        {
          question: "Which departments does this cover?",
          answer:
            "Utilization Management, Case Management, Physician Advisors, Patient Access, Admitting, Business Office, Revenue Cycle, Authorization Teams, Denial Management, and Payer Communication — coordinated through one platform instead of working independently.",
        },
        {
          question: "Does MGear scale to a large, multi-department organization?",
          answer: "Multi-hospital SaaS deployment and enterprise scalability are both stated platform capabilities, alongside cloud architecture and enterprise security.",
        },
        {
          question: "Does this replace our EHR?",
          answer: `No. MGear integrates with ${EMR_LIST} via FHIR and HL7. Your EHR remains the system of record; MGear is the operational coordination layer on top of it.`,
        },
      ]}
    >
      <h2 className="text-section font-semibold text-charcoal">
        The problem doesn't get smaller at scale
      </h2>
      <p className="mt-4 max-w-3xl text-body text-slate-600">
        The problem is not simply visibility. The problem is the absence of one
        operational platform coordinating every department responsible for protecting
        revenue while the patient is still admitted. A tool that tells you what went
        wrong after discharge is a report; MGear acts while the stay is still open and
        the outcome can still change.
      </p>

      <h2 className="mt-10 text-section font-semibold text-charcoal">
        How it shows up day to day
      </h2>
      <p className="mt-4 max-w-3xl text-body text-slate-600">
        An authorization has not come back, and the stay is still running: Payer
        Communication is notified the moment the delay is detected and Payor Grid
        verifies that payer&apos;s specific requirements. MGear then works out what is
        holding it up — for example, medical records that were never sent — and resends
        or supplies them. If there is still no answer after 24 hours, the assigned Case
        Manager is notified, and the Case Management Director if the delay continues,
        while Analytics updates in real time and Quality identifies the workflow delay.
        The team resolves it before discharge. That sequence runs the same way whether
        it&apos;s one facility or the largest hospital in the system.
      </p>
    </SolutionPageLayout>
  );
}
