"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { primaryNav } from "@/lib/nav";

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <Logo />

        <nav className="hidden items-center gap-1 xl:flex">
          {primaryNav.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.children && setOpenMenu(item.href)}
              onMouseLeave={() => item.children && setOpenMenu(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:text-brand"
              >
                {item.label}
                {item.children && (
                  <svg width="10" height="6" viewBox="0 0 10 6" className="mt-0.5 fill-current">
                    <path d="M0 0 L5 6 L10 0 Z" />
                  </svg>
                )}
              </Link>
              {item.children && (
                <div
                  className={clsx(
                    "absolute left-0 top-full w-72 rounded-lg border border-slate-200 bg-white p-2 shadow-lg transition-all",
                    openMenu === item.href
                      ? "visible opacity-100 translate-y-0"
                      : "invisible -translate-y-1 opacity-0"
                  )}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-surface-alt hover:text-brand"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Button href="/request-demo">Request Demo</Button>
        </div>

        <button
          className="xl:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" className="stroke-charcoal" fill="none" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 px-6 py-4 xl:hidden">
          <nav className="flex flex-col gap-1">
            {primaryNav.map((item) => (
              <div key={item.href}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="flex-1 rounded-md px-2 py-2 text-sm font-medium text-slate-700 hover:text-brand"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} submenu`}
                      onClick={() =>
                        setMobileSection((prev) => (prev === item.href ? null : item.href))
                      }
                      className="p-2 text-slate-500"
                    >
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        className={clsx(
                          "fill-current transition-transform",
                          mobileSection === item.href && "rotate-180"
                        )}
                      >
                        <path d="M0 0 L5 6 L10 0 Z" />
                      </svg>
                    </button>
                  )}
                </div>
                {item.children && mobileSection === item.href && (
                  <div className="ml-3 flex flex-col gap-1 border-l border-slate-200 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="rounded-md px-2 py-2 text-sm text-slate-600 hover:text-brand"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <Button href="/request-demo" className="mt-3 w-full">
            Request Demo
          </Button>
        </div>
      )}
    </header>
  );
}
