import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{it as i,st as a,t as o}from"./lucide-react-B9ev7WLa.js";import{r as s,t as c}from"./button-RVltMg_M.js";import{i as l,n as u,r as d,t as f}from"./collapsible-BF-ZqYMf.js";var p,m,h,g,_,v,y;t((()=>{o(),l(),s(),p=e(n(),1),m=r(),h={title:`Components/Collapsible`,component:f,parameters:{layout:`centered`},tags:[`autodocs`]},g={render:()=>{let[e,t]=(0,p.useState)(!1);return(0,m.jsxs)(f,{open:e,onOpenChange:t,className:`w-[350px] space-y-2`,children:[(0,m.jsxs)(`div`,{className:`flex items-center justify-between space-x-4 px-4`,children:[(0,m.jsx)(`h4`,{className:`text-sm font-semibold`,children:`@peduarte starred 3 repositories`}),(0,m.jsx)(d,{asChild:!0,children:(0,m.jsxs)(c,{variant:`ghost`,size:`sm`,children:[e?(0,m.jsx)(i,{size:16}):(0,m.jsx)(a,{size:16}),(0,m.jsx)(`span`,{className:`sr-only`,children:`Toggle`})]})})]}),(0,m.jsx)(`div`,{className:`rounded-md border px-4 py-2 text-sm`,children:`@radix-ui/primitives`}),(0,m.jsxs)(u,{className:`space-y-2`,children:[(0,m.jsx)(`div`,{className:`rounded-md border px-4 py-2 text-sm`,children:`@radix-ui/colors`}),(0,m.jsx)(`div`,{className:`rounded-md border px-4 py-2 text-sm`,children:`@stitches/react`})]})]})}},_={render:()=>{let[e,t]=(0,p.useState)(!0);return(0,m.jsxs)(f,{open:e,onOpenChange:t,className:`w-[350px] space-y-2`,children:[(0,m.jsxs)(`div`,{className:`flex items-center justify-between space-x-4 px-4`,children:[(0,m.jsx)(`h4`,{className:`text-sm font-semibold`,children:`Settings`}),(0,m.jsx)(d,{asChild:!0,children:(0,m.jsx)(c,{variant:`ghost`,size:`sm`,children:e?(0,m.jsx)(i,{size:16}):(0,m.jsx)(a,{size:16})})})]}),(0,m.jsxs)(u,{className:`space-y-2`,children:[(0,m.jsxs)(`div`,{className:`rounded-md border px-4 py-3 text-sm`,children:[(0,m.jsx)(`h5`,{className:`font-medium`,children:`Email Notifications`}),(0,m.jsx)(`p`,{className:`text-muted-foreground`,children:`Receive email updates`})]}),(0,m.jsxs)(`div`,{className:`rounded-md border px-4 py-3 text-sm`,children:[(0,m.jsx)(`h5`,{className:`font-medium`,children:`Push Notifications`}),(0,m.jsx)(`p`,{className:`text-muted-foreground`,children:`Receive push notifications`})]})]})]})}},v={render:()=>{let[e,t]=(0,p.useState)(!1);return(0,m.jsxs)(f,{open:e,onOpenChange:t,className:`w-[350px] space-y-2`,children:[(0,m.jsx)(d,{asChild:!0,children:(0,m.jsxs)(c,{variant:`outline`,className:`w-full justify-between`,children:[`Advanced Options`,e?(0,m.jsx)(i,{size:16,className:`ml-2`}):(0,m.jsx)(a,{size:16,className:`ml-2`})]})}),(0,m.jsx)(u,{className:`space-y-2 pt-2`,children:(0,m.jsxs)(`div`,{className:`rounded-md border p-4 space-y-2`,children:[(0,m.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,m.jsx)(`span`,{className:`text-sm`,children:`Auto-save`}),(0,m.jsx)(`input`,{type:`checkbox`,className:`h-4 w-4`})]}),(0,m.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,m.jsx)(`span`,{className:`text-sm`,children:`Dark mode`}),(0,m.jsx)(`input`,{type:`checkbox`,className:`h-4 w-4`})]}),(0,m.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,m.jsx)(`span`,{className:`text-sm`,children:`Notifications`}),(0,m.jsx)(`input`,{type:`checkbox`,className:`h-4 w-4`,defaultChecked:!0})]})]})})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Default`,`DefaultOpen`,`WithButton`]}))();export{g as Default,_ as DefaultOpen,v as WithButton,y as __namedExportsOrder,h as default};