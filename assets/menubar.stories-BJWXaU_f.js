import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{n as i,r as a}from"./dist-DIs3RLZS.js";import{n as o,r as s}from"./dist-Cd9gDrEs.js";import{n as c,t as l}from"./dist-CAkeZA27.js";import{o as u,r as d,s as f,t as ee}from"./dist-Dq2sm8oD.js";import{n as te,t as p}from"./dist-DhJF_c6r.js";import{n as m,t as ne}from"./dist-D2YQunT4.js";import{n as re,t as ie}from"./dist-CXP3AQBZ.js";import{Q as ae,it as oe,st as se,t as ce}from"./lucide-react-BZbEj6fH.js";import{n as le,t as h}from"./utils-CDLLjGU_.js";import{i as ue,n as de,r as fe,t as pe}from"./dist-Dr1HKb59.js";import{_ as me,a as he,c as ge,d as _e,f as ve,g as ye,h as be,i as xe,l as Se,m as Ce,n as we,o as Te,p as Ee,r as De,s as Oe,t as ke,u as Ae,v as je}from"./dist-BjqcwgCz.js";function Me(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var g,_,v,y,Ne,Pe,Fe,Ie,b,x,Le,S,C,w,Re,T,E,D,O,ze,k,A,j,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,M,tt,nt,N,P,rt,F,it,I,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,L,gt,_t,vt,yt,bt=t((()=>{g=e(n(),1),c(),ie(),f(),o(),a(),ne(),je(),ue(),d(),p(),_=r(),v=`Menubar`,[y,Ne,Pe]=l(v),[Fe,Ie]=i(v,[Pe,fe]),b=me(),x=fe(),[Le,S]=Fe(v),C=g.forwardRef((e,t)=>{let{__scopeMenubar:n,value:r,onValueChange:i,defaultValue:a,loop:o=!0,dir:s,...c}=e,l=re(s),u=x(n),[d,f]=te({prop:r,onChange:i,defaultProp:a??``,caller:v}),[p,m]=g.useState(null);return(0,_.jsx)(Le,{scope:n,value:d,onMenuOpen:g.useCallback(e=>{f(e),m(e)},[f]),onMenuClose:g.useCallback(()=>f(``),[f]),onMenuToggle:g.useCallback(e=>{f(t=>t?``:e),m(e)},[f]),dir:l,loop:o,children:(0,_.jsx)(y.Provider,{scope:n,children:(0,_.jsx)(y.Slot,{scope:n,children:(0,_.jsx)(de,{asChild:!0,...u,orientation:`horizontal`,loop:o,dir:l,currentTabStopId:p,onCurrentTabStopIdChange:m,children:(0,_.jsx)(ee.div,{role:`menubar`,...c,ref:t})})})})})}),C.displayName=v,w=`MenubarMenu`,[Re,T]=Fe(w),E=e=>{let{__scopeMenubar:t,value:n,...r}=e,i=m(),a=n||i||`LEGACY_REACT_AUTO_VALUE`,o=S(w,t),s=b(t),c=g.useRef(null),l=g.useRef(!1),u=o.value===a;return g.useEffect(()=>{u||(l.current=!1)},[u]),(0,_.jsx)(Re,{scope:t,value:a,triggerId:m(),triggerRef:c,contentId:m(),wasKeyboardTriggerOpenRef:l,children:(0,_.jsx)(ve,{...s,open:u,onOpenChange:e=>{e||o.onMenuClose()},modal:!1,dir:o.dir,...r})})},E.displayName=w,D=`MenubarTrigger`,O=g.forwardRef((e,t)=>{let{__scopeMenubar:n,disabled:r=!1,...i}=e,a=x(n),o=b(n),c=S(D,n),l=T(D,n),d=g.useRef(null),f=s(t,d,l.triggerRef),[te,p]=g.useState(!1),m=c.value===l.value;return(0,_.jsx)(y.ItemSlot,{scope:n,value:l.value,disabled:r,children:(0,_.jsx)(pe,{asChild:!0,...a,focusable:!r,tabStopId:l.value,children:(0,_.jsx)(ke,{asChild:!0,...o,children:(0,_.jsx)(ee.button,{type:`button`,role:`menuitem`,id:l.triggerId,"aria-haspopup":`menu`,"aria-expanded":m,"aria-controls":m?l.contentId:void 0,"data-highlighted":te?``:void 0,"data-state":m?`open`:`closed`,"data-disabled":r?``:void 0,disabled:r,...i,ref:f,onPointerDown:u(e.onPointerDown,e=>{!r&&e.button===0&&e.ctrlKey===!1&&(c.onMenuOpen(l.value),m||e.preventDefault())}),onPointerEnter:u(e.onPointerEnter,()=>{c.value&&!m&&(c.onMenuOpen(l.value),d.current?.focus())}),onKeyDown:u(e.onKeyDown,e=>{r||([`Enter`,` `].includes(e.key)&&c.onMenuToggle(l.value),e.key===`ArrowDown`&&c.onMenuOpen(l.value),[`Enter`,` `,`ArrowDown`].includes(e.key)&&(l.wasKeyboardTriggerOpenRef.current=!0,e.preventDefault()))}),onFocus:u(e.onFocus,()=>p(!0)),onBlur:u(e.onBlur,()=>p(!1))})})})})}),O.displayName=D,ze=`MenubarPortal`,k=e=>{let{__scopeMenubar:t,...n}=e,r=b(t);return(0,_.jsx)(Se,{...r,...n})},k.displayName=ze,A=`MenubarContent`,j=g.forwardRef((e,t)=>{let{__scopeMenubar:n,align:r=`start`,...i}=e,a=b(n),o=S(A,n),s=T(A,n),c=Ne(n),l=g.useRef(!1);return(0,_.jsx)(xe,{id:s.contentId,"aria-labelledby":s.triggerId,"data-radix-menubar-content":``,...a,...i,ref:t,align:r,onCloseAutoFocus:u(e.onCloseAutoFocus,e=>{!o.value&&!l.current&&s.triggerRef.current?.focus(),l.current=!1,e.preventDefault()}),onFocusOutside:u(e.onFocusOutside,e=>{let t=e.target;c().some(e=>e.ref.current?.contains(t))&&e.preventDefault()}),onInteractOutside:u(e.onInteractOutside,()=>{l.current=!0}),onEntryFocus:e=>{s.wasKeyboardTriggerOpenRef.current||e.preventDefault()},onKeyDown:u(e.onKeyDown,e=>{if([`ArrowRight`,`ArrowLeft`].includes(e.key)){let t=e.target,n=t.hasAttribute(`data-radix-menubar-subtrigger`),r=t.closest(`[data-radix-menubar-content]`)!==e.currentTarget,i=(o.dir===`rtl`?`ArrowRight`:`ArrowLeft`)===e.key;if(!i&&n||r&&i)return;let a=c().filter(e=>!e.disabled).map(e=>e.value);i&&a.reverse();let l=a.indexOf(s.value);a=o.loop?Me(a,l+1):a.slice(l+1);let[u]=a;u&&o.onMenuOpen(u)}},{checkForDefaultPrevented:!1}),style:{...e.style,"--radix-menubar-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-menubar-content-available-width":`var(--radix-popper-available-width)`,"--radix-menubar-content-available-height":`var(--radix-popper-available-height)`,"--radix-menubar-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-menubar-trigger-height":`var(--radix-popper-anchor-height)`}})}),j.displayName=A,Be=`MenubarGroup`,Ve=g.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=b(n);return(0,_.jsx)(he,{...i,...r,ref:t})}),Ve.displayName=Be,He=`MenubarLabel`,Ue=g.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=b(n);return(0,_.jsx)(ge,{...i,...r,ref:t})}),Ue.displayName=He,We=`MenubarItem`,Ge=g.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=b(n);return(0,_.jsx)(Te,{...i,...r,ref:t})}),Ge.displayName=We,Ke=`MenubarCheckboxItem`,qe=g.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=b(n);return(0,_.jsx)(De,{...i,...r,ref:t})}),qe.displayName=Ke,Je=`MenubarRadioGroup`,Ye=g.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=b(n);return(0,_.jsx)(Ae,{...i,...r,ref:t})}),Ye.displayName=Je,Xe=`MenubarRadioItem`,Ze=g.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=b(n);return(0,_.jsx)(_e,{...i,...r,ref:t})}),Ze.displayName=Xe,Qe=`MenubarItemIndicator`,$e=g.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=b(n);return(0,_.jsx)(Oe,{...i,...r,ref:t})}),$e.displayName=Qe,et=`MenubarSeparator`,M=g.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=b(n);return(0,_.jsx)(Ee,{...i,...r,ref:t})}),M.displayName=et,tt=`MenubarArrow`,nt=g.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=b(n);return(0,_.jsx)(we,{...i,...r,ref:t})}),nt.displayName=tt,N=`MenubarSub`,P=e=>{let{__scopeMenubar:t,children:n,open:r,onOpenChange:i,defaultOpen:a}=e,o=b(t),[s,c]=te({prop:r,defaultProp:a??!1,onChange:i,caller:N});return(0,_.jsx)(Ce,{...o,open:s,onOpenChange:c,children:n})},P.displayName=N,rt=`MenubarSubTrigger`,F=g.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=b(n);return(0,_.jsx)(ye,{"data-radix-menubar-subtrigger":``,...i,...r,ref:t})}),F.displayName=rt,it=`MenubarSubContent`,I=g.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=b(n);return(0,_.jsx)(be,{...i,"data-radix-menubar-content":``,...r,ref:t,style:{...e.style,"--radix-menubar-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-menubar-content-available-width":`var(--radix-popper-available-width)`,"--radix-menubar-content-available-height":`var(--radix-popper-available-height)`,"--radix-menubar-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-menubar-trigger-height":`var(--radix-popper-anchor-height)`}})}),I.displayName=it,at=C,ot=E,st=O,ct=k,lt=j,ut=Ve,dt=Ue,ft=Ge,pt=qe,mt=Ye,ht=Ze,L=$e,gt=M,_t=P,vt=F,yt=I}));function R({className:e,...t}){return(0,q.jsx)(at,{"data-slot":`menubar`,className:h(`bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-2xs`,e),...t})}function z({...e}){return(0,q.jsx)(ot,{"data-slot":`menubar-menu`,...e})}function xt({...e}){return(0,q.jsx)(ut,{"data-slot":`menubar-group`,...e})}function St({...e}){return(0,q.jsx)(ct,{"data-slot":`menubar-portal`,...e})}function Ct({...e}){return(0,q.jsx)(mt,{"data-slot":`menubar-radio-group`,...e})}function B({className:e,...t}){return(0,q.jsx)(st,{"data-slot":`menubar-trigger`,className:h(`focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-xs px-2 py-1 text-sm font-medium outline-hidden select-none`,e),...t})}function V({className:e,align:t=`start`,alignOffset:n=-4,sideOffset:r=8,...i}){return(0,q.jsx)(St,{children:(0,q.jsx)(lt,{"data-slot":`menubar-content`,align:t,alignOffset:n,sideOffset:r,className:h(`bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-48 origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md`,e),...i})})}function H({className:e,inset:t,variant:n=`default`,...r}){return(0,q.jsx)(ft,{"data-slot":`menubar-item`,"data-inset":t,"data-variant":n,className:h(`focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive [svg]:*:data-[variant=destructive]:text-destructive! [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-xs px-2 py-1.5 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),...r})}function U({className:e,children:t,checked:n,...r}){return(0,q.jsxs)(pt,{"data-slot":`menubar-checkbox-item`,className:h(`focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),checked:n,...r,children:[(0,q.jsx)(`span`,{className:`pointer-events-none absolute left-2 flex size-3.5 items-center justify-center`,children:(0,q.jsx)(L,{children:(0,q.jsx)(se,{className:`size-4`})})}),t]})}function W({className:e,children:t,...n}){return(0,q.jsxs)(ht,{"data-slot":`menubar-radio-item`,className:h(`focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),...n,children:[(0,q.jsx)(`span`,{className:`pointer-events-none absolute left-2 flex size-3.5 items-center justify-center`,children:(0,q.jsx)(L,{children:(0,q.jsx)(ae,{className:`size-2 fill-current`})})}),t]})}function wt({className:e,inset:t,...n}){return(0,q.jsx)(dt,{"data-slot":`menubar-label`,"data-inset":t,className:h(`px-2 py-1.5 text-sm font-medium data-inset:pl-8`,e),...n})}function G({className:e,...t}){return(0,q.jsx)(gt,{"data-slot":`menubar-separator`,className:h(`bg-border -mx-1 my-1 h-px`,e),...t})}function K({className:e,...t}){return(0,q.jsx)(`span`,{"data-slot":`menubar-shortcut`,className:h(`text-muted-foreground ml-auto text-xs tracking-widest`,e),...t})}function Tt({...e}){return(0,q.jsx)(_t,{"data-slot":`menubar-sub`,...e})}function Et({className:e,inset:t,children:n,...r}){return(0,q.jsxs)(vt,{"data-slot":`menubar-sub-trigger`,"data-inset":t,className:h(`focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-xs px-2 py-1.5 text-sm outline-hidden select-none data-inset:pl-8`,e),...r,children:[n,(0,q.jsx)(oe,{className:`ml-auto h-4 w-4`})]})}function Dt({className:e,...t}){return(0,q.jsx)(yt,{"data-slot":`menubar-sub-content`,className:h(`bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg`,e),...t})}var q,Ot=t((()=>{n(),bt(),ce(),le(),q=r(),R.__docgenInfo={description:``,methods:[],displayName:`Menubar`},St.__docgenInfo={description:``,methods:[],displayName:`MenubarPortal`},z.__docgenInfo={description:``,methods:[],displayName:`MenubarMenu`},B.__docgenInfo={description:``,methods:[],displayName:`MenubarTrigger`},V.__docgenInfo={description:``,methods:[],displayName:`MenubarContent`,props:{align:{defaultValue:{value:`"start"`,computed:!1},required:!1},alignOffset:{defaultValue:{value:`-4`,computed:!1},required:!1},sideOffset:{defaultValue:{value:`8`,computed:!1},required:!1}}},xt.__docgenInfo={description:``,methods:[],displayName:`MenubarGroup`},G.__docgenInfo={description:``,methods:[],displayName:`MenubarSeparator`},wt.__docgenInfo={description:``,methods:[],displayName:`MenubarLabel`,props:{inset:{required:!1,tsType:{name:`boolean`},description:``}}},H.__docgenInfo={description:``,methods:[],displayName:`MenubarItem`,props:{inset:{required:!1,tsType:{name:`boolean`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`"default" | "destructive"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"destructive"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}}}},K.__docgenInfo={description:``,methods:[],displayName:`MenubarShortcut`},U.__docgenInfo={description:``,methods:[],displayName:`MenubarCheckboxItem`},Ct.__docgenInfo={description:``,methods:[],displayName:`MenubarRadioGroup`},W.__docgenInfo={description:``,methods:[],displayName:`MenubarRadioItem`},Tt.__docgenInfo={description:``,methods:[],displayName:`MenubarSub`},Et.__docgenInfo={description:``,methods:[],displayName:`MenubarSubTrigger`,props:{inset:{required:!1,tsType:{name:`boolean`},description:``}}},Dt.__docgenInfo={description:``,methods:[],displayName:`MenubarSubContent`}})),J,Y,kt,X,Z,Q,$,At;t((()=>{Ot(),J=e(n(),1),Y=r(),kt={title:`Components/Menubar`,component:R,parameters:{layout:`centered`},tags:[`autodocs`]},X={render:()=>(0,Y.jsxs)(R,{children:[(0,Y.jsxs)(z,{children:[(0,Y.jsx)(B,{children:`File`}),(0,Y.jsxs)(V,{children:[(0,Y.jsxs)(H,{children:[`New File `,(0,Y.jsx)(K,{children:`⌘N`})]}),(0,Y.jsxs)(H,{children:[`Open `,(0,Y.jsx)(K,{children:`⌘O`})]}),(0,Y.jsx)(G,{}),(0,Y.jsxs)(H,{children:[`Save `,(0,Y.jsx)(K,{children:`⌘S`})]})]})]}),(0,Y.jsxs)(z,{children:[(0,Y.jsx)(B,{children:`Edit`}),(0,Y.jsxs)(V,{children:[(0,Y.jsxs)(H,{children:[`Undo `,(0,Y.jsx)(K,{children:`⌘Z`})]}),(0,Y.jsxs)(H,{children:[`Redo `,(0,Y.jsx)(K,{children:`⇧⌘Z`})]}),(0,Y.jsx)(G,{}),(0,Y.jsxs)(H,{children:[`Cut `,(0,Y.jsx)(K,{children:`⌘X`})]}),(0,Y.jsxs)(H,{children:[`Copy `,(0,Y.jsx)(K,{children:`⌘C`})]}),(0,Y.jsxs)(H,{children:[`Paste `,(0,Y.jsx)(K,{children:`⌘V`})]})]})]}),(0,Y.jsxs)(z,{children:[(0,Y.jsx)(B,{children:`View`}),(0,Y.jsxs)(V,{children:[(0,Y.jsx)(H,{children:`Zoom In`}),(0,Y.jsx)(H,{children:`Zoom Out`}),(0,Y.jsx)(H,{children:`Reset Zoom`})]})]})]})},Z={render:()=>{let[e,t]=(0,J.useState)(!0),[n,r]=(0,J.useState)(!1);return(0,Y.jsx)(R,{children:(0,Y.jsxs)(z,{children:[(0,Y.jsx)(B,{children:`View`}),(0,Y.jsxs)(V,{children:[(0,Y.jsx)(U,{checked:e,onCheckedChange:t,children:`Status Bar`}),(0,Y.jsx)(U,{checked:n,onCheckedChange:r,children:`Panel`})]})]})})}},Q={render:()=>{let[e,t]=(0,J.useState)(`light`);return(0,Y.jsx)(R,{children:(0,Y.jsxs)(z,{children:[(0,Y.jsx)(B,{children:`Theme`}),(0,Y.jsx)(V,{children:(0,Y.jsxs)(Ct,{value:e,onValueChange:t,children:[(0,Y.jsx)(W,{value:`light`,children:`Light`}),(0,Y.jsx)(W,{value:`dark`,children:`Dark`}),(0,Y.jsx)(W,{value:`system`,children:`System`})]})})]})})}},$={render:()=>(0,Y.jsxs)(R,{children:[(0,Y.jsxs)(z,{children:[(0,Y.jsx)(B,{children:`File`}),(0,Y.jsxs)(V,{children:[(0,Y.jsxs)(H,{children:[`New Tab `,(0,Y.jsx)(K,{children:`⌘T`})]}),(0,Y.jsxs)(H,{children:[`New Window `,(0,Y.jsx)(K,{children:`⌘N`})]}),(0,Y.jsx)(G,{}),(0,Y.jsx)(H,{children:`Open File...`}),(0,Y.jsx)(H,{children:`Open Folder...`}),(0,Y.jsx)(G,{}),(0,Y.jsxs)(H,{children:[`Save `,(0,Y.jsx)(K,{children:`⌘S`})]}),(0,Y.jsx)(H,{children:`Save As...`})]})]}),(0,Y.jsxs)(z,{children:[(0,Y.jsx)(B,{children:`Edit`}),(0,Y.jsxs)(V,{children:[(0,Y.jsx)(H,{children:`Undo`}),(0,Y.jsx)(H,{children:`Redo`}),(0,Y.jsx)(G,{}),(0,Y.jsx)(H,{children:`Cut`}),(0,Y.jsx)(H,{children:`Copy`}),(0,Y.jsx)(H,{children:`Paste`})]})]}),(0,Y.jsxs)(z,{children:[(0,Y.jsx)(B,{children:`View`}),(0,Y.jsxs)(V,{children:[(0,Y.jsx)(H,{children:`Command Palette`}),(0,Y.jsx)(G,{}),(0,Y.jsx)(H,{children:`Explorer`}),(0,Y.jsx)(H,{children:`Search`}),(0,Y.jsx)(H,{children:`Source Control`})]})]}),(0,Y.jsxs)(z,{children:[(0,Y.jsx)(B,{children:`Help`}),(0,Y.jsxs)(V,{children:[(0,Y.jsx)(H,{children:`Documentation`}),(0,Y.jsx)(H,{children:`Keyboard Shortcuts`}),(0,Y.jsx)(G,{}),(0,Y.jsx)(H,{children:`Report Issue`})]})]})]})},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New File <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Open <MenubarShortcut>⌘O</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Save <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Cut <MenubarShortcut>⌘X</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Copy <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Paste <MenubarShortcut>⌘V</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Zoom In</MenubarItem>
          <MenubarItem>Zoom Out</MenubarItem>
          <MenubarItem>Reset Zoom</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [showStatusBar, setShowStatusBar] = useState(true);
    const [showPanel, setShowPanel] = useState(false);
    return <Menubar>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
              Status Bar
            </MenubarCheckboxItem>
            <MenubarCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
              Panel
            </MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [theme, setTheme] = useState("light");
    return <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Theme</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value={theme} onValueChange={setTheme}>
              <MenubarRadioItem value="light">Light</MenubarRadioItem>
              <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
              <MenubarRadioItem value="system">System</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Open File...</MenubarItem>
          <MenubarItem>Open Folder...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Save <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>Save As...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Command Palette</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Explorer</MenubarItem>
          <MenubarItem>Search</MenubarItem>
          <MenubarItem>Source Control</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Help</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Documentation</MenubarItem>
          <MenubarItem>Keyboard Shortcuts</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Report Issue</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
}`,...$.parameters?.docs?.source}}},At=[`Default`,`WithCheckboxes`,`WithRadio`,`ApplicationMenu`]}))();export{$ as ApplicationMenu,X as Default,Z as WithCheckboxes,Q as WithRadio,At as __namedExportsOrder,kt as default};