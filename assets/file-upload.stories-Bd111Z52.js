import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{Y as i,n as a,t as o,z as s}from"./lucide-react-CRUNCA_B.js";import{n as c,t as l}from"./utils-D2Sa0ztS.js";import{r as u,t as d}from"./button-RVltMg_M.js";function f({accept:e,multiple:t=!1,maxSize:n=10,onFilesSelected:r,onFileSelect:o,label:c=`Click to upload`,className:u}){let[f,h]=(0,p.useState)(!1),[g,_]=(0,p.useState)([]),v=(0,p.useRef)(null),y=e=>{if(!e)return;let t=Array.from(e).filter(e=>e.size/(1024*1024)<=n);_(t),r?.(t),o?.(t)},b=e=>{e.preventDefault(),h(!0)},x=()=>{h(!1)},S=e=>{e.preventDefault(),h(!1),y(e.dataTransfer.files)},C=()=>{v.current?.click()},w=e=>{y(e.target.files)},T=e=>{let t=g.filter((t,n)=>n!==e);_(t),r?.(t)};return(0,m.jsxs)(`div`,{className:l(`space-y-3`,u),children:[(0,m.jsxs)(`div`,{className:l(`relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all`,f&&`border-primary bg-primary/5`),style:{borderColor:f?`var(--interactive-default)`:`var(--border-default)`,backgroundColor:f?`var(--bg-subtle)`:`transparent`},onDragOver:b,onDragLeave:x,onDrop:S,onClick:C,children:[(0,m.jsx)(`input`,{ref:v,type:`file`,accept:e,multiple:t,onChange:w,"aria-label":c,className:`hidden`}),(0,m.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,m.jsx)(i,{size:32,style:{color:`var(--text-tertiary)`},"aria-hidden":`true`}),(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`p`,{style:{color:`var(--text-primary)`},children:[(0,m.jsx)(`span`,{style:{color:`var(--interactive-default)`},children:c}),` or drag and drop`]}),(0,m.jsxs)(`p`,{style:{fontSize:`14px`,color:`var(--text-tertiary)`,marginTop:`4px`},children:[e?`${e} files`:`Any file type`,` (max `,n,`MB)`]})]})]})]}),g.length>0&&(0,m.jsx)(`div`,{className:`space-y-2`,children:g.map((e,t)=>(0,m.jsxs)(`div`,{className:`flex items-center justify-between p-3 rounded-lg border`,style:{backgroundColor:`var(--bg-subtle)`,borderColor:`var(--border-default)`},children:[(0,m.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,m.jsx)(s,{size:16,style:{color:`var(--text-tertiary)`},"aria-hidden":`true`}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`p`,{style:{fontSize:`14px`,color:`var(--text-primary)`},children:e.name}),(0,m.jsxs)(`p`,{style:{fontSize:`12px`,color:`var(--text-tertiary)`},children:[(e.size/1024).toFixed(1),` KB`]})]})]}),(0,m.jsx)(d,{variant:`ghost`,size:`sm`,onClick:e=>{e.stopPropagation(),T(t)},children:(0,m.jsx)(a,{size:16,"aria-label":`Remove file`})})]},t))})]})}var p,m,h=t((()=>{p=e(n(),1),o(),c(),u(),m=r(),f.__docgenInfo={description:``,methods:[],displayName:`FileUpload`,props:{accept:{required:!1,tsType:{name:`string`},description:``},multiple:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},maxSize:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`10`,computed:!1}},onFilesSelected:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(files: File[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`File`}],raw:`File[]`},name:`files`}],return:{name:`void`}}},description:``},onFileSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(files: File[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`File`}],raw:`File[]`},name:`files`}],return:{name:`void`}}},description:`@deprecated Use onFilesSelected instead.`},label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Click to upload"`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),g,_,v,y,b,x,S,C;t((()=>{h(),g={title:`Components/FileUpload`,component:f,parameters:{layout:`centered`},tags:[`autodocs`]},_={args:{onFilesSelected:e=>console.log(`Files uploaded:`,e)}},v={args:{onFilesSelected:e=>console.log(`Images uploaded:`,e),accept:`image/*`}},y={args:{onFilesSelected:e=>console.log(`Multiple files:`,e),multiple:!0}},b={args:{onFilesSelected:e=>console.log(`Files uploaded:`,e),maxSize:5}},x={args:{onFilesSelected:e=>console.log(`PDF uploaded:`,e),accept:`application/pdf`}},S={args:{onFilesSelected:e=>console.log(`Files:`,e),disabled:!0}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    onFilesSelected: (files: File[]) => console.log("Files uploaded:", files)
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    onFilesSelected: (files: File[]) => console.log("Images uploaded:", files),
    accept: "image/*"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    onFilesSelected: (files: File[]) => console.log("Multiple files:", files),
    multiple: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    onFilesSelected: (files: File[]) => console.log("Files uploaded:", files),
    maxSize: 5 // MB
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    onFilesSelected: (files: File[]) => console.log("PDF uploaded:", files),
    accept: "application/pdf"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    onFilesSelected: (files: File[]) => console.log("Files:", files),
    disabled: true
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`ImagesOnly`,`Multiple`,`WithMaxSize`,`PDFOnly`,`Disabled`]}))();export{_ as Default,S as Disabled,v as ImagesOnly,y as Multiple,x as PDFOnly,b as WithMaxSize,C as __namedExportsOrder,g as default};