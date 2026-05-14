import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{n as i,t as a}from"./lucide-react-BZbEj6fH.js";import{n as o,t as s}from"./utils-CDLLjGU_.js";import{n as c,t as l}from"./dist-BmBTYeNk.js";var u,d,f,p,m=t((()=>{u=e(n(),1),a(),c(),o(),d=r(),f=l(`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-sm transition-colors`,{variants:{variant:{default:`bg-muted text-foreground border-border`,primary:`bg-(--primary-100) text-(--primary-700) border-(--primary-200)`,success:`bg-(--success-100) text-(--success-800) border-(--success-200)`,warning:`bg-(--warning-100) text-(--warning-900) border-(--warning-300)`,danger:`bg-(--danger-100) text-(--danger-800) border-(--danger-200)`}},defaultVariants:{variant:`default`}}),p=u.forwardRef(({label:e,children:t,variant:n,onRemove:r,onClose:a,icon:o,className:c},l)=>{let u=a||r;return(0,d.jsxs)(`div`,{ref:l,className:s(f({variant:n,className:c})),children:[o&&(0,d.jsx)(`span`,{className:`inline-flex items-center`,"data-testid":`chip-icon`,"aria-hidden":`true`,children:o}),(0,d.jsx)(`span`,{children:t||e}),u&&(0,d.jsx)(`button`,{type:`button`,onClick:u,"aria-label":`Remove chip`,className:`hover:opacity-70 transition-opacity`,"data-testid":`chip-remove`,children:(0,d.jsx)(i,{size:12,"aria-hidden":`true`})})]})}),p.displayName=`Chip`,p.__docgenInfo={description:``,methods:[],displayName:`Chip`,props:{label:{required:!1,tsType:{name:`string`},description:``},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},onRemove:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:"@deprecated Use `onClose` instead."},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}},composes:[`VariantProps`]}})),h,g,_,v,y,b,x,S,C;t((()=>{m(),h=r(),g={title:`Components/Chip`,component:p,parameters:{layout:`centered`},tags:[`autodocs`]},_={args:{children:`Chip`}},v={args:{children:`Removable`,onRemove:()=>alert(`Chip removed`)}},y={render:()=>(0,h.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,h.jsx)(p,{children:`React`}),(0,h.jsx)(p,{children:`TypeScript`}),(0,h.jsx)(p,{children:`Tailwind`}),(0,h.jsx)(p,{children:`Vite`})]})},b={render:()=>(0,h.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,h.jsx)(p,{onRemove:()=>console.log(`Removed React`),children:`React`}),(0,h.jsx)(p,{onRemove:()=>console.log(`Removed TypeScript`),children:`TypeScript`}),(0,h.jsx)(p,{onRemove:()=>console.log(`Removed Tailwind`),children:`Tailwind`}),(0,h.jsx)(p,{onRemove:()=>console.log(`Removed Vite`),children:`Vite`})]})},x={render:()=>(0,h.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,h.jsx)(p,{onRemove:()=>{},children:`JavaScript`}),(0,h.jsx)(p,{onRemove:()=>{},children:`CSS`}),(0,h.jsx)(p,{onRemove:()=>{},children:`HTML`}),(0,h.jsx)(p,{onRemove:()=>{},children:`Node.js`}),(0,h.jsx)(p,{onRemove:()=>{},children:`Express`}),(0,h.jsx)(p,{onRemove:()=>{},children:`MongoDB`})]})},S={render:()=>(0,h.jsxs)(`div`,{className:`w-[400px] space-y-3`,children:[(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h4`,{className:`text-sm font-medium mb-2`,children:`Frontend`}),(0,h.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,h.jsx)(p,{children:`React`}),(0,h.jsx)(p,{children:`Vue`}),(0,h.jsx)(p,{children:`Angular`})]})]}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h4`,{className:`text-sm font-medium mb-2`,children:`Backend`}),(0,h.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,h.jsx)(p,{children:`Node.js`}),(0,h.jsx)(p,{children:`Python`}),(0,h.jsx)(p,{children:`Go`})]})]})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Chip"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Removable",
    onRemove: () => alert("Chip removed")
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Chip>React</Chip>
      <Chip>TypeScript</Chip>
      <Chip>Tailwind</Chip>
      <Chip>Vite</Chip>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Chip onRemove={() => console.log("Removed React")}>React</Chip>
      <Chip onRemove={() => console.log("Removed TypeScript")}>TypeScript</Chip>
      <Chip onRemove={() => console.log("Removed Tailwind")}>Tailwind</Chip>
      <Chip onRemove={() => console.log("Removed Vite")}>Vite</Chip>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Chip onRemove={() => {}}>JavaScript</Chip>
      <Chip onRemove={() => {}}>CSS</Chip>
      <Chip onRemove={() => {}}>HTML</Chip>
      <Chip onRemove={() => {}}>Node.js</Chip>
      <Chip onRemove={() => {}}>Express</Chip>
      <Chip onRemove={() => {}}>MongoDB</Chip>
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[400px] space-y-3">
      <div>
        <h4 className="text-sm font-medium mb-2">Frontend</h4>
        <div className="flex flex-wrap gap-2">
          <Chip>React</Chip>
          <Chip>Vue</Chip>
          <Chip>Angular</Chip>
        </div>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Backend</h4>
        <div className="flex flex-wrap gap-2">
          <Chip>Node.js</Chip>
          <Chip>Python</Chip>
          <Chip>Go</Chip>
        </div>
      </div>
    </div>
}`,...S.parameters?.docs?.source}}},C=[`Default`,`WithRemove`,`Multiple`,`WithRemoveHandlers`,`Tags`,`Skills`]}))();export{_ as Default,y as Multiple,S as Skills,x as Tags,v as WithRemove,b as WithRemoveHandlers,C as __namedExportsOrder,g as default};