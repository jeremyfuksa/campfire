import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{n as i,t as a}from"./label-is7RkdCA.js";import{n as o,t as s}from"./time-picker-CgMBApjE.js";var c,l,u,d,f,p,m,h;t((()=>{c=e(n(),1),i(),o(),l=r(),u={title:`Components/TimePicker`,component:s,parameters:{layout:`centered`},tags:[`autodocs`]},d={render:()=>{let[e,t]=(0,c.useState)(`08:00`);return(0,l.jsx)(s,{value:e,onChange:t})}},f={render:()=>{let[e,t]=(0,c.useState)(`14:30`);return(0,l.jsx)(s,{value:e,onChange:t,use24Hour:!0})}},p={render:()=>{let[e,t]=(0,c.useState)(`09:45`);return(0,l.jsx)(s,{value:e,onChange:t,minuteStep:15,className:`w-[220px]`})}},m={render:()=>{let[e,t]=(0,c.useState)(`09:00`);return(0,l.jsxs)(`div`,{className:`space-y-2 w-[200px]`,children:[(0,l.jsx)(a,{children:`Select Time`}),(0,l.jsx)(s,{value:e,onChange:t}),e&&(0,l.jsxs)(`p`,{className:`text-sm text-muted-foreground`,children:[`Selected: `,e]})]})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState("08:00");
    return <TimePicker value={time} onChange={setTime} />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState("14:30");
    return <TimePicker value={time} onChange={setTime} use24Hour />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState("09:45");
    return <TimePicker value={time} onChange={setTime} minuteStep={15} className="w-[220px]" />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState("09:00");
    return <div className="space-y-2 w-[200px]">
        <Label>Select Time</Label>
        <TimePicker value={time} onChange={setTime} />
        {time && <p className="text-sm text-muted-foreground">Selected: {time}</p>}
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`With24Hour`,`WithMinuteStep`,`WithLabel`]}))();export{d as Default,f as With24Hour,m as WithLabel,p as WithMinuteStep,h as __namedExportsOrder,u as default};