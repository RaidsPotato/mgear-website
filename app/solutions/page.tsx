import type { Metadata } from "next";
import Link from "next/link";
import { ZoomableImage } from "@/components/ZoomableImage";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { ClosingCTA } from "@/components/ModulePageLayout";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Solutions by Department — MGear for Physician Advisors, Patient Access, UM, and Revenue Cycle",
  description:
    "The same connected MGear platform, entered from where you sit — Physician Advisors, Patient Access & Business Office, Utilization & Case Management, and Revenue Cycle & Denials Leadership.",
};

const solutions = [
  {
    href: "/solutions/physician-advisors",
    name: "Physician Advisors",
    chain: "How a denial reaches you, and how the appeal starts itself",
    desc: "A denial becomes a scheduled peer-to-peer call automatically. What you decide on that call routes the outcome — no one re-enters the case.",
  },
  {
    href: "/solutions/patient-access-business-office",
    name: "Patient Access & Business Office",
    chain: "One insurance card found, six things update themselves",
    desc: "A financial counselor records coverage on a self-pay patient, and the authorization, level-of-care lines, worklist, and recovery reporting all catch up automatically.",
  },
  {
    href: "/solutions/utilization-case-management",
    name: "Utilization & Case Management",
    chain: "The review that doesn't wait for a status meeting",
    desc: "A completed review becomes the authorization request automatically, and a stalled authorization notifies the departments that can still fix it — while the patient is still admitted.",
  },
  {
    href: "/solutions/revenue-cycle-authorization-denials",
    name: "Revenue Cycle, Authorization & Denials Leadership",
    chain: "Every denial risk, visible while the stay is still open",
    desc: "Authorization delays, denials, and underpayments — connected from the moment they start to the appeal, the payer rule, or the manager alert that resolves them.",
  },
];

const faqs = [
  {
    question: "What's the difference between Solutions and Modules?",
    answer:
      "Modules is organized by product component — eleven pages, each one module. Solutions is organized by the department using the platform, pulling together whichever modules and chains matter most from that seat.",
  },
  {
    question: "Are these four separate products?",
    answer:
      "No. All four pages describe the same connected platform described on Platform Overview — each one is an entry point built around a specific department's daily work.",
  },
  {
    question: "I don't see my department listed. Does that mean MGear doesn't apply to me?",
    answer:
      "No. These four pages are entry points, not a complete list of who uses the platform. Utilization Management, Case Management, Physician Advisors, Patient Access, Admitting, Business Office, Revenue Cycle, Authorization, Denial Management, and Payer Communication are all part of the same connected system — see Platform Overview for the full picture.",
  },
];

export default function SolutionsHub() {
  return (
    <>
      <PageHero
        tone="dark"
        eyebrow="Solutions by Department"
        title="The Same Connected Platform, From Where You Sit"
        lead="Every department below works inside the same platform described on Platform Overview. These four pages start from your seat first, and show you the specific chain that runs through your daily work."
      />

      <Section width="wide">
        {/* Full-width rows, not a card grid — deliberately different rhythm
            from the Modules hub's numbered-circle grid, and there are only
            four of these, so each one gets room to lead with its chain. */}
        <div className="flex flex-col gap-4">
          {solutions.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex flex-col gap-4 rounded-2xl border border-l-4 border-slate-200 border-l-brand bg-white px-7 py-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:border-l-brand hover:shadow-lg sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-lg font-semibold text-brand">{s.chain}</p>
                <h3 className="mt-1 text-xl font-semibold text-charcoal group-hover:text-brand">
                  {s.name}
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-slate-600">{s.desc}</p>
              </div>
              <span className="hidden flex-none text-2xl text-brand opacity-40 transition-all group-hover:translate-x-1 group-hover:opacity-100 sm:block">
                &rarr;
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section width="wide" tone="alt">
        <SectionHeader
          eyebrow="One Screen, Every Module"
          heading="The executive dashboard, captured today"
        />
        <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 shadow-md">
          <ZoomableImage
            src="/screenshots/analytics-01-executive-dashboard.png"
            alt="MGear executive dashboard — every module on one screen"
            width={2000}
            height={1250}
            className="h-auto w-full"
          />
        </div>
      </Section>

      <Section width="narrow" divide>
        <h2 className="mb-8 text-section font-semibold text-charcoal">Frequently asked</h2>
        <FAQAccordion items={faqs} />
      </Section>

      <ClosingCTA headline="See the connection, not a slide deck." />
    </>
  );
}
