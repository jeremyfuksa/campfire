import type { Meta } from "@storybook/react";
import {
  EditorialTheme,
  EditorialEyebrow,
  EditorialPullquote,
  EditorialDropCap,
  type EditorialTone,
} from "./editorial";

const meta = {
  title: "Editorial/EditorialTheme",
  component: EditorialTheme,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof EditorialTheme>;

export default meta;

const SampleArticle = () => (
  <article className="max-w-2xl space-y-4">
    <EditorialEyebrow>Field Notes · No. 04</EditorialEyebrow>
    <h2
      style={{
        fontFamily: "var(--font-heading-editorial)",
        fontSize: "var(--text-editorial-h2)",
        lineHeight: "var(--leading-editorial-h2)",
        fontWeight: "var(--font-weight-editorial-h2)",
        color: "var(--text-heading)",
        fontVariationSettings: "var(--editorial-font-variation)",
        margin: 0,
      }}
    >
      Sitting close to the coals
    </h2>
    <p>
      <EditorialDropCap>A</EditorialDropCap>
      campfire's warmth is honest. It does not ask you to perform, only to settle. The
      best interfaces feel the same way — they invite presence, they reward
      attention, and they refuse to flatter. Color, when it appears, should mean
      something.
    </p>
    <EditorialPullquote cite="Field Notes, p. 12">
      The fire does the talking. We only have to listen long enough to hear it.
    </EditorialPullquote>
    <p>
      The editorial system is the warm side of Campfire — Fraunces, looser
      rhythm, a single accent color that carries through eyebrows, pullquotes,
      drop caps, and links. Each piece can choose its tone.
    </p>
  </article>
);

export const Warm = {
  render: () => (
    <EditorialTheme tone="warm">
      <SampleArticle />
    </EditorialTheme>
  ),
};

export const Cool = {
  render: () => (
    <EditorialTheme tone="cool">
      <SampleArticle />
    </EditorialTheme>
  ),
};

export const Deep = {
  render: () => (
    <EditorialTheme tone="deep">
      <SampleArticle />
    </EditorialTheme>
  ),
};

export const AllTones = {
  render: () => (
    <div className="space-y-12">
      {(["warm", "cool", "deep"] as EditorialTone[]).map((tone) => (
        <EditorialTheme key={tone} tone={tone}>
          <SampleArticle />
        </EditorialTheme>
      ))}
    </div>
  ),
};

export const TintedPullquote = {
  render: () => (
    <EditorialTheme tone="warm">
      <div className="max-w-2xl">
        <EditorialPullquote variant="tinted" cite="A reader, somewhere">
          A design system shouldn't be a museum. It should be a kitchen — built
          for use, warm from being used.
        </EditorialPullquote>
      </div>
    </EditorialTheme>
  ),
};
