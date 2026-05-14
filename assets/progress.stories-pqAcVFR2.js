import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./react-dom-DzSZYs-a.js";import{t as i}from"./jsx-runtime-_akqGrVk.js";import{n as a,t as o}from"./utils-D2Sa0ztS.js";import{n as s,r as c}from"./dist-3P59oYRp.js";function l(e,t=[]){let n=[];function r(t,r){let i=d.createContext(r);i.displayName=t+`Context`;let a=n.length;n=[...n,r];let o=t=>{let{scope:n,children:r,...o}=t,s=n?.[e]?.[a]||i,c=d.useMemo(()=>o,Object.values(o));return(0,f.jsx)(s.Provider,{value:c,children:r})};o.displayName=t+`Provider`;function s(n,o){let s=o?.[e]?.[a]||i,c=d.useContext(s);if(c)return c;if(r!==void 0)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}return[o,s]}let i=()=>{let t=n.map(e=>d.createContext(e));return function(n){let r=n?.[e]||t;return d.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return i.scopeName=e,[r,u(i,...t)]}function u(...e){let t=e[0];if(e.length===1)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e)[`__scope${r}`];return{...t,...i}},{});return d.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}var d,f,ee=t((()=>{d=e(n(),1),f=i()})),p,m,h,g=t((()=>{p=e(n(),1),r(),c(),m=i(),h=[`a`,`button`,`div`,`form`,`h2`,`h3`,`img`,`input`,`label`,`li`,`nav`,`ol`,`p`,`select`,`span`,`svg`,`ul`].reduce((e,t)=>{let n=s(`Primitive.${t}`),r=p.forwardRef((e,r)=>{let{asChild:i,...a}=e,o=i?n:t;return typeof window<`u`&&(window[Symbol.for(`radix-ui`)]=!0),(0,m.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{})}));function _(e,t){return`${Math.round(e/t*100)}%`}function v(e,t){return e==null?`indeterminate`:e===t?`complete`:`loading`}function y(e){return typeof e==`number`}function b(e){return y(e)&&!isNaN(e)&&e>0}function x(e,t){return y(e)&&!isNaN(e)&&e<=t&&e>=0}function S(e,t){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${D}\`.`}function C(e,t){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${D} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var w,T,E,D,O,k,A,j,M,N,P,F,I,L=t((()=>{w=e(n(),1),ee(),g(),T=i(),E=`Progress`,D=100,[O,k]=l(E),[A,j]=O(E),M=w.forwardRef((e,t)=>{let{__scopeProgress:n,value:r=null,max:i,getValueLabel:a=_,...o}=e;(i||i===0)&&!b(i)&&console.error(S(`${i}`,`Progress`));let s=b(i)?i:D;r!==null&&!x(r,s)&&console.error(C(`${r}`,`Progress`));let c=x(r,s)?r:null,l=y(c)?a(c,s):void 0;return(0,T.jsx)(A,{scope:n,value:c,max:s,children:(0,T.jsx)(h.div,{"aria-valuemax":s,"aria-valuemin":0,"aria-valuenow":y(c)?c:void 0,"aria-valuetext":l,role:`progressbar`,"data-state":v(c,s),"data-value":c??void 0,"data-max":s,...o,ref:t})})}),M.displayName=E,N=`ProgressIndicator`,P=w.forwardRef((e,t)=>{let{__scopeProgress:n,...r}=e,i=j(N,n);return(0,T.jsx)(h.div,{"data-state":v(i.value,i.max),"data-value":i.value??void 0,"data-max":i.max,...r,ref:t})}),P.displayName=N,F=M,I=P})),R,z,B,V,H,U=t((()=>{R=e(n(),1),L(),a(),z=i(),B={default:`bg-primary/20`,success:`bg-success-100`,warning:`bg-warning-100`,danger:`bg-danger-100`,info:`bg-info-100`},V={default:`bg-primary`,success:`bg-success-600`,warning:`bg-warning-600`,danger:`bg-danger-600`,info:`bg-info-600`},H=R.forwardRef(({className:e,value:t,variant:n=`default`,...r},i)=>(0,z.jsx)(F,{ref:i,"data-slot":`progress`,className:o(`relative h-2 w-full overflow-hidden rounded-full`,B[n],e),...r,children:(0,z.jsx)(I,{"data-slot":`progress-indicator`,className:o(`h-full w-full flex-1 transition-all duration-slow ease-out`,V[n]),style:{transform:`translateX(-${100-(t||0)}%)`}})})),H.displayName=`Progress`,H.__docgenInfo={description:``,methods:[],displayName:`Progress`,props:{variant:{required:!1,tsType:{name:`union`,raw:`"default" | "success" | "warning" | "danger" | "info"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"danger"`},{name:`literal`,value:`"info"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}}}}})),W,G,K,q,J,Y,X,Z,Q,$;t((()=>{U(),W=e(n(),1),G=i(),K={title:`Components/Progress`,component:H,parameters:{layout:`centered`},tags:[`autodocs`]},q={args:{value:50,className:`w-[300px]`}},J={args:{value:0,className:`w-[300px]`}},Y={args:{value:100,className:`w-[300px]`}},X={render:()=>{let[e,t]=(0,W.useState)(0);return(0,W.useEffect)(()=>{let e=setInterval(()=>{t(e=>e>=100?0:e+10)},500);return()=>clearInterval(e)},[]),(0,G.jsxs)(`div`,{className:`space-y-2 w-[300px]`,children:[(0,G.jsxs)(`div`,{className:`flex justify-between text-sm`,children:[(0,G.jsx)(`span`,{children:`Loading...`}),(0,G.jsxs)(`span`,{children:[e,`%`]})]}),(0,G.jsx)(H,{value:e})]})}},Z={render:()=>(0,G.jsxs)(`div`,{className:`space-y-2 w-[300px]`,children:[(0,G.jsxs)(`div`,{className:`flex justify-between text-sm`,children:[(0,G.jsx)(`span`,{children:`Uploading file`}),(0,G.jsx)(`span`,{children:`75%`})]}),(0,G.jsx)(H,{value:75})]})},Q={render:()=>(0,G.jsxs)(`div`,{className:`space-y-4 w-[300px]`,children:[(0,G.jsxs)(`div`,{className:`space-y-2`,children:[(0,G.jsxs)(`div`,{className:`flex justify-between text-sm`,children:[(0,G.jsx)(`span`,{children:`Download 1`}),(0,G.jsx)(`span`,{children:`25%`})]}),(0,G.jsx)(H,{value:25})]}),(0,G.jsxs)(`div`,{className:`space-y-2`,children:[(0,G.jsxs)(`div`,{className:`flex justify-between text-sm`,children:[(0,G.jsx)(`span`,{children:`Download 2`}),(0,G.jsx)(`span`,{children:`60%`})]}),(0,G.jsx)(H,{value:60})]}),(0,G.jsxs)(`div`,{className:`space-y-2`,children:[(0,G.jsxs)(`div`,{className:`flex justify-between text-sm`,children:[(0,G.jsx)(`span`,{children:`Download 3`}),(0,G.jsx)(`span`,{children:`90%`})]}),(0,G.jsx)(H,{value:90})]})]})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50,
    className: "w-[300px]"
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0,
    className: "w-[300px]"
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100,
    className: "w-[300px]"
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 0;
          return prev + 10;
        });
      }, 500);
      return () => clearInterval(timer);
    }, []);
    return <div className="space-y-2 w-[300px]">
        <div className="flex justify-between text-sm">
          <span>Loading...</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} />
      </div>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-2 w-[300px]">
      <div className="flex justify-between text-sm">
        <span>Uploading file</span>
        <span>75%</span>
      </div>
      <Progress value={75} />
    </div>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-[300px]">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Download 1</span>
          <span>25%</span>
        </div>
        <Progress value={25} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Download 2</span>
          <span>60%</span>
        </div>
        <Progress value={60} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Download 3</span>
          <span>90%</span>
        </div>
        <Progress value={90} />
      </div>
    </div>
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Empty`,`Full`,`Animated`,`WithLabel`,`MultipleStates`]}))();export{X as Animated,q as Default,J as Empty,Y as Full,Q as MultipleStates,Z as WithLabel,$ as __namedExportsOrder,K as default};