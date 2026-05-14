// Editorial accent themes — CORRECT usage.
// One <EditorialTheme> wraps an article; tone choice is editorial mood.
// Heading text stays --text-heading regardless of tone.

import {
  EditorialTheme,
  EditorialEyebrow,
  EditorialPullquote,
  EditorialDropCap,
} from "@jeremyfuksa/campfire";

// ============================================================
// 1. Warm article (default tone) — clay/terracotta accent.
// ============================================================
export function WarmArticle() {
  return (
    <EditorialTheme tone="warm">
      <article className="max-w-2xl space-y-4">
        <EditorialEyebrow>Field Notes · No. 04</EditorialEyebrow>
        <h2
          style={{
            fontFamily: "var(--font-heading-editorial)",
            fontSize: "var(--text-editorial-h2)",
            fontWeight: "var(--font-weight-editorial-h2)",
            color: "var(--text-heading)", // ← stays text-heading, not the accent
            fontVariationSettings: "var(--editorial-font-variation)",
          }}
        >
          Sitting close to the coals
        </h2>

        <p>
          <EditorialDropCap>A</EditorialDropCap>
          campfire's warmth is honest. It does not ask you to perform,
          only to settle.
        </p>

        <EditorialPullquote cite="Field Notes, p. 12">
          The fire does the talking. We only have to listen long enough
          to hear it.
        </EditorialPullquote>
      </article>
    </EditorialTheme>
  );
}

// ============================================================
// 2. Cool article — dusk/slate accent, same heading color rule.
// ============================================================
export function CoolArticle() {
  return (
    <EditorialTheme tone="cool">
      <article className="max-w-2xl space-y-4">
        <EditorialEyebrow>Reflections · No. 09</EditorialEyebrow>
        <h2
          style={{
            fontFamily: "var(--font-heading-editorial)",
            fontSize: "var(--text-editorial-h2)",
            fontWeight: "var(--font-weight-editorial-h2)",
            color: "var(--text-heading)",
            fontVariationSettings: "var(--editorial-font-variation)",
          }}
        >
          On distance
        </h2>

        <p>
          The coastline at dusk does most of its work in silence —
          the way a good interface does.
        </p>

        <EditorialPullquote variant="tinted">
          Quietness is not the absence of voice. It's a deliberate
          shape that voice can fill.
        </EditorialPullquote>
      </article>
    </EditorialTheme>
  );
}

// ============================================================
// 3. Using the utility classes directly (no primitive needed).
//    The accent picks up from the surrounding <EditorialTheme>.
// ============================================================
export function CustomEditorialChrome() {
  return (
    <EditorialTheme tone="deep">
      <section className="max-w-2xl">
        {/* Custom kicker using the accent utility */}
        <span className="text-editorial-accent text-xs uppercase tracking-[0.12em] font-semibold">
          Case study · Hearth
        </span>

        {/* Heading still on text-heading */}
        <h2
          style={{
            fontFamily: "var(--font-heading-editorial)",
            color: "var(--text-heading)",
            fontVariationSettings: "var(--editorial-font-variation)",
          }}
          className="mt-2 text-3xl"
        >
          A house built around the fire
        </h2>

        {/* Section with subtle accent background */}
        <aside className="bg-editorial-accent-subtle mt-6 p-6 rounded-md">
          <p className="text-sm">
            What follows are the patterns that emerged across six
            months of fieldwork.
          </p>
        </aside>
      </section>
    </EditorialTheme>
  );
}
