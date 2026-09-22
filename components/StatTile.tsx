import { AnimatedStat } from "@/components/AnimatedStat";

export function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-brand/20 bg-[#f2f9f4] px-5 py-5">
      <p className="text-sm text-slate-600">{label}</p>
      <AnimatedStat
        value={value}
        className="mt-1 block text-2xl font-bold text-gradient-brand"
      />
    </div>
  );
}
