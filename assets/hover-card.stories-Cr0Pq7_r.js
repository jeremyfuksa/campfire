import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{n as i,r as a}from"./dist-DIs3RLZS.js";import{n as o,r as s}from"./dist-Cd9gDrEs.js";import{a as c,i as l,r as u,t as d}from"./dist-BEqORXIG.js";import{n as f,t as p}from"./dist-Vz0ZWiBO.js";import{n as m,t as h}from"./dist-CKqdNr-m.js";import{O as ee,t as te,ut as ne}from"./lucide-react-B9ev7WLa.js";import{n as re,t as ie}from"./utils-D2Sa0ztS.js";import{n as ae,t as oe}from"./dist-Cwja0qN_.js";import{n as se,t as ce}from"./dist-axReK2t_.js";import{r as le,t as g}from"./button-RVltMg_M.js";import{a as _,i as ue,n as de,o as fe,r as pe,t as me}from"./dist-BIJIwBhc2.js";import{i as he,n as ge,r as _e,t as ve}from"./avatar-zzp0bjUz.js";function v(e){return t=>t.pointerType===`touch`?void 0:e()}function ye(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;n.nextNode();)t.push(n.currentNode);return t}var y,b,x,S,C,be,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,xe=t((()=>{y=e(n(),1),c(),a(),p(),o(),fe(),se(),m(),u(),ae(),b=r(),S=`HoverCard`,[C,be]=i(S,[_]),w=_(),[T,E]=C(S),D=e=>{let{__scopeHoverCard:t,children:n,open:r,defaultOpen:i,onOpenChange:a,openDelay:o=700,closeDelay:s=300}=e,c=w(t),l=y.useRef(0),u=y.useRef(0),d=y.useRef(!1),p=y.useRef(!1),[m,h]=f({prop:r,defaultProp:i??!1,onChange:a,caller:S}),ee=y.useCallback(()=>{clearTimeout(u.current),l.current=window.setTimeout(()=>h(!0),o)},[o,h]),te=y.useCallback(()=>{clearTimeout(l.current),!d.current&&!p.current&&(u.current=window.setTimeout(()=>h(!1),s))},[s,h]),ne=y.useCallback(()=>h(!1),[h]);return y.useEffect(()=>()=>{clearTimeout(l.current),clearTimeout(u.current)},[]),(0,b.jsx)(T,{scope:t,open:m,onOpenChange:h,onOpen:ee,onClose:te,onDismiss:ne,hasSelectionRef:d,isPointerDownOnContentRef:p,children:(0,b.jsx)(ue,{...c,children:n})})},D.displayName=S,O=`HoverCardTrigger`,k=y.forwardRef((e,t)=>{let{__scopeHoverCard:n,...r}=e,i=E(O,n),a=w(n);return(0,b.jsx)(me,{asChild:!0,...a,children:(0,b.jsx)(d.a,{"data-state":i.open?`open`:`closed`,...r,ref:t,onPointerEnter:l(e.onPointerEnter,v(i.onOpen)),onPointerLeave:l(e.onPointerLeave,v(i.onClose)),onFocus:l(e.onFocus,i.onOpen),onBlur:l(e.onBlur,i.onClose),onTouchStart:l(e.onTouchStart,e=>e.preventDefault())})})}),k.displayName=O,A=`HoverCardPortal`,[j,M]=C(A,{forceMount:void 0}),N=e=>{let{__scopeHoverCard:t,forceMount:n,children:r,container:i}=e,a=E(A,t);return(0,b.jsx)(j,{scope:t,forceMount:n,children:(0,b.jsx)(h,{present:n||a.open,children:(0,b.jsx)(ce,{asChild:!0,container:i,children:r})})})},N.displayName=A,P=`HoverCardContent`,F=y.forwardRef((e,t)=>{let n=M(P,e.__scopeHoverCard),{forceMount:r=n.forceMount,...i}=e,a=E(P,e.__scopeHoverCard);return(0,b.jsx)(h,{present:r||a.open,children:(0,b.jsx)(I,{"data-state":a.open?`open`:`closed`,...i,onPointerEnter:l(e.onPointerEnter,v(a.onOpen)),onPointerLeave:l(e.onPointerLeave,v(a.onClose)),ref:t})})}),F.displayName=P,I=y.forwardRef((e,t)=>{let{__scopeHoverCard:n,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:a,onInteractOutside:o,...c}=e,u=E(P,n),d=w(n),f=y.useRef(null),p=s(t,f),[m,h]=y.useState(!1);return y.useEffect(()=>{if(m){let e=document.body;return x=e.style.userSelect||e.style.webkitUserSelect,e.style.userSelect=`none`,e.style.webkitUserSelect=`none`,()=>{e.style.userSelect=x,e.style.webkitUserSelect=x}}},[m]),y.useEffect(()=>{if(f.current){let e=()=>{h(!1),u.isPointerDownOnContentRef.current=!1,setTimeout(()=>{document.getSelection()?.toString()!==``&&(u.hasSelectionRef.current=!0)})};return document.addEventListener(`pointerup`,e),()=>{document.removeEventListener(`pointerup`,e),u.hasSelectionRef.current=!1,u.isPointerDownOnContentRef.current=!1}}},[u.isPointerDownOnContentRef,u.hasSelectionRef]),y.useEffect(()=>{f.current&&ye(f.current).forEach(e=>e.setAttribute(`tabindex`,`-1`))}),(0,b.jsx)(oe,{asChild:!0,disableOutsidePointerEvents:!1,onInteractOutside:o,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:l(a,e=>{e.preventDefault()}),onDismiss:u.onDismiss,children:(0,b.jsx)(pe,{...d,...c,onPointerDown:l(c.onPointerDown,e=>{e.currentTarget.contains(e.target)&&h(!0),u.hasSelectionRef.current=!1,u.isPointerDownOnContentRef.current=!0}),ref:p,style:{...c.style,userSelect:m?`text`:void 0,WebkitUserSelect:m?`text`:void 0,"--radix-hover-card-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-hover-card-content-available-width":`var(--radix-popper-available-width)`,"--radix-hover-card-content-available-height":`var(--radix-popper-available-height)`,"--radix-hover-card-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-hover-card-trigger-height":`var(--radix-popper-anchor-height)`}})})}),L=`HoverCardArrow`,R=y.forwardRef((e,t)=>{let{__scopeHoverCard:n,...r}=e,i=w(n);return(0,b.jsx)(de,{...i,...r,ref:t})}),R.displayName=L,z=D,B=k,V=N,H=F}));function U({...e}){return(0,K.jsx)(z,{"data-slot":`hover-card`,...e})}function W({...e}){return(0,K.jsx)(B,{"data-slot":`hover-card-trigger`,...e})}function G({className:e,align:t=`center`,sideOffset:n=4,...r}){return(0,K.jsx)(V,{"data-slot":`hover-card-portal`,children:(0,K.jsx)(H,{"data-slot":`hover-card-content`,align:t,sideOffset:n,className:ie(`z-50 w-64 rounded-md border bg-background p-4 shadow-md outline-hidden`,`animate-in fade-in-0 zoom-in-95`,`data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95`,`data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2`,`data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`,e),...r})})}var K,Se=t((()=>{n(),xe(),re(),K=r(),U.__docgenInfo={description:``,methods:[],displayName:`HoverCard`},W.__docgenInfo={description:``,methods:[],displayName:`HoverCardTrigger`},G.__docgenInfo={description:``,methods:[],displayName:`HoverCardContent`,props:{align:{defaultValue:{value:`"center"`,computed:!1},required:!1},sideOffset:{defaultValue:{value:`4`,computed:!1},required:!1}}}})),q,J,Y,X,Z,Q,$;t((()=>{te(),Se(),le(),he(),q=r(),J={title:`Components/HoverCard`,component:U,parameters:{layout:`centered`},tags:[`autodocs`]},Y={render:()=>(0,q.jsxs)(U,{children:[(0,q.jsx)(W,{asChild:!0,children:(0,q.jsx)(g,{variant:`link`,children:`@nextjs`})}),(0,q.jsx)(G,{className:`w-80`,children:(0,q.jsxs)(`div`,{className:`flex justify-between space-x-4`,children:[(0,q.jsxs)(ve,{children:[(0,q.jsx)(_e,{src:`https://github.com/vercel.png`}),(0,q.jsx)(ge,{children:`VC`})]}),(0,q.jsxs)(`div`,{className:`space-y-1`,children:[(0,q.jsx)(`h4`,{className:`text-sm font-semibold`,children:`@nextjs`}),(0,q.jsx)(`p`,{className:`text-sm`,children:`The React Framework – created and maintained by @vercel.`}),(0,q.jsxs)(`div`,{className:`flex items-center pt-2`,children:[(0,q.jsx)(ne,{size:14,className:`mr-2 opacity-70`}),(0,q.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`Joined December 2021`})]})]})]})})]})},X={render:()=>(0,q.jsxs)(U,{children:[(0,q.jsx)(W,{asChild:!0,children:(0,q.jsx)(`span`,{className:`underline cursor-pointer`,children:`Hover me`})}),(0,q.jsx)(G,{children:(0,q.jsx)(`p`,{className:`text-sm`,children:`This is a simple hover card with text content.`})})]})},Z={render:()=>(0,q.jsxs)(`p`,{className:`text-sm`,children:[`Visit our`,` `,(0,q.jsxs)(U,{children:[(0,q.jsx)(W,{asChild:!0,children:(0,q.jsx)(`a`,{href:`#`,className:`underline`,children:`documentation`})}),(0,q.jsx)(G,{children:(0,q.jsxs)(`div`,{className:`space-y-2`,children:[(0,q.jsx)(`h4`,{className:`text-sm font-semibold`,children:`Documentation`}),(0,q.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Learn how to use our components with detailed guides and examples.`})]})})]}),` `,`to learn more.`]})},Q={render:()=>(0,q.jsxs)(U,{children:[(0,q.jsx)(W,{asChild:!0,children:(0,q.jsx)(g,{variant:`outline`,children:`MacBook Pro`})}),(0,q.jsx)(G,{className:`w-80`,children:(0,q.jsxs)(`div`,{className:`space-y-2`,children:[(0,q.jsx)(`div`,{className:`h-40 bg-muted rounded-md flex items-center justify-center`,children:(0,q.jsx)(ee,{size:48,className:`text-muted-foreground`})}),(0,q.jsx)(`h4`,{className:`font-semibold`,children:`MacBook Pro 16"`}),(0,q.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`The most powerful MacBook Pro ever is here. With the blazing-fast M2 Pro or M2 Max chip.`}),(0,q.jsxs)(`div`,{className:`flex justify-between items-center pt-2`,children:[(0,q.jsx)(`span`,{className:`text-lg font-bold`,children:`$2,499`}),(0,q.jsx)(g,{size:`sm`,children:`View Details`})]})]})})]})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <Calendar size={14} className="mr-2 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <HoverCard>
      <HoverCardTrigger asChild>
        <span className="underline cursor-pointer">Hover me</span>
      </HoverCardTrigger>
      <HoverCardContent>
        <p className="text-sm">This is a simple hover card with text content.</p>
      </HoverCardContent>
    </HoverCard>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <p className="text-sm">
      Visit our{" "}
      <HoverCard>
        <HoverCardTrigger asChild>
          <a href="#" className="underline">
            documentation
          </a>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Documentation</h4>
            <p className="text-sm text-muted-foreground">
              Learn how to use our components with detailed guides and examples.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>{" "}
      to learn more.
    </p>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">MacBook Pro</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <div className="h-40 bg-muted rounded-md flex items-center justify-center">
            <Laptop size={48} className="text-muted-foreground" />
          </div>
          <h4 className="font-semibold">MacBook Pro 16"</h4>
          <p className="text-sm text-muted-foreground">
            The most powerful MacBook Pro ever is here. With the blazing-fast
            M2 Pro or M2 Max chip.
          </p>
          <div className="flex justify-between items-center pt-2">
            <span className="text-lg font-bold">$2,499</span>
            <Button size="sm">View Details</Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Simple`,`WithLink`,`ProductPreview`]}))();export{Y as Default,Q as ProductPreview,X as Simple,Z as WithLink,$ as __namedExportsOrder,J as default};