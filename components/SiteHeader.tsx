"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Logo, LogoMark } from "./Logo";
import { Button } from "./Button";
import { primaryNav } from "@/lib/nav";

// How far past the top the bar collapses into a bubble by default.
const COLLAPSE_AFTER_PX = 140;
// Below this, it's always the full bar — the "back at the top" reset.
const TOP_RESET_PX = 40;
// Once manually re-expanded, how much further scroll (either direction)
// before it folds itself back into the bubble.
const REEXPAND_SCROLL_DELTA = 80;

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState(false);
  // Scroll position at the moment the user last clicked to re-expand it —
  // null whenever collapse state is just following the default scroll rule.
  const expandedAtRef = useRef<number | null>(null);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;

      if (y < TOP_RESET_PX) {
        setCollapsed(false);
        expandedAtRef.current = null;
        return;
      }

      if (expandedAtRef.current !== null) {
        if (Math.abs(y - expandedAtRef.current) > REEXPAND_SCROLL_DELTA) {
          setCollapsed(true);
          expandedAtRef.current = null;
        }
        return;
      }

      setCollapsed(y > COLLAPSE_AFTER_PX);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function expand() {
    setCollapsed(false);
    expandedAtRef.current = window.scrollY;
  }

  // A collapse should never leave a dropdown or the mobile panel stranded
  // open behind the bubble.
  useEffect(() => {
    if (collapsed) {
      setOpenMenu(null);
      setMobileOpen(false);
      setMobileSection(null);
    }
  }, [collapsed]);

  const barIsOpen = !collapsed && mobileOpen;

  return (
    <header
      className={clsx(
        // `fixed`, not `sticky` — see the earlier note: a sticky header
        // stays in flow and leaves plain white showing around the island,
        // fixed lets the page's own background render behind it.
        // No overflow-hidden here — the desktop dropdown submenus render as
        // absolutely-positioned children that extend below this box, and
        // overflow-hidden on the header was clipping them out of view. The
        // collapse animation doesn't actually need it: the full-bar content
        // fades out via opacity faster than the width transition runs, so
        // there's nothing left visible to clip by the time the box has
        // narrowed enough for it to matter.
        "fixed left-3 top-3 z-50 border border-slate-200/80 bg-white/95 shadow-lg shadow-slate-900/5 backdrop-blur-md transition-[width,height,border-radius] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:left-5 sm:top-4 lg:left-8",
        collapsed
          ? "h-12 w-12 rounded-full sm:h-14 sm:w-14"
          : clsx(
              "w-[calc(100vw-1.5rem)] rounded-2xl sm:w-[calc(100vw-2.5rem)] lg:w-[calc(100vw-4rem)]",
              barIsOpen ? "h-auto" : "h-12 sm:h-14"
            )
      )}
    >
      {/* Bubble: only ever visible while collapsed, fades in under the
          shrinking box rather than popping in at the end. */}
      <button
        type="button"
        onClick={expand}
        aria-label="Show navigation"
        className={clsx(
          "absolute inset-0 flex items-center justify-center transition-opacity duration-200",
          collapsed ? "opacity-100 delay-200" : "pointer-events-none opacity-0"
        )}
      >
        <LogoMark />
      </button>

      {/* Full bar: fades out first, then the box shrinks around it. */}
      <div
        className={clsx(
          "transition-opacity duration-150",
          collapsed ? "pointer-events-none opacity-0" : "opacity-100"
        )}
      >
        <div className="flex h-12 w-full items-center justify-between gap-4 px-5 sm:h-14 sm:px-7">
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
          <div className="border-t border-slate-200 px-5 py-4 xl:hidden">
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
      </div>
    </header>
  );
}
