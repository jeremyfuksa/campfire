import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{n as i,t as a}from"./utils-CDLLjGU_.js";import{n as o,t as s}from"./label-C_2QsoTr.js";var c,l,u,d=t((()=>{c=e(n(),1),i(),l=r(),u=c.forwardRef(({className:e,disabled:t,checked:n,defaultChecked:r,required:i,onCheckedChange:o,...s},u)=>{let[d,f]=c.useState(r??!1),p=n??d;return(0,l.jsx)(`input`,{ref:u,type:`checkbox`,role:`switch`,"data-slot":`switch`,"data-state":p?`checked`:`unchecked`,className:a(`peer inline-flex h-[1.15rem] w-8 shrink-0 cursor-pointer appearance-none items-center rounded-full border border-transparent transition-all outline-hidden focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50`,p?`bg-primary`:`bg-(--switch-background)`,e),"aria-checked":p,"aria-required":i?`true`:void 0,required:i,checked:p,disabled:t,onChange:e=>{if(t)return;let r=e.target.checked;n===void 0&&f(r),o?.(r)},value:s.value??`on`,...s})}),u.displayName=`Switch`,u.__docgenInfo={description:``,methods:[],displayName:`Switch`,props:{onCheckedChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:``}}}})),f,p,m,h,g,_,v,y,b;t((()=>{d(),o(),f=r(),p={title:`Components/Switch`,component:u,parameters:{layout:`centered`},tags:[`autodocs`]},m={args:{}},h={render:()=>(0,f.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,f.jsx)(u,{id:`airplane-mode`}),(0,f.jsx)(s,{htmlFor:`airplane-mode`,children:`Airplane Mode`})]})},g={args:{defaultChecked:!0}},_={args:{disabled:!0}},v={args:{disabled:!0,defaultChecked:!0}},y={render:()=>(0,f.jsxs)(`div`,{className:`space-y-4`,children:[(0,f.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,f.jsx)(u,{id:`notifications`,defaultChecked:!0}),(0,f.jsx)(s,{htmlFor:`notifications`,children:`Enable notifications`})]}),(0,f.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,f.jsx)(u,{id:`marketing`}),(0,f.jsx)(s,{htmlFor:`marketing`,children:`Marketing emails`})]}),(0,f.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,f.jsx)(u,{id:`security`,defaultChecked:!0}),(0,f.jsx)(s,{htmlFor:`security`,children:`Security alerts`})]})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="notifications" defaultChecked />
        <Label htmlFor="notifications">Enable notifications</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="marketing" />
        <Label htmlFor="marketing">Marketing emails</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="security" defaultChecked />
        <Label htmlFor="security">Security alerts</Label>
      </div>
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Default`,`WithLabel`,`Checked`,`Disabled`,`DisabledChecked`,`Multiple`]}))();export{g as Checked,m as Default,_ as Disabled,v as DisabledChecked,y as Multiple,h as WithLabel,b as __namedExportsOrder,p as default};