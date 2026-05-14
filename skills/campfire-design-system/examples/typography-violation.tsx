// Typography — VIOLATION examples and their fixes.
// Common gotchas under the new role split (Hanken Grotesk for prose,
// Work Sans for UI): wrong family on the wrong role, font-mono on UI,
// Fraunces in software, stale Manrope, missing super-wonk variation.

// ============================================================
// VIOLATION 1: font-mono on a CTA / button.
// Buttons are NOT technical content. They're UI = Work Sans.
// ============================================================
export function MonoOnCtaBad() {
  return (
    <button className="font-mono bg-primary px-4 py-2 rounded-md text-white">
      Submit
    </button>
  );
}

// ✅ FIX: Drop font-mono. Button inherits Work Sans from <body>.
export function MonoOnCtaFixed() {
  return (
    <button className="bg-primary px-4 py-2 rounded-md text-white">
      Submit
    </button>
  );
}

// ============================================================
// VIOLATION 2: Work Sans forced on a paragraph.
// Paragraphs are prose = Hanken Grotesk. Don't override.
// ============================================================
export function WorkSansOnParagraphBad() {
  return (
    <p style={{ fontFamily: "var(--font-sans)" }}>
      A campfire's warmth is honest.
    </p>
  );
}

// ✅ FIX: Bare <p> automatically picks up --font-body (Hanken Grotesk)
//        from the global rule. No font-family needed.
export function WorkSansOnParagraphFixed() {
  return <p>A campfire's warmth is honest.</p>;
}

// ============================================================
// VIOLATION 3: Hanken Grotesk forced on a button or label.
// Hanken is for prose, not UI. Buttons/labels = Work Sans.
// ============================================================
export function HankenOnButtonBad() {
  return (
    <button
      style={{ fontFamily: "var(--font-body)" }}
      className="bg-primary px-4 py-2 rounded-md text-white"
    >
      Save
    </button>
  );
}

// ✅ FIX: Remove the override. Buttons inherit Work Sans.
export function HankenOnButtonFixed() {
  return (
    <button className="bg-primary px-4 py-2 rounded-md text-white">
      Save
    </button>
  );
}

// ============================================================
// VIOLATION 4: font-mono on a date / metadata eyebrow.
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

// ✅ FIX: Default fonts. Heading = Work Sans, paragraph = Hanken Grotesk.
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
// VIOLATION 5: Fraunces in software UI.
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
// VIOLATION 6: Editorial Fraunces without the super-wonk variation.
// Plain Fraunces without font-variation-settings looks generic.
// Always include the variation when using --font-heading-editorial.
// ============================================================
export function FrauncesNoVariationBad() {
  return (
    <h1
      style={{
        fontFamily: "var(--font-heading-editorial)",
        fontSize: "3rem",
        color: "var(--text-heading)",
        // ❌ Missing fontVariationSettings — losing the WONK alts and
        //    soft terminals that make editorial Fraunces itself.
      }}
    >
      Sitting close to the coals
    </h1>
  );
}

// ✅ FIX: Apply --editorial-font-variation for super wonk.
export function FrauncesWithVariationFixed() {
  return (
    <h1
      style={{
        fontFamily: "var(--font-heading-editorial)",
        fontSize: "3rem",
        color: "var(--text-heading)",
        fontVariationSettings: "var(--editorial-font-variation)",
      }}
    >
      Sitting close to the coals
    </h1>
  );
}

// ============================================================
// VIOLATION 7: Stale Manrope reference.
// Manrope was replaced by Work Sans in v0.7.0 (and Work Sans was
// then demoted to UI-only when Hanken Grotesk took over body in
// v0.8.0). Any Manrope reference is stale.
// ============================================================
export function ManropeStaleBad() {
  return (
    <p style={{ fontFamily: "Manrope, sans-serif" }}>
      Welcome back.
    </p>
  );
}

// ✅ FIX: Bare <p> uses Hanken Grotesk via --font-body automatically.
export function ManropeStaleFixed() {
  return <p>Welcome back.</p>;
}
