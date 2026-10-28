import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { ClosingCTA } from "@/components/ModulePageLayout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { EMR_LIST } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Implementation — Getting MGear Live at Your Hospital",
  description:
    "How an MGear rollout is structured, from EHR connectivity through module configuration to go-live. Book a call to scope it for your hospital.",
};

const faqs = [
  {
    question: "How long does implementation take?",
    answer: "It's scoped with your team on a call, based on your EHR and the modules you're starting with.",
  },
  {
    question: "Do we need to implement all eleven modules at once?",
    answer: "No. Each facility carries only the modules it's licensed for, so implementation scopes to whichever modules you're starting with.",
  },
  {
    question: "What's the support commitment after go-live?",
    answer: "Ongoing support is part of what's typically included. Book a call to walk through the support structure for your hospital.",
  },
];

export default function ImplementationPage() {
  return (
    <>
      <PageHero
        tone="dark"
        compact
        eyebrow="Implementation"
        title="Getting MGear Live at Your Hospital"
        lead="The shape of a rollout, from EHR connectivity to go-live. Book a call to scope it for your hospital."
        actions={[{ label: "Book a Call", href: "/request-demo" }]}
      />

      <Section width="wide">
        <SectionHeader
          eyebrow="Rollout"
          heading="How a rollout is structured"
        />
        <ol className="mt-8 space-y-4">
          {[
            ["EHR connectivity is established", `via FHIR and HL7, to whichever EHR your hospital runs — ${EMR_LIST}.`],
            ["Licensed modules are configured", "to your hospital's payer mix and existing workflows — you only configure what you've licensed."],
            ["Role-based access is set up", "so each user and facility sees exactly what they're permitted to."],
            ["Teams are trained", "on the modules they'll use day to day."],
            ["The platform goes live,", "coordinating the departments you've licensed it for."],
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

        <Eyebrow className="mt-12">Support</Eyebrow>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          Ongoing support is part of what&apos;s typically included. Book a call to walk
          through the support structure for your hospital.
        </p>
      </Section>

      <Section width="narrow" tone="alt">
        <h2 className="mb-8 text-section font-semibold text-charcoal">Frequently asked</h2>
        <FAQAccordion items={faqs} />
      </Section>

      <ClosingCTA
        headline="Talk through implementation for your hospital."
        secondary={{ label: "Pricing", href: "/pricing" }}
      />
    </>
  );
}
