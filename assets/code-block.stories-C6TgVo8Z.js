import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{n as i,t as a}from"./check-B4Mqbaut.js";import{n as o,t as s}from"./copy-CpBKtLnH.js";import{n as c,t as l}from"./utils-DwVtoTFj.js";import{r as u,t as d}from"./button-CTqIoSi4.js";function f({code:e,language:t=`javascript`,showLineNumbers:n=!1,className:r}){let[i,o]=(0,p.useState)(!1),c=()=>{let t=navigator.clipboard??globalThis.__clipboardMock;t?.writeText?.(e);let n=globalThis.__clipboardMock;n&&n!==t&&n.writeText?.(e),o(!0),setTimeout(()=>o(!1),2e3)},u=e.split(`
`);return(0,m.jsxs)(`div`,{className:l(`relative rounded-lg overflow-hidden`,r),style:{backgroundColor:`var(--neutral-900)`},children:[(0,m.jsxs)(`div`,{className:`flex items-center justify-between px-4 py-2 border-b`,style:{borderColor:`var(--neutral-800)`},children:[(0,m.jsx)(`span`,{style:{fontSize:`12px`,color:`var(--neutral-400)`,fontFamily:`var(--font-mono)`},children:t}),(0,m.jsxs)(d,{variant:`ghost`,size:`sm`,onClick:c,style:{color:`var(--neutral-400)`},children:[i?(0,m.jsx)(a,{size:14,"aria-hidden":`true`}):(0,m.jsx)(s,{size:14,"aria-hidden":`true`}),(0,m.jsx)(`span`,{className:`ml-2`,children:i?`Copied!`:`Copy`})]})]}),(0,m.jsx)(`div`,{className:`overflow-x-auto`,children:(0,m.jsx)(`pre`,{className:`p-4`,style:{margin:0},children:(0,m.jsx)(`code`,{style:{fontFamily:`var(--font-mono)`,fontSize:`14px`,lineHeight:`1.6`,color:`var(--neutral-100)`},children:n?u.map((e,t)=>(0,m.jsxs)(`div`,{className:`flex`,children:[(0,m.jsx)(`span`,{className:`select-none mr-4 text-right`,style:{width:`2em`,color:`var(--neutral-600)`},children:t+1}),(0,m.jsx)(`span`,{children:e})]},t)):e})})})]})}var p,m;function h(){return(h=t((()=>{p=e(n(),1),i(),o(),c(),u(),m=r(),f.__docgenInfo={description:``,methods:[],displayName:`CodeBlock`,props:{code:{required:!0,tsType:{name:`string`},description:``},language:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'javascript'`,computed:!1}},showLineNumbers:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var g,_,v,y,b,x;function S(){return(S=t((()=>{h(),g={title:`Components/CodeBlock`,component:f,parameters:{layout:`padded`},tags:[`autodocs`],argTypes:{language:{control:`text`},showLineNumbers:{control:`boolean`}}},_=`import { Button } from '@jeremyfuksa/campfire';

export function Example() {
  return <Button>Gather around</Button>;
}`,v={args:{code:_,language:`tsx`}},y={args:{code:_,language:`tsx`,showLineNumbers:!0}},b={args:{code:`npm install @jeremyfuksa/campfire
npm run dev`,language:`bash`}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    code: sample,
    language: "tsx"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    code: sample,
    language: "tsx",
    showLineNumbers: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    code: "npm install @jeremyfuksa/campfire\\nnpm run dev",
    language: "bash"
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`WithLineNumbers`,`Bash`]})))()}S();export{b as Bash,v as Default,y as WithLineNumbers,x as __namedExportsOrder,g as default};