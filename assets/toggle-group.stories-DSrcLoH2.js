import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{n as i,r as a}from"./dist-DIs3RLZS.js";import{r as o,t as s}from"./dist-Dq2sm8oD.js";import{n as c,t as l}from"./dist-DhJF_c6r.js";import{n as u,t as d}from"./dist-CXP3AQBZ.js";import{E as f,I as p,a as ee,bt as te,c as ne,ft as re,k as ie,t as ae,vt as oe,yt as se}from"./lucide-react-BZbEj6fH.js";import{n as ce,t as m}from"./utils-CDLLjGU_.js";import{i as le,n as ue,r as h,t as g}from"./dist-Dr1HKb59.js";import{a as _,i as v,n as de,r as fe}from"./toggle-d5jH44Rb.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,pe=t((()=>{y=e(n(),1),a(),o(),le(),_(),l(),d(),b=r(),x=`ToggleGroup`,[S,C]=i(x,[h]),w=h(),T=y.forwardRef((e,t)=>{let{type:n,...r}=e;if(n===`single`)return(0,b.jsx)(O,{...r,ref:t});if(n===`multiple`)return(0,b.jsx)(k,{...r,ref:t});throw Error(`Missing prop \`type\` expected on \`${x}\``)}),T.displayName=x,[E,D]=S(x),O=y.forwardRef((e,t)=>{let{value:n,defaultValue:r,onValueChange:i=()=>{},...a}=e,[o,s]=c({prop:n,defaultProp:r??``,onChange:i,caller:x});return(0,b.jsx)(E,{scope:e.__scopeToggleGroup,type:`single`,value:y.useMemo(()=>o?[o]:[],[o]),onItemActivate:s,onItemDeactivate:y.useCallback(()=>s(``),[s]),children:(0,b.jsx)(M,{...a,ref:t})})}),k=y.forwardRef((e,t)=>{let{value:n,defaultValue:r,onValueChange:i=()=>{},...a}=e,[o,s]=c({prop:n,defaultProp:r??[],onChange:i,caller:x}),l=y.useCallback(e=>s((t=[])=>[...t,e]),[s]),u=y.useCallback(e=>s((t=[])=>t.filter(t=>t!==e)),[s]);return(0,b.jsx)(E,{scope:e.__scopeToggleGroup,type:`multiple`,value:o,onItemActivate:l,onItemDeactivate:u,children:(0,b.jsx)(M,{...a,ref:t})})}),T.displayName=x,[A,j]=S(x),M=y.forwardRef((e,t)=>{let{__scopeToggleGroup:n,disabled:r=!1,rovingFocus:i=!0,orientation:a,dir:o,loop:c=!0,...l}=e,d=w(n),f=u(o),p={role:`group`,dir:f,...l};return(0,b.jsx)(A,{scope:n,rovingFocus:i,disabled:r,children:i?(0,b.jsx)(ue,{asChild:!0,...d,orientation:a,dir:f,loop:c,children:(0,b.jsx)(s.div,{...p,ref:t})}):(0,b.jsx)(s.div,{...p,ref:t})})}),N=`ToggleGroupItem`,P=y.forwardRef((e,t)=>{let n=D(N,e.__scopeToggleGroup),r=j(N,e.__scopeToggleGroup),i=w(e.__scopeToggleGroup),a=n.value.includes(e.value),o=r.disabled||e.disabled,s={...e,pressed:a,disabled:o},c=y.useRef(null);return r.rovingFocus?(0,b.jsx)(g,{asChild:!0,...i,focusable:!o,active:a,ref:c,children:(0,b.jsx)(F,{...s,ref:t})}):(0,b.jsx)(F,{...s,ref:t})}),P.displayName=N,F=y.forwardRef((e,t)=>{let{__scopeToggleGroup:n,value:r,...i}=e,a=D(N,n),o={role:`radio`,"aria-checked":e.pressed,"aria-pressed":void 0};return(0,b.jsx)(v,{...a.type===`single`?o:void 0,...i,ref:t,onPressedChange:e=>{e?a.onItemActivate(r):a.onItemDeactivate(r)}})}),I=T,L=P}));function R({className:e,variant:t,size:n,children:r,...i}){return(0,V.jsx)(I,{"data-slot":`toggle-group`,"data-variant":t,"data-size":n,className:m(`group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-2xs`,e),...i,children:(0,V.jsx)(H.Provider,{value:{variant:t,size:n},children:r})})}function z({className:e,children:t,variant:n,size:r,...i}){let a=B.useContext(H);return(0,V.jsx)(L,{"data-slot":`toggle-group-item`,"data-variant":a.variant||n,"data-size":a.size||r,className:m(fe({variant:a.variant||n,size:a.size||r}),`min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l`,e),...i,children:t})}var B,V,H,me=t((()=>{B=e(n(),1),pe(),ce(),de(),V=r(),H=B.createContext({size:`default`,variant:`default`}),R.__docgenInfo={description:``,methods:[],displayName:`ToggleGroup`},z.__docgenInfo={description:``,methods:[],displayName:`ToggleGroupItem`}})),U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{ae(),me(),U=e(n(),1),W=r(),G={title:`Components/ToggleGroup`,component:R,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{type:{control:`select`,options:[`single`,`multiple`]},variant:{control:`select`,options:[`default`,`outline`]},size:{control:`select`,options:[`default`,`sm`,`lg`]}}},K={render:()=>(0,W.jsxs)(R,{type:`single`,defaultValue:`center`,children:[(0,W.jsx)(z,{value:`left`,"aria-label":`Align left`,children:(0,W.jsx)(se,{size:16})}),(0,W.jsx)(z,{value:`center`,"aria-label":`Align center`,children:(0,W.jsx)(te,{size:16})}),(0,W.jsx)(z,{value:`right`,"aria-label":`Align right`,children:(0,W.jsx)(oe,{size:16})})]})},q={render:()=>(0,W.jsxs)(R,{type:`multiple`,defaultValue:[`bold`,`italic`],children:[(0,W.jsx)(z,{value:`bold`,"aria-label":`Toggle bold`,children:(0,W.jsx)(re,{size:16})}),(0,W.jsx)(z,{value:`italic`,"aria-label":`Toggle italic`,children:(0,W.jsx)(ie,{size:16})}),(0,W.jsx)(z,{value:`underline`,"aria-label":`Toggle underline`,children:(0,W.jsx)(ee,{size:16})}),(0,W.jsx)(z,{value:`strikethrough`,"aria-label":`Toggle strikethrough`,children:(0,W.jsx)(ne,{size:16})})]})},J={render:()=>(0,W.jsxs)(R,{type:`single`,variant:`outline`,children:[(0,W.jsx)(z,{value:`day`,children:`Day`}),(0,W.jsx)(z,{value:`week`,children:`Week`}),(0,W.jsx)(z,{value:`month`,children:`Month`}),(0,W.jsx)(z,{value:`year`,children:`Year`})]})},Y={render:()=>(0,W.jsxs)(R,{type:`single`,size:`sm`,children:[(0,W.jsx)(z,{value:`xs`,children:`XS`}),(0,W.jsx)(z,{value:`s`,children:`S`}),(0,W.jsx)(z,{value:`m`,children:`M`}),(0,W.jsx)(z,{value:`l`,children:`L`}),(0,W.jsx)(z,{value:`xl`,children:`XL`})]})},X={render:()=>(0,W.jsxs)(R,{type:`single`,size:`lg`,children:[(0,W.jsxs)(z,{value:`grid`,children:[(0,W.jsx)(p,{size:16,className:`mr-2`}),`Grid`]}),(0,W.jsxs)(z,{value:`list`,children:[(0,W.jsx)(f,{size:16,className:`mr-2`}),`List`]})]})},Z={render:()=>{let[e,t]=(0,U.useState)(`center`);return(0,W.jsxs)(`div`,{className:`space-y-2`,children:[(0,W.jsxs)(R,{type:`single`,value:e,onValueChange:t,children:[(0,W.jsx)(z,{value:`left`,children:`Left`}),(0,W.jsx)(z,{value:`center`,children:`Center`}),(0,W.jsx)(z,{value:`right`,children:`Right`}),(0,W.jsx)(z,{value:`justify`,children:`Justify`})]}),(0,W.jsxs)(`p`,{className:`text-sm text-muted-foreground`,children:[`Selected: `,e]})]})}},Q={render:()=>(0,W.jsxs)(R,{type:`single`,disabled:!0,children:[(0,W.jsx)(z,{value:`option1`,children:`Option 1`}),(0,W.jsx)(z,{value:`option2`,children:`Option 2`}),(0,W.jsx)(z,{value:`option3`,children:`Option 3`})]})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" variant="outline">
      <ToggleGroupItem value="day">Day</ToggleGroupItem>
      <ToggleGroupItem value="week">Week</ToggleGroupItem>
      <ToggleGroupItem value="month">Month</ToggleGroupItem>
      <ToggleGroupItem value="year">Year</ToggleGroupItem>
    </ToggleGroup>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" size="sm">
      <ToggleGroupItem value="xs">XS</ToggleGroupItem>
      <ToggleGroupItem value="s">S</ToggleGroupItem>
      <ToggleGroupItem value="m">M</ToggleGroupItem>
      <ToggleGroupItem value="l">L</ToggleGroupItem>
      <ToggleGroupItem value="xl">XL</ToggleGroupItem>
    </ToggleGroup>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" disabled>
      <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
      <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
      <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
    </ToggleGroup>
}`,...Q.parameters?.docs?.source}}},$=[`Single`,`Multiple`,`Outline`,`Small`,`Large`,`Interactive`,`Disabled`]}))();export{Q as Disabled,Z as Interactive,X as Large,q as Multiple,J as Outline,K as Single,Y as Small,$ as __namedExportsOrder,G as default};