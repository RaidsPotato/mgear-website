import type { Metadata } from "next";
import Link from "next/link";
import { SolutionPageLayout } from "@/components/SolutionPageLayout";

export const metadata: Metadata = {
  title: "MGear for Behavioral Health — Denial Rate From 35% to 1%",
  description:
    "The Providence behavioral health program: denial rate 35% to 1%, authorization approval 99%, and approximately $4.1M in additional revenue since it started.",
};

export default function Page() {
  return (
    <SolutionPageLayout
      eyebrow="Industries — Behavioral Health"
      headline="A Behavioral Health Denial Rate That Went From 35% to 1%"
      subheadline="The Providence behavioral health program is one of two Providence programs on the MGear site — a real, measured outcome, not a projection."
      financialImpact={
        <p>
          Approximately <strong className="text-charcoal">$4.1M</strong> in additional
          revenue since the program started, with the denial rate down from 35% to 1%
          and authorization approval at 99%.
        </p>
      }
      aiCapabilities="AI does not replace clinicians. AI assists operations — Authorization Assistant and Workflow Automation reduce manual work in tracking, routing, and appeal creation. Humans remain responsible for every clinical and operational decision."
      integrationCapabilities="Behavioral health authorization and denial data connect through the same EMR integration and payer connectivity as the rest of the platform — FHIR, HL7, and payer-specific requirements held in Payor Grid."
      screenshots={[
        { src: "/screenshots/analytics-05-financial.png", alt: "MGear financial analytics — the dollar layer" },
      ]}
      faqs={[
        {
          question: "Is this the only case study on the site?",
          answer: "It is one of two Providence programs on the site; the other, an ED utilization management program, is on the Results page.",
        },
        {
          question: "Are these figures verified?",
          answer:
            "MGear confirmed these figures as real. They're used on that authority — no other document establishes them independently.",
        },
        {
          question: "What actually changed to produce this outcome?",
          answer:
            "The same coordination pattern described on Platform Overview, applied to a behavioral health program: authorization delays caught in real time, denials routed to a physician advisor automatically, and underpayments made visible instead of invisible.",
        },
      ]}
    >
      <h2 className="text-section font-semibold text-charcoal">The outcome</h2>
      <ul className="mt-6 space-y-3">
        {[
          ["Behavioral health denial rate", "35% → 1%"],
          ["Authorization approval rate", "99%"],
          ["Additional revenue since the program started", "≈$4.1M"],
        ].map(([label, value]) => (
          <li
            key={label}
            className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-5 py-3"
          >
            <span className="text-body text-slate-600">{label}</span>
            <span className="text-body font-semibold text-charcoal">{value}</span>
          </li>
        ))}
      </ul>

      <p className="mt-6 max-w-3xl text-body text-slate-600">
        See the full case on the{" "}
        <Link href="/results" className="font-semibold text-brand underline underline-offset-2">
          Results page
        </Link>
        .
      </p>
    </SolutionPageLayout>
  );
}
