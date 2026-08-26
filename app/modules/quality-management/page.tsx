import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { ModulePageLayout } from "@/components/ModulePageLayout";

export const metadata: Metadata = {
  title: "Quality Management — AI-Assisted Review Auditing for Hospitals",
  description:
    "Review quality, workflow compliance, and documentation quality audited as the work happens — not reconstructed after an outcome goes wrong.",
};

export default function Page() {
  return (
    <>
      <Section width="wide" className="pb-0 pt-8">
        <div className="rounded-lg border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900">
          This is the least-built of the platform&apos;s modules — written present-tense
          per product leadership&apos;s ruling, ahead of the build. Unlike the other two
          modules in this position, there isn&apos;t yet enough source detail here to
          function as a full specification.
        </div>
      </Section>
      <ModulePageLayout
        eyebrow="Module — Quality Management"
        headline="The Module That Watches the Work Itself"
        subheadline="Not a review of outcomes after the fact — auditing of review quality, workflow compliance, and documentation as the work happens."
        receives="review and workflow data from Utilization Management and Authorization Management."
        sends="workflow-delay flags to managers; review-quality data to Analytics."
        problem="Lack of accountability and limited operational visibility are named directly among the platform's core problems. When review quality or documentation quality varies by reviewer, or a workflow delay goes unnoticed until it's already a denial, nobody finds out until it's too late to matter."
        whatItDoes="AI-assisted review auditing — review quality, workflow compliance, documentation quality, operational accuracy, reviewer performance."
        workflow="The clearest example of this module in action is its role in the platform's flagship chain: when an authorization is delayed, Quality Management identifies it as a workflow issue — not just a missed authorization — before a manager is alerted. Beyond that example, the specific mechanics of how each dimension is measured aren't yet defined."
        businessValue="Workflow issues and quality gaps get flagged as they happen, rather than surfacing only when a denial or an audit forces the question."
        financialImpact={
          <p>
            The one concretely sourced mechanism — identifying a workflow delay before
            it becomes a denial — contributes to{" "}
            <strong className="text-charcoal">reduced preventable denials</strong>.
          </p>
        }
        aiCapabilities={
          <p>
            <strong className="text-charcoal">AI Quality Auditor</strong>, one of
            MGear&apos;s named AI capabilities, performs the auditing described above.
            AI does not evaluate staff punitively without human oversight — humans
            remain responsible for every quality and personnel decision.
          </p>
        }
        integrationCapabilities="Quality Management reads from Utilization Management and Authorization Management, both of which are fed by the platform's EMR integration."
        screenshots={[]}
        faqs={[
          {
            question: "What does Quality Management actually audit?",
            answer: "Review quality, workflow compliance, documentation quality, operational accuracy, and reviewer performance.",
          },
          {
            question: "How is this different from Analytics?",
            answer: "Analytics reports what happened across the platform. Quality Management specifically flags workflow issues — like a delay that's becoming a pattern — as they're happening.",
          },
          {
            question: "Does AI decide reviewer performance ratings?",
            answer: "No. AI assists with auditing. Personnel and quality decisions remain with management.",
          },
        ]}
      />
    </>
  );
}
