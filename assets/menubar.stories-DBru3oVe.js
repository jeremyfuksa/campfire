import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{n as i,r as a}from"./dist-DIs3RLZS.js";import{n as o,r as s}from"./dist-Cd9gDrEs.js";import{n as c,t as l}from"./dist-CAkeZA27.js";import{a as u,i as d,r as f,t as ee}from"./dist-BEqORXIG.js";import{n as p,t as m}from"./dist-Vz0ZWiBO.js";import{n as h,t as te}from"./dist-C115CmG0.js";import{n as ne,t as re}from"./dist-ZI7lRPHM.js";import{Q as ie,it as ae,st as oe,t as se}from"./lucide-react-CRUNCA_B.js";import{n as ce,t as g}from"./utils-D2Sa0ztS.js";import{i as le,n as ue,r as de,t as fe}from"./dist-CQUc4QuZ.js";import{_ as pe,a as me,c as he,d as ge,f as _e,g as ve,h as ye,i as be,l as xe,m as Se,n as Ce,o as we,p as Te,r as Ee,s as De,t as Oe,u as ke,v as Ae}from"./dist-CpRYKJr0.js";function je(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var _,v,y,b,Me,Ne,x,Pe,S,Fe,Ie,C,Le,w,Re,ze,Be,T,Ve,He,Ue,E,We,Ge,Ke,qe,D,Je,O,Ye,k,Xe,A,Ze,j,Qe,M,$e,N,et,tt,P,F,nt,I,rt,L,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,R,ht,gt,_t,vt,yt=t((()=>{_=e(n(),1),c(),re(),u(),o(),a(),te(),Ae(),le(),f(),m(),v=r(),y=`Menubar`,[b,Me,Ne]=l(y),[x,Pe]=i(y,[Ne,de]),S=pe(),Fe=de(),[Ie,C]=x(y),Le=_.forwardRef((e,t)=>{let{__scopeMenubar:n,value:r,onValueChange:i,defaultValue:a,loop:o=!0,dir:s,...c}=e,l=ne(s),u=Fe(n),[d,f]=p({prop:r,onChange:i,defaultProp:a??``,caller:y}),[m,h]=_.useState(null);return(0,v.jsx)(Ie,{scope:n,value:d,onMenuOpen:_.useCallback(e=>{f(e),h(e)},[f]),onMenuClose:_.useCallback(()=>f(``),[f]),onMenuToggle:_.useCallback(e=>{f(t=>t?``:e),h(e)},[f]),dir:l,loop:o,children:(0,v.jsx)(b.Provider,{scope:n,children:(0,v.jsx)(b.Slot,{scope:n,children:(0,v.jsx)(ue,{asChild:!0,...u,orientation:`horizontal`,loop:o,dir:l,currentTabStopId:m,onCurrentTabStopIdChange:h,children:(0,v.jsx)(ee.div,{role:`menubar`,...c,ref:t})})})})})}),Le.displayName=y,w=`MenubarMenu`,[Re,ze]=x(w),Be=e=>{let{__scopeMenubar:t,value:n,...r}=e,i=h(),a=n||i||`LEGACY_REACT_AUTO_VALUE`,o=C(w,t),s=S(t),c=_.useRef(null),l=_.useRef(!1),u=o.value===a;return _.useEffect(()=>{u||(l.current=!1)},[u]),(0,v.jsx)(Re,{scope:t,value:a,triggerId:h(),triggerRef:c,contentId:h(),wasKeyboardTriggerOpenRef:l,children:(0,v.jsx)(_e,{...s,open:u,onOpenChange:e=>{e||o.onMenuClose()},modal:!1,dir:o.dir,...r})})},Be.displayName=w,T=`MenubarTrigger`,Ve=_.forwardRef((e,t)=>{let{__scopeMenubar:n,disabled:r=!1,...i}=e,a=Fe(n),o=S(n),c=C(T,n),l=ze(T,n),u=_.useRef(null),f=s(t,u,l.triggerRef),[p,m]=_.useState(!1),h=c.value===l.value;return(0,v.jsx)(b.ItemSlot,{scope:n,value:l.value,disabled:r,children:(0,v.jsx)(fe,{asChild:!0,...a,focusable:!r,tabStopId:l.value,children:(0,v.jsx)(Oe,{asChild:!0,...o,children:(0,v.jsx)(ee.button,{type:`button`,role:`menuitem`,id:l.triggerId,"aria-haspopup":`menu`,"aria-expanded":h,"aria-controls":h?l.contentId:void 0,"data-highlighted":p?``:void 0,"data-state":h?`open`:`closed`,"data-disabled":r?``:void 0,disabled:r,...i,ref:f,onPointerDown:d(e.onPointerDown,e=>{!r&&e.button===0&&e.ctrlKey===!1&&(c.onMenuOpen(l.value),h||e.preventDefault())}),onPointerEnter:d(e.onPointerEnter,()=>{c.value&&!h&&(c.onMenuOpen(l.value),u.current?.focus())}),onKeyDown:d(e.onKeyDown,e=>{r||([`Enter`,` `].includes(e.key)&&c.onMenuToggle(l.value),e.key===`ArrowDown`&&c.onMenuOpen(l.value),[`Enter`,` `,`ArrowDown`].includes(e.key)&&(l.wasKeyboardTriggerOpenRef.current=!0,e.preventDefault()))}),onFocus:d(e.onFocus,()=>m(!0)),onBlur:d(e.onBlur,()=>m(!1))})})})})}),Ve.displayName=T,He=`MenubarPortal`,Ue=e=>{let{__scopeMenubar:t,...n}=e,r=S(t);return(0,v.jsx)(xe,{...r,...n})},Ue.displayName=He,E=`MenubarContent`,We=_.forwardRef((e,t)=>{let{__scopeMenubar:n,align:r=`start`,...i}=e,a=S(n),o=C(E,n),s=ze(E,n),c=Me(n),l=_.useRef(!1);return(0,v.jsx)(be,{id:s.contentId,"aria-labelledby":s.triggerId,"data-radix-menubar-content":``,...a,...i,ref:t,align:r,onCloseAutoFocus:d(e.onCloseAutoFocus,e=>{!o.value&&!l.current&&s.triggerRef.current?.focus(),l.current=!1,e.preventDefault()}),onFocusOutside:d(e.onFocusOutside,e=>{let t=e.target;c().some(e=>e.ref.current?.contains(t))&&e.preventDefault()}),onInteractOutside:d(e.onInteractOutside,()=>{l.current=!0}),onEntryFocus:e=>{s.wasKeyboardTriggerOpenRef.current||e.preventDefault()},onKeyDown:d(e.onKeyDown,e=>{if([`ArrowRight`,`ArrowLeft`].includes(e.key)){let t=e.target,n=t.hasAttribute(`data-radix-menubar-subtrigger`),r=t.closest(`[data-radix-menubar-content]`)!==e.currentTarget,i=(o.dir===`rtl`?`ArrowRight`:`ArrowLeft`)===e.key;if(!i&&n||r&&i)return;let a=c().filter(e=>!e.disabled).map(e=>e.value);i&&a.reverse();let l=a.indexOf(s.value);a=o.loop?je(a,l+1):a.slice(l+1);let[u]=a;u&&o.onMenuOpen(u)}},{checkForDefaultPrevented:!1}),style:{...e.style,"--radix-menubar-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-menubar-content-available-width":`var(--radix-popper-available-width)`,"--radix-menubar-content-available-height":`var(--radix-popper-available-height)`,"--radix-menubar-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-menubar-trigger-height":`var(--radix-popper-anchor-height)`}})}),We.displayName=E,Ge=`MenubarGroup`,Ke=_.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=S(n);return(0,v.jsx)(me,{...i,...r,ref:t})}),Ke.displayName=Ge,qe=`MenubarLabel`,D=_.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=S(n);return(0,v.jsx)(he,{...i,...r,ref:t})}),D.displayName=qe,Je=`MenubarItem`,O=_.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=S(n);return(0,v.jsx)(we,{...i,...r,ref:t})}),O.displayName=Je,Ye=`MenubarCheckboxItem`,k=_.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=S(n);return(0,v.jsx)(Ee,{...i,...r,ref:t})}),k.displayName=Ye,Xe=`MenubarRadioGroup`,A=_.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=S(n);return(0,v.jsx)(ke,{...i,...r,ref:t})}),A.displayName=Xe,Ze=`MenubarRadioItem`,j=_.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=S(n);return(0,v.jsx)(ge,{...i,...r,ref:t})}),j.displayName=Ze,Qe=`MenubarItemIndicator`,M=_.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=S(n);return(0,v.jsx)(De,{...i,...r,ref:t})}),M.displayName=Qe,$e=`MenubarSeparator`,N=_.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=S(n);return(0,v.jsx)(Te,{...i,...r,ref:t})}),N.displayName=$e,et=`MenubarArrow`,tt=_.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=S(n);return(0,v.jsx)(Ce,{...i,...r,ref:t})}),tt.displayName=et,P=`MenubarSub`,F=e=>{let{__scopeMenubar:t,children:n,open:r,onOpenChange:i,defaultOpen:a}=e,o=S(t),[s,c]=p({prop:r,defaultProp:a??!1,onChange:i,caller:P});return(0,v.jsx)(Se,{...o,open:s,onOpenChange:c,children:n})},F.displayName=P,nt=`MenubarSubTrigger`,I=_.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=S(n);return(0,v.jsx)(ve,{"data-radix-menubar-subtrigger":``,...i,...r,ref:t})}),I.displayName=nt,rt=`MenubarSubContent`,L=_.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=S(n);return(0,v.jsx)(ye,{...i,"data-radix-menubar-content":``,...r,ref:t,style:{...e.style,"--radix-menubar-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-menubar-content-available-width":`var(--radix-popper-available-width)`,"--radix-menubar-content-available-height":`var(--radix-popper-available-height)`,"--radix-menubar-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-menubar-trigger-height":`var(--radix-popper-anchor-height)`}})}),L.displayName=rt,it=Le,at=Be,ot=Ve,st=Ue,ct=We,lt=Ke,ut=D,dt=O,ft=k,pt=A,mt=j,R=M,ht=N,gt=F,_t=I,vt=L}));function z({className:e,...t}){return(0,q.jsx)(it,{"data-slot":`menubar`,className:g(`bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-2xs`,e),...t})}function B({...e}){return(0,q.jsx)(at,{"data-slot":`menubar-menu`,...e})}function bt({...e}){return(0,q.jsx)(lt,{"data-slot":`menubar-group`,...e})}function xt({...e}){return(0,q.jsx)(st,{"data-slot":`menubar-portal`,...e})}function St({...e}){return(0,q.jsx)(pt,{"data-slot":`menubar-radio-group`,...e})}function V({className:e,...t}){return(0,q.jsx)(ot,{"data-slot":`menubar-trigger`,className:g(`focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-xs px-2 py-1 text-sm font-medium outline-hidden select-none`,e),...t})}function H({className:e,align:t=`start`,alignOffset:n=-4,sideOffset:r=8,...i}){return(0,q.jsx)(xt,{children:(0,q.jsx)(ct,{"data-slot":`menubar-content`,align:t,alignOffset:n,sideOffset:r,className:g(`bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-48 origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md`,e),...i})})}function U({className:e,inset:t,variant:n=`default`,...r}){return(0,q.jsx)(dt,{"data-slot":`menubar-item`,"data-inset":t,"data-variant":n,className:g(`focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive [svg]:*:data-[variant=destructive]:text-destructive! [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-xs px-2 py-1.5 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),...r})}function Ct({className:e,children:t,checked:n,...r}){return(0,q.jsxs)(ft,{"data-slot":`menubar-checkbox-item`,className:g(`focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),checked:n,...r,children:[(0,q.jsx)(`span`,{className:`pointer-events-none absolute left-2 flex size-3.5 items-center justify-center`,children:(0,q.jsx)(R,{children:(0,q.jsx)(oe,{className:`size-4`})})}),t]})}function W({className:e,children:t,...n}){return(0,q.jsxs)(mt,{"data-slot":`menubar-radio-item`,className:g(`focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),...n,children:[(0,q.jsx)(`span`,{className:`pointer-events-none absolute left-2 flex size-3.5 items-center justify-center`,children:(0,q.jsx)(R,{children:(0,q.jsx)(ie,{className:`size-2 fill-current`})})}),t]})}function wt({className:e,inset:t,...n}){return(0,q.jsx)(ut,{"data-slot":`menubar-label`,"data-inset":t,className:g(`px-2 py-1.5 text-sm font-medium data-inset:pl-8`,e),...n})}function G({className:e,...t}){return(0,q.jsx)(ht,{"data-slot":`menubar-separator`,className:g(`bg-border -mx-1 my-1 h-px`,e),...t})}function K({className:e,...t}){return(0,q.jsx)(`span`,{"data-slot":`menubar-shortcut`,className:g(`text-muted-foreground ml-auto text-xs tracking-widest`,e),...t})}function Tt({...e}){return(0,q.jsx)(gt,{"data-slot":`menubar-sub`,...e})}function Et({className:e,inset:t,children:n,...r}){return(0,q.jsxs)(_t,{"data-slot":`menubar-sub-trigger`,"data-inset":t,className:g(`focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-xs px-2 py-1.5 text-sm outline-hidden select-none data-inset:pl-8`,e),...r,children:[n,(0,q.jsx)(ae,{className:`ml-auto h-4 w-4`})]})}function Dt({className:e,...t}){return(0,q.jsx)(vt,{"data-slot":`menubar-sub-content`,className:g(`bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg`,e),...t})}var q,Ot=t((()=>{n(),yt(),se(),ce(),q=r(),z.__docgenInfo={description:``,methods:[],displayName:`Menubar`},xt.__docgenInfo={description:``,methods:[],displayName:`MenubarPortal`},B.__docgenInfo={description:``,methods:[],displayName:`MenubarMenu`},V.__docgenInfo={description:``,methods:[],displayName:`MenubarTrigger`},H.__docgenInfo={description:``,methods:[],displayName:`MenubarContent`,props:{align:{defaultValue:{value:`"start"`,computed:!1},required:!1},alignOffset:{defaultValue:{value:`-4`,computed:!1},required:!1},sideOffset:{defaultValue:{value:`8`,computed:!1},required:!1}}},bt.__docgenInfo={description:``,methods:[],displayName:`MenubarGroup`},G.__docgenInfo={description:``,methods:[],displayName:`MenubarSeparator`},wt.__docgenInfo={description:``,methods:[],displayName:`MenubarLabel`,props:{inset:{required:!1,tsType:{name:`boolean`},description:``}}},U.__docgenInfo={description:``,methods:[],displayName:`MenubarItem`,props:{inset:{required:!1,tsType:{name:`boolean`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`"default" | "destructive"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"destructive"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}}}},K.__docgenInfo={description:``,methods:[],displayName:`MenubarShortcut`},Ct.__docgenInfo={description:``,methods:[],displayName:`MenubarCheckboxItem`},St.__docgenInfo={description:``,methods:[],displayName:`MenubarRadioGroup`},W.__docgenInfo={description:``,methods:[],displayName:`MenubarRadioItem`},Tt.__docgenInfo={description:``,methods:[],displayName:`MenubarSub`},Et.__docgenInfo={description:``,methods:[],displayName:`MenubarSubTrigger`,props:{inset:{required:!1,tsType:{name:`boolean`},description:``}}},Dt.__docgenInfo={description:``,methods:[],displayName:`MenubarSubContent`}})),J,Y,kt,X,Z,Q,$,At;t((()=>{Ot(),J=e(n(),1),Y=r(),kt={title:`Components/Menubar`,component:z,parameters:{layout:`centered`},tags:[`autodocs`]},X={render:()=>(0,Y.jsxs)(z,{children:[(0,Y.jsxs)(B,{children:[(0,Y.jsx)(V,{children:`File`}),(0,Y.jsxs)(H,{children:[(0,Y.jsxs)(U,{children:[`New File `,(0,Y.jsx)(K,{children:`⌘N`})]}),(0,Y.jsxs)(U,{children:[`Open `,(0,Y.jsx)(K,{children:`⌘O`})]}),(0,Y.jsx)(G,{}),(0,Y.jsxs)(U,{children:[`Save `,(0,Y.jsx)(K,{children:`⌘S`})]})]})]}),(0,Y.jsxs)(B,{children:[(0,Y.jsx)(V,{children:`Edit`}),(0,Y.jsxs)(H,{children:[(0,Y.jsxs)(U,{children:[`Undo `,(0,Y.jsx)(K,{children:`⌘Z`})]}),(0,Y.jsxs)(U,{children:[`Redo `,(0,Y.jsx)(K,{children:`⇧⌘Z`})]}),(0,Y.jsx)(G,{}),(0,Y.jsxs)(U,{children:[`Cut `,(0,Y.jsx)(K,{children:`⌘X`})]}),(0,Y.jsxs)(U,{children:[`Copy `,(0,Y.jsx)(K,{children:`⌘C`})]}),(0,Y.jsxs)(U,{children:[`Paste `,(0,Y.jsx)(K,{children:`⌘V`})]})]})]}),(0,Y.jsxs)(B,{children:[(0,Y.jsx)(V,{children:`View`}),(0,Y.jsxs)(H,{children:[(0,Y.jsx)(U,{children:`Zoom In`}),(0,Y.jsx)(U,{children:`Zoom Out`}),(0,Y.jsx)(U,{children:`Reset Zoom`})]})]})]})},Z={render:()=>{let[e,t]=(0,J.useState)(!0),[n,r]=(0,J.useState)(!1);return(0,Y.jsx)(z,{children:(0,Y.jsxs)(B,{children:[(0,Y.jsx)(V,{children:`View`}),(0,Y.jsxs)(H,{children:[(0,Y.jsx)(Ct,{checked:e,onCheckedChange:t,children:`Status Bar`}),(0,Y.jsx)(Ct,{checked:n,onCheckedChange:r,children:`Panel`})]})]})})}},Q={render:()=>{let[e,t]=(0,J.useState)(`light`);return(0,Y.jsx)(z,{children:(0,Y.jsxs)(B,{children:[(0,Y.jsx)(V,{children:`Theme`}),(0,Y.jsx)(H,{children:(0,Y.jsxs)(St,{value:e,onValueChange:t,children:[(0,Y.jsx)(W,{value:`light`,children:`Light`}),(0,Y.jsx)(W,{value:`dark`,children:`Dark`}),(0,Y.jsx)(W,{value:`system`,children:`System`})]})})]})})}},$={render:()=>(0,Y.jsxs)(z,{children:[(0,Y.jsxs)(B,{children:[(0,Y.jsx)(V,{children:`File`}),(0,Y.jsxs)(H,{children:[(0,Y.jsxs)(U,{children:[`New Tab `,(0,Y.jsx)(K,{children:`⌘T`})]}),(0,Y.jsxs)(U,{children:[`New Window `,(0,Y.jsx)(K,{children:`⌘N`})]}),(0,Y.jsx)(G,{}),(0,Y.jsx)(U,{children:`Open File...`}),(0,Y.jsx)(U,{children:`Open Folder...`}),(0,Y.jsx)(G,{}),(0,Y.jsxs)(U,{children:[`Save `,(0,Y.jsx)(K,{children:`⌘S`})]}),(0,Y.jsx)(U,{children:`Save As...`})]})]}),(0,Y.jsxs)(B,{children:[(0,Y.jsx)(V,{children:`Edit`}),(0,Y.jsxs)(H,{children:[(0,Y.jsx)(U,{children:`Undo`}),(0,Y.jsx)(U,{children:`Redo`}),(0,Y.jsx)(G,{}),(0,Y.jsx)(U,{children:`Cut`}),(0,Y.jsx)(U,{children:`Copy`}),(0,Y.jsx)(U,{children:`Paste`})]})]}),(0,Y.jsxs)(B,{children:[(0,Y.jsx)(V,{children:`View`}),(0,Y.jsxs)(H,{children:[(0,Y.jsx)(U,{children:`Command Palette`}),(0,Y.jsx)(G,{}),(0,Y.jsx)(U,{children:`Explorer`}),(0,Y.jsx)(U,{children:`Search`}),(0,Y.jsx)(U,{children:`Source Control`})]})]}),(0,Y.jsxs)(B,{children:[(0,Y.jsx)(V,{children:`Help`}),(0,Y.jsxs)(H,{children:[(0,Y.jsx)(U,{children:`Documentation`}),(0,Y.jsx)(U,{children:`Keyboard Shortcuts`}),(0,Y.jsx)(G,{}),(0,Y.jsx)(U,{children:`Report Issue`})]})]})]})},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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