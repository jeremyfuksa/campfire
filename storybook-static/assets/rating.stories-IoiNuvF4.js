import{j as t}from"./jsx-runtime-CDt2p4po.js";import{r as l}from"./index-GiUgBvb1.js";import{c as b}from"./utils-CDN07tui.js";const ae={sm:"text-sm",md:"text-lg",lg:"text-2xl"};function n({value:a=0,onChange:e,max:h=5,size:K="md",readOnly:u=!1,disabled:o=!1,className:P,allowHalf:S=!1,icon:Q="star"}){const[y,x]=l.useState(null),U=s=>{u||o||e==null||e(s)},X=s=>{u||o||x(s)},Y=()=>{x(null)},Z=s=>{const r=y??a,c=Q==="star"?"fa-star":"fa-heart";return S?r>=s+1?`fa-solid ${c}`:r>=s+.5?"fa-solid fa-star-half-stroke":`fa-regular ${c}`:r>=s+1?`fa-solid ${c}`:`fa-regular ${c}`},ee=s=>(y??a)>=s+(S?.5:1)?"var(--warning)":"var(--neutral-400)";return t.jsx("div",{className:b("inline-flex items-center gap-1",ae[K],(u||o)&&"pointer-events-none",o&&"opacity-50",P),role:"radiogroup","aria-label":"Rating",children:Array.from({length:h}).map((s,r)=>t.jsx("button",{type:"button",onClick:()=>U(r+1),onMouseEnter:()=>X(r+1),onMouseLeave:Y,disabled:o||u,className:b("cursor-pointer transition-colors",!u&&!o&&"hover:scale-110"),"aria-label":`Rate ${r+1} out of ${h}`,children:t.jsx("i",{className:Z(r),style:{color:ee(r)}})},r))})}n.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},allowHalf:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"union",raw:'"star" | "heart"',elements:[{name:"literal",value:'"star"'},{name:"literal",value:'"heart"'}]},description:"",defaultValue:{value:'"star"',computed:!1}}}};const ne={title:"Components/Rating",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},icon:{control:"select",options:["star","heart"]}}},i={render:()=>{const[a,e]=l.useState(0);return t.jsx(n,{value:a,onChange:e})}},m={args:{value:3.5,allowHalf:!0}},d={args:{value:4,readOnly:!0}},p={render:()=>{const[a,e]=l.useState(0);return t.jsx(n,{value:a,onChange:e,size:"sm"})}},f={render:()=>{const[a,e]=l.useState(0);return t.jsx(n,{value:a,onChange:e,size:"lg"})}},g={render:()=>{const[a,e]=l.useState(0);return t.jsx(n,{value:a,onChange:e,icon:"heart"})}},v={render:()=>{const[a,e]=l.useState(0);return t.jsx(n,{value:a,onChange:e,max:10})}},V={args:{value:3,disabled:!0}};var C,R,T;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} onChange={setValue} />;
  }
}`,...(T=(R=i.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var j,q,z;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    value: 3.5,
    allowHalf: true
  }
}`,...(z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var w,M,$;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    value: 4,
    readOnly: true
  }
}`,...($=(M=d.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var E,H,N;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} onChange={setValue} size="sm" />;
  }
}`,...(N=(H=p.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var _,D,L;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} onChange={setValue} size="lg" />;
  }
}`,...(L=(D=f.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var k,I,O;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} onChange={setValue} icon="heart" />;
  }
}`,...(O=(I=g.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var W,A,B;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} onChange={setValue} max={10} />;
  }
}`,...(B=(A=v.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var F,G,J;V.parameters={...V.parameters,docs:{...(F=V.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    value: 3,
    disabled: true
  }
}`,...(J=(G=V.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const oe=["Default","WithValue","ReadOnly","Small","Large","Hearts","MaxTen","Disabled"];export{i as Default,V as Disabled,g as Hearts,f as Large,v as MaxTen,d as ReadOnly,p as Small,m as WithValue,oe as __namedExportsOrder,ne as default};
