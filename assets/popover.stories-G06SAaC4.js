import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{n,t as r}from"./log-out-B9U8oXhP.js";import{n as i,t as a}from"./settings-BE-K_bqF.js";import{n as o,t as s}from"./user-D0RLBsr5.js";import{r as c,t as l}from"./button-CTqIoSi4.js";import{i as u,n as d,r as f,t as p}from"./popover-BmT-GDOK.js";import{n as m,t as h}from"./input-DUy9koNX.js";import{n as g,t as _}from"./label-5Hovh9ZK.js";var v,y,b,x,S,C,w;function T(){return(T=e((()=>{n(),i(),o(),u(),c(),m(),g(),v=t(),y={title:`Components/Popover`,component:p,parameters:{layout:`centered`},tags:[`autodocs`]},b={render:()=>(0,v.jsxs)(p,{children:[(0,v.jsx)(f,{asChild:!0,children:(0,v.jsx)(l,{variant:`outline`,children:`Open Popover`})}),(0,v.jsx)(d,{children:(0,v.jsx)(`p`,{className:`text-sm`,children:`This is a popover content`})})]})},x={render:()=>(0,v.jsxs)(p,{children:[(0,v.jsx)(f,{asChild:!0,children:(0,v.jsx)(l,{variant:`outline`,children:`Settings`})}),(0,v.jsx)(d,{className:`w-80`,children:(0,v.jsxs)(`div`,{className:`space-y-4`,children:[(0,v.jsxs)(`div`,{className:`space-y-2`,children:[(0,v.jsx)(`h4`,{className:`font-medium leading-none`,children:`Dimensions`}),(0,v.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Set the dimensions for the layer.`})]}),(0,v.jsxs)(`div`,{className:`grid gap-2`,children:[(0,v.jsxs)(`div`,{className:`grid grid-cols-3 items-center gap-4`,children:[(0,v.jsx)(_,{htmlFor:`width`,children:`Width`}),(0,v.jsx)(h,{id:`width`,defaultValue:`100%`,className:`col-span-2 h-8`})]}),(0,v.jsxs)(`div`,{className:`grid grid-cols-3 items-center gap-4`,children:[(0,v.jsx)(_,{htmlFor:`height`,children:`Height`}),(0,v.jsx)(h,{id:`height`,defaultValue:`25px`,className:`col-span-2 h-8`})]})]})]})})]})},S={render:()=>(0,v.jsxs)(p,{children:[(0,v.jsx)(f,{asChild:!0,children:(0,v.jsx)(l,{variant:`outline`,children:`Actions`})}),(0,v.jsx)(d,{className:`w-56`,children:(0,v.jsxs)(`div`,{className:`space-y-1`,children:[(0,v.jsxs)(`button`,{className:`w-full text-left px-2 py-1.5 text-sm rounded-sm hover:bg-accent inline-flex items-center`,children:[(0,v.jsx)(s,{size:14,className:`mr-2`}),`Profile`]}),(0,v.jsxs)(`button`,{className:`w-full text-left px-2 py-1.5 text-sm rounded-sm hover:bg-accent inline-flex items-center`,children:[(0,v.jsx)(a,{size:14,className:`mr-2`}),`Settings`]}),(0,v.jsxs)(`button`,{className:`w-full text-left px-2 py-1.5 text-sm rounded-sm hover:bg-accent inline-flex items-center`,children:[(0,v.jsx)(r,{size:14,className:`mr-2`}),`Logout`]})]})})]})},C={render:()=>(0,v.jsxs)(`div`,{className:`flex gap-2`,children:[(0,v.jsxs)(p,{children:[(0,v.jsx)(f,{asChild:!0,children:(0,v.jsx)(l,{variant:`outline`,children:`Top`})}),(0,v.jsx)(d,{side:`top`,children:(0,v.jsx)(`p`,{className:`text-sm`,children:`Positioned on top`})})]}),(0,v.jsxs)(p,{children:[(0,v.jsx)(f,{asChild:!0,children:(0,v.jsx)(l,{variant:`outline`,children:`Bottom`})}),(0,v.jsx)(d,{side:`bottom`,children:(0,v.jsx)(`p`,{className:`text-sm`,children:`Positioned on bottom`})})]}),(0,v.jsxs)(p,{children:[(0,v.jsx)(f,{asChild:!0,children:(0,v.jsx)(l,{variant:`outline`,children:`Left`})}),(0,v.jsx)(d,{side:`left`,children:(0,v.jsx)(`p`,{className:`text-sm`,children:`Positioned on left`})})]}),(0,v.jsxs)(p,{children:[(0,v.jsx)(f,{asChild:!0,children:(0,v.jsx)(l,{variant:`outline`,children:`Right`})}),(0,v.jsx)(d,{side:`right`,children:(0,v.jsx)(`p`,{className:`text-sm`,children:`Positioned on right`})})]})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p className="text-sm">This is a popover content</p>
      </PopoverContent>
    </Popover>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Settings</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Actions</Button>
      </PopoverTrigger>
      <PopoverContent className="w-56">
        <div className="space-y-1">
          <button className="w-full text-left px-2 py-1.5 text-sm rounded-sm hover:bg-accent inline-flex items-center">
            <User size={14} className="mr-2" />
            Profile
          </button>
          <button className="w-full text-left px-2 py-1.5 text-sm rounded-sm hover:bg-accent inline-flex items-center">
            <Settings size={14} className="mr-2" />
            Settings
          </button>
          <button className="w-full text-left px-2 py-1.5 text-sm rounded-sm hover:bg-accent inline-flex items-center">
            <LogOut size={14} className="mr-2" />
            Logout
          </button>
        </div>
      </PopoverContent>
    </Popover>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Top</Button>
        </PopoverTrigger>
        <PopoverContent side="top">
          <p className="text-sm">Positioned on top</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </PopoverTrigger>
        <PopoverContent side="bottom">
          <p className="text-sm">Positioned on bottom</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Left</Button>
        </PopoverTrigger>
        <PopoverContent side="left">
          <p className="text-sm">Positioned on left</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Right</Button>
        </PopoverTrigger>
        <PopoverContent side="right">
          <p className="text-sm">Positioned on right</p>
        </PopoverContent>
      </Popover>
    </div>
}`,...C.parameters?.docs?.source}}},w=[`Default`,`WithForm`,`WithList`,`Positioning`]})))()}T();export{b as Default,C as Positioning,x as WithForm,S as WithList,w as __namedExportsOrder,y as default};