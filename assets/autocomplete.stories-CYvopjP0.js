import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{T as i,h as a,n as o,ot as s,st as c,t as l,y as u}from"./lucide-react-BZbEj6fH.js";import{n as d,t as f}from"./utils-CDLLjGU_.js";import{a as p,l as m,n as h,o as g,t as _}from"./command-DMvQ8ShR.js";import{i as v,n as y,t as b}from"./popover-DK9N-p7w.js";import{n as x,t as S}from"./badge-BkIrtssl.js";function C({options:e,value:t,onValueChange:n,placeholder:r=`Select...`,emptyText:l=`No results found`,searchPlaceholder:d=`Search...`,multiple:m=!1,disabled:v=!1,className:x,async:C=!1,onSearch:E,loading:D=!1,maxSelected:O,onCreate:k,creatable:A=!1}){let[j,M]=w.useState(!1),[N,P]=w.useState(``),F=w.useRef(null),I=w.useMemo(()=>m&&Array.isArray(t)?t:t?[t]:[],[t,m]),L=w.useMemo(()=>e.filter(e=>I.includes(e.value)),[e,I]),R=w.useMemo(()=>{if(C||!N)return e;let t=N.toLowerCase();return e.filter(e=>{let n=e.label.toLowerCase(),r=e.value.toLowerCase(),i=0;for(let e=0;e<n.length&&i<t.length;e++)n[e]===t[i]&&i++;return i===t.length||n.includes(t)||r.includes(t)})},[e,N,C]);w.useEffect(()=>{if(!C||!E)return;let e=setTimeout(()=>{E(N)},300);return()=>clearTimeout(e)},[N,C,E]);let z=e=>{if(m){let t=I.includes(e)?I.filter(t=>t!==e):[...I,e];if(O&&t.length>O&&!I.includes(e))return;n?.(t)}else n?.(e),M(!1),P(``)},B=(e,t)=>{if(t.stopPropagation(),m){let t=I.filter(t=>t!==e);n?.(t)}},V=()=>{A&&k&&N&&!R.some(e=>e.label.toLowerCase()===N.toLowerCase())&&(k(N),P(``))},H=e=>{e.key===`Escape`&&M(!1)},U=w.useMemo(()=>L.length===0?r:m?`${L.length} selected`:L[0]?.label||r,[L,r,m]),W=A&&N&&!R.some(e=>e.label.toLowerCase()===N.toLowerCase());return(0,T.jsxs)(b,{open:j,onOpenChange:M,children:[(0,T.jsxs)(`div`,{className:f(`border-input focus-within:border-ring focus-within:ring-ring/50`,`flex min-h-9 w-full items-center gap-2 rounded-md border bg-input-background px-3 py-2`,`cursor-pointer transition-all`,`focus-within:ring-[3px]`,v&&`cursor-not-allowed opacity-50`,x),onClick:()=>!v&&M(!0),children:[(0,T.jsxs)(`div`,{className:`flex flex-1 flex-wrap gap-1`,children:[m&&L.length>0?L.map(e=>(0,T.jsxs)(S,{variant:`secondary`,className:`gap-1`,children:[e.label,(0,T.jsx)(`button`,{onClick:t=>B(e.value,t),className:`hover:bg-muted rounded-xs`,disabled:v,"aria-label":`Remove ${e.label}`,children:(0,T.jsx)(o,{size:12,"aria-hidden":`true`})})]},e.value)):null,!m&&L.length>0?(0,T.jsx)(`span`,{className:`text-sm`,children:U}):L.length===0?(0,T.jsx)(`span`,{className:`text-muted-foreground text-sm`,children:r}):null]}),(0,T.jsx)(s,{size:14,className:f(`text-muted-foreground transition-transform`,j&&`rotate-180`),"aria-hidden":`true`})]}),(0,T.jsx)(y,{className:`w-(--radix-popover-trigger-width) p-0`,align:`start`,onKeyDown:H,children:(0,T.jsxs)(_,{children:[(0,T.jsxs)(`div`,{className:`flex items-center border-b px-3`,children:[(0,T.jsx)(a,{size:14,className:`text-muted-foreground mr-2`,"aria-hidden":`true`}),(0,T.jsx)(`input`,{ref:F,value:N,onChange:e=>P(e.target.value),placeholder:d,className:`placeholder:text-muted-foreground flex h-10 w-full bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50`,disabled:v})]}),(0,T.jsx)(g,{children:D?(0,T.jsxs)(`div`,{className:`py-6 text-center text-sm flex items-center justify-center gap-2`,children:[(0,T.jsx)(i,{size:14,className:`animate-spin`,"aria-hidden":`true`}),`Loading...`]}):R.length===0&&!W?(0,T.jsx)(h,{children:l}):(0,T.jsxs)(T.Fragment,{children:[R.map(e=>{let t=I.includes(e.value);return(0,T.jsxs)(p,{value:e.value,onSelect:()=>!e.disabled&&z(e.value),disabled:e.disabled,children:[m&&(0,T.jsx)(`div`,{className:f(`mr-2 flex h-4 w-4 items-center justify-center rounded-xs border`,t?`bg-primary text-primary-foreground border-primary`:`border-neutral-300`),children:t&&(0,T.jsx)(c,{size:12,"aria-hidden":`true`})}),(0,T.jsx)(`span`,{className:`flex-1`,children:e.label}),!m&&t&&(0,T.jsx)(c,{size:14,className:`text-primary ml-2`,"aria-hidden":`true`})]},e.value)}),W&&(0,T.jsxs)(p,{value:N,onSelect:V,className:`text-primary`,children:[(0,T.jsx)(u,{size:12,className:`mr-2`,"aria-hidden":`true`}),`Create "`,N,`"`]})]})})]})})]})}var w,T,E=t((()=>{w=e(n(),1),l(),m(),v(),x(),d(),T=r(),C.__docgenInfo={description:``,methods:[],displayName:`Autocomplete`,props:{options:{required:!0,tsType:{name:`Array`,elements:[{name:`AutocompleteOption`}],raw:`AutocompleteOption[]`},description:``},value:{required:!1,tsType:{name:`union`,raw:`string | string[]`,elements:[{name:`string`},{name:`Array`,elements:[{name:`string`}],raw:`string[]`}]},description:``},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string | string[]) => void`,signature:{arguments:[{type:{name:`union`,raw:`string | string[]`,elements:[{name:`string`},{name:`Array`,elements:[{name:`string`}],raw:`string[]`}]},name:`value`}],return:{name:`void`}}},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Select..."`,computed:!1}},emptyText:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"No results found"`,computed:!1}},searchPlaceholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Search..."`,computed:!1}},multiple:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},async:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onSearch:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(query: string) => void`,signature:{arguments:[{type:{name:`string`},name:`query`}],return:{name:`void`}}},description:``},loading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},maxSelected:{required:!1,tsType:{name:`number`},description:``},onCreate:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},creatable:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})),D,O,k,A,j,M,N,P,F,I,L;t((()=>{D=e(n(),1),E(),O=r(),k=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`},{value:`date`,label:`Date`},{value:`elderberry`,label:`Elderberry`},{value:`fig`,label:`Fig`},{value:`grape`,label:`Grape`},{value:`honeydew`,label:`Honeydew`},{value:`kiwi`,label:`Kiwi`},{value:`lemon`,label:`Lemon`}],A={title:`Components/Autocomplete`,component:C,parameters:{layout:`centered`},tags:[`autodocs`]},j={args:{options:k,placeholder:`Select a fruit`}},M={args:{options:k,value:`banana`}},N={render:()=>{let[e,t]=(0,D.useState)([]);return(0,O.jsx)(`div`,{style:{width:`400px`},children:(0,O.jsx)(C,{options:k,multiple:!0,value:e,onValueChange:e=>t(e),placeholder:`Select fruits`})})}},P={render:()=>{let[e,t]=(0,D.useState)([]);return(0,O.jsx)(`div`,{style:{width:`400px`},children:(0,O.jsx)(C,{options:k,multiple:!0,maxSelected:3,value:e,onValueChange:e=>t(e),placeholder:`Select up to 3 fruits`})})}},F={render:()=>{let[e,t]=(0,D.useState)(k),[n,r]=(0,D.useState)();return(0,O.jsx)(`div`,{style:{width:`400px`},children:(0,O.jsx)(C,{options:e,value:n,onValueChange:e=>r(e),creatable:!0,onCreate:n=>{t([...e,{value:n.toLowerCase(),label:n}]),r(n.toLowerCase())},placeholder:`Select or create a fruit`})})}},I={args:{options:k,disabled:!0,placeholder:`Disabled`}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    options: fruits,
    placeholder: "Select a fruit"
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    options: fruits,
    value: "banana"
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div style={{
      width: "400px"
    }}>
        <Autocomplete options={fruits} multiple value={value} onValueChange={v => setValue(v as string[])} placeholder="Select fruits" />
      </div>;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div style={{
      width: "400px"
    }}>
        <Autocomplete options={fruits} multiple maxSelected={3} value={value} onValueChange={v => setValue(v as string[])} placeholder="Select up to 3 fruits" />
      </div>;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [options, setOptions] = useState(fruits);
    const [value, setValue] = useState<string>();
    return <div style={{
      width: "400px"
    }}>
        <Autocomplete options={options} value={value} onValueChange={v => setValue(v as string)} creatable onCreate={newValue => {
        setOptions([...options, {
          value: newValue.toLowerCase(),
          label: newValue
        }]);
        setValue(newValue.toLowerCase());
      }} placeholder="Select or create a fruit" />
      </div>;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    options: fruits,
    disabled: true,
    placeholder: "Disabled"
  }
}`,...I.parameters?.docs?.source}}},L=[`Default`,`WithValue`,`Multiple`,`WithMaxSelected`,`Creatable`,`Disabled`]}))();export{F as Creatable,j as Default,I as Disabled,N as Multiple,P as WithMaxSelected,M as WithValue,L as __namedExportsOrder,A as default};