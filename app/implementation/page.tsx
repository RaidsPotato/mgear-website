import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { Button } from "@/components/Button";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Implementation — Getting MGear Live at Your Hospital",
  description:
    "How an MGear rollout is structured, from EHR connectivity through module configuration to go-live — outlined ahead of a finalized timeline and support commitment.",
};

const faqs = [
  {
    question: "How long does implementation take?",
    answer: "A typical timeline hasn't been finalized yet. This page will be updated with a specific length once it is.",
  },
  {
    question: "Do we need to implement all eleven modules at once?",
    answer: "No. Each facility carries only the modules it's licensed for, so implementation scopes to whichever modules you're starting with.",
  },
  {
    question: "What's the support commitment after go-live?",
    answer: "Not yet finalized — this page will state response times and the ongoing support structure once decided.",
  },
];

export default function ImplementationPage() {
  return (
    <>
      <Section width="wide" className="pt-14 sm:pt-20">
        <div className="max-w-3xl">
          <Eyebrow>Implementation</Eyebrow>
          <h1 className="text-page-title font-bold tracking-tight text-charcoal">
            Getting MGear Live at Your Hospital
          </h1>
          <p className="mt-6 text-body text-slate-600">
            The shape of a rollout, outlined ahead of a finalized timeline and support
            commitment.
          </p>
        </div>
      </Section>

      <Section className="border-t border-slate-100" width="wide">
        <div className="rounded-lg border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900">
          This page outlines the typical shape of an implementation. A specific
          timeline and the finalized support commitment are still being determined.
        </div>

        <h2 className="mt-10 text-section font-semibold text-charcoal">How a rollout is structured</h2>
        <ol className="mt-6 space-y-4">
          {[
            ["EHR connectivity is established", "via FHIR and HL7, to whichever EHR your hospital runs — Epic, Cerner, Meditech, Paragon, or Health Samurai Aidbox."],
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

        <h2 className="mt-10 text-section font-semibold text-charcoal">Support</h2>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          A specific support commitment — response times and ongoing structure — is
          still being finalized. This section will be updated once it is.
        </p>
      </Section>

      <Section className="border-t border-slate-100" width="narrow">
        <h2 className="text-section font-semibold text-charcoal mb-6">FAQs</h2>
        <FAQAccordion items={faqs} />
      </Section>

      <Section width="wide" className="border-t border-slate-100">
        <div className="rounded-2xl bg-charcoal px-8 py-14 text-center sm:px-16">
          <h2 className="text-section font-semibold text-white">
            Talk through implementation for your hospital.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/request-demo">Request Demo</Button>
            <Button
              href="/pricing"
              variant="secondary"
              className="!bg-transparent !text-white !border-slate-500 hover:!border-white"
            >
              Pricing
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
