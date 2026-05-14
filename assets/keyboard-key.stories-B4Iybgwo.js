import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{n as i,t as a}from"./utils-CDLLjGU_.js";function o({children:e,className:t}){return(0,l.jsx)(`kbd`,{className:a(`inline-flex items-center justify-center px-2 py-1 rounded-sm border shadow-2xs min-w-7 text-xs font-mono bg-background border-border text-muted-foreground`,t),children:e})}function s({keys:e,separator:t=`+`,className:n}){return(0,l.jsx)(`span`,{className:a(`inline-flex items-center gap-1`,n),children:e.map((n,r)=>(0,l.jsxs)(c.Fragment,{children:[(0,l.jsx)(o,{children:n}),r<e.length-1&&(0,l.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:t})]},r))})}var c,l,u=t((()=>{c=e(n(),1),i(),l=r(),o.__docgenInfo={description:``,methods:[],displayName:`KeyboardKey`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},s.__docgenInfo={description:``,methods:[],displayName:`KeyboardShortcut`,props:{keys:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},separator:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"+"`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),d,f,p,m,h,g,_,v;t((()=>{u(),d=r(),f={title:`Components/KeyboardKey`,component:o,parameters:{layout:`centered`},tags:[`autodocs`]},p={args:{children:`K`}},m={render:()=>(0,d.jsxs)(`div`,{className:`flex gap-2`,children:[(0,d.jsx)(o,{children:`Esc`}),(0,d.jsx)(o,{children:`Tab`}),(0,d.jsx)(o,{children:`Space`}),(0,d.jsx)(o,{children:`Enter`})]})},h={render:()=>(0,d.jsx)(s,{keys:[`⌘`,`K`]})},g={render:()=>(0,d.jsx)(s,{keys:[`Ctrl`,`Shift`,`P`]})},_={render:()=>(0,d.jsx)(s,{keys:[`g`,`p`],separator:`then`})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: "K"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <KeyboardKey>Esc</KeyboardKey>
      <KeyboardKey>Tab</KeyboardKey>
      <KeyboardKey>Space</KeyboardKey>
      <KeyboardKey>Enter</KeyboardKey>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <KeyboardShortcut keys={["⌘", "K"]} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <KeyboardShortcut keys={["Ctrl", "Shift", "P"]} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <KeyboardShortcut keys={["g", "p"]} separator="then" />
}`,..._.parameters?.docs?.source}}},v=[`Default`,`SingleKeys`,`Shortcut`,`ChainedShortcut`,`SequentialShortcut`]}))();export{g as ChainedShortcut,p as Default,_ as SequentialShortcut,h as Shortcut,m as SingleKeys,v as __namedExportsOrder,f as default};