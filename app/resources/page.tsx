import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Resources — MGear",
  description: "Case studies and resources on the MGear hospital revenue cycle operating platform.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        tone="dark"
        eyebrow="Resources"
        title="Resources"
        lead="This section is being built out. Today, the one published resource is the Providence behavioral health case study."
      />

      <Section width="wide">
        <div className="rounded-lg border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900">
          No additional resources — whitepapers, webinars, or further case studies —
          are published yet. This page will grow as they become available.
        </div>

        <Link
          href="/results"
          className="group mt-8 flex max-w-md items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition-colors hover:border-brand/40 hover:shadow-md"
        >
          <div>
            <p className="font-semibold text-charcoal group-hover:text-brand">
              Providence Behavioral Health Case Study
            </p>
            <p className="mt-1 text-sm text-slate-500">$395K cost &rarr; $4.87M net</p>
          </div>
          <span className="text-brand opacity-40 transition-all group-hover:translate-x-0.5 group-hover:opacity-100">
            &rarr;
          </span>
        </Link>
      </Section>

      <Section width="wide" tone="dark">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-display font-semibold text-white">
            Start with the one result on the books.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/results">See the Case Study</Button>
            <Button
              href="/request-demo"
              variant="inverse"
            >
              Request Demo
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
