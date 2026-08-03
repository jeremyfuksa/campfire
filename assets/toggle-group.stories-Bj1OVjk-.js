import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{n as i,r as a}from"./dist-Dlyn9OaY.js";import{r as o,t as s}from"./dist-BK-Z8wev.js";import{n as c,t as l}from"./dist-CVJt7rz-.js";import{n as u,t as d}from"./dist-DhTwOzzW.js";import{n as f,t as p}from"./createLucideIcon-D4Czp6j_.js";import{a as ee,c as te,d as ne,f as re,i as ie,l as ae,n as oe,o as se,p as ce,r as le,s as ue,u as de}from"./toggle-0ibi3dC9.js";import{n as fe,t as m}from"./utils-DwVtoTFj.js";import{i as pe,n as me,r as he,t as ge}from"./dist-CiQSNTz02.js";var _e,ve;function ye(){return(ye=t((()=>{f(),_e=[[`path`,{d:`M17 12H7`,key:`16if0g`}],[`path`,{d:`M19 18H5`,key:`18s9l3`}],[`path`,{d:`M21 6H3`,key:`1jwq7v`}]],ve=p(`align-center`,_e)})))()}var be,xe;function Se(){return(Se=t((()=>{f(),be=[[`path`,{d:`M15 12H3`,key:`6jk70r`}],[`path`,{d:`M17 18H3`,key:`1amg6g`}],[`path`,{d:`M21 6H3`,key:`1jwq7v`}]],xe=p(`align-left`,be)})))()}var Ce,h;function g(){return(g=t((()=>{f(),Ce=[[`path`,{d:`M21 12H9`,key:`dn1m92`}],[`path`,{d:`M21 18H7`,key:`1ygte8`}],[`path`,{d:`M21 6H3`,key:`1jwq7v`}]],h=p(`align-right`,Ce)})))()}var _,v;function y(){return(y=t((()=>{f(),_=[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M3 9h18`,key:`1pudct`}],[`path`,{d:`M3 15h18`,key:`5xshup`}],[`path`,{d:`M9 3v18`,key:`fh3hqa`}],[`path`,{d:`M15 3v18`,key:`14nvp0`}]],v=p(`grid-3x3`,_)})))()}var b,x;function S(){return(S=t((()=>{f(),b=[[`path`,{d:`M3 12h.01`,key:`nlz23k`}],[`path`,{d:`M3 18h.01`,key:`1tta3j`}],[`path`,{d:`M3 6h.01`,key:`1rqtza`}],[`path`,{d:`M8 12h13`,key:`1za7za`}],[`path`,{d:`M8 18h13`,key:`1lx6n3`}],[`path`,{d:`M8 6h13`,key:`ik3vkj`}]],x=p(`list`,b)})))()}var C,w,T,E,we,D,O,k,A,j,M,N,P,F,I,L,R,z,Te;function Ee(){return(Ee=t((()=>{C=e(n(),1),a(),o(),pe(),ee(),l(),d(),w=r(),T=`ToggleGroup`,[E,we]=i(T,[he]),D=he(),O=C.forwardRef((e,t)=>{let{type:n,...r}=e;if(n===`single`)return(0,w.jsx)(j,{...r,ref:t});if(n===`multiple`)return(0,w.jsx)(M,{...r,ref:t});throw Error(`Missing prop \`type\` expected on \`${T}\``)}),O.displayName=T,[k,A]=E(T),j=C.forwardRef((e,t)=>{let{value:n,defaultValue:r,onValueChange:i=()=>{},...a}=e,[o,s]=c({prop:n,defaultProp:r??``,onChange:i,caller:T});return(0,w.jsx)(k,{scope:e.__scopeToggleGroup,type:`single`,value:C.useMemo(()=>o?[o]:[],[o]),onItemActivate:s,onItemDeactivate:C.useCallback(()=>s(``),[s]),children:(0,w.jsx)(F,{...a,ref:t})})}),M=C.forwardRef((e,t)=>{let{value:n,defaultValue:r,onValueChange:i=()=>{},...a}=e,[o,s]=c({prop:n,defaultProp:r??[],onChange:i,caller:T}),l=C.useCallback(e=>s((t=[])=>[...t,e]),[s]),u=C.useCallback(e=>s((t=[])=>t.filter(t=>t!==e)),[s]);return(0,w.jsx)(k,{scope:e.__scopeToggleGroup,type:`multiple`,value:o,onItemActivate:l,onItemDeactivate:u,children:(0,w.jsx)(F,{...a,ref:t})})}),O.displayName=T,[N,P]=E(T),F=C.forwardRef((e,t)=>{let{__scopeToggleGroup:n,disabled:r=!1,rovingFocus:i=!0,orientation:a,dir:o,loop:c=!0,...l}=e,d=D(n),f=u(o),p={role:`group`,dir:f,...l};return(0,w.jsx)(N,{scope:n,rovingFocus:i,disabled:r,children:i?(0,w.jsx)(me,{asChild:!0,...d,orientation:a,dir:f,loop:c,children:(0,w.jsx)(s.div,{...p,ref:t})}):(0,w.jsx)(s.div,{...p,ref:t})})}),I=`ToggleGroupItem`,L=C.forwardRef((e,t)=>{let n=A(I,e.__scopeToggleGroup),r=P(I,e.__scopeToggleGroup),i=D(e.__scopeToggleGroup),a=n.value.includes(e.value),o=r.disabled||e.disabled,s={...e,pressed:a,disabled:o},c=C.useRef(null);return r.rovingFocus?(0,w.jsx)(ge,{asChild:!0,...i,focusable:!o,active:a,ref:c,children:(0,w.jsx)(R,{...s,ref:t})}):(0,w.jsx)(R,{...s,ref:t})}),L.displayName=I,R=C.forwardRef((e,t)=>{let{__scopeToggleGroup:n,value:r,...i}=e,a=A(I,n),o={role:`radio`,"aria-checked":e.pressed,"aria-pressed":void 0},s=a.type===`single`?o:void 0;return(0,w.jsx)(ie,{...s,...i,ref:t,onPressedChange:e=>{e?a.onItemActivate(r):a.onItemDeactivate(r)}})}),z=O,Te=L})))()}function B({className:e,variant:t,size:n,children:r,...i}){return(0,U.jsx)(z,{"data-slot":`toggle-group`,"data-variant":t,"data-size":n,className:m(`group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-2xs`,e),...i,children:(0,U.jsx)(W.Provider,{value:{variant:t,size:n},children:r})})}function V({className:e,children:t,variant:n,size:r,...i}){let a=H.useContext(W);return(0,U.jsx)(Te,{"data-slot":`toggle-group-item`,"data-variant":a.variant||n,"data-size":a.size||r,className:m(le({variant:a.variant||n,size:a.size||r}),`min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l`,e),...i,children:t})}var H,U,W;function De(){return(De=t((()=>{H=e(n(),1),Ee(),fe(),oe(),U=r(),W=H.createContext({size:`default`,variant:`default`}),B.__docgenInfo={description:``,methods:[],displayName:`ToggleGroup`},V.__docgenInfo={description:``,methods:[],displayName:`ToggleGroupItem`}})))()}var G,K,Oe,q,J,Y,X,Z,Q,$,ke;function Ae(){return(Ae=t((()=>{ye(),Se(),g(),ce(),y(),ne(),S(),ae(),ue(),De(),G=n(),K=r(),Oe={title:`Components/ToggleGroup`,component:B,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{type:{control:`select`,options:[`single`,`multiple`]},variant:{control:`select`,options:[`default`,`outline`]},size:{control:`select`,options:[`default`,`sm`,`lg`]}}},q={render:()=>(0,K.jsxs)(B,{type:`single`,defaultValue:`center`,children:[(0,K.jsx)(V,{value:`left`,"aria-label":`Align left`,children:(0,K.jsx)(xe,{size:16})}),(0,K.jsx)(V,{value:`center`,"aria-label":`Align center`,children:(0,K.jsx)(ve,{size:16})}),(0,K.jsx)(V,{value:`right`,"aria-label":`Align right`,children:(0,K.jsx)(h,{size:16})})]})},J={render:()=>(0,K.jsxs)(B,{type:`multiple`,defaultValue:[`bold`,`italic`],children:[(0,K.jsx)(V,{value:`bold`,"aria-label":`Toggle bold`,children:(0,K.jsx)(re,{size:16})}),(0,K.jsx)(V,{value:`italic`,"aria-label":`Toggle italic`,children:(0,K.jsx)(de,{size:16})}),(0,K.jsx)(V,{value:`underline`,"aria-label":`Toggle underline`,children:(0,K.jsx)(se,{size:16})}),(0,K.jsx)(V,{value:`strikethrough`,"aria-label":`Toggle strikethrough`,children:(0,K.jsx)(te,{size:16})})]})},Y={render:()=>(0,K.jsxs)(B,{type:`single`,variant:`outline`,children:[(0,K.jsx)(V,{value:`day`,children:`Day`}),(0,K.jsx)(V,{value:`week`,children:`Week`}),(0,K.jsx)(V,{value:`month`,children:`Month`}),(0,K.jsx)(V,{value:`year`,children:`Year`})]})},X={render:()=>(0,K.jsxs)(B,{type:`single`,size:`sm`,children:[(0,K.jsx)(V,{value:`xs`,children:`XS`}),(0,K.jsx)(V,{value:`s`,children:`S`}),(0,K.jsx)(V,{value:`m`,children:`M`}),(0,K.jsx)(V,{value:`l`,children:`L`}),(0,K.jsx)(V,{value:`xl`,children:`XL`})]})},Z={render:()=>(0,K.jsxs)(B,{type:`single`,size:`lg`,children:[(0,K.jsxs)(V,{value:`grid`,children:[(0,K.jsx)(v,{size:16,className:`mr-2`}),`Grid`]}),(0,K.jsxs)(V,{value:`list`,children:[(0,K.jsx)(x,{size:16,className:`mr-2`}),`List`]})]})},Q={render:()=>{let[e,t]=(0,G.useState)(`center`);return(0,K.jsxs)(`div`,{className:`space-y-2`,children:[(0,K.jsxs)(B,{type:`single`,value:e,onValueChange:t,children:[(0,K.jsx)(V,{value:`left`,children:`Left`}),(0,K.jsx)(V,{value:`center`,children:`Center`}),(0,K.jsx)(V,{value:`right`,children:`Right`}),(0,K.jsx)(V,{value:`justify`,children:`Justify`})]}),(0,K.jsxs)(`p`,{className:`text-sm text-muted-foreground`,children:[`Selected: `,e]})]})}},$={render:()=>(0,K.jsxs)(B,{type:`single`,disabled:!0,children:[(0,K.jsx)(V,{value:`option1`,children:`Option 1`}),(0,K.jsx)(V,{value:`option2`,children:`Option 2`}),(0,K.jsx)(V,{value:`option3`,children:`Option 3`})]})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft size={16} />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter size={16} />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight size={16} />
      </ToggleGroupItem>
    </ToggleGroup>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="multiple" defaultValue={["bold", "italic"]}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold size={16} />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic size={16} />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline size={16} />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Strikethrough size={16} />
      </ToggleGroupItem>
    </ToggleGroup>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" variant="outline">
      <ToggleGroupItem value="day">Day</ToggleGroupItem>
      <ToggleGroupItem value="week">Week</ToggleGroupItem>
      <ToggleGroupItem value="month">Month</ToggleGroupItem>
      <ToggleGroupItem value="year">Year</ToggleGroupItem>
    </ToggleGroup>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" size="sm">
      <ToggleGroupItem value="xs">XS</ToggleGroupItem>
      <ToggleGroupItem value="s">S</ToggleGroupItem>
      <ToggleGroupItem value="m">M</ToggleGroupItem>
      <ToggleGroupItem value="l">L</ToggleGroupItem>
      <ToggleGroupItem value="xl">XL</ToggleGroupItem>
    </ToggleGroup>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" size="lg">
      <ToggleGroupItem value="grid">
        <Grid size={16} className="mr-2" />
        Grid
      </ToggleGroupItem>
      <ToggleGroupItem value="list">
        <List size={16} className="mr-2" />
        List
      </ToggleGroupItem>
    </ToggleGroup>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("center");
    return <div className="space-y-2">
        <ToggleGroup type="single" value={value} onValueChange={setValue}>
          <ToggleGroupItem value="left">Left</ToggleGroupItem>
          <ToggleGroupItem value="center">Center</ToggleGroupItem>
          <ToggleGroupItem value="right">Right</ToggleGroupItem>
          <ToggleGroupItem value="justify">Justify</ToggleGroupItem>
        </ToggleGroup>
        <p className="text-sm text-muted-foreground">Selected: {value}</p>
      </div>;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" disabled>
      <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
      <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
      <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
    </ToggleGroup>
}`,...$.parameters?.docs?.source}}},ke=[`Single`,`Multiple`,`Outline`,`Small`,`Large`,`Interactive`,`Disabled`]})))()}Ae();export{$ as Disabled,Q as Interactive,Z as Large,J as Multiple,Y as Outline,q as Single,X as Small,ke as __namedExportsOrder,Oe as default};