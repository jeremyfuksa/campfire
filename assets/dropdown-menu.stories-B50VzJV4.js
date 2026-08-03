import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{n as i,r as a}from"./dist-Dlyn9OaY.js";import{n as o,t as s}from"./dist-D7HkfZMy.js";import{a as ee,i as c,r as l,t as u}from"./dist-BK-Z8wev.js";import{n as te,t as ne}from"./dist-CVJt7rz-.js";import{n as re,t as ie}from"./dist-CF8blSvU.js";import{n as ae,t as oe}from"./createLucideIcon-D4Czp6j_.js";import{n as se,t as ce}from"./check-B4Mqbaut.js";import{n as le}from"./chevron-right-ByLsb6_d.js";import{n as ue,t as de}from"./circle-BnbtkmAq.js";import{n as fe,t as pe}from"./log-out-B9U8oXhP.js";import{n as me,t as he}from"./settings-BE-K_bqF.js";import{n as ge,t as _e}from"./user-D0RLBsr5.js";import{n as ve,t as d}from"./utils-DwVtoTFj.js";import{r as ye,t as f}from"./button-CTqIoSi4.js";import{_ as be,a as xe,c as Se,d as Ce,f as we,g as Te,h as Ee,i as De,l as Oe,n as ke,o as Ae,p as je,r as Me,s as Ne,t as Pe,u as Fe,v as Ie}from"./dist-DGpGBjnQ.js";var Le,Re;function ze(){return(ze=t((()=>{ae(),Le=[[`circle`,{cx:`12`,cy:`12`,r:`1`,key:`41hilf`}],[`circle`,{cx:`12`,cy:`5`,r:`1`,key:`gxeob9`}],[`circle`,{cx:`12`,cy:`19`,r:`1`,key:`lyex9k`}]],Re=oe(`ellipsis-vertical`,Le)})))()}var p,m,h,g,Be,_,v,y,b,x,S,C,w,T,E,Ve,He,Ue,D,We,O,Ge,k,Ke,A,qe,j,Je,M,Ye,N,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,P,dt;function ft(){return(ft=t((()=>{p=e(n(),1),ee(),o(),a(),ne(),l(),Ie(),ie(),m=r(),h=`DropdownMenu`,[g,Be]=i(h,[be]),_=be(),[v,y]=g(h),b=e=>{let{__scopeDropdownMenu:t,children:n,dir:r,open:i,defaultOpen:a,onOpenChange:o,modal:s=!0}=e,ee=_(t),c=p.useRef(null),[l,u]=te({prop:i,defaultProp:a??!1,onChange:o,caller:h});return(0,m.jsx)(v,{scope:t,triggerId:re(),triggerRef:c,contentId:re(),open:l,onOpenChange:u,onOpenToggle:p.useCallback(()=>u(e=>!e),[u]),modal:s,children:(0,m.jsx)(we,{...ee,open:l,onOpenChange:u,dir:r,modal:s,children:n})})},b.displayName=h,x=`DropdownMenuTrigger`,S=p.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,disabled:r=!1,...i}=e,a=y(x,n),o=_(n);return(0,m.jsx)(Pe,{asChild:!0,...o,children:(0,m.jsx)(u.button,{type:`button`,id:a.triggerId,"aria-haspopup":`menu`,"aria-expanded":a.open,"aria-controls":a.open?a.contentId:void 0,"data-state":a.open?`open`:`closed`,"data-disabled":r?``:void 0,disabled:r,...i,ref:s(t,a.triggerRef),onPointerDown:c(e.onPointerDown,e=>{!r&&e.button===0&&e.ctrlKey===!1&&(a.onOpenToggle(),a.open||e.preventDefault())}),onKeyDown:c(e.onKeyDown,e=>{r||([`Enter`,` `].includes(e.key)&&a.onOpenToggle(),e.key===`ArrowDown`&&a.onOpenChange(!0),[`Enter`,` `,`ArrowDown`].includes(e.key)&&e.preventDefault())})})})}),S.displayName=x,C=`DropdownMenuPortal`,w=e=>{let{__scopeDropdownMenu:t,...n}=e,r=_(t);return(0,m.jsx)(Oe,{...r,...n})},w.displayName=C,T=`DropdownMenuContent`,E=p.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,i=y(T,n),a=_(n),o=p.useRef(!1);return(0,m.jsx)(De,{id:i.contentId,"aria-labelledby":i.triggerId,...a,...r,ref:t,onCloseAutoFocus:c(e.onCloseAutoFocus,e=>{o.current||i.triggerRef.current?.focus(),o.current=!1,e.preventDefault()}),onInteractOutside:c(e.onInteractOutside,e=>{let t=e.detail.originalEvent,n=t.button===0&&t.ctrlKey===!0,r=t.button===2||n;(!i.modal||r)&&(o.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-dropdown-menu-content-available-width":`var(--radix-popper-available-width)`,"--radix-dropdown-menu-content-available-height":`var(--radix-popper-available-height)`,"--radix-dropdown-menu-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-dropdown-menu-trigger-height":`var(--radix-popper-anchor-height)`}})}),E.displayName=T,Ve=`DropdownMenuGroup`,He=p.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,i=_(n);return(0,m.jsx)(xe,{...i,...r,ref:t})}),He.displayName=Ve,Ue=`DropdownMenuLabel`,D=p.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,i=_(n);return(0,m.jsx)(Se,{...i,...r,ref:t})}),D.displayName=Ue,We=`DropdownMenuItem`,O=p.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,i=_(n);return(0,m.jsx)(Ae,{...i,...r,ref:t})}),O.displayName=We,Ge=`DropdownMenuCheckboxItem`,k=p.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,i=_(n);return(0,m.jsx)(Me,{...i,...r,ref:t})}),k.displayName=Ge,Ke=`DropdownMenuRadioGroup`,A=p.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,i=_(n);return(0,m.jsx)(Fe,{...i,...r,ref:t})}),A.displayName=Ke,qe=`DropdownMenuRadioItem`,j=p.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,i=_(n);return(0,m.jsx)(Ce,{...i,...r,ref:t})}),j.displayName=qe,Je=`DropdownMenuItemIndicator`,M=p.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,i=_(n);return(0,m.jsx)(Ne,{...i,...r,ref:t})}),M.displayName=Je,Ye=`DropdownMenuSeparator`,N=p.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,i=_(n);return(0,m.jsx)(je,{...i,...r,ref:t})}),N.displayName=Ye,Xe=`DropdownMenuArrow`,Ze=p.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,i=_(n);return(0,m.jsx)(ke,{...i,...r,ref:t})}),Ze.displayName=Xe,Qe=`DropdownMenuSubTrigger`,$e=p.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,i=_(n);return(0,m.jsx)(Te,{...i,...r,ref:t})}),$e.displayName=Qe,et=`DropdownMenuSubContent`,tt=p.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,i=_(n);return(0,m.jsx)(Ee,{...i,...r,ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-dropdown-menu-content-available-width":`var(--radix-popper-available-width)`,"--radix-dropdown-menu-content-available-height":`var(--radix-popper-available-height)`,"--radix-dropdown-menu-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-dropdown-menu-trigger-height":`var(--radix-popper-anchor-height)`}})}),tt.displayName=et,nt=b,rt=S,it=w,at=E,ot=D,st=O,ct=k,lt=A,ut=j,P=M,dt=N})))()}function F({...e}){return(0,W.jsx)(nt,{"data-slot":`dropdown-menu`,...e})}function I({...e}){return(0,W.jsx)(rt,{"data-slot":`dropdown-menu-trigger`,...e})}function L({className:e,sideOffset:t=4,...n}){return(0,W.jsx)(it,{children:(0,W.jsx)(at,{"data-slot":`dropdown-menu-content`,sideOffset:t,className:d(`bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md`,e),...n})})}function R({className:e,inset:t,variant:n=`default`,...r}){return(0,W.jsx)(st,{"data-slot":`dropdown-menu-item`,"data-inset":t,"data-variant":n,className:d(`focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive [svg]:*:data-[variant=destructive]:text-destructive! [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-xs px-2 py-1.5 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),...r})}function z({className:e,children:t,checked:n,...r}){return(0,W.jsxs)(ct,{"data-slot":`dropdown-menu-checkbox-item`,className:d(`focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),checked:n,...r,children:[(0,W.jsx)(`span`,{className:`pointer-events-none absolute left-2 flex size-3.5 items-center justify-center`,children:(0,W.jsx)(P,{children:(0,W.jsx)(ce,{className:`size-4`})})}),t]})}function pt({...e}){return(0,W.jsx)(lt,{"data-slot":`dropdown-menu-radio-group`,...e})}function B({className:e,children:t,...n}){return(0,W.jsxs)(ut,{"data-slot":`dropdown-menu-radio-item`,className:d(`focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),...n,children:[(0,W.jsx)(`span`,{className:`pointer-events-none absolute left-2 flex size-3.5 items-center justify-center`,children:(0,W.jsx)(P,{children:(0,W.jsx)(de,{className:`size-2 fill-current`})})}),t]})}function V({className:e,inset:t,...n}){return(0,W.jsx)(ot,{"data-slot":`dropdown-menu-label`,"data-inset":t,className:d(`px-2 py-1.5 text-sm font-medium data-inset:pl-8`,e),...n})}function H({className:e,...t}){return(0,W.jsx)(dt,{"data-slot":`dropdown-menu-separator`,className:d(`bg-border -mx-1 my-1 h-px`,e),...t})}function U({className:e,...t}){return(0,W.jsx)(`span`,{"data-slot":`dropdown-menu-shortcut`,className:d(`text-muted-foreground ml-auto text-xs tracking-widest`,e),...t})}var W;function mt(){return(mt=t((()=>{n(),ft(),se(),le(),ue(),ve(),W=r(),F.__docgenInfo={description:``,methods:[],displayName:`DropdownMenu`},I.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuTrigger`},L.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuContent`,props:{sideOffset:{defaultValue:{value:`4`,computed:!1},required:!1}}},V.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuLabel`,props:{inset:{required:!1,tsType:{name:`boolean`},description:``}}},R.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuItem`,props:{inset:{required:!1,tsType:{name:`boolean`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`"default" | "destructive"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"destructive"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}}}},z.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuCheckboxItem`},pt.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuRadioGroup`},B.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuRadioItem`},H.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuSeparator`},U.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuShortcut`}})))()}var G,K,q,J,Y,X,Z,Q,$,ht;function gt(){return(gt=t((()=>{mt(),ye(),G=n(),fe(),ze(),me(),ge(),K=r(),q={title:`Components/DropdownMenu`,component:F,parameters:{layout:`centered`},tags:[`autodocs`]},J={render:()=>(0,K.jsxs)(F,{children:[(0,K.jsx)(I,{asChild:!0,children:(0,K.jsx)(f,{variant:`outline`,children:`Open Menu`})}),(0,K.jsxs)(L,{children:[(0,K.jsx)(R,{children:`Profile`}),(0,K.jsx)(R,{children:`Settings`}),(0,K.jsx)(R,{children:`Logout`})]})]})},Y={render:()=>(0,K.jsxs)(F,{children:[(0,K.jsx)(I,{asChild:!0,children:(0,K.jsx)(f,{variant:`outline`,size:`icon`,children:(0,K.jsx)(Re,{size:16})})}),(0,K.jsxs)(L,{children:[(0,K.jsxs)(R,{children:[(0,K.jsx)(_e,{size:14,className:`mr-2`}),`Profile`]}),(0,K.jsxs)(R,{children:[(0,K.jsx)(he,{size:14,className:`mr-2`}),`Settings`]}),(0,K.jsx)(H,{}),(0,K.jsxs)(R,{children:[(0,K.jsx)(pe,{size:14,className:`mr-2`}),`Logout`]})]})]})},X={render:()=>(0,K.jsxs)(F,{children:[(0,K.jsx)(I,{asChild:!0,children:(0,K.jsx)(f,{variant:`outline`,children:`Account`})}),(0,K.jsxs)(L,{className:`w-56`,children:[(0,K.jsx)(V,{children:`My Account`}),(0,K.jsx)(H,{}),(0,K.jsx)(R,{children:`Profile`}),(0,K.jsx)(R,{children:`Billing`}),(0,K.jsx)(R,{children:`Team`}),(0,K.jsx)(R,{children:`Subscription`})]})]})},Z={render:()=>{let[e,t]=(0,G.useState)(!0),[n,r]=(0,G.useState)(!1),[i,a]=(0,G.useState)(!1);return(0,K.jsxs)(F,{children:[(0,K.jsx)(I,{asChild:!0,children:(0,K.jsx)(f,{variant:`outline`,children:`View`})}),(0,K.jsxs)(L,{className:`w-56`,children:[(0,K.jsx)(V,{children:`Appearance`}),(0,K.jsx)(H,{}),(0,K.jsx)(z,{checked:e,onCheckedChange:t,children:`Status Bar`}),(0,K.jsx)(z,{checked:n,onCheckedChange:r,children:`Activity Bar`}),(0,K.jsx)(z,{checked:i,onCheckedChange:a,children:`Panel`})]})]})}},Q={render:()=>{let[e,t]=(0,G.useState)(`bottom`);return(0,K.jsxs)(F,{children:[(0,K.jsx)(I,{asChild:!0,children:(0,K.jsx)(f,{variant:`outline`,children:`Position`})}),(0,K.jsxs)(L,{className:`w-56`,children:[(0,K.jsx)(V,{children:`Panel Position`}),(0,K.jsx)(H,{}),(0,K.jsxs)(pt,{value:e,onValueChange:t,children:[(0,K.jsx)(B,{value:`top`,children:`Top`}),(0,K.jsx)(B,{value:`bottom`,children:`Bottom`}),(0,K.jsx)(B,{value:`right`,children:`Right`})]})]})]})}},$={render:()=>(0,K.jsxs)(F,{children:[(0,K.jsx)(I,{asChild:!0,children:(0,K.jsx)(f,{variant:`outline`,children:`File`})}),(0,K.jsxs)(L,{className:`w-56`,children:[(0,K.jsxs)(R,{children:[`New File`,(0,K.jsx)(U,{children:`⌘N`})]}),(0,K.jsxs)(R,{children:[`Open`,(0,K.jsx)(U,{children:`⌘O`})]}),(0,K.jsxs)(R,{children:[`Save`,(0,K.jsx)(U,{children:`⌘S`})]}),(0,K.jsx)(H,{}),(0,K.jsxs)(R,{children:[`Print`,(0,K.jsx)(U,{children:`⌘P`})]})]})]})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},ht=[`Default`,`WithIcons`,`WithLabel`,`WithCheckboxes`,`WithRadio`,`WithShortcuts`]})))()}gt();export{J as Default,Z as WithCheckboxes,Y as WithIcons,X as WithLabel,Q as WithRadio,$ as WithShortcuts,ht as __namedExportsOrder,q as default};