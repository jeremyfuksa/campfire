import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{n as i,r as a}from"./dist-DIs3RLZS.js";import{a as o,i as s,r as c,t as l}from"./dist-BEqORXIG.js";import{n as u,t as ee}from"./dist-Vz0ZWiBO.js";import{Q as d,R as f,W as te,it as ne,p as re,q as ie,s as ae,st as oe,t as se,x as ce}from"./lucide-react-CRUNCA_B.js";import{n as le,t as p}from"./utils-D2Sa0ztS.js";import{n as ue,t as de}from"./dist-W4dgXzC1.js";import{_ as fe,a as pe,c as me,d as he,f as ge,g as _e,h as ve,i as ye,l as be,m as xe,n as Se,o as Ce,p as we,r as Te,s as Ee,t as De,u as Oe,v as ke}from"./dist-CpRYKJr0.js";function m(e){return t=>t.pointerType===`mouse`?void 0:e(t)}var h,g,_,Ae,je,v,Me,y,b,x,S,Ne,C,w,T,Pe,E,Fe,D,Ie,O,Le,k,Re,A,ze,j,Be,M,Ve,N,He,Ue,P,F,We,I,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct=t((()=>{h=e(n(),1),o(),a(),c(),ke(),de(),ee(),g=r(),_=`ContextMenu`,[Ae,je]=i(_,[fe]),v=fe(),[Me,y]=Ae(_),b=e=>{let{__scopeContextMenu:t,children:n,onOpenChange:r,dir:i,modal:a=!0}=e,[o,s]=h.useState(!1),c=v(t),l=ue(r),u=h.useCallback(e=>{s(e),l(e)},[l]);return(0,g.jsx)(Me,{scope:t,open:o,onOpenChange:u,modal:a,children:(0,g.jsx)(ge,{...c,dir:i,open:o,onOpenChange:u,modal:a,children:n})})},b.displayName=_,x=`ContextMenuTrigger`,S=h.forwardRef((e,t)=>{let{__scopeContextMenu:n,disabled:r=!1,...i}=e,a=y(x,n),o=v(n),c=h.useRef({x:0,y:0}),u=h.useRef({getBoundingClientRect:()=>DOMRect.fromRect({width:0,height:0,...c.current})}),ee=h.useRef(0),d=h.useCallback(()=>window.clearTimeout(ee.current),[]),f=e=>{c.current={x:e.clientX,y:e.clientY},a.onOpenChange(!0)};return h.useEffect(()=>d,[d]),h.useEffect(()=>void(r&&d()),[r,d]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(De,{...o,virtualRef:u}),(0,g.jsx)(l.span,{"data-state":a.open?`open`:`closed`,"data-disabled":r?``:void 0,...i,ref:t,style:{WebkitTouchCallout:`none`,...e.style},onContextMenu:r?e.onContextMenu:s(e.onContextMenu,e=>{d(),f(e),e.preventDefault()}),onPointerDown:r?e.onPointerDown:s(e.onPointerDown,m(e=>{d(),ee.current=window.setTimeout(()=>f(e),700)})),onPointerMove:r?e.onPointerMove:s(e.onPointerMove,m(d)),onPointerCancel:r?e.onPointerCancel:s(e.onPointerCancel,m(d)),onPointerUp:r?e.onPointerUp:s(e.onPointerUp,m(d))})]})}),S.displayName=x,Ne=`ContextMenuPortal`,C=e=>{let{__scopeContextMenu:t,...n}=e,r=v(t);return(0,g.jsx)(be,{...r,...n})},C.displayName=Ne,w=`ContextMenuContent`,T=h.forwardRef((e,t)=>{let{__scopeContextMenu:n,...r}=e,i=y(w,n),a=v(n),o=h.useRef(!1);return(0,g.jsx)(ye,{...a,...r,ref:t,side:`right`,sideOffset:2,align:`start`,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),!t.defaultPrevented&&o.current&&t.preventDefault(),o.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),!t.defaultPrevented&&!i.modal&&(o.current=!0)},style:{...e.style,"--radix-context-menu-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-context-menu-content-available-width":`var(--radix-popper-available-width)`,"--radix-context-menu-content-available-height":`var(--radix-popper-available-height)`,"--radix-context-menu-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-context-menu-trigger-height":`var(--radix-popper-anchor-height)`}})}),T.displayName=w,Pe=`ContextMenuGroup`,E=h.forwardRef((e,t)=>{let{__scopeContextMenu:n,...r}=e,i=v(n);return(0,g.jsx)(pe,{...i,...r,ref:t})}),E.displayName=Pe,Fe=`ContextMenuLabel`,D=h.forwardRef((e,t)=>{let{__scopeContextMenu:n,...r}=e,i=v(n);return(0,g.jsx)(me,{...i,...r,ref:t})}),D.displayName=Fe,Ie=`ContextMenuItem`,O=h.forwardRef((e,t)=>{let{__scopeContextMenu:n,...r}=e,i=v(n);return(0,g.jsx)(Ce,{...i,...r,ref:t})}),O.displayName=Ie,Le=`ContextMenuCheckboxItem`,k=h.forwardRef((e,t)=>{let{__scopeContextMenu:n,...r}=e,i=v(n);return(0,g.jsx)(Te,{...i,...r,ref:t})}),k.displayName=Le,Re=`ContextMenuRadioGroup`,A=h.forwardRef((e,t)=>{let{__scopeContextMenu:n,...r}=e,i=v(n);return(0,g.jsx)(Oe,{...i,...r,ref:t})}),A.displayName=Re,ze=`ContextMenuRadioItem`,j=h.forwardRef((e,t)=>{let{__scopeContextMenu:n,...r}=e,i=v(n);return(0,g.jsx)(he,{...i,...r,ref:t})}),j.displayName=ze,Be=`ContextMenuItemIndicator`,M=h.forwardRef((e,t)=>{let{__scopeContextMenu:n,...r}=e,i=v(n);return(0,g.jsx)(Ee,{...i,...r,ref:t})}),M.displayName=Be,Ve=`ContextMenuSeparator`,N=h.forwardRef((e,t)=>{let{__scopeContextMenu:n,...r}=e,i=v(n);return(0,g.jsx)(we,{...i,...r,ref:t})}),N.displayName=Ve,He=`ContextMenuArrow`,Ue=h.forwardRef((e,t)=>{let{__scopeContextMenu:n,...r}=e,i=v(n);return(0,g.jsx)(Se,{...i,...r,ref:t})}),Ue.displayName=He,P=`ContextMenuSub`,F=e=>{let{__scopeContextMenu:t,children:n,onOpenChange:r,open:i,defaultOpen:a}=e,o=v(t),[s,c]=u({prop:i,defaultProp:a??!1,onChange:r,caller:P});return(0,g.jsx)(xe,{...o,open:s,onOpenChange:c,children:n})},F.displayName=P,We=`ContextMenuSubTrigger`,I=h.forwardRef((e,t)=>{let{__scopeContextMenu:n,...r}=e,i=v(n);return(0,g.jsx)(_e,{...i,...r,ref:t})}),I.displayName=We,Ge=`ContextMenuSubContent`,Ke=h.forwardRef((e,t)=>{let{__scopeContextMenu:n,...r}=e,i=v(n);return(0,g.jsx)(ve,{...i,...r,ref:t,style:{...e.style,"--radix-context-menu-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-context-menu-content-available-width":`var(--radix-popper-available-width)`,"--radix-context-menu-content-available-height":`var(--radix-popper-available-height)`,"--radix-context-menu-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-context-menu-trigger-height":`var(--radix-popper-anchor-height)`}})}),Ke.displayName=Ge,qe=b,Je=S,Ye=C,Xe=T,Ze=E,Qe=D,$e=O,et=k,tt=A,nt=j,rt=M,it=N,at=F,ot=I,st=Ke}));function L({...e}){return(0,G.jsx)(qe,{"data-slot":`context-menu`,...e})}function R({...e}){return(0,G.jsx)(Je,{"data-slot":`context-menu-trigger`,...e})}function lt({...e}){return(0,G.jsx)(Ze,{"data-slot":`context-menu-group`,...e})}function ut({...e}){return(0,G.jsx)(Ye,{"data-slot":`context-menu-portal`,...e})}function dt({...e}){return(0,G.jsx)(at,{"data-slot":`context-menu-sub`,...e})}function ft({...e}){return(0,G.jsx)(tt,{"data-slot":`context-menu-radio-group`,...e})}function pt({className:e,inset:t,children:n,...r}){return(0,G.jsxs)(ot,{"data-slot":`context-menu-sub-trigger`,"data-inset":t,className:p(`focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-xs px-2 py-1.5 text-sm outline-hidden select-none data-inset:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),...r,children:[n,(0,G.jsx)(ne,{className:`ml-auto`})]})}function mt({className:e,...t}){return(0,G.jsx)(st,{"data-slot":`context-menu-sub-content`,className:p(`bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg`,e),...t})}function z({className:e,...t}){return(0,G.jsx)(Ye,{children:(0,G.jsx)(Xe,{"data-slot":`context-menu-content`,className:p(`bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-32 origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md`,e),...t})})}function B({className:e,inset:t,variant:n=`default`,...r}){return(0,G.jsx)($e,{"data-slot":`context-menu-item`,"data-inset":t,"data-variant":n,className:p(`focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive [svg]:*:data-[variant=destructive]:text-destructive! [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-xs px-2 py-1.5 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),...r})}function ht({className:e,children:t,checked:n,...r}){return(0,G.jsxs)(et,{"data-slot":`context-menu-checkbox-item`,className:p(`focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),checked:n,...r,children:[(0,G.jsx)(`span`,{className:`pointer-events-none absolute left-2 flex size-3.5 items-center justify-center`,children:(0,G.jsx)(rt,{children:(0,G.jsx)(oe,{className:`size-4`})})}),t]})}function V({className:e,children:t,...n}){return(0,G.jsxs)(nt,{"data-slot":`context-menu-radio-item`,className:p(`focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),...n,children:[(0,G.jsx)(`span`,{className:`pointer-events-none absolute left-2 flex size-3.5 items-center justify-center`,children:(0,G.jsx)(rt,{children:(0,G.jsx)(d,{className:`size-2 fill-current`})})}),t]})}function H({className:e,inset:t,...n}){return(0,G.jsx)(Qe,{"data-slot":`context-menu-label`,"data-inset":t,className:p(`text-foreground px-2 py-1.5 text-sm font-medium data-inset:pl-8`,e),...n})}function U({className:e,...t}){return(0,G.jsx)(it,{"data-slot":`context-menu-separator`,className:p(`bg-border -mx-1 my-1 h-px`,e),...t})}function W({className:e,...t}){return(0,G.jsx)(`span`,{"data-slot":`context-menu-shortcut`,className:p(`text-muted-foreground ml-auto text-xs tracking-widest`,e),...t})}var G,gt=t((()=>{n(),ct(),se(),le(),G=r(),L.__docgenInfo={description:``,methods:[],displayName:`ContextMenu`},R.__docgenInfo={description:``,methods:[],displayName:`ContextMenuTrigger`},z.__docgenInfo={description:``,methods:[],displayName:`ContextMenuContent`},B.__docgenInfo={description:``,methods:[],displayName:`ContextMenuItem`,props:{inset:{required:!1,tsType:{name:`boolean`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`"default" | "destructive"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"destructive"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}}}},ht.__docgenInfo={description:``,methods:[],displayName:`ContextMenuCheckboxItem`},V.__docgenInfo={description:``,methods:[],displayName:`ContextMenuRadioItem`},H.__docgenInfo={description:``,methods:[],displayName:`ContextMenuLabel`,props:{inset:{required:!1,tsType:{name:`boolean`},description:``}}},U.__docgenInfo={description:``,methods:[],displayName:`ContextMenuSeparator`},W.__docgenInfo={description:``,methods:[],displayName:`ContextMenuShortcut`},lt.__docgenInfo={description:``,methods:[],displayName:`ContextMenuGroup`},ut.__docgenInfo={description:``,methods:[],displayName:`ContextMenuPortal`},dt.__docgenInfo={description:``,methods:[],displayName:`ContextMenuSub`},mt.__docgenInfo={description:``,methods:[],displayName:`ContextMenuSubContent`},pt.__docgenInfo={description:``,methods:[],displayName:`ContextMenuSubTrigger`,props:{inset:{required:!1,tsType:{name:`boolean`},description:``}}},ft.__docgenInfo={description:``,methods:[],displayName:`ContextMenuRadioGroup`}})),K,q,_t,J,Y,X,Z,Q,$,vt;t((()=>{gt(),K=e(n(),1),se(),q=r(),_t={title:`Components/ContextMenu`,component:L,parameters:{layout:`centered`},tags:[`autodocs`]},J={render:()=>(0,q.jsxs)(L,{children:[(0,q.jsx)(R,{className:`flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm`,children:`Right click here`}),(0,q.jsxs)(z,{children:[(0,q.jsx)(B,{children:`Open`}),(0,q.jsx)(B,{children:`Download`}),(0,q.jsx)(U,{}),(0,q.jsx)(B,{children:`Delete`})]})]})},Y={render:()=>(0,q.jsxs)(L,{children:[(0,q.jsx)(R,{className:`flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm`,children:`Right click here`}),(0,q.jsxs)(z,{className:`w-64`,children:[(0,q.jsxs)(B,{children:[(0,q.jsx)(f,{size:14,className:`mr-2`}),`Open`]}),(0,q.jsxs)(B,{children:[(0,q.jsx)(te,{size:14,className:`mr-2`}),`Download`]}),(0,q.jsxs)(B,{children:[(0,q.jsx)(re,{size:14,className:`mr-2`}),`Share`]}),(0,q.jsx)(U,{}),(0,q.jsxs)(B,{children:[(0,q.jsx)(ae,{size:14,className:`mr-2`}),`Delete`]})]})]})},X={render:()=>(0,q.jsxs)(L,{children:[(0,q.jsx)(R,{className:`flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm`,children:`Right click here`}),(0,q.jsxs)(z,{className:`w-64`,children:[(0,q.jsxs)(B,{children:[`Copy`,(0,q.jsx)(W,{children:`⌘C`})]}),(0,q.jsxs)(B,{children:[`Cut`,(0,q.jsx)(W,{children:`⌘X`})]}),(0,q.jsxs)(B,{children:[`Paste`,(0,q.jsx)(W,{children:`⌘V`})]}),(0,q.jsx)(U,{}),(0,q.jsxs)(B,{children:[`Select All`,(0,q.jsx)(W,{children:`⌘A`})]})]})]})},Z={render:()=>{let[e,t]=(0,K.useState)(!0),[n,r]=(0,K.useState)(!1);return(0,q.jsxs)(L,{children:[(0,q.jsx)(R,{className:`flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm`,children:`Right click here`}),(0,q.jsxs)(z,{className:`w-64`,children:[(0,q.jsx)(H,{children:`View`}),(0,q.jsx)(U,{}),(0,q.jsx)(ht,{checked:e,onCheckedChange:t,children:`Show Bookmarks Bar`}),(0,q.jsx)(ht,{checked:n,onCheckedChange:r,children:`Show History`})]})]})}},Q={render:()=>{let[e,t]=(0,K.useState)(`light`);return(0,q.jsxs)(L,{children:[(0,q.jsx)(R,{className:`flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm`,children:`Right click here`}),(0,q.jsxs)(z,{className:`w-64`,children:[(0,q.jsx)(H,{children:`Theme`}),(0,q.jsx)(U,{}),(0,q.jsxs)(ft,{value:e,onValueChange:t,children:[(0,q.jsx)(V,{value:`light`,children:`Light`}),(0,q.jsx)(V,{value:`dark`,children:`Dark`}),(0,q.jsx)(V,{value:`system`,children:`System`})]})]})]})}},$={render:()=>(0,q.jsxs)(L,{children:[(0,q.jsx)(R,{children:(0,q.jsxs)(`div`,{className:`w-[300px] p-4 border rounded-lg space-y-2`,children:[(0,q.jsx)(`h3`,{className:`font-semibold`,children:`Project Card`}),(0,q.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Right-click this card for actions`}),(0,q.jsxs)(`div`,{className:`flex gap-2 pt-2`,children:[(0,q.jsx)(`span`,{className:`text-xs px-2 py-1 bg-muted rounded-sm`,children:`React`}),(0,q.jsx)(`span`,{className:`text-xs px-2 py-1 bg-muted rounded-sm`,children:`TypeScript`})]})]})}),(0,q.jsxs)(z,{className:`w-64`,children:[(0,q.jsxs)(B,{children:[(0,q.jsx)(ce,{size:14,className:`mr-2`}),`Edit`]}),(0,q.jsxs)(B,{children:[(0,q.jsx)(ie,{size:14,className:`mr-2`}),`Duplicate`]}),(0,q.jsxs)(B,{children:[(0,q.jsx)(re,{size:14,className:`mr-2`}),`Share`]}),(0,q.jsx)(U,{}),(0,q.jsxs)(B,{className:`text-destructive`,children:[(0,q.jsx)(ae,{size:14,className:`mr-2`}),`Delete`]})]})]})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Open</ContextMenuItem>
        <ContextMenuItem>Download</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          <FolderOpen size={14} className="mr-2" />
          Open
        </ContextMenuItem>
        <ContextMenuItem>
          <Download size={14} className="mr-2" />
          Download
        </ContextMenuItem>
        <ContextMenuItem>
          <Share2 size={14} className="mr-2" />
          Share
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <Trash2 size={14} className="mr-2" />
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          Copy
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Cut
          <ContextMenuShortcut>⌘X</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Paste
          <ContextMenuShortcut>⌘V</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          Select All
          <ContextMenuShortcut>⌘A</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [showBookmarks, setShowBookmarks] = useState(true);
    const [showHistory, setShowHistory] = useState(false);
    return <ContextMenu>
        <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuLabel>View</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem checked={showBookmarks} onCheckedChange={setShowBookmarks}>
            Show Bookmarks Bar
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={showHistory} onCheckedChange={setShowHistory}>
            Show History
          </ContextMenuCheckboxItem>
        </ContextMenuContent>
      </ContextMenu>;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [theme, setTheme] = useState("light");
    return <ContextMenu>
        <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuLabel>Theme</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup value={theme} onValueChange={setTheme}>
            <ContextMenuRadioItem value="light">Light</ContextMenuRadioItem>
            <ContextMenuRadioItem value="dark">Dark</ContextMenuRadioItem>
            <ContextMenuRadioItem value="system">System</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger>
        <div className="w-[300px] p-4 border rounded-lg space-y-2">
          <h3 className="font-semibold">Project Card</h3>
          <p className="text-sm text-muted-foreground">
            Right-click this card for actions
          </p>
          <div className="flex gap-2 pt-2">
            <span className="text-xs px-2 py-1 bg-muted rounded-sm">React</span>
            <span className="text-xs px-2 py-1 bg-muted rounded-sm">TypeScript</span>
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          <Pencil size={14} className="mr-2" />
          Edit
        </ContextMenuItem>
        <ContextMenuItem>
          <Copy size={14} className="mr-2" />
          Duplicate
        </ContextMenuItem>
        <ContextMenuItem>
          <Share2 size={14} className="mr-2" />
          Share
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem className="text-destructive">
          <Trash2 size={14} className="mr-2" />
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
}`,...$.parameters?.docs?.source}}},vt=[`Default`,`WithIcons`,`WithShortcuts`,`WithCheckboxes`,`WithRadio`,`OnCard`]}))();export{J as Default,$ as OnCard,Z as WithCheckboxes,Y as WithIcons,Q as WithRadio,X as WithShortcuts,vt as __namedExportsOrder,_t as default};