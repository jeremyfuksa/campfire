import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{h as i,n as a,t as o}from"./lucide-react-BZbEj6fH.js";import{n as s,t as c}from"./utils-CDLLjGU_.js";import{n as l,t as u}from"./input-CzMQIuHQ.js";function d({placeholder:e=`Search...`,suggestions:t=[],onSearch:n,className:r}){let[o,s]=(0,f.useState)(``),[l,d]=(0,f.useState)(!1),[m,h]=(0,f.useState)([]),g=(0,f.useRef)(null);(0,f.useEffect)(()=>{if(o){let e=t.filter(e=>e.toLowerCase().includes(o.toLowerCase()));h(e),d(e.length>0)}else d(!1)},[o,t]),(0,f.useEffect)(()=>{function e(e){g.current&&!g.current.contains(e.target)&&d(!1)}return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let _=e=>{s(e),d(!1),n?.(e)};return(0,p.jsxs)(`div`,{ref:g,className:c(`relative`,r),children:[(0,p.jsx)(`form`,{onSubmit:e=>{e.preventDefault(),d(!1),n?.(o)},children:(0,p.jsxs)(`div`,{className:`relative`,children:[(0,p.jsx)(i,{size:14,className:`absolute left-3 top-1/2 -translate-y-1/2`,style:{color:`var(--text-tertiary)`}}),(0,p.jsx)(u,{type:`text`,placeholder:e,value:o,onChange:e=>s(e.target.value),className:`pl-10 pr-10`}),o&&(0,p.jsx)(`button`,{type:`button`,onClick:()=>s(``),className:`absolute right-3 top-1/2 -translate-y-1/2`,children:(0,p.jsx)(a,{size:14,style:{color:`var(--text-tertiary)`}})})]})}),l&&m.length>0&&(0,p.jsx)(`div`,{className:`absolute w-full mt-1 rounded-lg border shadow-lg overflow-hidden z-50`,style:{backgroundColor:`var(--bg-base)`,borderColor:`var(--border-default)`},children:m.map((e,t)=>(0,p.jsx)(`div`,{className:`px-4 py-2 cursor-pointer transition-colors`,style:{color:`var(--text-primary)`},onMouseEnter:e=>{e.currentTarget.style.backgroundColor=`var(--bg-subtle)`},onMouseLeave:e=>{e.currentTarget.style.backgroundColor=`transparent`},onClick:()=>_(e),children:e},t))})]})}var f,p,m=t((()=>{f=e(n(),1),l(),s(),o(),p=r(),d.__docgenInfo={description:``,methods:[],displayName:`SearchInput`,props:{placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Search...'`,computed:!1}},suggestions:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``,defaultValue:{value:`[]`,computed:!1}},onSearch:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),h,g,_,v,y,b,x,S,C,w;t((()=>{h=e(n(),1),m(),g=r(),_={title:`Components/SearchInput`,component:d,parameters:{layout:`centered`},tags:[`autodocs`]},v=[`React components`,`Vue components`,`Design systems`,`Accessibility`,`Autocomplete`,`Filtered lists`],y={args:{placeholder:`Search...`,suggestions:v}},b={render:()=>{let[e,t]=(0,h.useState)(``);return(0,g.jsxs)(`div`,{className:`w-[300px] space-y-2`,children:[(0,g.jsx)(d,{suggestions:v,placeholder:`Search products...`,onSearch:e=>t(e)}),e&&(0,g.jsxs)(`p`,{className:`text-sm text-muted-foreground`,children:[`Searching for: `,e]})]})}},x={args:{suggestions:v,placeholder:`Popular searches`}},S={render:()=>(0,g.jsx)(d,{placeholder:`Search documentation...`,suggestions:v,className:`w-[500px] h-12 text-lg`})},C={render:()=>{let[e,t]=(0,h.useState)(``);return(0,g.jsx)(`div`,{className:`w-[300px] space-y-2`,children:(0,g.jsxs)(`div`,{className:`relative`,children:[(0,g.jsx)(d,{suggestions:v,placeholder:`Search...`,onSearch:e=>t(e)}),e&&(0,g.jsxs)(`p`,{className:`text-sm text-muted-foreground`,children:[`Last search: `,e]})]})})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Search...",
    suggestions
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [query, setQuery] = useState("");
    return <div className="w-[300px] space-y-2">
        <SearchInput suggestions={suggestions} placeholder="Search products..." onSearch={value => setQuery(value)} />
        {query && <p className="text-sm text-muted-foreground">
            Searching for: {query}
          </p>}
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    suggestions,
    placeholder: "Popular searches"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <SearchInput placeholder="Search documentation..." suggestions={suggestions} className="w-[500px] h-12 text-lg" />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [query, setQuery] = useState("");
    return <div className="w-[300px] space-y-2">
        <div className="relative">
          <SearchInput suggestions={suggestions} placeholder="Search..." onSearch={value => setQuery(value)} />
          {query && <p className="text-sm text-muted-foreground">
              Last search: {query}
            </p>}
        </div>
      </div>;
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`Interactive`,`WithSuggestions`,`Large`,`WithCallback`]}))();export{y as Default,b as Interactive,S as Large,C as WithCallback,x as WithSuggestions,w as __namedExportsOrder,_ as default};