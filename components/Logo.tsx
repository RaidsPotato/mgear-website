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

/** Just the mark, no wordmark and no link — for contexts that need their
 * own click behavior (the collapsed header bubble), where nesting the
 * full `Logo` (an anchor) inside another interactive element would be
 * invalid HTML. */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/MGearLogo.png"
      alt=""
      width={28}
      height={28}
      className={`h-7 w-7 ${className}`}
    />
  );
}
