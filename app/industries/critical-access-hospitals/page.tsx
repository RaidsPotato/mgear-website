import type { Metadata } from "next";
import { SolutionPageLayout } from "@/components/SolutionPageLayout";

export const metadata: Metadata = {
  title: "MGear for Critical Access Hospitals — License Only What You Need",
  description:
    "Each facility carries only the modules it's actually licensed for, and the platform says so explicitly — a missing module never reads as a silent zero.",
};

export default function Page() {
  return (
    <SolutionPageLayout
      eyebrow="Industries — Critical Access Hospitals"
      headline="License Only What You Need. The Platform Says So."
      subheadline="A facility doesn't have to license all eleven modules to use the platform — and it never gets a dashboard that quietly reports zero for something it never had."
      financialImpact={
        <p>
          This protects{" "}
          <strong className="text-charcoal">reduced revenue leakage</strong> and{" "}
          <strong className="text-charcoal">increased reimbursement accuracy</strong> —
          decisions get made on numbers that are what they appear to be.
        </p>
      }
      aiCapabilities="AI does not replace clinicians or staff. AI assists operations across whichever modules a facility has licensed. Humans remain responsible for every operational and clinical decision."
      integrationCapabilities="Role-based access and audit logging are visible in the working product today, governing exactly which modules and data each facility and user can see."
      screenshots={[
        { src: "/screenshots/plat-02-users.png", alt: "MGear role-based access — users and roles" },
      ]}
      faqs={[
        {
          question: "What if our facility hasn't licensed every module?",
          answer:
            "Each facility carries only the modules it actually has. A module a facility didn't license doesn't appear for its users at all.",
        },
        {
          question: "Does a module we haven't licensed show up as a bad number in Analytics?",
          answer:
            "No. The analytics for a module a facility doesn't have don't silently report zero — they either say which facilities are excluded, or don't report at all. A zero means not sent, not none happened.",
        },
        {
          question: "Why does that distinction matter?",
          answer:
            "Every analytics product will happily show a hospital a good-looking number that actually means no data arrived. A CFO who has been handed a number like that, and later found out it was a broken pipe, doesn't trust the next report either. MGear is built to refuse that failure mode.",
        },
      ]}
    >
      <h2 className="text-section font-semibold text-charcoal">
        Each facility carries only what it&apos;s licensed for
      </h2>
      <ol className="mt-6 space-y-4">
        {[
          ["Each facility carries the modules it actually has.", ""],
          ["A module a facility didn't license doesn't appear for its users.", ""],
          [
            "The analytics for that module don't silently report zero.",
            "They either say which facilities are excluded, or don't report at all.",
          ],
          ["A zero here means not sent, not none happened.", ""],
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
        Why this matters more than it looks
      </h2>
      <p className="mt-4 max-w-3xl text-body text-slate-600">
        Every analytics product will happily show a hospital a beautiful 0% denial rate
        that actually means no data arrived. MGear refuses to. A number that means what
        it appears to mean is a trust signal no feature list can match.
      </p>
    </SolutionPageLayout>
  );
}
