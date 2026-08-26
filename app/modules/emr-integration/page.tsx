import type { Metadata } from "next";
import { ModulePageLayout } from "@/components/ModulePageLayout";

export const metadata: Metadata = {
  title: "EMR Integration — FHIR and HL7 Connectivity for Hospitals",
  description:
    "Continuous FHIR and HL7 data flow from Epic, Cerner, Meditech, Paragon, and Health Samurai Aidbox, feeding every module on the platform in real time.",
};

export default function Page() {
  return (
    <ModulePageLayout
      eyebrow="Module — EMR Integration"
      headline="The Layer Underneath Every Other Module"
      subheadline="Every module on this platform runs on data that has to arrive continuously from your EHR. This is how it does."
      receives="clinical and administrative data via FHIR and HL7 from the hospital's EHR."
      sends="that data to every other module on the platform, continuously — not a one-time sync."
      problem="None of the connection chains described elsewhere on this site work without a continuous, reliable feed of clinical and administrative data. This module exists so that feed is real-time rather than batch, and so it reaches every module that needs it."
      whatItDoes="FHIR. HL7. Connections to Epic, Cerner, Meditech, Paragon, and Health Samurai Aidbox. AI-assisted ingestion. RPA where appropriate."
      workflow="Clinical and administrative data flows in continuously via FHIR and HL7, feeding every module on the platform. Where a direct interface isn't available, AI-assisted ingestion and RPA bring the data in anyway, rather than leaving a gap in the feed."
      businessValue="No module on the platform is working from stale or manually re-entered data. The real-time chain described on Platform Overview only holds together because this layer keeps every module current."
      financialImpact="This module doesn't own a specific financial outcome the way Denial Management or Contract Management do — its contribution is enabling every other module's outcome by keeping their data current."
      aiCapabilities={
        <p>
          <strong className="text-charcoal">AI-assisted ingestion</strong> brings data
          in from systems without a clean direct interface.{" "}
          <strong className="text-charcoal">RPA</strong> is used where appropriate for
          the same purpose. AI does not replace IT staff or clinical judgment.
        </p>
      }
      integrationCapabilities={
        <p>
          FHIR interoperability. HL7 interoperability. SMART on FHIR. Connections to
          Epic, Cerner, Meditech, Paragon, Health Samurai Aidbox.{" "}
          <strong className="text-charcoal">CMS-0057-F</strong> readiness and payer
          connectivity are also stated platform capabilities.
        </p>
      }
      futureRoadmap="Integration surfaces and data-source configuration exist today; live connectors to specific EHR systems are being built by a parallel workstream — the platform's stated capabilities are expected to be ready by market."
      screenshots={[]}
      faqs={[
        {
          question: "Which EHRs does MGear integrate with?",
          answer: "Epic, Cerner, Meditech, Paragon, and Health Samurai Aidbox.",
        },
        {
          question: "What happens when a system doesn't support a direct interface?",
          answer: "AI-assisted ingestion and RPA are used to bring the data in anyway.",
        },
        {
          question: "Is MGear ready for CMS-0057-F?",
          answer: "CMS-0057-F readiness is stated as a platform capability, part of the enterprise-readiness workstream.",
        },
      ]}
    />
  );
}
