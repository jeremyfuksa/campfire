import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{i,n as a,s as o,t as s}from"./dist-CMZI2l1M.js";import{ot as c,rt as l,t as u}from"./lucide-react-BZbEj6fH.js";import{r as d,t as f}from"./button-Bvgam3-u.js";function p({children:e,...t}){return(0,g.jsx)(i,{"data-slot":`collapsible`,...t,children:e})}function m({...e}){return(0,g.jsx)(a,{"data-slot":`collapsible-trigger`,...e})}function h({...e}){return(0,g.jsx)(s,{"data-slot":`collapsible-content`,...e})}var g,_=t((()=>{o(),g=r(),p.__docgenInfo={description:``,methods:[],displayName:`Collapsible`},m.__docgenInfo={description:``,methods:[],displayName:`CollapsibleTrigger`},h.__docgenInfo={description:``,methods:[],displayName:`CollapsibleContent`}})),v,y,b,x,S,C,w;t((()=>{u(),_(),d(),v=e(n(),1),y=r(),b={title:`Components/Collapsible`,component:p,parameters:{layout:`centered`},tags:[`autodocs`]},x={render:()=>{let[e,t]=(0,v.useState)(!1);return(0,y.jsxs)(p,{open:e,onOpenChange:t,className:`w-[350px] space-y-2`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between space-x-4 px-4`,children:[(0,y.jsx)(`h4`,{className:`text-sm font-semibold`,children:`@peduarte starred 3 repositories`}),(0,y.jsx)(m,{asChild:!0,children:(0,y.jsxs)(f,{variant:`ghost`,size:`sm`,children:[e?(0,y.jsx)(l,{size:16}):(0,y.jsx)(c,{size:16}),(0,y.jsx)(`span`,{className:`sr-only`,children:`Toggle`})]})})]}),(0,y.jsx)(`div`,{className:`rounded-md border px-4 py-2 text-sm`,children:`@radix-ui/primitives`}),(0,y.jsxs)(h,{className:`space-y-2`,children:[(0,y.jsx)(`div`,{className:`rounded-md border px-4 py-2 text-sm`,children:`@radix-ui/colors`}),(0,y.jsx)(`div`,{className:`rounded-md border px-4 py-2 text-sm`,children:`@stitches/react`})]})]})}},S={render:()=>{let[e,t]=(0,v.useState)(!0);return(0,y.jsxs)(p,{open:e,onOpenChange:t,className:`w-[350px] space-y-2`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between space-x-4 px-4`,children:[(0,y.jsx)(`h4`,{className:`text-sm font-semibold`,children:`Settings`}),(0,y.jsx)(m,{asChild:!0,children:(0,y.jsx)(f,{variant:`ghost`,size:`sm`,children:e?(0,y.jsx)(l,{size:16}):(0,y.jsx)(c,{size:16})})})]}),(0,y.jsxs)(h,{className:`space-y-2`,children:[(0,y.jsxs)(`div`,{className:`rounded-md border px-4 py-3 text-sm`,children:[(0,y.jsx)(`h5`,{className:`font-medium`,children:`Email Notifications`}),(0,y.jsx)(`p`,{className:`text-muted-foreground`,children:`Receive email updates`})]}),(0,y.jsxs)(`div`,{className:`rounded-md border px-4 py-3 text-sm`,children:[(0,y.jsx)(`h5`,{className:`font-medium`,children:`Push Notifications`}),(0,y.jsx)(`p`,{className:`text-muted-foreground`,children:`Receive push notifications`})]})]})]})}},C={render:()=>{let[e,t]=(0,v.useState)(!1);return(0,y.jsxs)(p,{open:e,onOpenChange:t,className:`w-[350px] space-y-2`,children:[(0,y.jsx)(m,{asChild:!0,children:(0,y.jsxs)(f,{variant:`outline`,className:`w-full justify-between`,children:[`Advanced Options`,e?(0,y.jsx)(l,{size:16,className:`ml-2`}):(0,y.jsx)(c,{size:16,className:`ml-2`})]})}),(0,y.jsx)(h,{className:`space-y-2 pt-2`,children:(0,y.jsxs)(`div`,{className:`rounded-md border p-4 space-y-2`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,y.jsx)(`span`,{className:`text-sm`,children:`Auto-save`}),(0,y.jsx)(`input`,{type:`checkbox`,className:`h-4 w-4`})]}),(0,y.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,y.jsx)(`span`,{className:`text-sm`,children:`Dark mode`}),(0,y.jsx)(`input`,{type:`checkbox`,className:`h-4 w-4`})]}),(0,y.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,y.jsx)(`span`,{className:`text-sm`,children:`Notifications`}),(0,y.jsx)(`input`,{type:`checkbox`,className:`h-4 w-4`,defaultChecked:!0})]})]})})]})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">
            @peduarte starred 3 repositories
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-2 text-sm">
          @radix-ui/primitives
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 text-sm">
            @radix-ui/colors
          </div>
          <div className="rounded-md border px-4 py-2 text-sm">
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">Settings</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 text-sm">
            <h5 className="font-medium">Email Notifications</h5>
            <p className="text-muted-foreground">Receive email updates</p>
          </div>
          <div className="rounded-md border px-4 py-3 text-sm">
            <h5 className="font-medium">Push Notifications</h5>
            <p className="text-muted-foreground">Receive push notifications</p>
          </div>
        </CollapsibleContent>
      </Collapsible>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            Advanced Options
            {isOpen ? <ChevronUp size={16} className="ml-2" /> : <ChevronDown size={16} className="ml-2" />}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2 pt-2">
          <div className="rounded-md border p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Auto-save</span>
              <input type="checkbox" className="h-4 w-4" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Dark mode</span>
              <input type="checkbox" className="h-4 w-4" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Notifications</span>
              <input type="checkbox" className="h-4 w-4" defaultChecked />
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>;
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`DefaultOpen`,`WithButton`]}))();export{x as Default,S as DefaultOpen,C as WithButton,w as __namedExportsOrder,b as default};