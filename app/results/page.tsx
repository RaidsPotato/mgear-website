import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { Button } from "@/components/Button";
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
      <Section width="wide" className="pt-14 sm:pt-20">
        <div className="max-w-3xl">
          <Eyebrow>Results</Eyebrow>
          <h1 className="text-page-title font-bold tracking-tight text-charcoal">
            A Program That Cost $395K Returned $4.87M Net
          </h1>
          <p className="mt-6 text-body text-slate-600">
            The Providence behavioral health program, measured — not a projection, and
            not a feature list.
          </p>
        </div>
        <div className="mt-10">
          <ProvidenceToggle />
        </div>
      </Section>

      <Section className="border-t border-slate-100" width="wide">
        <h2 className="text-section font-semibold text-charcoal">The outcome, in full</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

      <Section className="border-t border-slate-100" width="wide">
        <h2 className="text-section font-semibold text-charcoal">What actually changed</h2>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          This isn&apos;t a different mechanism from what&apos;s described on Platform
          Overview — it&apos;s the same chain, run continuously, across a whole program.
          An authorization delay is caught and resolved before discharge instead of
          becoming a denial. A denial that does occur routes itself to a physician
          advisor automatically, and the outcome — overturned or upheld — routes itself
          from there without anyone re-keying a case. An underpayment against the
          contracted rate becomes visible instead of invisible.
        </p>
      </Section>

      <Section className="border-t border-slate-100" width="wide">
        <h2 className="text-section font-semibold text-charcoal">
          One number, one owner, everywhere it appears
        </h2>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          The reason executives distrust hospital dashboards is that two reports
          disagree and nobody can say which is right. MGear&apos;s answer is
          structural: the P2P module owns the case record — it&apos;s the only place an
          outcome can be changed — and every P2P metric anywhere in Analytics, including
          the numbers behind this page, reads from that same record instead of
          recomputing its own version. A row in a dashboard links back to the live case
          that produced it.
        </p>
      </Section>

      <Section className="border-t border-slate-100" width="wide">
        <h2 className="text-section font-semibold text-charcoal">
          The dashboard behind the number
        </h2>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          This is a real screen from the platform, not a mockup. Click any marker to
          see what it's showing.
        </p>
        <div className="mt-8">
          <ScreenshotHotspots />
        </div>
      </Section>

      <Section className="border-t border-slate-100" width="narrow">
        <h2 className="text-section font-semibold text-charcoal mb-6">FAQs</h2>
        <FAQAccordion items={faqs} />
      </Section>

      <Section width="wide" className="border-t border-slate-100">
        <div className="rounded-2xl bg-charcoal px-8 py-14 text-center sm:px-16">
          <h2 className="text-section font-semibold text-white">
            See the mechanism behind this number.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/request-demo">Request Demo</Button>
            <Button
              href="/platform"
              variant="secondary"
              className="!bg-transparent !text-white !border-slate-500 hover:!border-white"
            >
              See How It Works
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
