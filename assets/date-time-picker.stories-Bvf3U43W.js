import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{t as i,ut as a}from"./lucide-react-BZbEj6fH.js";import{n as o,t as s}from"./utils-CDLLjGU_.js";import{r as c,t as l}from"./button-Bvgam3-u.js";import{i as u,n as d,r as f,t as p}from"./popover-DK9N-p7w.js";import{i as m,n as h,r as g,t as _}from"./calendar-DTYi1S9l.js";import{n as v,t as y}from"./label-C_2QsoTr.js";import{n as b,t as x}from"./time-picker-C0P9th8j.js";function S({value:e,onChange:t,placeholder:n=`Pick a date and time`,disabled:r=!1,className:i,minDate:o,maxDate:c,use24Hour:u=!1,minuteStep:h=1}){let[g,v]=C.useState(!1),[y,b]=C.useState(e),[S,T]=C.useState(``);C.useEffect(()=>{e&&(b(e),T(m(e,`HH:mm`)))},[e]);let E=e=>{if(!e){b(void 0),t?.(void 0);return}let n=new Date(e);if(S){let[e,t]=S.split(`:`).map(Number);n.setHours(e,t,0,0)}b(n),t?.(n)},D=e=>{if(T(e),!y)return;let[n,r]=e.split(`:`).map(Number),i=new Date(y);i.setHours(n,r,0,0),b(i),t?.(i)},O=()=>{v(!1)},k=C.useMemo(()=>y?`${m(y,`MMM d, yyyy`)} ${S||m(y,u?`HH:mm`:`hh:mm a`)}`:n,[y,S,n,u]);return(0,w.jsxs)(p,{open:g,onOpenChange:v,children:[(0,w.jsx)(f,{asChild:!0,children:(0,w.jsxs)(l,{variant:`outline`,className:s(`justify-start text-left font-normal`,!y&&`text-muted-foreground`,i),disabled:r,children:[(0,w.jsx)(a,{size:16,className:`mr-2`,"aria-hidden":`true`}),k]})}),(0,w.jsx)(d,{className:`w-auto p-0`,align:`start`,children:(0,w.jsxs)(`div`,{className:`flex flex-col`,children:[(0,w.jsx)(_,{mode:`single`,selected:y,onSelect:E,disabled:e=>!!(o&&e<o||c&&e>c),initialFocus:!0}),(0,w.jsxs)(`div`,{className:`border-t p-3`,children:[(0,w.jsx)(`div`,{className:`mb-2 text-sm font-medium`,children:`Time`}),(0,w.jsx)(x,{value:S,onChange:D,use24Hour:u,minuteStep:h,disabled:!y})]}),(0,w.jsx)(`div`,{className:`border-t p-3`,children:(0,w.jsx)(l,{onClick:O,className:`w-full`,disabled:!y,children:`Confirm`})})]})})]})}var C,w,T=t((()=>{C=e(n(),1),i(),h(),b(),u(),c(),o(),g(),w=r(),S.__docgenInfo={description:``,methods:[],displayName:`DateTimePicker`,props:{value:{required:!1,tsType:{name:`Date`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(date: Date | undefined) => void`,signature:{arguments:[{type:{name:`union`,raw:`Date | undefined`,elements:[{name:`Date`},{name:`undefined`}]},name:`date`}],return:{name:`void`}}},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Pick a date and time"`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},minDate:{required:!1,tsType:{name:`Date`},description:``},maxDate:{required:!1,tsType:{name:`Date`},description:``},use24Hour:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},minuteStep:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1`,computed:!1}}}}})),E,D,O,k,A,j,M,N;t((()=>{T(),E=e(n(),1),v(),D=r(),O={title:`Components/DateTimePicker`,component:S,parameters:{layout:`centered`},tags:[`autodocs`]},k={render:()=>{let[e,t]=(0,E.useState)();return(0,D.jsx)(S,{value:e,onChange:t})}},A={render:()=>{let[e,t]=(0,E.useState)(new Date(2025,0,15,14,30));return(0,D.jsx)(S,{value:e,onChange:t})}},j={render:()=>{let[e,t]=(0,E.useState)();return(0,D.jsxs)(`div`,{className:`space-y-2`,children:[(0,D.jsx)(y,{children:`Select Date and Time`}),(0,D.jsx)(S,{value:e,onChange:t}),e&&(0,D.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:e.toLocaleString()})]})}},M={render:()=>{let[e,t]=(0,E.useState)(new Date(2025,0,20,15,0));return(0,D.jsxs)(`div`,{className:`space-y-2 w-[300px]`,children:[(0,D.jsx)(y,{children:`Event Start Time`}),(0,D.jsx)(S,{value:e,onChange:t}),e&&(0,D.jsxs)(`div`,{className:`text-sm space-y-1`,children:[(0,D.jsxs)(`p`,{className:`text-muted-foreground`,children:[`Date: `,e.toLocaleDateString()]}),(0,D.jsxs)(`p`,{className:`text-muted-foreground`,children:[`Time: `,e.toLocaleTimeString()]})]})]})}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [dateTime, setDateTime] = useState<Date | undefined>();
    return <DateTimePicker value={dateTime} onChange={setDateTime} />;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [dateTime, setDateTime] = useState<Date | undefined>(new Date(2025, 0, 15, 14, 30));
    return <DateTimePicker value={dateTime} onChange={setDateTime} />;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [dateTime, setDateTime] = useState<Date | undefined>();
    return <div className="space-y-2">
        <Label>Select Date and Time</Label>
        <DateTimePicker value={dateTime} onChange={setDateTime} />
        {dateTime && <p className="text-sm text-muted-foreground">
            {dateTime.toLocaleString()}
          </p>}
      </div>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [dateTime, setDateTime] = useState<Date | undefined>(new Date(2025, 0, 20, 15, 0));
    return <div className="space-y-2 w-[300px]">
        <Label>Event Start Time</Label>
        <DateTimePicker value={dateTime} onChange={setDateTime} />
        {dateTime && <div className="text-sm space-y-1">
            <p className="text-muted-foreground">
              Date: {dateTime.toLocaleDateString()}
            </p>
            <p className="text-muted-foreground">
              Time: {dateTime.toLocaleTimeString()}
            </p>
          </div>}
      </div>;
  }
}`,...M.parameters?.docs?.source}}},N=[`Default`,`WithValue`,`WithLabel`,`EventScheduling`]}))();export{k as Default,M as EventScheduling,j as WithLabel,A as WithValue,N as __namedExportsOrder,O as default};