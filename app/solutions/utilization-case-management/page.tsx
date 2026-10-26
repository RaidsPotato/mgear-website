import type { Metadata } from "next";
import { SolutionPageLayout } from "@/components/SolutionPageLayout";
import { EMR_LIST } from "@/lib/copy";

export const metadata: Metadata = {
  title: "MGear for Utilization & Case Management — Reviews Connected to What Happens Next",
  description:
    "A completed review becomes the authorization request automatically, and MGear works out why a stalled authorization is stuck and acts on it — while the patient is still admitted.",
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
      integrationCapabilities={`Admission and clinical data arrive via FHIR and HL7 from the hospital's EHR — ${EMR_LIST} — feeding the live UM dashboards continuously.`}
      screenshots={[
        { src: "/screenshots/um-03-daily-um-log.png", alt: "MGear daily UM log" },
        { src: "/screenshots/um-04-live-ed-audit.png", alt: "MGear live UM audit view" },
      ]}
      faqs={[
        {
          question: "How does a completed review become an authorization request?",
          answer: "Automatically. A completed review routes directly into Authorization Management — no separate data entry.",
        },
        {
          question: "What happens if the authorization my review generates stalls?",
          answer:
            "Payer Communication is notified and Payor Grid checks that payer's requirements. MGear then works out what is holding it up and acts on it — resending or supplying missing records, notifying your assigned Case Manager after 24 hours without an answer, and escalating to the Case Management Director if the delay continues — so the team can resolve it before discharge instead of finding out at the next status meeting.",
        },
        {
          question: "Does AI make the medical necessity or level-of-care decision?",
          answer: "No. AI plays no part in medical necessity or level-of-care decisions — those remain with UM staff and physicians.",
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
          ["MGear works out what is holding it up", "— for example, medical records that were never sent to the payer — then resends or supplies them automatically."],
          ["If there is no answer after 24 hours,", "your assigned Case Manager is notified and the packet goes out again with a letter requiring an immediate update; if the delay continues, it escalates to the Case Management Director."],
          ["Analytics updates in real time,", "so the delay is visible, not buried until month-end."],
          ["Quality identifies it as a workflow delay,", "the pattern gets tracked, not just the instance."],
          ["The team resolves it before discharge.", ""],
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

      <h2 className="mt-10 text-section font-semibold text-charcoal">
        The mismatch no one has time to catch
      </h2>
      <p className="mt-4 max-w-3xl text-body text-slate-600">
        MGear reconciles each InterQual or MCG review with the patient&apos;s actual
        status (inpatient or observation), the physician&apos;s admission order, and the
        payer&apos;s authorization. When they disagree — for example, a patient meets
        inpatient criteria but is on an observation order — MGear catches it in real
        time. Where your hospital has automated criteria reviews it re-runs them itself;
        otherwise it asks the assigned Case Manager to double-check. If inpatient
        criteria are confirmed, it asks the attending physician or Case Manager to enter
        the inpatient order. The physician decides; MGear surfaces the discrepancy and
        routes it.
      </p>
      <p className="mt-4 max-w-3xl text-body text-slate-600">
        Analytics then tracks how quickly each step was resolved, how often criteria are
        run incorrectly, whether the payer authorized inpatient care, and whether the
        hospital was paid correctly for the admission — visibility most hospitals do not
        have today.
      </p>
    </SolutionPageLayout>
  );
}
