import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{n as i,t as a}from"./createLucideIcon-D4Czp6j_.js";import{n as o,t as s}from"./star-DjE71FDD.js";import{n as c,t as l}from"./utils-DwVtoTFj.js";var u,d;function f(){return(f=t((()=>{i(),u=[[`path`,{d:`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`,key:`c3ymky`}]],d=a(`heart`,u)})))()}var p,m;function h(){return(h=t((()=>{i(),p=[[`path`,{d:`M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2`,key:`2ksp49`}]],m=a(`star-half`,p)})))()}function g({value:e=0,onChange:t,max:n=5,size:r=`md`,readOnly:i=!1,disabled:a=!1,className:o,allowHalf:c=!1,icon:u=`star`}){let[f,p]=_.useState(null),h=e=>{i||a||t?.(e)},g=e=>{i||a||p(e)},b=()=>{p(null)},x=t=>(f??e)>=t+(c?.5:1)?`var(--warning-500)`:`var(--neutral-400)`,S=t=>{let n=f??e,i=n>=t+1,a=c&&!i&&n>=t+.5,o=x(t),l=y[r];return u===`heart`?(0,v.jsx)(d,{size:l,strokeWidth:2,color:o,fill:i?o:`none`,"aria-hidden":`true`}):a?(0,v.jsx)(m,{size:l,strokeWidth:2,color:o,fill:o,"aria-hidden":`true`}):(0,v.jsx)(s,{size:l,strokeWidth:2,color:o,fill:i?o:`none`,"aria-hidden":`true`})};return(0,v.jsx)(`div`,{className:l(`inline-flex items-center gap-1`,(i||a)&&`pointer-events-none`,a&&`opacity-50`,o),role:`radiogroup`,"aria-label":`Rating`,children:Array.from({length:n}).map((e,t)=>(0,v.jsx)(`button`,{type:`button`,onClick:()=>h(t+1),onMouseEnter:()=>g(t+1),onMouseLeave:b,disabled:a||i,className:l(`cursor-pointer transition-colors`,!i&&!a&&`hover:scale-110`),"aria-label":`Rate ${t+1} out of ${n}`,children:S(t)},t))})}var _,v,y;function b(){return(b=t((()=>{_=e(n(),1),f(),o(),h(),c(),v=r(),y={sm:14,md:20,lg:28},g.__docgenInfo={description:``,methods:[],displayName:`Rating`,props:{value:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: number) => void`,signature:{arguments:[{type:{name:`number`},name:`value`}],return:{name:`void`}}},description:``},max:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`5`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`"sm" | "md" | "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},readOnly:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},allowHalf:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},icon:{required:!1,tsType:{name:`union`,raw:`"star" | "heart"`,elements:[{name:`literal`,value:`"star"`},{name:`literal`,value:`"heart"`}]},description:``,defaultValue:{value:`"star"`,computed:!1}}}}})))()}var x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=t((()=>{x=n(),b(),S=r(),C={title:`Components/Rating`,component:g,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]},icon:{control:`select`,options:[`star`,`heart`]}}},w={render:()=>{let[e,t]=(0,x.useState)(0);return(0,S.jsx)(g,{value:e,onChange:t})}},T={args:{value:3.5,allowHalf:!0}},E={args:{value:4,readOnly:!0}},D={render:()=>{let[e,t]=(0,x.useState)(0);return(0,S.jsx)(g,{value:e,onChange:t,size:`sm`})}},O={render:()=>{let[e,t]=(0,x.useState)(0);return(0,S.jsx)(g,{value:e,onChange:t,size:`lg`})}},k={render:()=>{let[e,t]=(0,x.useState)(0);return(0,S.jsx)(g,{value:e,onChange:t,icon:`heart`})}},A={render:()=>{let[e,t]=(0,x.useState)(0);return(0,S.jsx)(g,{value:e,onChange:t,max:10})}},j={args:{value:3,disabled:!0}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} onChange={setValue} />;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3.5,
    allowHalf: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    value: 4,
    readOnly: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} onChange={setValue} size="sm" />;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} onChange={setValue} size="lg" />;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} onChange={setValue} icon="heart" />;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} onChange={setValue} max={10} />;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    disabled: true
  }
}`,...j.parameters?.docs?.source}}},M=[`Default`,`WithValue`,`ReadOnly`,`Small`,`Large`,`Hearts`,`MaxTen`,`Disabled`]})))()}N();export{w as Default,j as Disabled,k as Hearts,O as Large,A as MaxTen,E as ReadOnly,D as Small,T as WithValue,M as __namedExportsOrder,C as default};