import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{n as i,t as a}from"./check-B4Mqbaut.js";import{n as o,t as s}from"./copy-CpBKtLnH.js";import{r as c,t as l}from"./button-CTqIoSi4.js";function u({text:e,variant:t=`ghost`,size:n=`sm`,showText:r=!0,className:i}){let[o,c]=(0,d.useState)(!1);return(0,f.jsxs)(l,{variant:t,size:n,onClick:async()=>{let t=navigator.clipboard??globalThis.__clipboardMock;await t?.writeText?.(e);let n=globalThis.__clipboardMock;n&&n!==t&&await n.writeText?.(e),c(!0),setTimeout(()=>c(!1),2e3)},className:i,children:[o?(0,f.jsx)(a,{size:16,"aria-hidden":`true`}):(0,f.jsx)(s,{size:16,"aria-hidden":`true`}),r&&(0,f.jsx)(`span`,{className:`ml-2`,children:o?`Copied!`:`Copy`})]})}var d,f;function p(){return(p=t((()=>{d=e(n(),1),i(),o(),c(),f=r(),u.__docgenInfo={description:``,methods:[],displayName:`CopyButton`,props:{text:{required:!0,tsType:{name:`string`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'ghost' | 'outline'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'ghost'`},{name:`literal`,value:`'outline'`}]},description:``,defaultValue:{value:`'ghost'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'default' | 'sm' | 'lg' | 'icon'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'sm'`},{name:`literal`,value:`'lg'`},{name:`literal`,value:`'icon'`}]},description:``,defaultValue:{value:`'sm'`,computed:!1}},showText:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var m,h,g,_,v;function y(){return(y=t((()=>{p(),m={title:`Components/CopyButton`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`ghost`,`outline`]},size:{control:`select`,options:[`default`,`sm`,`lg`,`icon`]},showText:{control:`boolean`}}},h={args:{text:`campfire-design-system`,showText:!0}},g={args:{text:`campfire-design-system`,size:`icon`,showText:!1}},_={args:{text:`https://example.com/share`,variant:`outline`}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    text: "campfire-design-system",
    showText: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    text: "campfire-design-system",
    size: "icon",
    showText: false
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    text: "https://example.com/share",
    variant: "outline"
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`IconOnly`,`Outline`]})))()}y();export{h as Default,g as IconOnly,_ as Outline,v as __namedExportsOrder,m as default};