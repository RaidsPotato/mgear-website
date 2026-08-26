import type { Metadata } from "next";
import Link from "next/link";
import { Section, Eyebrow } from "@/components/Section";
import { Button } from "@/components/Button";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "AI at MGear — Governed AI That Assists Operations, Never Replaces Clinical Judgment",
  description:
    "Seven named AI capabilities across the platform — AI Quality Auditor, Authorization Assistant, Payer Communication Assistant, Contract Intelligence, Conversational Analytics, Operational Intelligence, and Workflow Automation. AI assists operations. Humans remain responsible.",
};

const capabilities = [
  {
    name: "Authorization Assistant",
    href: "/modules/authorization-management",
    module: "Authorization Management",
    desc: "Reduces manual work in tracking and routing authorization requests and status.",
  },
  {
    name: "Payer Communication Assistant",
    href: "/modules/payer-communication",
    module: "Payer Communication",
    desc: "Reduces manual work in managing communications and documentation submission.",
  },
  {
    name: "Workflow Automation",
    href: "/modules/denial-management",
    module: "Denial Management",
    desc: "Creates an appeal automatically and deep-links it to the originating case the moment a P2P outcome is upheld.",
  },
  {
    name: "Operational Intelligence",
    href: "/modules/productivity",
    module: "Productivity",
    desc: "The best fit for staffing, scheduling, and performance visibility across departments.",
  },
  {
    name: "Contract Intelligence",
    href: "/modules/contract-management",
    module: "Contract Management",
    desc: "Extracts reimbursement terms, covered services, and authorization/notification rules from an uploaded payer contract.",
  },
  {
    name: "Conversational Analytics",
    href: "/modules/conversational-analytics",
    module: "Conversational Analytics",
    desc: "Answers natural-language executive questions from the platform's one governed, canonical data source.",
  },
  {
    name: "AI Quality Auditor",
    href: "/modules/quality-management",
    module: "Quality Management",
    desc: "Audits review quality, workflow compliance, and documentation quality as the work happens.",
  },
];

const faqs = [
  {
    question: "Does AI replace clinicians or operational staff?",
    answer:
      "No. AI does not replace clinicians. AI assists operations. Humans remain responsible for operational and clinical decisions — this applies across every named capability on this page.",
  },
  {
    question: "Are all seven AI capabilities available today?",
    answer:
      "Most are. AI Quality Auditor, Contract Intelligence, and Conversational Analytics are being built ahead of go-to-market and are written present-tense as the specification for that build — see each module's page for its current build status.",
  },
  {
    question: 'What does "governed" mean specifically?',
    answer:
      "It means an AI answer stays inside the hospital's own permission model and data boundaries — not an open chatbot over the chart. Conversational Analytics is read-only by design: it can't disagree with the workflow, because it never computes its own version of a fact.",
  },
];

export default function AIPage() {
  return (
    <>
      <Section width="wide" className="pt-14 sm:pt-20">
        <div className="max-w-3xl">
          <Eyebrow>AI</Eyebrow>
          <h1 className="text-page-title font-bold tracking-tight text-charcoal">
            AI Assists Operations. Humans Remain Responsible.
          </h1>
          <p className="mt-6 text-body text-slate-600">
            That&apos;s not a hedge — it&apos;s the reason a hospital can adopt it. Every
            AI capability on this platform is scoped to a specific operational task, and
            every decision it touches still belongs to a person.
          </p>
        </div>
      </Section>

      <Section className="border-t border-slate-100" width="wide">
        <h2 className="text-section font-semibold text-charcoal">The seven capabilities</h2>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          Each one is scoped to a module, not a general-purpose assistant layered on
          top of the platform.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {capabilities.map((c) => (
            <Link
              key={c.name}
              href={c.href}
              className="group block rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-xs transition-colors hover:border-brand/40"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-semibold text-charcoal group-hover:text-brand">
                  {c.name}
                </h3>
                <span className="hidden text-sm text-brand opacity-0 transition-opacity group-hover:opacity-100 sm:block">
                  →
                </span>
              </div>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                {c.module}
              </p>
              <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="border-t border-slate-100" width="wide">
        <h2 className="text-section font-semibold text-charcoal">
          One contract, five modules updated
        </h2>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          The clearest example of AI changing more than one screen: Contract
          Intelligence extracts reimbursement terms, covered services, authorization
          rules, notification rules, and operational requirements from an uploaded
          payer contract.
        </p>
        <ol className="mt-6 space-y-4">
          {[
            ["Payor Grid gains that payer's rules", "without anyone typing them in."],
            ["Authorization knows what needs authorizing", "under this specific contract."],
            ["Payer Communication knows the notification windows.", ""],
            [
              "Denial Management knows the expected reimbursement,",
              "so an underpayment becomes visible instead of invisible.",
            ],
            ["Analytics measures actual payment against contracted payment.", ""],
          ].map(([bold, rest], i) => (
            <li key={i} className="flex gap-4">
              <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand">
                {i + 1}
              </span>
              <p className="text-body text-slate-700">
                <strong className="font-semibold text-charcoal">{bold}</strong> {rest}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-3xl text-body text-slate-600">
          This is the honest answer to &ldquo;why not just buy a standalone contract
          management tool&rdquo;: extracting the terms was never the hard part. Getting
          them to the systems that act on them, at the moment they matter, is.
        </p>
      </Section>

      <Section className="border-t border-slate-100" width="wide">
        <h2 className="text-section font-semibold text-charcoal">
          Governed, not open
        </h2>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          Conversational Analytics answers a plain-language question — &ldquo;show me
          missed admission opportunities this month&rdquo; — but it never computes its
          own version of a fact. It reads a governed, read-only feed from every module
          on the platform, inside the hospital&apos;s own permission model and data
          boundaries. That&apos;s why a dashboard answer and a conversational answer
          never disagree: there is one owner per fact, and this module only reads it.
        </p>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          The same governance shows up as a refusal, not just a feature: if a facility
          hasn&apos;t licensed a module, its analytics say so explicitly rather than
          silently reporting a misleading zero.
        </p>
      </Section>

      <Section className="border-t border-slate-100" width="narrow">
        <h2 className="text-section font-semibold text-charcoal mb-6">FAQs</h2>
        <FAQAccordion items={faqs} />
      </Section>

      <Section width="wide" className="border-t border-slate-100">
        <div className="rounded-2xl bg-charcoal px-8 py-14 text-center sm:px-16">
          <h2 className="text-section font-semibold text-white">
            See where AI fits, module by module.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/request-demo">Request Demo</Button>
            <Button
              href="/modules"
              variant="secondary"
              className="!bg-transparent !text-white !border-slate-500 hover:!border-white"
            >
              Explore the Modules
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
