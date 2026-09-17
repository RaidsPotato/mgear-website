import type { Metadata } from "next";
import Link from "next/link";
import { Section, Eyebrow } from "@/components/Section";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Resources — MGear",
  description: "Case studies and resources on the MGear hospital revenue cycle operating platform.",
};

export default function ResourcesPage() {
  return (
    <>
      <Section width="wide" className="pt-14 sm:pt-20">
        <div className="max-w-3xl">
          <Eyebrow>Resources</Eyebrow>
          <h1 className="text-page-title font-bold tracking-tight text-charcoal">
            Resources
          </h1>
          <p className="mt-6 text-body text-slate-600">
            This section is being built out. Today, the one published resource is the
            Providence behavioral health case study.
          </p>
        </div>
      </Section>

      <Section className="border-t border-slate-100" width="wide">
        <div className="rounded-lg border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900">
          No additional resources — whitepapers, webinars, or further case studies —
          are published yet. This page will grow as they become available.
        </div>

        <Link
          href="/results"
          className="group mt-6 flex max-w-md items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-xs transition-colors hover:border-brand/40"
        >
          <div>
            <p className="font-semibold text-charcoal group-hover:text-brand">
              Providence Behavioral Health Case Study
            </p>
            <p className="mt-1 text-sm text-slate-500">$395K cost → $4.87M net</p>
          </div>
          <span className="text-brand opacity-0 transition-opacity group-hover:opacity-100">→</span>
        </Link>
      </Section>

      <Section width="wide" className="border-t border-slate-100">
        <div className="rounded-2xl bg-charcoal px-8 py-14 text-center sm:px-16">
          <h2 className="text-section font-semibold text-white">
            Start with the one result on the books.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/results">See the Case Study</Button>
            <Button
              href="/request-demo"
              variant="secondary"
              className="!bg-transparent !text-white !border-slate-500 hover:!border-white"
            >
              Request Demo
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
