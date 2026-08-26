import clsx from "clsx";

/**
 * The only place semantic status colors (approved/denied/pending/etc.) may be
 * used on this site — always inside this pill shape, always with a text label.
 * Never a plain color fill, never a button, never a heading. This is the
 * "shape + context" rule that keeps status green visually distinct from
 * brand green. See 04-BRAND-KIT.md and the site's open-items log (OPEN-8).
 */
type Status = "approved" | "denied" | "pending" | "info" | "resolved";

const statusStyles: Record<Status, string> = {
  approved: "bg-[#4fb437]/10 text-[#3a8a28] border border-[#4fb437]/30",
  denied: "bg-[#df6060]/10 text-[#c23f3f] border border-[#df6060]/30",
  pending: "bg-[#ffc53d]/15 text-[#8a6a00] border border-[#ffc53d]/40",
  info: "bg-[#40a9ff]/10 text-[#1c73b8] border border-[#40a9ff]/30",
  resolved: "bg-[#21d27d]/10 text-[#178a54] border border-[#21d27d]/30",
};

export function StatusBadge({
  status,
  children,
}: {
  status: Status;
  children: React.ReactNode;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        statusStyles[status]
      )}
    >
      {children}
    </span>
  );
}
