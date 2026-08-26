import type { Metadata } from "next";
import { ModulePageLayout } from "@/components/ModulePageLayout";

export const metadata: Metadata = {
  title: "Payer Communication — Hospital Payer Notification and Documentation Tracking",
  description:
    "Notifications, calls, and documentation sent to payers on time and logged automatically — proof of compliance, not just a claim of it.",
};

export default function Page() {
  return (
    <ModulePageLayout
      eyebrow="Module — Payer Communication"
      headline="Every Call and Document, Logged and Compliant by Default"
      subheadline="When Payor Grid's rules say what a payer needs, Payer Communication is the module that actually sends it — and proves it was sent."
      receives="notifications from Authorization Management; that payer's specific requirements from Payor Grid."
      sends="compliance data to Analytics."
      problem="Fragmented communication and missed payer notifications are named directly among the platform's core problems — a call that should have happened within 24 hours but happened on day three, a document sent to the wrong contact, a notification nobody can prove was sent when the payer disputes it later. This module exists so that work is logged as it happens, not reconstructed under pressure."
      whatItDoes="Notifications. Communications. Phone calls. Submitted documentation. Payer interactions."
      workflow="When Authorization Management flags that a payer needs to be notified, Payer Communication handles it directly — the call, the document, the interaction — governed by the exact requirements Payor Grid holds for that payer. Every outbound interaction is tracked in a delivery log, so 'we sent it' is something the platform can show, not something staff have to remember and defend later."
      businessValue="Staff aren't guessing which payer wants a fax versus a portal upload, or trying to recall whether a call happened last Tuesday or the Tuesday before. The requirement and the record of meeting it live in the same system."
      financialImpact={
        <p>
          This module contributes directly to{" "}
          <strong className="text-charcoal">improved payer compliance</strong> and{" "}
          <strong className="text-charcoal">reduced preventable denials</strong> — a
          documented, on-time notification is one less technicality a payer can use to
          deny a claim.
        </p>
      }
      aiCapabilities={
        <p>
          <strong className="text-charcoal">Payer Communication Assistant</strong>, one
          of MGear&apos;s named AI capabilities, reduces manual work in managing
          communications and documentation submission. AI assists operations. Humans
          remain responsible for every payer interaction.
        </p>
      }
      integrationCapabilities="Payer Communication operates alongside the platform's payer connectivity and EMR integration, so the record of an interaction ties back to the same patient stay and authorization it belongs to."
      screenshots={[
        { src: "/screenshots/payer-02-comm-director.png", alt: "MGear Payer Communication command center" },
        { src: "/screenshots/payer-03-transmissions.png", alt: "MGear outbound transmissions log" },
      ]}
      faqs={[
        {
          question: "How does Payer Communication know what each payer requires?",
          answer: "Payor Grid feeds it that payer's specific notification windows and documentation format automatically.",
        },
        {
          question: "Does the Payer Communication Assistant replace communication staff?",
          answer: "No. It assists with managing communications and documentation. Every payer interaction remains staff-managed.",
        },
        {
          question: "How do we know a notification was actually sent?",
          answer: "The outbound delivery log records every interaction as it happens.",
        },
      ]}
    />
  );
}
