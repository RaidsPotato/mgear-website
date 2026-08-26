import type { Metadata } from "next";
import { SolutionPageLayout } from "@/components/SolutionPageLayout";
import { P2POutcomeDemo } from "@/components/P2POutcomeDemo";

export const metadata: Metadata = {
  title: "MGear for Physician Advisors — Denials That Route Themselves to a P2P Call",
  description:
    "A denial becomes a scheduled peer-to-peer call automatically, and the outcome — overturned or upheld — routes itself without anyone re-entering the case.",
};

export default function Page() {
  return (
    <SolutionPageLayout
      eyebrow="Solutions — Physician Advisors"
      headline="The Denial Reaches You Automatically. So Does the Appeal."
      subheadline="Physician advisors don't find out about a denial by chance, and denials staff don't find out an outcome by chance either — the case carries its own history from denial through call through resolution."
      financialImpact={
        <p>
          This chain earns{" "}
          <strong className="text-charcoal">denial prevention</strong>,{" "}
          <strong className="text-charcoal">reduced avoidable days</strong>, and{" "}
          <strong className="text-charcoal">faster appeal turnaround</strong> — an
          overturned case never becomes an appeal at all, and an upheld case starts its
          appeal the moment the call ends.
        </p>
      }
      aiCapabilities="No named AI capability applies specifically to the P2P outcome — that's a physician advisor's clinical judgment, captured directly. Humans remain responsible for the P2P outcome; AI is not part of that determination."
      integrationCapabilities="P2P case data connects through the same EMR integration and payer connectivity as the rest of the platform, so a case carries the full context of the stay it belongs to."
      screenshots={[
        { src: "/screenshots/p2p-01-queue.png", alt: "MGear peer-to-peer queue" },
        { src: "/screenshots/p2p-02-calendar.png", alt: "MGear peer-to-peer calendar" },
        { src: "/screenshots/p2p-03-clinical-oversight.png", alt: "MGear medical director oversight view" },
      ]}
      faqs={[
        {
          question: "How does a physician advisor find out about a denial?",
          answer:
            "When a payer denies while the patient is still in-house, a P2P case is created and scheduled automatically — no one has to notice the denial and page the advisor separately.",
        },
        {
          question: "What happens after the call?",
          answer:
            "If the outcome is overturned, the stay is authorized and no appeal is needed. If it's upheld, an appeal is drafted automatically and deep-linked back into that exact case.",
        },
        {
          question: "Does AI decide the P2P outcome?",
          answer: "No. The physician advisor's judgment on the call determines the outcome. AI is not part of that decision.",
        },
        {
          question: "Where does my overturn rate get tracked?",
          answer:
            "P2P Management owns the canonical case record — the only place an outcome can be changed. Every dashboard that shows overturn rates or advisor performance, including what a CFO sees on an executive dashboard, reads from that same record.",
        },
      ]}
    >
      <h2 className="text-section font-semibold text-charcoal">
        The handoff that usually breaks
      </h2>
      <p className="mt-4 max-w-3xl text-body text-slate-600">
        In most hospitals, the handoff between authorization staff, physician advisors,
        and the appeals team means re-keying a case or emailing a spreadsheet at every
        step. That re-keying is the daily reality most physician advisors already know —
        this chain exists so it stops happening.
      </p>

      <h2 className="mt-10 text-section font-semibold text-charcoal">How it reaches you</h2>
      <ol className="mt-6 space-y-4">
        {[
          ["A payer denies while the patient is still in-house.", "It's recorded directly in Authorizations."],
          ["A P2P case is created and scheduled with you automatically.", "No one has to notice the denial and reach out separately."],
          ["You work the call and capture the outcome directly in the case.", ""],
          [
            "Overturned → the stay is authorized, no appeal needed.",
            "Upheld → an appeal is drafted automatically, deep-linked back into the exact case that produced it.",
          ],
          ["Overturn rates and advisor performance update in Analytics.", "The same canonical record every dashboard on the platform reads from."],
        ].map(([bold, rest], i) => (
          <li key={i} className="flex gap-4">
            <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand">
              {i + 1}
            </span>
            <p className="text-body text-slate-700">
              <strong className="font-semibold text-charcoal">{bold}</strong>{" "}
              {rest}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-10">
        <P2POutcomeDemo />
      </div>
    </SolutionPageLayout>
  );
}
