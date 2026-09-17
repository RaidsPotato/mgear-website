"use client";

import { useState } from "react";
import { Section, Eyebrow } from "@/components/Section";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Section width="wide" className="pt-14 sm:pt-20">
        <div className="max-w-3xl">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="text-page-title font-bold tracking-tight text-charcoal">
            Talk to MGear
          </h1>
          <p className="mt-6 text-body text-slate-600">
            For a live walkthrough, use Request Demo. For everything else, reach us
            below.
          </p>
        </div>
      </Section>

      <Section className="border-t border-slate-100" width="narrow">
        <div className="rounded-lg border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900">
          A real sales alias and support contact are still placeholders — this form
          isn&apos;t yet connected to a live inbox or CRM. Submitting below only shows a
          local confirmation.
        </div>

        {submitted ? (
          <div className="mt-8 rounded-xl border border-brand/20 bg-[#f2f9f4] px-6 py-8 text-center">
            <p className="text-section font-semibold text-charcoal">Thanks — we&apos;ll be in touch.</p>
            <p className="mt-2 text-body text-slate-600">
              This confirmation is a placeholder until a live contact destination is
              wired up.
            </p>
          </div>
        ) : (
          <form
            className="mt-8 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-charcoal">Full name</span>
                <input
                  required
                  type="text"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-body text-charcoal focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-charcoal">Email</span>
                <input
                  required
                  type="email"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-body text-charcoal focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-sm font-medium text-charcoal">Message</span>
              <textarea
                required
                rows={5}
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-body text-charcoal focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark hover:shadow-md"
            >
              Send Message
            </button>
          </form>
        )}
      </Section>
    </>
  );
}
