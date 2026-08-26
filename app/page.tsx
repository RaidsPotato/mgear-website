import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Section, Eyebrow } from "@/components/Section";
import { ChainDiagram } from "@/components/ChainDiagram";
import { ModuleStrip } from "@/components/ModuleStrip";
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
            Ten departments are each responsible for protecting hospital revenue. Their
            software has never talked to each other — until now. MGear connects every one
            of them, in real time, while the patient is still admitted.
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
        <p className="mt-4 text-body text-slate-600">
          Utilization Management. Case Management. Physician Advisors. Patient Access.
          Admitting. Business Office. Revenue Cycle. Authorization Teams. Denial
          Management. Payer Communication. Ten departments, each with a piece of the
          job, each working from software that doesn&apos;t talk to the others.
        </p>
        <p className="mt-4 text-body text-slate-600">
          The result: missed admission opportunities, preventable denials, authorization
          delays, avoidable days, underpayments, unpaid claims, and revenue that leaks
          out through the gaps between departments that never see each other&apos;s work.
        </p>
        <p className="mt-4 rounded-lg border border-brand/20 bg-[#f2f9f4] px-5 py-4 text-body text-charcoal">
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
        <p className="mt-4 text-body text-slate-600">
          Every module continuously communicates with every other module. Not a suite
          of tools that happen to share a login — a single operating platform where
          something changing in one department automatically reaches the departments it
          affects, before a person has to notice and forward it.
        </p>
        <div className="mt-8">
          <ModuleStrip />
        </div>
        <p className="mt-8 text-body text-slate-600">
          An authorization stalls. Payer Communication hears about it the moment it
          happens — not at the next status meeting. Payor Grid checks that payer&apos;s
          specific rules automatically. Analytics reflects it immediately. Quality flags
          the delay as a workflow issue, not just a missed authorization. A manager is
          alerted. The team fixes it before the patient is discharged, not after the
          claim is denied.
        </p>
      </Section>

      {/* Financial impact */}
      <Section className="border-t border-slate-100" width="wide">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Financial Impact</Eyebrow>
            <p className="text-section font-semibold text-charcoal">
              A behavioral health program that cost{" "}
              <span className="text-brand">$395K</span> a year returned{" "}
              <span className="text-brand">$4.87M</span> net.
            </p>
            <p className="mt-4 text-body text-slate-600">
              Admission rate 11% → 16%. Behavioral health denial rate 35% → 0%.
              Authorization approval rate 100%. Every module on this platform connects
              to a financial result — increased admissions, reduced avoidable days,
              reduced preventable denials, recovered underpayments, improved payer
              compliance.
            </p>
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
        <p className="mt-4 text-body text-slate-600">
          AI does not replace clinicians or operational staff. AI assists operations.
          Humans remain responsible for every clinical and operational decision.
        </p>
        <p className="mt-4 text-body text-slate-600">
          Named capabilities: AI Quality Auditor, Authorization Assistant, Payer
          Communication Assistant, Contract Intelligence, Conversational Analytics,
          Operational Intelligence, Workflow Automation. Governed — analytics answer
          inside the hospital&apos;s own permission model and data boundaries, not an
          open chatbot over the chart.
        </p>
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
