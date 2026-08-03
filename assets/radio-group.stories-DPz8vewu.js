import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{n as i,r as a}from"./dist-Dlyn9OaY.js";import{n as o,r as s}from"./dist-D7HkfZMy.js";import{a as c,i as l,r as u,t as d}from"./dist-BK-Z8wev.js";import{n as f,t as p}from"./dist-CVJt7rz-.js";import{n as m,t as h}from"./dist-y9talKpz.js";import{n as g,t as _}from"./dist-DhTwOzzW.js";import{n as v,t as y}from"./circle-BnbtkmAq.js";import{n as ee,t as te}from"./utils-DwVtoTFj.js";import{n as ne,t as re}from"./dist-lVv2drz_.js";import{n as ie,t as b}from"./label-5Hovh9ZK.js";import{n as ae,t as oe}from"./dist-DhP98QVH.js";import{i as se,n as ce,r as le,t as ue}from"./dist-CiQSNTz02.js";function de(e){return e?`checked`:`unchecked`}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,fe,R,z,B,V,H,U,W,pe,G,me,he,ge;function _e(){return(_e=t((()=>{x=e(n(),1),c(),o(),a(),u(),se(),p(),_(),S=e(n(),1),re(),oe(),m(),C=r(),w=r(),T=`Radio`,[E,D]=i(T),[O,k]=E(T),A=S.forwardRef((e,t)=>{let{__scopeRadio:n,name:r,checked:i=!1,required:a,disabled:o,value:c=`on`,onCheck:u,form:f,...p}=e,[m,h]=S.useState(null),g=s(t,e=>h(e)),_=S.useRef(!1),v=!m||f||!!m.closest(`form`);return(0,C.jsxs)(O,{scope:n,checked:i,disabled:o,children:[(0,C.jsx)(d.button,{type:`button`,role:`radio`,"aria-checked":i,"data-state":de(i),"data-disabled":o?``:void 0,disabled:o,value:c,...p,ref:g,onClick:l(e.onClick,e=>{i||u?.(),v&&(_.current=e.isPropagationStopped(),_.current||e.stopPropagation())})}),v&&(0,C.jsx)(P,{control:m,bubbles:!_.current,name:r,value:c,checked:i,required:a,disabled:o,form:f,style:{transform:`translateX(-100%)`}})]})}),A.displayName=T,j=`RadioIndicator`,M=S.forwardRef((e,t)=>{let{__scopeRadio:n,forceMount:r,...i}=e,a=k(j,n);return(0,C.jsx)(h,{present:r||a.checked,children:(0,C.jsx)(d.span,{"data-state":de(a.checked),"data-disabled":a.disabled?``:void 0,...i,ref:t})})}),M.displayName=j,N=`RadioBubbleInput`,P=S.forwardRef(({__scopeRadio:e,control:t,checked:n,bubbles:r=!0,...i},a)=>{let o=S.useRef(null),c=s(o,a),l=ae(n),u=ne(t);return S.useEffect(()=>{let e=o.current;if(!e)return;let t=window.HTMLInputElement.prototype,i=Object.getOwnPropertyDescriptor(t,`checked`).set;if(l!==n&&i){let t=new Event(`click`,{bubbles:r});i.call(e,n),e.dispatchEvent(t)}},[l,n,r]),(0,C.jsx)(d.input,{type:`radio`,"aria-hidden":!0,defaultChecked:n,...i,tabIndex:-1,ref:c,style:{...i.style,...u,position:`absolute`,pointerEvents:`none`,opacity:0,margin:0}})}),P.displayName=N,F=[`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`],I=`RadioGroup`,[L,fe]=i(I,[le,D]),R=le(),z=D(),[B,V]=L(I),H=x.forwardRef((e,t)=>{let{__scopeRadioGroup:n,name:r,defaultValue:i,value:a,required:o=!1,disabled:s=!1,orientation:c,dir:l,loop:u=!0,onValueChange:p,...m}=e,h=R(n),_=g(l),[v,y]=f({prop:a,defaultProp:i??null,onChange:p,caller:I});return(0,w.jsx)(B,{scope:n,name:r,required:o,disabled:s,value:v,onValueChange:y,children:(0,w.jsx)(ce,{asChild:!0,...h,orientation:c,dir:_,loop:u,children:(0,w.jsx)(d.div,{role:`radiogroup`,"aria-required":o,"aria-orientation":c,"data-disabled":s?``:void 0,dir:_,...m,ref:t})})})}),H.displayName=I,U=`RadioGroupItem`,W=x.forwardRef((e,t)=>{let{__scopeRadioGroup:n,disabled:r,...i}=e,a=V(U,n),o=a.disabled||r,c=R(n),u=z(n),d=x.useRef(null),f=s(t,d),p=a.value===i.value,m=x.useRef(!1);return x.useEffect(()=>{let e=e=>{F.includes(e.key)&&(m.current=!0)},t=()=>m.current=!1;return document.addEventListener(`keydown`,e),document.addEventListener(`keyup`,t),()=>{document.removeEventListener(`keydown`,e),document.removeEventListener(`keyup`,t)}},[]),(0,w.jsx)(ue,{asChild:!0,...c,focusable:!o,active:p,children:(0,w.jsx)(A,{disabled:o,required:a.required,checked:p,...u,...i,name:a.name,ref:f,onCheck:()=>a.onValueChange(i.value),onKeyDown:l(e=>{e.key===`Enter`&&e.preventDefault()}),onFocus:l(i.onFocus,()=>{m.current&&d.current?.click()})})})}),W.displayName=U,pe=`RadioGroupIndicator`,G=x.forwardRef((e,t)=>{let{__scopeRadioGroup:n,...r}=e,i=z(n);return(0,w.jsx)(M,{...i,...r,ref:t})}),G.displayName=pe,me=H,he=W,ge=G})))()}function K({className:e,...t}){return(0,J.jsx)(me,{"data-slot":`radio-group`,className:te(`grid gap-3`,e),...t})}function q({className:e,...t}){return(0,J.jsx)(he,{"data-slot":`radio-group-item`,className:te(`border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-2xs transition-[color,box-shadow] outline-hidden focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50`,e),...t,children:(0,J.jsx)(ge,{"data-slot":`radio-group-indicator`,className:`relative flex items-center justify-center`,children:(0,J.jsx)(y,{className:`fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2`})})})}var J;function Y(){return(Y=t((()=>{n(),_e(),v(),ee(),J=r(),K.__docgenInfo={description:``,methods:[],displayName:`RadioGroup`},q.__docgenInfo={description:``,methods:[],displayName:`RadioGroupItem`}})))()}var X,ve,Z,Q,$,ye;function be(){return(be=t((()=>{Y(),ie(),X=r(),ve={title:`Components/RadioGroup`,component:K,parameters:{layout:`centered`},tags:[`autodocs`]},Z={render:()=>(0,X.jsxs)(K,{defaultValue:`option1`,children:[(0,X.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,X.jsx)(q,{value:`option1`,id:`r1`}),(0,X.jsx)(b,{htmlFor:`r1`,children:`Option 1`})]}),(0,X.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,X.jsx)(q,{value:`option2`,id:`r2`}),(0,X.jsx)(b,{htmlFor:`r2`,children:`Option 2`})]}),(0,X.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,X.jsx)(q,{value:`option3`,id:`r3`}),(0,X.jsx)(b,{htmlFor:`r3`,children:`Option 3`})]})]})},Q={render:()=>(0,X.jsxs)(K,{defaultValue:`comfortable`,children:[(0,X.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,X.jsx)(q,{value:`default`,id:`r-default`}),(0,X.jsxs)(`div`,{children:[(0,X.jsx)(b,{htmlFor:`r-default`,children:`Default`}),(0,X.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`The default spacing`})]})]}),(0,X.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,X.jsx)(q,{value:`comfortable`,id:`r-comfortable`}),(0,X.jsxs)(`div`,{children:[(0,X.jsx)(b,{htmlFor:`r-comfortable`,children:`Comfortable`}),(0,X.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`More comfortable spacing`})]})]}),(0,X.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,X.jsx)(q,{value:`compact`,id:`r-compact`}),(0,X.jsxs)(`div`,{children:[(0,X.jsx)(b,{htmlFor:`r-compact`,children:`Compact`}),(0,X.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Minimal spacing`})]})]})]})},$={render:()=>(0,X.jsxs)(K,{defaultValue:`option1`,disabled:!0,children:[(0,X.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,X.jsx)(q,{value:`option1`,id:`d1`}),(0,X.jsx)(b,{htmlFor:`d1`,children:`Disabled Option 1`})]}),(0,X.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,X.jsx)(q,{value:`option2`,id:`d2`}),(0,X.jsx)(b,{htmlFor:`d2`,children:`Disabled Option 2`})]})]})},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},ye=[`Default`,`WithDescription`,`Disabled`]})))()}be();export{Z as Default,$ as Disabled,Q as WithDescription,ye as __namedExportsOrder,ve as default};