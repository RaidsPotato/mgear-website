import Image from "next/image";
import { ReactNode } from "react";
import { Section, Eyebrow } from "@/components/Section";
import { Button } from "@/components/Button";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";

export type ModuleScreenshot = { src: string; alt: string };

export function ModulePageLayout({
  eyebrow,
  headline,
  subheadline,
  receives,
  sends,
  problem,
  whatItDoes,
  workflow,
  businessValue,
  financialImpact,
  aiCapabilities,
  integrationCapabilities,
  futureRoadmap,
  interactiveDemo,
  screenshots,
  faqs,
  closingHeadline = "See the connection, not a slide deck.",
}: {
  eyebrow: string;
  headline: string;
  subheadline: string;
  receives: string;
  sends: string;
  problem: ReactNode;
  whatItDoes: string;
  workflow: ReactNode;
  businessValue: ReactNode;
  financialImpact: ReactNode;
  aiCapabilities: ReactNode;
  integrationCapabilities: ReactNode;
  futureRoadmap?: ReactNode;
  interactiveDemo?: ReactNode;
  screenshots: ModuleScreenshot[];
  faqs: FAQItem[];
  closingHeadline?: string;
}) {
  return (
    <>
      <Section width="wide" className="pt-14 sm:pt-20">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-page-title font-bold tracking-tight text-charcoal">
            {headline}
          </h1>
          <p className="mt-6 text-body text-slate-600">{subheadline}</p>
        </div>
      </Section>

      <Section className="border-t border-slate-100" width="wide">
        <div className="rounded-lg border border-brand/20 bg-[#f2f9f4] px-5 py-4">
          <p className="text-body text-charcoal">
            <strong className="font-semibold">Receives:</strong> {receives}
          </p>
          <p className="mt-1 text-body text-charcoal">
            <strong className="font-semibold">Sends:</strong> {sends}
          </p>
        </div>

        <h2 className="mt-10 text-section font-semibold text-charcoal">
          The problem this module solves
        </h2>
        <div className="mt-4 max-w-3xl text-body text-slate-600">{problem}</div>

        <h2 className="mt-10 text-section font-semibold text-charcoal">What it does</h2>
        <p className="mt-4 max-w-3xl text-body text-slate-600">{whatItDoes}</p>
      </Section>

      <Section className="border-t border-slate-100" width="wide">
        <h2 className="text-section font-semibold text-charcoal">Operational Workflow</h2>
        <div className="mt-4 max-w-3xl text-body text-slate-600">{workflow}</div>

        <h2 className="mt-10 text-section font-semibold text-charcoal">Business Value</h2>
        <div className="mt-4 max-w-3xl text-body text-slate-600">{businessValue}</div>
      </Section>

      {interactiveDemo && (
        <Section className="border-t border-slate-100" width="wide">
          {interactiveDemo}
        </Section>
      )}

      {screenshots.length > 0 && (
        <Section className="border-t border-slate-100" width="wide">
          <div className={`grid gap-6 ${screenshots.length > 1 ? "sm:grid-cols-2" : ""}`}>
            {screenshots.map((s) => (
              <div
                key={s.src}
                className="overflow-hidden rounded-xl border border-slate-200 shadow-md"
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={2000}
                  height={1250}
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section className="border-t border-slate-100" width="wide">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Financial Impact</Eyebrow>
            <div className="mt-3 text-body text-slate-600">{financialImpact}</div>
          </div>
          <div>
            <Eyebrow>AI Capabilities</Eyebrow>
            <div className="mt-3 text-body text-slate-600">{aiCapabilities}</div>
          </div>
        </div>

        <div className="mt-10">
          <Eyebrow>Integration Capabilities</Eyebrow>
          <div className="mt-3 max-w-3xl text-body text-slate-600">{integrationCapabilities}</div>
        </div>

        {futureRoadmap && (
          <div className="mt-10">
            <Eyebrow>Future Roadmap</Eyebrow>
            <div className="mt-3 max-w-3xl text-body text-slate-600">{futureRoadmap}</div>
          </div>
        )}
      </Section>

      <Section className="border-t border-slate-100" width="narrow">
        <h2 className="text-section font-semibold text-charcoal mb-6">FAQs</h2>
        <FAQAccordion items={faqs} />
      </Section>

      <Section width="wide" className="border-t border-slate-100">
        <div className="rounded-2xl bg-charcoal px-8 py-14 text-center sm:px-16">
          <h2 className="text-section font-semibold text-white">{closingHeadline}</h2>
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
