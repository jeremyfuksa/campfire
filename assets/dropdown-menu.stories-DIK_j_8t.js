import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{n as i,r as a}from"./dist-DIs3RLZS.js";import{n as o,t as s}from"./dist-Cd9gDrEs.js";import{o as c,r as ee,s as l,t as u}from"./dist-Dq2sm8oD.js";import{n as te,t as ne}from"./dist-DhJF_c6r.js";import{n as re,t as ie}from"./dist-D2YQunT4.js";import{Q as ae,U as oe,i as se,it as ce,m as le,st as ue,t as de,w as fe}from"./lucide-react-BZbEj6fH.js";import{n as pe,t as d}from"./utils-CDLLjGU_.js";import{r as me,t as f}from"./button-Bvgam3-u.js";import{_ as he,a as ge,c as _e,d as ve,f as ye,g as be,h as xe,i as Se,l as Ce,m as we,n as Te,o as Ee,p as De,r as Oe,s as ke,t as Ae,u as je,v as Me}from"./dist-BjqcwgCz.js";var p,m,h,Ne,Pe,g,Fe,_,v,y,b,Ie,x,S,C,Le,w,Re,T,ze,E,Be,D,Ve,O,He,k,Ue,A,We,j,Ge,Ke,qe,Je,M,Ye,N,Xe,Ze,P,Qe,$e,et,tt,nt,rt,it,F,at,ot,st,ct,lt=t((()=>{p=e(n(),1),l(),o(),a(),ne(),ee(),Me(),ie(),m=r(),h=`DropdownMenu`,[Ne,Pe]=i(h,[he]),g=he(),[Fe,_]=Ne(h),v=e=>{let{__scopeDropdownMenu:t,children:n,dir:r,open:i,defaultOpen:a,onOpenChange:o,modal:s=!0}=e,c=g(t),ee=p.useRef(null),[l,u]=te({prop:i,defaultProp:a??!1,onChange:o,caller:h});return(0,m.jsx)(Fe,{scope:t,triggerId:re(),triggerRef:ee,contentId:re(),open:l,onOpenChange:u,onOpenToggle:p.useCallback(()=>u(e=>!e),[u]),modal:s,children:(0,m.jsx)(ye,{...c,open:l,onOpenChange:u,dir:r,modal:s,children:n})})},v.displayName=h,y=`DropdownMenuTrigger`,b=p.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,disabled:r=!1,...i}=e,a=_(y,n),o=g(n);return(0,m.jsx)(Ae,{asChild:!0,...o,children:(0,m.jsx)(u.button,{type:`button`,id:a.triggerId,"aria-haspopup":`menu`,"aria-expanded":a.open,"aria-controls":a.open?a.contentId:void 0,"data-state":a.open?`open`:`closed`,"data-disabled":r?``:void 0,disabled:r,...i,ref:s(t,a.triggerRef),onPointerDown:c(e.onPointerDown,e=>{!r&&e.button===0&&e.ctrlKey===!1&&(a.onOpenToggle(),a.open||e.preventDefault())}),onKeyDown:c(e.onKeyDown,e=>{r||([`Enter`,` `].includes(e.key)&&a.onOpenToggle(),e.key===`ArrowDown`&&a.onOpenChange(!0),[`Enter`,` `,`ArrowDown`].includes(e.key)&&e.preventDefault())})})})}),b.displayName=y,Ie=`DropdownMenuPortal`,x=e=>{let{__scopeDropdownMenu:t,...n}=e,r=g(t);return(0,m.jsx)(Ce,{...r,...n})},x.displayName=Ie,S=`DropdownMenuContent`,C=p.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,i=_(S,n),a=g(n),o=p.useRef(!1);return(0,m.jsx)(Se,{id:i.contentId,"aria-labelledby":i.triggerId,...a,...r,ref:t,onCloseAutoFocus:c(e.onCloseAutoFocus,e=>{o.current||i.triggerRef.current?.focus(),o.current=!1,e.preventDefault()}),onInteractOutside:c(e.onInteractOutside,e=>{let t=e.detail.originalEvent,n=t.button===0&&t.ctrlKey===!0,r=t.button===2||n;(!i.modal||r)&&(o.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-dropdown-menu-content-available-width":`var(--radix-popper-available-width)`,"--radix-dropdown-menu-content-available-height":`var(--radix-popper-available-height)`,"--radix-dropdown-menu-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-dropdown-menu-trigger-height":`var(--radix-popper-anchor-height)`}})}),C.displayName=S,Le=`DropdownMenuGroup`,w=p.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,i=g(n);return(0,m.jsx)(ge,{...i,...r,ref:t})}),w.displayName=Le,Re=`DropdownMenuLabel`,T=p.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,i=g(n);return(0,m.jsx)(_e,{...i,...r,ref:t})}),T.displayName=Re,ze=`DropdownMenuItem`,E=p.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,i=g(n);return(0,m.jsx)(Ee,{...i,...r,ref:t})}),E.displayName=ze,Be=`DropdownMenuCheckboxItem`,D=p.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,i=g(n);return(0,m.jsx)(Oe,{...i,...r,ref:t})}),D.displayName=Be,Ve=`DropdownMenuRadioGroup`,O=p.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,i=g(n);return(0,m.jsx)(je,{...i,...r,ref:t})}),O.displayName=Ve,He=`DropdownMenuRadioItem`,k=p.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,i=g(n);return(0,m.jsx)(ve,{...i,...r,ref:t})}),k.displayName=He,Ue=`DropdownMenuItemIndicator`,A=p.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,i=g(n);return(0,m.jsx)(ke,{...i,...r,ref:t})}),A.displayName=Ue,We=`DropdownMenuSeparator`,j=p.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,i=g(n);return(0,m.jsx)(De,{...i,...r,ref:t})}),j.displayName=We,Ge=`DropdownMenuArrow`,Ke=p.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,i=g(n);return(0,m.jsx)(Te,{...i,...r,ref:t})}),Ke.displayName=Ge,qe=e=>{let{__scopeDropdownMenu:t,children:n,open:r,onOpenChange:i,defaultOpen:a}=e,o=g(t),[s,c]=te({prop:r,defaultProp:a??!1,onChange:i,caller:`DropdownMenuSub`});return(0,m.jsx)(we,{...o,open:s,onOpenChange:c,children:n})},Je=`DropdownMenuSubTrigger`,M=p.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,i=g(n);return(0,m.jsx)(be,{...i,...r,ref:t})}),M.displayName=Je,Ye=`DropdownMenuSubContent`,N=p.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,i=g(n);return(0,m.jsx)(xe,{...i,...r,ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-dropdown-menu-content-available-width":`var(--radix-popper-available-width)`,"--radix-dropdown-menu-content-available-height":`var(--radix-popper-available-height)`,"--radix-dropdown-menu-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-dropdown-menu-trigger-height":`var(--radix-popper-anchor-height)`}})}),N.displayName=Ye,Xe=v,Ze=b,P=x,Qe=C,$e=w,et=T,tt=E,nt=D,rt=O,it=k,F=A,at=j,ot=qe,st=M,ct=N}));function I({...e}){return(0,G.jsx)(Xe,{"data-slot":`dropdown-menu`,...e})}function ut({...e}){return(0,G.jsx)(P,{"data-slot":`dropdown-menu-portal`,...e})}function L({...e}){return(0,G.jsx)(Ze,{"data-slot":`dropdown-menu-trigger`,...e})}function R({className:e,sideOffset:t=4,...n}){return(0,G.jsx)(P,{children:(0,G.jsx)(Qe,{"data-slot":`dropdown-menu-content`,sideOffset:t,className:d(`bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md`,e),...n})})}function dt({...e}){return(0,G.jsx)($e,{"data-slot":`dropdown-menu-group`,...e})}function z({className:e,inset:t,variant:n=`default`,...r}){return(0,G.jsx)(tt,{"data-slot":`dropdown-menu-item`,"data-inset":t,"data-variant":n,className:d(`focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive [svg]:*:data-[variant=destructive]:text-destructive! [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-xs px-2 py-1.5 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),...r})}function B({className:e,children:t,checked:n,...r}){return(0,G.jsxs)(nt,{"data-slot":`dropdown-menu-checkbox-item`,className:d(`focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),checked:n,...r,children:[(0,G.jsx)(`span`,{className:`pointer-events-none absolute left-2 flex size-3.5 items-center justify-center`,children:(0,G.jsx)(F,{children:(0,G.jsx)(ue,{className:`size-4`})})}),t]})}function ft({...e}){return(0,G.jsx)(rt,{"data-slot":`dropdown-menu-radio-group`,...e})}function V({className:e,children:t,...n}){return(0,G.jsxs)(it,{"data-slot":`dropdown-menu-radio-item`,className:d(`focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),...n,children:[(0,G.jsx)(`span`,{className:`pointer-events-none absolute left-2 flex size-3.5 items-center justify-center`,children:(0,G.jsx)(F,{children:(0,G.jsx)(ae,{className:`size-2 fill-current`})})}),t]})}function H({className:e,inset:t,...n}){return(0,G.jsx)(et,{"data-slot":`dropdown-menu-label`,"data-inset":t,className:d(`px-2 py-1.5 text-sm font-medium data-inset:pl-8`,e),...n})}function U({className:e,...t}){return(0,G.jsx)(at,{"data-slot":`dropdown-menu-separator`,className:d(`bg-border -mx-1 my-1 h-px`,e),...t})}function W({className:e,...t}){return(0,G.jsx)(`span`,{"data-slot":`dropdown-menu-shortcut`,className:d(`text-muted-foreground ml-auto text-xs tracking-widest`,e),...t})}function pt({...e}){return(0,G.jsx)(ot,{"data-slot":`dropdown-menu-sub`,...e})}function mt({className:e,inset:t,children:n,...r}){return(0,G.jsxs)(st,{"data-slot":`dropdown-menu-sub-trigger`,"data-inset":t,className:d(`focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-xs px-2 py-1.5 text-sm outline-hidden select-none data-inset:pl-8`,e),...r,children:[n,(0,G.jsx)(ce,{className:`ml-auto size-4`})]})}function ht({className:e,...t}){return(0,G.jsx)(ct,{"data-slot":`dropdown-menu-sub-content`,className:d(`bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg`,e),...t})}var G,gt=t((()=>{n(),lt(),de(),pe(),G=r(),I.__docgenInfo={description:``,methods:[],displayName:`DropdownMenu`},ut.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuPortal`},L.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuTrigger`},R.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuContent`,props:{sideOffset:{defaultValue:{value:`4`,computed:!1},required:!1}}},dt.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuGroup`},H.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuLabel`,props:{inset:{required:!1,tsType:{name:`boolean`},description:``}}},z.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuItem`,props:{inset:{required:!1,tsType:{name:`boolean`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`"default" | "destructive"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"destructive"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}}}},B.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuCheckboxItem`},ft.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuRadioGroup`},V.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuRadioItem`},U.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuSeparator`},W.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuShortcut`},pt.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuSub`},mt.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuSubTrigger`,props:{inset:{required:!1,tsType:{name:`boolean`},description:``}}},ht.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuSubContent`}})),K,q,_t,J,Y,X,Z,Q,$,vt;t((()=>{gt(),me(),K=e(n(),1),de(),q=r(),_t={title:`Components/DropdownMenu`,component:I,parameters:{layout:`centered`},tags:[`autodocs`]},J={render:()=>(0,q.jsxs)(I,{children:[(0,q.jsx)(L,{asChild:!0,children:(0,q.jsx)(f,{variant:`outline`,children:`Open Menu`})}),(0,q.jsxs)(R,{children:[(0,q.jsx)(z,{children:`Profile`}),(0,q.jsx)(z,{children:`Settings`}),(0,q.jsx)(z,{children:`Logout`})]})]})},Y={render:()=>(0,q.jsxs)(I,{children:[(0,q.jsx)(L,{asChild:!0,children:(0,q.jsx)(f,{variant:`outline`,size:`icon`,children:(0,q.jsx)(oe,{size:16})})}),(0,q.jsxs)(R,{children:[(0,q.jsxs)(z,{children:[(0,q.jsx)(se,{size:14,className:`mr-2`}),`Profile`]}),(0,q.jsxs)(z,{children:[(0,q.jsx)(le,{size:14,className:`mr-2`}),`Settings`]}),(0,q.jsx)(U,{}),(0,q.jsxs)(z,{children:[(0,q.jsx)(fe,{size:14,className:`mr-2`}),`Logout`]})]})]})},X={render:()=>(0,q.jsxs)(I,{children:[(0,q.jsx)(L,{asChild:!0,children:(0,q.jsx)(f,{variant:`outline`,children:`Account`})}),(0,q.jsxs)(R,{className:`w-56`,children:[(0,q.jsx)(H,{children:`My Account`}),(0,q.jsx)(U,{}),(0,q.jsx)(z,{children:`Profile`}),(0,q.jsx)(z,{children:`Billing`}),(0,q.jsx)(z,{children:`Team`}),(0,q.jsx)(z,{children:`Subscription`})]})]})},Z={render:()=>{let[e,t]=(0,K.useState)(!0),[n,r]=(0,K.useState)(!1),[i,a]=(0,K.useState)(!1);return(0,q.jsxs)(I,{children:[(0,q.jsx)(L,{asChild:!0,children:(0,q.jsx)(f,{variant:`outline`,children:`View`})}),(0,q.jsxs)(R,{className:`w-56`,children:[(0,q.jsx)(H,{children:`Appearance`}),(0,q.jsx)(U,{}),(0,q.jsx)(B,{checked:e,onCheckedChange:t,children:`Status Bar`}),(0,q.jsx)(B,{checked:n,onCheckedChange:r,children:`Activity Bar`}),(0,q.jsx)(B,{checked:i,onCheckedChange:a,children:`Panel`})]})]})}},Q={render:()=>{let[e,t]=(0,K.useState)(`bottom`);return(0,q.jsxs)(I,{children:[(0,q.jsx)(L,{asChild:!0,children:(0,q.jsx)(f,{variant:`outline`,children:`Position`})}),(0,q.jsxs)(R,{className:`w-56`,children:[(0,q.jsx)(H,{children:`Panel Position`}),(0,q.jsx)(U,{}),(0,q.jsxs)(ft,{value:e,onValueChange:t,children:[(0,q.jsx)(V,{value:`top`,children:`Top`}),(0,q.jsx)(V,{value:`bottom`,children:`Bottom`}),(0,q.jsx)(V,{value:`right`,children:`Right`})]})]})]})}},$={render:()=>(0,q.jsxs)(I,{children:[(0,q.jsx)(L,{asChild:!0,children:(0,q.jsx)(f,{variant:`outline`,children:`File`})}),(0,q.jsxs)(R,{className:`w-56`,children:[(0,q.jsxs)(z,{children:[`New File`,(0,q.jsx)(W,{children:`⌘N`})]}),(0,q.jsxs)(z,{children:[`Open`,(0,q.jsx)(W,{children:`⌘O`})]}),(0,q.jsxs)(z,{children:[`Save`,(0,q.jsx)(W,{children:`⌘S`})]}),(0,q.jsx)(U,{}),(0,q.jsxs)(z,{children:[`Print`,(0,q.jsx)(W,{children:`⌘P`})]})]})]})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <MoreVertical size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <User size={14} className="mr-2" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings size={14} className="mr-2" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut size={14} className="mr-2" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Account</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [showStatusBar, setShowStatusBar] = useState(true);
    const [showActivityBar, setShowActivityBar] = useState(false);
    const [showPanel, setShowPanel] = useState(false);
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">View</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar}>
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [position, setPosition] = useState("bottom");
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Position</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">File</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          New File
          <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Open
          <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Save
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Print
          <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...$.parameters?.docs?.source}}},vt=[`Default`,`WithIcons`,`WithLabel`,`WithCheckboxes`,`WithRadio`,`WithShortcuts`]}))();export{J as Default,Z as WithCheckboxes,Y as WithIcons,X as WithLabel,Q as WithRadio,$ as WithShortcuts,vt as __namedExportsOrder,_t as default};