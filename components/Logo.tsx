import Link from "next/link";
import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 group ${className}`}>
      <Image src="/MGearLogo.png" alt="" width={28} height={28} className="h-7 w-7" />
      <span className="text-lg font-semibold text-charcoal tracking-tight">MGear</span>
    </Link>
  );
}
