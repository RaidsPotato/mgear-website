import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
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
      <Section width="wide" className="pt-14 sm:pt-20">
        <div className="max-w-3xl">
          <Eyebrow>Company</Eyebrow>
          <h1 className="text-page-title font-bold tracking-tight text-charcoal">
            About MGear
          </h1>
          <p className="mt-6 text-body text-slate-600">
            MGear is the Real-Time Mid-Revenue Cycle Operating Platform — operational
            AI infrastructure for hospitals.
          </p>
        </div>
      </Section>

      <Section className="border-t border-slate-100" width="wide">
        <div className="rounded-lg border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900">
          This page carries the recommended structure for a Company page, with
          placeholder copy. Founding date, headquarters, leadership names and titles,
          team size, the founding story, and any public funding details are still to be
          added.
        </div>

        <h2 className="mt-10 text-section font-semibold text-charcoal">What MGear is</h2>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          Not utilization management software. Not authorization software. Not denial
          software. Not analytics software. Not case management software. MGear
          connects every department responsible for protecting hospital revenue into
          one real-time operating platform — coordinating them while the patient is
          still admitted, not reporting what happened after discharge.
        </p>

        <h2 className="mt-10 text-section font-semibold text-charcoal">Leadership</h2>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          Leadership names and titles to be added.
        </p>

        <h2 className="mt-10 text-section font-semibold text-charcoal">Headquarters & founding</h2>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          Founding date, headquarters, and the founding story to be added.
        </p>

        <h2 className="mt-10 text-section font-semibold text-charcoal">Team</h2>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          Team size to be added.
        </p>
      </Section>

      <Section className="border-t border-slate-100" width="narrow">
        <h2 className="text-section font-semibold text-charcoal mb-6">FAQs</h2>
        <FAQAccordion items={faqs} />
      </Section>

      <Section width="wide" className="border-t border-slate-100">
        <div className="rounded-2xl bg-charcoal px-8 py-14 text-center sm:px-16">
          <h2 className="text-section font-semibold text-white">
            See the platform behind the company.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/platform">Platform Overview</Button>
            <Button
              href="/contact"
              variant="secondary"
              className="!bg-transparent !text-white !border-slate-500 hover:!border-white"
            >
              Contact
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
