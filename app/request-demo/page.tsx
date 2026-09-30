import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";

const BOOKING_URL =
  "https://bookings.cloud.microsoft/book/MGearDemo@bserved.us/?ismsaljsauthenabled";

export const metadata: Metadata = {
  title: "Request Demo",
  description:
    "Schedule a live walkthrough of how an authorization delay gets caught and resolved automatically — while the patient is still admitted.",
};

export default function RequestDemoPage() {
  return (
    <>
      <PageHero
        tone="dark"
        compact
        eyebrow="Request Demo"
        title="See the Connection, Not a Slide Deck"
        lead="A live walkthrough of how an authorization delay gets caught and resolved automatically — while the patient is still admitted."
      />

      <Section width="narrow">
        <div className="rounded-2xl border border-slate-200 bg-white px-8 py-10 text-center shadow-sm">
          <p className="text-section font-semibold text-charcoal">
            Pick a time that works for you
          </p>
          <p className="mx-auto mt-3 max-w-md text-body text-slate-600">
            Scheduling opens in Microsoft Bookings. Choose a slot and you&apos;ll get a
            calendar invite with the details.
          </p>
          <div className="mt-8">
            <Button href={BOOKING_URL} target="_blank">
              Schedule Your Demo
            </Button>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Prefer email?{" "}
          <Link href="/contact" className="font-medium text-brand hover:text-brand-dark">
            Contact us directly
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
