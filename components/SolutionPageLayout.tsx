import { ReactNode } from "react";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { ClosingCTA } from "@/components/ModulePageLayout";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";
import type { ModuleScreenshot } from "@/components/ModulePageLayout";
import { FinancialIcon, AIIcon, IntegrationIcon } from "@/components/ModuleIcons";
import { ZoomableImage } from "@/components/ZoomableImage";
import { Reveal } from "@/components/Reveal";

function Card({
  icon,
  title,
  children,
  accent = false,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  accent?: boolean;
}) {
  return (
    <div
      className={`h-full rounded-xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        accent
          ? "border-brand/25 bg-[#f2f9f4] hover:shadow-brand/10"
          : "border-slate-200 bg-white hover:border-brand/30"
      }`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="text-lg font-semibold text-charcoal">{title}</h3>
      </div>
      <div className="mt-4 text-body text-slate-600">{children}</div>
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
      <PageHero eyebrow={eyebrow} title={headline} lead={subheadline} />

      <Section width="wide">{children}</Section>

      {screenshots.length > 0 && (
        <Section width="wide" tone="alt">
          <SectionHeader eyebrow="The Product" heading="Real screens, captured today" />
          <div
            className={`mt-8 grid gap-6 ${
              screenshots.length > 1 ? "sm:grid-cols-2" : ""
            }`}
          >
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

      <Section width="wide" tone={screenshots.length > 0 ? "default" : "alt"}>
        <SectionHeader
          eyebrow="Impact"
          heading="What it earns or protects"
          lead="Every capability on this page ties back to a financial outcome."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <Card icon={<FinancialIcon />} title="Financial Impact" accent>
              {financialImpact}
            </Card>
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <Card icon={<AIIcon />} title="AI Capabilities">
              {aiCapabilities}
            </Card>
          </Reveal>
        </div>
        <Reveal>
          <div className="mt-6">
            <Card icon={<IntegrationIcon />} title="Integration Capabilities">
              <div className="max-w-3xl">{integrationCapabilities}</div>
            </Card>
          </div>
        </Reveal>
      </Section>

      <Section width="narrow" divide>
        <h2 className="mb-8 text-section font-semibold text-charcoal">
          Frequently asked
        </h2>
        <FAQAccordion items={faqs} />
      </Section>

      <ClosingCTA headline={closingHeadline} />
    </>
  );
}
