import type { Metadata } from "next";
import { ModulePageLayout } from "@/components/ModulePageLayout";

export const metadata: Metadata = {
  title: "Authorization Management — Real-Time Hospital Prior Authorization Software",
  description:
    "Authorization requests, TAR management, and status tracking that notify the right department automatically when a delay puts revenue at risk.",
};

export default function Page() {
  return (
    <ModulePageLayout
      eyebrow="Module — Authorization Management"
      headline="The Chain Starts Here"
      subheadline="An authorization delay doesn't sit in a queue. It notifies the departments that can still fix it — automatically, while the stay is still open."
      receives="completed reviews from Utilization Management."
      sends="notifications to Payer Communication; requirement checks to Payor Grid; denials trigger a case in P2P Management."
      problem="Authorization delays, missed payer notifications, and preventable denials are three of the most direct revenue risks named across the platform — and all three start, or are caught, right here. A delayed authorization that no one notices until the payer meeting is the exact failure this module exists to prevent."
      whatItDoes="Authorization requests. Pending, approved, and denied status tracking. TAR management. Escalations."
      workflow={
        <>
          <p>
            This is the module behind the site&apos;s flagship example. When an
            authorization stalls: Payer Communication is notified immediately. Payor
            Grid checks that payer&apos;s specific requirements. The delay shows up on
            Analytics in real time. Quality flags it as a workflow issue. A manager is
            alerted. The team resolves it before discharge.
          </p>
          <p className="mt-4">
            That sequence isn&apos;t a diagram invented for the website — it&apos;s what
            this module actually does when a request sits too long. Day-to-day, the same
            module tracks TARs, manages defers, runs reconciliations against what was
            actually authorized versus paid, and gives managers an action matrix for
            what needs attention right now.
          </p>
        </>
      }
      businessValue="Authorization staff work from one system that already knows the payer's rules, has already notified the right people about a delay, and already has the physician-advisor pathway open the moment a denial comes in — instead of tracking status across a portal, a spreadsheet, and a phone log."
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
          MGear&apos;s named AI capabilities, reduces manual work in tracking and
          routing authorization requests and status. As always: AI does not replace
          clinicians or authorization staff. AI assists operations. Humans remain
          responsible for every authorization decision.
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
      faqs={[
        {
          question: "What happens when an authorization is delayed?",
          answer: "Payer Communication is notified immediately, Payor Grid checks that payer's requirements, a manager is alerted, and the team can resolve it before discharge — instead of finding out at the next status meeting.",
        },
        {
          question: "Does Authorization Assistant replace authorization staff?",
          answer: "No. It assists with tracking and routing. Every authorization decision remains with staff.",
        },
        {
          question: "Is MGear ready for CMS-0057-F?",
          answer: "CMS-0057-F readiness is stated as a platform capability, part of the enterprise-readiness workstream.",
        },
      ]}
    />
  );
}
