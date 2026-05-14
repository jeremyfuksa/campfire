import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-XedgCGTy.js";import{t as n}from"./jsx-runtime-_akqGrVk.js";import{et as r,o as i,t as a,tt as o}from"./lucide-react-B9ev7WLa.js";import{n as s,t as c}from"./utils-D2Sa0ztS.js";function l({children:e,variant:t=`default`,icon:n,className:r}){let i=()=>{switch(t){case`error`:return`var(--danger-600)`;case`success`:return`var(--success-600)`;case`warning`:return`var(--warning-700)`;default:return`var(--text-tertiary)`}},a=n??d[t];return(0,u.jsxs)(`p`,{className:c(`flex items-start gap-1.5`,r),style:{fontSize:`14px`,color:i()},children:[a&&(0,u.jsx)(`span`,{className:`shrink-0 mt-0.5 inline-flex items-center`,"data-testid":`helper-text-icon-${t}`,"aria-hidden":`true`,children:a}),(0,u.jsx)(`span`,{children:e})]})}var u,d,f=e((()=>{t(),a(),s(),u=n(),d={default:null,error:(0,u.jsx)(o,{size:12,"aria-hidden":`true`}),success:(0,u.jsx)(r,{size:12,"aria-hidden":`true`}),warning:(0,u.jsx)(i,{size:12,"aria-hidden":`true`})},l.__docgenInfo={description:``,methods:[],displayName:`HelperText`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'error' | 'success' | 'warning'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),p,m,h,g,_,v,y,b;e((()=>{f(),p=n(),m={title:`Components/HelperText`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`error`,`success`,`warning`]}}},h={args:{children:`We'll never share your email.`}},g={args:{variant:`error`,children:`Email address is required.`}},_={args:{variant:`success`,children:`Username is available.`}},v={args:{variant:`warning`,children:`Password strength: weak.`}},y={render:()=>(0,p.jsxs)(`div`,{className:`flex flex-col gap-2 w-80`,children:[(0,p.jsx)(l,{children:`Default supporting copy.`}),(0,p.jsx)(l,{variant:`success`,children:`Success state.`}),(0,p.jsx)(l,{variant:`warning`,children:`Warning state.`}),(0,p.jsx)(l,{variant:`error`,children:`Error state.`})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: "We'll never share your email."
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    children: "Email address is required."
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    children: "Username is available."
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    children: "Password strength: weak."
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2 w-80">
      <HelperText>Default supporting copy.</HelperText>
      <HelperText variant="success">Success state.</HelperText>
      <HelperText variant="warning">Warning state.</HelperText>
      <HelperText variant="error">Error state.</HelperText>
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Error`,`Success`,`Warning`,`AllVariants`]}))();export{y as AllVariants,h as Default,g as Error,_ as Success,v as Warning,b as __namedExportsOrder,m as default};