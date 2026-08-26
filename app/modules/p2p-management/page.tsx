import type { Metadata } from "next";
import { ModulePageLayout } from "@/components/ModulePageLayout";
import { P2POutcomeDemo } from "@/components/P2POutcomeDemo";

export const metadata: Metadata = {
  title: "P2P Management — Physician Advisor Peer-to-Peer Scheduling Software",
  description:
    "A denial becomes a scheduled peer-to-peer call automatically — the outcome routes itself to authorization or appeals without re-entering the case.",
};

export default function Page() {
  return (
    <ModulePageLayout
      eyebrow="Module — P2P Management"
      headline="One Outcome, and It Routes Itself"
      subheadline="A denial becomes a scheduled peer-to-peer call automatically. What the advisor decides on that call determines what happens next — without anyone re-entering the case."
      receives="physician escalations from Utilization Management; denial cases from Authorization Management."
      sends="overturned outcomes back to Authorization (stay authorized, no appeal needed); upheld outcomes to Denial Management, where an appeal is drafted automatically; overturn rates and advisor performance to Analytics."
      problem="In most hospitals, the handoff between authorization staff, physician advisors, and the appeals team means re-keying a case or emailing a spreadsheet at every step. This module exists so that handoff happens without anyone doing that — the case moves itself."
      whatItDoes="Physician-advisor escalations. Peer-to-peer scheduling. Outcome capture. Overturn rates. Advisor performance. Denial prevention."
      workflow={
        <>
          <p>
            A payer denies while the patient is still in-house. A P2P case is created
            and scheduled with the physician advisor automatically. The advisor works
            the call and captures the outcome directly in the case:
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5">
            <li><strong className="text-charcoal">Overturned</strong> → the stay is authorized. No appeal needed.</li>
            <li><strong className="text-charcoal">Upheld</strong> → an appeal is drafted automatically, deep-linked back into the exact case that produced it.</li>
          </ul>
          <p className="mt-4">
            P2P Management owns the canonical case record — it&apos;s the only place a
            P2P outcome can be changed. Every P2P metric anywhere on the platform,
            including the numbers a CFO sees on an executive dashboard, reads from this
            same record rather than a separate copy.
          </p>
        </>
      }
      businessValue="A physician advisor doesn't have to be told about a denial by someone else, and the appeals team doesn't have to be told the outcome by someone else either. The case carries its own history from denial through call through resolution."
      interactiveDemo={<P2POutcomeDemo />}
      financialImpact={
        <p>
          This module earns{" "}
          <strong className="text-charcoal">denial prevention</strong>,{" "}
          <strong className="text-charcoal">reduced avoidable days</strong>, and{" "}
          <strong className="text-charcoal">faster appeal turnaround</strong> — an
          overturned case never becomes an appeal at all, and an upheld case starts its
          appeal the moment the call ends.
        </p>
      }
      aiCapabilities="No named AI capability applies specifically to P2P Management — this module's outcome is a physician advisor's clinical judgment, captured directly. Humans remain responsible for the P2P outcome; AI is not part of that determination."
      integrationCapabilities="P2P case data connects through the same EMR integration and payer connectivity as the rest of the platform, so a case carries the full context of the stay it belongs to."
      screenshots={[
        { src: "/screenshots/p2p-01-queue.png", alt: "MGear peer-to-peer queue" },
        { src: "/screenshots/p2p-02-calendar.png", alt: "MGear peer-to-peer calendar" },
      ]}
      faqs={[
        {
          question: "What happens after a P2P outcome is captured?",
          answer: "If overturned, the stay is authorized and no appeal is needed. If upheld, an appeal is drafted automatically and linked back to that case.",
        },
        {
          question: 'Where does the "official" P2P outcome live?',
          answer: "In the P2P module — it's the only place the outcome can be changed. Every dashboard elsewhere on the platform reads from that same record.",
        },
        {
          question: "Does AI decide the P2P outcome?",
          answer: "No. The physician advisor's judgment on the call determines the outcome. AI is not part of that decision.",
        },
      ]}
    />
  );
}
