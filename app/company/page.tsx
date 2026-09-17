import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Company — About MGear",
  description:
    "MGear is the Real-Time Mid-Revenue Cycle Operating Platform — operational AI infrastructure for hospitals.",
};

const faqs = [
  {
    question: "Where is MGear headquartered?",
    answer: "Not yet published on the site — to be added.",
  },
  {
    question: "Who leads MGear?",
    answer: "Leadership names and titles are not yet published on the site — to be added.",
  },
  {
    question: "How long has MGear been operating?",
    answer: "Founding date and story are not yet published on the site — to be added.",
  },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="About MGear"
        lead="MGear is the Real-Time Mid-Revenue Cycle Operating Platform — operational AI infrastructure for hospitals."
      />

      <Section width="wide">
        <div className="rounded-lg border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900">
          This page carries the recommended structure for a Company page, with
          placeholder copy. Founding date, headquarters, leadership names and titles,
          team size, the founding story, and any public funding details are still to be
          added.
        </div>

        <SectionHeader className="mt-12" eyebrow="What We Are" heading="What MGear is" />
        <p className="mt-6 max-w-3xl text-body text-slate-600">
          Not utilization management software. Not authorization software. Not denial
          software. Not analytics software. Not case management software. MGear
          connects every department responsible for protecting hospital revenue into
          one real-time operating platform — coordinating them while the patient is
          still admitted, not reporting what happened after discharge.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            ["Leadership", "Names and titles to be added."],
            ["Headquarters & Founding", "Founding date, location, and story to be added."],
            ["Team", "Team size to be added."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-xl border border-dashed border-slate-300 bg-surface-alt p-5">
              <h3 className="font-semibold text-charcoal">{title}</h3>
              <p className="mt-2 text-sm text-slate-500">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section width="narrow" tone="alt">
        <h2 className="mb-8 text-section font-semibold text-charcoal">Frequently asked</h2>
        <FAQAccordion items={faqs} />
      </Section>

      <Section width="wide" tone="dark">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-display font-semibold text-white">
            See the platform behind the company.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/platform">Platform Overview</Button>
            <Button
              href="/contact"
              variant="inverse"
            >
              Contact
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
