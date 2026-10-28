import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { TagGrid } from "@/components/TagGrid";
import { FAQAccordion } from "@/components/FAQAccordion";
import { BOOKING_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Pricing — MGear Hospital Revenue Cycle Operating Platform",
  description:
    "MGear is priced around your hospital's scale and the modules you license, not a public list price. Book a call for a quote structured to your facility.",
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
    question: "How do I get a price for my hospital?",
    answer: "Book a call. We'll walk through the modules you need and quote it for your facility.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        tone="dark"
        eyebrow="Pricing"
        title="Priced Around Your Hospital, Not a List Price"
        lead="MGear doesn't publish a flat per-seat rate. Pricing is quoted per hospital, structured around scale and the modules actually licensed."
        actions={[{ label: "Book a Call", href: "/request-demo" }]}
      />

      <Section width="wide">
        <SectionHeader
          eyebrow="The Model"
          heading="How MGear is priced"
          lead="Pricing is structured around your hospital's scale and the specific modules you license — not a one-size fee across every facility. Each facility in a multi-hospital system carries only the modules it's licensed for, so you're never paying for a module that doesn't appear for your users."
        />

        <Eyebrow className="mt-12">What&apos;s Typically Included</Eyebrow>
        <div className="mt-4">
          <TagGrid items={["EHR integration (FHIR/HL7)", "Implementation support", "Ongoing support"]} tone="brand" />
        </div>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          Exact inclusions are scoped to your hospital on a call — see Implementation
          for the outline of how a rollout is structured.
        </p>
      </Section>

      <Section width="narrow" tone="alt">
        <h2 className="mb-8 text-section font-semibold text-charcoal">Frequently asked</h2>
        <FAQAccordion items={faqs} />
      </Section>

      <Section width="wide" tone="dark">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-display font-semibold text-white">
            Get a quote structured to your hospital.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={BOOKING_URL} target="_blank">
              Request Demo
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
