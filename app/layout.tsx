import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RouteProgressBar } from "@/components/RouteProgressBar";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MGear — Real-Time Hospital Revenue Cycle Operating Platform",
    template: "%s | MGear",
  },
  description:
    "MGear connects utilization management, authorization, denials, and payer communication into one real-time platform — coordinated while the patient is still admitted.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: "MGear",
                description:
                  "MGear is the Real-Time Mid-Revenue Cycle Operating Platform — operational AI infrastructure for hospitals.",
              },
              {
                "@type": "SoftwareApplication",
                name: "MGear",
                applicationCategory: "BusinessApplication",
                description:
                  "A real-time mid-revenue cycle operating platform for hospitals that connects utilization management, authorization, peer-to-peer reviews, denials, payer communication and analytics into one process, and integrates with EHRs via FHIR and HL7.",
              },
            ],
          }}
        />
        <RouteProgressBar />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
