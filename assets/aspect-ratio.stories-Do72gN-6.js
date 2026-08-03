import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./react-dom-C6qvZkN1.js";import{t as i}from"./jsx-runtime-ATHzeHXA.js";import{n as a,r as o}from"./dist-C_FIoz-e.js";var s,c,l;function u(){return(u=t((()=>{s=e(n(),1),r(),o(),c=i(),l=[`a`,`button`,`div`,`form`,`h2`,`h3`,`img`,`input`,`label`,`li`,`nav`,`ol`,`p`,`select`,`span`,`svg`,`ul`].reduce((e,t)=>{let n=a(`Primitive.${t}`),r=s.forwardRef((e,r)=>{let{asChild:i,...a}=e,o=i?n:t;return typeof window<`u`&&(window[Symbol.for(`radix-ui`)]=!0),(0,c.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{})})))()}var d,f,p,m,h;function g(){return(g=t((()=>{d=e(n(),1),u(),f=i(),p=`AspectRatio`,m=d.forwardRef((e,t)=>{let{ratio:n=1/1,style:r,...i}=e;return(0,f.jsx)(`div`,{style:{position:`relative`,width:`100%`,paddingBottom:`${100/n}%`},"data-radix-aspect-ratio-wrapper":``,children:(0,f.jsx)(l.div,{...i,ref:t,style:{...r,position:`absolute`,top:0,right:0,bottom:0,left:0}})})}),m.displayName=p,h=m})))()}function _({...e}){return(0,v.jsx)(h,{"data-slot":`aspect-ratio`,...e})}var v;function y(){return(y=t((()=>{g(),v=i(),_.__docgenInfo={description:``,methods:[],displayName:`AspectRatio`}})))()}var b,x,S,C,w,T,E,D;function O(){return(O=t((()=>{y(),b=i(),x={title:`Components/AspectRatio`,component:_,parameters:{layout:`padded`},tags:[`autodocs`],argTypes:{ratio:{control:`number`}}},S=(0,b.jsx)(`div`,{className:`flex items-center justify-center w-full h-full bg-muted rounded-md text-muted-foreground text-sm`,children:`Aspect content`}),C={args:{ratio:1},render:e=>(0,b.jsx)(`div`,{className:`w-72`,children:(0,b.jsx)(_,{...e,children:S})})},w={name:`16:9`,args:{ratio:16/9},render:e=>(0,b.jsx)(`div`,{className:`w-96`,children:(0,b.jsx)(_,{...e,children:S})})},T={name:`4:3`,args:{ratio:4/3},render:e=>(0,b.jsx)(`div`,{className:`w-96`,children:(0,b.jsx)(_,{...e,children:S})})},E={args:{ratio:3/4},render:e=>(0,b.jsx)(`div`,{className:`w-64`,children:(0,b.jsx)(_,{...e,children:S})})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ratio: 1
  },
  render: (args: {
    ratio?: number;
  }) => <div className="w-72">
      <AspectRatio {...args}>{placeholder}</AspectRatio>
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "16:9",
  args: {
    ratio: 16 / 9
  },
  render: (args: {
    ratio?: number;
  }) => <div className="w-96">
      <AspectRatio {...args}>{placeholder}</AspectRatio>
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "4:3",
  args: {
    ratio: 4 / 3
  },
  render: (args: {
    ratio?: number;
  }) => <div className="w-96">
      <AspectRatio {...args}>{placeholder}</AspectRatio>
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ratio: 3 / 4
  },
  render: (args: {
    ratio?: number;
  }) => <div className="w-64">
      <AspectRatio {...args}>{placeholder}</AspectRatio>
    </div>
}`,...E.parameters?.docs?.source}}},D=[`Square`,`Sixteen9`,`Four3`,`Portrait`]})))()}O();export{T as Four3,E as Portrait,w as Sixteen9,C as Square,D as __namedExportsOrder,x as default};