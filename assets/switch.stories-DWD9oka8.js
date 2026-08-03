import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{n as i,r as a}from"./dist-Dlyn9OaY.js";import{n as o,r as s}from"./dist-D7HkfZMy.js";import{a as c,i as l,r as u,t as d}from"./dist-BK-Z8wev.js";import{n as f,t as p}from"./dist-CVJt7rz-.js";import{n as m,t as h}from"./utils-DwVtoTFj.js";import{n as g,t as _}from"./dist-lVv2drz_.js";import{n as v,t as y}from"./label-5Hovh9ZK.js";import{n as b,t as x}from"./dist-DhP98QVH.js";function S(e){return e?`checked`:`unchecked`}var C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=t((()=>{C=e(n(),1),c(),o(),a(),p(),x(),_(),u(),w=r(),T=`Switch`,[E,D]=i(T),[O,k]=E(T),A=C.forwardRef((e,t)=>{let{__scopeSwitch:n,name:r,checked:i,defaultChecked:a,required:o,disabled:c,value:u=`on`,onCheckedChange:p,form:m,...h}=e,[g,_]=C.useState(null),v=s(t,e=>_(e)),y=C.useRef(!1),b=!g||m||!!g.closest(`form`),[x,E]=f({prop:i,defaultProp:a??!1,onChange:p,caller:T});return(0,w.jsxs)(O,{scope:n,checked:x,disabled:c,children:[(0,w.jsx)(d.button,{type:`button`,role:`switch`,"aria-checked":x,"aria-required":o,"data-state":S(x),"data-disabled":c?``:void 0,disabled:c,value:u,...h,ref:v,onClick:l(e.onClick,e=>{E(e=>!e),b&&(y.current=e.isPropagationStopped(),y.current||e.stopPropagation())})}),b&&(0,w.jsx)(P,{control:g,bubbles:!y.current,name:r,value:u,checked:x,required:o,disabled:c,form:m,style:{transform:`translateX(-100%)`}})]})}),A.displayName=T,j=`SwitchThumb`,M=C.forwardRef((e,t)=>{let{__scopeSwitch:n,...r}=e,i=k(j,n);return(0,w.jsx)(d.span,{"data-state":S(i.checked),"data-disabled":i.disabled?``:void 0,...r,ref:t})}),M.displayName=j,N=`SwitchBubbleInput`,P=C.forwardRef(({__scopeSwitch:e,control:t,checked:n,bubbles:r=!0,...i},a)=>{let o=C.useRef(null),c=s(o,a),l=b(n),u=g(t);return C.useEffect(()=>{let e=o.current;if(!e)return;let t=window.HTMLInputElement.prototype,i=Object.getOwnPropertyDescriptor(t,`checked`).set;if(l!==n&&i){let t=new Event(`click`,{bubbles:r});i.call(e,n),e.dispatchEvent(t)}},[l,n,r]),(0,w.jsx)(`input`,{type:`checkbox`,"aria-hidden":!0,defaultChecked:n,...i,tabIndex:-1,ref:c,style:{...i.style,...u,position:`absolute`,pointerEvents:`none`,opacity:0,margin:0}})}),P.displayName=N,F=A,I=M})))()}var R,z,B;function V(){return(V=t((()=>{R=e(n(),1),L(),m(),z=r(),B=R.forwardRef(({className:e,...t},n)=>(0,z.jsx)(F,{ref:n,"data-slot":`switch`,className:h(`peer inline-flex h-[1.15rem] w-8 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-all outline-hidden`,`focus-visible:ring-[3px] focus-visible:ring-ring/50`,`disabled:cursor-not-allowed disabled:opacity-50`,`data-[state=checked]:bg-primary data-[state=unchecked]:bg-neutral-300 dark:data-[state=unchecked]:bg-neutral-700`,e),...t,children:(0,z.jsx)(I,{"data-slot":`switch-thumb`,className:h(`pointer-events-none block size-4 rounded-full bg-background shadow-lg ring-0 transition-transform`,`data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0`)})})),B.displayName=`Switch`,B.__docgenInfo={description:``,methods:[],displayName:`Switch`}})))()}var H,U,W,G,K,q,J,Y,X;function Z(){return(Z=t((()=>{V(),v(),H=r(),U={title:`Components/Switch`,component:B,parameters:{layout:`centered`},tags:[`autodocs`]},W={args:{}},G={render:()=>(0,H.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,H.jsx)(B,{id:`airplane-mode`}),(0,H.jsx)(y,{htmlFor:`airplane-mode`,children:`Airplane Mode`})]})},K={args:{defaultChecked:!0}},q={args:{disabled:!0}},J={args:{disabled:!0,defaultChecked:!0}},Y={render:()=>(0,H.jsxs)(`div`,{className:`space-y-4`,children:[(0,H.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,H.jsx)(B,{id:`notifications`,defaultChecked:!0}),(0,H.jsx)(y,{htmlFor:`notifications`,children:`Enable notifications`})]}),(0,H.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,H.jsx)(B,{id:`marketing`}),(0,H.jsx)(y,{htmlFor:`marketing`,children:`Marketing emails`})]}),(0,H.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,H.jsx)(B,{id:`security`,defaultChecked:!0}),(0,H.jsx)(y,{htmlFor:`security`,children:`Security alerts`})]})]})},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X=[`Default`,`WithLabel`,`Checked`,`Disabled`,`DisabledChecked`,`Multiple`]})))()}Z();export{K as Checked,W as Default,q as Disabled,J as DisabledChecked,Y as Multiple,G as WithLabel,X as __namedExportsOrder,U as default};