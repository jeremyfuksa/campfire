// Typography — CORRECT usage examples.
// Hanken Grotesk for body prose. Work Sans for UI / labels / software
// headings. Fraunces (super wonk) for editorial display only. Fira Code
// for technical content.

// ============================================================
// 1. Software UI — heading + button = Work Sans (inherited from <body>).
//    Body paragraph = Hanken Grotesk via the global <p> rule.
// ============================================================
export function SoftwareUiCorrect() {
  return (
    <div>
      {/* Software heading: Work Sans via --font-heading-h2 */}
      <h2>Your dashboard</h2>

      {/* Body copy: Hanken Grotesk — globals.css applies --font-body
          to bare <p> elements automatically. No class needed. */}
      <p className="text-muted-foreground">
        You have 3 unread messages.
      </p>

      {/* CTA: inherits Work Sans from <body> via --font-sans.
          NOT font-mono and NOT font-body — buttons are UI. */}
      <button className="bg-primary px-4 py-2 rounded-md text-white">
        Open inbox
      </button>
    </div>
  );
}

// ============================================================
// 2. Long-form prose — Hanken Grotesk all the way down.
//    The lede, the body paragraphs, and the figcaption all
//    pick up --font-body automatically.
// ============================================================
export function LongFormCorrect() {
  return (
    <article className="max-w-2xl space-y-4">
      <h2>On sitting close to the coals</h2>

      {/* Lede paragraph — Hanken Grotesk, 18/28 via --font-body-lg sizing */}
      <p className="text-lg">
        A campfire's warmth is honest. It does not ask you to perform,
        only to settle.
      </p>

      {/* Default body paragraph — Hanken Grotesk, 16/24 */}
      <p>
        The best interfaces feel the same way — they invite presence,
        they reward attention, and they refuse to flatter.
      </p>

      <figure>
        <img src="/coals.jpg" alt="Glowing coals at dusk" />
        {/* Caption — also Hanken Grotesk */}
        <figcaption className="text-sm text-muted-foreground mt-2">
          Field Notes No. 04, May 2026
        </figcaption>
      </figure>
    </article>
  );
}

// ============================================================
// 3. Fira Code — only on technical content.
//    Allowed: code, raw token values, <kbd>, tabular numerics.
// ============================================================
export function TechnicalContentCorrect() {
  return (
    <div className="space-y-4">
      <pre className="bg-muted p-4 rounded-md">
        <code>{`const tokens = await import('@jeremyfuksa/campfire/tokens');`}</code>
      </pre>

      <p>
        Set the theme with <code>useTheme()</code>.
      </p>

      <div className="flex items-center gap-3">
        <span className="h-6 w-6 rounded" style={{ backgroundColor: "var(--primary-600)" }} />
        <span className="font-mono text-sm text-muted-foreground">
          #4c627d
        </span>
      </div>

      <p>
        Press <kbd className="font-mono px-1.5 py-0.5 border rounded text-xs">⌘ K</kbd> to open the command palette.
      </p>
    </div>
  );
}

// ============================================================
// 4. Editorial — Fraunces with super wonk for the headline.
//    Body stays Hanken Grotesk; eyebrow stays Work Sans.
// ============================================================
export function EditorialCorrect() {
  return (
    <article className="max-w-2xl">
      {/* Eyebrow: Work Sans (UI/label role) */}
      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        Field Notes · No. 04
      </span>

      {/* Editorial heading: Fraunces with super wonk variation */}
      <h1
        style={{
          fontFamily: "var(--font-heading-editorial)",
          fontSize: "var(--text-editorial-h1)",
          fontWeight: "var(--font-weight-editorial-h1)",
          color: "var(--text-heading)",
          fontVariationSettings: "var(--editorial-font-variation)",
          margin: "0.5rem 0 1rem",
        }}
      >
        Sitting close to the coals
      </h1>

      {/* Body — Hanken Grotesk inherited from globals.css */}
      <p>
        A campfire's warmth is honest. It does not ask you to perform,
        only to settle.
      </p>
    </article>
  );
}
