import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{N as i,l as a,t as o,u as s}from"./lucide-react-CRUNCA_B.js";import{n as c,t as l}from"./utils-D2Sa0ztS.js";function u({value:e=0,onChange:t,max:n=5,size:r=`md`,readOnly:o=!1,disabled:c=!1,className:u,allowHalf:m=!1,icon:h=`star`}){let[g,_]=d.useState(null),v=e=>{o||c||t?.(e)},y=e=>{o||c||_(e)},b=()=>{_(null)},x=t=>(g??e)>=t+(m?.5:1)?`var(--warning-500)`:`var(--neutral-400)`,S=t=>{let n=g??e,o=n>=t+1,c=m&&!o&&n>=t+.5,l=x(t),u=p[r];return h===`heart`?(0,f.jsx)(i,{size:u,strokeWidth:2,color:l,fill:o?l:`none`,"aria-hidden":`true`}):c?(0,f.jsx)(s,{size:u,strokeWidth:2,color:l,fill:l,"aria-hidden":`true`}):(0,f.jsx)(a,{size:u,strokeWidth:2,color:l,fill:o?l:`none`,"aria-hidden":`true`})};return(0,f.jsx)(`div`,{className:l(`inline-flex items-center gap-1`,(o||c)&&`pointer-events-none`,c&&`opacity-50`,u),role:`radiogroup`,"aria-label":`Rating`,children:Array.from({length:n}).map((e,t)=>(0,f.jsx)(`button`,{type:`button`,onClick:()=>v(t+1),onMouseEnter:()=>y(t+1),onMouseLeave:b,disabled:c||o,className:l(`cursor-pointer transition-colors`,!o&&!c&&`hover:scale-110`),"aria-label":`Rate ${t+1} out of ${n}`,children:S(t)},t))})}var d,f,p,m=t((()=>{d=e(n(),1),o(),c(),f=r(),p={sm:14,md:20,lg:28},u.__docgenInfo={description:``,methods:[],displayName:`Rating`,props:{value:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: number) => void`,signature:{arguments:[{type:{name:`number`},name:`value`}],return:{name:`void`}}},description:``},max:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`5`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`"sm" | "md" | "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},readOnly:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},allowHalf:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},icon:{required:!1,tsType:{name:`union`,raw:`"star" | "heart"`,elements:[{name:`literal`,value:`"star"`},{name:`literal`,value:`"heart"`}]},description:``,defaultValue:{value:`"star"`,computed:!1}}}}})),h,g,_,v,y,b,x,S,C,w,T,E;t((()=>{h=e(n(),1),m(),g=r(),_={title:`Components/Rating`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]},icon:{control:`select`,options:[`star`,`heart`]}}},v={render:()=>{let[e,t]=(0,h.useState)(0);return(0,g.jsx)(u,{value:e,onChange:t})}},y={args:{value:3.5,allowHalf:!0}},b={args:{value:4,readOnly:!0}},x={render:()=>{let[e,t]=(0,h.useState)(0);return(0,g.jsx)(u,{value:e,onChange:t,size:`sm`})}},S={render:()=>{let[e,t]=(0,h.useState)(0);return(0,g.jsx)(u,{value:e,onChange:t,size:`lg`})}},C={render:()=>{let[e,t]=(0,h.useState)(0);return(0,g.jsx)(u,{value:e,onChange:t,icon:`heart`})}},w={render:()=>{let[e,t]=(0,h.useState)(0);return(0,g.jsx)(u,{value:e,onChange:t,max:10})}},T={args:{value:3,disabled:!0}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} onChange={setValue} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3.5,
    allowHalf: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    value: 4,
    readOnly: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} onChange={setValue} size="sm" />;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} onChange={setValue} size="lg" />;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} onChange={setValue} icon="heart" />;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} onChange={setValue} max={10} />;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    disabled: true
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`WithValue`,`ReadOnly`,`Small`,`Large`,`Hearts`,`MaxTen`,`Disabled`]}))();export{v as Default,T as Disabled,C as Hearts,S as Large,w as MaxTen,b as ReadOnly,x as Small,y as WithValue,E as __namedExportsOrder,_ as default};