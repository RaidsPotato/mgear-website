import type { Metadata } from "next";
import { SolutionPageLayout } from "@/components/SolutionPageLayout";

export const metadata: Metadata = {
  title: "MGear for Multi-Hospital Systems — One Platform, Deployed Across Every Facility",
  description:
    "Multi-hospital SaaS deployment as a stated platform capability — each facility in the system carries only the modules it's licensed for.",
};

export default function Page() {
  return (
    <SolutionPageLayout
      eyebrow="Industries — Multi-Hospital Systems"
      headline="One System, Many Facilities — Each One Carrying What It's Licensed For"
      subheadline="Multi-hospital SaaS deployment is a stated platform capability. Every facility in the system runs on the same platform, and each one carries only the modules it's actually licensed for."
      financialImpact={
        <p>
          At system scale, the same coordination pattern protects{" "}
          <strong className="text-charcoal">reduced revenue leakage</strong>,{" "}
          <strong className="text-charcoal">increased reimbursement accuracy</strong>,
          and <strong className="text-charcoal">improved payer compliance</strong> —
          across every facility, not just one.
        </p>
      }
      aiCapabilities="AI does not replace clinicians or staff at any facility in the system. AI assists operations — the same named capabilities (Authorization Assistant, Workflow Automation, and the rest) apply wherever a facility has licensed the module they support. Humans remain responsible for every operational and clinical decision."
      integrationCapabilities="Multi-hospital SaaS deployment, enterprise scalability, cloud architecture, HIPAA architecture, role-based access, audit logging, and enterprise security are all stated platform capabilities. Role-based access and audit logging are visible in the working product today, governing exactly which facilities and users can see which data."
      screenshots={[
        { src: "/screenshots/plat-02-users.png", alt: "MGear role-based access — users and roles" },
        { src: "/screenshots/plat-03-activity.png", alt: "MGear audit logging — activity log" },
      ]}
      faqs={[
        {
          question: "Can different facilities in our system license different modules?",
          answer:
            "Yes. Each facility carries the modules it actually has. A module a facility hasn't licensed doesn't appear for its users, and the platform's analytics say so explicitly rather than silently reporting zero for facilities that were never sending that data.",
        },
        {
          question: "Is MGear built for multi-facility deployment?",
          answer: "Multi-hospital SaaS deployment is a named enterprise-readiness capability, alongside enterprise scalability and cloud architecture.",
        },
        {
          question: "How is access controlled across facilities?",
          answer: "Through role-based access and audit logging, both visible in the working product today — governing exactly which facility and user can see which data.",
        },
      ]}
    >
      <h2 className="text-section font-semibold text-charcoal">
        Deployed as one platform across every facility
      </h2>
      <ol className="mt-6 space-y-4">
        {[
          ["Each facility carries the modules it actually has.", ""],
          ["A module a facility didn't license doesn't appear for its users.", ""],
          [
            "The analytics for that module don't silently report zero for that facility.",
            "They either say which facilities are excluded, or don't report at all.",
          ],
          ["A zero here means not sent, not none happened.", "A trust signal that matters more, not less, at system scale."],
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

      <h2 className="mt-10 text-section font-semibold text-charcoal">
        Enterprise readiness at system scale
      </h2>
      <p className="mt-4 max-w-3xl text-body text-slate-600">
        Multi-hospital SaaS deployment, enterprise scalability, cloud architecture, and
        enterprise security are stated capabilities of the platform — built to run as
        one system across every facility, not reconfigured facility by facility.
      </p>
    </SolutionPageLayout>
  );
}
