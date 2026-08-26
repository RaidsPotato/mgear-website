import type { Metadata } from "next";
import Image from "next/image";
import { Section, Eyebrow } from "@/components/Section";
import { WholeSystemDiagram } from "@/components/WholeSystemDiagram";
import { ChainExplorer } from "@/components/ChainExplorer";
import { DenialROICalculator } from "@/components/DenialROICalculator";
import { Button } from "@/components/Button";
import { FAQAccordion } from "@/components/FAQAccordion";

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
      <Section width="wide" className="pt-14 sm:pt-20">
        <div className="max-w-3xl">
          <Eyebrow>How the Platform Works</Eyebrow>
          <h1 className="text-page-title font-bold tracking-tight text-charcoal">
            One Operating Platform. Every Department. Real Time.
          </h1>
          <p className="mt-6 text-body text-slate-600">
            Not a suite of modules that happen to share a login. A single platform where
            every module continuously communicates with every other module — while the
            patient is still admitted.
          </p>
        </div>
      </Section>

      <Section className="border-t border-slate-100" width="wide">
        <h2 className="text-section font-semibold text-charcoal">The chain, in full</h2>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          This is the flagship example, run start to finish. An authorization has not
          come back, and the stay is still running.
        </p>

        <ol className="mt-8 space-y-4">
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
              <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand">
                {i + 1}
              </span>
              <p className="text-body text-slate-700">
                <strong className="font-semibold text-charcoal">{bold}</strong> {rest}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-6 max-w-3xl text-body text-slate-600">
          What it earns: authorization efficiency, and one fewer preventable denial. No
          one re-keyed a case. No one emailed a spreadsheet. No one found out at the
          payer meeting three weeks later.
        </p>
      </Section>

      <Section className="border-t border-slate-100" width="wide">
        <Eyebrow>ROI Estimator</Eyebrow>
        <h2 className="text-section font-semibold text-charcoal">
          Estimate Your Opportunity Today
        </h2>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          Enter your own denial write-off figures and targets below to estimate the
          financial impact for your organization.
        </p>
        <div className="mt-8">
          <DenialROICalculator />
        </div>
      </Section>

      <Section className="border-t border-slate-100" width="wide">
        <h2 className="text-section font-semibold text-charcoal">Seven chains. Pick one.</h2>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          The authorization delay above is one real chain out of seven. Every one of
          them is actual behavior in the working product, not an illustration built to
          look good. Pick a trigger and watch it move.
        </p>
        <div className="mt-8">
          <ChainExplorer />
        </div>
      </Section>

      <Section className="border-t border-slate-100" width="wide">
        <h2 className="text-section font-semibold text-charcoal">The whole system, one picture</h2>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          Extend that same chain across every department that touches revenue, and this
          is the platform. One frame holds all of it: the patient is still admitted.
          That&apos;s not a design flourish — it&apos;s the entire difference between a
          platform and a report. A tool that shows you this after discharge is a
          dashboard. This shows it while the outcome can still change. Click any box
          below to see exactly what it receives and sends.
        </p>
        <div className="mt-8">
          <WholeSystemDiagram />
        </div>
      </Section>

      <Section className="border-t border-slate-100" width="narrow">
        <h2 className="text-section font-semibold text-charcoal">Why MGear, if you already have something</h2>

        <div className="mt-6 space-y-6">
          <div className="rounded-lg border border-slate-200 bg-surface-alt px-5 py-4">
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
          <div className="rounded-lg border border-slate-200 bg-surface-alt px-5 py-4">
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

      <Section className="border-t border-slate-100" width="wide">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Financial Impact</Eyebrow>
            <p className="text-section font-semibold text-charcoal">
              This chain earns authorization efficiency and fewer preventable denials.
            </p>
            <p className="mt-4 text-body text-slate-600">
              At the platform level, the same coordination pattern is what produces the
              outcome on the Results page: a program that cost $395K returned $4.87M
              net. That&apos;s not a different mechanism — it&apos;s this same chain, run
              continuously, across a whole program.
            </p>
            <div className="mt-6">
              <Button href="/results" variant="secondary">
                See the Full Case
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-slate-200 shadow-md">
            <Image
              src="/screenshots/um-04-live-ed-audit.png"
              alt="MGear live ED audit view — real-time proof the chain resolves before discharge"
              width={2000}
              height={1250}
              className="h-auto w-full"
            />
          </div>
        </div>
      </Section>

      <Section className="border-t border-slate-100" width="narrow">
        <h2 className="text-section font-semibold text-charcoal mb-6">FAQs</h2>
        <FAQAccordion items={faqs} />
      </Section>

      <Section width="wide" className="border-t border-slate-100">
        <div className="rounded-2xl bg-charcoal px-8 py-14 text-center sm:px-16">
          <h2 className="text-section font-semibold text-white">
            See how each module works.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-body text-slate-300">
            Eleven connected modules, each opening with what it receives and what it
            sends before anything else.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/modules">Explore the Modules</Button>
            <Button
              href="/request-demo"
              variant="secondary"
              className="!bg-transparent !text-white !border-slate-500 hover:!border-white"
            >
              Request Demo
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
