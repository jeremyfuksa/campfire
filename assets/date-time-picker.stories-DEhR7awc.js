import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{n as i,t as a}from"./createLucideIcon-D4Czp6j_.js";import{n as o,t as s}from"./utils-DwVtoTFj.js";import{r as c,t as l}from"./button-CTqIoSi4.js";import{i as u,n as d,r as f,t as p}from"./popover-BmT-GDOK.js";import{i as m,n as h,r as g,t as _}from"./calendar-BRZWM7xg.js";import{n as v,t as y}from"./label-5Hovh9ZK.js";import{n as b,t as x}from"./time-picker-D3nvIxeh.js";var S,C;function w(){return(w=t((()=>{i(),S=[[`path`,{d:`M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5`,key:`1osxxc`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M3 10h5`,key:`r794hk`}],[`path`,{d:`M17.5 17.5 16 16.3V14`,key:`akvzfd`}],[`circle`,{cx:`16`,cy:`16`,r:`6`,key:`qoo3c4`}]],C=a(`calendar-clock`,S)})))()}function T({value:e,onChange:t,placeholder:n=`Pick a date and time`,disabled:r=!1,className:i,minDate:a,maxDate:o,use24Hour:c=!1,minuteStep:u=1}){let[m,h]=E.useState(!1),[v,y]=E.useState(e),[b,S]=E.useState(``);E.useEffect(()=>{e&&(y(e),S(g(e,`HH:mm`)))},[e]);let w=e=>{if(!e){y(void 0),t?.(void 0);return}let n=new Date(e);if(b){let[e,t]=b.split(`:`).map(Number);n.setHours(e,t,0,0)}y(n),t?.(n)},T=e=>{if(S(e),!v)return;let[n,r]=e.split(`:`).map(Number),i=new Date(v);i.setHours(n,r,0,0),y(i),t?.(i)},O=()=>{h(!1)},k=E.useMemo(()=>v?`${g(v,`MMM d, yyyy`)} ${b||g(v,c?`HH:mm`:`hh:mm a`)}`:n,[v,b,n,c]);return(0,D.jsxs)(p,{open:m,onOpenChange:h,children:[(0,D.jsx)(f,{asChild:!0,children:(0,D.jsxs)(l,{variant:`outline`,className:s(`justify-start text-left font-normal`,!v&&`text-muted-foreground`,i),disabled:r,children:[(0,D.jsx)(C,{size:16,className:`mr-2`,"aria-hidden":`true`}),k]})}),(0,D.jsx)(d,{className:`w-auto p-0`,align:`start`,children:(0,D.jsxs)(`div`,{className:`flex flex-col`,children:[(0,D.jsx)(_,{mode:`single`,selected:v,onSelect:w,disabled:e=>!!(a&&e<a||o&&e>o),initialFocus:!0}),(0,D.jsxs)(`div`,{className:`border-t p-3`,children:[(0,D.jsx)(`div`,{className:`mb-2 text-sm font-medium`,children:`Time`}),(0,D.jsx)(x,{value:b,onChange:T,use24Hour:c,minuteStep:u,disabled:!v})]}),(0,D.jsx)(`div`,{className:`border-t p-3`,children:(0,D.jsx)(l,{onClick:O,className:`w-full`,disabled:!v,children:`Confirm`})})]})})]})}var E,D;function O(){return(O=t((()=>{E=e(n(),1),w(),h(),b(),u(),c(),o(),m(),D=r(),T.__docgenInfo={description:``,methods:[],displayName:`DateTimePicker`,props:{value:{required:!1,tsType:{name:`Date`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(date: Date | undefined) => void`,signature:{arguments:[{type:{name:`union`,raw:`Date | undefined`,elements:[{name:`Date`},{name:`undefined`}]},name:`date`}],return:{name:`void`}}},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Pick a date and time"`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},minDate:{required:!1,tsType:{name:`Date`},description:``},maxDate:{required:!1,tsType:{name:`Date`},description:``},use24Hour:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},minuteStep:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1`,computed:!1}}}}})))()}var k,A,j,M,N,P,F,I;function L(){return(L=t((()=>{O(),k=n(),v(),A=r(),j={title:`Components/DateTimePicker`,component:T,parameters:{layout:`centered`},tags:[`autodocs`]},M={render:()=>{let[e,t]=(0,k.useState)();return(0,A.jsx)(T,{value:e,onChange:t})}},N={render:()=>{let[e,t]=(0,k.useState)(new Date(2025,0,15,14,30));return(0,A.jsx)(T,{value:e,onChange:t})}},P={render:()=>{let[e,t]=(0,k.useState)();return(0,A.jsxs)(`div`,{className:`space-y-2`,children:[(0,A.jsx)(y,{children:`Select Date and Time`}),(0,A.jsx)(T,{value:e,onChange:t}),e&&(0,A.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:e.toLocaleString()})]})}},F={render:()=>{let[e,t]=(0,k.useState)(new Date(2025,0,20,15,0));return(0,A.jsxs)(`div`,{className:`space-y-2 w-[300px]`,children:[(0,A.jsx)(y,{children:`Event Start Time`}),(0,A.jsx)(T,{value:e,onChange:t}),e&&(0,A.jsxs)(`div`,{className:`text-sm space-y-1`,children:[(0,A.jsxs)(`p`,{className:`text-muted-foreground`,children:[`Date: `,e.toLocaleDateString()]}),(0,A.jsxs)(`p`,{className:`text-muted-foreground`,children:[`Time: `,e.toLocaleTimeString()]})]})]})}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [dateTime, setDateTime] = useState<Date | undefined>();
    return <DateTimePicker value={dateTime} onChange={setDateTime} />;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [dateTime, setDateTime] = useState<Date | undefined>(new Date(2025, 0, 15, 14, 30));
    return <DateTimePicker value={dateTime} onChange={setDateTime} />;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I=[`Default`,`WithValue`,`WithLabel`,`EventScheduling`]})))()}L();export{M as Default,F as EventScheduling,P as WithLabel,N as WithValue,I as __namedExportsOrder,j as default};