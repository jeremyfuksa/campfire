import type { Meta } from "@storybook/react";

/**
 * Spark — the one vivid accent.
 *
 * There is no Spark component on purpose. The Rule of One (max one
 * instance per screen) is enforced by writing the utility inline,
 * never by reaching for a reusable primitive. These stories document
 * the canonical uses; each story shows Spark exactly once.
 */
const meta = {
  title: "Foundations/Spark",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

export const LiveIndicator = {
  render: () => (
    <div className="flex items-center gap-2 text-sm">
      <span
        aria-hidden="true"
        className="spark-pulse inline-block h-2 w-2 rounded-full"
      />
      <span className="font-semibold uppercase tracking-[0.12em] text-xs">
        Live
      </span>
      <span className="text-muted-foreground">
        Recording the meeting in progress
      </span>
    </div>
  ),
};

export const UnreadBeacon = {
  render: () => (
    <div className="flex items-center gap-3 max-w-md">
      <span
        aria-label="Unread"
        className="bg-spark inline-block h-2 w-2 rounded-full shrink-0"
      />
      <div>
        <div className="font-semibold">Jeremy commented on your draft</div>
        <div className="text-sm text-muted-foreground">
          "I'd push back on the framing in section two — let's talk."
        </div>
      </div>
    </div>
  ),
};

export const HeroCta = {
  render: () => (
    <div className="max-w-xl space-y-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight">
        A warm, dependable design system.
      </h1>
      <p className="text-muted-foreground">
        Campfire is the design language for products that should feel like a
        place to settle in: warm, steady, and quietly confident.
      </p>
      <button
        type="button"
        className="bg-spark inline-flex items-center rounded-md px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-shadow ring-spark hover:shadow-md"
      >
        Read the field notes
      </button>
    </div>
  ),
};

export const EditorialUnderline = {
  render: () => (
    <article className="max-w-2xl">
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
    </article>
  ),
};

export const RuleOfOneReminder = {
  render: () => (
    <div className="max-w-prose space-y-4 text-sm">
      <p className="font-semibold uppercase tracking-[0.12em] text-xs text-muted-foreground">
        The Rule of One
      </p>
      <p>
        Each story above shows Spark{" "}
        <span className="bg-spark px-1.5 py-0.5 text-white rounded-sm font-semibold">
          exactly once
        </span>
        . That is the rule, not a guideline.
      </p>
      <p className="text-muted-foreground">
        If two stories appear in the same view (e.g. a Storybook docs page),
        each counts as its own screen. In a real product, you pick the highest-stakes
        element and Spark goes there — everything else stays on the slate/terracotta core.
      </p>
    </div>
  ),
};
