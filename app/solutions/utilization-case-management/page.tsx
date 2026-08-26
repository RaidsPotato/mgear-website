import type { Metadata } from "next";
import { SolutionPageLayout } from "@/components/SolutionPageLayout";

export const metadata: Metadata = {
  title: "MGear for Utilization & Case Management — Reviews Connected to What Happens Next",
  description:
    "A completed review becomes the authorization request automatically, and a stalled authorization notifies the departments that can still fix it — while the patient is still admitted.",
};

export default function Page() {
  return (
    <SolutionPageLayout
      eyebrow="Solutions — Utilization & Case Management"
      headline="The Review That Doesn't Wait for a Status Meeting"
      subheadline="Utilization Management doesn't just decide medical necessity — that decision sets off everything downstream that protects the revenue tied to it, in real time."
      financialImpact={
        <p>
          Reviews decided correctly and on time protect{" "}
          <strong className="text-charcoal">increased inpatient admissions</strong>,{" "}
          <strong className="text-charcoal">reduced observation overutilization</strong>,
          and <strong className="text-charcoal">reduced avoidable days</strong>. When a
          review moves quickly into authorization, it also contributes to{" "}
          <strong className="text-charcoal">increased authorization efficiency</strong>{" "}
          and <strong className="text-charcoal">one fewer preventable denial</strong>.
        </p>
      }
      aiCapabilities="Utilization Management itself doesn't carry a named AI feature of its own. The AI capability that touches it is downstream: AI Quality Auditor, part of Quality Management, audits review quality and workflow compliance using the data UM sends it. AI does not replace clinicians. AI assists operations. Humans remain responsible for every medical necessity and level-of-care decision."
      integrationCapabilities="Admission and clinical data arrive via FHIR and HL7 from the hospital's EHR — Epic, Cerner, Meditech, Paragon, or Health Samurai Aidbox — feeding the ED and inpatient dashboards continuously."
      screenshots={[
        { src: "/screenshots/um-03-daily-um-log.png", alt: "MGear daily UM log" },
        { src: "/screenshots/um-04-live-ed-audit.png", alt: "MGear live ED audit view" },
      ]}
      faqs={[
        {
          question: "How does a completed review become an authorization request?",
          answer: "Automatically. A completed review routes directly into Authorization Management — no separate data entry.",
        },
        {
          question: "What happens if the authorization my review generates stalls?",
          answer:
            "Payer Communication is notified, Payor Grid checks that payer's requirements, Analytics shows the delay in real time, Quality flags it as a workflow issue, and a manager is alerted — so the team can resolve it before discharge instead of finding out at the next status meeting.",
        },
        {
          question: "Does AI make the medical necessity or level-of-care decision?",
          answer: "No. AI assists with review-quality auditing downstream in Quality Management. The medical necessity and level-of-care decisions remain with UM staff and physicians.",
        },
      ]}
    >
      <h2 className="text-section font-semibold text-charcoal">
        What your team is responsible for
      </h2>
      <p className="mt-4 max-w-3xl text-body text-slate-600">
        Missed admission opportunities and observation overutilization both start here —
        a review that happens too late, or a level-of-care decision made without full
        information, becomes lost revenue before the patient is ever discharged. Your
        job is to catch that in real time, not reconstruct it afterward.
      </p>

      <h2 className="mt-10 text-section font-semibold text-charcoal">
        The chain your reviews start
      </h2>
      <p className="mt-4 max-w-3xl text-body text-slate-600">
        A review that flags a level-of-care question routes straight into a physician
        escalation without anyone re-entering the case. A completed review becomes the
        authorization request the same way — and if that authorization stalls, this is
        what happens automatically on your behalf:
      </p>
      <ol className="mt-6 space-y-4">
        {[
          ["Your completed review becomes the authorization request.", "No second data-entry step."],
          ["Payer Communication is notified", "the moment a delay is detected."],
          ["Payor Grid verifies", "that specific payer's requirements automatically."],
          ["Analytics updates in real time,", "so the delay is visible, not buried until month-end."],
          ["Quality identifies it as a workflow delay,", "the pattern gets tracked, not just the instance."],
          ["The manager is alerted, and the team resolves it before discharge.", ""],
        ].map(([bold, rest], i) => (
          <li key={i} className="flex gap-4">
            <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand">
              {i + 1}
            </span>
            <p className="text-body text-slate-700">
              <strong className="font-semibold text-charcoal">{bold}</strong> {rest}
            </p>
          </li>
        ))}
      </ol>
    </SolutionPageLayout>
  );
}
