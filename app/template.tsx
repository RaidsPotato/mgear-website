/**
 * App Router remounts template.tsx (unlike layout.tsx) on every navigation,
 * so this replays the `page-enter` fade+rise (see globals.css) each time a
 * page loads — the fix for navigation feeling like a hard, stiff cut. Pure
 * CSS, no client JS: it can't get stuck the way a JS-driven transition can.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
