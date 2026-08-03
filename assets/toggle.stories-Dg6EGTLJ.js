import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{c as r,d as i,f as a,l as o,n as s,o as c,p as l,s as u,t as d,u as f}from"./toggle-0ibi3dC9.js";var p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{l(),i(),o(),u(),s(),p=t(),m=n(),h={title:`Components/Toggle`,component:d,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`outline`]},size:{control:`select`,options:[`default`,`sm`,`lg`]}}},g={args:{children:`Toggle`}},_={args:{children:(0,m.jsx)(a,{size:16}),"aria-label":`Toggle bold`}},v={args:{variant:`outline`,children:(0,m.jsx)(f,{size:16}),"aria-label":`Toggle italic`}},y={args:{size:`sm`,children:(0,m.jsx)(c,{size:14}),"aria-label":`Toggle underline`}},b={args:{size:`lg`,children:(0,m.jsx)(r,{size:18}),"aria-label":`Toggle strikethrough`}},x={render:()=>{let[e,t]=(0,p.useState)(!1);return(0,m.jsxs)(`div`,{className:`space-y-2`,children:[(0,m.jsxs)(d,{pressed:e,onPressedChange:t,children:[(0,m.jsx)(a,{size:16,className:`mr-2`}),`Bold`]}),(0,m.jsxs)(`p`,{className:`text-sm text-muted-foreground`,children:[`State: `,e?`Pressed`:`Not pressed`]})]})}},S={render:()=>(0,m.jsxs)(`div`,{className:`flex gap-1`,children:[(0,m.jsx)(d,{"aria-label":`Toggle bold`,children:(0,m.jsx)(a,{size:16})}),(0,m.jsx)(d,{"aria-label":`Toggle italic`,children:(0,m.jsx)(f,{size:16})}),(0,m.jsx)(d,{"aria-label":`Toggle underline`,children:(0,m.jsx)(c,{size:16})}),(0,m.jsx)(d,{"aria-label":`Toggle strikethrough`,children:(0,m.jsx)(r,{size:16})})]})},C={args:{disabled:!0,children:(0,m.jsx)(a,{size:16}),"aria-label":`Toggle bold`}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Toggle"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Bold size={16} />,
    "aria-label": "Toggle bold"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: <Italic size={16} />,
    "aria-label": "Toggle italic"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm",
    children: <Underline size={14} />,
    "aria-label": "Toggle underline"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg",
    children: <Strikethrough size={18} />,
    "aria-label": "Toggle strikethrough"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: <Bold size={16} />,
    "aria-label": "Toggle bold"
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`WithIcon`,`Outline`,`Small`,`Large`,`Interactive`,`TextFormatting`,`Disabled`]})))()}T();export{g as Default,C as Disabled,x as Interactive,b as Large,v as Outline,y as Small,S as TextFormatting,_ as WithIcon,w as __namedExportsOrder,h as default};