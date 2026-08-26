import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Section, Eyebrow } from "@/components/Section";
import { ChainDiagram } from "@/components/ChainDiagram";
import { ModuleStrip } from "@/components/ModuleStrip";
import { TagGrid } from "@/components/TagGrid";
import { StatTile } from "@/components/StatTile";
import { Button } from "@/components/Button";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "MGear — Real-Time Hospital Revenue Cycle Operating Platform",
  description:
    "MGear connects utilization management, authorization, denials, and payer communication into one real-time platform — coordinated while the patient is still admitted.",
};

const chain1Steps = [
  "Authorization delayed",
  "Payer Communication is notified",
  "Payor Grid verifies that payer's requirements",
  "Analytics updates the dashboards",
  "Quality identifies the workflow delay",
  "the Manager is alerted",
  "the team resolves it before discharge",
];

const departments = [
  "Utilization Management",
  "Case Management",
  "Physician Advisors",
  "Patient Access",
  "Admitting",
  "Business Office",
  "Revenue Cycle",
  "Authorization Teams",
  "Denial Management",
  "Payer Communication",
];

const consequences = [
  "Missed admission opportunities",
  "Preventable denials",
  "Authorization delays",
  "Avoidable days",
  "Underpayments",
  "Unpaid claims",
  "Revenue leakage",
];

const aiCapabilities = [
  "AI Quality Auditor",
  "Authorization Assistant",
  "Payer Communication Assistant",
  "Contract Intelligence",
  "Conversational Analytics",
  "Operational Intelligence",
  "Workflow Automation",
];

const faqs = [
  {
    question: "What is MGear?",
    answer:
      "The Real-Time Mid-Revenue Cycle Operating Platform — operational AI infrastructure that coordinates every hospital department responsible for protecting revenue while the patient is still admitted.",
  },
  {
    question: "Is MGear utilization management software?",
    answer:
      "No. MGear is not utilization management software, authorization software, denial software, analytics software, or case management software alone — it's the platform that connects all of those functions.",
  },
  {
    question: "Does AI replace clinical or operational staff?",
    answer:
      "No. AI assists operations. Humans remain responsible for every clinical and operational decision.",
  },
  {
    question: "Which EHRs does MGear integrate with?",
    answer:
      "FHIR and HL7 interoperability, with connectivity to Epic, Cerner, Meditech, Paragon, and Health Samurai Aidbox.",
  },
  {
    question: "Is MGear only for large hospital systems?",
    answer:
      "No — MGear serves academic medical centers, community hospitals, critical access hospitals, behavioral health programs, and multi-hospital systems.",
  },
  {
    question: "How is MGear priced?",
    answer: "MGear does not publish list pricing. See Pricing for how the model is structured.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section width="wide" className="pt-14 sm:pt-20">
        <div className="max-w-3xl">
          <Eyebrow>Operational AI Infrastructure for Hospitals</Eyebrow>
          <h1 className="text-hero font-bold tracking-tight text-charcoal">
            The Real-Time Mid-Revenue Cycle Operating Platform
          </h1>
          <p className="mt-6 text-body text-slate-600">
            Ten departments protect hospital revenue. Their software has never talked to
            each other — until now.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/request-demo">Request Demo</Button>
            <Button href="/platform" variant="secondary">
              See How It Works
            </Button>
          </div>
        </div>

        <div className="mt-12">
          <ChainDiagram steps={chain1Steps} />
        </div>
      </Section>

      {/* Problem */}
      <Section className="border-t border-slate-100">
        <h2 className="text-section font-semibold text-charcoal">
          The problem isn&apos;t visibility
        </h2>
        <p className="mt-4 max-w-2xl text-body text-slate-600">
          Ten departments, each with a piece of the job, each working from software
          that doesn&apos;t talk to the others.
        </p>
        <div className="mt-5">
          <TagGrid items={departments} />
        </div>

        <p className="mt-8 max-w-2xl text-body text-slate-600">The result:</p>
        <div className="mt-3">
          <TagGrid items={consequences} />
        </div>

        <p className="mt-6 rounded-lg border border-brand/20 bg-[#f2f9f4] px-5 py-4 text-body text-charcoal">
          <strong>The problem is not simply visibility.</strong> The problem is the
          absence of one operational platform coordinating every department
          responsible for protecting revenue <em>while the patient is still admitted.</em>{" "}
          A platform that reports what went wrong after discharge is a dashboard. MGear
          acts while the outcome can still change.
        </p>
      </Section>

      {/* Module strip */}
      <Section className="border-t border-slate-100">
        <h2 className="text-section font-semibold text-charcoal">
          One platform. Constant communication.
        </h2>
        <p className="mt-4 max-w-2xl text-body text-slate-600">
          Not a suite of tools that happen to share a login — a single operating
          platform where something changing in one department automatically reaches
          the departments it affects.
        </p>
        <div className="mt-8">
          <ModuleStrip />
        </div>
      </Section>

      {/* Financial impact */}
      <Section className="border-t border-slate-100" width="wide">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Financial Impact</Eyebrow>
            <p className="text-section font-semibold text-charcoal">
              A program that cost <span className="text-brand">$395K</span> returned{" "}
              <span className="text-brand">$4.87M</span> net.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <StatTile label="Admission rate" value="11% → 16%" />
              <StatTile label="Denial rate" value="35% → 0%" />
            </div>
            <div className="mt-6">
              <Button href="/results" variant="secondary">
                See the Full Case
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-slate-200 shadow-md">
            <Image
              src="/screenshots/analytics-05-financial.png"
              alt="MGear financial analytics — denied dollars, underpayment variance, and net collection rate by payer"
              width={2000}
              height={1250}
              className="h-auto w-full"
            />
          </div>
        </div>
      </Section>

      {/* AI */}
      <Section className="border-t border-slate-100">
        <h2 className="text-section font-semibold text-charcoal">
          AI assists operations. It doesn&apos;t replace judgment.
        </h2>
        <p className="mt-4 max-w-2xl text-body text-slate-600">
          Humans remain responsible for every clinical and operational decision.
          Governed — analytics answer inside the hospital&apos;s own permission model,
          not an open chatbot over the chart.
        </p>
        <div className="mt-5">
          <TagGrid items={aiCapabilities} tone="brand" />
        </div>
        <div className="mt-6">
          <Link href="/ai" className="font-medium text-brand hover:text-brand-dark">
            Full detail on AI →
          </Link>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="border-t border-slate-100" width="narrow">
        <h2 className="text-section font-semibold text-charcoal mb-6">FAQs</h2>
        <FAQAccordion items={faqs} />
      </Section>

      {/* Closing CTA */}
      <Section width="wide" className="border-t border-slate-100">
        <div className="rounded-2xl bg-charcoal px-8 py-14 text-center sm:px-16">
          <h2 className="text-section font-semibold text-white">
            See the connection, not a slide deck.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-body text-slate-300">
            A live walkthrough of how an authorization delay gets caught and resolved
            automatically — while the patient is still admitted.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/request-demo">Request Demo</Button>
            <Button href="/results" variant="secondary" className="!bg-transparent !text-white !border-slate-500 hover:!border-white">
              Download Case Study
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
