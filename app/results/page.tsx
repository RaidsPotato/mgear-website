import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { ClosingCTA } from "@/components/ModulePageLayout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProvidenceToggle } from "@/components/ProvidenceToggle";
import { ScreenshotHotspots } from "@/components/ScreenshotHotspots";

export const metadata: Metadata = {
  title: "Results — A Program That Cost $395K Returned $4.87M Net",
  description:
    "The Providence behavioral health program: admission rate 11% to 16%, denial rate 35% to 0%, authorization approval 100%, net annual impact approximately $4.87M.",
};

const faqs = [
  {
    question: "Is this the only case study on the site?",
    answer: "Yes, currently. A second Providence figure — 43% denial reduction at Providence Little Company of Mary — is available as a shorter proof point elsewhere on request.",
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
      <section className="border-b border-slate-200 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-14 sm:pt-24 sm:pb-20">
          <div className="max-w-3xl">
            <p className="text-label font-semibold uppercase tracking-[0.06em] text-brand">
              Results
            </p>
            <h1 className="mt-4 text-page-title font-bold text-charcoal">
              A Program That Cost $395K Returned $4.87M Net
            </h1>
            <p className="mt-6 text-lead text-slate-600">
              The Providence behavioral health program, measured — not a projection, and
              not a feature list.
            </p>
          </div>
          <div className="mt-12">
            <ProvidenceToggle />
          </div>
        </div>
      </section>

      <Section width="wide">
        <SectionHeader eyebrow="The Outcome" heading="The outcome, in full" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Admission rate", "11% → 16%"],
            ["Behavioral health denial rate", "35% → 0%"],
            ["Authorization approval rate", "100%"],
            ["Additional annual revenue", "≈$5.26M"],
            ["Annual program cost", "≈$395K"],
            ["Net annual impact", "≈$4.87M"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-xl border border-brand/20 bg-[#f2f9f4] px-5 py-5"
            >
              <p className="text-sm text-slate-600">{label}</p>
              <p className="mt-1 text-2xl font-bold text-charcoal">{value}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-body text-slate-600">
          A program that cost <strong className="text-charcoal">$395K</strong> returned{" "}
          <strong className="text-charcoal">$4.87M</strong> net.
        </p>
      </Section>

      <Section width="wide" tone="alt">
        <SectionHeader eyebrow="The Mechanism" heading="What actually changed" />
        <p className="mt-6 max-w-3xl text-body text-slate-600">
          This isn&apos;t a different mechanism from what&apos;s described on Platform
          Overview — it&apos;s the same chain, run continuously, across a whole program.
          An authorization delay is caught and resolved before discharge instead of
          becoming a denial. A denial that does occur routes itself to a physician
          advisor automatically, and the outcome — overturned or upheld — routes itself
          from there without anyone re-keying a case. An underpayment against the
          contracted rate becomes visible instead of invisible.
        </p>
      </Section>

      <Section width="wide">
        <SectionHeader
          eyebrow="One Owner Per Fact"
          heading="One number, one owner, everywhere it appears"
        />
        <p className="mt-6 max-w-3xl text-body text-slate-600">
          The reason executives distrust hospital dashboards is that two reports
          disagree and nobody can say which is right. MGear&apos;s answer is
          structural: the P2P module owns the case record — it&apos;s the only place an
          outcome can be changed — and every P2P metric anywhere in Analytics, including
          the numbers behind this page, reads from that same record instead of
          recomputing its own version. A row in a dashboard links back to the live case
          that produced it.
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

      <ClosingCTA headline="See the mechanism behind this number." />
    </>
  );
}
