import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,a as n,o as r,w as i}from"./blocks-CHd2J-Qr.js";import{t as a}from"./jsx-runtime-ATHzeHXA.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Foundations/Layout`}),`
`,(0,c.jsx)(t.h1,{id:`layout`,children:`Layout`}),`
`,(0,c.jsx)(t.p,{children:`Campfire uses an 8px-derived rhythm expressed through a 4px base unit. The 4px quantum gives finer control for icon alignment and form-field interiors without losing predictable rhythm at component scale.`}),`
`,(0,c.jsx)(t.h2,{id:`grid`,children:`Grid`}),`
`,(0,c.jsxs)(t.p,{children:[`12-column max-width container at `,(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`80rem`}),` (1280px)`]}),`. Gutters scale from `,(0,c.jsx)(t.code,{children:`1rem`}),` on mobile to `,(0,c.jsx)(t.code,{children:`1.5rem`}),` on desktop.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<div className="max-w-[80rem] mx-auto px-4 md:px-6">
  <div className="grid grid-cols-12 gap-4 md:gap-6">
    {/* 12 column slots */}
  </div>
</div>
`})}),`
`,(0,c.jsx)(t.h2,{id:`application-chrome`,children:`Application chrome`}),`
`,(0,c.jsx)(t.p,{children:`Reserved dimension tokens for app shell:`}),`
`,(0,c.jsxs)(t.p,{children:[`| Slot           | Token                  | Value     |
| -------------- | ---------------------- | --------- |
| Header         | `,(0,c.jsx)(t.code,{children:`--height-header`}),`      | `,(0,c.jsx)(t.code,{children:`5rem`}),`    |
| Secondary nav  | `,(0,c.jsx)(t.code,{children:`--height-secondary-nav`}),` | `,(0,c.jsx)(t.code,{children:`3.75rem`}),` |
| Sidebar        | `,(0,c.jsx)(t.code,{children:`--width-sidebar`}),`      | `,(0,c.jsx)(t.code,{children:`16rem`}),`   |`]}),`
`,(0,c.jsx)(t.h2,{id:`spacing-scale`,children:`Spacing scale`}),`
`,(0,c.jsx)(t.p,{children:`Token-driven; maps 1:1 to Tailwind utility classes.`}),`
`,(0,c.jsxs)(t.p,{children:[`| Token | rem | px | Tailwind class |
| --- | --- | --- | --- |
| `,(0,c.jsx)(t.code,{children:`--spacing-xxs`}),`   | `,(0,c.jsx)(t.code,{children:`0.25rem`}),` | 4   | `,(0,c.jsx)(t.code,{children:`p-1`}),`, `,(0,c.jsx)(t.code,{children:`gap-1`}),`   |
| `,(0,c.jsx)(t.code,{children:`--spacing-xs`}),`    | `,(0,c.jsx)(t.code,{children:`0.5rem`}),`  | 8   | `,(0,c.jsx)(t.code,{children:`p-2`}),`, `,(0,c.jsx)(t.code,{children:`gap-2`}),`   |
| `,(0,c.jsx)(t.code,{children:`--spacing-sm`}),`    | `,(0,c.jsx)(t.code,{children:`0.75rem`}),` | 12  | `,(0,c.jsx)(t.code,{children:`p-3`}),`, `,(0,c.jsx)(t.code,{children:`gap-3`}),`   |
| `,(0,c.jsx)(t.code,{children:`--spacing-md`}),`    | `,(0,c.jsx)(t.code,{children:`1rem`}),`    | 16  | `,(0,c.jsx)(t.code,{children:`p-4`}),`, `,(0,c.jsx)(t.code,{children:`gap-4`}),`   |
| `,(0,c.jsx)(t.code,{children:`--spacing-lg`}),`    | `,(0,c.jsx)(t.code,{children:`1.25rem`}),` | 20  | `,(0,c.jsx)(t.code,{children:`p-5`}),`, `,(0,c.jsx)(t.code,{children:`gap-5`}),`   |
| `,(0,c.jsx)(t.code,{children:`--spacing-xl`}),`    | `,(0,c.jsx)(t.code,{children:`1.5rem`}),`  | 24  | `,(0,c.jsx)(t.code,{children:`p-6`}),`, `,(0,c.jsx)(t.code,{children:`gap-6`}),`   |
| `,(0,c.jsx)(t.code,{children:`--spacing-xxl`}),`   | `,(0,c.jsx)(t.code,{children:`2rem`}),`    | 32  | `,(0,c.jsx)(t.code,{children:`p-8`}),`, `,(0,c.jsx)(t.code,{children:`gap-8`}),`   |
| `,(0,c.jsx)(t.code,{children:`--spacing-xxxl`}),`  | `,(0,c.jsx)(t.code,{children:`2.5rem`}),`  | 40  | `,(0,c.jsx)(t.code,{children:`p-10`}),`, `,(0,c.jsx)(t.code,{children:`gap-10`}),` |
| `,(0,c.jsx)(t.code,{children:`--spacing-huge`}),`  | `,(0,c.jsx)(t.code,{children:`3rem`}),`    | 48  | `,(0,c.jsx)(t.code,{children:`p-12`}),`, `,(0,c.jsx)(t.code,{children:`gap-12`}),` |
| `,(0,c.jsx)(t.code,{children:`--spacing-giant`}),` | `,(0,c.jsx)(t.code,{children:`4rem`}),`    | 64  | `,(0,c.jsx)(t.code,{children:`p-16`}),`, `,(0,c.jsx)(t.code,{children:`gap-16`}),` |`]}),`
`,(0,c.jsx)(t.h2,{id:`named-layout-slots`,children:`Named layout slots`}),`
`,(0,c.jsx)(t.p,{children:`Use these instead of raw spacing tokens for chrome-level layout decisions:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`var(--spacing-container-padding)  /* 1.5rem — outer container padding */
var(--spacing-card-gap)           /* 1rem — gap between cards in a grid */
var(--spacing-section-margin)     /* 4rem — vertical rhythm between sections */
`})}),`
`,(0,c.jsx)(t.h2,{id:`density`,children:`Density`}),`
`,(0,c.jsxs)(t.p,{children:[`Components default to a `,(0,c.jsx)(t.strong,{children:`comfortable`}),` density. A future `,(0,c.jsx)(t.code,{children:`compact`}),` variant can be introduced by halving vertical padding tokens without retouching component code.`]}),`
`,(0,c.jsx)(t.h2,{id:`containment`,children:`Containment`}),`
`,(0,c.jsx)(t.p,{children:`Every page has at most one full-bleed surface. Cards, panels, and tables sit inside max-width containers so line lengths stay readable on ultra-wide displays.`}),`
`,(0,c.jsx)(t.h2,{id:`responsive-breakpoints`,children:`Responsive breakpoints`}),`
`,(0,c.jsxs)(t.p,{children:[`Tailwind defaults — no custom breakpoints. Most components are mobile-first; explicit breakpoint utilities (`,(0,c.jsx)(t.code,{children:`md:`}),`, `,(0,c.jsx)(t.code,{children:`lg:`}),`, `,(0,c.jsx)(t.code,{children:`xl:`}),`) handle desktop layouts.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:`sm   640px
md   768px
lg   1024px
xl   1280px  ← also the max-width container
2xl  1536px
`})}),`
`,(0,c.jsx)(t.h2,{id:`layout-primitives-in-the-library`,children:`Layout primitives in the library`}),`
`,(0,c.jsx)(t.p,{children:`Use these instead of hand-rolling layout structures:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`<PageWithSidebar>`})}),` — left sidebar + main content shell (used by app surfaces).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`<Card>`}),` / `,(0,c.jsx)(t.code,{children:`<CardHeader>`}),` / `,(0,c.jsx)(t.code,{children:`<CardContent>`}),` / `,(0,c.jsx)(t.code,{children:`<CardFooter>`})]}),` — Level 1/2 surfaces.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`<Sheet>`}),` / `,(0,c.jsx)(t.code,{children:`<Drawer>`}),` / `,(0,c.jsx)(t.code,{children:`<Dialog>`})]}),` — overlay primitives (Radix-backed; correct focus management).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`<ResizablePanelGroup>`}),` / `,(0,c.jsx)(t.code,{children:`<ResizablePanel>`}),` / `,(0,c.jsx)(t.code,{children:`<ResizableHandle>`})]}),` — split panes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`<ScrollArea>`})}),` — themed custom scrollbar.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`See the `,(0,c.jsx)(t.strong,{children:`Components`}),` section for stories demonstrating each.`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=a(),t(),r()})))()}l();export{s as default};