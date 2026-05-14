import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{ot as i,rt as a,t as o}from"./lucide-react-BZbEj6fH.js";import{n as s,t as c}from"./utils-CDLLjGU_.js";import{r as l,t as u}from"./button-Bvgam3-u.js";import{n as d,t as f}from"./input-NtsHM931.js";import{n as p,t as m}from"./label-C_2QsoTr.js";function h({value:e,onChange:t,min:n,max:r,step:o=1,precision:s=0,showControls:l=!0,className:d,disabled:p,...m}){let[h,y]=_.useState(e===void 0?``:e.toFixed(s));_.useEffect(()=>{y(e===void 0?``:e.toFixed(s))},[e,s]);let b=e=>{let i=e.target.value;if(y(i),i===``||i===`-`){t?.(void 0);return}let a=parseFloat(i);if(!isNaN(a)){let e=g(a,n,r);t?.(e)}},x=()=>{let i=g((e??0)+o,n,r);t?.(parseFloat(i.toFixed(s)))},S=()=>{let i=g((e??0)-o,n,r);t?.(parseFloat(i.toFixed(s)))};return(0,v.jsxs)(`div`,{className:c(`relative flex items-center`,d),children:[(0,v.jsx)(f,{type:`text`,inputMode:`decimal`,value:h,onChange:b,onKeyDown:e=>{e.key===`ArrowUp`?(e.preventDefault(),x()):e.key===`ArrowDown`&&(e.preventDefault(),S())},disabled:p,className:l?`pr-16`:``,...m}),l&&(0,v.jsxs)(`div`,{className:`absolute right-1 flex flex-col gap-0.5`,children:[(0,v.jsx)(u,{type:`button`,variant:`ghost`,size:`sm`,onClick:x,disabled:p||r!==void 0&&e!==void 0&&e>=r,className:`h-4 w-6 p-0`,"aria-label":`Increment`,children:(0,v.jsx)(a,{size:12,"aria-hidden":`true`})}),(0,v.jsx)(u,{type:`button`,variant:`ghost`,size:`sm`,onClick:S,disabled:p||n!==void 0&&e!==void 0&&e<=n,className:`h-4 w-6 p-0`,"aria-label":`Decrement`,children:(0,v.jsx)(i,{size:12,"aria-hidden":`true`})})]})]})}function g(e,t,n){return t!==void 0&&e<t?t:n!==void 0&&e>n?n:e}var _,v,y=t((()=>{_=e(n(),1),o(),d(),l(),s(),v=r(),h.__docgenInfo={description:``,methods:[],displayName:`NumericInput`,props:{value:{required:!1,tsType:{name:`number`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: number | undefined) => void`,signature:{arguments:[{type:{name:`union`,raw:`number | undefined`,elements:[{name:`number`},{name:`undefined`}]},name:`value`}],return:{name:`void`}}},description:``},min:{required:!1,tsType:{name:`number`},description:``},max:{required:!1,tsType:{name:`number`},description:``},step:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1`,computed:!1}},precision:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},showControls:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}},composes:[`Omit`]}})),b,x,S,C,w,T,E,D,O,k,A;t((()=>{y(),b=e(n(),1),p(),x=r(),S={title:`Components/NumericInput`,component:h,parameters:{layout:`centered`},tags:[`autodocs`]},C={args:{defaultValue:0,min:0,max:100,step:1}},w={render:()=>{let[e,t]=(0,b.useState)(5);return(0,x.jsxs)(`div`,{className:`space-y-2 w-[200px]`,children:[(0,x.jsxs)(`div`,{className:`flex justify-between`,children:[(0,x.jsx)(m,{children:`Quantity`}),(0,x.jsx)(`span`,{className:`text-sm text-muted-foreground`,children:e})]}),(0,x.jsx)(h,{value:e,onChange:t,min:0,max:100})]})}},T={render:()=>{let[e,t]=(0,b.useState)(50);return(0,x.jsxs)(`div`,{className:`space-y-2 w-[200px]`,children:[(0,x.jsx)(m,{children:`Amount (0-100)`}),(0,x.jsx)(h,{value:e,onChange:t,min:0,max:100,step:5})]})}},E={render:()=>{let[e,t]=(0,b.useState)(2.5);return(0,x.jsxs)(`div`,{className:`space-y-2 w-[200px]`,children:[(0,x.jsx)(m,{children:`Price ($)`}),(0,x.jsx)(h,{value:e,onChange:t,min:0,max:1e3,step:.5})]})}},D={args:{value:10,disabled:!0}},O={render:()=>{let[e,t]=(0,b.useState)(0);return(0,x.jsxs)(`div`,{className:`space-y-2 w-[200px]`,children:[(0,x.jsx)(m,{children:`Temperature (°C)`}),(0,x.jsx)(h,{value:e,onChange:t,min:-50,max:50,step:1})]})}},k={render:()=>{let[e,t]=(0,b.useState)(100);return(0,x.jsxs)(`div`,{className:`space-y-2 w-[200px]`,children:[(0,x.jsx)(m,{children:`Budget ($)`}),(0,x.jsx)(h,{value:e,onChange:t,min:0,max:1e4,step:100})]})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 0,
    min: 0,
    max: 100,
    step: 1
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | undefined>(5);
    return <div className="space-y-2 w-[200px]">
        <div className="flex justify-between">
          <Label>Quantity</Label>
          <span className="text-sm text-muted-foreground">{value}</span>
        </div>
        <NumericInput value={value} onChange={setValue} min={0} max={100} />
      </div>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | undefined>(50);
    return <div className="space-y-2 w-[200px]">
        <Label>Amount (0-100)</Label>
        <NumericInput value={value} onChange={setValue} min={0} max={100} step={5} />
      </div>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | undefined>(2.5);
    return <div className="space-y-2 w-[200px]">
        <Label>Price ($)</Label>
        <NumericInput value={value} onChange={setValue} min={0} max={1000} step={0.5} />
      </div>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    value: 10,
    disabled: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | undefined>(0);
    return <div className="space-y-2 w-[200px]">
        <Label>Temperature (°C)</Label>
        <NumericInput value={value} onChange={setValue} min={-50} max={50} step={1} />
      </div>;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | undefined>(100);
    return <div className="space-y-2 w-[200px]">
        <Label>Budget ($)</Label>
        <NumericInput value={value} onChange={setValue} min={0} max={10000} step={100} />
      </div>;
  }
}`,...k.parameters?.docs?.source}}},A=[`Default`,`WithLabel`,`WithRange`,`Decimal`,`Disabled`,`NegativeRange`,`LargeSteps`]}))();export{E as Decimal,C as Default,D as Disabled,k as LargeSteps,O as NegativeRange,w as WithLabel,T as WithRange,A as __namedExportsOrder,S as default};