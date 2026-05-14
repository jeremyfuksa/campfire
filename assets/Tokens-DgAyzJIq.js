import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-By-GJD48.js";import{t as n}from"./jsx-runtime-_akqGrVk.js";import{a as r,o as i}from"./blocks-DchaHupY.js";import{t as a}from"./mdx-react-shim-dFMHZ1Th.js";function o(e){let n={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Foundations/Tokens`}),`
`,(0,c.jsx)(n.h1,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,c.jsxs)(n.p,{children:[`Tokens are authored as W3C DTCG JSON under `,(0,c.jsx)(n.code,{children:`src/tokens/`}),` and built with `,(0,c.jsx)(n.a,{href:`https://styledictionary.com/`,rel:`nofollow`,children:`Style Dictionary`}),` into multiple distribution formats. This page documents every token group and its consumption surface. For the full source, see `,(0,c.jsx)(n.code,{children:`src/tokens/*.json`}),` in the repo.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`All token names below render as CSS custom properties (`,(0,c.jsx)(n.code,{children:`var(--token-name)`}),`). Tailwind v4 also exposes them as utility classes (`,(0,c.jsx)(n.code,{children:`bg-primary-600`}),`, `,(0,c.jsx)(n.code,{children:`text-secondary-700`}),`, etc.) via the `,(0,c.jsx)(n.code,{children:`@theme`}),` block in `,(0,c.jsx)(n.code,{children:`src/styles/globals.css`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`consumption--three-published-entrypoints`,children:`Consumption — three published entrypoints`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-ts`,children:`// 1. Plain CSS custom properties (works in any environment)
import "@jeremyfuksa/campfire/tokens.css";

// 2. Typed JS object (for runtime access)
import tokens from "@jeremyfuksa/campfire/tokens";
console.log(tokens.color.primary["500"].value); // "#607a97"

// 3. Raw W3C DTCG JSON (for Figma Make / design-tool importers)
import tokensJson from "@jeremyfuksa/campfire/tokens.json";
import darkTokens from "@jeremyfuksa/campfire/tokens.dark.json";
`})}),`
`,(0,c.jsx)(n.h2,{id:`color--palette-ramps`,children:`Color — palette ramps`}),`
`,(0,c.jsx)(n.p,{children:`Each ramp goes 50/100/200/300/400/500/600/700/800/900/950. Higher numbers = text on light; lower numbers = backgrounds and tints.`}),`
`,(0,c.jsxs)(n.p,{children:[`| Ramp | Role | Sample tokens |
| --- | --- | --- |
| `,(0,c.jsx)(n.code,{children:`primary-*`}),` | Slate blue. Actionable elements: buttons, links, focused states. | `,(0,c.jsx)(n.code,{children:`--primary-600`}),` (default action), `,(0,c.jsx)(n.code,{children:`--primary-700`}),` (hover), `,(0,c.jsx)(n.code,{children:`--primary-800`}),` (active) |
| `,(0,c.jsx)(n.code,{children:`secondary-*`}),` | Clay/terracotta. Warmth and accent. `,(0,c.jsx)(n.strong,{children:`Never`}),` for primary affordances. | `,(0,c.jsx)(n.code,{children:`--secondary-700`}),`, `,(0,c.jsx)(n.code,{children:`--secondary-100`}),` (default editorial accent) |
| `,(0,c.jsx)(n.code,{children:`neutral-*`}),` | Carries 95% of any screen. Backgrounds (50/100/200), text (500–950). | `,(0,c.jsx)(n.code,{children:`--neutral-50`}),` (page bg), `,(0,c.jsx)(n.code,{children:`--neutral-900`}),` (text) |
| `,(0,c.jsx)(n.code,{children:`success-*`}),` / `,(0,c.jsx)(n.code,{children:`warning-*`}),` / `,(0,c.jsx)(n.code,{children:`danger-*`}),` / `,(0,c.jsx)(n.code,{children:`info-*`}),` | Status colors. Pair with `,(0,c.jsx)(n.code,{children:`on-*`}),` companions for pre-validated contrast. | `,(0,c.jsx)(n.code,{children:`--success-600`}),`, `,(0,c.jsx)(n.code,{children:`--danger-600`}),`, `,(0,c.jsx)(n.code,{children:`--info-900`}),` |`]}),`
`,(0,c.jsx)(n.h2,{id:`color--semantic-roles-preferred`,children:`Color — semantic roles (preferred)`}),`
`,(0,c.jsxs)(n.p,{children:[`Reach for these before primitives. Defined in `,(0,c.jsx)(n.code,{children:`semantic.light.json`}),` / `,(0,c.jsx)(n.code,{children:`semantic.dark.json`}),` and switched by the `,(0,c.jsx)(n.code,{children:`.dark`}),` class on `,(0,c.jsx)(n.code,{children:`<html>`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`/* Background */
var(--bg-base)            /* page bg */
var(--bg-subtle)          /* cards, list rows */
var(--bg-muted)           /* inset surfaces */
var(--bg-emphasis)        /* inverted */

