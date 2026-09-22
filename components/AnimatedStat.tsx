"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Count-up numbers for stat callouts — the kind of motion the reference
 * sites (Xsolis, Cohere Health, MDaudit) lean on for their proof strips.
 * Per leadership's 2026-09-21 override this is now in scope; it wasn't
 * before (04-BRAND-KIT.md: "no bouncy... motion should be purposeful").
 *
 * Understands the value shapes actually used on this site:
 *   "$4.87M"        -> counts 0 -> 4.87, keeping the $ and M
 *   "100%"          -> counts 0 -> 100, keeping the %
 *   "35% → 0%"      -> counts 35 -> 0 (the real before/after transition)
 *   "≈$5.26M"       -> counts 0 -> 5.26, keeping the ≈$ and M
 * Anything that doesn't match this shape renders as plain, static text —
 * this never risks displaying a wrong or invented number.
 */
function parseStat(raw: string) {
  const decimalsOf = (s: string) => {
    const i = s.indexOf(".");
    return i === -1 ? 0 : s.length - i - 1;
  };
  const single = (s: string) => {
    const m = s.trim().match(/^(\D*)([\d.]+)(\D*)$/);
    if (!m) return null;
    return { prefix: m[1], value: parseFloat(m[2]), suffix: m[3], decimals: decimalsOf(m[2]) };
  };

  const parts = raw.split("→");
  if (parts.length === 2) {
    const a = single(parts[0]);
    const b = single(parts[1]);
    if (!a || !b) return null;
    return {
      prefix: b.prefix,
      from: a.value,
      to: b.value,
      suffix: b.suffix,
      decimals: Math.max(a.decimals, b.decimals),
    };
  }

  const s = single(raw);
  if (!s) return null;
  return { prefix: s.prefix, from: 0, to: s.value, suffix: s.suffix, decimals: s.decimals };
}

export function AnimatedStat({ value, className }: { value: string; className?: string }) {
  const spec = parseStat(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(spec ? spec.from.toFixed(spec.decimals) : "");
  const [started, setStarted] = useState(false);

  // Trigger: IntersectionObserver for the normal scroll-in case, with an
  // unconditional timeout fallback so a missed observer never leaves the
  // number stuck at its starting value (see verifying-animations-hidden-tab
  // notes — a hidden tab / flaky observer must still resolve to something).
  useEffect(() => {
    if (!spec) return;
    const fallback = setTimeout(() => setStarted(true), 900);
    const el = ref.current;
    let io: IntersectionObserver | null = null;
    if (el && typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            setStarted(true);
            io?.disconnect();
            clearTimeout(fallback);
          }
        },
        { rootMargin: "0px 0px -60px 0px" }
      );
      io.observe(el);
    }
    return () => {
      io?.disconnect();
      clearTimeout(fallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    if (!spec || !started) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(spec.to.toFixed(spec.decimals));
      return;
    }
    const duration = 1100;
    const start = performance.now();
    let raf = 0;
    function tick(now: number) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = spec!.from + (spec!.to - spec!.from) * eased;
      setDisplay(current.toFixed(spec!.decimals));
      if (t < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  if (!spec) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {spec.prefix}
      {display}
      {spec.suffix}
    </span>
  );
}
