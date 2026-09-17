import type { Metadata } from "next";
import { ZoomableImage } from "@/components/ZoomableImage";
import { Section, Eyebrow } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { WholeSystemDiagram } from "@/components/WholeSystemDiagram";
import { ChainExplorer } from "@/components/ChainExplorer";
import { DenialROICalculator } from "@/components/DenialROICalculator";
import { StatTile } from "@/components/StatTile";
import { Button } from "@/components/Button";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Platform Overview — How MGear Connects Every Hospital Department in Real Time",
  description:
    "See how MGear's modules communicate continuously — one authorization delay, six departments notified automatically, resolved before discharge.",
};

const faqs = [
  {
    question: "Does MGear replace my EHR?",
    answer:
      "No. MGear integrates with Epic, Cerner, Meditech, Paragon, and other EHRs via FHIR and HL7. Your EHR remains the system of record; MGear is the real-time operational coordination layer on top of it.",
  },
  {
    question: "We already have point solutions for UM, denials, and authorization — why add MGear?",
    answer:
      "Those solutions typically don't communicate with each other. MGear's differentiator is that connection — one event in UM automatically reaches Authorization, Payer Communication, and Denial Management in real time.",
  },
  {
    question: "We outsource this work to a vendor — why change that?",
    answer:
      "Outsourced work is usually still disconnected from your other departments, and you find out what happened after the fact. MGear connects the same functions in real time, while the patient is still admitted and the outcome can still change.",
  },
  {
    question: 'What does "while the patient is still admitted" actually mean?',
    answer:
      "It means MGear acts on a problem — an authorization delay, a denial risk, a missed notification window — before discharge, when it can still be fixed. A report generated after discharge can only describe what already happened.",
  },
];

export default function PlatformOverview() {
  return (
    <>
      <PageHero
        tone="dark"
        eyebrow="How the Platform Works"
        title="One Operating Platform. Every Department. Real Time."
        lead="Not a suite of modules that happen to share a login. A single platform where every module continuously communicates with every other module — while the patient is still admitted."
        actions={[
          { label: "Request Demo", href: "/request-demo" },
          { label: "See the Whole System", href: "#whole-system", variant: "inverse" },
        ]}
      />

      <Section width="wide">
        <SectionHeader
          eyebrow="The Flagship Chain"
          heading="The chain, in full"
          lead="This is the flagship example, run start to finish. An authorization has not come back, and the stay is still running."
        />

        <ol className="mt-10 space-y-4">
          {[
            [
              "Payer Communication is notified",
              "the moment the delay is detected — not at the next status meeting.",
            ],
            [
              "Payor Grid verifies",
              "that specific payer's requirements automatically: notification windows, documentation format, submission endpoints.",
            ],
            [
              "Analytics updates",
              "its dashboards in real time, so the delay is visible to anyone watching, not buried until month-end.",
            ],
            [
              "Quality identifies",
              "this as a workflow delay, not just a missed authorization — the pattern gets tracked, not just the instance.",
            ],
            ["The manager is alerted.", ""],
            [
              "The team resolves it before discharge",
              "— because the patient is still in the building, the outcome can still change.",
            ],
          ].map(([bold, rest], i) => (
            <li key={i} className="flex gap-4">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand">
                {i + 1}
              </span>
              <p className="text-body text-slate-700">
                <strong className="font-semibold text-charcoal">{bold}</strong> {rest}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-8 border-l-2 border-brand bg-[#f2f9f4] px-6 py-5 text-body text-charcoal">
          What it earns: authorization efficiency, and one fewer preventable denial. No
          one re-keyed a case. No one emailed a spreadsheet. No one found out at the
          payer meeting three weeks later.
        </p>
      </Section>

      <Section width="wide" tone="alt">
        <SectionHeader
          eyebrow="ROI Estimator"
          heading="Estimate Your Opportunity Today"
          lead="Enter your own denial write-off figures and targets below to estimate the financial impact for your organization."
        />
        <Reveal className="mt-8">
          <DenialROICalculator />
        </Reveal>
      </Section>

      <Section width="wide">
        <SectionHeader
          eyebrow="Seven Real Chains"
          heading="Seven chains. Pick one."
          lead="The authorization delay above is one real chain out of seven. Every one of them is actual behavior in the working product, not an illustration built to look good. Pick a trigger and watch it move."
        />
        <Reveal className="mt-8">
          <ChainExplorer />
        </Reveal>
      </Section>

      <Section id="whole-system" width="wide" tone="alt">
        <SectionHeader
          eyebrow="The Whole System"
          heading="The whole system, one picture"
          lead="Extend that same chain across every department that touches revenue, and this is the platform. One frame holds all of it: the patient is still admitted. A tool that shows you this after discharge is a dashboard. This shows it while the outcome can still change. Click any box to see exactly what it receives and sends."
        />
        <Reveal className="mt-8">
          <WholeSystemDiagram />
        </Reveal>
      </Section>

      <Section width="narrow">
        <SectionHeader
          eyebrow="Why MGear"
          heading="Why MGear, if you already have something"
        />

        <div className="mt-8 space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
            <p className="font-semibold text-charcoal">
              &ldquo;We already have Epic&rdquo; (or Cerner, or another EHR).
            </p>
            <p className="mt-2 text-body text-slate-600">
              Your EHR is the system of record — documentation, scheduling, the clinical
              chart. That&apos;s a different job from the one described above. MGear
              doesn&apos;t replace your EHR; it integrates with it via FHIR and HL7 and
              sits on top as the operational coordination layer — the thing that notices
              an authorization is stalling and gets the right department moving on it in
              real time, while your EHR keeps the chart.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
            <p className="font-semibold text-charcoal">&ldquo;We already outsource this.&rdquo;</p>
            <p className="mt-2 text-body text-slate-600">
              An outsourced UM or denials vendor does the same work described above —
              but usually alone, disconnected from the other nine departments. You get a
              report back after the fact instead of a live alert while the stay is still
              open. The problem was never that this work wasn&apos;t getting done
              somewhere. It&apos;s that nowhere was it <em>connected</em> to everything
              else protecting the same revenue.
            </p>
          </div>
        </div>
      </Section>

      <Section width="wide" tone="brand">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <Eyebrow>Financial Impact</Eyebrow>
              <p className="text-display font-semibold text-charcoal">
                This chain earns authorization efficiency and fewer preventable denials.
              </p>
              <p className="mt-5 text-body text-slate-600">
                At the platform level, the same coordination pattern is what produces the
                outcome on the Results page — not a different mechanism, this same chain,
                run continuously, across a whole program.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <StatTile label="Annual program cost" value="$395K" />
                <StatTile label="Net annual impact" value="$4.87M" />
              </div>
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
                src="/screenshots/um-04-live-ed-audit.png"
                alt="MGear live ED audit view — real-time proof the chain resolves before discharge"
                width={2000}
                height={1250}
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section width="narrow" divide>
        <h2 className="mb-8 text-section font-semibold text-charcoal">Frequently asked</h2>
        <FAQAccordion items={faqs} />
      </Section>

      <Section width="wide" tone="dark">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-display font-semibold text-white">
            See how each module works.
          </h2>
          <p className="mt-4 text-lead text-slate-300">
            Eleven connected modules, each opening with what it receives and what it
            sends before anything else.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/modules">Explore the Modules</Button>
            <Button
              href="/request-demo"
              variant="inverse"
            >
              Request Demo
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
