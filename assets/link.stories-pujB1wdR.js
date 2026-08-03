import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{n as r,t as i}from"./createLucideIcon-D4Czp6j_.js";import{n as a,t as o}from"./utils-DwVtoTFj.js";var s,c;function l(){return(l=e((()=>{r(),s=[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]],c=i(`external-link`,s)})))()}function u({children:e,variant:t=`default`,underline:n=`hover`,external:r=!1,className:i,style:a,...s}){return(0,d.jsxs)(`a`,{className:o(`transition-colors cursor-pointer`,(()=>{switch(t){case`subtle`:return`text-muted-foreground hover:text-foreground`;case`bold`:return`text-primary hover:text-primary/90`;case`muted`:return`text-(--text-tertiary) hover:text-muted-foreground`;default:return`text-primary hover:text-primary/90`}})(),t===`bold`?`font-medium`:``,(()=>{switch(n){case`always`:return`underline`;case`hover`:return`hover:underline`;case`none`:return``}})(),i),style:a,"data-slot":`link`,...r&&{target:`_blank`,rel:`noopener noreferrer`},...s,children:[e,r&&(0,d.jsx)(c,{size:12,className:`inline-block ml-1 align-[-0.15em]`,"data-testid":`link-external-icon`,"aria-hidden":`true`})]})}var d;function f(){return(f=e((()=>{t(),l(),a(),d=n(),u.__docgenInfo={description:``,methods:[],displayName:`Link`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'subtle' | 'bold' | 'muted'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'subtle'`},{name:`literal`,value:`'bold'`},{name:`literal`,value:`'muted'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},underline:{required:!1,tsType:{name:`union`,raw:`'always' | 'hover' | 'none'`,elements:[{name:`literal`,value:`'always'`},{name:`literal`,value:`'hover'`},{name:`literal`,value:`'none'`}]},description:``,defaultValue:{value:`'hover'`,computed:!1}},external:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})))()}var p,m,h,g,_,v,y;function b(){return(b=e((()=>{f(),p=n(),m={title:`Components/Link`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`subtle`,`bold`,`muted`]},underline:{control:`select`,options:[`always`,`hover`,`none`]},external:{control:`boolean`}}},h={args:{href:`#`,children:`Read the docs`}},g={args:{href:`https://example.com`,external:!0,children:`Visit example.com`}},_={render:()=>(0,p.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,p.jsx)(u,{href:`#`,variant:`default`,children:`Default link`}),(0,p.jsx)(u,{href:`#`,variant:`bold`,children:`Bold link`}),(0,p.jsx)(u,{href:`#`,variant:`subtle`,children:`Subtle link`}),(0,p.jsx)(u,{href:`#`,variant:`muted`,children:`Muted link`})]})},v={render:()=>(0,p.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,p.jsx)(u,{href:`#`,underline:`always`,children:`Always underlined`}),(0,p.jsx)(u,{href:`#`,underline:`hover`,children:`Underlined on hover`}),(0,p.jsx)(u,{href:`#`,underline:`none`,children:`No underline`})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    href: "#",
    children: "Read the docs"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    href: "https://example.com",
    external: true,
    children: "Visit example.com"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Link href="#" variant="default">Default link</Link>
      <Link href="#" variant="bold">Bold link</Link>
      <Link href="#" variant="subtle">Subtle link</Link>
      <Link href="#" variant="muted">Muted link</Link>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Link href="#" underline="always">Always underlined</Link>
      <Link href="#" underline="hover">Underlined on hover</Link>
      <Link href="#" underline="none">No underline</Link>
    </div>
}`,...v.parameters?.docs?.source}}},y=[`Default`,`External`,`Variants`,`UnderlineModes`]})))()}b();export{h as Default,g as External,v as UnderlineModes,_ as Variants,y as __namedExportsOrder,m as default};