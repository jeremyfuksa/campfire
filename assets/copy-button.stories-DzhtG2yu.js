import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{q as i,st as a,t as o}from"./lucide-react-BZbEj6fH.js";import{r as s,t as c}from"./button-DCO8oKDq.js";function l({text:e,variant:t=`ghost`,size:n=`sm`,showText:r=!0,className:o}){let[s,l]=(0,u.useState)(!1);return(0,d.jsxs)(c,{variant:t,size:n,onClick:async()=>{let t=navigator.clipboard??globalThis.__clipboardMock;await t?.writeText?.(e);let n=globalThis.__clipboardMock;n&&n!==t&&await n.writeText?.(e),l(!0),setTimeout(()=>l(!1),2e3)},className:o,children:[s?(0,d.jsx)(a,{size:16,"aria-hidden":`true`}):(0,d.jsx)(i,{size:16,"aria-hidden":`true`}),r&&(0,d.jsx)(`span`,{className:`ml-2`,children:s?`Copied!`:`Copy`})]})}var u,d,f=t((()=>{u=e(n(),1),o(),s(),d=r(),l.__docgenInfo={description:``,methods:[],displayName:`CopyButton`,props:{text:{required:!0,tsType:{name:`string`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'ghost' | 'outline'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'ghost'`},{name:`literal`,value:`'outline'`}]},description:``,defaultValue:{value:`'ghost'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'default' | 'sm' | 'lg' | 'icon'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'sm'`},{name:`literal`,value:`'lg'`},{name:`literal`,value:`'icon'`}]},description:``,defaultValue:{value:`'sm'`,computed:!1}},showText:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),p,m,h,g,_;t((()=>{f(),p={title:`Components/CopyButton`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`ghost`,`outline`]},size:{control:`select`,options:[`default`,`sm`,`lg`,`icon`]},showText:{control:`boolean`}}},m={args:{text:`campfire-design-system`,showText:!0}},h={args:{text:`campfire-design-system`,size:`icon`,showText:!1}},g={args:{text:`https://example.com/share`,variant:`outline`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    text: "campfire-design-system",
    showText: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    text: "campfire-design-system",
    size: "icon",
    showText: false
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    text: "https://example.com/share",
    variant: "outline"
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`IconOnly`,`Outline`]}))();export{m as Default,h as IconOnly,g as Outline,_ as __namedExportsOrder,p as default};