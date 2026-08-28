import { ReactNode } from "react";
import { Section, Eyebrow } from "@/components/Section";
import { Button } from "@/components/Button";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";
import type { ModuleScreenshot } from "@/components/ModulePageLayout";
import { FinancialIcon, AIIcon, IntegrationIcon } from "@/components/ModuleIcons";
import { ZoomableImage } from "@/components/ZoomableImage";

function CardHeading({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <h2 className="text-section font-semibold text-charcoal">{children}</h2>
    </div>
  );
}

export function SolutionPageLayout({
  eyebrow,
  headline,
  subheadline,
  children,
  financialImpact,
  aiCapabilities,
  integrationCapabilities,
  screenshots,
  faqs,
  closingHeadline = "See the connection, not a slide deck.",
}: {
  eyebrow: string;
  headline: string;
  subheadline: string;
  children: ReactNode;
  financialImpact: ReactNode;
  aiCapabilities: ReactNode;
  integrationCapabilities: ReactNode;
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
        {children}
      </Section>

      {screenshots.length > 0 && (
        <Section className="border-t border-slate-100" width="wide">
          <div className={`grid gap-6 ${screenshots.length > 1 ? "sm:grid-cols-2" : ""}`}>
            {screenshots.map((s) => (
              <div
                key={s.src}
                className="overflow-hidden rounded-xl border border-slate-200 shadow-md"
              >
                <ZoomableImage
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
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-brand/25 bg-[#f2f9f4] p-6">
            <CardHeading icon={<FinancialIcon />}>Financial Impact</CardHeading>
            <div className="mt-4 text-body text-slate-600">{financialImpact}</div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <CardHeading icon={<AIIcon />}>AI Capabilities</CardHeading>
            <div className="mt-4 text-body text-slate-600">{aiCapabilities}</div>
          </div>
        </div>
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
          <CardHeading icon={<IntegrationIcon />}>Integration Capabilities</CardHeading>
          <div className="mt-4 max-w-3xl text-body text-slate-600">
            {integrationCapabilities}
          </div>
        </div>
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
