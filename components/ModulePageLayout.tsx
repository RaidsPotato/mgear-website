import { ReactNode } from "react";
import { Section, Eyebrow } from "@/components/Section";
import { Button } from "@/components/Button";
import { TagGrid } from "@/components/TagGrid";
import { ZoomableImage } from "@/components/ZoomableImage";
import { Reveal } from "@/components/Reveal";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";
import {
  ReceivesIcon,
  SendsIcon,
  WorkflowIcon,
  ValueIcon,
  FinancialIcon,
  AIIcon,
  IntegrationIcon,
} from "@/components/ModuleIcons";

export type ModuleScreenshot = { src: string; alt: string };

function splitCapabilities(text: string): string[] {
  return text
    .split(".")
    .map((s) => s.trim())
    .filter(Boolean);
}

function CardHeading({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <h2 className="text-section font-semibold text-charcoal">{children}</h2>
    </div>
  );
}

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

      {/* How this module connects — the first screen, per 01-PRODUCT-TRUTH.md */}
      <Section className="border-t border-slate-100" width="wide">
        <Eyebrow>How This Module Connects</Eyebrow>
        <div className="mt-4 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr]">
          <Reveal className="h-full">
            <div className="flex h-full gap-3 rounded-xl border border-brand/20 bg-[#f2f9f4] px-5 py-5">
              <ReceivesIcon />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                  Receives
                </p>
                <p className="mt-1 text-body text-charcoal">{receives}</p>
              </div>
            </div>
          </Reveal>

          <div className="hidden items-center justify-center lg:flex" aria-hidden>
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              className="fill-none stroke-brand"
              strokeWidth="2"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <Reveal delay={0.1} className="h-full">
            <div className="flex h-full gap-3 rounded-xl border border-brand/20 bg-[#f2f9f4] px-5 py-5">
              <SendsIcon />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                  Sends
                </p>
                <p className="mt-1 text-body text-charcoal">{sends}</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Eyebrow className="mt-12">The Problem It Solves</Eyebrow>
        <Reveal>
          <div className="mt-3 max-w-3xl text-body text-slate-600">{problem}</div>
        </Reveal>

        <Eyebrow className="mt-12">What It Does</Eyebrow>
        <Reveal className="mt-3">
          <TagGrid items={splitCapabilities(whatItDoes)} />
        </Reveal>
      </Section>

      <Section className="border-t border-slate-100" width="wide">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-xl border border-slate-200 bg-white p-6">
              <CardHeading icon={<WorkflowIcon />}>Operational Workflow</CardHeading>
              <div className="mt-4 text-body text-slate-600">{workflow}</div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <div className="h-full rounded-xl border border-slate-200 bg-white p-6">
              <CardHeading icon={<ValueIcon />}>Business Value</CardHeading>
              <div className="mt-4 text-body text-slate-600">{businessValue}</div>
            </div>
          </Reveal>
        </div>
      </Section>

      {interactiveDemo && (
        <Section className="border-t border-slate-100" width="wide">
          {interactiveDemo}
        </Section>
      )}

      {screenshots.length > 0 && (
        <Section className="border-t border-slate-100" width="wide">
          <div className={`grid gap-6 ${screenshots.length > 1 ? "sm:grid-cols-2" : ""}`}>
            {screenshots.map((s, i) => (
              <Reveal key={s.src} delay={i * 0.08}>
                <div className="overflow-hidden rounded-xl border border-slate-200 shadow-md">
                  <ZoomableImage
                    src={s.src}
                    alt={s.alt}
                    width={2000}
                    height={1250}
                    className="h-auto w-full"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <Section className="border-t border-slate-100" width="wide">
        <Eyebrow>Impact</Eyebrow>
        <div className="mt-4 grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-xl border border-brand/25 bg-[#f2f9f4] p-6">
              <CardHeading icon={<FinancialIcon />}>Financial Impact</CardHeading>
              <div className="mt-4 text-body text-slate-600">{financialImpact}</div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <div className="h-full rounded-xl border border-slate-200 bg-white p-6">
              <CardHeading icon={<AIIcon />}>AI Capabilities</CardHeading>
              <div className="mt-4 text-body text-slate-600">{aiCapabilities}</div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
            <CardHeading icon={<IntegrationIcon />}>Integration Capabilities</CardHeading>
            <div className="mt-4 max-w-3xl text-body text-slate-600">
              {integrationCapabilities}
            </div>
          </div>
        </Reveal>

        {futureRoadmap && (
          <Reveal>
            <div className="mt-6 rounded-xl border border-dashed border-brand/40 bg-brand/5 p-6">
              <Eyebrow>Future Roadmap</Eyebrow>
              <div className="mt-3 max-w-3xl text-body text-slate-600">{futureRoadmap}</div>
            </div>
          </Reveal>
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
