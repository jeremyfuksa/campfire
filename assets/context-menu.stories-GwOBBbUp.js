import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{n as i,r as a}from"./dist-Dlyn9OaY.js";import{a as o,i as s,r as c,t as l}from"./dist-BK-Z8wev.js";import{n as u,t as d}from"./dist-CVJt7rz-.js";import{n as f,t as p}from"./check-B4Mqbaut.js";import{n as ee}from"./chevron-right-ByLsb6_d.js";import{n as te,t as ne}from"./circle-BnbtkmAq.js";import{n as re,t as ie}from"./copy-CpBKtLnH.js";import{n as ae,t as oe}from"./download-BmGOGhtf.js";import{n as se,t as ce}from"./folder-open-wp66GHVY.js";import{a as le,i as ue,n as de,o as fe,r as pe,t as me}from"./trash-2-DXq-QHfO.js";import{n as he,t as m}from"./utils-DwVtoTFj.js";import{n as ge,t as _e}from"./dist-Do68Nld6.js";import{_ as ve,a as ye,c as be,d as xe,f as Se,g as Ce,h as we,i as Te,l as Ee,m as De,n as Oe,o as ke,p as Ae,r as je,s as Me,t as Ne,u as Pe,v as Fe}from"./dist-DGpGBjnQ.js";function h(e){return t=>t.pointerType===`mouse`?void 0:e(t)}var g,_,v,Ie,Le,y,Re,b,x,S,C,ze,w,T,E,Be,Ve,He,D,Ue,O,We,k,Ge,A,Ke,j,qe,M,Je,N,Ye,Xe,P,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,F,dt;function ft(){return(ft=t((()=>{g=e(n(),1),o(),a(),c(),Fe(),_e(),d(),_=r(),v=`ContextMenu`,[Ie,Le]=i(v,[ve]),y=ve(),[Re,b]=Ie(v),x=e=>{let{__scopeContextMenu:t,children:n,onOpenChange:r,dir:i,modal:a=!0}=e,[o,s]=g.useState(!1),c=y(t),l=ge(r),u=g.useCallback(e=>{s(e),l(e)},[l]);return(0,_.jsx)(Re,{scope:t,open:o,onOpenChange:u,modal:a,children:(0,_.jsx)(Se,{...c,dir:i,open:o,onOpenChange:u,modal:a,children:n})})},x.displayName=v,S=`ContextMenuTrigger`,C=g.forwardRef((e,t)=>{let{__scopeContextMenu:n,disabled:r=!1,...i}=e,a=b(S,n),o=y(n),c=g.useRef({x:0,y:0}),u=g.useRef({getBoundingClientRect:()=>DOMRect.fromRect({width:0,height:0,...c.current})}),d=g.useRef(0),f=g.useCallback(()=>window.clearTimeout(d.current),[]),p=e=>{c.current={x:e.clientX,y:e.clientY},a.onOpenChange(!0)};return g.useEffect(()=>f,[f]),g.useEffect(()=>void(r&&f()),[r,f]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(Ne,{...o,virtualRef:u}),(0,_.jsx)(l.span,{"data-state":a.open?`open`:`closed`,"data-disabled":r?``:void 0,...i,ref:t,style:{WebkitTouchCallout:`none`,...e.style},onContextMenu:r?e.onContextMenu:s(e.onContextMenu,e=>{f(),p(e),e.preventDefault()}),onPointerDown:r?e.onPointerDown:s(e.onPointerDown,h(e=>{f(),d.current=window.setTimeout(()=>p(e),700)})),onPointerMove:r?e.onPointerMove:s(e.onPointerMove,h(f)),onPointerCancel:r?e.onPointerCancel:s(e.onPointerCancel,h(f)),onPointerUp:r?e.onPointerUp:s(e.onPointerUp,h(f))})]})}),C.displayName=S,ze=`ContextMenuPortal`,w=e=>{let{__scopeContextMenu:t,...n}=e,r=y(t);return(0,_.jsx)(Ee,{...r,...n})},w.displayName=ze,T=`ContextMenuContent`,E=g.forwardRef((e,t)=>{let{__scopeContextMenu:n,...r}=e,i=b(T,n),a=y(n),o=g.useRef(!1);return(0,_.jsx)(Te,{...a,...r,ref:t,side:`right`,sideOffset:2,align:`start`,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),!t.defaultPrevented&&o.current&&t.preventDefault(),o.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),!t.defaultPrevented&&!i.modal&&(o.current=!0)},style:{...e.style,"--radix-context-menu-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-context-menu-content-available-width":`var(--radix-popper-available-width)`,"--radix-context-menu-content-available-height":`var(--radix-popper-available-height)`,"--radix-context-menu-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-context-menu-trigger-height":`var(--radix-popper-anchor-height)`}})}),E.displayName=T,Be=`ContextMenuGroup`,Ve=g.forwardRef((e,t)=>{let{__scopeContextMenu:n,...r}=e,i=y(n);return(0,_.jsx)(ye,{...i,...r,ref:t})}),Ve.displayName=Be,He=`ContextMenuLabel`,D=g.forwardRef((e,t)=>{let{__scopeContextMenu:n,...r}=e,i=y(n);return(0,_.jsx)(be,{...i,...r,ref:t})}),D.displayName=He,Ue=`ContextMenuItem`,O=g.forwardRef((e,t)=>{let{__scopeContextMenu:n,...r}=e,i=y(n);return(0,_.jsx)(ke,{...i,...r,ref:t})}),O.displayName=Ue,We=`ContextMenuCheckboxItem`,k=g.forwardRef((e,t)=>{let{__scopeContextMenu:n,...r}=e,i=y(n);return(0,_.jsx)(je,{...i,...r,ref:t})}),k.displayName=We,Ge=`ContextMenuRadioGroup`,A=g.forwardRef((e,t)=>{let{__scopeContextMenu:n,...r}=e,i=y(n);return(0,_.jsx)(Pe,{...i,...r,ref:t})}),A.displayName=Ge,Ke=`ContextMenuRadioItem`,j=g.forwardRef((e,t)=>{let{__scopeContextMenu:n,...r}=e,i=y(n);return(0,_.jsx)(xe,{...i,...r,ref:t})}),j.displayName=Ke,qe=`ContextMenuItemIndicator`,M=g.forwardRef((e,t)=>{let{__scopeContextMenu:n,...r}=e,i=y(n);return(0,_.jsx)(Me,{...i,...r,ref:t})}),M.displayName=qe,Je=`ContextMenuSeparator`,N=g.forwardRef((e,t)=>{let{__scopeContextMenu:n,...r}=e,i=y(n);return(0,_.jsx)(Ae,{...i,...r,ref:t})}),N.displayName=Je,Ye=`ContextMenuArrow`,Xe=g.forwardRef((e,t)=>{let{__scopeContextMenu:n,...r}=e,i=y(n);return(0,_.jsx)(Oe,{...i,...r,ref:t})}),Xe.displayName=Ye,P=`ContextMenuSub`,Ze=e=>{let{__scopeContextMenu:t,children:n,onOpenChange:r,open:i,defaultOpen:a}=e,o=y(t),[s,c]=u({prop:i,defaultProp:a??!1,onChange:r,caller:P});return(0,_.jsx)(De,{...o,open:s,onOpenChange:c,children:n})},Ze.displayName=P,Qe=`ContextMenuSubTrigger`,$e=g.forwardRef((e,t)=>{let{__scopeContextMenu:n,...r}=e,i=y(n);return(0,_.jsx)(Ce,{...i,...r,ref:t})}),$e.displayName=Qe,et=`ContextMenuSubContent`,tt=g.forwardRef((e,t)=>{let{__scopeContextMenu:n,...r}=e,i=y(n);return(0,_.jsx)(we,{...i,...r,ref:t,style:{...e.style,"--radix-context-menu-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-context-menu-content-available-width":`var(--radix-popper-available-width)`,"--radix-context-menu-content-available-height":`var(--radix-popper-available-height)`,"--radix-context-menu-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-context-menu-trigger-height":`var(--radix-popper-anchor-height)`}})}),tt.displayName=et,nt=x,rt=C,it=w,at=E,ot=D,st=O,ct=k,lt=A,ut=j,F=M,dt=N})))()}function I({...e}){return(0,G.jsx)(nt,{"data-slot":`context-menu`,...e})}function L({...e}){return(0,G.jsx)(rt,{"data-slot":`context-menu-trigger`,...e})}function pt({...e}){return(0,G.jsx)(lt,{"data-slot":`context-menu-radio-group`,...e})}function R({className:e,...t}){return(0,G.jsx)(it,{children:(0,G.jsx)(at,{"data-slot":`context-menu-content`,className:m(`bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-32 origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md`,e),...t})})}function z({className:e,inset:t,variant:n=`default`,...r}){return(0,G.jsx)(st,{"data-slot":`context-menu-item`,"data-inset":t,"data-variant":n,className:m(`focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive [svg]:*:data-[variant=destructive]:text-destructive! [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-xs px-2 py-1.5 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),...r})}function B({className:e,children:t,checked:n,...r}){return(0,G.jsxs)(ct,{"data-slot":`context-menu-checkbox-item`,className:m(`focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),checked:n,...r,children:[(0,G.jsx)(`span`,{className:`pointer-events-none absolute left-2 flex size-3.5 items-center justify-center`,children:(0,G.jsx)(F,{children:(0,G.jsx)(p,{className:`size-4`})})}),t]})}function V({className:e,children:t,...n}){return(0,G.jsxs)(ut,{"data-slot":`context-menu-radio-item`,className:m(`focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),...n,children:[(0,G.jsx)(`span`,{className:`pointer-events-none absolute left-2 flex size-3.5 items-center justify-center`,children:(0,G.jsx)(F,{children:(0,G.jsx)(ne,{className:`size-2 fill-current`})})}),t]})}function H({className:e,inset:t,...n}){return(0,G.jsx)(ot,{"data-slot":`context-menu-label`,"data-inset":t,className:m(`text-foreground px-2 py-1.5 text-sm font-medium data-inset:pl-8`,e),...n})}function U({className:e,...t}){return(0,G.jsx)(dt,{"data-slot":`context-menu-separator`,className:m(`bg-border -mx-1 my-1 h-px`,e),...t})}function W({className:e,...t}){return(0,G.jsx)(`span`,{"data-slot":`context-menu-shortcut`,className:m(`text-muted-foreground ml-auto text-xs tracking-widest`,e),...t})}var G;function mt(){return(mt=t((()=>{n(),ft(),f(),ee(),te(),he(),G=r(),I.__docgenInfo={description:``,methods:[],displayName:`ContextMenu`},L.__docgenInfo={description:``,methods:[],displayName:`ContextMenuTrigger`},R.__docgenInfo={description:``,methods:[],displayName:`ContextMenuContent`},z.__docgenInfo={description:``,methods:[],displayName:`ContextMenuItem`,props:{inset:{required:!1,tsType:{name:`boolean`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`"default" | "destructive"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"destructive"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}}}},B.__docgenInfo={description:``,methods:[],displayName:`ContextMenuCheckboxItem`},V.__docgenInfo={description:``,methods:[],displayName:`ContextMenuRadioItem`},H.__docgenInfo={description:``,methods:[],displayName:`ContextMenuLabel`,props:{inset:{required:!1,tsType:{name:`boolean`},description:``}}},U.__docgenInfo={description:``,methods:[],displayName:`ContextMenuSeparator`},W.__docgenInfo={description:``,methods:[],displayName:`ContextMenuShortcut`},pt.__docgenInfo={description:``,methods:[],displayName:`ContextMenuRadioGroup`}})))()}var K,q,ht,J,Y,X,Z,Q,$,gt;function _t(){return(_t=t((()=>{mt(),K=n(),re(),ae(),se(),fe(),ue(),de(),q=r(),ht={title:`Components/ContextMenu`,component:I,parameters:{layout:`centered`},tags:[`autodocs`]},J={render:()=>(0,q.jsxs)(I,{children:[(0,q.jsx)(L,{className:`flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm`,children:`Right click here`}),(0,q.jsxs)(R,{children:[(0,q.jsx)(z,{children:`Open`}),(0,q.jsx)(z,{children:`Download`}),(0,q.jsx)(U,{}),(0,q.jsx)(z,{children:`Delete`})]})]})},Y={render:()=>(0,q.jsxs)(I,{children:[(0,q.jsx)(L,{className:`flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm`,children:`Right click here`}),(0,q.jsxs)(R,{className:`w-64`,children:[(0,q.jsxs)(z,{children:[(0,q.jsx)(ce,{size:14,className:`mr-2`}),`Open`]}),(0,q.jsxs)(z,{children:[(0,q.jsx)(oe,{size:14,className:`mr-2`}),`Download`]}),(0,q.jsxs)(z,{children:[(0,q.jsx)(pe,{size:14,className:`mr-2`}),`Share`]}),(0,q.jsx)(U,{}),(0,q.jsxs)(z,{children:[(0,q.jsx)(me,{size:14,className:`mr-2`}),`Delete`]})]})]})},X={render:()=>(0,q.jsxs)(I,{children:[(0,q.jsx)(L,{className:`flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm`,children:`Right click here`}),(0,q.jsxs)(R,{className:`w-64`,children:[(0,q.jsxs)(z,{children:[`Copy`,(0,q.jsx)(W,{children:`⌘C`})]}),(0,q.jsxs)(z,{children:[`Cut`,(0,q.jsx)(W,{children:`⌘X`})]}),(0,q.jsxs)(z,{children:[`Paste`,(0,q.jsx)(W,{children:`⌘V`})]}),(0,q.jsx)(U,{}),(0,q.jsxs)(z,{children:[`Select All`,(0,q.jsx)(W,{children:`⌘A`})]})]})]})},Z={render:()=>{let[e,t]=(0,K.useState)(!0),[n,r]=(0,K.useState)(!1);return(0,q.jsxs)(I,{children:[(0,q.jsx)(L,{className:`flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm`,children:`Right click here`}),(0,q.jsxs)(R,{className:`w-64`,children:[(0,q.jsx)(H,{children:`View`}),(0,q.jsx)(U,{}),(0,q.jsx)(B,{checked:e,onCheckedChange:t,children:`Show Bookmarks Bar`}),(0,q.jsx)(B,{checked:n,onCheckedChange:r,children:`Show History`})]})]})}},Q={render:()=>{let[e,t]=(0,K.useState)(`light`);return(0,q.jsxs)(I,{children:[(0,q.jsx)(L,{className:`flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm`,children:`Right click here`}),(0,q.jsxs)(R,{className:`w-64`,children:[(0,q.jsx)(H,{children:`Theme`}),(0,q.jsx)(U,{}),(0,q.jsxs)(pt,{value:e,onValueChange:t,children:[(0,q.jsx)(V,{value:`light`,children:`Light`}),(0,q.jsx)(V,{value:`dark`,children:`Dark`}),(0,q.jsx)(V,{value:`system`,children:`System`})]})]})]})}},$={render:()=>(0,q.jsxs)(I,{children:[(0,q.jsx)(L,{children:(0,q.jsxs)(`div`,{className:`w-[300px] p-4 border rounded-lg space-y-2`,children:[(0,q.jsx)(`h3`,{className:`font-semibold`,children:`Project Card`}),(0,q.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Right-click this card for actions`}),(0,q.jsxs)(`div`,{className:`flex gap-2 pt-2`,children:[(0,q.jsx)(`span`,{className:`text-xs px-2 py-1 bg-muted rounded-sm`,children:`React`}),(0,q.jsx)(`span`,{className:`text-xs px-2 py-1 bg-muted rounded-sm`,children:`TypeScript`})]})]})}),(0,q.jsxs)(R,{className:`w-64`,children:[(0,q.jsxs)(z,{children:[(0,q.jsx)(le,{size:14,className:`mr-2`}),`Edit`]}),(0,q.jsxs)(z,{children:[(0,q.jsx)(ie,{size:14,className:`mr-2`}),`Duplicate`]}),(0,q.jsxs)(z,{children:[(0,q.jsx)(pe,{size:14,className:`mr-2`}),`Share`]}),(0,q.jsx)(U,{}),(0,q.jsxs)(z,{className:`text-destructive`,children:[(0,q.jsx)(me,{size:14,className:`mr-2`}),`Delete`]})]})]})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},gt=[`Default`,`WithIcons`,`WithShortcuts`,`WithCheckboxes`,`WithRadio`,`OnCard`]})))()}_t();export{J as Default,$ as OnCard,Z as WithCheckboxes,Y as WithIcons,Q as WithRadio,X as WithShortcuts,gt as __namedExportsOrder,ht as default};