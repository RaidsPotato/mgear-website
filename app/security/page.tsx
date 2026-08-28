import type { Metadata } from "next";
import { ZoomableImage } from "@/components/ZoomableImage";
import { Section, Eyebrow } from "@/components/Section";
import { Button } from "@/components/Button";
import { TagGrid } from "@/components/TagGrid";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Security — HIPAA Architecture, Role-Based Access, and Audit Logging for Hospitals",
  description:
    "Role-based access and audit logging, visible in the working product today, plus a platform that refuses to report a false zero when a facility's data is excluded.",
};

const faqs = [
  {
    question: "Is role-based access actually built, or a stated capability?",
    answer:
      "Built and visible in the working product today, with per-role and per-facility access controls governing exactly who can see what.",
  },
  {
    question: "Is there an audit log?",
    answer: "Yes — an activity log records actions in the working product today, not just as a stated capability.",
  },
  {
    question: "What happens to a facility's data if it hasn't licensed a given module?",
    answer:
      "It doesn't silently report a zero. The platform either says which facilities are excluded from a metric, or doesn't report it at all — a zero always means the event didn't happen, never that the data didn't arrive.",
  },
  {
    question: "Is MGear HIPAA-compliant?",
    answer: "HIPAA architecture is a stated platform capability, alongside enterprise security and cloud architecture.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <Section width="wide" className="pt-14 sm:pt-20">
        <div className="max-w-3xl">
          <Eyebrow>Security</Eyebrow>
          <h1 className="text-page-title font-bold tracking-tight text-charcoal">
            Access Controlled. Every Action Logged. Every Number Means What It Says.
          </h1>
          <p className="mt-6 text-body text-slate-600">
            Security on this platform isn&apos;t only a policy document — role-based
            access and audit logging are visible in the working product today, and the
            platform is built to refuse a specific failure mode most analytics tools
            don&apos;t even try to catch.
          </p>
        </div>
      </Section>

      <Section className="border-t border-slate-100" width="wide">
        <h2 className="text-section font-semibold text-charcoal">
          Access control and audit logging — visible today
        </h2>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          Role-based access and per-facility access controls govern exactly which users
          can see which data. Every action is recorded in an activity log as it happens
          — this is demonstrable in the working product, not a roadmap item.
        </p>
      </Section>

      <Section className="border-t border-slate-100" width="wide">
        <h2 className="text-section font-semibold text-charcoal">
          The platform tells you when it's missing a feed
        </h2>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          Every hospital in a multi-facility deployment carries only the modules it
          actually licensed. A module a facility didn&apos;t buy doesn&apos;t appear for
          its users — and its analytics don&apos;t quietly report a zero. The platform
          either says which facilities are excluded from a given metric, or doesn&apos;t
          report it at all.
        </p>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          Every analytics product will happily show a hospital a beautiful 0% denial
          rate that actually means no data arrived. MGear refuses to. For a CFO who has
          been handed a good-looking number that turned out to be a broken pipe, this is
          a trust signal no feature list can match: a zero here means not sent, not none
          happened.
        </p>
      </Section>

      <Section className="border-t border-slate-100" width="wide">
        <h2 className="text-section font-semibold text-charcoal">Enterprise security posture</h2>
        <p className="mt-4 max-w-3xl text-body text-slate-600">
          All stated platform capabilities, alongside the role-based access and audit
          logging already demonstrable today.
        </p>
        <div className="mt-4">
          <TagGrid items={["HIPAA architecture", "Enterprise security", "Cloud architecture", "Multi-hospital SaaS deployment", "Enterprise scalability"]} />
        </div>
      </Section>

      <Section className="border-t border-slate-100" width="wide">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-slate-200 shadow-md">
            <ZoomableImage
              src="/screenshots/plat-02-users.png"
              alt="MGear role-based access — users and roles"
              width={2000}
              height={1250}
              className="h-auto w-full"
            />
          </div>
          <div className="overflow-hidden rounded-xl border border-slate-200 shadow-md">
            <ZoomableImage
              src="/screenshots/plat-03-activity.png"
              alt="MGear audit logging — activity log"
              width={2000}
              height={1250}
              className="h-auto w-full"
            />
          </div>
        </div>
      </Section>

      <Section className="border-t border-slate-100" width="narrow">
        <h2 className="text-section font-semibold text-charcoal mb-6">FAQs</h2>
        <FAQAccordion items={faqs} />
      </Section>

      <Section width="wide" className="border-t border-slate-100">
        <div className="rounded-2xl bg-charcoal px-8 py-14 text-center sm:px-16">
          <h2 className="text-section font-semibold text-white">
            See access control and audit logging live.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/request-demo">Request Demo</Button>
            <Button
              href="/interoperability"
              variant="secondary"
              className="!bg-transparent !text-white !border-slate-500 hover:!border-white"
            >
              Interoperability
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
