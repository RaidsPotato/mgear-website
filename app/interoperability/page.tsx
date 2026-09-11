import type { Metadata } from "next";
import { ZoomableImage } from "@/components/ZoomableImage";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { ClosingCTA } from "@/components/ModulePageLayout";
import { TagGrid } from "@/components/TagGrid";
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
      <PageHero
        eyebrow="Interoperability"
        title="The Data Layer Underneath Every Chain on This Site"
        lead="None of the connection chains described elsewhere on this site work without a continuous, reliable feed of clinical, administrative, and payer data. This is how that feed reaches the platform, and how the platform reaches back out."
      />

      <Section width="wide">
        <SectionHeader
          eyebrow="EHR Connectivity"
          heading="Data flows in continuously"
          lead="Clinical and administrative data feeds every module on the platform in real time. Where a direct interface isn't available, AI-assisted ingestion and RPA bring the data in anyway, rather than leaving a gap in the feed that every downstream chain depends on."
        />
        <div className="mt-8">
          <TagGrid
            items={["FHIR", "HL7", "SMART on FHIR", "Epic", "Cerner", "Meditech", "Paragon", "Health Samurai Aidbox"]}
            tone="brand"
          />
        </div>
      </Section>

      <Section width="wide" tone="alt">
        <SectionHeader
          eyebrow="Rules Engine"
          heading="The payer's own rules police the workflow"
        />
        <p className="mt-6 max-w-3xl text-body text-slate-600">
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

      <Section width="wide">
        <SectionHeader
          eyebrow="Standards & Readiness"
          heading="Standards and readiness"
          lead="All stated platform capabilities. CMS-0057-F — the federal prior-authorization interoperability rule — applies directly to Authorization Management's function."
        />
        <div className="mt-8">
          <TagGrid items={["CMS-0057-F readiness", "FHIR interoperability", "HL7 interoperability", "SMART on FHIR", "Payer connectivity"]} />
        </div>
      </Section>

      <Section width="wide" tone="alt">
        <SectionHeader eyebrow="The Product" heading="Payor Grid, captured today" />
        <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 shadow-md">
          <ZoomableImage
            src="/screenshots/payer-01-payer-grid.png"
            alt="MGear Payor Grid — payer rules and requirements"
            width={2000}
            height={1250}
            className="h-auto w-full"
          />
        </div>
      </Section>

      <Section width="narrow" divide>
        <h2 className="mb-8 text-section font-semibold text-charcoal">Frequently asked</h2>
        <FAQAccordion items={faqs} />
      </Section>

      <ClosingCTA
        headline="See how the data reaches every module."
        secondary={{ label: "EMR Integration Module", href: "/modules/emr-integration" }}
      />
    </>
  );
}
