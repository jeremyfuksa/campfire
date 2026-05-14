// Typography — VIOLATION examples and their fixes.
// Most common gotchas: font-mono on UI, Fraunces in software, stale Manrope.

// ============================================================
// VIOLATION 1: font-mono on a CTA / button.
// Buttons are NOT technical content. Use Work Sans (default).
// ============================================================
export function MonoOnCtaBad() {
  return (
    <button className="font-mono bg-primary px-4 py-2 rounded-md text-white">
      Submit
    </button>
  );
}

// ✅ FIX: Drop font-mono. Work Sans is the default; no class needed.
export function MonoOnCtaFixed() {
  return (
    <button className="bg-primary px-4 py-2 rounded-md text-white">
      Submit
    </button>
  );
}

// ============================================================
// VIOLATION 2: font-mono on a date / metadata eyebrow.
// Dates and metadata are language, not code.
// ============================================================
export function MonoOnDateBad() {
  return (
    <div>
      <h2>Field Notes No. 04</h2>
      <p className="font-mono text-xs text-muted-foreground">
        May 14, 2026 · 8 min read
      </p>
    </div>
  );
}

// ✅ FIX: Default font (Work Sans) for human-readable metadata.
export function MonoOnDateFixed() {
  return (
    <div>
      <h2>Field Notes No. 04</h2>
      <p className="text-xs text-muted-foreground">
        May 14, 2026 · 8 min read
      </p>
    </div>
  );
}

// ============================================================
// VIOLATION 3: font-mono on a tag/badge that's just decorative.
// Repo names, package names, tag labels — these read as language to
// the user, not as code. Mono here is "techy-feeling decoration."
// ============================================================
export function MonoOnTagBad() {
  return (
    <div className="space-y-2">
      <div className="border rounded-md px-4 py-2 font-mono text-sm">
        @radix-ui/primitives
      </div>
      <div className="border rounded-md px-4 py-2 font-mono text-sm">
        @stitches/react
      </div>
    </div>
  );
}

// ✅ FIX: Default font. The package names happen to look "code-ish"
// but they're list items in a UI, not source code.
export function MonoOnTagFixed() {
  return (
    <div className="space-y-2">
      <div className="border rounded-md px-4 py-2 text-sm">
        @radix-ui/primitives
      </div>
      <div className="border rounded-md px-4 py-2 text-sm">
        @stitches/react
      </div>
    </div>
  );
}

// ============================================================
// VIOLATION 4: Fraunces in software UI.
// Fraunces is editorial-only. Software headings use Work Sans.
// ============================================================
export function FrauncesInSoftwareBad() {
  return (
    <h2
      style={{ fontFamily: "var(--font-heading-editorial)" }}
      className="text-2xl"
    >
      Settings
    </h2>
  );
}

// ✅ FIX: Default heading uses Work Sans via --font-heading-h2.
export function FrauncesInSoftwareFixed() {
  return <h2 className="text-2xl">Settings</h2>;
}

// ============================================================
// VIOLATION 5: Stale Manrope reference.
// Manrope was replaced by Work Sans in v0.7.0. Any Manrope
// reference in new code is stale.
// ============================================================
export function ManropeStaleBad() {
  return (
    <p style={{ fontFamily: "Manrope, sans-serif" }}>
      Welcome back.
    </p>
  );
}

// ✅ FIX: Use the token, which is now Work Sans.
export function ManropeStaleFixed() {
  return (
    <p style={{ fontFamily: "var(--font-sans)" }}>
      Welcome back.
    </p>
  );
}
