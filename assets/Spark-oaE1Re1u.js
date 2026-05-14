import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-By-GJD48.js";import{t as n}from"./jsx-runtime-_akqGrVk.js";import{a as r,o as i}from"./blocks-DchaHupY.js";import{t as a}from"./mdx-react-shim-dFMHZ1Th.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Foundations/Spark`}),`
`,(0,c.jsx)(n.h1,{id:`spark--the-one-vivid-accent`,children:`Spark — the one vivid accent`}),`
`,(0,c.jsx)(n.p,{children:`Campfire is muted by design. Spark is the single saturated orange reserved for high-stakes moments — a live indicator, an unread beacon, the literal flame. Its loudness is earned through scarcity.`}),`
`,(0,c.jsx)(n.h2,{id:`tokens`,children:`Tokens`}),`
`,(0,c.jsxs)(n.p,{children:[`| Token | Light | Dark |
| --- | --- | --- |
| `,(0,c.jsx)(n.code,{children:`--spark`}),` | `,(0,c.jsx)(n.code,{children:`#ff5a1f`}),` | `,(0,c.jsx)(n.code,{children:`#ff6b35`}),` |
| `,(0,c.jsx)(n.code,{children:`--spark-glow`}),` | `,(0,c.jsx)(n.code,{children:`color-mix(srgb, var(--spark) 24%, transparent)`}),` | `,(0,c.jsx)(n.code,{children:`color-mix(srgb, var(--spark) 32%, transparent)`}),` |`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`--spark-glow`}),` adapts to mode automatically via `,(0,c.jsx)(n.code,{children:`color-mix`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`the-rule-of-one`,children:`The Rule of One`}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsx)(n.p,{children:`If you can already see Spark on the page, you cannot add another instance. The first use wins.`}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`This is `,(0,c.jsx)(n.strong,{children:`the rule`}),`, not a guideline. It's enforced by code review. There is intentionally no `,(0,c.jsx)(n.code,{children:`<Spark>`}),`, `,(0,c.jsx)(n.code,{children:`<SparkBadge>`}),`, or `,(0,c.jsx)(n.code,{children:`<SparkDot>`}),` component — the Rule of One is the API. If there's no component to repeat, repetition becomes harder.`]}),`
`,(0,c.jsx)(n.h2,{id:`use-spark-for`,children:`Use Spark for`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Live, recording, or streaming indicators`}),` — the pulsing dot. Use the `,(0,c.jsx)(n.code,{children:`spark-pulse`}),` utility (animates a halo using `,(0,c.jsx)(n.code,{children:`--spark-glow`}),`, auto-reduces under `,(0,c.jsx)(n.code,{children:`prefers-reduced-motion`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Critical unread / new-activity beacons`}),` — the "you have one important new thing" dot.`]}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.strong,{children:`The flame ember in the Campfire logo mark.`})}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`One brand-spark accent per editorial spread`}),` — an underline on a single key word, a glyph between sections.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`A single hero CTA in marketing-grade moments`}),` — only when the CTA is the most important action on the page.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`dont-use-spark-for`,children:`Don't use Spark for`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`General primary actions`}),` — that's `,(0,c.jsx)(n.code,{children:`--primary-600`}),`. Spark is not a "more important primary."`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Errors or warnings`}),` — those have their own ramps (`,(0,c.jsx)(n.code,{children:`danger.*`}),`, `,(0,c.jsx)(n.code,{children:`warning.*`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hover states, dividers, borders, gradients, chrome`}),` — Spark doesn't get hover variants.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Body text, links, or anything repeated within a single view`}),` — repetition kills the signal.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Decorative tinting`}),` — Spark is signal, not surface.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`utility-classes`,children:`Utility classes`}),`
`,(0,c.jsxs)(n.p,{children:[`| Class | Effect |
| --- | --- |
| `,(0,c.jsx)(n.code,{children:`text-spark`}),` | `,(0,c.jsx)(n.code,{children:`color: var(--spark)`}),` |
| `,(0,c.jsx)(n.code,{children:`bg-spark`}),` | `,(0,c.jsx)(n.code,{children:`background-color: var(--spark)`}),` |
| `,(0,c.jsx)(n.code,{children:`ring-spark`}),` | 4px halo using `,(0,c.jsx)(n.code,{children:`var(--spark-glow)`}),` |
| `,(0,c.jsx)(n.code,{children:`spark-pulse`}),` | Live-indicator keyframe animation |`]}),`
`,(0,c.jsxs)(n.p,{children:[`See the `,(0,c.jsx)(n.strong,{children:`Components / Foundations`}),` section for canonical Spark usage examples (live dot, unread beacon, hero CTA, editorial underline).`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};