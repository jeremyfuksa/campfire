import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{it as i,t as a}from"./lucide-react-CRUNCA_B.js";import{n as o,t as s}from"./utils-D2Sa0ztS.js";function c({data:e,onSelect:t,selectedId:n,expandedIds:r,onExpand:i,className:a}){let[o,c]=u.useState([]),f=r??o,p=e=>{let t=f.includes(e)?f.filter(t=>t!==e):[...f,e];i?i(t):c(t)},m=e=>{e.disabled||t?.(e)};return(0,d.jsx)(`div`,{className:s(`text-sm`,a),role:`tree`,children:e.map(e=>(0,d.jsx)(l,{node:e,level:0,expandedIds:f,selectedId:n,onToggleExpand:p,onSelect:m},e.id))})}function l({node:e,level:t,expandedIds:n,selectedId:r,onToggleExpand:a,onSelect:o}){let c=e.children&&e.children.length>0,u=n.includes(e.id),f=r===e.id;return(0,d.jsxs)(`div`,{role:`treeitem`,"aria-expanded":c?u:void 0,children:[(0,d.jsxs)(`div`,{className:s(`flex items-center gap-2 rounded-md px-2 py-1.5 cursor-pointer transition-colors`,`hover:bg-accent hover:text-accent-foreground`,f&&`bg-accent text-accent-foreground font-medium`,e.disabled&&`opacity-50 cursor-not-allowed`),style:{paddingLeft:`${t*1.5+.5}rem`},onClick:()=>{c&&a(e.id),o(e)},children:[c&&(0,d.jsx)(i,{size:12,className:s(`transition-transform`,u&&`rotate-90`),"aria-hidden":`true`}),!c&&(0,d.jsx)(`span`,{className:`w-3`}),e.icon&&(0,d.jsx)(`span`,{className:`text-muted-foreground`,children:e.icon}),(0,d.jsx)(`span`,{className:`flex-1`,children:e.label})]}),c&&u&&(0,d.jsx)(`div`,{role:`group`,children:e.children.map(e=>(0,d.jsx)(l,{node:e,level:t+1,expandedIds:n,selectedId:r,onToggleExpand:a,onSelect:o},e.id))})]})}var u,d,f=t((()=>{u=e(n(),1),a(),o(),d=r(),c.__docgenInfo={description:``,methods:[],displayName:`TreeView`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`TreeNode`}],raw:`TreeNode[]`},description:``},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(node: TreeNode) => void`,signature:{arguments:[{type:{name:`TreeNode`},name:`node`}],return:{name:`void`}}},description:``},selectedId:{required:!1,tsType:{name:`string`},description:``},expandedIds:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},onExpand:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(ids: string[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`ids`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),p,m,h,g,_,v,y,b,x;t((()=>{f(),p={title:`Components/TreeView`,component:c,parameters:{layout:`centered`},tags:[`autodocs`]},m=[{id:`1`,label:`src`,children:[{id:`1-1`,label:`components`,children:[{id:`1-1-1`,label:`Button.tsx`},{id:`1-1-2`,label:`Input.tsx`},{id:`1-1-3`,label:`Card.tsx`}]},{id:`1-2`,label:`utils`,children:[{id:`1-2-1`,label:`helpers.ts`},{id:`1-2-2`,label:`constants.ts`}]},{id:`1-3`,label:`App.tsx`},{id:`1-4`,label:`index.tsx`}]},{id:`2`,label:`public`,children:[{id:`2-1`,label:`index.html`},{id:`2-2`,label:`favicon.ico`}]},{id:`3`,label:`package.json`},{id:`4`,label:`README.md`}],h=[{id:`1`,label:`Engineering`,children:[{id:`1-1`,label:`Frontend`,children:[{id:`1-1-1`,label:`React Team`},{id:`1-1-2`,label:`Vue Team`}]},{id:`1-2`,label:`Backend`,children:[{id:`1-2-1`,label:`Node.js Team`},{id:`1-2-2`,label:`Python Team`}]}]},{id:`2`,label:`Design`,children:[{id:`2-1`,label:`UX Team`},{id:`2-2`,label:`UI Team`}]},{id:`3`,label:`Marketing`,children:[{id:`3-1`,label:`Content`},{id:`3-2`,label:`Social Media`}]}],g={args:{data:m}},_={args:{data:m,onSelect:e=>console.log(`Selected:`,e)}},v={args:{data:h}},y={args:{data:[{id:`1`,label:`Parent 1`,children:[{id:`1-1`,label:`Child 1-1`},{id:`1-2`,label:`Child 1-2`}]},{id:`2`,label:`Parent 2`,children:[{id:`2-1`,label:`Child 2-1`},{id:`2-2`,label:`Child 2-2`}]}]}},b={args:{data:[{id:`1`,label:`Level 1`,children:[{id:`1-1`,label:`Level 2`,children:[{id:`1-1-1`,label:`Level 3`,children:[{id:`1-1-1-1`,label:`Level 4`,children:[{id:`1-1-1-1-1`,label:`Level 5`}]}]}]}]}]}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    data: fileSystemData
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    data: fileSystemData,
    onSelect: (node: TreeNode) => console.log("Selected:", node)
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    data: organizationData
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    data: [{
      id: "1",
      label: "Parent 1",
      children: [{
        id: "1-1",
        label: "Child 1-1"
      }, {
        id: "1-2",
        label: "Child 1-2"
      }]
    }, {
      id: "2",
      label: "Parent 2",
      children: [{
        id: "2-1",
        label: "Child 2-1"
      }, {
        id: "2-2",
        label: "Child 2-2"
      }]
    }]
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    data: [{
      id: "1",
      label: "Level 1",
      children: [{
        id: "1-1",
        label: "Level 2",
        children: [{
          id: "1-1-1",
          label: "Level 3",
          children: [{
            id: "1-1-1-1",
            label: "Level 4",
            children: [{
              id: "1-1-1-1-1",
              label: "Level 5"
            }]
          }]
        }]
      }]
    }]
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`FileSystem`,`Organization`,`SimpleTree`,`DeepNesting`]}))();export{b as DeepNesting,g as Default,_ as FileSystem,v as Organization,y as SimpleTree,x as __namedExportsOrder,p as default};