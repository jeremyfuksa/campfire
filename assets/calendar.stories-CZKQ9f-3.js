import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{n as i,t as a}from"./calendar-CMtlay6C.js";var o,s,c,l,u,d,f,p,m;t((()=>{i(),o=e(n(),1),s=r(),c={title:`Components/Calendar`,component:a,parameters:{layout:`centered`},tags:[`autodocs`]},l={render:()=>{let[e,t]=(0,o.useState)(new Date);return(0,s.jsx)(a,{mode:`single`,selected:e,onSelect:t,className:`rounded-md border`})}},u={render:()=>{let[e,t]=(0,o.useState)();return(0,s.jsx)(a,{mode:`single`,selected:e,onSelect:t,className:`rounded-md border`})}},d={render:()=>{let[e,t]=(0,o.useState)();return(0,s.jsx)(a,{mode:`range`,selected:e,onSelect:t,className:`rounded-md border`})}},f={render:()=>{let[e,t]=(0,o.useState)([]);return(0,s.jsx)(a,{mode:`multiple`,selected:e,onSelect:e=>{t(e??[])},className:`rounded-md border`,required:!1})}},p={render:()=>{let[e,t]=(0,o.useState)(new Date(2025,0,15));return(0,s.jsxs)(`div`,{className:`space-y-2`,children:[(0,s.jsx)(a,{mode:`single`,selected:e,onSelect:t,className:`rounded-md border`}),e&&(0,s.jsxs)(`p`,{className:`text-sm text-muted-foreground text-center`,children:[`Selected: `,e.toLocaleDateString()]})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    return <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [dateRange, setDateRange] = useState<DateRange | undefined>();
    return <Calendar mode="range" selected={dateRange} onSelect={setDateRange} className="rounded-md border" />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [dates, setDates] = useState<Date[]>([]);
    const handleSelect = (selected: Date[] | undefined) => {
      setDates(selected ?? []);
    };
    return <Calendar mode="multiple" selected={dates} onSelect={handleSelect} className="rounded-md border" required={false} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date(2025, 0, 15));
    return <div className="space-y-2">
        <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
        {date && <p className="text-sm text-muted-foreground text-center">
            Selected: {date.toLocaleDateString()}
          </p>}
      </div>;
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`NoSelection`,`Range`,`Multiple`,`WithValue`]}))();export{l as Default,f as Multiple,u as NoSelection,d as Range,p as WithValue,m as __namedExportsOrder,c as default};