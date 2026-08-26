import type { Metadata } from "next";
import { SolutionPageLayout } from "@/components/SolutionPageLayout";

export const metadata: Metadata = {
  title: "MGear for Community Hospitals — One Platform Instead of a Point Solution for Every Department",
  description:
    "Community hospitals run the same ten departments protecting revenue as any hospital, usually on disconnected software. MGear connects them in one platform.",
};

export default function Page() {
  return (
    <SolutionPageLayout
      eyebrow="Industries — Community Hospitals"
      headline="One Platform, Not One More Point Solution"
      subheadline="Utilization Management, Authorization, Denials, Payer Communication, and the rest are usually run on software that doesn't talk to each other. MGear connects them instead of adding one more disconnected tool."
      financialImpact={
        <p>
          Reviews and authorizations that move quickly protect{" "}
          <strong className="text-charcoal">increased inpatient admissions</strong> and{" "}
          <strong className="text-charcoal">increased authorization efficiency</strong>.
          Catching a delay before it becomes a denial protects{" "}
          <strong className="text-charcoal">reduced preventable denials</strong> and{" "}
          <strong className="text-charcoal">reduced revenue leakage</strong>.
        </p>
      }
      aiCapabilities="AI does not replace clinicians or staff. AI assists operations — Authorization Assistant reduces manual tracking and routing work, and Workflow Automation creates an appeal automatically when a P2P outcome is upheld. Humans remain responsible for every operational and clinical decision."
      integrationCapabilities="Admission and clinical data arrive via FHIR and HL7 from the hospital's EHR — Epic, Cerner, Meditech, Paragon, or Health Samurai Aidbox. Where a direct interface isn't available, AI-assisted ingestion and RPA bring the data in anyway."
      screenshots={[
        { src: "/screenshots/auth-01-authorizations.png", alt: "MGear authorization tracker" },
      ]}
      faqs={[
        {
          question: "Is MGear only built for large hospitals?",
          answer:
            "No size-specific claim is made either way. Each facility carries only the modules it's actually licensed for — a module a facility hasn't licensed doesn't appear for its users.",
        },
        {
          question: "We already have Epic, Cerner, or another EHR — why add this?",
          answer:
            "Your EHR is the system of record. MGear integrates with it via FHIR and HL7 and sits on top as the operational coordination layer — the thing that notices an authorization is stalling and gets the right department moving on it in real time.",
        },
        {
          question: "We outsource some of this work — why change that?",
          answer:
            "An outsourced vendor typically does the same work alone, disconnected from your other departments, and you find out what happened after the fact. MGear connects the same functions in real time, while the patient is still admitted.",
        },
      ]}
    >
      <h2 className="text-section font-semibold text-charcoal">
        The problem this replaces
      </h2>
      <p className="mt-4 max-w-3xl text-body text-slate-600">
        Ten departments are each responsible for some piece of protecting hospital
        revenue, and each usually works independently on software that doesn&apos;t
        connect to the others. The result: missed admission opportunities, authorization
        delays, preventable denials, missed payer notifications, and fragmented
        communication between the people trying to fix all of it.
      </p>

      <h2 className="mt-10 text-section font-semibold text-charcoal">
        What connection looks like day to day
      </h2>
      <p className="mt-4 max-w-3xl text-body text-slate-600">
        An authorization has not come back and the stay is still running: Payer
        Communication is notified the moment the delay is detected, Payor Grid verifies
        that payer&apos;s specific requirements, Analytics updates in real time, Quality
        identifies the workflow delay, the manager is alerted, and the team resolves it
        before discharge — instead of finding out at the next status meeting.
      </p>
    </SolutionPageLayout>
  );
}
