import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{t as i,ut as a}from"./lucide-react-B9ev7WLa.js";import{n as o,t as s}from"./utils-D2Sa0ztS.js";import{r as c,t as l}from"./button-RVltMg_M.js";import{i as u,n as d,r as f,t as p}from"./popover-BNy7kelX.js";import{i as m,n as h,r as g,t as _}from"./calendar-C5WlIRTf.js";import{n as v,t as y}from"./label-DWfunzZ2.js";function b({value:e,onChange:t,placeholder:n=`Pick a date range`,disabled:r=!1,className:i,minDate:o,maxDate:c,numberOfMonths:u=2}){let[h,g]=x.useState(!1),[v,y]=x.useState(e);x.useEffect(()=>{y(e)},[e]);let b=e=>{y(e),t?.(e),e?.from&&e?.to&&g(!1)},C=x.useMemo(()=>v?.from?v.to?`${m(v.from,`MMM d, yyyy`)} - ${m(v.to,`MMM d, yyyy`)}`:m(v.from,`MMM d, yyyy`):n,[v,n]);return(0,S.jsxs)(p,{open:h,onOpenChange:g,children:[(0,S.jsx)(f,{asChild:!0,children:(0,S.jsxs)(l,{variant:`outline`,className:s(`justify-start text-left font-normal`,!v&&`text-muted-foreground`,i),disabled:r,children:[(0,S.jsx)(a,{size:16,className:`mr-2`,"aria-hidden":`true`}),C]})}),(0,S.jsx)(d,{className:`w-auto p-0`,align:`start`,children:(0,S.jsx)(_,{mode:`range`,selected:v,onSelect:b,numberOfMonths:u,disabled:e=>!!(o&&e<o||c&&e>c),initialFocus:!0})})]})}var x,S,C=t((()=>{x=e(n(),1),i(),h(),u(),c(),o(),g(),S=r(),b.__docgenInfo={description:``,methods:[],displayName:`DateRangePicker`,props:{value:{required:!1,tsType:{name:`DateRange`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(range: DateRange | undefined) => void`,signature:{arguments:[{type:{name:`union`,raw:`DateRange | undefined`,elements:[{name:`DateRange`},{name:`undefined`}]},name:`range`}],return:{name:`void`}}},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Pick a date range"`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},minDate:{required:!1,tsType:{name:`Date`},description:``},maxDate:{required:!1,tsType:{name:`Date`},description:``},numberOfMonths:{required:!1,tsType:{name:`union`,raw:`1 | 2`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`}]},description:``,defaultValue:{value:`2`,computed:!1}}}}})),w,T,E,D,O,k,A,j;t((()=>{C(),w=e(n(),1),v(),T=r(),E={title:`Components/DateRangePicker`,component:b,parameters:{layout:`centered`},tags:[`autodocs`]},D={render:()=>{let[e,t]=(0,w.useState)({from:new Date(2025,0,1),to:new Date(2025,0,7)});return(0,T.jsx)(b,{value:e,onChange:t})}},O={render:()=>{let[e,t]=(0,w.useState)();return(0,T.jsx)(b,{value:e,onChange:t})}},k={render:()=>{let[e,t]=(0,w.useState)();return(0,T.jsxs)(`div`,{className:`space-y-2`,children:[(0,T.jsx)(y,{children:`Select Date Range`}),(0,T.jsx)(b,{value:e,onChange:t}),e?.from&&e?.to&&(0,T.jsxs)(`p`,{className:`text-sm text-muted-foreground`,children:[e.from.toLocaleDateString(),` -`,` `,e.to.toLocaleDateString()]})]})}},A={render:()=>{let[e,t]=(0,w.useState)({from:new Date(2025,0,1),to:new Date(2025,0,31)});return(0,T.jsxs)(`div`,{className:`space-y-2`,children:[(0,T.jsx)(y,{children:`January 2025`}),(0,T.jsx)(b,{value:e,onChange:t})]})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [dateRange, setDateRange] = useState<DateRange | undefined>({
      from: new Date(2025, 0, 1),
      to: new Date(2025, 0, 7)
    });
    return <DateRangePicker value={dateRange} onChange={setDateRange} />;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [dateRange, setDateRange] = useState<DateRange | undefined>();
    return <DateRangePicker value={dateRange} onChange={setDateRange} />;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [dateRange, setDateRange] = useState<DateRange | undefined>();
    return <div className="space-y-2">
        <Label>Select Date Range</Label>
        <DateRangePicker value={dateRange} onChange={setDateRange} />
        {dateRange?.from && dateRange?.to && <p className="text-sm text-muted-foreground">
            {dateRange.from.toLocaleDateString()} -{" "}
            {dateRange.to.toLocaleDateString()}
          </p>}
      </div>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [dateRange, setDateRange] = useState<DateRange | undefined>({
      from: new Date(2025, 0, 1),
      to: new Date(2025, 0, 31)
    });
    return <div className="space-y-2">
        <Label>January 2025</Label>
        <DateRangePicker value={dateRange} onChange={setDateRange} />
      </div>;
  }
}`,...A.parameters?.docs?.source}}},j=[`Default`,`NoSelection`,`WithLabel`,`Preset`]}))();export{D as Default,O as NoSelection,A as Preset,k as WithLabel,j as __namedExportsOrder,E as default};