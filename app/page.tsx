import type { Metadata } from "next";
import Link from "next/link";
import { ZoomableImage } from "@/components/ZoomableImage";
import { Section, Eyebrow } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { ClosingCTA } from "@/components/ModulePageLayout";
import { ChainDiagram } from "@/components/ChainDiagram";
import { ModuleStrip } from "@/components/ModuleStrip";
import { TagGrid } from "@/components/TagGrid";
import { Button } from "@/components/Button";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Reveal } from "@/components/Reveal";
import { StatBand } from "@/components/StatBand";
import { BeforeAfter } from "@/components/BeforeAfter";

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

const providenceStats = [
  { value: "$4.87M", label: "Net annual impact" },
  { value: "35% → 0%", label: "Behavioral health denial rate" },
  { value: "11% → 16%", label: "Admission rate" },
  { value: "100%", label: "Authorization approval rate" },
];

const chainShape = [
  "Something changes",
  "The right modules learn about it automatically",
  "A human is told",
  "It is fixed before discharge",
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
      {/* Hero — full-bleed dark, chain diagram floated as a light panel on top of it */}
      <section className="bg-charcoal">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-16 sm:pt-24 sm:pb-24">
          <div className="max-w-3xl">
            <p className="eyebrow text-brand">Operational AI Infrastructure for Hospitals</p>
            <h1 className="mt-4 text-hero font-bold text-white">
              The Real-Time Mid-Revenue Cycle Operating Platform
            </h1>
            <p className="mt-6 max-w-2xl text-lead text-slate-300">
              Ten departments protect hospital revenue. Their software has never talked
              to each other — until now.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/request-demo">Request Demo</Button>
              <Button href="/platform" variant="inverse">
                See How It Works
              </Button>
            </div>
          </div>

          <div className="mt-14 rounded-2xl bg-white p-3 shadow-2xl sm:p-5">
            <ChainDiagram steps={chain1Steps} />
          </div>
          <div className="mt-6">
            <StatBand
              stats={providenceStats}
              caption="Results from the Providence behavioral health program"
              captionHref="/results"
              tone="dark"
              size="lg"
            />
          </div>
        </div>
      </section>

      {/* Problem — siloed vs. connected */}
      <Section width="wide">
        <SectionHeader
          eyebrow="The Problem"
          heading="The problem isn't visibility"
          lead="Ten departments, each with a piece of the job, each working from software that doesn't talk to the others."
        />
        <div className="mt-10">
          <BeforeAfter
            before={{
              eyebrow: "Hospitals today",
              heading: "Ten disconnected systems",
              points: [
                "Utilization Management, Case Management, Physician Advisors, Patient Access, Admitting, Business Office, Revenue Cycle, Authorization, Denial Management, and Payer Communication each work independently.",
                "The software under them doesn't share what it knows.",
                "Problems surface after discharge, in a report, when the outcome can no longer change.",
                "No single owner, limited visibility, reactive instead of proactive.",
              ],
            }}
            after={{
              eyebrow: "With MGear",
              heading: "One operating platform",
              points: [
                "Every module continuously communicates with every other module.",
                "A change in one department automatically reaches the departments it affects.",
                "A human is told while the patient is still admitted.",
                "The problem is resolved before discharge, not documented after it.",
              ],
            }}
          />
        </div>

        <Reveal>
          <p className="mt-10 border-l-2 border-brand bg-[#f2f9f4] px-6 py-5 text-lead text-charcoal">
            <strong>The problem is not simply visibility.</strong> It is the absence of
            one operational platform coordinating every department responsible for
            protecting revenue <em>while the patient is still admitted.</em> A platform
            that reports what went wrong after discharge is a dashboard. MGear acts
            while the outcome can still change.
          </p>
        </Reveal>
      </Section>

      {/* The shape of every chain — full-bleed dark band */}
      <Section width="wide" tone="dark">
        <SectionHeader
          tone="dark"
          eyebrow="How It Works"
          heading="Every chain in the platform has the same shape"
        />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {chainShape.map((step, i) => (
            <Reveal key={step} delay={i * 0.08}>
              <li className="flex h-full flex-col rounded-xl border border-white/15 bg-white/5 p-5">
                <span className="text-caption font-semibold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 text-body leading-snug text-slate-100">
                  {step}
                </span>
              </li>
            </Reveal>
          ))}
        </ol>
        <p className="mt-6 text-caption text-slate-400">
          The last step is what makes it MGear and not a report.
        </p>
      </Section>

      {/* Module strip */}
      <Section width="wide">
        <SectionHeader
          eyebrow="The Platform"
          heading="One platform. Constant communication."
          lead="Not a suite of tools that happen to share a login — a single operating platform where something changing in one department automatically reaches the departments it affects."
        />
        <Reveal className="mt-10">
          <ModuleStrip />
        </Reveal>
      </Section>

      {/* Financial impact — the number is the visual, not a footnote */}
      <Section width="wide" tone="brand">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-center">
          <Reveal>
            <div>
              <Eyebrow>Financial Impact</Eyebrow>
              <p className="mt-3 text-hero font-bold leading-[1.05] text-charcoal">
                <span className="text-brand">$4.87M</span> net
              </p>
              <p className="mt-2 text-lead text-slate-600">
                on a program that cost $395K.
              </p>
              <p className="mt-5 text-body text-slate-600">
                The Providence behavioral health program: behavioral health denial rate
                from 35% to 0%, admission rate from 11% to 16%, authorization approval
                rate at 100%.
              </p>
              <div className="mt-6">
                <Button href="/results" variant="secondary">
                  See the Full Case
                </Button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-white shadow-xl">
              <ZoomableImage
                src="/screenshots/analytics-05-financial.png"
                alt="MGear financial analytics — denied dollars, underpayment variance, and net collection rate by payer"
                width={2000}
                height={1250}
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* AI */}
      <Section width="wide">
        <SectionHeader
          eyebrow="Artificial Intelligence"
          heading="AI assists operations. It doesn't replace judgment."
          lead="Humans remain responsible for every clinical and operational decision. Governed — analytics answer inside the hospital's own permission model, not an open chatbot over the chart."
        />
        <Reveal className="mt-8">
          <TagGrid items={aiCapabilities} tone="brand" />
        </Reveal>
        <div className="mt-6">
          <Link href="/ai" className="font-medium text-brand hover:text-brand-dark">
            Full detail on AI &rarr;
          </Link>
        </div>
      </Section>

      {/* Consequences reference */}
      <Section width="wide" tone="alt">
        <SectionHeader
          eyebrow="What Disconnection Costs"
          heading="The revenue that leaks when departments can't coordinate"
        />
        <Reveal className="mt-8">
          <TagGrid items={consequences} />
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section width="narrow">
        <h2 className="mb-8 text-section font-semibold text-charcoal">
          Frequently asked
        </h2>
        <FAQAccordion items={faqs} />
      </Section>

      <ClosingCTA
        headline="See the connection, not a slide deck."
        lead="A live walkthrough of how an authorization delay gets caught and resolved automatically — while the patient is still admitted."
        secondary={{ label: "Download Case Study", href: "/results" }}
      />
    </>
  );
}
