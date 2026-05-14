import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{n as i,r as a}from"./dist-DIs3RLZS.js";import{a as o,i as s,r as c,t as l}from"./dist-BEqORXIG.js";import{n as u,t as d}from"./dist-Vz0ZWiBO.js";import{n as f,t as p}from"./dist-CKqdNr-m.js";import{n as ee,t as m}from"./dist-C115CmG0.js";import{n as te,t as ne}from"./dist-ZI7lRPHM.js";import{n as re,t as h}from"./utils-D2Sa0ztS.js";import{a as g,n as _,o as v,r as y,s as ie,t as b}from"./card-C7E5zA26.js";import{n as ae,t as x}from"./input-s7NpxzvF.js";import{n as oe,t as S}from"./label-DWfunzZ2.js";import{i as se,n as ce,r as C,t as le}from"./dist-CUyA5M0r.js";function w(e,t){return`${e}-trigger-${t}`}function T(e,t){return`${e}-content-${t}`}var E,D,O,k,ue,A,j,M,N,P,F,I,L,R,z,B,V,H,U,de=t((()=>{E=e(n(),1),o(),a(),se(),f(),c(),ne(),d(),m(),D=r(),O=`Tabs`,[k,ue]=i(O,[C]),A=C(),[j,M]=k(O),N=E.forwardRef((e,t)=>{let{__scopeTabs:n,value:r,onValueChange:i,defaultValue:a,orientation:o=`horizontal`,dir:s,activationMode:c=`automatic`,...d}=e,f=te(s),[p,m]=u({prop:r,onChange:i,defaultProp:a??``,caller:O});return(0,D.jsx)(j,{scope:n,baseId:ee(),value:p,onValueChange:m,orientation:o,dir:f,activationMode:c,children:(0,D.jsx)(l.div,{dir:f,"data-orientation":o,...d,ref:t})})}),N.displayName=O,P=`TabsList`,F=E.forwardRef((e,t)=>{let{__scopeTabs:n,loop:r=!0,...i}=e,a=M(P,n),o=A(n);return(0,D.jsx)(ce,{asChild:!0,...o,orientation:a.orientation,dir:a.dir,loop:r,children:(0,D.jsx)(l.div,{role:`tablist`,"aria-orientation":a.orientation,...i,ref:t})})}),F.displayName=P,I=`TabsTrigger`,L=E.forwardRef((e,t)=>{let{__scopeTabs:n,value:r,disabled:i=!1,...a}=e,o=M(I,n),c=A(n),u=w(o.baseId,r),d=T(o.baseId,r),f=r===o.value;return(0,D.jsx)(le,{asChild:!0,...c,focusable:!i,active:f,children:(0,D.jsx)(l.button,{type:`button`,role:`tab`,"aria-selected":f,"aria-controls":d,"data-state":f?`active`:`inactive`,"data-disabled":i?``:void 0,disabled:i,id:u,...a,ref:t,onMouseDown:s(e.onMouseDown,e=>{!i&&e.button===0&&e.ctrlKey===!1?o.onValueChange(r):e.preventDefault()}),onKeyDown:s(e.onKeyDown,e=>{[` `,`Enter`].includes(e.key)&&o.onValueChange(r)}),onFocus:s(e.onFocus,()=>{let e=o.activationMode!==`manual`;!f&&!i&&e&&o.onValueChange(r)})})})}),L.displayName=I,R=`TabsContent`,z=E.forwardRef((e,t)=>{let{__scopeTabs:n,value:r,forceMount:i,children:a,...o}=e,s=M(R,n),c=w(s.baseId,r),u=T(s.baseId,r),d=r===s.value,f=E.useRef(d);return E.useEffect(()=>{let e=requestAnimationFrame(()=>f.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,D.jsx)(p,{present:i||d,children:({present:n})=>(0,D.jsx)(l.div,{"data-state":d?`active`:`inactive`,"data-orientation":s.orientation,role:`tabpanel`,"aria-labelledby":c,hidden:!n,id:u,tabIndex:0,...o,ref:t,style:{...e.style,animationDuration:f.current?`0s`:void 0},children:n&&a})})}),z.displayName=R,B=N,V=F,H=L,U=z}));function W({className:e,...t}){return(0,J.jsx)(B,{"data-slot":`tabs`,className:h(`flex flex-col gap-2`,e),...t})}function G({className:e,...t}){return(0,J.jsx)(V,{"data-slot":`tabs-list`,className:h(`bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px]`,e),...t})}function K({className:e,...t}){return(0,J.jsx)(H,{"data-slot":`tabs-trigger`,className:h(`data-[state=active]:bg-card dark:data-[state=active]:text-foreground`,`focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring`,`dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30`,`text-foreground dark:text-muted-foreground`,`inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap`,`transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1`,`disabled:pointer-events-none disabled:opacity-50`,`[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),...t})}function q({className:e,...t}){return(0,J.jsx)(U,{"data-slot":`tabs-content`,className:h(`flex-1 outline-hidden`,e),...t})}var J,fe=t((()=>{n(),de(),re(),J=r(),W.__docgenInfo={description:``,methods:[],displayName:`Tabs`},G.__docgenInfo={description:``,methods:[],displayName:`TabsList`},K.__docgenInfo={description:``,methods:[],displayName:`TabsTrigger`},q.__docgenInfo={description:``,methods:[],displayName:`TabsContent`}})),Y,X,Z,Q,$,pe;t((()=>{fe(),ie(),ae(),oe(),Y=r(),X={title:`Components/Tabs`,component:W,parameters:{layout:`centered`},tags:[`autodocs`]},Z={render:()=>(0,Y.jsxs)(W,{defaultValue:`tab1`,className:`w-[400px]`,children:[(0,Y.jsxs)(G,{children:[(0,Y.jsx)(K,{value:`tab1`,children:`Tab 1`}),(0,Y.jsx)(K,{value:`tab2`,children:`Tab 2`}),(0,Y.jsx)(K,{value:`tab3`,children:`Tab 3`})]}),(0,Y.jsx)(q,{value:`tab1`,children:(0,Y.jsx)(`p`,{className:`text-sm`,children:`Content for tab 1`})}),(0,Y.jsx)(q,{value:`tab2`,children:(0,Y.jsx)(`p`,{className:`text-sm`,children:`Content for tab 2`})}),(0,Y.jsx)(q,{value:`tab3`,children:(0,Y.jsx)(`p`,{className:`text-sm`,children:`Content for tab 3`})})]})},Q={render:()=>(0,Y.jsxs)(W,{defaultValue:`account`,className:`w-[400px]`,children:[(0,Y.jsxs)(G,{className:`grid w-full grid-cols-2`,children:[(0,Y.jsx)(K,{value:`account`,children:`Account`}),(0,Y.jsx)(K,{value:`password`,children:`Password`})]}),(0,Y.jsx)(q,{value:`account`,children:(0,Y.jsxs)(b,{children:[(0,Y.jsxs)(g,{children:[(0,Y.jsx)(v,{children:`Account`}),(0,Y.jsx)(y,{children:`Make changes to your account here.`})]}),(0,Y.jsxs)(_,{className:`space-y-2`,children:[(0,Y.jsxs)(`div`,{className:`space-y-1`,children:[(0,Y.jsx)(S,{htmlFor:`name`,children:`Name`}),(0,Y.jsx)(x,{id:`name`,defaultValue:`John Doe`})]}),(0,Y.jsxs)(`div`,{className:`space-y-1`,children:[(0,Y.jsx)(S,{htmlFor:`username`,children:`Username`}),(0,Y.jsx)(x,{id:`username`,defaultValue:`@johndoe`})]})]})]})}),(0,Y.jsx)(q,{value:`password`,children:(0,Y.jsxs)(b,{children:[(0,Y.jsxs)(g,{children:[(0,Y.jsx)(v,{children:`Password`}),(0,Y.jsx)(y,{children:`Change your password here.`})]}),(0,Y.jsxs)(_,{className:`space-y-2`,children:[(0,Y.jsxs)(`div`,{className:`space-y-1`,children:[(0,Y.jsx)(S,{htmlFor:`current`,children:`Current password`}),(0,Y.jsx)(x,{id:`current`,type:`password`})]}),(0,Y.jsxs)(`div`,{className:`space-y-1`,children:[(0,Y.jsx)(S,{htmlFor:`new`,children:`New password`}),(0,Y.jsx)(x,{id:`new`,type:`password`})]})]})]})})]})},$={render:()=>(0,Y.jsxs)(W,{defaultValue:`overview`,className:`w-[500px]`,children:[(0,Y.jsxs)(G,{children:[(0,Y.jsx)(K,{value:`overview`,children:`Overview`}),(0,Y.jsx)(K,{value:`analytics`,children:`Analytics`}),(0,Y.jsx)(K,{value:`reports`,children:`Reports`}),(0,Y.jsx)(K,{value:`settings`,children:`Settings`})]}),(0,Y.jsx)(q,{value:`overview`,children:(0,Y.jsx)(`p`,{className:`text-sm`,children:`Overview content`})}),(0,Y.jsx)(q,{value:`analytics`,children:(0,Y.jsx)(`p`,{className:`text-sm`,children:`Analytics content`})}),(0,Y.jsx)(q,{value:`reports`,children:(0,Y.jsx)(`p`,{className:`text-sm`,children:`Reports content`})}),(0,Y.jsx)(q,{value:`settings`,children:(0,Y.jsx)(`p`,{className:`text-sm`,children:`Settings content`})})]})},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},pe=[`Default`,`WithCards`,`FourTabs`]}))();export{Z as Default,$ as FourTabs,Q as WithCards,pe as __namedExportsOrder,X as default};