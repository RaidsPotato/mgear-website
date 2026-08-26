import type { Metadata } from "next";
import Image from "next/image";
import { Section, Eyebrow } from "@/components/Section";
import { Button } from "@/components/Button";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Interoperability — FHIR, HL7, and CMS-0057-F Connectivity for Hospitals",
  description:
    "Continuous FHIR and HL7 data flow from Epic, Cerner, Meditech, Paragon, and Health Samurai Aidbox, plus a payer-rules engine that enforces compliance automatically — CMS-0057-F readiness included.",
};

const faqs = [
  {
    question: "Which EHRs does MGear integrate with?",
    answer: "Epic, Cerner, Meditech, Paragon, and Health Samurai Aidbox, via FHIR and HL7.",
  },
  {
    question: "What happens when a system doesn't support a direct interface?",
    answer: "AI-assisted ingestion and RPA are used to bring the data in anyway, rather than leaving a gap in the feed.",
  },
  {
    question: "Is MGear ready for CMS-0057-F?",
    answer: "CMS-0057-F readiness is stated as a platform capability, part of the enterprise-readiness workstream, alongside FHIR, HL7, and SMART on FHIR support.",
  },
  {
    question: "Will MGear connect directly to payer portals?",
    answer: "That's a forward-looking direction for Payor Grid, not a current capability — direct API communication so requests and status checks don't require a person working through each payer's website separately.",
  },
];

export default function InteroperabilityPage() {
  return (
    <>
      <Section width="wide" className="pt-14 sm:pt-20">
        <div className="max-w-3xl">
          <Eyebrow>Interoperability</Eyebrow>
          <h1 className="text-page-title font-bold tracking-tight text-charcoal">
            The Data Layer Underneath Every Chain on This Site
          </h1>
          <p className="mt-6 text-body text-slate-600">
            None of the connection chains described elsewhere on this site work without
            a continuous, reliable feed of clinical, administrative, and payer data.
            This is how that feed reaches the platform, and how the platform reaches
            back out.
          </p>
        </div>
      </Section>

      <Section className="border-t border-slate-100" width="wide">
        <h2 className="text-section font-semibold text-charcoal">EHR connectivity</h2>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          Clinical and administrative data flows in continuously via{" "}
          <strong className="text-charcoal">FHIR</strong> and{" "}
          <strong className="text-charcoal">HL7</strong>, with{" "}
          <strong className="text-charcoal">SMART on FHIR</strong> support, from{" "}
          <strong className="text-charcoal">Epic, Cerner, Meditech, Paragon,</strong> and{" "}
          <strong className="text-charcoal">Health Samurai Aidbox</strong> — feeding
          every module on the platform in real time. Where a direct interface isn&apos;t
          available, AI-assisted ingestion and RPA bring the data in anyway, rather than
          leaving a gap in the feed that every downstream chain depends on.
        </p>
      </Section>

      <Section className="border-t border-slate-100" width="wide">
        <h2 className="text-section font-semibold text-charcoal">
          The payer's own rules police the workflow
        </h2>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          Payor Grid holds each payer&apos;s rules — notification windows, documentation
          requirements, submission endpoints, contacts. A rules engine watches the
          actual work against those rules continuously, and the moment work departs
          from what a payer requires, a deviation is recorded automatically. The Payer
          Compliance analytics tab reads that deviation stream directly, so payer
          compliance becomes a measured number instead of an opinion offered in a
          meeting.
        </p>
        <div className="mt-4 rounded-lg border border-dashed border-brand/40 bg-brand/5 px-4 py-3 text-sm text-slate-600">
          <strong className="text-charcoal">Future direction:</strong> Payor Grid is
          positioned to communicate directly with payer portals via API — submitting and
          checking status without a person working through each payer&apos;s own
          website. This is forward-looking, not a current capability.
        </div>
      </Section>

      <Section className="border-t border-slate-100" width="wide">
        <h2 className="text-section font-semibold text-charcoal">Standards and readiness</h2>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          <strong className="text-charcoal">CMS-0057-F</strong> readiness,{" "}
          <strong className="text-charcoal">FHIR</strong> interoperability,{" "}
          <strong className="text-charcoal">HL7</strong> interoperability,{" "}
          <strong className="text-charcoal">SMART on FHIR</strong>, and payer
          connectivity are all stated platform capabilities. CMS-0057-F — the federal
          prior-authorization interoperability rule — applies directly to Authorization
          Management&apos;s function.
        </p>
      </Section>

      <Section className="border-t border-slate-100" width="wide">
        <div className="overflow-hidden rounded-xl border border-slate-200 shadow-md">
          <Image
            src="/screenshots/payer-01-payer-grid.png"
            alt="MGear Payor Grid — payer rules and requirements"
            width={2000}
            height={1250}
            className="h-auto w-full"
          />
        </div>
      </Section>

      <Section className="border-t border-slate-100" width="narrow">
        <h2 className="text-section font-semibold text-charcoal mb-6">FAQs</h2>
        <FAQAccordion items={faqs} />
      </Section>

      <Section width="wide" className="border-t border-slate-100">
        <div className="rounded-2xl bg-charcoal px-8 py-14 text-center sm:px-16">
          <h2 className="text-section font-semibold text-white">
            See how the data reaches every module.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/request-demo">Request Demo</Button>
            <Button
              href="/modules/emr-integration"
              variant="secondary"
              className="!bg-transparent !text-white !border-slate-500 hover:!border-white"
            >
              EMR Integration Module
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
