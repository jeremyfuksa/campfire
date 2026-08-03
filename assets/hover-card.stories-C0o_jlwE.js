import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{n as i,r as a}from"./dist-Dlyn9OaY.js";import{n as o,r as s}from"./dist-D7HkfZMy.js";import{a as c,i as l,r as u,t as d}from"./dist-BK-Z8wev.js";import{n as f,t as p}from"./dist-CVJt7rz-.js";import{n as m,t as h}from"./dist-y9talKpz.js";import{n as g,t as _}from"./createLucideIcon-D4Czp6j_.js";import{n as v,t as ee}from"./calendar-C2KbdeNx.js";import{n as te,t as ne}from"./utils-DwVtoTFj.js";import{n as re,t as ie}from"./dist-KCqU_K4Q.js";import{n as ae,t as oe}from"./dist-Dvq7lsD6.js";import{r as se,t as y}from"./button-CTqIoSi4.js";import{a as ce,i as le,n as ue,o as de,r as fe,t as pe}from"./dist-CRMhk8JZ.js";import{i as me,n as he,r as ge,t as _e}from"./avatar-DuPoOmwL.js";var b,x;function S(){return(S=t((()=>{g(),b=[[`path`,{d:`M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16`,key:`tarvll`}]],x=_(`laptop`,b)})))()}function C(e){return t=>t.pointerType===`touch`?void 0:e()}function ve(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;n.nextNode();)t.push(n.currentNode);return t}var w,T,E,D,O,ye,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,be,xe,Se;function Ce(){return(Ce=t((()=>{w=e(n(),1),c(),a(),p(),o(),de(),ae(),m(),u(),re(),T=r(),D=`HoverCard`,[O,ye]=i(D,[ce]),k=ce(),[A,j]=O(D),M=e=>{let{__scopeHoverCard:t,children:n,open:r,defaultOpen:i,onOpenChange:a,openDelay:o=700,closeDelay:s=300}=e,c=k(t),l=w.useRef(0),u=w.useRef(0),d=w.useRef(!1),p=w.useRef(!1),[m,h]=f({prop:r,defaultProp:i??!1,onChange:a,caller:D}),g=w.useCallback(()=>{clearTimeout(u.current),l.current=window.setTimeout(()=>h(!0),o)},[o,h]),_=w.useCallback(()=>{clearTimeout(l.current),!d.current&&!p.current&&(u.current=window.setTimeout(()=>h(!1),s))},[s,h]),v=w.useCallback(()=>h(!1),[h]);return w.useEffect(()=>()=>{clearTimeout(l.current),clearTimeout(u.current)},[]),(0,T.jsx)(A,{scope:t,open:m,onOpenChange:h,onOpen:g,onClose:_,onDismiss:v,hasSelectionRef:d,isPointerDownOnContentRef:p,children:(0,T.jsx)(le,{...c,children:n})})},M.displayName=D,N=`HoverCardTrigger`,P=w.forwardRef((e,t)=>{let{__scopeHoverCard:n,...r}=e,i=j(N,n),a=k(n);return(0,T.jsx)(pe,{asChild:!0,...a,children:(0,T.jsx)(d.a,{"data-state":i.open?`open`:`closed`,...r,ref:t,onPointerEnter:l(e.onPointerEnter,C(i.onOpen)),onPointerLeave:l(e.onPointerLeave,C(i.onClose)),onFocus:l(e.onFocus,i.onOpen),onBlur:l(e.onBlur,i.onClose),onTouchStart:l(e.onTouchStart,e=>e.preventDefault())})})}),P.displayName=N,F=`HoverCardPortal`,[I,L]=O(F,{forceMount:void 0}),R=e=>{let{__scopeHoverCard:t,forceMount:n,children:r,container:i}=e,a=j(F,t);return(0,T.jsx)(I,{scope:t,forceMount:n,children:(0,T.jsx)(h,{present:n||a.open,children:(0,T.jsx)(oe,{asChild:!0,container:i,children:r})})})},R.displayName=F,z=`HoverCardContent`,B=w.forwardRef((e,t)=>{let n=L(z,e.__scopeHoverCard),{forceMount:r=n.forceMount,...i}=e,a=j(z,e.__scopeHoverCard);return(0,T.jsx)(h,{present:r||a.open,children:(0,T.jsx)(V,{"data-state":a.open?`open`:`closed`,...i,onPointerEnter:l(e.onPointerEnter,C(a.onOpen)),onPointerLeave:l(e.onPointerLeave,C(a.onClose)),ref:t})})}),B.displayName=z,V=w.forwardRef((e,t)=>{let{__scopeHoverCard:n,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:a,onInteractOutside:o,...c}=e,u=j(z,n),d=k(n),f=w.useRef(null),p=s(t,f),[m,h]=w.useState(!1);return w.useEffect(()=>{if(m){let e=document.body;return E=e.style.userSelect||e.style.webkitUserSelect,e.style.userSelect=`none`,e.style.webkitUserSelect=`none`,()=>{e.style.userSelect=E,e.style.webkitUserSelect=E}}},[m]),w.useEffect(()=>{if(f.current){let e=()=>{h(!1),u.isPointerDownOnContentRef.current=!1,setTimeout(()=>{document.getSelection()?.toString()!==``&&(u.hasSelectionRef.current=!0)})};return document.addEventListener(`pointerup`,e),()=>{document.removeEventListener(`pointerup`,e),u.hasSelectionRef.current=!1,u.isPointerDownOnContentRef.current=!1}}},[u.isPointerDownOnContentRef,u.hasSelectionRef]),w.useEffect(()=>{f.current&&ve(f.current).forEach(e=>e.setAttribute(`tabindex`,`-1`))}),(0,T.jsx)(ie,{asChild:!0,disableOutsidePointerEvents:!1,onInteractOutside:o,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:l(a,e=>{e.preventDefault()}),onDismiss:u.onDismiss,children:(0,T.jsx)(fe,{...d,...c,onPointerDown:l(c.onPointerDown,e=>{e.currentTarget.contains(e.target)&&h(!0),u.hasSelectionRef.current=!1,u.isPointerDownOnContentRef.current=!0}),ref:p,style:{...c.style,userSelect:m?`text`:void 0,WebkitUserSelect:m?`text`:void 0,"--radix-hover-card-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-hover-card-content-available-width":`var(--radix-popper-available-width)`,"--radix-hover-card-content-available-height":`var(--radix-popper-available-height)`,"--radix-hover-card-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-hover-card-trigger-height":`var(--radix-popper-anchor-height)`}})})}),H=`HoverCardArrow`,U=w.forwardRef((e,t)=>{let{__scopeHoverCard:n,...r}=e,i=k(n);return(0,T.jsx)(ue,{...i,...r,ref:t})}),U.displayName=H,W=M,be=P,xe=R,Se=B})))()}function G({...e}){return(0,J.jsx)(W,{"data-slot":`hover-card`,...e})}function K({...e}){return(0,J.jsx)(be,{"data-slot":`hover-card-trigger`,...e})}function q({className:e,align:t=`center`,sideOffset:n=4,...r}){return(0,J.jsx)(xe,{"data-slot":`hover-card-portal`,children:(0,J.jsx)(Se,{"data-slot":`hover-card-content`,align:t,sideOffset:n,className:ne(`z-50 w-64 rounded-md border bg-background p-4 shadow-md outline-hidden`,`animate-in fade-in-0 zoom-in-95`,`data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95`,`data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2`,`data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`,e),...r})})}var J;function we(){return(we=t((()=>{n(),Ce(),te(),J=r(),G.__docgenInfo={description:``,methods:[],displayName:`HoverCard`},K.__docgenInfo={description:``,methods:[],displayName:`HoverCardTrigger`},q.__docgenInfo={description:``,methods:[],displayName:`HoverCardContent`,props:{align:{defaultValue:{value:`"center"`,computed:!1},required:!1},sideOffset:{defaultValue:{value:`4`,computed:!1},required:!1}}}})))()}var Y,Te,X,Z,Q,$,Ee;function De(){return(De=t((()=>{v(),S(),we(),se(),me(),Y=r(),Te={title:`Components/HoverCard`,component:G,parameters:{layout:`centered`},tags:[`autodocs`]},X={render:()=>(0,Y.jsxs)(G,{children:[(0,Y.jsx)(K,{asChild:!0,children:(0,Y.jsx)(y,{variant:`link`,children:`@nextjs`})}),(0,Y.jsx)(q,{className:`w-80`,children:(0,Y.jsxs)(`div`,{className:`flex justify-between space-x-4`,children:[(0,Y.jsxs)(_e,{children:[(0,Y.jsx)(ge,{src:`https://github.com/vercel.png`}),(0,Y.jsx)(he,{children:`VC`})]}),(0,Y.jsxs)(`div`,{className:`space-y-1`,children:[(0,Y.jsx)(`h4`,{className:`text-sm font-semibold`,children:`@nextjs`}),(0,Y.jsx)(`p`,{className:`text-sm`,children:`The React Framework – created and maintained by @vercel.`}),(0,Y.jsxs)(`div`,{className:`flex items-center pt-2`,children:[(0,Y.jsx)(ee,{size:14,className:`mr-2 opacity-70`}),(0,Y.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`Joined December 2021`})]})]})]})})]})},Z={render:()=>(0,Y.jsxs)(G,{children:[(0,Y.jsx)(K,{asChild:!0,children:(0,Y.jsx)(`span`,{className:`underline cursor-pointer`,children:`Hover me`})}),(0,Y.jsx)(q,{children:(0,Y.jsx)(`p`,{className:`text-sm`,children:`This is a simple hover card with text content.`})})]})},Q={render:()=>(0,Y.jsxs)(`p`,{className:`text-sm`,children:[`Visit our`,` `,(0,Y.jsxs)(G,{children:[(0,Y.jsx)(K,{asChild:!0,children:(0,Y.jsx)(`a`,{href:`#`,className:`underline`,children:`documentation`})}),(0,Y.jsx)(q,{children:(0,Y.jsxs)(`div`,{className:`space-y-2`,children:[(0,Y.jsx)(`h4`,{className:`text-sm font-semibold`,children:`Documentation`}),(0,Y.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Learn how to use our components with detailed guides and examples.`})]})})]}),` `,`to learn more.`]})},$={render:()=>(0,Y.jsxs)(G,{children:[(0,Y.jsx)(K,{asChild:!0,children:(0,Y.jsx)(y,{variant:`outline`,children:`MacBook Pro`})}),(0,Y.jsx)(q,{className:`w-80`,children:(0,Y.jsxs)(`div`,{className:`space-y-2`,children:[(0,Y.jsx)(`div`,{className:`h-40 bg-muted rounded-md flex items-center justify-center`,children:(0,Y.jsx)(x,{size:48,className:`text-muted-foreground`})}),(0,Y.jsx)(`h4`,{className:`font-semibold`,children:`MacBook Pro 16"`}),(0,Y.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`The most powerful MacBook Pro ever is here. With the blazing-fast M2 Pro or M2 Max chip.`}),(0,Y.jsxs)(`div`,{className:`flex justify-between items-center pt-2`,children:[(0,Y.jsx)(`span`,{className:`text-lg font-bold`,children:`$2,499`}),(0,Y.jsx)(y,{size:`sm`,children:`View Details`})]})]})})]})},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <HoverCard>
      <HoverCardTrigger asChild>
        <span className="underline cursor-pointer">Hover me</span>
      </HoverCardTrigger>
      <HoverCardContent>
        <p className="text-sm">This is a simple hover card with text content.</p>
      </HoverCardContent>
    </HoverCard>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Ee=[`Default`,`Simple`,`WithLink`,`ProductPreview`]})))()}De();export{X as Default,$ as ProductPreview,Z as Simple,Q as WithLink,Ee as __namedExportsOrder,Te as default};