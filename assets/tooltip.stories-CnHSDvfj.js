import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{n,t as r}from"./info-BPsDxeVD.js";import{a as i,i as a,n as o,o as s,r as c,t as l}from"./trash-2-DXq-QHfO.js";import{r as u,t as d}from"./button-CTqIoSi4.js";import{a as f,i as p,n as m,r as h,t as g}from"./tooltip-DOJBPnVr.js";var _,v,y,b,x,S,C,w;function T(){return(T=e((()=>{n(),s(),a(),o(),f(),u(),_=t(),v={title:`Components/Tooltip`,component:g,parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>(0,_.jsx)(h,{children:(0,_.jsx)(e,{})})]},y={render:()=>(0,_.jsxs)(g,{children:[(0,_.jsx)(p,{asChild:!0,children:(0,_.jsx)(d,{variant:`outline`,children:`Hover me`})}),(0,_.jsx)(m,{children:(0,_.jsx)(`p`,{children:`This is a tooltip`})})]})},b={render:()=>(0,_.jsxs)(g,{children:[(0,_.jsx)(p,{asChild:!0,children:(0,_.jsx)(d,{size:`icon`,variant:`outline`,children:(0,_.jsx)(r,{size:16})})}),(0,_.jsx)(m,{children:(0,_.jsx)(`p`,{children:`More information`})})]})},x={render:()=>(0,_.jsxs)(g,{children:[(0,_.jsx)(p,{asChild:!0,children:(0,_.jsx)(d,{variant:`outline`,children:`Help`})}),(0,_.jsx)(m,{className:`max-w-xs`,children:(0,_.jsx)(`p`,{children:`This is a longer tooltip message that provides more detailed information about the feature or action.`})})]})},S={render:()=>(0,_.jsxs)(`div`,{className:`flex gap-2`,children:[(0,_.jsxs)(g,{children:[(0,_.jsx)(p,{asChild:!0,children:(0,_.jsx)(d,{size:`icon`,variant:`outline`,children:(0,_.jsx)(l,{size:16})})}),(0,_.jsx)(m,{children:(0,_.jsx)(`p`,{children:`Delete`})})]}),(0,_.jsxs)(g,{children:[(0,_.jsx)(p,{asChild:!0,children:(0,_.jsx)(d,{size:`icon`,variant:`outline`,children:(0,_.jsx)(i,{size:16})})}),(0,_.jsx)(m,{children:(0,_.jsx)(`p`,{children:`Edit`})})]}),(0,_.jsxs)(g,{children:[(0,_.jsx)(p,{asChild:!0,children:(0,_.jsx)(d,{size:`icon`,variant:`outline`,children:(0,_.jsx)(c,{size:16})})}),(0,_.jsx)(m,{children:(0,_.jsx)(`p`,{children:`Share`})})]})]})},C={render:()=>(0,_.jsxs)(`p`,{className:`text-sm`,children:[`This is some text with a`,` `,(0,_.jsxs)(g,{children:[(0,_.jsx)(p,{asChild:!0,children:(0,_.jsx)(`span`,{className:`underline cursor-help`,children:`tooltip`})}),(0,_.jsx)(m,{children:(0,_.jsx)(`p`,{children:`Additional information`})})]}),` `,`inline.`]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <Button size="icon" variant="outline">
          <Info size={16} />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>More information</p>
      </TooltipContent>
    </Tooltip>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Help</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <p>
          This is a longer tooltip message that provides more detailed
          information about the feature or action.
        </p>
      </TooltipContent>
    </Tooltip>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="outline">
            <Trash2 size={16} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Delete</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="outline">
            <Pencil size={16} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Edit</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="outline">
            <Share2 size={16} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Share</p>
        </TooltipContent>
      </Tooltip>
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <p className="text-sm">
      This is some text with a{" "}
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="underline cursor-help">tooltip</span>
        </TooltipTrigger>
        <TooltipContent>
          <p>Additional information</p>
        </TooltipContent>
      </Tooltip>{" "}
      inline.
    </p>
}`,...C.parameters?.docs?.source}}},w=[`Default`,`WithIcon`,`LongText`,`Multiple`,`OnText`]})))()}T();export{y as Default,x as LongText,S as Multiple,C as OnText,b as WithIcon,w as __namedExportsOrder,v as default};