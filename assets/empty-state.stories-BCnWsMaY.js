import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-XedgCGTy.js";import{t as n}from"./jsx-runtime-_akqGrVk.js";import{D as r,L as i,X as a,et as o,h as s,j as c,o as l,t as u}from"./lucide-react-B9ev7WLa.js";import{r as d,t as f}from"./button-RVltMg_M.js";function p({icon:e,title:t,description:n,action:r,className:i=``}){let a=e??(0,m.jsx)(c,{size:24,"aria-hidden":`true`});return(0,m.jsxs)(`div`,{className:`flex flex-col items-center justify-center py-16 px-4 text-center ${i}`,children:[(0,m.jsx)(`div`,{className:`mb-4 flex items-center justify-center w-16 h-16 rounded-full`,"data-testid":`empty-state-icon`,style:{backgroundColor:`var(--bg-muted)`,color:`var(--text-tertiary)`},children:a}),(0,m.jsx)(`h3`,{className:`mb-2`,children:t}),n&&(0,m.jsx)(`p`,{style:{color:`var(--text-secondary)`,maxWidth:`400px`},children:n}),r&&(0,m.jsx)(f,{onClick:r.onClick,className:`mt-4`,children:r.label})]})}var m,h=e((()=>{t(),u(),d(),m=n(),p.__docgenInfo={description:``,methods:[],displayName:`EmptyState`,props:{icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},title:{required:!0,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},action:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  label: string;
  onClick: () => void;
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`onClick`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!0}}]}},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),g,_,v,y,b,x,S,C,w,T,E;e((()=>{u(),h(),d(),g=n(),_={title:`Components/EmptyState`,component:p,parameters:{layout:`centered`},tags:[`autodocs`]},v={args:{title:`No data found`,description:`Get started by creating your first item`}},y={args:{title:`No messages`,description:`You don't have any messages yet`,icon:(0,g.jsx)(c,{size:40})}},b={args:{title:`No projects`,description:`Create your first project to get started`,icon:(0,g.jsx)(i,{size:40}),children:(0,g.jsx)(f,{children:`Create Project`})}},x={args:{title:`No results found`,description:`Try adjusting your search or filter to find what you're looking for`,icon:(0,g.jsx)(s,{size:40}),children:(0,g.jsx)(f,{variant:`outline`,children:`Clear Filters`})}},S={args:{title:`Inbox Zero!`,description:`All caught up! You have no unread messages.`,icon:(0,g.jsx)(o,{size:40,className:`text-green-500`})}},C={args:{title:`No files uploaded`,description:`Upload your first file to get started`,icon:(0,g.jsx)(a,{size:40}),children:(0,g.jsxs)(`div`,{className:`flex gap-2`,children:[(0,g.jsx)(f,{children:`Upload File`}),(0,g.jsx)(f,{variant:`outline`,children:`Browse Examples`})]})}},w={args:{title:`No connections`,description:`Connect your accounts to get started with integrations`,icon:(0,g.jsx)(r,{size:40}),children:(0,g.jsx)(f,{children:`Add Connection`})}},T={args:{title:`Something went wrong`,description:`We encountered an error loading your data. Please try again.`,icon:(0,g.jsx)(l,{size:40,className:`text-destructive`}),children:(0,g.jsx)(f,{variant:`outline`,children:`Retry`})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: "No data found",
    description: "Get started by creating your first item"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: "No messages",
    description: "You don't have any messages yet",
    icon: <Inbox size={40} />
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: "No projects",
    description: "Create your first project to get started",
    icon: <Folder size={40} />,
    children: <Button>Create Project</Button>
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: "No results found",
    description: "Try adjusting your search or filter to find what you're looking for",
    icon: <Search size={40} />,
    children: <Button variant="outline">Clear Filters</Button>
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Inbox Zero!",
    description: "All caught up! You have no unread messages.",
    icon: <CheckCircle2 size={40} className="text-green-500" />
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    title: "No files uploaded",
    description: "Upload your first file to get started",
    icon: <CloudUpload size={40} />,
    children: <div className="flex gap-2">
        <Button>Upload File</Button>
        <Button variant="outline">Browse Examples</Button>
      </div>
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    title: "No connections",
    description: "Connect your accounts to get started with integrations",
    icon: <LinkIcon size={40} />,
    children: <Button>Add Connection</Button>
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Something went wrong",
    description: "We encountered an error loading your data. Please try again.",
    icon: <AlertTriangle size={40} className="text-destructive" />,
    children: <Button variant="outline">Retry</Button>
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`WithIcon`,`WithAction`,`NoResults`,`EmptyInbox`,`NoFiles`,`NoConnections`,`ErrorState`]}))();export{v as Default,S as EmptyInbox,T as ErrorState,w as NoConnections,C as NoFiles,x as NoResults,b as WithAction,y as WithIcon,E as __namedExportsOrder,_ as default};