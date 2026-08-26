export function TagGrid({
  items,
  tone = "neutral",
}: {
  items: string[];
  tone?: "neutral" | "brand";
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-sm ${
            tone === "brand"
              ? "border-brand/30 bg-brand/5 text-brand"
              : "border-slate-200 bg-white text-slate-700"
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
