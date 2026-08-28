import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { Button } from "@/components/Button";
import { TagGrid } from "@/components/TagGrid";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Pricing — MGear Hospital Revenue Cycle Operating Platform",
  description:
    "MGear is priced around your hospital's scale and the modules you license, not a public list price. Contact sales for a quote structured to your facility.",
};

const faqs = [
  {
    question: "Is pricing published?",
    answer: "Not as a public list price. Pricing is quoted per hospital, based on scale and which modules are licensed.",
  },
  {
    question: "Do we have to license all eleven modules?",
    answer:
      "No. Each facility carries only the modules it's actually licensed for. A module a facility hasn't licensed doesn't appear for its users, and the platform's analytics say so explicitly rather than reporting a misleading zero.",
  },
  {
    question: "When will a public pricing model be available?",
    answer: "This page carries a pricing posture rather than final numbers today. It will be updated once the pricing model is finalized.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Section width="wide" className="pt-14 sm:pt-20">
        <div className="max-w-3xl">
          <Eyebrow>Pricing</Eyebrow>
          <h1 className="text-page-title font-bold tracking-tight text-charcoal">
            Priced Around Your Hospital, Not a List Price
          </h1>
          <p className="mt-6 text-body text-slate-600">
            MGear doesn&apos;t publish a flat per-seat rate. Pricing is quoted per
            hospital, structured around scale and the modules actually licensed.
          </p>
        </div>
      </Section>

      <Section className="border-t border-slate-100" width="wide">
        <div className="rounded-lg border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900">
          This page states MGear&apos;s pricing posture — how pricing works — not final
          numbers. A specific pricing model, what&apos;s included versus additional, and
          exact figures are still being finalized.
        </div>

        <h2 className="mt-10 text-section font-semibold text-charcoal">How MGear is priced</h2>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          Pricing is structured around your hospital&apos;s scale and the specific
          modules you license — not a one-size fee across every facility. Each facility
          in a multi-hospital system carries only the modules it&apos;s licensed for, so
          you&apos;re never paying for a module that doesn&apos;t appear for your users.
        </p>

        <h2 className="mt-10 text-section font-semibold text-charcoal">What's typically included</h2>
        <div className="mt-4">
          <TagGrid items={["EHR integration (FHIR/HL7)", "Implementation support", "Ongoing support"]} tone="brand" />
        </div>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          Exact inclusions and what counts as additional will be confirmed as pricing
          is finalized — see Implementation for the outline of how a rollout is
          structured.
        </p>
      </Section>

      <Section className="border-t border-slate-100" width="narrow">
        <h2 className="text-section font-semibold text-charcoal mb-6">FAQs</h2>
        <FAQAccordion items={faqs} />
      </Section>

      <Section width="wide" className="border-t border-slate-100">
        <div className="rounded-2xl bg-charcoal px-8 py-14 text-center sm:px-16">
          <h2 className="text-section font-semibold text-white">
            Get a quote structured to your hospital.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact">Contact Sales</Button>
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
