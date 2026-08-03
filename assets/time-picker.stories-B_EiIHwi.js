import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{n as r,t as i}from"./label-5Hovh9ZK.js";import{n as a,t as o}from"./time-picker-D3nvIxeh.js";var s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{s=t(),r(),a(),c=n(),l={title:`Components/TimePicker`,component:o,parameters:{layout:`centered`},tags:[`autodocs`]},u={render:()=>{let[e,t]=(0,s.useState)(`08:00`);return(0,c.jsx)(o,{value:e,onChange:t})}},d={render:()=>{let[e,t]=(0,s.useState)(`14:30`);return(0,c.jsx)(o,{value:e,onChange:t,use24Hour:!0})}},f={render:()=>{let[e,t]=(0,s.useState)(`09:45`);return(0,c.jsx)(o,{value:e,onChange:t,minuteStep:15,className:`w-[220px]`})}},p={render:()=>{let[e,t]=(0,s.useState)(`09:00`);return(0,c.jsxs)(`div`,{className:`space-y-2 w-[200px]`,children:[(0,c.jsx)(i,{children:`Select Time`}),(0,c.jsx)(o,{value:e,onChange:t}),e&&(0,c.jsxs)(`p`,{className:`text-sm text-muted-foreground`,children:[`Selected: `,e]})]})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState("08:00");
    return <TimePicker value={time} onChange={setTime} />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState("14:30");
    return <TimePicker value={time} onChange={setTime} use24Hour />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState("09:45");
    return <TimePicker value={time} onChange={setTime} minuteStep={15} className="w-[220px]" />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState("09:00");
    return <div className="space-y-2 w-[200px]">
        <Label>Select Time</Label>
        <TimePicker value={time} onChange={setTime} />
        {time && <p className="text-sm text-muted-foreground">Selected: {time}</p>}
      </div>;
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`With24Hour`,`WithMinuteStep`,`WithLabel`]})))()}h();export{u as Default,d as With24Hour,p as WithLabel,f as WithMinuteStep,m as __namedExportsOrder,l as default};