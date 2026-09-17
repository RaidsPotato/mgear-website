import type { Metadata } from "next";
import { ZoomableImage } from "@/components/ZoomableImage";
import { Section } from "@/components/Section";
import { ModulePageLayout } from "@/components/ModulePageLayout";

export const metadata: Metadata = {
  title: "Conversational Analytics — Governed AI Analytics for Hospitals",
  description:
    "Ask operational questions in plain language and get one governed answer — every dashboard reads the same canonical data, and a zero always means what it says.",
};

export default function Page() {
  return (
    <>
      <Section width="wide" className="pb-0 pt-8">
        <div className="rounded-lg border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900">
          This module&apos;s natural-language question-answering feature is being built
          ahead of go-to-market. This page is written present-tense per product
          leadership&apos;s ruling — and now doubles as the specification for that
          build.
        </div>
      </Section>
      <ModulePageLayout
        eyebrow="Module — Conversational Analytics"
        headline="One Question. One Governed Answer. One Number Everywhere Else Agrees With."
        subheadline="Ask in plain language. Get an answer inside your hospital's own permission model — not an open chatbot over the chart, and not a dashboard that quietly disagrees with the workflow that produced it."
        receives="a governed, read-only feed from every module on the platform. This module never holds its own version of a fact."
        sends="answers to natural-language executive questions, inside the hospital's own permission model and data boundaries; honest disclosure when a facility's data is excluded rather than a false zero."
        problem="Two problems, both familiar to any hospital executive. First: getting an answer to an operational question usually means asking someone to build a report, and waiting. Second: when two dashboards disagree — and they often do — nobody can say which one is right. This module answers questions directly, from one place, so there's nothing left to disagree with."
        whatItDoes={'Executives ask in natural language — "show me missed admission opportunities this month." Governed enterprise analytics, not unrestricted AI.'}
        workflow={
          <>
            <p>
              A question comes in as plain language. The answer is drawn from the same
              data every other view on the platform reads.
            </p>
            <p className="mt-4">
              <strong className="text-charcoal">One number, one owner:</strong> the P2P
              module owns the case record — every P2P metric anywhere in Analytics reads
              from that one record. This analytics hub is read-only by design; it cannot
              disagree with the workflow, because it never computes its own version.
            </p>
            <p className="mt-4">
              <strong className="text-charcoal">A zero means not sent, not none
              happened:</strong> each facility carries only the modules it&apos;s
              actually licensed for. A module a facility didn&apos;t buy doesn&apos;t
              appear for its users — and analytics for that module say which facilities
              are excluded, rather than silently reporting a misleading zero.
            </p>
          </>
        }
        businessValue="An executive gets an answer without waiting on a report request. A dashboard number is something the team can act on, not something the next meeting spends ten minutes arguing about."
        financialImpact={
          <p>
            This module earns{" "}
            <strong className="text-charcoal">reimbursement accuracy</strong> and, in
            the source material&apos;s own words, &ldquo;a number the executive team
            will actually act on.&rdquo;
          </p>
        }
        aiCapabilities={
          <p>
            <strong className="text-charcoal">Conversational Analytics</strong>, one of
            MGear&apos;s named AI capabilities, answers the natural-language question.
            AI assists operations by surfacing what the data already shows — humans
            remain responsible for every decision made from it.
          </p>
        }
        integrationCapabilities="This module doesn't integrate with an external system directly — it reads from every other module on the platform, all of which are fed by EMR integration underneath."
        futureRoadmap="This page's copy is the build specification for the natural-language question layer, which ships ahead of go-to-market. The canonical-ownership and honest-zero behaviors described above are architectural commitments."
        screenshots={[]}
        faqs={[
          {
            question: "Is this an open AI chatbot over our data?",
            answer: "No. It's governed — every answer stays inside the hospital's own permission model and data boundaries.",
          },
          {
            question: "Why do MGear's dashboards never disagree with each other?",
            answer: "Because they all read from the same canonical record instead of each calculating its own version. There's one owner per fact.",
          },
          {
            question: "What does a 0% rate mean on this platform?",
            answer: "It means zero occurred — not that data didn't arrive. If a facility's data is excluded for a metric, the platform says so rather than showing a misleading zero.",
          },
        ]}
      />
      <Section width="wide" className="border-t border-slate-100">
        <div className="overflow-hidden rounded-xl border border-slate-200 shadow-md">
          <ZoomableImage
            src="/screenshots/analytics-01-executive-dashboard.png"
            alt="MGear analytics hub — the governed data foundation this module's natural-language layer sits on top of"
            width={2000}
            height={1250}
            className="h-auto w-full"
          />
        </div>
        <p className="mt-3 text-sm text-slate-500">
          The analytics hub shown above is real and captured today — the natural-language
          question layer itself isn&apos;t built yet.
        </p>
      </Section>
    </>
  );
}
