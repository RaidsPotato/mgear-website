import { Section } from "@/components/Section";

// The package's rule (00-START-HERE.md): every page ends with an open-items
// block where applicable, so claims that have not been verified stay visible
// instead of being silently asserted. Same amber treatment as the other
// "not final" notices on the site (Pricing, Company, the unbuilt modules).
export function OpenItems({ items }: { items: string[] }) {
  return (
    <Section width="narrow">
      <div className="rounded-lg border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900">
        <p className="font-semibold">Open items on this page</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
