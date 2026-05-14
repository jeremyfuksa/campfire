import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-XedgCGTy.js";import{t as n}from"./jsx-runtime-_akqGrVk.js";import{B as r,G as i,K as a,L as o,W as s,X as c,_t as l,b as u,ct as d,i as f,pt as p,r as m,t as h,xt as g}from"./lucide-react-CRUNCA_B.js";import{n as _,s as v,t as y}from"./card-C7E5zA26.js";function b({label:e,value:t,icon:n,iconColor:r=`var(--interactive-default)`,iconBgColor:i=`var(--bg-muted)`,trend:a,className:o=``}){let s=a?.isPositive?p:l;return(0,x.jsx)(y,{className:o,children:(0,x.jsx)(_,{className:`pt-6`,children:(0,x.jsxs)(`div`,{className:`flex items-start justify-between`,children:[(0,x.jsxs)(`div`,{className:`flex-1`,children:[(0,x.jsx)(`p`,{style:{fontSize:`14px`,color:`var(--text-secondary)`,marginBottom:`4px`},children:e}),(0,x.jsx)(`p`,{className:`text-3xl font-semibold`,style:{color:`var(--text-primary)`},children:t}),a&&(0,x.jsxs)(`div`,{className:`flex items-center gap-1 mt-2`,children:[(0,x.jsx)(s,{"aria-hidden":`true`,"data-testid":a.isPositive?`stat-card-trend-up`:`stat-card-trend-down`,size:12,style:{color:a.isPositive?`var(--success-600)`:`var(--danger-600)`}}),(0,x.jsxs)(`span`,{style:{fontSize:`14px`,color:a.isPositive?`var(--success-600)`:`var(--danger-600)`},children:[Math.abs(a.value),`%`]})]})]}),n&&(0,x.jsx)(`div`,{className:`flex items-center justify-center w-12 h-12 rounded-lg`,"data-testid":`stat-card-icon`,style:{backgroundColor:i,color:r},children:n})]})})})}var x,S=e((()=>{t(),h(),v(),x=n(),b.__docgenInfo={description:``,methods:[],displayName:`StatCard`,props:{label:{required:!0,tsType:{name:`string`},description:``},value:{required:!0,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},iconColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'var(--interactive-default)'`,computed:!1}},iconBgColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'var(--bg-muted)'`,computed:!1}},trend:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  value: number;
  isPositive: boolean;
}`,signature:{properties:[{key:`value`,value:{name:`number`,required:!0}},{key:`isPositive`,value:{name:`boolean`,required:!0}}]}},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),C,w,T,E,D,O,k,A,j,M,N,P,F;e((()=>{h(),S(),C=n(),w={title:`Components/StatCard`,component:b,parameters:{layout:`centered`},tags:[`autodocs`]},T=e=>({value:e,isPositive:!0}),E=e=>({value:e,isPositive:!1}),D={args:{label:`Total Revenue`,value:`$45,231.89`,trend:T(20.1),icon:(0,C.jsx)(i,{size:20})}},O={args:{label:`Total Users`,value:`12,234`,trend:T(15.3),icon:(0,C.jsx)(m,{size:20})}},k={args:{label:`Bounce Rate`,value:`32.4%`,trend:E(5.2),icon:(0,C.jsx)(d,{size:20})}},A={args:{label:`Active Projects`,value:`24`,icon:(0,C.jsx)(o,{size:20})}},j={render:()=>(0,C.jsxs)(`div`,{className:`grid gap-4 md:grid-cols-2 lg:grid-cols-4`,children:[(0,C.jsx)(b,{label:`Total Revenue`,value:`$45,231.89`,trend:T(20.1),icon:(0,C.jsx)(i,{size:20})}),(0,C.jsx)(b,{label:`Subscriptions`,value:`+2,350`,trend:T(15.3),icon:(0,C.jsx)(m,{size:20})}),(0,C.jsx)(b,{label:`Sales`,value:`+12,234`,trend:T(19.2),icon:(0,C.jsx)(a,{size:20})}),(0,C.jsx)(b,{label:`Active Now`,value:`+573`,trend:T(8.1),icon:(0,C.jsx)(g,{size:20})})]})},M={render:()=>(0,C.jsxs)(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[(0,C.jsx)(b,{label:`Page Views`,value:`125,432`,trend:T(12.5),icon:(0,C.jsx)(r,{size:20})}),(0,C.jsx)(b,{label:`Unique Visitors`,value:`45,231`,trend:T(8.3),icon:(0,C.jsx)(f,{size:20})}),(0,C.jsx)(b,{label:`Avg. Session`,value:`2m 34s`,trend:E(3.2),icon:(0,C.jsx)(c,{size:20})})]})},N={args:{label:`Total Downloads`,value:`1,234,567`,trend:T(45.2),icon:(0,C.jsx)(s,{size:20})}},P={args:{label:`Conversion Rate`,value:`3.2%`,trend:T(.8),icon:(0,C.jsx)(u,{size:20})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Total Revenue",
    value: "$45,231.89",
    trend: positive(20.1),
    icon: <DollarSign size={20} />
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Total Users",
    value: "12,234",
    trend: positive(15.3),
    icon: <Users size={20} />
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Bounce Rate",
    value: "32.4%",
    trend: negative(5.2),
    icon: <BarChart3 size={20} />
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Active Projects",
    value: "24",
    icon: <Folder size={20} />
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard label="Total Revenue" value="$45,231.89" trend={positive(20.1)} icon={<DollarSign size={20} />} />
      <StatCard label="Subscriptions" value="+2,350" trend={positive(15.3)} icon={<Users size={20} />} />
      <StatCard label="Sales" value="+12,234" trend={positive(19.2)} icon={<CreditCard size={20} />} />
      <StatCard label="Active Now" value="+573" trend={positive(8.1)} icon={<Activity size={20} />} />
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid gap-4 md:grid-cols-3">
      <StatCard label="Page Views" value="125,432" trend={positive(12.5)} icon={<Eye size={20} />} />
      <StatCard label="Unique Visitors" value="45,231" trend={positive(8.3)} icon={<User size={20} />} />
      <StatCard label="Avg. Session" value="2m 34s" trend={negative(3.2)} icon={<Clock size={20} />} />
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Total Downloads",
    value: "1,234,567",
    trend: positive(45.2),
    icon: <Download size={20} />
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Conversion Rate",
    value: "3.2%",
    trend: positive(0.8),
    icon: <Percent size={20} />
  }
}`,...P.parameters?.docs?.source}}},F=[`Default`,`WithIcon`,`NegativeTrend`,`NoTrend`,`Dashboard`,`MetricsGrid`,`LargeValue`,`SmallTrend`]}))();export{j as Dashboard,D as Default,N as LargeValue,M as MetricsGrid,k as NegativeTrend,A as NoTrend,P as SmallTrend,O as WithIcon,F as __namedExportsOrder,w as default};