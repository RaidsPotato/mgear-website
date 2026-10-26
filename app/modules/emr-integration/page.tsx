import type { Metadata } from "next";
import { ModulePageLayout } from "@/components/ModulePageLayout";
import { EMR_LIST } from "@/lib/copy";

export const metadata: Metadata = {
  title: "EMR Integration — FHIR and HL7 Connectivity for Hospitals",
  description:
    "Continuous FHIR and HL7 data flow from Epic, Oracle Health (Cerner), MEDITECH, athenahealth and other major EHRs, feeding every module on the platform in real time — with authorization numbers and InterQual/MCG review copies sent back to the EHR.",
};

export default function Page() {
  return (
    <ModulePageLayout
      number={11}
      eyebrow="Module — EMR Integration"
      headline="The Layer Underneath Every Other Module"
      subheadline="Every module on this platform runs on data that has to arrive continuously from your EHR. This is how it does."
      receives="Clinical and administrative data via FHIR and HL7 from the hospital's EHR."
      sends="That data to every other module on the platform, continuously — not a one-time sync. Some data also goes back to the EHR, such as authorization numbers and copies of InterQual/MCG reviews."
      problem="None of the connection chains described elsewhere on this site work without a continuous, reliable feed of clinical and administrative data. This module exists so that feed is real-time rather than batch, and so it reaches every module that needs it."
      whatItDoes="FHIR. HL7. Connections to Epic, Oracle Health (Cerner), MEDITECH, TruBridge (CPSI), Altera Digital Health (Paragon, Sunrise), MEDHOST, Netsmart, Azalea Health, and athenahealth (athenaOne). Data sent back to the EHR. RPA where appropriate."
      workflow="Clinical and administrative data flows in continuously via FHIR and HL7, feeding every module on the platform. Where a direct interface isn't available, RPA brings the data in anyway, rather than leaving a gap in the feed."
      businessValue="No module on the platform is working from stale or manually re-entered data. The real-time chain described on Platform Overview only holds together because this layer keeps every module current."
      financialImpact="This module doesn't own a specific financial outcome the way Denial Management or Contract Management do — its contribution is enabling every other module's outcome by keeping their data current."
      integrationCapabilities={
        <p>
          FHIR interoperability. HL7 interoperability. SMART on FHIR. Connections to{" "}
          {EMR_LIST}.{" "}
          <strong className="text-charcoal">CMS-0057-F</strong> readiness and payer
          connectivity are also stated platform capabilities.
        </p>
      }
      futureRoadmap="Integration surfaces and data-source configuration exist today; live connectors to specific EHR systems are being built by a parallel workstream — the platform's stated capabilities are expected to be ready by market."
      screenshots={[]}
      faqs={[
        {
          question: "Which EHRs does MGear integrate with?",
          answer: `${EMR_LIST}.`,
        },
        {
          question: "What happens when a system doesn't support a direct interface?",
          answer: "RPA is used where needed to bring the data in anyway.",
        },
        {
          question: "Is MGear ready for CMS-0057-F?",
          answer: "CMS-0057-F readiness is stated as a platform capability, part of the enterprise-readiness workstream.",
        },
      ]}
    />
  );
}
