import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { ClosingCTA } from "@/components/ModulePageLayout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { OpenItems } from "@/components/OpenItems";
import { ProvidenceComparison } from "@/components/ProvidenceComparison";
import { ScreenshotHotspots } from "@/components/ScreenshotHotspots";
import { AnimatedStat } from "@/components/AnimatedStat";

export const metadata: Metadata = {
  title: "Results — Two Providence Programs, Measured",
  description:
    "Two Providence programs: an ED utilization management program that lifted the admission rate from 11% to 16% (about $4.87M net annually), and a behavioral health program that took the denial rate from 35% to 0% (about $4.1M in additional revenue since it started).",
};

const faqs = [
  {
    question: "Is this the only case study on the site?",
    answer: "Yes, currently — it covers two programs at the same health system, Providence. A further Providence figure — 43% denial reduction at Providence Little Company of Mary — is available as a shorter proof point elsewhere on request.",
  },
  {
    question: "Are these figures verified?",
    answer:
      "MGear confirmed these figures as real, and they're published on that authority. Before this page goes live on a public domain, the supporting documentation and Providence's written permission to be named are both required — MGear leadership owns securing both.",
  },
  {
    question: "What actually changed to produce this outcome?",
    answer:
      "Not a different mechanism from what's described on Platform Overview — the same chain, run continuously, across a whole program: authorization delays caught in real time, denials routed to a physician advisor automatically, and underpayments made visible instead of invisible.",
  },
  {
    question: "Why should I trust the dashboard number behind this result?",
    answer:
      "Because there's one owner per fact. The P2P module owns the case record, and every metric anywhere in Analytics — the P2P tracker, Denials & Appeals, the Executive Dashboard, the Daily Scorecard — reads from that same record instead of recomputing its own version.",
  },
];

export default function ResultsPage() {
  return (
    <>
      <section className="hero-glow bg-charcoal">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-16 sm:pt-40 sm:pb-24">
          <div className="max-w-3xl">
            <p className="eyebrow text-brand">Results</p>
            <p className="mt-4 text-hero font-bold leading-[1.05] text-white">
              <AnimatedStat value="$4.87M" className="text-gradient-brand" /> net
            </p>
            <p className="mt-3 text-lead text-slate-300">
              on an ED utilization management program that cost $395K — measured, not
              projected. A second Providence program, in behavioral health, took the denial
              rate from 35% to 0% and added about $4.1M in revenue since it started.
            </p>
          </div>
          <div className="mt-12 rounded-2xl bg-white p-4 shadow-2xl sm:p-6">
            <ProvidenceComparison />
          </div>
        </div>
      </section>

      <Section width="wide">
        <SectionHeader eyebrow="The Outcome" heading="The outcome, in full" />
        {[
          {
            program: "ED utilization management program",
            cols: "sm:grid-cols-2 lg:grid-cols-4",
            figures: [
              ["Admission rate", "11% → 16%"],
              ["Additional annual revenue", "≈$5.26M"],
              ["Annual program cost", "≈$395K"],
              ["Net annual impact", "≈$4.87M"],
            ],
          },
          {
            program: "Behavioral health program",
            cols: "sm:grid-cols-3",
            figures: [
              ["Denial rate", "35% → 0%"],
              ["Authorization approval rate", "100%"],
              ["Additional revenue since it started", "≈$4.1M"],
            ],
          },
        ].map((group) => (
          <div key={group.program} className="mt-8">
            <h3 className="text-lg font-semibold text-charcoal">{group.program}</h3>
            <div className={`mt-4 grid gap-4 ${group.cols}`}>
              {group.figures.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-brand/20 bg-[#f2f9f4] px-6 py-6"
                >
                  <p className="text-sm text-slate-600">{label}</p>
                  <AnimatedStat
                    value={value}
                    className="mt-1.5 block text-3xl font-bold tracking-tight text-gradient-brand"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </Section>

      <Section width="wide" tone="alt">
        <SectionHeader eyebrow="The Mechanism" heading="What actually changed" />
        <p className="mt-6 max-w-3xl text-body text-slate-600">
          This isn&apos;t a different mechanism from what&apos;s described on Platform
          Overview — it&apos;s the same chain, run continuously, across a whole program.
          The ED program works at the front of that chain — reviews and admission
          decisions — and the behavioral health program works on authorizations, denials
          and reimbursement.
        </p>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          It starts with Utilization Management. MGear continuously monitors medical
          necessity and utilization, identifying mismatches between InterQual or MCG
          criteria, the patient&apos;s actual status, the physician&apos;s admission
          order and the payer&apos;s authorization. When a discrepancy is detected, MGear
          flags it and escalates the case to the attending physician, Case Manager or
          other responsible party for timely review and resolution — helping prevent an
          inappropriate patient status, authorization gaps and avoidable denials.
        </p>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          From there, an authorization delay is caught and resolved before discharge
          instead of becoming a denial. A denial that does occur routes itself to a
          physician advisor automatically, and the outcome — overturned or upheld —
          routes itself from there without anyone re-keying a case. An underpayment
          against the contracted rate becomes visible instead of invisible.
        </p>
      </Section>

      <Section width="wide">
        <SectionHeader
          eyebrow="One Owner Per Fact"
          heading="One number, one owner, everywhere it appears"
        />
        <p className="mt-6 max-w-3xl text-body text-slate-600">
          The main benefit of MGear is the connection between every part of the revenue
          cycle — Utilization Management, Authorization Management, P2P Management,
          Denial Management, Payer Communication and Analytics. The reason executives
          distrust hospital dashboards is that two reports disagree and nobody can say
          which is right. MGear&apos;s answer is structural: each fact has one owner, and
          everything else reads from it instead of recomputing its own version.
        </p>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          P2P is the clearest example. The P2P module owns the case record — it&apos;s
          the only place an outcome can be changed — and every P2P metric anywhere in
          Analytics, including the numbers behind this page, reads from that same
          record. A row in a dashboard links back to the live case that produced it.
        </p>
      </Section>

      <Section width="wide" tone="alt">
        <SectionHeader
          eyebrow="The Product"
          heading="The dashboard behind the number"
          lead="This is a real screen from the platform, not a mockup. Click any marker to see what it's showing."
        />
        <div className="mt-8">
          <ScreenshotHotspots />
        </div>
      </Section>

      <Section width="narrow" divide>
        <h2 className="mb-8 text-section font-semibold text-charcoal">Frequently asked</h2>
        <FAQAccordion items={faqs} />
      </Section>

      <OpenItems
        items={[
          "The ≈$395K annual program cost and the ≈$4.87M net are attributed to the ED program, following an annotation in a product review (2026-10-14). Which program the cost belongs to has not been confirmed.",
          "The ≈$4.1M for the behavioral health program is reported as additional revenue since the program started, not per year, so it is not added to the ED program's annual figure.",
        ]}
      />

      <ClosingCTA headline="See the mechanism behind this number." />
    </>
  );
}
