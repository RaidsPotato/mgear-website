"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, animate, motionValue, type MotionValue } from "framer-motion";

type Rect = { x: number; y: number; width: number; height: number };

// Sourced from app/globals.css `--radius-lg: 8px`, which is what `rounded-lg`
// resolves to on the card elements below. Kept as one constant so the traced
// outline always matches the card's actual corner radius, not a guess.
const CARD_RADIUS = 8;

function roundedTopRoute(r: Rect) {
  const radius = Math.min(CARD_RADIUS, r.height / 2, r.width / 2);
  const leftMidY = r.y + r.height / 2;
  const rightX = r.x + r.width;
  return [
    `M ${r.x} ${leftMidY}`,
    `L ${r.x} ${r.y + radius}`,
    `A ${radius} ${radius} 0 0 1 ${r.x + radius} ${r.y}`,
    `L ${rightX - radius} ${r.y}`,
    `A ${radius} ${radius} 0 0 1 ${rightX} ${r.y + radius}`,
    `L ${rightX} ${leftMidY}`,
  ].join(" ");
}

// Chain steps are sourced from 02-CONNECTION-MAP.md's arrow-joined sentences
// (e.g. "...→ the Manager is alerted → the team resolves it..."), which reads
// fine as one continuous sentence but looks inconsistent once each step
// becomes its own boxed card — some start capitalized, some don't. This
// capitalizes for display only; it doesn't change the sourced wording.
function displayCase(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function roundedBottomRoute(r: Rect) {
  const radius = Math.min(CARD_RADIUS, r.height / 2, r.width / 2);
  const leftMidY = r.y + r.height / 2;
  const bottomY = r.y + r.height;
  const rightX = r.x + r.width;
  return [
    `M ${r.x} ${leftMidY}`,
    `L ${r.x} ${bottomY - radius}`,
    `A ${radius} ${radius} 0 0 0 ${r.x + radius} ${bottomY}`,
    `L ${rightX - radius} ${bottomY}`,
    `A ${radius} ${radius} 0 0 0 ${rightX} ${bottomY - radius}`,
    `L ${rightX} ${leftMidY}`,
  ].join(" ");
}

/**
 * The site's signature visual: an event entering on the left, moving through
 * the modules it touches, and a resolved outcome leaving on the right — all
 * inside a persistent frame reading "the patient is still admitted."
 *
 * Per 02-CONNECTION-MAP.md's closing instruction: motion is mandatory. A
 * static box-and-arrow version reads as architecture, which is exactly what
 * this component exists to avoid.
 *
 * The highlight is a traced border, not a filled shape growing from the
 * center — it touches each card at the left-edge midpoint, draws around the
 * perimeter (top and bottom halves simultaneously, never crossing into the
 * interior) until the whole border is lit, holds, then retracts toward the
 * right-edge midpoint into a small ball, which travels to the next card and
 * repeats. After the last card it disappears; the whole sequence restarts
 * from the first card about a second later.
 */
export function ChainDiagram({
  steps,
  frameLabel = "THE PATIENT IS STILL ADMITTED",
}: {
  steps: string[];
  frameLabel?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [box, setBox] = useState<{ w: number; h: number; rects: Rect[] } | null>(null);

  // Per-card animated stroke progress, and one shared traveling ball.
  const pathLenRef = useRef<MotionValue<number>[]>([]);
  const pathOffRef = useRef<MotionValue<number>[]>([]);
  const ballX = useRef(motionValue(0)).current;
  const ballY = useRef(motionValue(0)).current;
  const ballOpacity = useRef(motionValue(0)).current;

  if (pathLenRef.current.length !== steps.length) {
    pathLenRef.current = steps.map(() => motionValue(0));
    pathOffRef.current = steps.map(() => motionValue(0));
  }

  useLayoutEffect(() => {
    // Deliberately using offsetLeft/offsetTop/offsetWidth/offsetHeight, not
    // getBoundingClientRect(). The cards animate in with a `y` transform
    // (initial y:12 -> 0), and getBoundingClientRect reflects that transform
    // while it's still resolving — measuring mid-transition locks the traced
    // outline to a stale, offset position with no future resize to correct
    // it (width/height don't change, so ResizeObserver never refires). The
    // offset* properties reflect normal layout position only, ignoring
    // transforms entirely, so they're correct regardless of animation timing.
    function measure() {
      const container = containerRef.current;
      if (!container) return;
      const rects = boxRefs.current.map((el) => {
        if (!el) return { x: 0, y: 0, width: 0, height: 0 };
        let x = 0;
        let y = 0;
        let node: HTMLElement | null = el;
        while (node && node !== container) {
          x += node.offsetLeft;
          y += node.offsetTop;
          node = node.offsetParent as HTMLElement | null;
        }
        return { x, y, width: el.offsetWidth, height: el.offsetHeight };
      });
      // ResizeObserver commonly fires more than once for the same effective
      // layout (sub-pixel rounding, an initial "report current size" call,
      // etc.). Skip the update when nothing actually moved, so the animation
      // loop below doesn't restart — and potentially race with itself —
      // for no visible reason.
      setBox((prev) => {
        const next = { w: container.offsetWidth, h: container.offsetHeight, rects };
        if (
          prev &&
          prev.w === next.w &&
          prev.h === next.h &&
          prev.rects.length === next.rects.length &&
          prev.rects.every(
            (r, i) =>
              r.x === next.rects[i].x &&
              r.y === next.rects[i].y &&
              r.width === next.rects[i].width &&
              r.height === next.rects[i].height
          )
        ) {
          return prev;
        }
        return next;
      });
    }
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [steps.length]);

  useLayoutEffect(() => {
    if (!box) return;
    let cancelled = false;
    const sleep = (s: number) => new Promise<void>((r) => setTimeout(r, s * 1000));

    // `animate()` keeps running in the background once started — setting a
    // `cancelled` flag and checking it between `await`s does NOT stop an
    // in-flight animation. If this effect re-runs (a real resize, or a
    // second ResizeObserver callback) while one is still playing, the old
    // one and the new one end up driving the same shared motion values at
    // once, which is exactly what showed up as a stray extra dot. Every
    // animation is tracked here and explicitly `.stop()`-ed on cleanup so
    // there is never more than one in flight.
    const active = new Set<{ stop: () => void }>();
    function tracked(value: MotionValue<number>, target: number, duration: number) {
      const controls = animate(value, target, { duration, ease: "easeInOut" });
      active.add(controls);
      return controls.then(() => {
        active.delete(controls);
      });
    }

    const expandDur = 0.45;
    const holdDur = 0.3;
    const lastHoldDur = 0.8;
    const retractDur = 0.35;
    const travelDur = 0.7;
    const restartPause = 0.7;

    async function run() {
      const n = steps.length;
      while (!cancelled) {
        const rects = box!.rects;

        for (let i = 0; i < n; i++) {
          if (cancelled) return;
          const r = rects[i];
          const leftMid = { x: r.x, y: r.y + r.height / 2 };
          const rightMid = { x: r.x + r.width, y: r.y + r.height / 2 };

          if (i === 0) {
            ballX.set(leftMid.x);
            ballY.set(leftMid.y);
            await tracked(ballOpacity, 1, 0.25);
            if (cancelled) return;
          }

          // Border draws in from the touch point; the ball fades as it does.
          await Promise.all([tracked(ballOpacity, 0, 0.15), tracked(pathLenRef.current[i], 1, expandDur)]);
          if (cancelled) return;

          await sleep(i === n - 1 ? lastHoldDur : holdDur);
          if (cancelled) return;

          // Border retracts toward the exit point, collapsing into a ball there.
          await Promise.all([
            tracked(pathOffRef.current[i], 1, retractDur),
            tracked(pathLenRef.current[i], 0, retractDur),
          ]);
          // Hard reset, not just a trust-the-animation-landed-on-target
          // assumption: pathOffset must go back to 0 so next cycle's expand
          // draws from the true start again (leftMid), and pathLength is
          // forced to exactly 0 so no near-zero residual segment can render.
          pathOffRef.current[i].set(0);
          pathLenRef.current[i].set(0);
          if (cancelled) return;

          ballX.set(rightMid.x);
          ballY.set(rightMid.y);

          if (i === n - 1) {
            await tracked(ballOpacity, 1, 0.12);
            await sleep(0.15);
            await tracked(ballOpacity, 0, 0.3);
            await sleep(restartPause);
          } else {
            await tracked(ballOpacity, 1, 0.12);
            const nextLeftMid = { x: rects[i + 1].x, y: rects[i + 1].y + rects[i + 1].height / 2 };
            await Promise.all([
              tracked(ballX, nextLeftMid.x, travelDur),
              tracked(ballY, nextLeftMid.y, travelDur),
            ]);
          }
        }
      }
    }

    run();
    return () => {
      cancelled = true;
      active.forEach((c) => c.stop());
      active.clear();
      // Whatever was mid-flight must be visually cleared too — otherwise the
      // ball or a half-drawn border is left stuck at its interrupted
      // position while a fresh loop starts underneath it.
      ballOpacity.set(0);
      pathLenRef.current.forEach((v) => v.set(0));
      pathOffRef.current.forEach((v) => v.set(0));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [box]);

  return (
    <div
      ref={containerRef}
      className="relative rounded-xl border border-brand/25 bg-gradient-to-b from-[#f2f9f4] to-white px-6 py-10 sm:px-10"
    >
      <span className="eyebrow absolute -top-3 left-6 bg-white px-3">
        {frameLabel}
      </span>

      <div className="flex flex-col items-stretch gap-0 sm:flex-row sm:items-center sm:gap-0">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-1 items-center">
            <motion.div
              ref={(el) => {
                boxRefs.current[i] = el;
              }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.12, ease: "easeOut" }}
              className="flex-1 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm leading-snug text-charcoal shadow-xs"
            >
              {displayCase(step)}
            </motion.div>

            {i < steps.length - 1 && (
              <div className="mx-2 hidden h-px flex-none w-8 bg-slate-300 sm:block" />
            )}
            {i < steps.length - 1 && (
              <div className="my-1 ml-3 h-6 w-px flex-none bg-slate-300 sm:hidden" />
            )}
          </div>
        ))}
      </div>

      {box && (
        <svg
          aria-hidden
          className="pointer-events-none absolute left-0 top-0"
          width={box.w}
          height={box.h}
          viewBox={`0 0 ${box.w} ${box.h}`}
        >
          {box.rects.map((r, i) => {
            const topRoute = roundedTopRoute(r);
            const bottomRoute = roundedBottomRoute(r);
            return (
              <g key={i}>
                <motion.path
                  d={topRoute}
                  fill="none"
                  stroke="#16a34a"
                  strokeWidth={2}
                  strokeLinecap="butt"
                  strokeLinejoin="round"
                  pathLength={pathLenRef.current[i]}
                  pathOffset={pathOffRef.current[i]}
                />
                <motion.path
                  d={bottomRoute}
                  fill="none"
                  stroke="#16a34a"
                  strokeWidth={2}
                  strokeLinecap="butt"
                  strokeLinejoin="round"
                  pathLength={pathLenRef.current[i]}
                  pathOffset={pathOffRef.current[i]}
                />
              </g>
            );
          })}
          <motion.circle r={5} fill="#16a34a" style={{ x: ballX, y: ballY, opacity: ballOpacity }} />
        </svg>
      )}
    </div>
  );
}
