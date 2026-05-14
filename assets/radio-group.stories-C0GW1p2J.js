import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{n as i,r as a}from"./dist-DIs3RLZS.js";import{n as o,r as s}from"./dist-Cd9gDrEs.js";import{o as c,r as l,s as u,t as d}from"./dist-Dq2sm8oD.js";import{n as f,t as p}from"./dist-DhJF_c6r.js";import{n as m,t as h}from"./dist-CqH3QNaH.js";import{n as g,t as _}from"./dist-CXP3AQBZ.js";import{Q as v,t as y}from"./lucide-react-BZbEj6fH.js";import{n as ee,t as te}from"./utils-CDLLjGU_.js";import{n as ne,t as re}from"./dist-CXeG-ZfW2.js";import{n as ie,t as b}from"./label-is7RkdCA.js";import{n as ae,t as oe}from"./dist-C1gbVb0B.js";import{i as se,n as ce,r as le,t as ue}from"./dist-SdmG4KYn.js";function x(e){return e?`checked`:`unchecked`}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,de,z,B,V,H,U,W,G,fe,K,pe,me,he,ge=t((()=>{S=e(n(),1),u(),o(),a(),l(),se(),p(),_(),C=e(n(),1),re(),oe(),m(),w=r(),T=r(),E=`Radio`,[D,O]=i(E),[k,A]=D(E),j=C.forwardRef((e,t)=>{let{__scopeRadio:n,name:r,checked:i=!1,required:a,disabled:o,value:l=`on`,onCheck:u,form:f,...p}=e,[m,h]=C.useState(null),g=s(t,e=>h(e)),_=C.useRef(!1),v=m?f||!!m.closest(`form`):!0;return(0,w.jsxs)(k,{scope:n,checked:i,disabled:o,children:[(0,w.jsx)(d.button,{type:`button`,role:`radio`,"aria-checked":i,"data-state":x(i),"data-disabled":o?``:void 0,disabled:o,value:l,...p,ref:g,onClick:c(e.onClick,e=>{i||u?.(),v&&(_.current=e.isPropagationStopped(),_.current||e.stopPropagation())})}),v&&(0,w.jsx)(F,{control:m,bubbles:!_.current,name:r,value:l,checked:i,required:a,disabled:o,form:f,style:{transform:`translateX(-100%)`}})]})}),j.displayName=E,M=`RadioIndicator`,N=C.forwardRef((e,t)=>{let{__scopeRadio:n,forceMount:r,...i}=e,a=A(M,n);return(0,w.jsx)(h,{present:r||a.checked,children:(0,w.jsx)(d.span,{"data-state":x(a.checked),"data-disabled":a.disabled?``:void 0,...i,ref:t})})}),N.displayName=M,P=`RadioBubbleInput`,F=C.forwardRef(({__scopeRadio:e,control:t,checked:n,bubbles:r=!0,...i},a)=>{let o=C.useRef(null),c=s(o,a),l=ae(n),u=ne(t);return C.useEffect(()=>{let e=o.current;if(!e)return;let t=window.HTMLInputElement.prototype,i=Object.getOwnPropertyDescriptor(t,`checked`).set;if(l!==n&&i){let t=new Event(`click`,{bubbles:r});i.call(e,n),e.dispatchEvent(t)}},[l,n,r]),(0,w.jsx)(d.input,{type:`radio`,"aria-hidden":!0,defaultChecked:n,...i,tabIndex:-1,ref:c,style:{...i.style,...u,position:`absolute`,pointerEvents:`none`,opacity:0,margin:0}})}),F.displayName=P,I=[`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`],L=`RadioGroup`,[R,de]=i(L,[le,O]),z=le(),B=O(),[V,H]=R(L),U=S.forwardRef((e,t)=>{let{__scopeRadioGroup:n,name:r,defaultValue:i,value:a,required:o=!1,disabled:s=!1,orientation:c,dir:l,loop:u=!0,onValueChange:p,...m}=e,h=z(n),_=g(l),[v,y]=f({prop:a,defaultProp:i??null,onChange:p,caller:L});return(0,T.jsx)(V,{scope:n,name:r,required:o,disabled:s,value:v,onValueChange:y,children:(0,T.jsx)(ce,{asChild:!0,...h,orientation:c,dir:_,loop:u,children:(0,T.jsx)(d.div,{role:`radiogroup`,"aria-required":o,"aria-orientation":c,"data-disabled":s?``:void 0,dir:_,...m,ref:t})})})}),U.displayName=L,W=`RadioGroupItem`,G=S.forwardRef((e,t)=>{let{__scopeRadioGroup:n,disabled:r,...i}=e,a=H(W,n),o=a.disabled||r,l=z(n),u=B(n),d=S.useRef(null),f=s(t,d),p=a.value===i.value,m=S.useRef(!1);return S.useEffect(()=>{let e=e=>{I.includes(e.key)&&(m.current=!0)},t=()=>m.current=!1;return document.addEventListener(`keydown`,e),document.addEventListener(`keyup`,t),()=>{document.removeEventListener(`keydown`,e),document.removeEventListener(`keyup`,t)}},[]),(0,T.jsx)(ue,{asChild:!0,...l,focusable:!o,active:p,children:(0,T.jsx)(j,{disabled:o,required:a.required,checked:p,...u,...i,name:a.name,ref:f,onCheck:()=>a.onValueChange(i.value),onKeyDown:c(e=>{e.key===`Enter`&&e.preventDefault()}),onFocus:c(i.onFocus,()=>{m.current&&d.current?.click()})})})}),G.displayName=W,fe=`RadioGroupIndicator`,K=S.forwardRef((e,t)=>{let{__scopeRadioGroup:n,...r}=e;return(0,T.jsx)(N,{...B(n),...r,ref:t})}),K.displayName=fe,pe=U,me=G,he=K}));function q({className:e,...t}){return(0,Y.jsx)(pe,{"data-slot":`radio-group`,className:te(`grid gap-3`,e),...t})}function J({className:e,...t}){return(0,Y.jsx)(me,{"data-slot":`radio-group-item`,className:te(`border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-2xs transition-[color,box-shadow] outline-hidden focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50`,e),...t,children:(0,Y.jsx)(he,{"data-slot":`radio-group-indicator`,className:`relative flex items-center justify-center`,children:(0,Y.jsx)(v,{className:`fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2`})})})}var Y,_e=t((()=>{n(),ge(),y(),ee(),Y=r(),q.__docgenInfo={description:``,methods:[],displayName:`RadioGroup`},J.__docgenInfo={description:``,methods:[],displayName:`RadioGroupItem`}})),X,ve,Z,Q,$,ye;t((()=>{_e(),ie(),X=r(),ve={title:`Components/RadioGroup`,component:q,parameters:{layout:`centered`},tags:[`autodocs`]},Z={render:()=>(0,X.jsxs)(q,{defaultValue:`option1`,children:[(0,X.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,X.jsx)(J,{value:`option1`,id:`r1`}),(0,X.jsx)(b,{htmlFor:`r1`,children:`Option 1`})]}),(0,X.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,X.jsx)(J,{value:`option2`,id:`r2`}),(0,X.jsx)(b,{htmlFor:`r2`,children:`Option 2`})]}),(0,X.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,X.jsx)(J,{value:`option3`,id:`r3`}),(0,X.jsx)(b,{htmlFor:`r3`,children:`Option 3`})]})]})},Q={render:()=>(0,X.jsxs)(q,{defaultValue:`comfortable`,children:[(0,X.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,X.jsx)(J,{value:`default`,id:`r-default`}),(0,X.jsxs)(`div`,{children:[(0,X.jsx)(b,{htmlFor:`r-default`,children:`Default`}),(0,X.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`The default spacing`})]})]}),(0,X.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,X.jsx)(J,{value:`comfortable`,id:`r-comfortable`}),(0,X.jsxs)(`div`,{children:[(0,X.jsx)(b,{htmlFor:`r-comfortable`,children:`Comfortable`}),(0,X.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`More comfortable spacing`})]})]}),(0,X.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,X.jsx)(J,{value:`compact`,id:`r-compact`}),(0,X.jsxs)(`div`,{children:[(0,X.jsx)(b,{htmlFor:`r-compact`,children:`Compact`}),(0,X.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Minimal spacing`})]})]})]})},$={render:()=>(0,X.jsxs)(q,{defaultValue:`option1`,disabled:!0,children:[(0,X.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,X.jsx)(J,{value:`option1`,id:`d1`}),(0,X.jsx)(b,{htmlFor:`d1`,children:`Disabled Option 1`})]}),(0,X.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,X.jsx)(J,{value:`option2`,id:`d2`}),(0,X.jsx)(b,{htmlFor:`d2`,children:`Disabled Option 2`})]})]})},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="option1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="r1" />
        <Label htmlFor="r1">Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="r2" />
        <Label htmlFor="r2">Option 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option3" id="r3" />
        <Label htmlFor="r3">Option 3</Label>
      </div>
    </RadioGroup>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r-default" />
        <div>
          <Label htmlFor="r-default">Default</Label>
          <p className="text-sm text-muted-foreground">The default spacing</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r-comfortable" />
        <div>
          <Label htmlFor="r-comfortable">Comfortable</Label>
          <p className="text-sm text-muted-foreground">More comfortable spacing</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r-compact" />
        <div>
          <Label htmlFor="r-compact">Compact</Label>
          <p className="text-sm text-muted-foreground">Minimal spacing</p>
        </div>
      </div>
    </RadioGroup>
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="option1" disabled>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="d1" />
        <Label htmlFor="d1">Disabled Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="d2" />
        <Label htmlFor="d2">Disabled Option 2</Label>
      </div>
    </RadioGroup>
}`,...$.parameters?.docs?.source}}},ye=[`Default`,`WithDescription`,`Disabled`]}))();export{Z as Default,$ as Disabled,Q as WithDescription,ye as __namedExportsOrder,ve as default};