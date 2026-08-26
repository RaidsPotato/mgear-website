import type { Metadata } from "next";
import Link from "next/link";
import { Section, Eyebrow } from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How MGear collects, uses, and protects information submitted through this website.",
};

export default function PrivacyPage() {
  return (
    <Section width="narrow" className="pt-14 pb-20 sm:pt-20">
      <Eyebrow>Privacy Policy</Eyebrow>
      <h1 className="mt-2 text-page-title font-bold tracking-tight text-charcoal">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: August 21, 2026</p>

      <div className="mt-10 space-y-8 text-body text-slate-600">
        <p>
          This policy covers <strong className="text-charcoal">mgear.ai</strong>, MGear&apos;s
          marketing website. It does not cover the MGear product itself, which hospitals use
          under separate agreements — including, where applicable, a HIPAA business associate
          agreement governing clinical and administrative data inside the product. Nothing on
          this website processes patient health information.
        </p>

        <section>
          <h2 className="text-section font-semibold text-charcoal">Information we collect</h2>
          <p className="mt-3">
            When you submit a form on this site — Request Demo, Contact, or similar — we collect
            what you provide directly: name, work email, hospital or health system, job title,
            phone number if given, and any message content. Like most websites, our servers also
            log standard technical information automatically: IP address, browser and device
            type, and the pages requested.
          </p>
        </section>

        <section>
          <h2 className="text-section font-semibold text-charcoal">How we use it</h2>
          <p className="mt-3">
            We use the information you submit to respond to your inquiry, schedule a demo or
            call, and follow up about MGear. We use technical log data to operate, secure, and
            improve the site. We do not sell your personal information.
          </p>
        </section>

        <section>
          <h2 className="text-section font-semibold text-charcoal">Cookies</h2>
          <p className="mt-3">
            This site does not currently use analytics or advertising cookies. If that changes,
            this policy will be updated to describe what&apos;s used and how to opt out.
          </p>
        </section>

        <section>
          <h2 className="text-section font-semibold text-charcoal">Sharing</h2>
          <p className="mt-3">
            We don&apos;t sell or rent your information. We may share it with service providers
            who help us operate this website (for example, hosting or email delivery), bound to
            use it only for that purpose, or when required by law.
          </p>
        </section>

        <section>
          <h2 className="text-section font-semibold text-charcoal">Security</h2>
          <p className="mt-3">
            We take reasonable measures to protect information submitted through this site. No
            method of transmission or storage is completely secure, and we can&apos;t guarantee
            absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-section font-semibold text-charcoal">Your choices</h2>
          <p className="mt-3">
            To ask what information we hold about you, or to request that it be corrected or
            deleted, reach us through the{" "}
            <Link href="/contact" className="font-medium text-brand hover:text-brand-dark">
              Contact
            </Link>{" "}
            page.
          </p>
        </section>

        <section>
          <h2 className="text-section font-semibold text-charcoal">Children&apos;s privacy</h2>
          <p className="mt-3">
            This site is intended for hospital administrators and healthcare professionals and
            is not directed at children. We do not knowingly collect information from children.
          </p>
        </section>

        <section>
          <h2 className="text-section font-semibold text-charcoal">Changes to this policy</h2>
          <p className="mt-3">
            We may update this policy from time to time. The date at the top reflects the most
            recent revision.
          </p>
        </section>

        <section>
          <h2 className="text-section font-semibold text-charcoal">Governing law</h2>
          <p className="mt-3">
            [State/jurisdiction of incorporation to be added.] Contact us through the{" "}
            <Link href="/contact" className="font-medium text-brand hover:text-brand-dark">
              Contact
            </Link>{" "}
            page with any questions about this policy.
          </p>
        </section>
      </div>
    </Section>
  );
}
