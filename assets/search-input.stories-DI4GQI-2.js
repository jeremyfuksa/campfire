import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{n as i,t as a}from"./search-Ch90_uef.js";import{n as o,t as s}from"./x-B9OLE3_7.js";import{n as c,t as l}from"./utils-DwVtoTFj.js";import{n as u,t as d}from"./input-DUy9koNX.js";function f({placeholder:e=`Search...`,suggestions:t=[],onSearch:n,className:r}){let[i,o]=(0,p.useState)(``),[c,u]=(0,p.useState)(!1),[f,h]=(0,p.useState)([]),g=(0,p.useRef)(null);(0,p.useEffect)(()=>{if(i){let e=t.filter(e=>e.toLowerCase().includes(i.toLowerCase()));h(e),u(e.length>0)}else u(!1)},[i,t]),(0,p.useEffect)(()=>{function e(e){g.current&&!g.current.contains(e.target)&&u(!1)}return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let _=e=>{o(e),u(!1),n?.(e)};return(0,m.jsxs)(`div`,{ref:g,className:l(`relative`,r),children:[(0,m.jsx)(`form`,{onSubmit:e=>{e.preventDefault(),u(!1),n?.(i)},children:(0,m.jsxs)(`div`,{className:`relative`,children:[(0,m.jsx)(a,{size:14,className:`absolute left-3 top-1/2 -translate-y-1/2`,style:{color:`var(--text-tertiary)`}}),(0,m.jsx)(d,{type:`text`,placeholder:e,value:i,onChange:e=>o(e.target.value),className:`pl-10 pr-10`}),i&&(0,m.jsx)(`button`,{type:`button`,onClick:()=>o(``),className:`absolute right-3 top-1/2 -translate-y-1/2`,children:(0,m.jsx)(s,{size:14,style:{color:`var(--text-tertiary)`}})})]})}),c&&f.length>0&&(0,m.jsx)(`div`,{className:`absolute w-full mt-1 rounded-lg border shadow-lg overflow-hidden z-50`,style:{backgroundColor:`var(--bg-base)`,borderColor:`var(--border-default)`},children:f.map((e,t)=>(0,m.jsx)(`div`,{className:`px-4 py-2 cursor-pointer transition-colors`,style:{color:`var(--text-primary)`},onMouseEnter:e=>{e.currentTarget.style.backgroundColor=`var(--bg-subtle)`},onMouseLeave:e=>{e.currentTarget.style.backgroundColor=`transparent`},onClick:()=>_(e),children:e},t))})]})}var p,m;function h(){return(h=t((()=>{p=e(n(),1),u(),c(),i(),o(),m=r(),f.__docgenInfo={description:``,methods:[],displayName:`SearchInput`,props:{placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Search...'`,computed:!1}},suggestions:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``,defaultValue:{value:`[]`,computed:!1}},onSearch:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var g,_,v,y,b,x,S,C,w,T;function E(){return(E=t((()=>{g=n(),h(),_=r(),v={title:`Components/SearchInput`,component:f,parameters:{layout:`centered`},tags:[`autodocs`]},y=[`React components`,`Vue components`,`Design systems`,`Accessibility`,`Autocomplete`,`Filtered lists`],b={args:{placeholder:`Search...`,suggestions:y}},x={render:()=>{let[e,t]=(0,g.useState)(``);return(0,_.jsxs)(`div`,{className:`w-[300px] space-y-2`,children:[(0,_.jsx)(f,{suggestions:y,placeholder:`Search products...`,onSearch:e=>t(e)}),e&&(0,_.jsxs)(`p`,{className:`text-sm text-muted-foreground`,children:[`Searching for: `,e]})]})}},S={args:{suggestions:y,placeholder:`Popular searches`}},C={render:()=>(0,_.jsx)(f,{placeholder:`Search documentation...`,suggestions:y,className:`w-[500px] h-12 text-lg`})},w={render:()=>{let[e,t]=(0,g.useState)(``);return(0,_.jsx)(`div`,{className:`w-[300px] space-y-2`,children:(0,_.jsxs)(`div`,{className:`relative`,children:[(0,_.jsx)(f,{suggestions:y,placeholder:`Search...`,onSearch:e=>t(e)}),e&&(0,_.jsxs)(`p`,{className:`text-sm text-muted-foreground`,children:[`Last search: `,e]})]})})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Search...",
    suggestions
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [query, setQuery] = useState("");
    return <div className="w-[300px] space-y-2">
        <SearchInput suggestions={suggestions} placeholder="Search products..." onSearch={value => setQuery(value)} />
        {query && <p className="text-sm text-muted-foreground">
            Searching for: {query}
          </p>}
      </div>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    suggestions,
    placeholder: "Popular searches"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <SearchInput placeholder="Search documentation..." suggestions={suggestions} className="w-[500px] h-12 text-lg" />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`Default`,`Interactive`,`WithSuggestions`,`Large`,`WithCallback`]})))()}E();export{b as Default,x as Interactive,C as Large,w as WithCallback,S as WithSuggestions,T as __namedExportsOrder,v as default};