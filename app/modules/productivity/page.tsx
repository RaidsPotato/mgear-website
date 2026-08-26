import type { Metadata } from "next";
import { ModulePageLayout } from "@/components/ModulePageLayout";

export const metadata: Metadata = {
  title: "Productivity — Hospital Staffing and Performance Visibility",
  description:
    "Staffing, scheduling, and performance visibility across every department protecting hospital revenue — see whether a delay is a process issue or a staffing gap.",
};

export default function Page() {
  return (
    <ModulePageLayout
      eyebrow="Module — Productivity"
      headline="Is It a Process Problem, or a Staffing Problem?"
      subheadline="When a workflow delay shows up elsewhere on the platform, this module is where a manager finds out whether the team had the capacity to catch it."
      receives="staffing, scheduling, and workload data across departments."
      sends="performance data to Analytics."
      problem="Operational bottlenecks and a lack of accountability are both harder to fix without visibility into whether a delay came from a broken process or an understaffed shift. This module gives managers that visibility directly, instead of leaving it as a guess."
      whatItDoes="Productivity. Staffing. Scheduling. Payroll. Performance. Workload."
      workflow="Managers see staffing, workload, and performance across the org structure — not department by department in separate systems. Individual staff see their own schedule directly. Daily inpatient logs tie the same operational data back to what's actually happening on the floor that day."
      businessValue="A manager looking at a workflow delay elsewhere on the platform can check here whether the team involved was appropriately staffed for that day's volume — instead of assuming it was a process failure when it was actually a coverage gap, or the reverse."
      financialImpact="This module's contribution is operational efficiency and staffing accountability, supporting every revenue-protecting outcome named elsewhere on the platform by ensuring the teams doing that work are properly staffed and performing."
      aiCapabilities={
        <p>
          <strong className="text-charcoal">Operational Intelligence</strong>, one of
          MGear&apos;s named AI capabilities, is the best fit for this module&apos;s
          staffing, scheduling, and performance visibility. AI does not make staffing
          decisions — managers remain responsible for every staffing and performance
          decision.
        </p>
      }
      integrationCapabilities="Productivity data connects to the same EMR integration and org-structure data as the rest of the platform."
      screenshots={[
        { src: "/screenshots/prod-01-productivity.png", alt: "MGear productivity dashboard — per-case-manager review counts and billable totals" },
        { src: "/screenshots/prod-02-org-structure.png", alt: "MGear org structure and shift assignments" },
      ]}
      faqs={[
        {
          question: "How does Productivity connect to the rest of the platform?",
          answer: "It receives staffing and workload data across departments and sends performance data to Analytics — the same operational data other modules use to explain a delay.",
        },
        {
          question: "Does this handle payroll processing directly?",
          answer: "Payroll is within this module's stated scope; the specific mechanics beyond that are still being defined.",
        },
        {
          question: "Does AI make staffing decisions?",
          answer: "No. Managers remain responsible for every staffing and performance decision.",
        },
      ]}
    />
  );
}
