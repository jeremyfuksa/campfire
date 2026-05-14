import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-XedgCGTy.js";import{t as n}from"./jsx-runtime-_akqGrVk.js";import{H as r,M as i,i as a,it as o,m as s,t as c}from"./lucide-react-BZbEj6fH.js";import{n as l,t as u}from"./utils-CDLLjGU_.js";import{r as d,t as f}from"./dist-DHrFWlLe.js";function p({...e}){return(0,b.jsx)(`nav`,{"aria-label":`breadcrumb`,"data-slot":`breadcrumb`,...e})}function m({className:e,...t}){return(0,b.jsx)(`ol`,{"data-slot":`breadcrumb-list`,className:u(`text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm wrap-break-word sm:gap-2.5`,e),...t})}function h({className:e,...t}){return(0,b.jsx)(`li`,{"data-slot":`breadcrumb-item`,className:u(`inline-flex items-center gap-1.5`,e),...t})}function g({asChild:e,className:t,...n}){return(0,b.jsx)(e?f:`a`,{"data-slot":`breadcrumb-link`,className:u(`hover:text-foreground transition-colors`,t),...n})}function _({className:e,...t}){return(0,b.jsx)(`span`,{"data-slot":`breadcrumb-page`,role:`link`,"aria-disabled":`true`,"aria-current":`page`,className:u(`text-foreground font-normal`,e),...t})}function v({children:e,className:t,...n}){return(0,b.jsx)(`li`,{"data-slot":`breadcrumb-separator`,role:`presentation`,"aria-hidden":`true`,className:u(`[&>svg]:size-3.5`,t),...n,children:e??(0,b.jsx)(o,{})})}function y({className:e,...t}){return(0,b.jsxs)(`span`,{"data-slot":`breadcrumb-ellipsis`,role:`presentation`,"aria-hidden":`true`,className:u(`flex size-9 items-center justify-center`,e),...t,children:[(0,b.jsx)(r,{className:`size-4`}),(0,b.jsx)(`span`,{className:`sr-only`,children:`More`})]})}var b,x=e((()=>{t(),d(),c(),l(),b=n(),p.__docgenInfo={description:``,methods:[],displayName:`Breadcrumb`},m.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbList`},h.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbItem`},g.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbLink`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:``}}},_.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbPage`},v.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbSeparator`},y.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbEllipsis`}})),S,C,w,T,E,D,O;e((()=>{c(),x(),S=n(),C={title:`Components/Breadcrumb`,component:p,parameters:{layout:`centered`},tags:[`autodocs`]},w={render:()=>(0,S.jsx)(p,{children:(0,S.jsxs)(m,{children:[(0,S.jsx)(h,{children:(0,S.jsx)(g,{href:`/`,children:`Home`})}),(0,S.jsx)(v,{}),(0,S.jsx)(h,{children:(0,S.jsx)(g,{href:`/docs`,children:`Docs`})}),(0,S.jsx)(v,{}),(0,S.jsx)(h,{children:(0,S.jsx)(_,{children:`Breadcrumb`})})]})})},T={render:()=>(0,S.jsx)(p,{children:(0,S.jsxs)(m,{children:[(0,S.jsx)(h,{children:(0,S.jsx)(g,{href:`/`,children:`Home`})}),(0,S.jsx)(v,{}),(0,S.jsx)(h,{children:(0,S.jsx)(_,{children:`Current Page`})})]})})},E={render:()=>(0,S.jsx)(p,{children:(0,S.jsxs)(m,{children:[(0,S.jsx)(h,{children:(0,S.jsx)(g,{href:`/`,children:`Home`})}),(0,S.jsx)(v,{}),(0,S.jsx)(h,{children:(0,S.jsx)(g,{href:`/products`,children:`Products`})}),(0,S.jsx)(v,{}),(0,S.jsx)(h,{children:(0,S.jsx)(g,{href:`/products/electronics`,children:`Electronics`})}),(0,S.jsx)(v,{}),(0,S.jsx)(h,{children:(0,S.jsx)(g,{href:`/products/electronics/laptops`,children:`Laptops`})}),(0,S.jsx)(v,{}),(0,S.jsx)(h,{children:(0,S.jsx)(_,{children:`MacBook Pro`})})]})})},D={render:()=>(0,S.jsx)(p,{children:(0,S.jsxs)(m,{children:[(0,S.jsx)(h,{children:(0,S.jsxs)(g,{href:`/`,className:`inline-flex items-center`,children:[(0,S.jsx)(i,{size:14,className:`mr-1`}),`Home`]})}),(0,S.jsx)(v,{}),(0,S.jsx)(h,{children:(0,S.jsxs)(g,{href:`/settings`,className:`inline-flex items-center`,children:[(0,S.jsx)(s,{size:14,className:`mr-1`}),`Settings`]})}),(0,S.jsx)(v,{}),(0,S.jsx)(h,{children:(0,S.jsxs)(_,{className:`inline-flex items-center`,children:[(0,S.jsx)(a,{size:14,className:`mr-1`}),`Profile`]})})]})})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Current Page</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/products">Products</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/products/electronics">Electronics</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/products/electronics/laptops">Laptops</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>MacBook Pro</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="inline-flex items-center">
            <Home size={14} className="mr-1" />
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/settings" className="inline-flex items-center">
            <Settings size={14} className="mr-1" />
            Settings
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="inline-flex items-center">
            <User size={14} className="mr-1" />
            Profile
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...D.parameters?.docs?.source}}},O=[`Default`,`TwoLevels`,`DeepNesting`,`WithIcons`]}))();export{E as DeepNesting,w as Default,T as TwoLevels,D as WithIcons,O as __namedExportsOrder,C as default};