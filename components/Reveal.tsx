"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Calm, once-only scroll reveal — a short fade with a small rise.
 *
 * Per 04-BRAND-KIT.md: motion is purposeful and calm, never bouncy or
 * playful. Content moves because it entered view, not for decoration. The
 * distance is deliberately small (8px) with a plain easeOut, so this reads
 * as "settling into place," not "animating in."
 *
 * Uses framer-motion's `whileInView` directly — the same pattern as
 * ChainDiagram and ModuleStrip. It renders a single, consistent element on
 * the server and the client (framer emits the `initial` styles into the
 * SSR HTML), so there is no hydration mismatch. Do NOT branch the returned
 * element on anything that differs between server and client (viewport
 * state, `document`, media queries) — that is what breaks hydration.
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
