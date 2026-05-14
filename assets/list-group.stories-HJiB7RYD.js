import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-XedgCGTy.js";import{t as n}from"./jsx-runtime-_akqGrVk.js";import{L as r,i,it as a,l as o,t as s}from"./lucide-react-CRUNCA_B.js";import{n as c,t as l}from"./utils-D2Sa0ztS.js";function u({children:e,className:t}){return(0,f.jsx)(`ul`,{className:l(`rounded-lg overflow-hidden border`,t),style:{borderColor:`var(--border-default)`},children:e})}function d({children:e,icon:t,action:n,onClick:r,active:i=!1,disabled:a=!1,className:o}){let s=!!r&&!a,c=a?void 0:r;return(0,f.jsxs)(`li`,{className:l(`flex items-center justify-between px-4 py-3 border-b last:border-b-0 transition-colors`,s&&`cursor-pointer hover:bg-bg-subtle`,a&&`opacity-60 cursor-not-allowed`,i&&`bg-bg-subtle`,o),style:{borderColor:`var(--border-default)`,backgroundColor:i?`var(--bg-subtle)`:`transparent`},"aria-disabled":a||void 0,onClick:c,children:[(0,f.jsxs)(`div`,{className:`flex items-center gap-3 flex-1`,children:[t&&(0,f.jsx)(`span`,{className:`inline-flex items-center`,"data-testid":`list-group-item-icon`,"aria-hidden":`true`,style:{color:`var(--text-secondary)`},children:t}),(0,f.jsx)(`span`,{style:{color:`var(--text-primary)`},children:e})]}),n&&(0,f.jsx)(`div`,{children:n})]})}var f,p=e((()=>{t(),c(),f=n(),u.__docgenInfo={description:``,methods:[],displayName:`ListGroup`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},d.__docgenInfo={description:``,methods:[],displayName:`ListGroupItem`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},action:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},active:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),m,h,g,_,v,y;e((()=>{s(),p(),m=n(),h={title:`Components/ListGroup`,component:u,parameters:{layout:`padded`},tags:[`autodocs`]},g={render:()=>(0,m.jsxs)(u,{className:`w-80`,children:[(0,m.jsx)(d,{children:`First item`}),(0,m.jsx)(d,{children:`Second item`}),(0,m.jsx)(d,{children:`Third item`})]})},_={render:()=>(0,m.jsxs)(u,{className:`w-80`,children:[(0,m.jsx)(d,{icon:(0,m.jsx)(i,{size:16}),children:`Profile`}),(0,m.jsx)(d,{icon:(0,m.jsx)(o,{size:16}),children:`Favorites`}),(0,m.jsx)(d,{icon:(0,m.jsx)(r,{size:16}),children:`Projects`})]})},v={render:()=>(0,m.jsxs)(u,{className:`w-80`,children:[(0,m.jsx)(d,{icon:(0,m.jsx)(i,{size:16}),action:(0,m.jsx)(a,{size:16}),onClick:()=>alert(`Profile clicked`),children:`Profile`}),(0,m.jsx)(d,{icon:(0,m.jsx)(o,{size:16}),action:(0,m.jsx)(a,{size:16}),active:!0,onClick:()=>alert(`Favorites clicked`),children:`Favorites (active)`}),(0,m.jsx)(d,{icon:(0,m.jsx)(r,{size:16}),action:(0,m.jsx)(a,{size:16}),disabled:!0,children:`Projects (disabled)`})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ListGroup className="w-80">
      <ListGroupItem>First item</ListGroupItem>
      <ListGroupItem>Second item</ListGroupItem>
      <ListGroupItem>Third item</ListGroupItem>
    </ListGroup>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <ListGroup className="w-80">
      <ListGroupItem icon={<User size={16} />}>Profile</ListGroupItem>
      <ListGroupItem icon={<Star size={16} />}>Favorites</ListGroupItem>
      <ListGroupItem icon={<Folder size={16} />}>Projects</ListGroupItem>
    </ListGroup>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ListGroup className="w-80">
      <ListGroupItem icon={<User size={16} />} action={<ChevronRight size={16} />} onClick={() => alert("Profile clicked")}>
        Profile
      </ListGroupItem>
      <ListGroupItem icon={<Star size={16} />} action={<ChevronRight size={16} />} active onClick={() => alert("Favorites clicked")}>
        Favorites (active)
      </ListGroupItem>
      <ListGroupItem icon={<Folder size={16} />} action={<ChevronRight size={16} />} disabled>
        Projects (disabled)
      </ListGroupItem>
    </ListGroup>
}`,...v.parameters?.docs?.source}}},y=[`Default`,`WithIcons`,`Interactive`]}))();export{g as Default,v as Interactive,_ as WithIcons,y as __namedExportsOrder,h as default};