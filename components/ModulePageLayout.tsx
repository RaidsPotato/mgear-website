import { ReactNode, type CSSProperties } from "react";
import { Section, Eyebrow } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { TagGrid } from "@/components/TagGrid";
import { ZoomableImage } from "@/components/ZoomableImage";
import { Reveal } from "@/components/Reveal";
import { Card, CardPair } from "@/components/CardPair";
import { AI_BACKEND_STATEMENT } from "@/lib/copy";
import { OpenItems } from "@/components/OpenItems";
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

export function ModulePageLayout({
  number,
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
  openItems,
  closingHeadline = "See the connection, not a slide deck.",
}: {
  number: number;
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
  // Optional: omit it and the AI card is dropped (Utilization Management has
  // none — MGear does not apply AI to InterQual/MCG criteria).
  aiCapabilities?: ReactNode;
  integrationCapabilities: ReactNode;
  futureRoadmap?: ReactNode;
  interactiveDemo?: ReactNode;
  screenshots: ModuleScreenshot[];
  faqs: FAQItem[];
  // Claims on this page that have not been confirmed yet.
  openItems?: string[];
  closingHeadline?: string;
}) {
  // Receives is often a single short line and Sends a long one. Equal columns
  // left a hole inside the shorter box, so the box with more text gets more
  // width (same idea as CardPair): a wider column wraps the same text onto
  // fewer lines and the two end up within a line of each other.
  const receivesShare = Math.min(
    0.66,
    Math.max(0.34, receives.length / (receives.length + sends.length || 1))
  );
  const receivesSendsCols = {
    "--cols": `${receivesShare}fr auto ${1 - receivesShare}fr`,
  } as CSSProperties;

  return (
    <>
      <PageHero
        tone="dark"
        numeral={String(number).padStart(2, "0")}
        eyebrow={eyebrow}
        title={headline}
        lead={subheadline}
      />

      {/* How this module connects — the first screen, per 01-PRODUCT-TRUTH.md.
          Overlaps up into the dark hero via negative margin, same pattern as
          Home's Problem card — every page now opens with a floating panel
          bridging the hero into the page instead of a hard seam. */}
      <Section width="wide">
        <div className="relative z-10 -mt-24 rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-900/10 sm:-mt-32 sm:p-12">
          <SectionHeader
            eyebrow="How This Module Connects"
            heading="Nothing here happens in isolation"
          />
          <div
            className="mt-8 grid items-stretch gap-4 lg:[grid-template-columns:var(--cols)]"
            style={receivesSendsCols}
          >
            <Reveal className="h-full">
              <div className="flex h-full gap-3 rounded-xl border border-brand/20 bg-[#f2f9f4] px-5 py-5 shadow-sm">
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
              <div className="flex h-full gap-3 rounded-xl border border-brand/20 bg-[#f2f9f4] px-5 py-5 shadow-sm">
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
        </div>
      </Section>

      <Section width="wide" tone="alt">
        <SectionHeader
          eyebrow="The Problem It Solves"
          heading="Why this module exists"
        />
        <Reveal>
          <div className="mt-4 max-w-3xl text-body text-slate-600">{problem}</div>
        </Reveal>

        <Eyebrow className="mt-14">What It Does</Eyebrow>
        <Reveal className="mt-3">
          <TagGrid items={splitCapabilities(whatItDoes)} />
        </Reveal>
      </Section>

      <Section width="wide">
        <SectionHeader eyebrow="In Practice" heading="How the work actually runs" />
        <CardPair
          left={{ icon: <WorkflowIcon />, title: "Operational Workflow", children: workflow }}
          right={{ icon: <ValueIcon />, title: "Business Value", children: businessValue }}
        />
      </Section>

      {interactiveDemo && (
        <Section width="wide" tone="alt">
          {interactiveDemo}
        </Section>
      )}

      {screenshots.length > 0 && (
        <Section width="wide" tone={interactiveDemo ? "default" : "alt"}>
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

      <Section
        width="wide"
        tone={
          (interactiveDemo && screenshots.length > 0) ||
          (!interactiveDemo && screenshots.length === 0)
            ? "alt"
            : "default"
        }
      >
        <SectionHeader
          eyebrow="Impact"
          heading="What it earns or protects"
          lead="Every feature here ties to a financial outcome — that pairing is the point."
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

        {futureRoadmap && (
          <Reveal>
            <div className="mt-6 rounded-xl border border-dashed border-brand/40 bg-brand/5 p-6">
              <Eyebrow>Future Roadmap</Eyebrow>
              <div className="mt-3 max-w-3xl text-body text-slate-600">
                {futureRoadmap}
              </div>
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

export function ClosingCTA({
  headline,
  lead,
  secondary = { label: "See How It Works", href: "/platform" },
}: {
  headline: string;
  lead?: string;
  secondary?: { label: string; href: string };
}) {
  return (
    <Section width="wide" tone="dark">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-display font-semibold text-white">{headline}</h2>
        {lead && <p className="mt-4 text-lead text-slate-300">{lead}</p>}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/request-demo">Request Demo</Button>
          <Button
            href={secondary.href}
            variant="inverse"
          >
            {secondary.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}
