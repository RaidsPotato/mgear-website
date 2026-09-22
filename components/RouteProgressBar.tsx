"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * A thin brand-green bar that sweeps across the top on every navigation —
 * the top-loading-bar pattern most modern SaaS sites use (Vercel, Linear,
 * GitHub). Lives in the root layout (not app/template.tsx) so it persists
 * across navigations instead of remounting; it watches the pathname itself
 * to know when a navigation happened.
 *
 * This is a purely cosmetic sweep, not a real progress measurement — Next
 * doesn't expose real navigation progress. It's timed to roughly match how
 * fast a static-prerendered route actually resolves, then fades out.
 */
export function RouteProgressBar() {
  const pathname = usePathname();
  const [width, setWidth] = useState(0);
  const [visible, setVisible] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setVisible(true);
    setWidth(25);
    const t1 = setTimeout(() => setWidth(75), 90);
    const t2 = setTimeout(() => setWidth(100), 280);
    const t3 = setTimeout(() => setVisible(false), 480);
    const t4 = setTimeout(() => setWidth(0), 730);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [pathname]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] h-[3px] w-full bg-transparent"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.25s ease" }}
    >
      <div
        className="route-progress h-full bg-gradient-to-r from-brand-dark via-brand to-emerald-400"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
