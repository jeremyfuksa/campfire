import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-_akqGrVk.js";import{A as n,p as r,s as i,t as a,x as o}from"./lucide-react-BZbEj6fH.js";import{r as s,t as c}from"./button-DCO8oKDq.js";import{a as l,i as u,n as d,r as f,t as p}from"./tooltip-Bqvvv6yN.js";var m,h,g,_,v,y,b,x;e((()=>{a(),l(),s(),m=t(),h={title:`Components/Tooltip`,component:p,parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>(0,m.jsx)(f,{children:(0,m.jsx)(e,{})})]},g={render:()=>(0,m.jsxs)(p,{children:[(0,m.jsx)(u,{asChild:!0,children:(0,m.jsx)(c,{variant:`outline`,children:`Hover me`})}),(0,m.jsx)(d,{children:(0,m.jsx)(`p`,{children:`This is a tooltip`})})]})},_={render:()=>(0,m.jsxs)(p,{children:[(0,m.jsx)(u,{asChild:!0,children:(0,m.jsx)(c,{size:`icon`,variant:`outline`,children:(0,m.jsx)(n,{size:16})})}),(0,m.jsx)(d,{children:(0,m.jsx)(`p`,{children:`More information`})})]})},v={render:()=>(0,m.jsxs)(p,{children:[(0,m.jsx)(u,{asChild:!0,children:(0,m.jsx)(c,{variant:`outline`,children:`Help`})}),(0,m.jsx)(d,{className:`max-w-xs`,children:(0,m.jsx)(`p`,{children:`This is a longer tooltip message that provides more detailed information about the feature or action.`})})]})},y={render:()=>(0,m.jsxs)(`div`,{className:`flex gap-2`,children:[(0,m.jsxs)(p,{children:[(0,m.jsx)(u,{asChild:!0,children:(0,m.jsx)(c,{size:`icon`,variant:`outline`,children:(0,m.jsx)(i,{size:16})})}),(0,m.jsx)(d,{children:(0,m.jsx)(`p`,{children:`Delete`})})]}),(0,m.jsxs)(p,{children:[(0,m.jsx)(u,{asChild:!0,children:(0,m.jsx)(c,{size:`icon`,variant:`outline`,children:(0,m.jsx)(o,{size:16})})}),(0,m.jsx)(d,{children:(0,m.jsx)(`p`,{children:`Edit`})})]}),(0,m.jsxs)(p,{children:[(0,m.jsx)(u,{asChild:!0,children:(0,m.jsx)(c,{size:`icon`,variant:`outline`,children:(0,m.jsx)(r,{size:16})})}),(0,m.jsx)(d,{children:(0,m.jsx)(`p`,{children:`Share`})})]})]})},b={render:()=>(0,m.jsxs)(`p`,{className:`text-sm`,children:[`This is some text with a`,` `,(0,m.jsxs)(p,{children:[(0,m.jsx)(u,{asChild:!0,children:(0,m.jsx)(`span`,{className:`underline cursor-help`,children:`tooltip`})}),(0,m.jsx)(d,{children:(0,m.jsx)(`p`,{children:`Additional information`})})]}),` `,`inline.`]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`Default`,`WithIcon`,`LongText`,`Multiple`,`OnText`]}))();export{g as Default,v as LongText,y as Multiple,b as OnText,_ as WithIcon,x as __namedExportsOrder,h as default};