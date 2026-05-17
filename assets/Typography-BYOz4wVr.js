import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-By-GJD48.js";import{t as n}from"./jsx-runtime-_akqGrVk.js";import{a as r,o as i}from"./blocks-DchaHupY.js";import{t as a}from"./mdx-react-shim-BdW8_y3v.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Foundations/Typography`}),`
`,(0,c.jsx)(n.h1,{id:`typography`,children:`Typography`}),`
`,(0,c.jsxs)(n.p,{children:[`Four families across two deployment contexts, with strict rules about where each family is allowed. Two grotesks (Hanken Grotesk + Space Grotesk) split the sans-serif workload by `,(0,c.jsx)(n.strong,{children:`role`}),`, not by surface, so the same page can use both without context-switching feeling jarring.`]}),`
`,(0,c.jsx)(n.h2,{id:`the-role-split`,children:`The role split`}),`
`,(0,c.jsxs)(n.p,{children:[`| Role | Family | Token | Mechanism |
| --- | --- | --- | --- |
| Body prose, ledes, captions, blockquote | `,(0,c.jsx)(n.strong,{children:`Hanken Grotesk`}),` | `,(0,c.jsx)(n.code,{children:`--font-body`}),` | Applied to bare `,(0,c.jsx)(n.code,{children:`<p>`}),`, `,(0,c.jsx)(n.code,{children:`<figcaption>`}),`, `,(0,c.jsx)(n.code,{children:`<blockquote>`}),` in `,(0,c.jsx)(n.code,{children:`globals.css`}),` |
| Labels, buttons, navigation, software headings (h1–h6), eyebrows | `,(0,c.jsx)(n.strong,{children:`Space Grotesk`}),` | `,(0,c.jsx)(n.code,{children:`--font-sans`}),` | Default on `,(0,c.jsx)(n.code,{children:`<body>`}),`; everything inherits it unless overridden |
| Editorial display (`,(0,c.jsx)(n.code,{children:`editorial-h1`}),`–`,(0,c.jsx)(n.code,{children:`h3`}),`, pullquote text, metric values) | `,(0,c.jsx)(n.strong,{children:`Fraunces`}),` | `,(0,c.jsx)(n.code,{children:`--font-heading-editorial`}),` | Explicit `,(0,c.jsx)(n.code,{children:`font-family: var(--font-heading-editorial)`}),` on editorial elements only |
| Code, raw token values, `,(0,c.jsx)(n.code,{children:`<kbd>`}),`, tabular numerics | `,(0,c.jsx)(n.strong,{children:`Fira Code`}),` | `,(0,c.jsx)(n.code,{children:`--font-mono`}),` | Applied to `,(0,c.jsx)(n.code,{children:`<code>`}),`, `,(0,c.jsx)(n.code,{children:`<kbd>`}),`, `,(0,c.jsx)(n.code,{children:`<samp>`}),`, `,(0,c.jsx)(n.code,{children:`<pre>`}),` |`]}),`
`,(0,c.jsx)(n.h2,{id:`the-bodyui-test`,children:`The body/UI test`}),`
`,(0,c.jsx)(n.p,{children:`When unsure which family an element gets:`}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`Is this text a paragraph of prose, `,(0,c.jsx)(n.strong,{children:`OR`}),` a label / heading / affordance?`]}),`
`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Prose → `,(0,c.jsx)(n.strong,{children:`Hanken Grotesk`}),` via `,(0,c.jsx)(n.code,{children:`--font-body`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Label / heading / affordance → `,(0,c.jsx)(n.strong,{children:`Space Grotesk`}),` via `,(0,c.jsx)(n.code,{children:`--font-sans`}),` (the inherited default, so no class needed).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`There is no third category. If you find yourself reaching for one because it "feels right" without the test giving a clear answer, the design probably needs sharpening, not a font choice.`}),`
`,(0,c.jsx)(n.h2,{id:`fraunces-super-wonk`,children:`Fraunces super wonk`}),`
`,(0,c.jsxs)(n.p,{children:[`Editorial Fraunces uses the variation `,(0,c.jsx)(n.code,{children:`'opsz' 144, 'SOFT' 100, 'WONK' 1`}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:`opsz`}),` 144`]}),` — full display-grade optical sizing. Engages the most pronounced display features.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:`SOFT`}),` 100`]}),` — maximally soft, rounded terminals. Warms the letterforms.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:`WONK`}),` 1`]}),` — engages the WONK alternates: the curling `,(0,c.jsx)(n.code,{children:`t`}),`, the looping `,(0,c.jsx)(n.code,{children:`g`}),`, the playful `,(0,c.jsx)(n.code,{children:`y`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`The full variation is exposed as `,(0,c.jsx)(n.code,{children:`--editorial-font-variation`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`font-family: var(--font-heading-editorial);
font-variation-settings: var(--editorial-font-variation);
`})}),`
`,(0,c.jsx)(n.h2,{id:`donts`,children:`Don'ts`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Don't mix Hanken Grotesk and Space Grotesk by gut. The split is mechanical — prose vs. UI/label/heading/affordance.`}),`
`,(0,c.jsx)(n.li,{children:`Don't use Hanken Grotesk for headings. Software h1–h6 are Space Grotesk; editorial h1–h3 / pullquote / metric are Fraunces.`}),`
`,(0,c.jsx)(n.li,{children:`Don't use Fira Code on non-technical UI (CTAs, links, badges, navigation, eyebrows, dates, hero copy, body prose).`}),`
`,(0,c.jsx)(n.li,{children:`Don't use Fraunces in software UI surfaces.`}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`See `,(0,c.jsx)(n.code,{children:`design.md`}),` for the complete typography rules and rationale.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};