import type { Metadata } from "next";
import Link from "next/link";
import { ZoomableImage } from "@/components/ZoomableImage";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { ClosingCTA } from "@/components/ModulePageLayout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "MGear Modules — Eleven Connected Hospital Revenue Cycle Modules",
  description:
    "Utilization management, authorization, denials, payer communication, and more — eleven modules that continuously communicate, not eleven separate tools.",
};

const modules = [
  {
    n: 1,
    href: "/modules/utilization-management",
    name: "Utilization Management",
    receives: "admission data from Patient Access and Admitting.",
    sends: "reviews to Authorization Management; physician escalations to P2P Management.",
    desc: "ED, observation, and inpatient reviews — medical necessity, avoidable days, level-of-care validation.",
  },
  {
    n: 2,
    href: "/modules/authorization-management",
    name: "Authorization Management",
    receives: "reviews from Utilization Management.",
    sends: "notifications to Payer Communication; requirement checks to Payor Grid; denials trigger P2P Management.",
    desc: "Authorization requests, status tracking, TAR management, escalations.",
  },
  {
    n: 3,
    href: "/modules/payor-grid",
    name: "Payor Grid",
    receives: "extracted terms from Contract Management; requirement checks from Authorization and Payer Communication.",
    sends: "payer rules and notification requirements that govern how both modules work; deviation data to Analytics.",
    desc: "Payer requirements, notification rules, documentation submission rules, contacts.",
  },
  {
    n: 4,
    href: "/modules/payer-communication",
    name: "Payer Communication",
    receives: "notifications from Authorization Management; requirements from Payor Grid.",
    sends: "compliance data to Analytics.",
    desc: "Notifications, calls, submitted documentation, payer interactions.",
  },
  {
    n: 5,
    href: "/modules/p2p-management",
    name: "P2P Management",
    receives: "physician escalations from Utilization Management; denial cases from Authorization Management.",
    sends:
      "overturned outcomes back to Authorization (stay authorized, no appeal needed); upheld outcomes to Denial Management (appeal drafted automatically); overturn rates to Analytics.",
    desc: "Physician-advisor escalations, peer-to-peer scheduling, outcomes, advisor performance.",
  },
  {
    n: 6,
    href: "/modules/denial-management",
    name: "Denial Management",
    receives: "upheld P2P outcomes; denials from Authorization Management.",
    sends: "appeal and reimbursement data to Analytics.",
    desc: "All appeal levels, outcomes, reimbursement reconciliation, underpayments, unpaid claims.",
  },
  {
    n: 7,
    href: "/modules/contract-management",
    name: "Contract Management",
    receives: "payer contracts uploaded by the hospital.",
    sends:
      "extracted reimbursement terms, covered services, and authorization/notification rules to Payor Grid — which reaches Authorization, Payer Communication, Denial Management, and Analytics from there.",
    desc: "AI extraction of contract terms, feeding the rest of the platform automatically.",
  },
  {
    n: 8,
    href: "/modules/conversational-analytics",
    name: "Conversational Analytics",
    receives: "a governed, read-only feed from every module above — it does not hold its own version of any fact.",
    sends: "answers to natural-language executive questions, inside the hospital's own permission model.",
    desc: "Governed enterprise analytics — ask, don't build a report.",
  },
  {
    n: 9,
    href: "/modules/quality-management",
    name: "Quality Management",
    receives: "review and workflow data from Utilization Management and Authorization Management.",
    sends: "workflow-delay flags to managers, and review-quality data to Analytics.",
    desc: "AI-assisted review auditing — workflow compliance, documentation quality, reviewer performance.",
  },
  {
    n: 10,
    href: "/modules/productivity",
    name: "Productivity",
    receives: "staffing, scheduling, and workload data across departments.",
    sends: "performance data to Analytics.",
    desc: "Productivity, staffing, scheduling, payroll, performance.",
  },
  {
    n: 11,
    href: "/modules/emr-integration",
    name: "EMR Integration",
    receives: "clinical and administrative data via FHIR and HL7 from the hospital's EHR.",
    sends: "that data to every module above, continuously — not a one-time sync.",
    desc: "Epic, Cerner, Meditech, Paragon, Health Samurai Aidbox connectivity.",
  },
];

const faqs = [
  {
    question: "Do we have to license all eleven modules?",
    answer:
      "No. Each facility carries the modules it's licensed for — a module a facility hasn't licensed doesn't appear for its users, and the platform's analytics say so explicitly rather than silently reporting zero.",
  },
  {
    question: "Are all eleven modules available today?",
    answer: "Yes, as delivered on the MGear platform. See individual module pages for depth on each.",
  },
  {
    question: "What's the difference between this page and Platform Overview?",
    answer:
      "Platform Overview shows the full mechanism — one event moving through several modules end to end. This page is the directory: find your module, see what it connects to, go deeper.",
  },
];

export default function ModulesHub() {
  return (
    <>
      <PageHero
        eyebrow="The Eleven Modules"
        title="Eleven Modules. One Continuous System."
        lead="Each module does real work on its own. None of them work alone — every one receives something from another module, and sends something to the next."
      />

      <Section width="wide">
        <p className="max-w-3xl text-lead text-slate-600">
          Every department listed below already exists in most hospitals in some form.
          What doesn&apos;t exist elsewhere is what happens between them. Before reading
          what each module contains, read what moves through it — because that&apos;s
          the part a feature list can&apos;t show.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {modules.map((m, i) => (
            <Reveal key={m.href} delay={(i % 2) * 0.08} className="h-full">
              <Link
                href={m.href}
                className="group flex h-full rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition-colors hover:border-brand/40 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand">
                    {m.n}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-semibold text-charcoal group-hover:text-brand">
                        {m.name}
                      </h3>
                      <span className="text-sm text-brand opacity-40 transition-all group-hover:translate-x-0.5 group-hover:opacity-100">
                        &rarr;
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">
                      <strong className="font-medium text-charcoal">Receives:</strong>{" "}
                      {m.receives}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      <strong className="font-medium text-charcoal">Sends:</strong> {m.sends}
                    </p>
                    <p className="mt-2 text-sm text-slate-500">{m.desc}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section width="wide" tone="alt">
        <SectionHeader eyebrow="One Module, Live" heading="Not a mockup — a real workspace" />
        <Reveal className="mt-8">
          <div className="overflow-hidden rounded-xl border border-slate-200 shadow-md">
            <ZoomableImage
              src="/screenshots/auth-01-authorizations.png"
              alt="MGear authorization workspace — one of the eleven connected modules, live"
              width={2000}
              height={1250}
              className="h-auto w-full"
            />
          </div>
        </Reveal>
      </Section>

      <Section width="narrow" divide>
        <h2 className="mb-8 text-section font-semibold text-charcoal">Frequently asked</h2>
        <FAQAccordion items={faqs} />
      </Section>

      <ClosingCTA headline="See the connection, not a slide deck." />
    </>
  );
}
