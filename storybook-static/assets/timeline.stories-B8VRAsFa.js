import{j as e}from"./jsx-runtime-CDt2p4po.js";import{c as N}from"./utils-CDN07tui.js";import"./index-GiUgBvb1.js";const r={default:"var(--neutral-400)",success:"var(--success)",error:"var(--destructive)",warning:"var(--warning)"};function x({items:n,className:h}){return e.jsx("div",{className:N("space-y-8",h),children:n.map((t,v)=>e.jsxs("div",{className:"relative flex gap-4",children:[v!==n.length-1&&e.jsx("div",{className:"absolute left-4 top-8 h-full w-0.5",style:{backgroundColor:"var(--neutral-800)"}}),e.jsx("div",{className:"relative z-10 flex-shrink-0",children:e.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-full border-2",style:{borderColor:r[t.status||"default"],backgroundColor:"var(--background)"},children:t.icon||e.jsx("div",{className:"h-2 w-2 rounded-full",style:{backgroundColor:r[t.status||"default"]}})})}),e.jsxs("div",{className:"flex-1 pb-8",children:[e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsx("h3",{className:"font-semibold",children:t.title}),t.date&&e.jsx("time",{className:"text-sm",style:{color:"var(--neutral-500)"},children:t.date})]}),t.description&&e.jsx("p",{className:"mt-1 text-sm",style:{color:"var(--neutral-400)"},children:t.description})]})]},t.id))})}x.__docgenInfo={description:"",methods:[],displayName:"Timeline",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"TimelineItem"}],raw:"TimelineItem[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const j=[{id:"1",title:"Project Kickoff",description:"Initial planning and requirements gathering completed",date:"Jan 15, 2025",status:"success"},{id:"2",title:"Design Phase",description:"UI/UX design mockups created and approved",date:"Jan 22, 2025",status:"success"},{id:"3",title:"Development Sprint 1",description:"Core features implementation in progress",date:"Feb 1, 2025",status:"warning"},{id:"4",title:"Testing & QA",description:"Comprehensive testing planned",date:"Feb 15, 2025",status:"default"},{id:"5",title:"Production Deploy",description:"Launch to production environment",date:"Mar 1, 2025",status:"default"}],k={title:"Components/Timeline",component:x,parameters:{layout:"padded"},tags:["autodocs"]},s={args:{items:j}},a={args:{items:[{id:"1",title:"Code Committed",description:"Feature branch merged to main",date:"2h ago",icon:e.jsx("i",{className:"fa-solid fa-code text-xs"}),status:"success"},{id:"2",title:"Build Started",description:"CI/CD pipeline initiated",date:"1h ago",icon:e.jsx("i",{className:"fa-solid fa-hammer text-xs"}),status:"warning"},{id:"3",title:"Tests Failed",description:"3 unit tests failing",date:"45m ago",icon:e.jsx("i",{className:"fa-solid fa-xmark text-xs"}),status:"error"},{id:"4",title:"Deploy Pending",description:"Waiting for approval",date:"30m ago",icon:e.jsx("i",{className:"fa-solid fa-clock text-xs"}),status:"default"}]}},i={args:{items:[{id:"1",title:"Order Placed",date:"Mar 1, 2025"},{id:"2",title:"Payment Confirmed",date:"Mar 1, 2025"},{id:"3",title:"Shipped",date:"Mar 2, 2025"}]}};var d,o,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    items: events
  }
}`,...(l=(o=s.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var c,m,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      title: "Code Committed",
      description: "Feature branch merged to main",
      date: "2h ago",
      icon: <i className="fa-solid fa-code text-xs"></i>,
      status: "success"
    }, {
      id: "2",
      title: "Build Started",
      description: "CI/CD pipeline initiated",
      date: "1h ago",
      icon: <i className="fa-solid fa-hammer text-xs"></i>,
      status: "warning"
    }, {
      id: "3",
      title: "Tests Failed",
      description: "3 unit tests failing",
      date: "45m ago",
      icon: <i className="fa-solid fa-xmark text-xs"></i>,
      status: "error"
    }, {
      id: "4",
      title: "Deploy Pending",
      description: "Waiting for approval",
      date: "30m ago",
      icon: <i className="fa-solid fa-clock text-xs"></i>,
      status: "default"
    }]
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,f,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const w=["Default","WithIcons","Simple"];export{s as Default,i as Simple,a as WithIcons,w as __namedExportsOrder,k as default};