/* Text */
var(--text-primary)       /* default text */
var(--text-secondary)     /* de-emphasized */
var(--text-tertiary)      /* captions, metadata */
var(--text-disabled)
var(--text-inverse)       /* text on dark bg */
var(--text-heading)       /* editorial heading ink (warm near-black) */

/* Borders */
var(--border-default)
var(--border-strong)
var(--border-subtle)

/* Interactive */
var(--interactive-default)   /* = --primary-600 */
var(--interactive-hover)     /* = --primary-700 */
var(--interactive-active)    /* = --primary-800 */
var(--interactive-disabled)

/* Editorial accent (swappable via <EditorialTheme tone="warm | cool | deep">) */
var(--editorial-accent)
var(--editorial-accent-subtle)
`})}),`
`,(0,c.jsx)(n.h2,{id:`color--signature-palette-decorative`,children:`Color — signature palette (decorative)`}),`
`,(0,c.jsx)(n.p,{children:`Named brand tones. Use for illustration accents, signature charts, decorative tinting. Each has light + dark mode pairings.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:`--clay        --flamingo     --terracotta
--ember       --golden-amber --hay
--sage        --moss         --pine
--cello       --blue-calx    --dusk
--mauve-earth --stone
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Plus the special `,(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`--spark`})}),` (`,(0,c.jsx)(n.code,{children:`#ff5a1f`}),` light / `,(0,c.jsx)(n.code,{children:`#ff6b35`}),` dark) and derived `,(0,c.jsx)(n.code,{children:`--spark-glow`}),`. Spark is governed by the `,(0,c.jsx)(n.strong,{children:`Rule of One`}),` — see Foundations / Spark.`]}),`
`,(0,c.jsx)(n.h2,{id:`typography`,children:`Typography`}),`
`,(0,c.jsxs)(n.p,{children:[`See `,(0,c.jsx)(n.strong,{children:`Foundations / Typography`}),` for the full role split (Hanken Grotesk for prose, Work Sans for UI, Fraunces for editorial display, Fira Code for technical content).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`/* Font families */
var(--font-sans)              /* Work Sans (UI default) */
var(--font-body)              /* Hanken Grotesk (prose) */
var(--font-mono)              /* Fira Code (technical-only) */
var(--font-heading-editorial) /* Fraunces (editorial-only) */

/* Per-role family tokens */
var(--font-heading-h1) … var(--font-heading-h6)
var(--font-body-lg) / --font-body-md / --font-body-sm
var(--font-label-sm)
var(--font-code-md)
var(--font-editorial-h1) / --font-editorial-h2 / --font-editorial-h3
var(--font-editorial-pullquote) / --font-editorial-metric

/* Editorial display variation (super wonk) */
var(--editorial-font-variation) /* 'opsz' 144, 'SOFT' 100, 'WONK' 1 */
`})}),`
`,(0,c.jsx)(n.h2,{id:`spacing`,children:`Spacing`}),`
`,(0,c.jsxs)(n.p,{children:[`4px base unit (`,(0,c.jsx)(n.code,{children:`0.25rem`}),`). Tailwind utility classes map 1:1.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`var(--spacing-xxs)   /* 1 (0.25rem) */
var(--spacing-xs)    /* 2 (0.5rem)  */
var(--spacing-sm)    /* 3 (0.75rem) */
var(--spacing-md)    /* 4 (1rem)    */
var(--spacing-lg)    /* 5 (1.25rem) */
var(--spacing-xl)    /* 6 (1.5rem)  */
var(--spacing-xxl)   /* 8 (2rem)    */
var(--spacing-xxxl)  /* 10 (2.5rem) */
var(--spacing-huge)  /* 12 (3rem)   */
var(--spacing-giant) /* 16 (4rem)   */

/* Named layout slots */
var(--spacing-container-padding) /* 1.5rem */
var(--spacing-card-gap)          /* 1rem */
var(--spacing-section-margin)    /* 4rem */
`})}),`
`,(0,c.jsx)(n.h2,{id:`radii`,children:`Radii`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`var(--radius-sm)      /* 6px  — chips, badges, kbd keys */
var(--radius-base)    /* 8px  — buttons, inputs, segmented controls */
var(--radius-md)      /* 12px — small cards, alerts, menus */
var(--radius-lg)      /* 16px — primary cards, dialogs, drawers */
var(--radius-xl)      /* marketing surfaces */
var(--radius-xxl)     /* hero treatments only */
var(--radius-full)    /* 9999px — avatars, status dots, pill tags */
`})}),`
`,(0,c.jsx)(n.h2,{id:`shadows--elevation`,children:`Shadows / elevation`}),`
`,(0,c.jsxs)(n.p,{children:[`Depth is expressed through `,(0,c.jsx)(n.strong,{children:`borders and tonal shifts first, shadows second`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`var(--shadow-2xs) / --shadow-xs / --shadow-sm / --shadow-md / --shadow-lg / --shadow-xl
var(--shadow-focus)   /* the focus ring glow */
`})}),`
`,(0,c.jsx)(n.p,{children:`Elevation levels:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Level 0 — Page`}),`: `,(0,c.jsx)(n.code,{children:`--bg-base`}),`, no border, no shadow.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Level 1 — Section`}),`: `,(0,c.jsx)(n.code,{children:`--bg-subtle`}),` background OR `,(0,c.jsx)(n.code,{children:`--bg-base`}),` + `,(0,c.jsx)(n.code,{children:`--border-subtle`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Level 2 — Floating`}),`: `,(0,c.jsx)(n.code,{children:`--bg-base`}),` + `,(0,c.jsx)(n.code,{children:`--border-default`}),` + `,(0,c.jsx)(n.code,{children:`--shadow-sm`}),` (popovers, dropdowns).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Level 3 — Modal`}),`: `,(0,c.jsx)(n.code,{children:`--bg-base`}),` + `,(0,c.jsx)(n.code,{children:`--shadow-lg`}),` + scrim (dialogs only).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`motion`,children:`Motion`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`/* Durations */
var(--duration-fastest)  /* 75ms  */
var(--duration-fast)     /* 150ms */
var(--duration-normal)   /* 250ms */
var(--duration-slow)     /* 400ms */
var(--duration-slower)   /* 600ms */

/* Easings */
var(--ease-default) / --ease-in / --ease-out / --ease-in-out / --ease-spring / --ease-campfire
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Animation utilities (in `,(0,c.jsx)(n.code,{children:`globals.css`}),`):`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:`campfire-enter         /* slide+fade up */
campfire-enter-scale   /* scale in with spring */
campfire-enter-fade    /* fade only */
campfire-stagger       /* parent class — children animate in sequence */
`})}),`
`,(0,c.jsx)(n.h2,{id:`z-index`,children:`Z-index`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`var(--z-base) / --z-dropdown / --z-sticky / --z-overlay / --z-modal
var(--z-popover) / --z-toast / --z-tooltip / --z-max
`})}),`
`,(0,c.jsx)(n.p,{children:`Always reach for these instead of raw numbers.`}),`
`,(0,c.jsx)(n.h2,{id:`lookup-recipe`,children:`Lookup recipe`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Need a color?`}),` Check semantic roles first. If none fit, check the palette ramps. Tempted to use a signature color? Decorative → signature. Functional → semantic.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Need a font?`}),` Always start at the typography tokens; never hand-set `,(0,c.jsx)(n.code,{children:`font-family`}),` for UI.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Need spacing/sizing?`}),` Use named tokens, not raw px/rem values.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Stuck?`}),` Surface to the user. Adding a new token is a deliberate act, not a workaround.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};