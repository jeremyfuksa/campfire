import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{n as i,r as a}from"./dist-Dlyn9OaY.js";import{n as o,r as s}from"./dist-D7HkfZMy.js";import{n as c,t as l}from"./dist-Cxw2ZfM3.js";import{a as u,i as d,r as f,t as ee}from"./dist-BK-Z8wev.js";import{n as te,t as p}from"./dist-CVJt7rz-.js";import{n as m,t as ne}from"./dist-CF8blSvU.js";import{n as re,t as ie}from"./dist-DhTwOzzW.js";import{n as ae,t as oe}from"./check-B4Mqbaut.js";import{n as se}from"./chevron-right-ByLsb6_d.js";import{n as ce,t as le}from"./circle-BnbtkmAq.js";import{n as ue,t as h}from"./utils-DwVtoTFj.js";import{i as de,n as fe,r as pe,t as me}from"./dist-CiQSNTz02.js";import{_ as he,a as ge,c as _e,d as ve,f as ye,g as be,h as xe,i as Se,l as Ce,m as we,n as Te,o as Ee,p as De,r as Oe,s as ke,t as Ae,u as je,v as Me}from"./dist-DGpGBjnQ.js";function Ne(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var g,_,v,y,Pe,Fe,b,Ie,x,S,Le,C,w,T,Re,E,D,O,k,ze,A,j,M,Be,Ve,He,Ue,We,N,Ge,P,Ke,F,qe,I,Je,L,Ye,R,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt;function ht(){return(ht=t((()=>{g=e(n(),1),c(),ie(),u(),o(),a(),ne(),Me(),de(),f(),p(),_=r(),v=`Menubar`,[y,Pe,Fe]=l(v),[b,Ie]=i(v,[Fe,pe]),x=he(),S=pe(),[Le,C]=b(v),w=g.forwardRef((e,t)=>{let{__scopeMenubar:n,value:r,onValueChange:i,defaultValue:a,loop:o=!0,dir:s,...c}=e,l=re(s),u=S(n),[d,f]=te({prop:r,onChange:i,defaultProp:a??``,caller:v}),[p,m]=g.useState(null);return(0,_.jsx)(Le,{scope:n,value:d,onMenuOpen:g.useCallback(e=>{f(e),m(e)},[f]),onMenuClose:g.useCallback(()=>f(``),[f]),onMenuToggle:g.useCallback(e=>{f(t=>t?``:e),m(e)},[f]),dir:l,loop:o,children:(0,_.jsx)(y.Provider,{scope:n,children:(0,_.jsx)(y.Slot,{scope:n,children:(0,_.jsx)(fe,{asChild:!0,...u,orientation:`horizontal`,loop:o,dir:l,currentTabStopId:p,onCurrentTabStopIdChange:m,children:(0,_.jsx)(ee.div,{role:`menubar`,...c,ref:t})})})})})}),w.displayName=v,T=`MenubarMenu`,[Re,E]=b(T),D=e=>{let{__scopeMenubar:t,value:n,...r}=e,i=m(),a=n||i||`LEGACY_REACT_AUTO_VALUE`,o=C(T,t),s=x(t),c=g.useRef(null),l=g.useRef(!1),u=o.value===a;return g.useEffect(()=>{u||(l.current=!1)},[u]),(0,_.jsx)(Re,{scope:t,value:a,triggerId:m(),triggerRef:c,contentId:m(),wasKeyboardTriggerOpenRef:l,children:(0,_.jsx)(ye,{...s,open:u,onOpenChange:e=>{e||o.onMenuClose()},modal:!1,dir:o.dir,...r})})},D.displayName=T,O=`MenubarTrigger`,k=g.forwardRef((e,t)=>{let{__scopeMenubar:n,disabled:r=!1,...i}=e,a=S(n),o=x(n),c=C(O,n),l=E(O,n),u=g.useRef(null),f=s(t,u,l.triggerRef),[te,p]=g.useState(!1),m=c.value===l.value;return(0,_.jsx)(y.ItemSlot,{scope:n,value:l.value,disabled:r,children:(0,_.jsx)(me,{asChild:!0,...a,focusable:!r,tabStopId:l.value,children:(0,_.jsx)(Ae,{asChild:!0,...o,children:(0,_.jsx)(ee.button,{type:`button`,role:`menuitem`,id:l.triggerId,"aria-haspopup":`menu`,"aria-expanded":m,"aria-controls":m?l.contentId:void 0,"data-highlighted":te?``:void 0,"data-state":m?`open`:`closed`,"data-disabled":r?``:void 0,disabled:r,...i,ref:f,onPointerDown:d(e.onPointerDown,e=>{!r&&e.button===0&&e.ctrlKey===!1&&(c.onMenuOpen(l.value),m||e.preventDefault())}),onPointerEnter:d(e.onPointerEnter,()=>{c.value&&!m&&(c.onMenuOpen(l.value),u.current?.focus())}),onKeyDown:d(e.onKeyDown,e=>{r||([`Enter`,` `].includes(e.key)&&c.onMenuToggle(l.value),e.key===`ArrowDown`&&c.onMenuOpen(l.value),[`Enter`,` `,`ArrowDown`].includes(e.key)&&(l.wasKeyboardTriggerOpenRef.current=!0,e.preventDefault()))}),onFocus:d(e.onFocus,()=>p(!0)),onBlur:d(e.onBlur,()=>p(!1))})})})})}),k.displayName=O,ze=`MenubarPortal`,A=e=>{let{__scopeMenubar:t,...n}=e,r=x(t);return(0,_.jsx)(Ce,{...r,...n})},A.displayName=ze,j=`MenubarContent`,M=g.forwardRef((e,t)=>{let{__scopeMenubar:n,align:r=`start`,...i}=e,a=x(n),o=C(j,n),s=E(j,n),c=Pe(n),l=g.useRef(!1);return(0,_.jsx)(Se,{id:s.contentId,"aria-labelledby":s.triggerId,"data-radix-menubar-content":``,...a,...i,ref:t,align:r,onCloseAutoFocus:d(e.onCloseAutoFocus,e=>{!o.value&&!l.current&&s.triggerRef.current?.focus(),l.current=!1,e.preventDefault()}),onFocusOutside:d(e.onFocusOutside,e=>{let t=e.target;c().some(e=>e.ref.current?.contains(t))&&e.preventDefault()}),onInteractOutside:d(e.onInteractOutside,()=>{l.current=!0}),onEntryFocus:e=>{s.wasKeyboardTriggerOpenRef.current||e.preventDefault()},onKeyDown:d(e.onKeyDown,e=>{if([`ArrowRight`,`ArrowLeft`].includes(e.key)){let t=e.target,n=t.hasAttribute(`data-radix-menubar-subtrigger`),r=t.closest(`[data-radix-menubar-content]`)!==e.currentTarget,i=(o.dir===`rtl`?`ArrowRight`:`ArrowLeft`)===e.key;if(!i&&n||r&&i)return;let a=c().filter(e=>!e.disabled).map(e=>e.value);i&&a.reverse();let l=a.indexOf(s.value);a=o.loop?Ne(a,l+1):a.slice(l+1);let[u]=a;u&&o.onMenuOpen(u)}},{checkForDefaultPrevented:!1}),style:{...e.style,"--radix-menubar-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-menubar-content-available-width":`var(--radix-popper-available-width)`,"--radix-menubar-content-available-height":`var(--radix-popper-available-height)`,"--radix-menubar-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-menubar-trigger-height":`var(--radix-popper-anchor-height)`}})}),M.displayName=j,Be=`MenubarGroup`,Ve=g.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=x(n);return(0,_.jsx)(ge,{...i,...r,ref:t})}),Ve.displayName=Be,He=`MenubarLabel`,Ue=g.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=x(n);return(0,_.jsx)(_e,{...i,...r,ref:t})}),Ue.displayName=He,We=`MenubarItem`,N=g.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=x(n);return(0,_.jsx)(Ee,{...i,...r,ref:t})}),N.displayName=We,Ge=`MenubarCheckboxItem`,P=g.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=x(n);return(0,_.jsx)(Oe,{...i,...r,ref:t})}),P.displayName=Ge,Ke=`MenubarRadioGroup`,F=g.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=x(n);return(0,_.jsx)(je,{...i,...r,ref:t})}),F.displayName=Ke,qe=`MenubarRadioItem`,I=g.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=x(n);return(0,_.jsx)(ve,{...i,...r,ref:t})}),I.displayName=qe,Je=`MenubarItemIndicator`,L=g.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=x(n);return(0,_.jsx)(ke,{...i,...r,ref:t})}),L.displayName=Je,Ye=`MenubarSeparator`,R=g.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=x(n);return(0,_.jsx)(De,{...i,...r,ref:t})}),R.displayName=Ye,Xe=`MenubarArrow`,Ze=g.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=x(n);return(0,_.jsx)(Te,{...i,...r,ref:t})}),Ze.displayName=Xe,Qe=`MenubarSub`,$e=e=>{let{__scopeMenubar:t,children:n,open:r,onOpenChange:i,defaultOpen:a}=e,o=x(t),[s,c]=te({prop:r,defaultProp:a??!1,onChange:i,caller:Qe});return(0,_.jsx)(we,{...o,open:s,onOpenChange:c,children:n})},$e.displayName=Qe,et=`MenubarSubTrigger`,tt=g.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=x(n);return(0,_.jsx)(be,{"data-radix-menubar-subtrigger":``,...i,...r,ref:t})}),tt.displayName=et,nt=`MenubarSubContent`,rt=g.forwardRef((e,t)=>{let{__scopeMenubar:n,...r}=e,i=x(n);return(0,_.jsx)(xe,{...i,"data-radix-menubar-content":``,...r,ref:t,style:{...e.style,"--radix-menubar-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-menubar-content-available-width":`var(--radix-popper-available-width)`,"--radix-menubar-content-available-height":`var(--radix-popper-available-height)`,"--radix-menubar-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-menubar-trigger-height":`var(--radix-popper-anchor-height)`}})}),rt.displayName=nt,it=w,at=D,ot=k,st=A,ct=M,lt=N,ut=P,dt=F,ft=I,pt=L,mt=R})))()}function z({className:e,...t}){return(0,q.jsx)(it,{"data-slot":`menubar`,className:h(`bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-2xs`,e),...t})}function B({...e}){return(0,q.jsx)(at,{"data-slot":`menubar-menu`,...e})}function gt({...e}){return(0,q.jsx)(st,{"data-slot":`menubar-portal`,...e})}function _t({...e}){return(0,q.jsx)(dt,{"data-slot":`menubar-radio-group`,...e})}function V({className:e,...t}){return(0,q.jsx)(ot,{"data-slot":`menubar-trigger`,className:h(`focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-xs px-2 py-1 text-sm font-medium outline-hidden select-none`,e),...t})}function H({className:e,align:t=`start`,alignOffset:n=-4,sideOffset:r=8,...i}){return(0,q.jsx)(gt,{children:(0,q.jsx)(ct,{"data-slot":`menubar-content`,align:t,alignOffset:n,sideOffset:r,className:h(`bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-48 origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md`,e),...i})})}function U({className:e,inset:t,variant:n=`default`,...r}){return(0,q.jsx)(lt,{"data-slot":`menubar-item`,"data-inset":t,"data-variant":n,className:h(`focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive [svg]:*:data-[variant=destructive]:text-destructive! [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-xs px-2 py-1.5 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),...r})}function vt({className:e,children:t,checked:n,...r}){return(0,q.jsxs)(ut,{"data-slot":`menubar-checkbox-item`,className:h(`focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),checked:n,...r,children:[(0,q.jsx)(`span`,{className:`pointer-events-none absolute left-2 flex size-3.5 items-center justify-center`,children:(0,q.jsx)(pt,{children:(0,q.jsx)(oe,{className:`size-4`})})}),t]})}function W({className:e,children:t,...n}){return(0,q.jsxs)(ft,{"data-slot":`menubar-radio-item`,className:h(`focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),...n,children:[(0,q.jsx)(`span`,{className:`pointer-events-none absolute left-2 flex size-3.5 items-center justify-center`,children:(0,q.jsx)(pt,{children:(0,q.jsx)(le,{className:`size-2 fill-current`})})}),t]})}function G({className:e,...t}){return(0,q.jsx)(mt,{"data-slot":`menubar-separator`,className:h(`bg-border -mx-1 my-1 h-px`,e),...t})}function K({className:e,...t}){return(0,q.jsx)(`span`,{"data-slot":`menubar-shortcut`,className:h(`text-muted-foreground ml-auto text-xs tracking-widest`,e),...t})}var q;function yt(){return(yt=t((()=>{n(),ht(),ae(),se(),ce(),ue(),q=r(),z.__docgenInfo={description:``,methods:[],displayName:`Menubar`},gt.__docgenInfo={description:``,methods:[],displayName:`MenubarPortal`},B.__docgenInfo={description:``,methods:[],displayName:`MenubarMenu`},V.__docgenInfo={description:``,methods:[],displayName:`MenubarTrigger`},H.__docgenInfo={description:``,methods:[],displayName:`MenubarContent`,props:{align:{defaultValue:{value:`"start"`,computed:!1},required:!1},alignOffset:{defaultValue:{value:`-4`,computed:!1},required:!1},sideOffset:{defaultValue:{value:`8`,computed:!1},required:!1}}},G.__docgenInfo={description:``,methods:[],displayName:`MenubarSeparator`},U.__docgenInfo={description:``,methods:[],displayName:`MenubarItem`,props:{inset:{required:!1,tsType:{name:`boolean`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`"default" | "destructive"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"destructive"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}}}},K.__docgenInfo={description:``,methods:[],displayName:`MenubarShortcut`},vt.__docgenInfo={description:``,methods:[],displayName:`MenubarCheckboxItem`},_t.__docgenInfo={description:``,methods:[],displayName:`MenubarRadioGroup`},W.__docgenInfo={description:``,methods:[],displayName:`MenubarRadioItem`}})))()}var J,Y,bt,X,Z,Q,$,xt;function St(){return(St=t((()=>{yt(),J=n(),Y=r(),bt={title:`Components/Menubar`,component:z,parameters:{layout:`centered`},tags:[`autodocs`]},X={render:()=>(0,Y.jsxs)(z,{children:[(0,Y.jsxs)(B,{children:[(0,Y.jsx)(V,{children:`File`}),(0,Y.jsxs)(H,{children:[(0,Y.jsxs)(U,{children:[`New File `,(0,Y.jsx)(K,{children:`⌘N`})]}),(0,Y.jsxs)(U,{children:[`Open `,(0,Y.jsx)(K,{children:`⌘O`})]}),(0,Y.jsx)(G,{}),(0,Y.jsxs)(U,{children:[`Save `,(0,Y.jsx)(K,{children:`⌘S`})]})]})]}),(0,Y.jsxs)(B,{children:[(0,Y.jsx)(V,{children:`Edit`}),(0,Y.jsxs)(H,{children:[(0,Y.jsxs)(U,{children:[`Undo `,(0,Y.jsx)(K,{children:`⌘Z`})]}),(0,Y.jsxs)(U,{children:[`Redo `,(0,Y.jsx)(K,{children:`⇧⌘Z`})]}),(0,Y.jsx)(G,{}),(0,Y.jsxs)(U,{children:[`Cut `,(0,Y.jsx)(K,{children:`⌘X`})]}),(0,Y.jsxs)(U,{children:[`Copy `,(0,Y.jsx)(K,{children:`⌘C`})]}),(0,Y.jsxs)(U,{children:[`Paste `,(0,Y.jsx)(K,{children:`⌘V`})]})]})]}),(0,Y.jsxs)(B,{children:[(0,Y.jsx)(V,{children:`View`}),(0,Y.jsxs)(H,{children:[(0,Y.jsx)(U,{children:`Zoom In`}),(0,Y.jsx)(U,{children:`Zoom Out`}),(0,Y.jsx)(U,{children:`Reset Zoom`})]})]})]})},Z={render:()=>{let[e,t]=(0,J.useState)(!0),[n,r]=(0,J.useState)(!1);return(0,Y.jsx)(z,{children:(0,Y.jsxs)(B,{children:[(0,Y.jsx)(V,{children:`View`}),(0,Y.jsxs)(H,{children:[(0,Y.jsx)(vt,{checked:e,onCheckedChange:t,children:`Status Bar`}),(0,Y.jsx)(vt,{checked:n,onCheckedChange:r,children:`Panel`})]})]})})}},Q={render:()=>{let[e,t]=(0,J.useState)(`light`);return(0,Y.jsx)(z,{children:(0,Y.jsxs)(B,{children:[(0,Y.jsx)(V,{children:`Theme`}),(0,Y.jsx)(H,{children:(0,Y.jsxs)(_t,{value:e,onValueChange:t,children:[(0,Y.jsx)(W,{value:`light`,children:`Light`}),(0,Y.jsx)(W,{value:`dark`,children:`Dark`}),(0,Y.jsx)(W,{value:`system`,children:`System`})]})})]})})}},$={render:()=>(0,Y.jsxs)(z,{children:[(0,Y.jsxs)(B,{children:[(0,Y.jsx)(V,{children:`File`}),(0,Y.jsxs)(H,{children:[(0,Y.jsxs)(U,{children:[`New Tab `,(0,Y.jsx)(K,{children:`⌘T`})]}),(0,Y.jsxs)(U,{children:[`New Window `,(0,Y.jsx)(K,{children:`⌘N`})]}),(0,Y.jsx)(G,{}),(0,Y.jsx)(U,{children:`Open File...`}),(0,Y.jsx)(U,{children:`Open Folder...`}),(0,Y.jsx)(G,{}),(0,Y.jsxs)(U,{children:[`Save `,(0,Y.jsx)(K,{children:`⌘S`})]}),(0,Y.jsx)(U,{children:`Save As...`})]})]}),(0,Y.jsxs)(B,{children:[(0,Y.jsx)(V,{children:`Edit`}),(0,Y.jsxs)(H,{children:[(0,Y.jsx)(U,{children:`Undo`}),(0,Y.jsx)(U,{children:`Redo`}),(0,Y.jsx)(G,{}),(0,Y.jsx)(U,{children:`Cut`}),(0,Y.jsx)(U,{children:`Copy`}),(0,Y.jsx)(U,{children:`Paste`})]})]}),(0,Y.jsxs)(B,{children:[(0,Y.jsx)(V,{children:`View`}),(0,Y.jsxs)(H,{children:[(0,Y.jsx)(U,{children:`Command Palette`}),(0,Y.jsx)(G,{}),(0,Y.jsx)(U,{children:`Explorer`}),(0,Y.jsx)(U,{children:`Search`}),(0,Y.jsx)(U,{children:`Source Control`})]})]}),(0,Y.jsxs)(B,{children:[(0,Y.jsx)(V,{children:`Help`}),(0,Y.jsxs)(H,{children:[(0,Y.jsx)(U,{children:`Documentation`}),(0,Y.jsx)(U,{children:`Keyboard Shortcuts`}),(0,Y.jsx)(G,{}),(0,Y.jsx)(U,{children:`Report Issue`})]})]})]})},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},xt=[`Default`,`WithCheckboxes`,`WithRadio`,`ApplicationMenu`]})))()}St();export{$ as ApplicationMenu,X as Default,Z as WithCheckboxes,Q as WithRadio,xt as __namedExportsOrder,bt as default};