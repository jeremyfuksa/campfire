import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-_akqGrVk.js";import{r as n,t as r}from"./button-Bvgam3-u.js";import{a as i,c as a,i as o,n as s,o as c,r as l,s as u,t as d}from"./dialog-DHBzXnHu.js";import{n as f,t as p}from"./input-NtsHM931.js";import{n as m,t as h}from"./label-C_2QsoTr.js";var g,_,v,y,b,x,S;e((()=>{a(),n(),f(),m(),g=t(),_={title:`Components/Dialog`,component:d,parameters:{layout:`centered`},tags:[`autodocs`]},v={render:()=>(0,g.jsxs)(d,{children:[(0,g.jsx)(u,{asChild:!0,children:(0,g.jsx)(r,{children:`Open Dialog`})}),(0,g.jsxs)(s,{children:[(0,g.jsxs)(i,{children:[(0,g.jsx)(c,{children:`Dialog Title`}),(0,g.jsx)(l,{children:`This is a dialog description explaining what this dialog is for.`})]}),(0,g.jsx)(`div`,{className:`py-4`,children:`Dialog content goes here`}),(0,g.jsxs)(o,{children:[(0,g.jsx)(r,{variant:`outline`,children:`Cancel`}),(0,g.jsx)(r,{children:`Confirm`})]})]})]})},y={render:()=>(0,g.jsxs)(d,{children:[(0,g.jsx)(u,{asChild:!0,children:(0,g.jsx)(r,{children:`Edit Profile`})}),(0,g.jsxs)(s,{children:[(0,g.jsxs)(i,{children:[(0,g.jsx)(c,{children:`Edit Profile`}),(0,g.jsx)(l,{children:`Make changes to your profile here. Click save when you're done.`})]}),(0,g.jsxs)(`div`,{className:`space-y-4 py-4`,children:[(0,g.jsxs)(`div`,{className:`space-y-2`,children:[(0,g.jsx)(h,{htmlFor:`name`,children:`Name`}),(0,g.jsx)(p,{id:`name`,defaultValue:`John Doe`})]}),(0,g.jsxs)(`div`,{className:`space-y-2`,children:[(0,g.jsx)(h,{htmlFor:`username`,children:`Username`}),(0,g.jsx)(p,{id:`username`,defaultValue:`@johndoe`})]})]}),(0,g.jsx)(o,{children:(0,g.jsx)(r,{type:`submit`,children:`Save changes`})})]})]})},b={render:()=>(0,g.jsxs)(d,{children:[(0,g.jsx)(u,{asChild:!0,children:(0,g.jsx)(r,{variant:`destructive`,children:`Delete Item`})}),(0,g.jsxs)(s,{children:[(0,g.jsxs)(i,{children:[(0,g.jsx)(c,{children:`Are you sure?`}),(0,g.jsx)(l,{children:`This action cannot be undone. This will permanently delete your item.`})]}),(0,g.jsxs)(o,{children:[(0,g.jsx)(r,{variant:`outline`,children:`Cancel`}),(0,g.jsx)(r,{variant:`destructive`,children:`Delete`})]})]})]})},x={render:()=>(0,g.jsxs)(d,{children:[(0,g.jsx)(u,{asChild:!0,children:(0,g.jsx)(r,{children:`View Details`})}),(0,g.jsxs)(s,{children:[(0,g.jsxs)(i,{children:[(0,g.jsx)(c,{children:`Details`}),(0,g.jsx)(l,{children:`Here are the details you requested.`})]}),(0,g.jsx)(`div`,{className:`py-4`,children:(0,g.jsx)(`p`,{children:`This dialog doesn't have a footer with action buttons.`})})]})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a dialog description explaining what this dialog is for.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">Dialog content goes here</div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="@johndoe" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Item</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your item.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>View Details</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Details</DialogTitle>
          <DialogDescription>
            Here are the details you requested.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>This dialog doesn't have a footer with action buttons.</p>
        </div>
      </DialogContent>
    </Dialog>
}`,...x.parameters?.docs?.source}}},S=[`Default`,`WithForm`,`Confirmation`,`NoFooter`]}))();export{b as Confirmation,v as Default,x as NoFooter,y as WithForm,S as __namedExportsOrder,_ as default};