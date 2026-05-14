import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-XedgCGTy.js";import{t as n}from"./jsx-runtime-_akqGrVk.js";import{J as r,P as i,X as a,n as o,t as s}from"./lucide-react-BZbEj6fH.js";import{n as c,t as l}from"./utils-CDLLjGU_.js";function u({items:e,className:t}){return(0,d.jsx)(`div`,{className:l(`space-y-8`,t),children:e.map((t,n)=>(0,d.jsxs)(`div`,{className:`relative flex gap-4`,children:[n!==e.length-1&&(0,d.jsx)(`div`,{className:`absolute left-4 top-8 h-full w-0.5`,style:{backgroundColor:`var(--neutral-800)`}}),(0,d.jsx)(`div`,{className:`relative z-10 shrink-0`,children:(0,d.jsx)(`div`,{className:`flex h-8 w-8 items-center justify-center rounded-full border-2`,style:{borderColor:f[t.status||`default`],backgroundColor:`var(--bg-base)`},children:t.icon||(0,d.jsx)(`div`,{className:`h-2 w-2 rounded-full`,style:{backgroundColor:f[t.status||`default`]}})})}),(0,d.jsxs)(`div`,{className:`flex-1 pb-8`,children:[(0,d.jsxs)(`div`,{className:`flex items-start justify-between gap-4`,children:[(0,d.jsx)(`h3`,{className:`font-semibold`,children:t.title}),t.date&&(0,d.jsx)(`time`,{className:`text-sm`,style:{color:`var(--neutral-500)`},children:t.date})]}),t.description&&(0,d.jsx)(`p`,{className:`mt-1 text-sm`,style:{color:`var(--neutral-400)`},children:t.description})]})]},t.id))})}var d,f,p=e((()=>{t(),c(),d=n(),f={default:`var(--neutral-400)`,success:`var(--success-600)`,error:`var(--danger-600)`,warning:`var(--warning-600)`},u.__docgenInfo={description:``,methods:[],displayName:`Timeline`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`TimelineItem`}],raw:`TimelineItem[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),m,h,g,_,v,y,b;e((()=>{s(),p(),m=n(),h=[{id:`1`,title:`Project Kickoff`,description:`Initial planning and requirements gathering completed`,date:`Jan 15, 2025`,status:`success`},{id:`2`,title:`Design Phase`,description:`UI/UX design mockups created and approved`,date:`Jan 22, 2025`,status:`success`},{id:`3`,title:`Development Sprint 1`,description:`Core features implementation in progress`,date:`Feb 1, 2025`,status:`warning`},{id:`4`,title:`Testing & QA`,description:`Comprehensive testing planned`,date:`Feb 15, 2025`,status:`default`},{id:`5`,title:`Production Deploy`,description:`Launch to production environment`,date:`Mar 1, 2025`,status:`default`}],g={title:`Components/Timeline`,component:u,parameters:{layout:`padded`},tags:[`autodocs`]},_={args:{items:h}},v={args:{items:[{id:`1`,title:`Code Committed`,description:`Feature branch merged to main`,date:`2h ago`,icon:(0,m.jsx)(r,{size:12}),status:`success`},{id:`2`,title:`Build Started`,description:`CI/CD pipeline initiated`,date:`1h ago`,icon:(0,m.jsx)(i,{size:12}),status:`warning`},{id:`3`,title:`Tests Failed`,description:`3 unit tests failing`,date:`45m ago`,icon:(0,m.jsx)(o,{size:12}),status:`error`},{id:`4`,title:`Deploy Pending`,description:`Waiting for approval`,date:`30m ago`,icon:(0,m.jsx)(a,{size:12}),status:`default`}]}},y={args:{items:[{id:`1`,title:`Order Placed`,date:`Mar 1, 2025`},{id:`2`,title:`Payment Confirmed`,date:`Mar 1, 2025`},{id:`3`,title:`Shipped`,date:`Mar 2, 2025`}]}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    items: events
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`Default`,`WithIcons`,`Simple`]}))();export{_ as Default,y as Simple,v as WithIcons,b as __namedExportsOrder,g as default};