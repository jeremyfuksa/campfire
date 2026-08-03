import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{n as i,t as a}from"./utils-DwVtoTFj.js";var o,s,c,l;function u(){return(u=t((()=>{o=e(n(),1),i(),s=r(),c={success:`bg-success-600`,warning:`bg-warning-600`,danger:`bg-danger-600`,error:`bg-danger-600`,info:`bg-info-600`,neutral:`bg-neutral-500`,default:`bg-neutral-500`,active:`bg-success-500`,away:`bg-warning-500`,offline:`bg-neutral-400`},l=o.forwardRef(({status:e,variant:t,label:n,pulse:r=!1,className:i},o)=>{let l=c[t??e??`neutral`]??c.neutral;return(0,s.jsxs)(`div`,{ref:o,className:a(`inline-flex items-center gap-2`,i),children:[(0,s.jsxs)(`div`,{className:`relative`,children:[(0,s.jsx)(`div`,{className:a(`w-2 h-2 rounded-full`,l)}),r&&(0,s.jsx)(`div`,{className:a(`absolute inset-0 w-2 h-2 rounded-full animate-ping opacity-75`,l)})]}),n&&(0,s.jsx)(`span`,{className:`text-sm text-foreground`,children:n})]})}),l.displayName=`StatusDot`,l.__docgenInfo={description:``,methods:[],displayName:`StatusDot`,props:{variant:{required:!1,tsType:{name:`union`,raw:`| "success"
| "warning"
| "error"
| "danger"
| "info"
| "neutral"
| "default"
| "active"
| "away"
| "offline"`,elements:[{name:`literal`,value:`"success"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"error"`},{name:`literal`,value:`"danger"`},{name:`literal`,value:`"info"`},{name:`literal`,value:`"neutral"`},{name:`literal`,value:`"default"`},{name:`literal`,value:`"active"`},{name:`literal`,value:`"away"`},{name:`literal`,value:`"offline"`}]},description:``},status:{required:!1,tsType:{name:`union`,raw:`| "success"
| "warning"
| "error"
| "danger"
| "info"
| "neutral"
| "default"
| "active"
| "away"
| "offline"`,elements:[{name:`literal`,value:`"success"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"error"`},{name:`literal`,value:`"danger"`},{name:`literal`,value:`"info"`},{name:`literal`,value:`"neutral"`},{name:`literal`,value:`"default"`},{name:`literal`,value:`"active"`},{name:`literal`,value:`"away"`},{name:`literal`,value:`"offline"`}]},description:"@deprecated Use `variant` instead."},label:{required:!1,tsType:{name:`string`},description:``},pulse:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=t((()=>{u(),d=r(),f={title:`Components/StatusDot`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{status:{control:`select`,options:[`success`,`warning`,`error`,`info`,`default`]}}},p={args:{status:`success`}},m={args:{status:`warning`}},h={args:{status:`error`}},g={args:{status:`info`}},_={args:{status:`default`}},v={render:()=>(0,d.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,d.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,d.jsx)(l,{status:`success`}),(0,d.jsx)(`span`,{className:`text-sm`,children:`Success`})]}),(0,d.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,d.jsx)(l,{status:`warning`}),(0,d.jsx)(`span`,{className:`text-sm`,children:`Warning`})]}),(0,d.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,d.jsx)(l,{status:`error`}),(0,d.jsx)(`span`,{className:`text-sm`,children:`Error`})]}),(0,d.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,d.jsx)(l,{status:`info`}),(0,d.jsx)(`span`,{className:`text-sm`,children:`Info`})]}),(0,d.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,d.jsx)(l,{status:`default`}),(0,d.jsx)(`span`,{className:`text-sm`,children:`Default`})]})]})},y={render:()=>(0,d.jsxs)(`div`,{className:`space-y-2 w-[300px]`,children:[(0,d.jsxs)(`div`,{className:`flex items-center justify-between p-2 border rounded-sm`,children:[(0,d.jsx)(`span`,{className:`text-sm`,children:`Server 1`}),(0,d.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,d.jsx)(l,{status:`success`}),(0,d.jsx)(`span`,{className:`text-sm text-muted-foreground`,children:`Online`})]})]}),(0,d.jsxs)(`div`,{className:`flex items-center justify-between p-2 border rounded-sm`,children:[(0,d.jsx)(`span`,{className:`text-sm`,children:`Server 2`}),(0,d.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,d.jsx)(l,{status:`warning`}),(0,d.jsx)(`span`,{className:`text-sm text-muted-foreground`,children:`Degraded`})]})]}),(0,d.jsxs)(`div`,{className:`flex items-center justify-between p-2 border rounded-sm`,children:[(0,d.jsx)(`span`,{className:`text-sm`,children:`Server 3`}),(0,d.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,d.jsx)(l,{status:`error`}),(0,d.jsx)(`span`,{className:`text-sm text-muted-foreground`,children:`Offline`})]})]})]})},b={render:()=>(0,d.jsxs)(`div`,{className:`space-y-3 w-[250px]`,children:[(0,d.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,d.jsxs)(`div`,{className:`relative`,children:[(0,d.jsx)(`div`,{className:`h-10 w-10 rounded-full bg-muted flex items-center justify-center`,children:(0,d.jsx)(`span`,{className:`text-sm font-medium`,children:`JD`})}),(0,d.jsx)(l,{status:`success`,className:`absolute bottom-0 right-0`})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`div`,{className:`text-sm font-medium`,children:`John Doe`}),(0,d.jsx)(`div`,{className:`text-xs text-muted-foreground`,children:`Online`})]})]}),(0,d.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,d.jsxs)(`div`,{className:`relative`,children:[(0,d.jsx)(`div`,{className:`h-10 w-10 rounded-full bg-muted flex items-center justify-center`,children:(0,d.jsx)(`span`,{className:`text-sm font-medium`,children:`JS`})}),(0,d.jsx)(l,{status:`warning`,className:`absolute bottom-0 right-0`})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`div`,{className:`text-sm font-medium`,children:`Jane Smith`}),(0,d.jsx)(`div`,{className:`text-xs text-muted-foreground`,children:`Away`})]})]}),(0,d.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,d.jsxs)(`div`,{className:`relative`,children:[(0,d.jsx)(`div`,{className:`h-10 w-10 rounded-full bg-muted flex items-center justify-center`,children:(0,d.jsx)(`span`,{className:`text-sm font-medium`,children:`BJ`})}),(0,d.jsx)(l,{status:`default`,className:`absolute bottom-0 right-0`})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`div`,{className:`text-sm font-medium`,children:`Bob Johnson`}),(0,d.jsx)(`div`,{className:`text-xs text-muted-foreground`,children:`Offline`})]})]})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    status: "warning"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    status: "error"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    status: "info"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    status: "default"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <StatusDot status="success" />
        <span className="text-sm">Success</span>
      </div>
      <div className="flex items-center gap-2">
        <StatusDot status="warning" />
        <span className="text-sm">Warning</span>
      </div>
      <div className="flex items-center gap-2">
        <StatusDot status="error" />
        <span className="text-sm">Error</span>
      </div>
      <div className="flex items-center gap-2">
        <StatusDot status="info" />
        <span className="text-sm">Info</span>
      </div>
      <div className="flex items-center gap-2">
        <StatusDot status="default" />
        <span className="text-sm">Default</span>
      </div>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-2 w-[300px]">
      <div className="flex items-center justify-between p-2 border rounded-sm">
        <span className="text-sm">Server 1</span>
        <div className="flex items-center gap-2">
          <StatusDot status="success" />
          <span className="text-sm text-muted-foreground">Online</span>
        </div>
      </div>
      <div className="flex items-center justify-between p-2 border rounded-sm">
        <span className="text-sm">Server 2</span>
        <div className="flex items-center gap-2">
          <StatusDot status="warning" />
          <span className="text-sm text-muted-foreground">Degraded</span>
        </div>
      </div>
      <div className="flex items-center justify-between p-2 border rounded-sm">
        <span className="text-sm">Server 3</span>
        <div className="flex items-center gap-2">
          <StatusDot status="error" />
          <span className="text-sm text-muted-foreground">Offline</span>
        </div>
      </div>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-3 w-[250px]">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
            <span className="text-sm font-medium">JD</span>
          </div>
          <StatusDot status="success" className="absolute bottom-0 right-0" />
        </div>
        <div>
          <div className="text-sm font-medium">John Doe</div>
          <div className="text-xs text-muted-foreground">Online</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
            <span className="text-sm font-medium">JS</span>
          </div>
          <StatusDot status="warning" className="absolute bottom-0 right-0" />
        </div>
        <div>
          <div className="text-sm font-medium">Jane Smith</div>
          <div className="text-xs text-muted-foreground">Away</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
            <span className="text-sm font-medium">BJ</span>
          </div>
          <StatusDot status="default" className="absolute bottom-0 right-0" />
        </div>
        <div>
          <div className="text-sm font-medium">Bob Johnson</div>
          <div className="text-xs text-muted-foreground">Offline</div>
        </div>
      </div>
    </div>
}`,...b.parameters?.docs?.source}}},x=[`Success`,`Warning`,`Error`,`Info`,`Default`,`AllStatuses`,`InList`,`UserStatus`]})))()}S();export{v as AllStatuses,_ as Default,h as Error,y as InList,g as Info,p as Success,b as UserStatus,m as Warning,x as __namedExportsOrder,f as default};