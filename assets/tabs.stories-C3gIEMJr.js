import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{n as i,r as a}from"./dist-Dlyn9OaY.js";import{a as o,i as s,r as c,t as l}from"./dist-BK-Z8wev.js";import{n as u,t as d}from"./dist-CVJt7rz-.js";import{n as f,t as p}from"./dist-y9talKpz.js";import{n as ee,t as te}from"./dist-CF8blSvU.js";import{n as ne,t as re}from"./dist-DhTwOzzW.js";import{n as ie,t as m}from"./utils-DwVtoTFj.js";import{a as h,n as g,o as _,r as v,s as ae,t as y}from"./card-BJ0-iLP2.js";import{n as oe,t as b}from"./input-DUy9koNX.js";import{n as se,t as x}from"./label-5Hovh9ZK.js";import{i as ce,n as le,r as S,t as ue}from"./dist-CiQSNTz02.js";function C(e,t){return`${e}-trigger-${t}`}function w(e,t){return`${e}-content-${t}`}var T,E,D,O,de,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=t((()=>{T=e(n(),1),o(),a(),ce(),f(),c(),re(),d(),te(),E=r(),D=`Tabs`,[O,de]=i(D,[S]),k=S(),[A,j]=O(D),M=T.forwardRef((e,t)=>{let{__scopeTabs:n,value:r,onValueChange:i,defaultValue:a,orientation:o=`horizontal`,dir:s,activationMode:c=`automatic`,...d}=e,f=ne(s),[p,te]=u({prop:r,onChange:i,defaultProp:a??``,caller:D});return(0,E.jsx)(A,{scope:n,baseId:ee(),value:p,onValueChange:te,orientation:o,dir:f,activationMode:c,children:(0,E.jsx)(l.div,{dir:f,"data-orientation":o,...d,ref:t})})}),M.displayName=D,N=`TabsList`,P=T.forwardRef((e,t)=>{let{__scopeTabs:n,loop:r=!0,...i}=e,a=j(N,n),o=k(n);return(0,E.jsx)(le,{asChild:!0,...o,orientation:a.orientation,dir:a.dir,loop:r,children:(0,E.jsx)(l.div,{role:`tablist`,"aria-orientation":a.orientation,...i,ref:t})})}),P.displayName=N,F=`TabsTrigger`,I=T.forwardRef((e,t)=>{let{__scopeTabs:n,value:r,disabled:i=!1,...a}=e,o=j(F,n),c=k(n),u=C(o.baseId,r),d=w(o.baseId,r),f=r===o.value;return(0,E.jsx)(ue,{asChild:!0,...c,focusable:!i,active:f,children:(0,E.jsx)(l.button,{type:`button`,role:`tab`,"aria-selected":f,"aria-controls":d,"data-state":f?`active`:`inactive`,"data-disabled":i?``:void 0,disabled:i,id:u,...a,ref:t,onMouseDown:s(e.onMouseDown,e=>{!i&&e.button===0&&e.ctrlKey===!1?o.onValueChange(r):e.preventDefault()}),onKeyDown:s(e.onKeyDown,e=>{[` `,`Enter`].includes(e.key)&&o.onValueChange(r)}),onFocus:s(e.onFocus,()=>{let e=o.activationMode!==`manual`;!f&&!i&&e&&o.onValueChange(r)})})})}),I.displayName=F,L=`TabsContent`,R=T.forwardRef((e,t)=>{let{__scopeTabs:n,value:r,forceMount:i,children:a,...o}=e,s=j(L,n),c=C(s.baseId,r),u=w(s.baseId,r),d=r===s.value,f=T.useRef(d);return T.useEffect(()=>{let e=requestAnimationFrame(()=>f.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,E.jsx)(p,{present:i||d,children:({present:n})=>(0,E.jsx)(l.div,{"data-state":d?`active`:`inactive`,"data-orientation":s.orientation,role:`tabpanel`,"aria-labelledby":c,hidden:!n,id:u,tabIndex:0,...o,ref:t,style:{...e.style,animationDuration:f.current?`0s`:void 0},children:n&&a})})}),R.displayName=L,z=M,B=P,V=I,H=R})))()}function W({className:e,...t}){return(0,J.jsx)(z,{"data-slot":`tabs`,className:m(`flex flex-col gap-2`,e),...t})}function G({className:e,...t}){return(0,J.jsx)(B,{"data-slot":`tabs-list`,className:m(`bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px]`,e),...t})}function K({className:e,...t}){return(0,J.jsx)(V,{"data-slot":`tabs-trigger`,className:m(`data-[state=active]:bg-card dark:data-[state=active]:text-foreground`,`focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring`,`dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30`,`text-foreground dark:text-muted-foreground`,`inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap`,`transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1`,`disabled:pointer-events-none disabled:opacity-50`,`[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),...t})}function q({className:e,...t}){return(0,J.jsx)(H,{"data-slot":`tabs-content`,className:m(`flex-1 outline-hidden`,e),...t})}var J;function Y(){return(Y=t((()=>{n(),U(),ie(),J=r(),W.__docgenInfo={description:``,methods:[],displayName:`Tabs`},G.__docgenInfo={description:``,methods:[],displayName:`TabsList`},K.__docgenInfo={description:``,methods:[],displayName:`TabsTrigger`},q.__docgenInfo={description:``,methods:[],displayName:`TabsContent`}})))()}var X,fe,Z,Q,$,pe;function me(){return(me=t((()=>{Y(),ae(),oe(),se(),X=r(),fe={title:`Components/Tabs`,component:W,parameters:{layout:`centered`},tags:[`autodocs`]},Z={render:()=>(0,X.jsxs)(W,{defaultValue:`tab1`,className:`w-[400px]`,children:[(0,X.jsxs)(G,{children:[(0,X.jsx)(K,{value:`tab1`,children:`Tab 1`}),(0,X.jsx)(K,{value:`tab2`,children:`Tab 2`}),(0,X.jsx)(K,{value:`tab3`,children:`Tab 3`})]}),(0,X.jsx)(q,{value:`tab1`,children:(0,X.jsx)(`p`,{className:`text-sm`,children:`Content for tab 1`})}),(0,X.jsx)(q,{value:`tab2`,children:(0,X.jsx)(`p`,{className:`text-sm`,children:`Content for tab 2`})}),(0,X.jsx)(q,{value:`tab3`,children:(0,X.jsx)(`p`,{className:`text-sm`,children:`Content for tab 3`})})]})},Q={render:()=>(0,X.jsxs)(W,{defaultValue:`account`,className:`w-[400px]`,children:[(0,X.jsxs)(G,{className:`grid w-full grid-cols-2`,children:[(0,X.jsx)(K,{value:`account`,children:`Account`}),(0,X.jsx)(K,{value:`password`,children:`Password`})]}),(0,X.jsx)(q,{value:`account`,children:(0,X.jsxs)(y,{children:[(0,X.jsxs)(h,{children:[(0,X.jsx)(_,{children:`Account`}),(0,X.jsx)(v,{children:`Make changes to your account here.`})]}),(0,X.jsxs)(g,{className:`space-y-2`,children:[(0,X.jsxs)(`div`,{className:`space-y-1`,children:[(0,X.jsx)(x,{htmlFor:`name`,children:`Name`}),(0,X.jsx)(b,{id:`name`,defaultValue:`John Doe`})]}),(0,X.jsxs)(`div`,{className:`space-y-1`,children:[(0,X.jsx)(x,{htmlFor:`username`,children:`Username`}),(0,X.jsx)(b,{id:`username`,defaultValue:`@johndoe`})]})]})]})}),(0,X.jsx)(q,{value:`password`,children:(0,X.jsxs)(y,{children:[(0,X.jsxs)(h,{children:[(0,X.jsx)(_,{children:`Password`}),(0,X.jsx)(v,{children:`Change your password here.`})]}),(0,X.jsxs)(g,{className:`space-y-2`,children:[(0,X.jsxs)(`div`,{className:`space-y-1`,children:[(0,X.jsx)(x,{htmlFor:`current`,children:`Current password`}),(0,X.jsx)(b,{id:`current`,type:`password`})]}),(0,X.jsxs)(`div`,{className:`space-y-1`,children:[(0,X.jsx)(x,{htmlFor:`new`,children:`New password`}),(0,X.jsx)(b,{id:`new`,type:`password`})]})]})]})})]})},$={render:()=>(0,X.jsxs)(W,{defaultValue:`overview`,className:`w-[500px]`,children:[(0,X.jsxs)(G,{children:[(0,X.jsx)(K,{value:`overview`,children:`Overview`}),(0,X.jsx)(K,{value:`analytics`,children:`Analytics`}),(0,X.jsx)(K,{value:`reports`,children:`Reports`}),(0,X.jsx)(K,{value:`settings`,children:`Settings`})]}),(0,X.jsx)(q,{value:`overview`,children:(0,X.jsx)(`p`,{className:`text-sm`,children:`Overview content`})}),(0,X.jsx)(q,{value:`analytics`,children:(0,X.jsx)(`p`,{className:`text-sm`,children:`Analytics content`})}),(0,X.jsx)(q,{value:`reports`,children:(0,X.jsx)(`p`,{className:`text-sm`,children:`Reports content`})}),(0,X.jsx)(q,{value:`settings`,children:(0,X.jsx)(`p`,{className:`text-sm`,children:`Settings content`})})]})},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},pe=[`Default`,`WithCards`,`FourTabs`]})))()}me();export{Z as Default,$ as FourTabs,Q as WithCards,pe as __namedExportsOrder,fe as default};