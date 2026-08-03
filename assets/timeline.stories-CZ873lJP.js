import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{n as r,t as i}from"./createLucideIcon-D4Czp6j_.js";import{n as a,t as o}from"./clock-C-AMUam2.js";import{n as s,t as c}from"./x-B9OLE3_7.js";import{n as l,t as u}from"./utils-DwVtoTFj.js";var d,f;function p(){return(p=e((()=>{r(),d=[[`polyline`,{points:`16 18 22 12 16 6`,key:`z7tu5w`}],[`polyline`,{points:`8 6 2 12 8 18`,key:`1eg1df`}]],f=i(`code`,d)})))()}var m,h;function g(){return(g=e((()=>{r(),m=[[`path`,{d:`m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9`,key:`eefl8a`}],[`path`,{d:`m18 15 4-4`,key:`16gjal`}],[`path`,{d:`m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5`,key:`b7pghm`}]],h=i(`hammer`,m)})))()}function _({items:e,className:t}){return(0,v.jsx)(`div`,{className:u(`space-y-8`,t),children:e.map((t,n)=>(0,v.jsxs)(`div`,{className:`relative flex gap-4`,children:[n!==e.length-1&&(0,v.jsx)(`div`,{className:`absolute left-4 top-8 h-full w-0.5`,style:{backgroundColor:`var(--neutral-800)`}}),(0,v.jsx)(`div`,{className:`relative z-10 shrink-0`,children:(0,v.jsx)(`div`,{className:`flex h-8 w-8 items-center justify-center rounded-full border-2`,style:{borderColor:y[t.status||`default`],backgroundColor:`var(--bg-base)`},children:t.icon||(0,v.jsx)(`div`,{className:`h-2 w-2 rounded-full`,style:{backgroundColor:y[t.status||`default`]}})})}),(0,v.jsxs)(`div`,{className:`flex-1 pb-8`,children:[(0,v.jsxs)(`div`,{className:`flex items-start justify-between gap-4`,children:[(0,v.jsx)(`h3`,{className:`font-semibold`,children:t.title}),t.date&&(0,v.jsx)(`time`,{className:`text-sm`,style:{color:`var(--neutral-500)`},children:t.date})]}),t.description&&(0,v.jsx)(`p`,{className:`mt-1 text-sm`,style:{color:`var(--neutral-400)`},children:t.description})]})]},t.id))})}var v,y;function b(){return(b=e((()=>{t(),l(),v=n(),y={default:`var(--neutral-400)`,success:`var(--success-600)`,error:`var(--danger-600)`,warning:`var(--warning-600)`},_.__docgenInfo={description:``,methods:[],displayName:`Timeline`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`TimelineItem`}],raw:`TimelineItem[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var x,S,C,w,T,E,D;function O(){return(O=e((()=>{a(),p(),g(),s(),b(),x=n(),S=[{id:`1`,title:`Project Kickoff`,description:`Initial planning and requirements gathering completed`,date:`Jan 15, 2025`,status:`success`},{id:`2`,title:`Design Phase`,description:`UI/UX design mockups created and approved`,date:`Jan 22, 2025`,status:`success`},{id:`3`,title:`Development Sprint 1`,description:`Core features implementation in progress`,date:`Feb 1, 2025`,status:`warning`},{id:`4`,title:`Testing & QA`,description:`Comprehensive testing planned`,date:`Feb 15, 2025`,status:`default`},{id:`5`,title:`Production Deploy`,description:`Launch to production environment`,date:`Mar 1, 2025`,status:`default`}],C={title:`Components/Timeline`,component:_,parameters:{layout:`padded`},tags:[`autodocs`]},w={args:{items:S}},T={args:{items:[{id:`1`,title:`Code Committed`,description:`Feature branch merged to main`,date:`2h ago`,icon:(0,x.jsx)(f,{size:12}),status:`success`},{id:`2`,title:`Build Started`,description:`CI/CD pipeline initiated`,date:`1h ago`,icon:(0,x.jsx)(h,{size:12}),status:`warning`},{id:`3`,title:`Tests Failed`,description:`3 unit tests failing`,date:`45m ago`,icon:(0,x.jsx)(c,{size:12}),status:`error`},{id:`4`,title:`Deploy Pending`,description:`Waiting for approval`,date:`30m ago`,icon:(0,x.jsx)(o,{size:12}),status:`default`}]}},E={args:{items:[{id:`1`,title:`Order Placed`,date:`Mar 1, 2025`},{id:`2`,title:`Payment Confirmed`,date:`Mar 1, 2025`},{id:`3`,title:`Shipped`,date:`Mar 2, 2025`}]}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    items: events
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      title: "Code Committed",
      description: "Feature branch merged to main",
      date: "2h ago",
      icon: <Code size={12} />,
      status: "success"
    }, {
      id: "2",
      title: "Build Started",
      description: "CI/CD pipeline initiated",
      date: "1h ago",
      icon: <Hammer size={12} />,
      status: "warning"
    }, {
      id: "3",
      title: "Tests Failed",
      description: "3 unit tests failing",
      date: "45m ago",
      icon: <X size={12} />,
      status: "error"
    }, {
      id: "4",
      title: "Deploy Pending",
      description: "Waiting for approval",
      date: "30m ago",
      icon: <Clock size={12} />,
      status: "default"
    }]
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      title: "Order Placed",
      date: "Mar 1, 2025"
    }, {
      id: "2",
      title: "Payment Confirmed",
      date: "Mar 1, 2025"
    }, {
      id: "3",
      title: "Shipped",
      date: "Mar 2, 2025"
    }]
  }
}`,...E.parameters?.docs?.source}}},D=[`Default`,`WithIcons`,`Simple`]})))()}O();export{w as Default,E as Simple,T as WithIcons,D as __namedExportsOrder,C as default};