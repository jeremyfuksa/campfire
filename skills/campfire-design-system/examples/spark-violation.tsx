// Spark — VIOLATION examples.
// Each of these breaks the Rule of One or uses Spark in a disallowed
// surface. None of these patterns should appear in real code.

// ============================================================
// VIOLATION 1: Two Spark instances on the same surface.
// The "live" dot AND the CTA both use Spark. The first instance wins;
// the CTA should be neutral or use --primary-600.
// ============================================================
export function TwoSparkInstancesBad() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="spark-pulse inline-block h-2 w-2 rounded-full" />
        <span>Live</span>
      </div>

      {/* ❌ Second Spark — VIOLATION */}
      <button className="bg-spark px-4 py-2 rounded-md text-white">
        Stop recording
      </button>
    </div>
  );
}

// ✅ FIX: Pick the one most-important element. If the live indicator is
// the signal, the CTA is just a button — use --primary-600.
export function TwoSparkInstancesFixed() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="spark-pulse inline-block h-2 w-2 rounded-full" />
        <span>Live</span>
      </div>
      <button className="bg-primary px-4 py-2 rounded-md text-white">
        Stop recording
      </button>
    </div>
  );
}

// ============================================================
// VIOLATION 2: Spark on hover state.
// Spark doesn't get hover variants. The static color is the system.
// ============================================================
export function SparkOnHoverBad() {
  return (
    <a
      href="/posts"
      className="text-foreground hover:text-spark transition-colors"
    >
      Read more
    </a>
  );
}

// ✅ FIX: Hover uses interactive tokens, not Spark.
export function SparkOnHoverFixed() {
  return (
    <a
      href="/posts"
      className="text-foreground hover:text-primary transition-colors"
    >
      Read more
    </a>
  );
}

// ============================================================
// VIOLATION 3: Spark as a divider or border.
// Decorative chrome is not Spark's job. Use --border-default or
// signature colors for warmth.
// ============================================================
export function SparkBorderBad() {
  return (
    <div className="border-t-2 border-spark py-4">
      <p>Section content</p>
    </div>
  );
}

// ✅ FIX: Use a real border token. If you want warmth, reach for
// secondary or signature colors.
export function SparkBorderFixed() {
  return (
    <div className="border-t border-default py-4">
      <p>Section content</p>
    </div>
  );
}

// ============================================================
// VIOLATION 4: A reusable <SparkBadge> component.
// There is no Spark component on purpose. A reusable Spark primitive
// invites Rule of One violations everywhere. If the same widget needs
// to appear in many places, that's a sign the design is wrong, not
// the rule.
// ============================================================
function SparkBadgeBad({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-spark px-1.5 py-0.5 text-xs font-bold text-white rounded-sm">
      {children}
    </span>
  );
}

// ❌ Now anyone who imports SparkBadgeBad can place it on every list item.
// The fix is structural: don't make this component. Inline the spark
// usage at the single place it actually matters.
