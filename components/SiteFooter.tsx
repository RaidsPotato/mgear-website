import Link from "next/link";
import { Logo } from "./Logo";
import { footerColumns } from "@/lib/nav";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-surface-alt">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              The Real-Time Mid-Revenue Cycle Operating Platform.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.heading}>
              <p className="eyebrow mb-3">{col.heading}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-brand"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} MGear. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-brand">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
