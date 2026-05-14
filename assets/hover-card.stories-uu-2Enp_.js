import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{O as i,lt as a,t as o}from"./lucide-react-BZbEj6fH.js";import{i as s,r as c}from"./utils-CDLLjGU_.js";import{r as l,t as u}from"./button-DCO8oKDq.js";import{i as d,n as f,r as p,t as m}from"./avatar-BSyxS7NL.js";function h({children:e,open:t,defaultOpen:n,onOpenChange:r}){let i=t!==void 0,[a,o]=v.useState(n??!1),s=i?t:a,c=v.useCallback(e=>{i||o(e),r?.(e)},[i,r]),l=v.useCallback(()=>c(!0),[c]),u=v.useCallback(()=>c(!1),[c]),d=v.useMemo(()=>({open:s,show:l,hide:u}),[s,l,u]);return(0,y.jsx)(b.Provider,{value:d,children:(0,y.jsx)(`div`,{"data-slot":`hover-card`,children:e})})}function g({asChild:e,children:t,onMouseEnter:n,onMouseLeave:r,onFocus:i,onBlur:a,...o}){let{show:s,hide:c}=x(),l={"data-slot":`hover-card-trigger`,onMouseEnter:S(n,()=>s()),onMouseLeave:S(r,()=>c()),onFocus:S(i,()=>s()),onBlur:S(a,()=>c()),...o};return e&&v.isValidElement(t)?v.cloneElement(t,l):(0,y.jsx)(`button`,{type:`button`,...l,children:t})}function _({className:e,children:t,...n}){let{open:r,hide:i}=x();return r?(0,y.jsx)(`div`,{role:`dialog`,"aria-label":`Hover card`,"aria-live":`polite`,"data-slot":`hover-card-content`,className:c(`rounded-md border bg-background p-4 shadow-md focus-visible:outline-hidden`,e),onMouseLeave:i,...n,children:t}):null}var v,y,b,x,S,C=t((()=>{v=e(n(),1),s(),y=r(),b=v.createContext(null),x=()=>{let e=v.useContext(b);if(!e)throw Error(`HoverCard components must be used within HoverCard`);return e},S=(e,t)=>n=>{e?.(n),n.defaultPrevented||t?.(n)},h.__docgenInfo={description:``,methods:[],displayName:`HoverCard`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},open:{required:!1,tsType:{name:`boolean`},description:``},defaultOpen:{required:!1,tsType:{name:`boolean`},description:``},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``}}},g.__docgenInfo={description:``,methods:[],displayName:`HoverCardTrigger`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:``},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}},_.__docgenInfo={description:``,methods:[],displayName:`HoverCardContent`}})),w,T,E,D,O,k,A;t((()=>{o(),C(),l(),d(),w=r(),T={title:`Components/HoverCard`,component:h,parameters:{layout:`centered`},tags:[`autodocs`]},E={render:()=>(0,w.jsxs)(h,{children:[(0,w.jsx)(g,{asChild:!0,children:(0,w.jsx)(u,{variant:`link`,children:`@nextjs`})}),(0,w.jsx)(_,{className:`w-80`,children:(0,w.jsxs)(`div`,{className:`flex justify-between space-x-4`,children:[(0,w.jsxs)(m,{children:[(0,w.jsx)(p,{src:`https://github.com/vercel.png`}),(0,w.jsx)(f,{children:`VC`})]}),(0,w.jsxs)(`div`,{className:`space-y-1`,children:[(0,w.jsx)(`h4`,{className:`text-sm font-semibold`,children:`@nextjs`}),(0,w.jsx)(`p`,{className:`text-sm`,children:`The React Framework – created and maintained by @vercel.`}),(0,w.jsxs)(`div`,{className:`flex items-center pt-2`,children:[(0,w.jsx)(a,{size:14,className:`mr-2 opacity-70`}),(0,w.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`Joined December 2021`})]})]})]})})]})},D={render:()=>(0,w.jsxs)(h,{children:[(0,w.jsx)(g,{asChild:!0,children:(0,w.jsx)(`span`,{className:`underline cursor-pointer`,children:`Hover me`})}),(0,w.jsx)(_,{children:(0,w.jsx)(`p`,{className:`text-sm`,children:`This is a simple hover card with text content.`})})]})},O={render:()=>(0,w.jsxs)(`p`,{className:`text-sm`,children:[`Visit our`,` `,(0,w.jsxs)(h,{children:[(0,w.jsx)(g,{asChild:!0,children:(0,w.jsx)(`a`,{href:`#`,className:`underline`,children:`documentation`})}),(0,w.jsx)(_,{children:(0,w.jsxs)(`div`,{className:`space-y-2`,children:[(0,w.jsx)(`h4`,{className:`text-sm font-semibold`,children:`Documentation`}),(0,w.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Learn how to use our components with detailed guides and examples.`})]})})]}),` `,`to learn more.`]})},k={render:()=>(0,w.jsxs)(h,{children:[(0,w.jsx)(g,{asChild:!0,children:(0,w.jsx)(u,{variant:`outline`,children:`MacBook Pro`})}),(0,w.jsx)(_,{className:`w-80`,children:(0,w.jsxs)(`div`,{className:`space-y-2`,children:[(0,w.jsx)(`div`,{className:`h-40 bg-muted rounded-md flex items-center justify-center`,children:(0,w.jsx)(i,{size:48,className:`text-muted-foreground`})}),(0,w.jsx)(`h4`,{className:`font-semibold`,children:`MacBook Pro 16"`}),(0,w.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`The most powerful MacBook Pro ever is here. With the blazing-fast M2 Pro or M2 Max chip.`}),(0,w.jsxs)(`div`,{className:`flex justify-between items-center pt-2`,children:[(0,w.jsx)(`span`,{className:`text-lg font-bold`,children:`$2,499`}),(0,w.jsx)(u,{size:`sm`,children:`View Details`})]})]})})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <HoverCard>
      <HoverCardTrigger asChild>
        <span className="underline cursor-pointer">Hover me</span>
      </HoverCardTrigger>
      <HoverCardContent>
        <p className="text-sm">This is a simple hover card with text content.</p>
      </HoverCardContent>
    </HoverCard>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A=[`Default`,`Simple`,`WithLink`,`ProductPreview`]}))();export{E as Default,k as ProductPreview,D as Simple,O as WithLink,A as __namedExportsOrder,T as default};