import type { Metadata } from "next";
import { SolutionPageLayout } from "@/components/SolutionPageLayout";

export const metadata: Metadata = {
  title: "MGear for Patient Access & Business Office — Self-Pay Recovery That Updates Itself",
  description:
    "When a financial counselor finds coverage on a self-pay patient, the authorization, level-of-care lines, worklist, and recovery reporting all catch up automatically — for that visit only.",
};

export default function Page() {
  return (
    <SolutionPageLayout
      eyebrow="Solutions — Patient Access & Business Office"
      headline="One Insurance Card Found. Six Things Update Themselves."
      subheadline="A financial counselor finds coverage on a patient admitted as self-pay. Nobody has to remember to go fix the authorization, the level-of-care lines, the worklist, or the report — the platform does."
      financialImpact={
        <p>
          This chain earns{" "}
          <strong className="text-charcoal">recovery of revenue</strong> that would
          otherwise have been written off as self-pay.
        </p>
      }
      aiCapabilities="No named AI capability applies specifically to this workflow — it runs on the platform's structured business rules, not a judgment call. Humans remain responsible for every financial-counseling and authorization decision; the platform's job is making sure nothing downstream is left out of date once that decision is recorded."
      integrationCapabilities="Coverage and authorization data connect to the hospital's EHR via FHIR and HL7, and to payers through the platform's payer connectivity — the same integration layer used across the rest of the platform."
      screenshots={[]}
      faqs={[
        {
          question: "Does coverage found on one stay apply to the patient's future visits?",
          answer:
            "No. The coverage attaches to that visit only, not to the patient. The same person can be self-pay on one stay and insured on the next — MGear does not quietly rewrite history.",
        },
        {
          question: "What happens if a self-pay stay isn't worked?",
          answer:
            "If a self-pay stay sits unworked past five days, an alert fires automatically.",
        },
        {
          question: "Is this chain live in the product today?",
          answer: "Yes — built and accepted 2026-08-08.",
        },
      ]}
    >
      <h2 className="text-section font-semibold text-charcoal">
        The moment coverage is found
      </h2>
      <ol className="mt-6 space-y-4">
        {[
          ["Financial Counseling records the coverage found.", "On a patient who was admitted as self-pay."],
          ["The authorization reopens on that visit.", "Payer set, status back to pending."],
          ["Every level-of-care line resets to pending.", "Because no payer has answered yet."],
          ["The case leaves the self-pay worklist.", ""],
          ["Analytics counts it in financial-counselor recovery.", ""],
          ["If a self-pay stay sits unworked past five days, an alert fires.", ""],
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
        What it refuses to do
      </h2>
      <p className="mt-4 max-w-3xl text-body text-slate-600">
        The coverage attaches to that visit only, not to the patient. The same person
        can be self-pay on one stay and insured on the next, and MGear does not quietly
        rewrite history. Anyone who has been burned by a system that over-applies a
        correction will notice this immediately.
      </p>
    </SolutionPageLayout>
  );
}
