import type { Metadata } from "next";
import { ModulePageLayout } from "@/components/ModulePageLayout";

export const metadata: Metadata = {
  title: "Authorization Management — Real-Time Hospital Prior Authorization Software",
  description:
    "Authorization packets, requests, and status tracking that find out why an authorization is delayed or denied and act on it automatically — resending records, escalating, scheduling the peer-to-peer — while the patient is still admitted.",
};

// The workflow below is Max's description of how this module is meant to work
// (website review, 2026-10-20). It is not yet in 02-CONNECTION-MAP.md.
const workflowSteps: [string, string][] = [
  [
    "Receives the InterQual/MCG review",
    "from Utilization Management — already reconciled with the patient's actual status (inpatient, observation, or no admission criteria met).",
  ],
  [
    "Builds the authorization packet automatically:",
    "the review plus the supporting clinical documentation.",
  ],
  [
    "Sends the packet to Payer Communication",
    "to deliver to the payer, then waits for the authorization.",
  ],
  [
    "If there is no answer after 24 hours,",
    "notifies the assigned Case Manager and has Payer Communication send the packet again with a letter requiring an immediate authorization update. It also runs the patient's insurance eligibility to confirm the coverage is documented correctly.",
  ],
  [
    "If the delay continues,",
    "escalates the case to the Case Management Director.",
  ],
  [
    "If the case is denied,",
    "checks through Payor Grid whether the payer allows a peer-to-peer. If it does, P2P Management schedules it automatically with the hospital's physician advisor and the payer's medical director.",
  ],
  [
    "Depending on the P2P outcome,",
    "moves ahead to the appeal through Denial Management, or recommends downgrading the patient's status to observation through Utilization Management.",
  ],
];

export default function Page() {
  return (
    <ModulePageLayout
      number={2}
      eyebrow="Module — Authorization Management"
      headline="The Chain Starts Here"
      subheadline="An authorization delay doesn't sit in a queue. MGear works out why an authorization is delayed or denied and acts on it — sending or resending missing medical records, escalating, scheduling the peer-to-peer automatically where the payer allows it — while the stay is still open. It does most of the manual work itself and shows what no one can see today."
      receives="Completed reviews from Utilization Management, already reconciled with the patient's actual status."
      sends="Notifications to Payer Communication; requirement checks to Payor Grid; denials trigger a case in P2P Management and Denial Management."
      problem="Authorization delays, missed payer notifications, and preventable denials are three of the most direct revenue risks named across the platform — and all three start, or are caught, right here. A delayed or denied authorization that no one notices in real time is the exact failure this module exists to prevent."
      whatItDoes="Authorization requests. Pending, approved, and denied status tracking. TAR management. Escalations."
      workflow={
        <>
          <p>
            This is the module behind the site&apos;s flagship example — and it does far
            more than notify people. When a reviewed case needs authorization, this is
            how the work runs:
          </p>
          <ol className="mt-4 space-y-3">
            {workflowSteps.map(([bold, rest], i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand/10 text-xs font-semibold text-brand">
                  {i + 1}
                </span>
                <span>
                  <strong className="font-semibold text-charcoal">{bold}</strong> {rest}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-4">
            Day-to-day, the same module also tracks TARs, manages defers, runs
            reconciliations against what was actually authorized versus paid, and gives
            managers an action matrix for what needs attention right now.
          </p>
        </>
      }
      businessValue="Authorization staff work from one system that already knows the payer's rules and does the repetitive work itself — building the packet, repeating the request, escalating on time, and opening the physician-advisor pathway the moment a denial comes in — instead of tracking status across a portal, a spreadsheet, and a phone log. And for the first time, leadership can see where every authorization stands."
      financialImpact={
        <p>
          The direct outcome of this module working well is{" "}
          <strong className="text-charcoal">increased authorization efficiency</strong>{" "}
          — and because a caught delay is a denial that never happens, it also
          contributes directly to{" "}
          <strong className="text-charcoal">reduced preventable denials</strong>.
        </p>
      }
      aiCapabilities={
        <p>
          <strong className="text-charcoal">Authorization Assistant</strong>, one of
          MGear&apos;s named AI capabilities, works only on MGear&apos;s backend, helping
          with simple workflow steps such as tracking and routing authorization requests
          and status. It does not make authorization decisions, and it has no way to
          reach anything outside MGear. AI does not replace clinicians or authorization
          staff — humans remain responsible for every authorization decision.
        </p>
      }
      integrationCapabilities={
        <>
          Authorization data connects to the hospital&apos;s EHR via FHIR and HL7, and
          to payers through the platform&apos;s payer connectivity.{" "}
          <strong className="text-charcoal">CMS-0057-F</strong>, the federal
          prior-authorization interoperability rule, applies directly to this
          module&apos;s function.
        </>
      }
      futureRoadmap="No Authorization-specific roadmap item is documented beyond the enterprise-readiness items already listed above (CMS-0057-F, payer connectivity), which are stated as present-tense capabilities rather than roadmap items."
      screenshots={[
        { src: "/screenshots/auth-01-authorizations.png", alt: "MGear authorization tracker" },
        { src: "/screenshots/auth-04-action-matrix.png", alt: "MGear authorization action matrix — manager view" },
      ]}
      openItems={[
        "The workflow described here (building the packet, the 24-hour resend with a letter, the insurance-eligibility check, escalation to the Case Management Director, automatic peer-to-peer scheduling, and the appeal-or-downgrade recommendation) comes from a product review dated 2026-10-20 and is written present-tense. It has not yet been confirmed against the product build.",
      ]}
      faqs={[
        {
          question: "What happens when an authorization is delayed?",
          answer:
            "Payer Communication is notified immediately and Payor Grid checks that payer's requirements. MGear then works out what may be holding it up and acts on it — sending or resending the packet and missing records, notifying the assigned Case Manager, and escalating to the Case Management Director if the delay continues — so the team can resolve it before discharge instead of finding out at the next status meeting.",
        },
        {
          question: "What happens when an authorization is denied?",
          answer:
            "MGear checks through Payor Grid whether the payer allows a peer-to-peer and, if so, schedules it automatically with the hospital's physician advisor and the payer's medical director. Depending on the outcome, it moves ahead to the appeal through Denial Management, or recommends downgrading the patient's status to observation through Utilization Management.",
        },
        {
          question: "Does Authorization Assistant replace authorization staff?",
          answer:
            "No. It only helps with simple workflow steps like tracking and routing, and it runs on MGear's backend with no connection to anything outside MGear. Every authorization decision remains with staff.",
        },
        {
          question: "Is MGear ready for CMS-0057-F?",
          answer: "CMS-0057-F readiness is stated as a platform capability, part of the enterprise-readiness workstream.",
        },
      ]}
    />
  );
}
