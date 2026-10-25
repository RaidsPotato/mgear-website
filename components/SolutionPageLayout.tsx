import { ReactNode } from "react";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { ClosingCTA } from "@/components/ModulePageLayout";
import { OpenItems } from "@/components/OpenItems";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";
import type { ModuleScreenshot } from "@/components/ModulePageLayout";
import { AI_BACKEND_STATEMENT } from "@/lib/copy";
import { FinancialIcon, AIIcon, IntegrationIcon } from "@/components/ModuleIcons";
import { ZoomableImage } from "@/components/ZoomableImage";
import { Reveal } from "@/components/Reveal";
import { Card, CardPair } from "@/components/CardPair";

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
  openItems,
  closingHeadline = "See the connection, not a slide deck.",
}: {
  eyebrow: string;
  headline: string;
  subheadline: string;
  children: ReactNode;
  financialImpact: ReactNode;
  aiCapabilities?: ReactNode;
  integrationCapabilities: ReactNode;
  screenshots: ModuleScreenshot[];
  faqs: FAQItem[];
  // Claims on this page that have not been confirmed yet.
  openItems?: string[];
  closingHeadline?: string;
}) {
  return (
    <>
      <PageHero tone="dark" eyebrow={eyebrow} title={headline} lead={subheadline} />

      {/* Deliberately NOT the boxed floating-card treatment ModulePageLayout
          uses — module pages are a catalog of uniform data fields, these
          are narrative content that varies page to page, so it reads
          better as an open flow straight onto the section tone than boxed
          into an identical white card shape every time. */}
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
        <CardPair
          left={{ icon: <FinancialIcon />, title: "Financial Impact", accent: true, children: financialImpact }}
          right={
            aiCapabilities
              ? {
                  icon: <AIIcon />,
                  title: "AI Capabilities",
                  bonus: 90,
                  children: (
                    <>
                      {aiCapabilities}
                      <p className="mt-4 border-t border-slate-200 pt-4 text-sm text-slate-500">
                        {AI_BACKEND_STATEMENT}
                      </p>
                    </>
                  ),
                }
              : {
                  icon: <IntegrationIcon />,
                  title: "Integration Capabilities",
                  children: integrationCapabilities,
                }
          }
        />
        {aiCapabilities && (
          <Reveal>
            <div className="mt-6">
              <Card icon={<IntegrationIcon />} title="Integration Capabilities">
                <div className="max-w-3xl">{integrationCapabilities}</div>
              </Card>
            </div>
          </Reveal>
        )}
      </Section>

      <Section width="narrow" divide>
        <h2 className="mb-8 text-section font-semibold text-charcoal">
          Frequently asked
        </h2>
        <FAQAccordion items={faqs} />
      </Section>

      {openItems && openItems.length > 0 && <OpenItems items={openItems} />}

      <ClosingCTA headline={closingHeadline} />
    </>
  );
}
