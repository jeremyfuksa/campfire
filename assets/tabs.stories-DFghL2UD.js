import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{n as i,t as a}from"./utils-CDLLjGU_.js";import{a as o,n as s,o as c,r as l,s as u,t as d}from"./card-DBtuIKy9.js";import{n as f,t as p}from"./input-NtsHM931.js";import{n as m,t as h}from"./label-C_2QsoTr.js";function g({children:e,value:t,defaultValue:n,onValueChange:r,className:i}){let o=t!==void 0,[s,c]=b.useState(n??``),l=o?t:s,[u,d]=b.useState({}),[f,p]=b.useState({}),m=b.useRef([]),h=b.useCallback(e=>{o||c(e),r?.(e)},[o,r]),g=b.useCallback((e,t,n)=>{m.current.find(t=>t.value===e)||m.current.push({value:e,ref:t}),p(t=>({...t,[e]:n})),!l&&!o&&c(e)},[o,l]),v=b.useCallback((e,t)=>{d(n=>({...n,[e]:t}))},[]),y=b.useCallback((e,t)=>{let n=m.current.findIndex(t=>t.value===e);n===-1||m.current.length===0||m.current[(n+t+m.current.length)%m.current.length].ref.current?.focus()},[]),C=b.useMemo(()=>({value:l,setValue:h,registerTrigger:g,registerContent:v,contentIds:u,triggerIds:f}),[l,h,g,v,u,f]);return(0,x.jsx)(S.Provider,{value:C,children:(0,x.jsx)(`div`,{"data-slot":`tabs`,className:a(`flex flex-col gap-2`,i),children:b.Children.map(e,e=>b.isValidElement(e)&&e.type===_?b.cloneElement(e,{focusRelative:y}):e)})})}function _({className:e,focusRelative:t,...n}){return(0,x.jsx)(`div`,{"data-slot":`tabs-list`,className:a(`bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex`,e),...n,role:`tablist`,onKeyDown:e=>{if(e.key===`ArrowRight`){let n=e.target?.dataset?.value;n&&t?.(n,1)}if(e.key===`ArrowLeft`){let n=e.target?.dataset?.value;n&&t?.(n,-1)}}})}function v({className:e,value:t,disabled:n,onClick:r,...i}){let{value:o,setValue:s,registerTrigger:c,contentIds:l}=C(),u=b.useRef(null),d=o===t,f=l[t],p=b.useId();return b.useEffect(()=>{c(t,u,p)},[c,t,p]),(0,x.jsx)(`button`,{type:`button`,ref:u,role:`tab`,id:p,"data-value":t,"aria-selected":d,"aria-controls":f,disabled:n,"data-slot":`tabs-trigger`,"data-state":d?`active`:`inactive`,className:a(`data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),onClick:w(r,()=>s(t)),...i})}function y({className:e,value:t,children:n,...r}){let{value:i,registerContent:o,triggerIds:s}=C(),c=b.useId(),l=t!==i,u=s[t];return b.useEffect(()=>{o(t,c)},[o,t,c]),(0,x.jsx)(`div`,{role:`tabpanel`,id:c,"aria-labelledby":u,"data-slot":`tabs-content`,"data-state":l?`inactive`:`active`,className:a(`flex-1 outline-hidden`,e),hidden:l,...r,children:n})}var b,x,S,C,w,T=t((()=>{b=e(n(),1),i(),x=r(),S=b.createContext(null),C=()=>{let e=b.useContext(S);if(!e)throw Error(`Tabs components must be used within Tabs`);return e},w=(e,t)=>n=>{e?.(n),n.defaultPrevented||t?.(n)},g.__docgenInfo={description:``,methods:[],displayName:`Tabs`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},value:{required:!1,tsType:{name:`string`},description:``},defaultValue:{required:!1,tsType:{name:`string`},description:``},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},_.__docgenInfo={description:``,methods:[],displayName:`TabsList`,props:{focusRelative:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string, delta: number) => void`,signature:{arguments:[{type:{name:`string`},name:`value`},{type:{name:`number`},name:`delta`}],return:{name:`void`}}},description:``}}},v.__docgenInfo={description:``,methods:[],displayName:`TabsTrigger`,props:{value:{required:!0,tsType:{name:`string`},description:``}}},y.__docgenInfo={description:``,methods:[],displayName:`TabsContent`,props:{value:{required:!0,tsType:{name:`string`},description:``}}}})),E,D,O,k,A,j;t((()=>{T(),u(),f(),m(),E=r(),D={title:`Components/Tabs`,component:g,parameters:{layout:`centered`},tags:[`autodocs`]},O={render:()=>(0,E.jsxs)(g,{defaultValue:`tab1`,className:`w-[400px]`,children:[(0,E.jsxs)(_,{children:[(0,E.jsx)(v,{value:`tab1`,children:`Tab 1`}),(0,E.jsx)(v,{value:`tab2`,children:`Tab 2`}),(0,E.jsx)(v,{value:`tab3`,children:`Tab 3`})]}),(0,E.jsx)(y,{value:`tab1`,children:(0,E.jsx)(`p`,{className:`text-sm`,children:`Content for tab 1`})}),(0,E.jsx)(y,{value:`tab2`,children:(0,E.jsx)(`p`,{className:`text-sm`,children:`Content for tab 2`})}),(0,E.jsx)(y,{value:`tab3`,children:(0,E.jsx)(`p`,{className:`text-sm`,children:`Content for tab 3`})})]})},k={render:()=>(0,E.jsxs)(g,{defaultValue:`account`,className:`w-[400px]`,children:[(0,E.jsxs)(_,{className:`grid w-full grid-cols-2`,children:[(0,E.jsx)(v,{value:`account`,children:`Account`}),(0,E.jsx)(v,{value:`password`,children:`Password`})]}),(0,E.jsx)(y,{value:`account`,children:(0,E.jsxs)(d,{children:[(0,E.jsxs)(o,{children:[(0,E.jsx)(c,{children:`Account`}),(0,E.jsx)(l,{children:`Make changes to your account here.`})]}),(0,E.jsxs)(s,{className:`space-y-2`,children:[(0,E.jsxs)(`div`,{className:`space-y-1`,children:[(0,E.jsx)(h,{htmlFor:`name`,children:`Name`}),(0,E.jsx)(p,{id:`name`,defaultValue:`John Doe`})]}),(0,E.jsxs)(`div`,{className:`space-y-1`,children:[(0,E.jsx)(h,{htmlFor:`username`,children:`Username`}),(0,E.jsx)(p,{id:`username`,defaultValue:`@johndoe`})]})]})]})}),(0,E.jsx)(y,{value:`password`,children:(0,E.jsxs)(d,{children:[(0,E.jsxs)(o,{children:[(0,E.jsx)(c,{children:`Password`}),(0,E.jsx)(l,{children:`Change your password here.`})]}),(0,E.jsxs)(s,{className:`space-y-2`,children:[(0,E.jsxs)(`div`,{className:`space-y-1`,children:[(0,E.jsx)(h,{htmlFor:`current`,children:`Current password`}),(0,E.jsx)(p,{id:`current`,type:`password`})]}),(0,E.jsxs)(`div`,{className:`space-y-1`,children:[(0,E.jsx)(h,{htmlFor:`new`,children:`New password`}),(0,E.jsx)(p,{id:`new`,type:`password`})]})]})]})})]})},A={render:()=>(0,E.jsxs)(g,{defaultValue:`overview`,className:`w-[500px]`,children:[(0,E.jsxs)(_,{children:[(0,E.jsx)(v,{value:`overview`,children:`Overview`}),(0,E.jsx)(v,{value:`analytics`,children:`Analytics`}),(0,E.jsx)(v,{value:`reports`,children:`Reports`}),(0,E.jsx)(v,{value:`settings`,children:`Settings`})]}),(0,E.jsx)(y,{value:`overview`,children:(0,E.jsx)(`p`,{className:`text-sm`,children:`Overview content`})}),(0,E.jsx)(y,{value:`analytics`,children:(0,E.jsx)(`p`,{className:`text-sm`,children:`Analytics content`})}),(0,E.jsx)(y,{value:`reports`,children:(0,E.jsx)(`p`,{className:`text-sm`,children:`Reports content`})}),(0,E.jsx)(y,{value:`settings`,children:(0,E.jsx)(`p`,{className:`text-sm`,children:`Settings content`})})]})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-sm">Content for tab 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-sm">Content for tab 2</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-sm">Content for tab 3</p>
      </TabsContent>
    </Tabs>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="John Doe" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@johndoe" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="overview" className="w-[500px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <p className="text-sm">Overview content</p>
      </TabsContent>
      <TabsContent value="analytics">
        <p className="text-sm">Analytics content</p>
      </TabsContent>
      <TabsContent value="reports">
        <p className="text-sm">Reports content</p>
      </TabsContent>
      <TabsContent value="settings">
        <p className="text-sm">Settings content</p>
      </TabsContent>
    </Tabs>
}`,...A.parameters?.docs?.source}}},j=[`Default`,`WithCards`,`FourTabs`]}))();export{O as Default,A as FourTabs,k as WithCards,j as __namedExportsOrder,D as default};