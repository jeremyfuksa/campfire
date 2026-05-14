import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{q as i,st as a,t as o}from"./lucide-react-CRUNCA_B.js";import{n as s,t as c}from"./utils-D2Sa0ztS.js";import{r as l,t as u}from"./button-RVltMg_M.js";function d({code:e,language:t=`javascript`,showLineNumbers:n=!1,className:r}){let[o,s]=(0,f.useState)(!1),l=()=>{let t=navigator.clipboard??globalThis.__clipboardMock;t?.writeText?.(e);let n=globalThis.__clipboardMock;n&&n!==t&&n.writeText?.(e),s(!0),setTimeout(()=>s(!1),2e3)},d=e.split(`
`);return(0,p.jsxs)(`div`,{className:c(`relative rounded-lg overflow-hidden`,r),style:{backgroundColor:`var(--neutral-900)`},children:[(0,p.jsxs)(`div`,{className:`flex items-center justify-between px-4 py-2 border-b`,style:{borderColor:`var(--neutral-800)`},children:[(0,p.jsx)(`span`,{style:{fontSize:`12px`,color:`var(--neutral-400)`,fontFamily:`var(--font-mono)`},children:t}),(0,p.jsxs)(u,{variant:`ghost`,size:`sm`,onClick:l,style:{color:`var(--neutral-400)`},children:[o?(0,p.jsx)(a,{size:14,"aria-hidden":`true`}):(0,p.jsx)(i,{size:14,"aria-hidden":`true`}),(0,p.jsx)(`span`,{className:`ml-2`,children:o?`Copied!`:`Copy`})]})]}),(0,p.jsx)(`div`,{className:`overflow-x-auto`,children:(0,p.jsx)(`pre`,{className:`p-4`,style:{margin:0},children:(0,p.jsx)(`code`,{style:{fontFamily:`var(--font-mono)`,fontSize:`14px`,lineHeight:`1.6`,color:`var(--neutral-100)`},children:n?d.map((e,t)=>(0,p.jsxs)(`div`,{className:`flex`,children:[(0,p.jsx)(`span`,{className:`select-none mr-4 text-right`,style:{width:`2em`,color:`var(--neutral-600)`},children:t+1}),(0,p.jsx)(`span`,{children:e})]},t)):e})})})]})}var f,p,m=t((()=>{f=e(n(),1),o(),s(),l(),p=r(),d.__docgenInfo={description:``,methods:[],displayName:`CodeBlock`,props:{code:{required:!0,tsType:{name:`string`},description:``},language:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'javascript'`,computed:!1}},showLineNumbers:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),h,g,_,v,y,b;t((()=>{m(),h={title:`Components/CodeBlock`,component:d,parameters:{layout:`padded`},tags:[`autodocs`],argTypes:{language:{control:`text`},showLineNumbers:{control:`boolean`}}},g=`import { Button } from '@jeremyfuksa/campfire';

export function Example() {
  return <Button>Gather around</Button>;
}`,_={args:{code:g,language:`tsx`}},v={args:{code:g,language:`tsx`,showLineNumbers:!0}},y={args:{code:`npm install @jeremyfuksa/campfire
npm run dev`,language:`bash`}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    code: sample,
    language: "tsx"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    code: sample,
    language: "tsx",
    showLineNumbers: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    code: "npm install @jeremyfuksa/campfire\\nnpm run dev",
    language: "bash"
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`WithLineNumbers`,`Bash`]}))();export{y as Bash,_ as Default,v as WithLineNumbers,b as __namedExportsOrder,h as default};