import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{n as i,t as a}from"./utils-D2Sa0ztS.js";var o,s,c,l,u,d=t((()=>{o=e(n(),1),i(),s=r(),c={sm:`h-4 w-4 border-2`,md:`h-8 w-8 border-2`,lg:`h-12 w-12 border-[3px]`,xl:`h-16 w-16 border-4`},l={default:`border-muted-foreground/30 border-t-muted-foreground`,primary:`border-primary/30 border-t-primary`,success:`border-success-200 border-t-success-600`,warning:`border-warning-200 border-t-warning-600`,danger:`border-danger-200 border-t-danger-600`,info:`border-info-200 border-t-info-600`},u=o.forwardRef(({size:e=`md`,variant:t=`default`,className:n,...r},i)=>(0,s.jsx)(`div`,{ref:i,role:`status`,"aria-label":`Loading`,className:a(`inline-block animate-spin rounded-full`,c[e],l[t],n),...r,children:(0,s.jsx)(`span`,{className:`sr-only`,children:`Loading...`})})),u.displayName=`Spinner`,u.__docgenInfo={description:``,methods:[],displayName:`Spinner`,props:{size:{required:!1,tsType:{name:`union`,raw:`"sm" | "md" | "lg" | "xl"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`| "default"
| "primary"
| "success"
| "warning"
| "danger"
| "info"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"primary"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"danger"`},{name:`literal`,value:`"info"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}}}}})),f,p,m,h,g,_,v,y,b,x,S;t((()=>{d(),f=r(),p={title:`Components/Spinner`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`,`xl`]}}},m={args:{size:`md`}},h={args:{size:`sm`}},g={args:{size:`md`}},_={args:{size:`lg`}},v={args:{size:`xl`}},y={render:()=>(0,f.jsxs)(`div`,{className:`flex items-end gap-4`,children:[(0,f.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,f.jsx)(u,{size:`sm`}),(0,f.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`Small`})]}),(0,f.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,f.jsx)(u,{size:`md`}),(0,f.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`Medium`})]}),(0,f.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,f.jsx)(u,{size:`lg`}),(0,f.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`Large`})]}),(0,f.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,f.jsx)(u,{size:`xl`}),(0,f.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`Extra Large`})]})]})},b={render:()=>(0,f.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,f.jsx)(u,{size:`lg`}),(0,f.jsx)(`span`,{className:`text-sm text-muted-foreground`,children:`Loading...`})]})},x={render:()=>(0,f.jsxs)(`button`,{className:`flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md`,children:[(0,f.jsx)(u,{size:`sm`}),`Loading...`]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: "xl"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-4">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="sm" />
        <span className="text-xs text-muted-foreground">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="md" />
        <span className="text-xs text-muted-foreground">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <span className="text-xs text-muted-foreground">Large</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="xl" />
        <span className="text-xs text-muted-foreground">Extra Large</span>
      </div>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col items-center gap-2">
      <Spinner size="lg" />
      <span className="text-sm text-muted-foreground">Loading...</span>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md">
      <Spinner size="sm" />
      Loading...
    </button>
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Small`,`Medium`,`Large`,`ExtraLarge`,`AllSizes`,`WithLabel`,`InButton`]}))();export{y as AllSizes,m as Default,v as ExtraLarge,x as InButton,_ as Large,g as Medium,h as Small,b as WithLabel,S as __namedExportsOrder,p as default};