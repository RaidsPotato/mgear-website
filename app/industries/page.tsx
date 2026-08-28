import type { Metadata } from "next";
import Link from "next/link";
import { ZoomableImage } from "@/components/ZoomableImage";
import { Section, Eyebrow } from "@/components/Section";
import { Button } from "@/components/Button";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Industries — MGear for Academic Medical Centers, Community, Critical Access, and Multi-Hospital Systems",
  description:
    "One connected operating platform, entered from five hospital types — academic medical centers, community hospitals, critical access hospitals, behavioral health, and multi-hospital systems.",
};

const industries = [
  {
    href: "/industries/academic-medical-centers",
    name: "Academic Medical Centers",
    desc: "The same connected platform, coordinating every department responsible for protecting revenue across a large, multi-department organization.",
  },
  {
    href: "/industries/community-hospitals",
    name: "Community Hospitals",
    desc: "One platform instead of a different disconnected tool for every department — coordinated in real time, while the patient is still admitted.",
  },
  {
    href: "/industries/critical-access-hospitals",
    name: "Critical Access Hospitals",
    desc: "License only the modules a facility actually needs — and the platform says so explicitly, instead of quietly reporting a zero for what wasn't purchased.",
  },
  {
    href: "/industries/behavioral-health",
    name: "Behavioral Health",
    desc: "The Providence behavioral health program: a program that cost $395K returned $4.87M net.",
  },
  {
    href: "/industries/multi-hospital-systems",
    name: "Multi-Hospital Systems",
    desc: "Deployed as one multi-hospital SaaS platform across the system, with each facility carrying only the modules it's licensed for.",
  },
];

const faqs = [
  {
    question: "What's different about MGear for my hospital type?",
    answer:
      "The platform is the same connected system described on Platform Overview for every hospital type. These five pages are entry points that lead with what matters most from that vantage — they aren't five different products.",
  },
  {
    question: "Do smaller or single-facility hospitals have to license all eleven modules?",
    answer:
      "No. Each facility carries the modules it's actually licensed for. A module a facility didn't license doesn't appear for its users, and the platform's analytics say so explicitly rather than silently reporting zero.",
  },
  {
    question: "Is MGear built to scale across a multi-hospital system?",
    answer:
      "Multi-hospital SaaS deployment and enterprise scalability are both stated platform capabilities, alongside cloud architecture and enterprise security.",
  },
];

export default function IndustriesHub() {
  return (
    <>
      <Section width="wide" className="pt-14 sm:pt-20">
        <div className="max-w-3xl">
          <Eyebrow>Industries</Eyebrow>
          <h1 className="text-page-title font-bold tracking-tight text-charcoal">
            Built for Every Hospital Type — One Platform Each Time
          </h1>
          <p className="mt-6 text-body text-slate-600">
            MGear is a hospital-only platform. These five pages are entry points into
            the same connected system, organized by hospital type instead of by
            department.
          </p>
        </div>
      </Section>

      <Section className="border-t border-slate-100" width="wide">
        <div className="grid gap-4 sm:grid-cols-2">
          {industries.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-xs transition-colors hover:border-brand/40"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-semibold text-charcoal group-hover:text-brand">
                  {s.name}
                </h3>
                <span className="text-brand opacity-0 transition-opacity group-hover:opacity-100">
                  →
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="border-t border-slate-100" width="wide">
        <div className="overflow-hidden rounded-xl border border-slate-200 shadow-md">
          <ZoomableImage
            src="/screenshots/analytics-01-executive-dashboard.png"
            alt="MGear executive dashboard — every module on one screen"
            width={2000}
            height={1250}
            className="h-auto w-full"
          />
        </div>
      </Section>

      <Section className="border-t border-slate-100" width="narrow">
        <h2 className="text-section font-semibold text-charcoal mb-6">FAQs</h2>
        <FAQAccordion items={faqs} />
      </Section>

      <Section width="wide" className="border-t border-slate-100">
        <div className="rounded-2xl bg-charcoal px-8 py-14 text-center sm:px-16">
          <h2 className="text-section font-semibold text-white">
            See the connection, not a slide deck.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/request-demo">Request Demo</Button>
            <Button
              href="/platform"
              variant="secondary"
              className="!bg-transparent !text-white !border-slate-500 hover:!border-white"
            >
              See How It Works
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
