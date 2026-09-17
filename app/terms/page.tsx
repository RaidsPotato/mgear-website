import type { Metadata } from "next";
import Link from "next/link";
import { Section, Eyebrow } from "@/components/Section";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing use of the MGear marketing website.",
};

export default function TermsPage() {
  return (
    <Section width="narrow" className="pt-14 pb-20 sm:pt-20">
      <Eyebrow>Terms of Service</Eyebrow>
      <h1 className="mt-2 text-page-title font-bold tracking-tight text-charcoal">
        Terms of Service
      </h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: August 21, 2026</p>

      <div className="mt-10 space-y-8 text-body text-slate-600">
        <p>
          These terms govern use of <strong className="text-charcoal">mgear.ai</strong>, MGear&apos;s
          marketing website. They don&apos;t cover the MGear product itself, which hospitals
          license under a separate agreement. By using this site, you agree to these terms.
        </p>

        <section>
          <h2 className="text-section font-semibold text-charcoal">Use of this site</h2>
          <p className="mt-3">
            This site is provided to give hospitals and health systems information about the
            MGear platform. You agree to use it only for lawful purposes, and not to attempt to
            scrape, disrupt, or gain unauthorized access to it or the systems behind it.
          </p>
        </section>

        <section>
          <h2 className="text-section font-semibold text-charcoal">Intellectual property</h2>
          <p className="mt-3">
            The content on this site — including the MGear name, logo, and the copy, screenshots,
            and figures describing the platform — belongs to MGear or its licensors. Nothing here
            grants you a license to use it beyond viewing this site, unless we agree otherwise in
            writing.
          </p>
        </section>

        <section>
          <h2 className="text-section font-semibold text-charcoal">No warranties</h2>
          <p className="mt-3">
            This site and its content are provided &ldquo;as is,&rdquo; without warranties of any
            kind, express or implied. Statements about the MGear platform&apos;s capabilities are
            described in detail throughout the site; nothing here is a substitute for the terms
            of an actual service agreement.
          </p>
        </section>

        <section>
          <h2 className="text-section font-semibold text-charcoal">Limitation of liability</h2>
          <p className="mt-3">
            To the fullest extent permitted by law, MGear is not liable for any indirect,
            incidental, or consequential damages arising from your use of this site.
          </p>
        </section>

        <section>
          <h2 className="text-section font-semibold text-charcoal">Third-party links</h2>
          <p className="mt-3">
            This site may link to third-party resources. We aren&apos;t responsible for the
            content or practices of sites we don&apos;t operate.
          </p>
        </section>

        <section>
          <h2 className="text-section font-semibold text-charcoal">Changes to these terms</h2>
          <p className="mt-3">
            We may update these terms from time to time. The date at the top reflects the most
            recent revision.
          </p>
        </section>

        <section>
          <h2 className="text-section font-semibold text-charcoal">Governing law</h2>
          <p className="mt-3">
            [State/jurisdiction of incorporation to be added.] Questions about these terms can be
            sent through the{" "}
            <Link href="/contact" className="font-medium text-brand hover:text-brand-dark">
              Contact
            </Link>{" "}
            page.
          </p>
        </section>
      </div>
    </Section>
  );
}
