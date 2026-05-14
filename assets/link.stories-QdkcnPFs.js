import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-XedgCGTy.js";import{t as n}from"./jsx-runtime-_akqGrVk.js";import{V as r,t as i}from"./lucide-react-CRUNCA_B.js";import{n as a,t as o}from"./utils-D2Sa0ztS.js";function s({children:e,variant:t=`default`,underline:n=`hover`,external:i=!1,className:a,style:s,...l}){return(0,c.jsxs)(`a`,{className:o(`transition-colors cursor-pointer`,(()=>{switch(t){case`subtle`:return`text-muted-foreground hover:text-foreground`;case`bold`:return`text-primary hover:text-primary/90`;case`muted`:return`text-(--text-tertiary) hover:text-muted-foreground`;default:return`text-primary hover:text-primary/90`}})(),t===`bold`?`font-medium`:``,(()=>{switch(n){case`always`:return`underline`;case`hover`:return`hover:underline`;case`none`:return``}})(),a),style:s,"data-slot":`link`,...i&&{target:`_blank`,rel:`noopener noreferrer`},...l,children:[e,i&&(0,c.jsx)(r,{size:12,className:`inline-block ml-1 align-[-0.15em]`,"data-testid":`link-external-icon`,"aria-hidden":`true`})]})}var c,l=e((()=>{t(),i(),a(),c=n(),s.__docgenInfo={description:``,methods:[],displayName:`Link`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'subtle' | 'bold' | 'muted'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'subtle'`},{name:`literal`,value:`'bold'`},{name:`literal`,value:`'muted'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},underline:{required:!1,tsType:{name:`union`,raw:`'always' | 'hover' | 'none'`,elements:[{name:`literal`,value:`'always'`},{name:`literal`,value:`'hover'`},{name:`literal`,value:`'none'`}]},description:``,defaultValue:{value:`'hover'`,computed:!1}},external:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})),u,d,f,p,m,h,g;e((()=>{l(),u=n(),d={title:`Components/Link`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`subtle`,`bold`,`muted`]},underline:{control:`select`,options:[`always`,`hover`,`none`]},external:{control:`boolean`}}},f={args:{href:`#`,children:`Read the docs`}},p={args:{href:`https://example.com`,external:!0,children:`Visit example.com`}},m={render:()=>(0,u.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,u.jsx)(s,{href:`#`,variant:`default`,children:`Default link`}),(0,u.jsx)(s,{href:`#`,variant:`bold`,children:`Bold link`}),(0,u.jsx)(s,{href:`#`,variant:`subtle`,children:`Subtle link`}),(0,u.jsx)(s,{href:`#`,variant:`muted`,children:`Muted link`})]})},h={render:()=>(0,u.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,u.jsx)(s,{href:`#`,underline:`always`,children:`Always underlined`}),(0,u.jsx)(s,{href:`#`,underline:`hover`,children:`Underlined on hover`}),(0,u.jsx)(s,{href:`#`,underline:`none`,children:`No underline`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    href: "#",
    children: "Read the docs"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    href: "https://example.com",
    external: true,
    children: "Visit example.com"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Link href="#" variant="default">Default link</Link>
      <Link href="#" variant="bold">Bold link</Link>
      <Link href="#" variant="subtle">Subtle link</Link>
      <Link href="#" variant="muted">Muted link</Link>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Link href="#" underline="always">Always underlined</Link>
      <Link href="#" underline="hover">Underlined on hover</Link>
      <Link href="#" underline="none">No underline</Link>
    </div>
}`,...h.parameters?.docs?.source}}},g=[`Default`,`External`,`Variants`,`UnderlineModes`]}))();export{f as Default,p as External,h as UnderlineModes,m as Variants,g as __namedExportsOrder,d as default};