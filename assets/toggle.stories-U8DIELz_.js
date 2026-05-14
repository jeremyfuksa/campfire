import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{a as i,c as a,ft as o,k as s,t as c}from"./lucide-react-BZbEj6fH.js";import{n as l,t as u}from"./toggle-Btvg5jeY.js";var d,f,p,m,h,g,_,v,y,b,x,S;t((()=>{c(),l(),d=e(n(),1),f=r(),p={title:`Components/Toggle`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`outline`]},size:{control:`select`,options:[`default`,`sm`,`lg`]}}},m={args:{children:`Toggle`}},h={args:{children:(0,f.jsx)(o,{size:16}),"aria-label":`Toggle bold`}},g={args:{variant:`outline`,children:(0,f.jsx)(s,{size:16}),"aria-label":`Toggle italic`}},_={args:{size:`sm`,children:(0,f.jsx)(i,{size:14}),"aria-label":`Toggle underline`}},v={args:{size:`lg`,children:(0,f.jsx)(a,{size:18}),"aria-label":`Toggle strikethrough`}},y={render:()=>{let[e,t]=(0,d.useState)(!1);return(0,f.jsxs)(`div`,{className:`space-y-2`,children:[(0,f.jsxs)(u,{pressed:e,onPressedChange:t,children:[(0,f.jsx)(o,{size:16,className:`mr-2`}),`Bold`]}),(0,f.jsxs)(`p`,{className:`text-sm text-muted-foreground`,children:[`State: `,e?`Pressed`:`Not pressed`]})]})}},b={render:()=>(0,f.jsxs)(`div`,{className:`flex gap-1`,children:[(0,f.jsx)(u,{"aria-label":`Toggle bold`,children:(0,f.jsx)(o,{size:16})}),(0,f.jsx)(u,{"aria-label":`Toggle italic`,children:(0,f.jsx)(s,{size:16})}),(0,f.jsx)(u,{"aria-label":`Toggle underline`,children:(0,f.jsx)(i,{size:16})}),(0,f.jsx)(u,{"aria-label":`Toggle strikethrough`,children:(0,f.jsx)(a,{size:16})})]})},x={args:{disabled:!0,children:(0,f.jsx)(o,{size:16}),"aria-label":`Toggle bold`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Toggle"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Bold size={16} />,
    "aria-label": "Toggle bold"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: <Italic size={16} />,
    "aria-label": "Toggle italic"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm",
    children: <Underline size={14} />,
    "aria-label": "Toggle underline"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg",
    children: <Strikethrough size={18} />,
    "aria-label": "Toggle strikethrough"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [pressed, setPressed] = useState(false);
    return <div className="space-y-2">
        <Toggle pressed={pressed} onPressedChange={setPressed}>
          <Bold size={16} className="mr-2" />
          Bold
        </Toggle>
        <p className="text-sm text-muted-foreground">
          State: {pressed ? "Pressed" : "Not pressed"}
        </p>
      </div>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-1">
      <Toggle aria-label="Toggle bold">
        <Bold size={16} />
      </Toggle>
      <Toggle aria-label="Toggle italic">
        <Italic size={16} />
      </Toggle>
      <Toggle aria-label="Toggle underline">
        <Underline size={16} />
      </Toggle>
      <Toggle aria-label="Toggle strikethrough">
        <Strikethrough size={16} />
      </Toggle>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: <Bold size={16} />,
    "aria-label": "Toggle bold"
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`WithIcon`,`Outline`,`Small`,`Large`,`Interactive`,`TextFormatting`,`Disabled`]}))();export{m as Default,x as Disabled,y as Interactive,v as Large,g as Outline,_ as Small,b as TextFormatting,h as WithIcon,S as __namedExportsOrder,p as default};