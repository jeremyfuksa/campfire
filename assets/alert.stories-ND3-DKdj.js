import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-XedgCGTy.js";import{t as n}from"./jsx-runtime-_akqGrVk.js";import{A as r,t as i}from"./lucide-react-BZbEj6fH.js";import{n as a,t as o}from"./utils-CDLLjGU_.js";import{n as s,t as c}from"./dist-BmBTYeNk.js";function l({className:e,variant:t,...n}){return(0,f.jsx)(`div`,{"data-slot":`alert`,role:`alert`,className:o(p({variant:t}),e),...n})}function u({className:e,...t}){return(0,f.jsx)(`div`,{"data-slot":`alert-title`,className:o(`col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight`,e),...t})}function d({className:e,...t}){return(0,f.jsx)(`div`,{"data-slot":`alert-description`,className:o(`text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed`,e),...t})}var f,p,m=e((()=>{t(),s(),a(),f=n(),p=c(`relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[--spacing(4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current animate-campfire-enter`,{variants:{variant:{default:`bg-card text-card-foreground`,destructive:`text-destructive bg-card [&>svg]:text-current data-[slot=alert-description]:*:text-destructive/90`,success:`border-success-200 bg-success-50 text-success-900 [&>svg]:text-success-600 data-[slot=alert-description]:*:text-success-800`,warning:`border-warning-300 bg-warning-50 text-warning-900 [&>svg]:text-warning-700 data-[slot=alert-description]:*:text-warning-800`,info:`border-info-300 bg-info-50 text-info-900 [&>svg]:text-info-700 data-[slot=alert-description]:*:text-info-800`}},defaultVariants:{variant:`default`}}),l.__docgenInfo={description:``,methods:[],displayName:`Alert`},u.__docgenInfo={description:``,methods:[],displayName:`AlertTitle`},d.__docgenInfo={description:``,methods:[],displayName:`AlertDescription`}})),h,g,_,v,y,b,x,S;e((()=>{i(),m(),h=n(),g={title:`Components/Alert`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`destructive`]}}},_={render:()=>(0,h.jsxs)(l,{className:`w-[400px]`,children:[(0,h.jsx)(u,{children:`Heads up!`}),(0,h.jsx)(d,{children:`You can add components to your app using the CLI.`})]})},v={render:()=>(0,h.jsxs)(l,{variant:`destructive`,className:`w-[400px]`,children:[(0,h.jsx)(u,{children:`Error`}),(0,h.jsx)(d,{children:`Your session has expired. Please log in again.`})]})},y={render:()=>(0,h.jsxs)(l,{className:`w-[400px]`,children:[(0,h.jsx)(r,{size:16,className:`mr-2`}),(0,h.jsx)(u,{children:`Information`}),(0,h.jsx)(d,{children:`This is an informational message with an icon.`})]})},b={render:()=>(0,h.jsx)(l,{className:`w-[400px]`,children:(0,h.jsx)(u,{children:`Operation successful`})})},x={render:()=>(0,h.jsx)(l,{className:`w-[400px]`,children:(0,h.jsx)(d,{children:`This alert only has a description without a title.`})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Alert className="w-[400px]">
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Alert variant="destructive" className="w-[400px]">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Alert className="w-[400px]">
      <Info size={16} className="mr-2" />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This is an informational message with an icon.
      </AlertDescription>
    </Alert>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Alert className="w-[400px]">
      <AlertTitle>Operation successful</AlertTitle>
    </Alert>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Alert className="w-[400px]">
      <AlertDescription>
        This alert only has a description without a title.
      </AlertDescription>
    </Alert>
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Destructive`,`WithIcon`,`TitleOnly`,`DescriptionOnly`]}))();export{_ as Default,x as DescriptionOnly,v as Destructive,b as TitleOnly,y as WithIcon,S as __namedExportsOrder,g as default};