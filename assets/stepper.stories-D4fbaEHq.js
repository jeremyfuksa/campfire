import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{n as i,t as a}from"./check-B4Mqbaut.js";import{n as o,t as s}from"./utils-DwVtoTFj.js";import{r as c,t as l}from"./button-CTqIoSi4.js";function u({steps:e,currentStep:t,className:n}){return(0,f.jsx)(`div`,{className:s(`flex items-center`,n),children:e.map((n,r)=>{let i=r<t,o=r===t,c=r===e.length-1;return(0,f.jsxs)(d.Fragment,{children:[(0,f.jsxs)(`div`,{className:`flex flex-col items-center`,children:[(0,f.jsx)(`div`,{className:s(`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all`,i&&`bg-primary border-primary`,o&&`border-primary`,!i&&!o&&`border-border-default`),style:{backgroundColor:i?`var(--interactive-default)`:o?`transparent`:`var(--bg-base)`,borderColor:i||o?`var(--interactive-default)`:`var(--border-default)`},children:i?(0,f.jsx)(a,{size:14,color:`white`,strokeWidth:3,"data-testid":`stepper-check`,"aria-hidden":`true`}):(0,f.jsx)(`span`,{style:{fontSize:`14px`,fontWeight:o?`600`:`400`,color:o?`var(--interactive-default)`:`var(--text-tertiary)`},children:r+1})}),(0,f.jsxs)(`div`,{className:`mt-2 text-center`,children:[(0,f.jsx)(`p`,{style:{fontSize:`14px`,fontWeight:o?`600`:`400`,color:o||i?`var(--text-primary)`:`var(--text-secondary)`},children:n.label}),n.description&&(0,f.jsx)(`p`,{style:{fontSize:`12px`,color:`var(--text-tertiary)`,marginTop:`2px`},children:n.description})]})]}),!c&&(0,f.jsx)(`div`,{className:`flex-1 h-0.5 mx-4 -mt-12`,style:{backgroundColor:i?`var(--interactive-default)`:`var(--border-default)`}})]},r)})})}var d,f;function p(){return(p=t((()=>{d=e(n(),1),i(),o(),f=r(),u.__docgenInfo={description:``,methods:[],displayName:`Stepper`,props:{steps:{required:!0,tsType:{name:`Array`,elements:[{name:`Step`}],raw:`Step[]`},description:``},currentStep:{required:!0,tsType:{name:`number`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=t((()=>{m=n(),c(),p(),h=r(),g={title:`Components/Stepper`,component:u,parameters:{layout:`centered`},tags:[`autodocs`]},_=[{label:`Account`},{label:`Profile`},{label:`Preferences`}],v=[{label:`Start`},{label:`Details`},{label:`Review`},{label:`Payment`},{label:`Complete`}],y={args:{steps:_,currentStep:1}},b={render:()=>{let[e,t]=(0,m.useState)(1);return(0,h.jsxs)(`div`,{className:`w-[500px] space-y-4`,children:[(0,h.jsx)(u,{steps:v,currentStep:e}),(0,h.jsxs)(`div`,{className:`flex justify-between`,children:[(0,h.jsx)(l,{variant:`outline`,onClick:()=>t(e=>Math.max(0,e-1)),disabled:e===0,children:`Back`}),(0,h.jsx)(l,{onClick:()=>t(e=>Math.min(v.length-1,e+1)),disabled:e===v.length-1,children:`Next`})]})]})}},x={args:{steps:_,currentStep:1}},S={args:{steps:v,currentStep:2}},C={args:{steps:v,currentStep:v.length-1}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    steps: baseSteps,
    currentStep: 1
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentStep, setCurrentStep] = useState(1);
    return <div className="w-[500px] space-y-4">
        <Stepper steps={longSteps} currentStep={currentStep} />
        <div className="flex justify-between">
          <Button variant="outline" onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))} disabled={currentStep === 0}>
            Back
          </Button>
          <Button onClick={() => setCurrentStep(prev => Math.min(longSteps.length - 1, prev + 1))} disabled={currentStep === longSteps.length - 1}>
            Next
          </Button>
        </div>
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    steps: baseSteps,
    currentStep: 1
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    steps: longSteps,
    currentStep: 2
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    steps: longSteps,
    currentStep: longSteps.length - 1
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`Interactive`,`ThreeSteps`,`FiveSteps`,`LastStep`]})))()}T();export{y as Default,S as FiveSteps,b as Interactive,C as LastStep,x as ThreeSteps,w as __namedExportsOrder,g as default};