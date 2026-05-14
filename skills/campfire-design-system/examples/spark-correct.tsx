// Spark — CORRECT usage examples.
// Each example uses Spark exactly once. The Rule of One is enforced
// inline by the absence of any reusable Spark component.

// ============================================================
// 1. Live indicator — the most canonical Spark use.
// ============================================================
export function LiveIndicator() {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span
        aria-hidden="true"
        className="spark-pulse inline-block h-2 w-2 rounded-full"
      />
      <span className="font-semibold uppercase tracking-[0.12em] text-xs">
        Live
      </span>
      <span className="text-muted-foreground">
        Recording in progress
      </span>
    </div>
  );
}

// ============================================================
// 2. Unread beacon — single critical-attention dot.
// ============================================================
export function UnreadBeacon({ message }: { message: string }) {
  return (
    <div className="flex items-center gap-3">
      <span
        aria-label="Unread"
        className="bg-spark inline-block h-2 w-2 rounded-full shrink-0"
      />
      <span className="text-sm">{message}</span>
    </div>
  );
}

// ============================================================
// 3. Hero CTA — the single most important action on the page.
// ============================================================
export function HeroCta() {
  return (
    <button
      type="button"
      className="bg-spark ring-spark inline-flex items-center rounded-md px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-md"
    >
      Read the field notes
    </button>
  );
}

// ============================================================
// 4. Editorial highlight — one key word, in a pull quote.
//    Uses --spark-glow as a subtle highlighter background.
// ============================================================
export function EditorialHighlight() {
  return (
    <p
      style={{
        fontFamily: "var(--font-heading-editorial)",
        fontSize: "1.25rem",
        lineHeight: 1.7,
        color: "var(--text-heading)",
      }}
    >
      A design system shouldn't be a museum. It should be a{" "}
      <span
        style={{
          backgroundImage:
            "linear-gradient(transparent 62%, var(--spark-glow) 62%)",
          padding: "0 0.1em",
        }}
      >
        kitchen
      </span>{" "}
      — built for use, warm from being used.
    </p>
  );
}
