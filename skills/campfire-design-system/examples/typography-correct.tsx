// Typography — CORRECT usage examples.
// Work Sans for UI/body, Fira Code for technical content,
// Fraunces for editorial display.

// ============================================================
// 1. Software UI — all Work Sans (default).
// ============================================================
export function SoftwareUiCorrect() {
  return (
    <div>
      {/* Heading defaults to Work Sans via --font-heading-h2 */}
      <h2>Your dashboard</h2>

      {/* Body copy defaults to Work Sans via --font-sans */}
      <p className="text-muted-foreground">
        You have 3 unread messages.
      </p>

      {/* CTA: Work Sans, NOT font-mono */}
      <button className="bg-primary px-4 py-2 rounded-md text-white">
        Open inbox
      </button>
    </div>
  );
}

// ============================================================
// 2. Fira Code — only on technical content.
//    Allowed: code, raw token values, <kbd>, tabular numerics.
// ============================================================
export function TechnicalContentCorrect() {
  return (
    <div className="space-y-4">
      {/* Code block — Fira Code via <code> element styling in globals.css */}
      <pre className="bg-muted p-4 rounded-md">
        <code>{`const tokens = await import('@jeremyfuksa/campfire/tokens');`}</code>
      </pre>

      {/* Inline code */}
      <p>
        Set the theme with <code>useTheme()</code>.
      </p>

      {/* Raw token value display — Fira Code is appropriate */}
      <div className="flex items-center gap-3">
        <span
          className="h-6 w-6 rounded"
          style={{ backgroundColor: "var(--primary-600)" }}
        />
        <span className="font-mono text-sm text-muted-foreground">
          #4c627d
        </span>
      </div>

      {/* Keyboard key — kbd element + font-mono */}
      <p>
        Press <kbd className="font-mono px-1.5 py-0.5 border rounded text-xs">⌘ K</kbd> to open the command palette.
      </p>

      {/* Tabular numerics in a chart tooltip — Fira Code is appropriate */}
      <div className="p-2 border rounded">
        <span className="text-sm">Revenue:</span>{" "}
        <span className="font-mono tabular-nums font-medium">
          $12,348.50
        </span>
      </div>
    </div>
  );
}

// ============================================================
// 3. Editorial — Fraunces for headings/pullquotes only.
//    Body copy stays Work Sans even on editorial pages.
// ============================================================
export function EditorialCorrect() {
  return (
    <article className="max-w-2xl">
      {/* Editorial heading — Fraunces via --font-editorial-h1 */}
      <h1
        style={{
          fontFamily: "var(--font-heading-editorial)",
          fontSize: "var(--text-editorial-h1)",
          fontWeight: "var(--font-weight-editorial-h1)",
          color: "var(--text-heading)",
          fontVariationSettings: "var(--editorial-font-variation)",
        }}
      >
        Sitting close to the coals
      </h1>

      {/* Body — Work Sans, even in editorial context */}
      <p className="mt-4">
        A campfire's warmth is honest. It does not ask you to perform,
        only to settle.
      </p>
    </article>
  );
}
