import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,a as n,o as r,w as i}from"./blocks-CHd2J-Qr.js";import{t as a}from"./jsx-runtime-ATHzeHXA.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Foundations/Typography`}),`
`,(0,c.jsx)(t.h1,{id:`typography`,children:`Typography`}),`
`,(0,c.jsxs)(t.p,{children:[`Four families across two deployment contexts, with strict rules about where each family is allowed. Two grotesks (Hanken Grotesk + Space Grotesk) split the sans-serif workload by `,(0,c.jsx)(t.strong,{children:`role`}),`, not by surface, so the same page can use both without context-switching feeling jarring.`]}),`
`,(0,c.jsx)(t.h2,{id:`the-role-split`,children:`The role split`}),`
`,(0,c.jsxs)(t.p,{children:[`| Role | Family | Token | Mechanism |
| --- | --- | --- | --- |
| Body prose, ledes, captions, blockquote | `,(0,c.jsx)(t.strong,{children:`Hanken Grotesk`}),` | `,(0,c.jsx)(t.code,{children:`--font-body`}),` | Applied to bare `,(0,c.jsx)(t.code,{children:`<p>`}),`, `,(0,c.jsx)(t.code,{children:`<figcaption>`}),`, `,(0,c.jsx)(t.code,{children:`<blockquote>`}),` in `,(0,c.jsx)(t.code,{children:`globals.css`}),` |
| Labels, buttons, navigation, software headings (h1–h6), eyebrows | `,(0,c.jsx)(t.strong,{children:`Space Grotesk`}),` | `,(0,c.jsx)(t.code,{children:`--font-sans`}),` | Default on `,(0,c.jsx)(t.code,{children:`<body>`}),`; everything inherits it unless overridden |
| Editorial display (`,(0,c.jsx)(t.code,{children:`editorial-h1`}),`–`,(0,c.jsx)(t.code,{children:`h3`}),`, pullquote text, metric values) | `,(0,c.jsx)(t.strong,{children:`Fraunces`}),` | `,(0,c.jsx)(t.code,{children:`--font-heading-editorial`}),` | Explicit `,(0,c.jsx)(t.code,{children:`font-family: var(--font-heading-editorial)`}),` on editorial elements only |
| Code, raw token values, `,(0,c.jsx)(t.code,{children:`<kbd>`}),`, tabular numerics | `,(0,c.jsx)(t.strong,{children:`Fira Code`}),` | `,(0,c.jsx)(t.code,{children:`--font-mono`}),` | Applied to `,(0,c.jsx)(t.code,{children:`<code>`}),`, `,(0,c.jsx)(t.code,{children:`<kbd>`}),`, `,(0,c.jsx)(t.code,{children:`<samp>`}),`, `,(0,c.jsx)(t.code,{children:`<pre>`}),` |`]}),`
`,(0,c.jsx)(t.h2,{id:`the-bodyui-test`,children:`The body/UI test`}),`
`,(0,c.jsx)(t.p,{children:`When unsure which family an element gets:`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Is this text a paragraph of prose, `,(0,c.jsx)(t.strong,{children:`OR`}),` a label / heading / affordance?`]}),`
`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Prose → `,(0,c.jsx)(t.strong,{children:`Hanken Grotesk`}),` via `,(0,c.jsx)(t.code,{children:`--font-body`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Label / heading / affordance → `,(0,c.jsx)(t.strong,{children:`Space Grotesk`}),` via `,(0,c.jsx)(t.code,{children:`--font-sans`}),` (the inherited default, so no class needed).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`There is no third category. If you find yourself reaching for one because it "feels right" without the test giving a clear answer, the design probably needs sharpening, not a font choice.`}),`
`,(0,c.jsx)(t.h2,{id:`fraunces-super-wonk`,children:`Fraunces super wonk`}),`
`,(0,c.jsxs)(t.p,{children:[`Editorial Fraunces uses the variation `,(0,c.jsx)(t.code,{children:`'opsz' 144, 'SOFT' 100, 'WONK' 1`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`opsz`}),` 144`]}),` — full display-grade optical sizing. Engages the most pronounced display features.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`SOFT`}),` 100`]}),` — maximally soft, rounded terminals. Warms the letterforms.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`WONK`}),` 1`]}),` — engages the WONK alternates: the curling `,(0,c.jsx)(t.code,{children:`t`}),`, the looping `,(0,c.jsx)(t.code,{children:`g`}),`, the playful `,(0,c.jsx)(t.code,{children:`y`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`The full variation is exposed as `,(0,c.jsx)(t.code,{children:`--editorial-font-variation`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`font-family: var(--font-heading-editorial);
font-variation-settings: var(--editorial-font-variation);
`})}),`
`,(0,c.jsx)(t.h2,{id:`donts`,children:`Don'ts`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Don't mix Hanken Grotesk and Space Grotesk by gut. The split is mechanical — prose vs. UI/label/heading/affordance.`}),`
`,(0,c.jsx)(t.li,{children:`Don't use Hanken Grotesk for headings. Software h1–h6 are Space Grotesk; editorial h1–h3 / pullquote / metric are Fraunces.`}),`
`,(0,c.jsx)(t.li,{children:`Don't use Fira Code on non-technical UI (CTAs, links, badges, navigation, eyebrows, dates, hero copy, body prose).`}),`
`,(0,c.jsx)(t.li,{children:`Don't use Fraunces in software UI surfaces.`}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`See `,(0,c.jsx)(t.code,{children:`design.md`}),` for the complete typography rules and rationale.`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=a(),t(),r()})))()}l();export{s as default};