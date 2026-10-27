import { Fragment } from "react";
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
import { AnimatedStat } from "@/components/AnimatedStat";
import { EMR_LIST, AI_BACKEND_STATEMENT } from "@/lib/copy";

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
  "The Manager is alerted",
  "The team resolves it before discharge",
];

const providenceStats = [
  { value: "$4.87M", label: "Net annual impact — ED program" },
  { value: "35% → 1%", label: "Denial rate — behavioral health program" },
  { value: "11% → 16%", label: "Admission rate — ED program" },
  { value: "99%", label: "Authorization approval — behavioral health" },
];

// Wording expanded per Max's website review (2026-10-14): the trigger isn't
// always "something changes" (it can be a mismatch between criteria, patient
// status and payer authorization), and "a human is told" is only part of it —
// most steps are automated. 02-CONNECTION-MAP.md's original four-beat shape is
// unchanged; only the labels are fuller.
const chainShape = [
  {
    title: "A trigger fires",
    detail:
      "A delay, a denial, or a mismatch between InterQual/MCG criteria, patient status and payer authorization.",
  },
  {
    title: "The right modules learn automatically",
    detail: "Every connected department sees it the moment it happens — no one has to pass it along or chase it.",
  },
  {
    title: "MGear acts, or tells the right person",
    detail:
      "It resolves what it can on its own and tells the right person exactly what to do about the rest.",
  },
  {
    title: "It is fixed before discharge",
    detail: "While the patient is still admitted, when the outcome can still change — not documented after discharge.",
  },
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
      "The Real-Time Mid-Revenue Cycle Operating Platform — operational infrastructure that coordinates every hospital department responsible for protecting revenue while the patient is still admitted.",
  },
  {
    question: "Is MGear utilization management software?",
    answer:
      "No. MGear is not utilization management software, authorization software, denial software, analytics software, or case management software alone — it's the platform that connects all of those functions.",
  },
  {
    question: "Does AI replace clinical or operational staff?",
    answer:
      `No. AI assists operations. Humans remain responsible for every clinical and operational decision. ${AI_BACKEND_STATEMENT}`,
  },
  {
    question: "Which EHRs does MGear integrate with?",
    answer:
      `FHIR and HL7 interoperability, with connectivity to ${EMR_LIST}.`,
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
      {/* Hero — full-bleed dark, animated brand-green glow, chain diagram floated as a light panel on top */}
      <section className="hero-glow bg-charcoal">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-16 sm:pt-40 sm:pb-24">
          <div className="max-w-3xl">
            <p className="eyebrow text-brand">Operational Infrastructure for Hospitals</p>
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
              caption="Results from two Providence programs: ED utilization management and behavioral health"
              captionHref="/results"
              tone="dark"
              size="lg"
            />
          </div>
        </div>
      </section>

      {/* Problem — siloed vs. connected. The card overlaps up into the hero
          above via negative margin, so this reads as one continuous piece
          flowing out of the hero instead of a plain section dropped below
          it — the fix for "the middle white part looks slapped there." */}
      <Section width="wide" tone="alt">
        <div className="relative z-10 -mt-28 rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-900/10 sm:-mt-36 sm:p-14">
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
                  "MGear acts automatically where it can, and tells the right person while the patient is still admitted.",
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
        </div>
      </Section>

      {/* The shape of every chain — full-bleed dark band */}
      <Section width="wide" tone="dark">
        <SectionHeader
          tone="dark"
          eyebrow="How It Works"
          heading="Every chain in the platform has the same shape"
        />
        <div role="list" className="mt-10 flex flex-col items-stretch lg:flex-row">
          {chainShape.map((step, i) => (
            <Fragment key={step.title}>
              <Reveal delay={i * 0.08} className="flex min-w-0 lg:flex-1">
                <div role="listitem" className="flex w-full flex-col rounded-xl border border-white/15 bg-white/5 p-5">
                  <span className="text-body font-semibold leading-snug text-white lg:min-h-[3.1rem]">
                    {step.title}
                  </span>
                  <span className="mt-2 text-caption leading-relaxed text-slate-300">
                    {step.detail}
                  </span>
                </div>
              </Reveal>
              {i < chainShape.length - 1 && (
                <span
                  aria-hidden
                  className="flex h-8 flex-none items-center justify-center text-brand lg:h-auto lg:w-10"
                >
                  <svg
                    width="22"
                    height="12"
                    viewBox="0 0 22 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="rotate-90 lg:rotate-0"
                  >
                    <path d="M1 6h19M15 1.5 20 6l-5 4.5" />
                  </svg>
                </span>
              )}
            </Fragment>
          ))}
        </div>
        <p className="mt-6 text-caption text-slate-400">
          The last step is what makes it MGear and not a report.
        </p>
        <p className="mt-6 max-w-3xl text-body text-slate-300">
          Today these workflows run in separate departments, with handoffs where cases get
          re-keyed, delayed or dropped. MGear runs them as one connected process and
          automates the routine steps — so there are fewer handoff errors and fewer missed
          deadlines, and staff spend their time on decisions instead of chasing a case from
          one department to the next. AI assists; people remain responsible for every
          clinical and operational decision.
        </p>
      </Section>

      {/* Module strip */}
      <Section width="wide">
        <SectionHeader
          eyebrow="The Platform"
          heading="One platform. Constant communication."
          lead="Not a suite of tools that happen to share a login. One operating platform where an event in any department automatically reaches every department it affects — and MGear resolves it, or tells the right person exactly what to do. It covers the mid-revenue cycle end to end."
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
                <AnimatedStat value="$4.87M" className="text-gradient-brand" /> net
              </p>
              <p className="mt-2 text-lead text-slate-600">
                on an ED program that cost $395K.
              </p>
              <p className="mt-5 text-body text-slate-600">
                Two Providence programs. The ED utilization management program lifted the
                admission rate from 11% to 16%. The behavioral health program took the
                denial rate from 35% to 1% and authorization approval to 99%, adding about
                $4.1M in revenue since it started.
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
        <p className="mt-4 max-w-2xl text-body text-slate-600">{AI_BACKEND_STATEMENT}</p>
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
