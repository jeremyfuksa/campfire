import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{n as r,t as i}from"./chevron-right-ByLsb6_d.js";import{n as a}from"./ellipsis-nYjK77sI.js";import{n as o,t as s}from"./house-DNU_zrj0.js";import{n as c,t as l}from"./settings-BE-K_bqF.js";import{n as u,t as d}from"./user-D0RLBsr5.js";import{n as f,t as p}from"./utils-DwVtoTFj.js";import{r as m,t as h}from"./dist-C_FIoz-e.js";function g({...e}){return(0,S.jsx)(`nav`,{"aria-label":`breadcrumb`,"data-slot":`breadcrumb`,...e})}function _({className:e,...t}){return(0,S.jsx)(`ol`,{"data-slot":`breadcrumb-list`,className:p(`text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm wrap-break-word sm:gap-2.5`,e),...t})}function v({className:e,...t}){return(0,S.jsx)(`li`,{"data-slot":`breadcrumb-item`,className:p(`inline-flex items-center gap-1.5`,e),...t})}function y({asChild:e,className:t,...n}){return(0,S.jsx)(e?h:`a`,{"data-slot":`breadcrumb-link`,className:p(`hover:text-foreground transition-colors`,t),...n})}function b({className:e,...t}){return(0,S.jsx)(`span`,{"data-slot":`breadcrumb-page`,role:`link`,"aria-disabled":`true`,"aria-current":`page`,className:p(`text-foreground font-normal`,e),...t})}function x({children:e,className:t,...n}){return(0,S.jsx)(`li`,{"data-slot":`breadcrumb-separator`,role:`presentation`,"aria-hidden":`true`,className:p(`[&>svg]:size-3.5`,t),...n,children:e??(0,S.jsx)(i,{})})}var S;function C(){return(C=e((()=>{t(),m(),r(),a(),f(),S=n(),g.__docgenInfo={description:``,methods:[],displayName:`Breadcrumb`},_.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbList`},v.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbItem`},y.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbLink`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:``}}},b.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbPage`},x.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbSeparator`}})))()}var w,T,E,D,O,k,A;function j(){return(j=e((()=>{o(),c(),u(),C(),w=n(),T={title:`Components/Breadcrumb`,component:g,parameters:{layout:`centered`},tags:[`autodocs`]},E={render:()=>(0,w.jsx)(g,{children:(0,w.jsxs)(_,{children:[(0,w.jsx)(v,{children:(0,w.jsx)(y,{href:`/`,children:`Home`})}),(0,w.jsx)(x,{}),(0,w.jsx)(v,{children:(0,w.jsx)(y,{href:`/docs`,children:`Docs`})}),(0,w.jsx)(x,{}),(0,w.jsx)(v,{children:(0,w.jsx)(b,{children:`Breadcrumb`})})]})})},D={render:()=>(0,w.jsx)(g,{children:(0,w.jsxs)(_,{children:[(0,w.jsx)(v,{children:(0,w.jsx)(y,{href:`/`,children:`Home`})}),(0,w.jsx)(x,{}),(0,w.jsx)(v,{children:(0,w.jsx)(b,{children:`Current Page`})})]})})},O={render:()=>(0,w.jsx)(g,{children:(0,w.jsxs)(_,{children:[(0,w.jsx)(v,{children:(0,w.jsx)(y,{href:`/`,children:`Home`})}),(0,w.jsx)(x,{}),(0,w.jsx)(v,{children:(0,w.jsx)(y,{href:`/products`,children:`Products`})}),(0,w.jsx)(x,{}),(0,w.jsx)(v,{children:(0,w.jsx)(y,{href:`/products/electronics`,children:`Electronics`})}),(0,w.jsx)(x,{}),(0,w.jsx)(v,{children:(0,w.jsx)(y,{href:`/products/electronics/laptops`,children:`Laptops`})}),(0,w.jsx)(x,{}),(0,w.jsx)(v,{children:(0,w.jsx)(b,{children:`MacBook Pro`})})]})})},k={render:()=>(0,w.jsx)(g,{children:(0,w.jsxs)(_,{children:[(0,w.jsx)(v,{children:(0,w.jsxs)(y,{href:`/`,className:`inline-flex items-center`,children:[(0,w.jsx)(s,{size:14,className:`mr-1`}),`Home`]})}),(0,w.jsx)(x,{}),(0,w.jsx)(v,{children:(0,w.jsxs)(y,{href:`/settings`,className:`inline-flex items-center`,children:[(0,w.jsx)(l,{size:14,className:`mr-1`}),`Settings`]})}),(0,w.jsx)(x,{}),(0,w.jsx)(v,{children:(0,w.jsxs)(b,{className:`inline-flex items-center`,children:[(0,w.jsx)(d,{size:14,className:`mr-1`}),`Profile`]})})]})})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A=[`Default`,`TwoLevels`,`DeepNesting`,`WithIcons`]})))()}j();export{O as DeepNesting,E as Default,D as TwoLevels,k as WithIcons,A as __namedExportsOrder,T as default};