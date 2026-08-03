import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{n as r,t as i}from"./calendar-BRZWM7xg.js";var a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{r(),a=t(),o=n(),s={title:`Components/Calendar`,component:i,parameters:{layout:`centered`},tags:[`autodocs`]},c={render:()=>{let[e,t]=(0,a.useState)(new Date);return(0,o.jsx)(i,{mode:`single`,selected:e,onSelect:t,className:`rounded-md border`})}},l={render:()=>{let[e,t]=(0,a.useState)();return(0,o.jsx)(i,{mode:`single`,selected:e,onSelect:t,className:`rounded-md border`})}},u={render:()=>{let[e,t]=(0,a.useState)();return(0,o.jsx)(i,{mode:`range`,selected:e,onSelect:t,className:`rounded-md border`})}},d={render:()=>{let[e,t]=(0,a.useState)([]);return(0,o.jsx)(i,{mode:`multiple`,selected:e,onSelect:e=>{t(e??[])},className:`rounded-md border`,required:!1})}},f={render:()=>{let[e,t]=(0,a.useState)(new Date(2025,0,15));return(0,o.jsxs)(`div`,{className:`space-y-2`,children:[(0,o.jsx)(i,{mode:`single`,selected:e,onSelect:t,className:`rounded-md border`}),e&&(0,o.jsxs)(`p`,{className:`text-sm text-muted-foreground text-center`,children:[`Selected: `,e.toLocaleDateString()]})]})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />;
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    return <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [dateRange, setDateRange] = useState<DateRange | undefined>();
    return <Calendar mode="range" selected={dateRange} onSelect={setDateRange} className="rounded-md border" />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [dates, setDates] = useState<Date[]>([]);
    const handleSelect = (selected: Date[] | undefined) => {
      setDates(selected ?? []);
    };
    return <Calendar mode="multiple" selected={dates} onSelect={handleSelect} className="rounded-md border" required={false} />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date(2025, 0, 15));
    return <div className="space-y-2">
        <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
        {date && <p className="text-sm text-muted-foreground text-center">
            Selected: {date.toLocaleDateString()}
          </p>}
      </div>;
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`NoSelection`,`Range`,`Multiple`,`WithValue`]})))()}m();export{c as Default,d as Multiple,l as NoSelection,u as Range,f as WithValue,p as __namedExportsOrder,s as default};