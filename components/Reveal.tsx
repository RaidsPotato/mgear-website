"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Calm, once-only scroll reveal — a short fade with a small rise.
 *
 * Per 04-BRAND-KIT.md: motion is purposeful and calm, never bouncy or
 * playful. Content moves because it entered view, not for decoration. The
 * distance is deliberately small (8px) with a plain easeOut, so this reads
 * as "settling into place," not "animating in."
 *
 * Reveal is treated strictly as an enhancement — content is guaranteed to
 * become visible no matter what:
 *   - reduced-motion users, or a tab that's hidden (rAF paused, so no
 *     animation can run anyway): shown immediately, no transition.
 *   - normal case: an IntersectionObserver reveals it as it scrolls in.
 *   - safety net: an unconditional timeout reveals it a beat after mount,
 *     so a missed observer (deep link mid-page, scroll restoration) can
 *     never leave content stuck invisible.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  // Decided once, at mount. If the tab is hidden, rAF is paused and
  // framer-motion can never transition an element off its initial
  // opacity:0 — so in that case (and for reduced-motion) we skip the
  // animation entirely and render plain, always-visible content.
  const [canAnimate] = useState(
    () =>
      typeof document !== "undefined" &&
      document.visibilityState !== "hidden"
  );

  useEffect(() => {
    if (reduceMotion || !canAnimate) {
      setShown(true);
      return;
    }

    // Always scheduled, regardless of whether the ref is attached yet.
    const fallback = setTimeout(() => setShown(true), 900 + delay * 1000);

    let io: IntersectionObserver | null = null;
    const el = ref.current;
    if (el && typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            setShown(true);
            io?.disconnect();
            clearTimeout(fallback);
          }
        },
        { rootMargin: "0px 0px -80px 0px" }
      );
      io.observe(el);
    }

    return () => {
      io?.disconnect();
      clearTimeout(fallback);
    };
  }, [delay, reduceMotion]);

  if (reduceMotion || !canAnimate) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
