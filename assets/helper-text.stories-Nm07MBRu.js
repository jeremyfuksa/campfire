import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{n as r,t as i}from"./createLucideIcon-D4Czp6j_.js";import{i as a,n as o,r as s,t as c}from"./triangle-alert-D3EjwRgn.js";import{n as l,t as u}from"./utils-DwVtoTFj.js";var d,f;function p(){return(p=e((()=>{r(),d=[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`,key:`1pkeuh`}],[`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`,key:`4dfq90`}]],f=i(`circle-alert`,d)})))()}function m({children:e,variant:t=`default`,icon:n,className:r}){let i=()=>{switch(t){case`error`:return`var(--danger-600)`;case`success`:return`var(--success-600)`;case`warning`:return`var(--warning-700)`;default:return`var(--text-tertiary)`}},a=n??g[t];return(0,h.jsxs)(`p`,{className:u(`flex items-start gap-1.5`,r),style:{fontSize:`14px`,color:i()},children:[a&&(0,h.jsx)(`span`,{className:`shrink-0 mt-0.5 inline-flex items-center`,"data-testid":`helper-text-icon-${t}`,"aria-hidden":`true`,children:a}),(0,h.jsx)(`span`,{children:e})]})}var h,g;function _(){return(_=e((()=>{t(),p(),o(),a(),l(),h=n(),g={default:null,error:(0,h.jsx)(f,{size:12,"aria-hidden":`true`}),success:(0,h.jsx)(s,{size:12,"aria-hidden":`true`}),warning:(0,h.jsx)(c,{size:12,"aria-hidden":`true`})},m.__docgenInfo={description:``,methods:[],displayName:`HelperText`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'error' | 'success' | 'warning'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{_(),v=n(),y={title:`Components/HelperText`,component:m,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`error`,`success`,`warning`]}}},b={args:{children:`We'll never share your email.`}},x={args:{variant:`error`,children:`Email address is required.`}},S={args:{variant:`success`,children:`Username is available.`}},C={args:{variant:`warning`,children:`Password strength: weak.`}},w={render:()=>(0,v.jsxs)(`div`,{className:`flex flex-col gap-2 w-80`,children:[(0,v.jsx)(m,{children:`Default supporting copy.`}),(0,v.jsx)(m,{variant:`success`,children:`Success state.`}),(0,v.jsx)(m,{variant:`warning`,children:`Warning state.`}),(0,v.jsx)(m,{variant:`error`,children:`Error state.`})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: "We'll never share your email."
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    children: "Email address is required."
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    children: "Username is available."
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    children: "Password strength: weak."
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2 w-80">
      <HelperText>Default supporting copy.</HelperText>
      <HelperText variant="success">Success state.</HelperText>
      <HelperText variant="warning">Warning state.</HelperText>
      <HelperText variant="error">Error state.</HelperText>
    </div>
}`,...w.parameters?.docs?.source}}},T=[`Default`,`Error`,`Success`,`Warning`,`AllVariants`]})))()}E();export{w as AllVariants,b as Default,x as Error,S as Success,C as Warning,T as __namedExportsOrder,y as default};