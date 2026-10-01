"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
// Bubble diameter in px, matching h-12/w-12 and sm:h-14/sm:w-14 below —
// kept as numbers (not just Tailwind classes) because the clip-path that
// draws the bubble has to be computed in JS.
const BUBBLE_BASE = 48;
const BUBBLE_SM = 56;

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  // Where the open dropdown should render — it's portaled to document.body
  // (see the comment above the portal below for why), so it needs its own
  // screen position rather than relying on normal DOM-flow positioning
  // relative to its trigger.
  const [dropdownPos, setDropdownPos] = useState<{ left: number; top: number } | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState(false);
  const [bubbleSize, setBubbleSize] = useState(BUBBLE_BASE);
  // Scroll position at the moment the user last clicked to re-expand it —
  // null whenever collapse state is just following the default scroll rule.
  const expandedAtRef = useRef<number | null>(null);
  // Debounces closing the dropdown so moving the mouse from the trigger
  // down into the portaled panel below it doesn't flicker-close it.
  const closeMenuTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openDropdown(href: string, trigger: HTMLElement) {
    if (closeMenuTimerRef.current) {
      clearTimeout(closeMenuTimerRef.current);
      closeMenuTimerRef.current = null;
    }
    const rect = trigger.getBoundingClientRect();
    setDropdownPos({ left: rect.left, top: rect.bottom });
    setOpenMenu(href);
  }

  function scheduleCloseDropdown() {
    closeMenuTimerRef.current = setTimeout(() => setOpenMenu(null), 150);
  }

  function cancelCloseDropdown() {
    if (closeMenuTimerRef.current) {
      clearTimeout(closeMenuTimerRef.current);
      closeMenuTimerRef.current = null;
    }
  }

  useEffect(() => {
    function updateBubbleSize() {
      setBubbleSize(window.innerWidth >= 640 ? BUBBLE_SM : BUBBLE_BASE);
    }
    updateBubbleSize();
    window.addEventListener("resize", updateBubbleSize);
    return () => window.removeEventListener("resize", updateBubbleSize);
  }, []);

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
      cancelCloseDropdown();
      setOpenMenu(null);
      setMobileOpen(false);
      setMobileSection(null);
    }
  }, [collapsed]);

  // The pill-to-circle morph, as a clip-path rather than animating width/
  // height directly. width/height are layout properties — every frame of
  // that animation forced the browser to re-run layout for the header's
  // subtree, which is what read as choppy. clip-path is paint-only (no
  // layout pass), and both states below use the same `inset()` function so
  // the browser interpolates smoothly between them instead of snapping.
  const clipPath = collapsed
    ? `inset(0px calc(100% - ${bubbleSize}px) calc(100% - ${bubbleSize}px) 0px round 9999px)`
    : "inset(0px round 16px)";

  // The content row (logo/nav/CTA) gets clipped by this SAME shrinking
  // corner, not just opacity-faded — see the comment on the content div
  // below for why: a separate opacity fade can't track the shape's heavily
  // front-loaded easing, so text was left exposed over bare background
  // after the shape already looked done shrinking. Deliberately the exact
  // same structural form as the shape's own two states above (same units,
  // same `inset()` shape, just a different end target) rather than some
  // "large negative inset = unclipped" trick — that's what the shape
  // itself already demonstrably animates smoothly, so content gets the
  // identical, proven-safe transition instead of a novel one. Goes one
  // step further than the shape's own target and collapses to a
  // zero-size point (not bubbleSize) so the Logo is fully gone by the
  // time the LogoMark bubble button fades in — otherwise both would
  // render in the same spot at once. The expanded state now matches the
  // box exactly (same as the shape's `inset(0px round 16px)`), which
  // would clip the hover dropdowns if they were still DOM descendants —
  // they're portaled to document.body instead (see below) specifically
  // so this clip-path can stay this simple.
  const contentClipPath = collapsed
    ? "inset(0px 100% 100% 0px round 9999px)"
    : "inset(0px round 16px)";

  return (
    <header className="fixed left-3 top-3 z-50 sm:left-5 sm:top-4 lg:left-8">
      {/* This wrapper's own size never changes — only the clip-path drawn
          on the shape and content layers inside it does. Nothing here ever
          animates width/height. The content layer's clip-path matches this
          box's own edges while expanded, which would clip the hover
          dropdowns if they were descendants of it — they're portaled to
          document.body instead (see below), so that's never an issue. */}
      <div className="relative h-12 w-[calc(100vw-1.5rem)] sm:h-14 sm:w-[calc(100vw-2.5rem)] lg:w-[calc(100vw-4rem)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 border border-slate-200/80 bg-white shadow-lg shadow-slate-900/5 transition-[clip-path] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] [will-change:clip-path]"
          style={{ clipPath }}
        />

        {/* Bubble: only ever visible while collapsed, fades in under the
            shrinking shape rather than popping in at the end. */}
        <button
          type="button"
          onClick={expand}
          aria-label="Show navigation"
          className={clsx(
            "absolute left-0 top-0 flex h-12 w-12 items-center justify-center transition-opacity duration-200 sm:h-14 sm:w-14",
            collapsed ? "opacity-100 delay-200" : "pointer-events-none opacity-0"
          )}
        >
          <LogoMark />
        </button>

        {/* Full bar content, clipped by the SAME shrinking corner as the
            shape layer above (contentClipPath), not just opacity-faded.
            Why: opacity on a timer can't track the shape's heavily
            front-loaded easing (cubic-bezier(0.22,1,0.36,1) — the shape
            visually finishes shrinking well before its transition's
            literal 400ms end), so a staggered fade kept leaving text
            exposed over bare background after the bar already looked
            collapsed. Clipping with the exact same geometry guarantees
            content can never be visible outside where the white shape
            is — and the left-to-right "wipe" that creates is what gives
            the chronological disappear/reappear order, with no per-item
            delay math needed. `absolute inset-0`, matching the shape/
            bubble layers above — mixing this as a normal static-flow
            sibling alongside those absolutely-positioned ones (under a
            `position: fixed` header) made the browser silently fail to
            paint it at all in testing, even though every computed style
            said it was visible. Keeping all three layers the same
            positioning type avoids that. */}
        <div
          className={clsx(
            "absolute inset-0 flex h-12 items-center justify-between gap-4 px-5 transition-[clip-path] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] [will-change:clip-path] sm:h-14 sm:px-7",
            collapsed && "pointer-events-none"
          )}
          style={{ clipPath: contentClipPath }}
        >
          <Logo />

          <nav className="hidden items-center gap-1 xl:flex">
            {primaryNav.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={(e) => item.children && openDropdown(item.href, e.currentTarget)}
                onMouseLeave={() => item.children && scheduleCloseDropdown()}
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
      </div>

      {/* Modules/Solutions/Industries hover panel, portaled to document.body.
          It used to live inside the content row above, but that row now
          gets clipped to the box's exact edges while expanded (see
          contentClipPath above) — a DOM descendant would get clipped off
          too, since it extends below the row's own bottom edge. A portal
          sidesteps that: it isn't a descendant of the clipped element at
          all, regardless of any clip-path/containing-block edge case, so
          it needs its own screen position instead of relying on `top-full`
          relative to its trigger (set in openDropdown via
          getBoundingClientRect). openDropdown/scheduleCloseDropdown/
          cancelCloseDropdown debounce the open/close so moving the mouse
          from the trigger down into this panel doesn't flicker-close it
          despite the two no longer being nested in the DOM. */}
      {openMenu &&
        dropdownPos &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed z-50 w-72 rounded-lg border border-slate-200 bg-white p-2 shadow-lg"
            style={{ left: dropdownPos.left, top: dropdownPos.top }}
            onMouseEnter={cancelCloseDropdown}
            onMouseLeave={scheduleCloseDropdown}
          >
            {primaryNav
              .find((item) => item.href === openMenu)
              ?.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-surface-alt hover:text-brand"
                  onClick={() => setOpenMenu(null)}
                >
                  {child.label}
                </Link>
              ))}
          </div>,
          document.body
        )}

      {/* Mobile dropdown panel — its own background/shadow, deliberately
          separate from the shape layer above rather than trying to make
          one clip-path cover both a collapsible bar and a variable-height
          panel. */}
      {mobileOpen && !collapsed && (
        <div className="w-[calc(100vw-1.5rem)] rounded-b-2xl border border-t-0 border-slate-200/80 bg-white px-5 py-4 shadow-lg shadow-slate-900/5 sm:w-[calc(100vw-2.5rem)] lg:w-[calc(100vw-4rem)] xl:hidden">
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
