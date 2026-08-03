import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{n as i,t as a}from"./chevron-down-C9obF-2S.js";import{n as o,t as s}from"./chevron-up-B_vdKYKc.js";import{n as c,t as l}from"./utils-DwVtoTFj.js";import{r as u,t as d}from"./button-CTqIoSi4.js";import{n as f,t as p}from"./input-DUy9koNX.js";import{n as m,t as h}from"./label-5Hovh9ZK.js";function g({value:e,onChange:t,min:n,max:r,step:i=1,precision:o=0,showControls:c=!0,className:u,disabled:f,...m}){let[h,g]=v.useState(e===void 0?``:e.toFixed(o));v.useEffect(()=>{g(e===void 0?``:e.toFixed(o))},[e,o]);let b=e=>{let i=e.target.value;if(g(i),i===``||i===`-`){t?.(void 0);return}let a=parseFloat(i);if(!isNaN(a)){let e=_(a,n,r);t?.(e)}},x=()=>{let a=_((e??0)+i,n,r);t?.(parseFloat(a.toFixed(o)))},S=()=>{let a=_((e??0)-i,n,r);t?.(parseFloat(a.toFixed(o)))};return(0,y.jsxs)(`div`,{className:l(`relative flex items-center`,u),children:[(0,y.jsx)(p,{type:`text`,inputMode:`decimal`,value:h,onChange:b,onKeyDown:e=>{e.key===`ArrowUp`?(e.preventDefault(),x()):e.key===`ArrowDown`&&(e.preventDefault(),S())},disabled:f,className:c?`pr-16`:``,...m}),c&&(0,y.jsxs)(`div`,{className:`absolute right-1 flex flex-col gap-0.5`,children:[(0,y.jsx)(d,{type:`button`,variant:`ghost`,size:`sm`,onClick:x,disabled:f||r!==void 0&&e!==void 0&&e>=r,className:`h-4 w-6 p-0`,"aria-label":`Increment`,children:(0,y.jsx)(s,{size:12,"aria-hidden":`true`})}),(0,y.jsx)(d,{type:`button`,variant:`ghost`,size:`sm`,onClick:S,disabled:f||n!==void 0&&e!==void 0&&e<=n,className:`h-4 w-6 p-0`,"aria-label":`Decrement`,children:(0,y.jsx)(a,{size:12,"aria-hidden":`true`})})]})]})}function _(e,t,n){return t!==void 0&&e<t?t:n!==void 0&&e>n?n:e}var v,y;function b(){return(b=t((()=>{v=e(n(),1),i(),o(),f(),u(),c(),y=r(),g.__docgenInfo={description:``,methods:[],displayName:`NumericInput`,props:{value:{required:!1,tsType:{name:`number`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: number | undefined) => void`,signature:{arguments:[{type:{name:`union`,raw:`number | undefined`,elements:[{name:`number`},{name:`undefined`}]},name:`value`}],return:{name:`void`}}},description:``},min:{required:!1,tsType:{name:`number`},description:``},max:{required:!1,tsType:{name:`number`},description:``},step:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1`,computed:!1}},precision:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},showControls:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}},composes:[`Omit`]}})))()}var x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=t((()=>{b(),x=n(),m(),S=r(),C={title:`Components/NumericInput`,component:g,parameters:{layout:`centered`},tags:[`autodocs`]},w={args:{defaultValue:0,min:0,max:100,step:1}},T={render:()=>{let[e,t]=(0,x.useState)(5);return(0,S.jsxs)(`div`,{className:`space-y-2 w-[200px]`,children:[(0,S.jsxs)(`div`,{className:`flex justify-between`,children:[(0,S.jsx)(h,{children:`Quantity`}),(0,S.jsx)(`span`,{className:`text-sm text-muted-foreground`,children:e})]}),(0,S.jsx)(g,{value:e,onChange:t,min:0,max:100})]})}},E={render:()=>{let[e,t]=(0,x.useState)(50);return(0,S.jsxs)(`div`,{className:`space-y-2 w-[200px]`,children:[(0,S.jsx)(h,{children:`Amount (0-100)`}),(0,S.jsx)(g,{value:e,onChange:t,min:0,max:100,step:5})]})}},D={render:()=>{let[e,t]=(0,x.useState)(2.5);return(0,S.jsxs)(`div`,{className:`space-y-2 w-[200px]`,children:[(0,S.jsx)(h,{children:`Price ($)`}),(0,S.jsx)(g,{value:e,onChange:t,min:0,max:1e3,step:.5})]})}},O={args:{value:10,disabled:!0}},k={render:()=>{let[e,t]=(0,x.useState)(0);return(0,S.jsxs)(`div`,{className:`space-y-2 w-[200px]`,children:[(0,S.jsx)(h,{children:`Temperature (°C)`}),(0,S.jsx)(g,{value:e,onChange:t,min:-50,max:50,step:1})]})}},A={render:()=>{let[e,t]=(0,x.useState)(100);return(0,S.jsxs)(`div`,{className:`space-y-2 w-[200px]`,children:[(0,S.jsx)(h,{children:`Budget ($)`}),(0,S.jsx)(g,{value:e,onChange:t,min:0,max:1e4,step:100})]})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 0,
    min: 0,
    max: 100,
    step: 1
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | undefined>(50);
    return <div className="space-y-2 w-[200px]">
        <Label>Amount (0-100)</Label>
        <NumericInput value={value} onChange={setValue} min={0} max={100} step={5} />
      </div>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | undefined>(2.5);
    return <div className="space-y-2 w-[200px]">
        <Label>Price ($)</Label>
        <NumericInput value={value} onChange={setValue} min={0} max={1000} step={0.5} />
      </div>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    value: 10,
    disabled: true
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | undefined>(0);
    return <div className="space-y-2 w-[200px]">
        <Label>Temperature (°C)</Label>
        <NumericInput value={value} onChange={setValue} min={-50} max={50} step={1} />
      </div>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | undefined>(100);
    return <div className="space-y-2 w-[200px]">
        <Label>Budget ($)</Label>
        <NumericInput value={value} onChange={setValue} min={0} max={10000} step={100} />
      </div>;
  }
}`,...A.parameters?.docs?.source}}},j=[`Default`,`WithLabel`,`WithRange`,`Decimal`,`Disabled`,`NegativeRange`,`LargeSteps`]})))()}M();export{D as Decimal,w as Default,O as Disabled,A as LargeSteps,k as NegativeRange,T as WithLabel,E as WithRange,j as __namedExportsOrder,C as default};