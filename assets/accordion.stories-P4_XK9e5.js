import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{n as i,r as a}from"./dist-DIs3RLZS.js";import{n as o,r as s}from"./dist-Cd9gDrEs.js";import{n as c,t as l}from"./dist-CAkeZA27.js";import{a as u,i as d,r as ee,t as te}from"./dist-BEqORXIG.js";import{n as ne,t as re}from"./dist-Vz0ZWiBO.js";import{n as ie,t as ae}from"./dist-C115CmG0.js";import{a as oe,i as se,o as f,r as ce,s as le}from"./dist-D0G0ZMAi.js";import{n as ue,t as de}from"./dist-ZI7lRPHM.js";import{ot as fe,t as pe}from"./lucide-react-CRUNCA_B.js";import{n as me,t as p}from"./utils-D2Sa0ztS.js";function m(e){return e?`open`:`closed`}var h,g,_,v,y,b,x,S,he,C,w,T,ge,E,_e,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,ve,ye,be,xe,Se=t((()=>{h=e(n(),1),a(),c(),o(),u(),re(),ee(),le(),ae(),de(),g=r(),_=`Accordion`,v=[`Home`,`End`,`ArrowDown`,`ArrowUp`,`ArrowLeft`,`ArrowRight`],[y,b,x]=l(_),[S,he]=i(_,[x,f]),C=f(),w=h.forwardRef((e,t)=>{let{type:n,...r}=e,i=r,a=r;return(0,g.jsx)(y.Provider,{scope:e.__scopeAccordion,children:n===`multiple`?(0,g.jsx)(O,{...a,ref:t}):(0,g.jsx)(D,{...i,ref:t})})}),w.displayName=_,[T,ge]=S(_),[E,_e]=S(_,{collapsible:!1}),D=h.forwardRef((e,t)=>{let{value:n,defaultValue:r,onValueChange:i=()=>{},collapsible:a=!1,...o}=e,[s,c]=ne({prop:n,defaultProp:r??``,onChange:i,caller:_});return(0,g.jsx)(T,{scope:e.__scopeAccordion,value:h.useMemo(()=>s?[s]:[],[s]),onItemOpen:c,onItemClose:h.useCallback(()=>a&&c(``),[a,c]),children:(0,g.jsx)(E,{scope:e.__scopeAccordion,collapsible:a,children:(0,g.jsx)(j,{...o,ref:t})})})}),O=h.forwardRef((e,t)=>{let{value:n,defaultValue:r,onValueChange:i=()=>{},...a}=e,[o,s]=ne({prop:n,defaultProp:r??[],onChange:i,caller:_}),c=h.useCallback(e=>s((t=[])=>[...t,e]),[s]),l=h.useCallback(e=>s((t=[])=>t.filter(t=>t!==e)),[s]);return(0,g.jsx)(T,{scope:e.__scopeAccordion,value:o,onItemOpen:c,onItemClose:l,children:(0,g.jsx)(E,{scope:e.__scopeAccordion,collapsible:!0,children:(0,g.jsx)(j,{...a,ref:t})})})}),[k,A]=S(_),j=h.forwardRef((e,t)=>{let{__scopeAccordion:n,disabled:r,dir:i,orientation:a=`vertical`,...o}=e,c=s(h.useRef(null),t),l=b(n),u=ue(i)===`ltr`,ee=d(e.onKeyDown,e=>{if(!v.includes(e.key))return;let t=e.target,n=l().filter(e=>!e.ref.current?.disabled),r=n.findIndex(e=>e.ref.current===t),i=n.length;if(r===-1)return;e.preventDefault();let o=r,s=i-1,c=()=>{o=r+1,o>s&&(o=0)},d=()=>{o=r-1,o<0&&(o=s)};switch(e.key){case`Home`:o=0;break;case`End`:o=s;break;case`ArrowRight`:a===`horizontal`&&(u?c():d());break;case`ArrowDown`:a===`vertical`&&c();break;case`ArrowLeft`:a===`horizontal`&&(u?d():c());break;case`ArrowUp`:a===`vertical`&&d();break}n[o%i].ref.current?.focus()});return(0,g.jsx)(k,{scope:n,disabled:r,direction:i,orientation:a,children:(0,g.jsx)(y.Slot,{scope:n,children:(0,g.jsx)(te.div,{...o,"data-orientation":a,ref:c,onKeyDown:r?void 0:ee})})})}),M=`AccordionItem`,[N,P]=S(M),F=h.forwardRef((e,t)=>{let{__scopeAccordion:n,value:r,...i}=e,a=A(M,n),o=ge(M,n),s=C(n),c=ie(),l=r&&o.value.includes(r)||!1,u=a.disabled||e.disabled;return(0,g.jsx)(N,{scope:n,open:l,disabled:u,triggerId:c,children:(0,g.jsx)(se,{"data-orientation":a.orientation,"data-state":m(l),...s,...i,ref:t,disabled:u,open:l,onOpenChange:e=>{e?o.onItemOpen(r):o.onItemClose(r)}})})}),F.displayName=M,I=`AccordionHeader`,L=h.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,i=A(_,n),a=P(I,n);return(0,g.jsx)(te.h3,{"data-orientation":i.orientation,"data-state":m(a.open),"data-disabled":a.disabled?``:void 0,...r,ref:t})}),L.displayName=I,R=`AccordionTrigger`,z=h.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,i=A(_,n),a=P(R,n),o=_e(R,n),s=C(n);return(0,g.jsx)(y.ItemSlot,{scope:n,children:(0,g.jsx)(oe,{"aria-disabled":a.open&&!o.collapsible||void 0,"data-orientation":i.orientation,id:a.triggerId,...s,...r,ref:t})})}),z.displayName=R,B=`AccordionContent`,V=h.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,i=A(_,n),a=P(B,n),o=C(n);return(0,g.jsx)(ce,{role:`region`,"aria-labelledby":a.triggerId,"data-orientation":i.orientation,...o,...r,ref:t,style:{"--radix-accordion-content-height":`var(--radix-collapsible-content-height)`,"--radix-accordion-content-width":`var(--radix-collapsible-content-width)`,...e.style}})}),V.displayName=B,H=w,ve=F,ye=L,be=z,xe=V}));function U({...e}){return(0,q.jsx)(H,{"data-slot":`accordion`,...e})}function W({className:e,...t}){return(0,q.jsx)(ve,{"data-slot":`accordion-item`,className:p(`border-b last:border-b-0`,e),...t})}function G({className:e,children:t,...n}){return(0,q.jsx)(ye,{className:`flex`,children:(0,q.jsxs)(be,{"data-slot":`accordion-trigger`,className:p(`focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-hidden hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180`,e),...n,children:[t,(0,q.jsx)(fe,{className:`text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-normal ease-out`})]})})}function K({className:e,children:t,...n}){return(0,q.jsx)(xe,{"data-slot":`accordion-content`,className:`data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm`,...n,children:(0,q.jsx)(`div`,{className:p(`pt-0 pb-4`,e),children:t})})}var q,Ce=t((()=>{n(),Se(),pe(),me(),q=r(),U.__docgenInfo={description:``,methods:[],displayName:`Accordion`},W.__docgenInfo={description:``,methods:[],displayName:`AccordionItem`},G.__docgenInfo={description:``,methods:[],displayName:`AccordionTrigger`},K.__docgenInfo={description:``,methods:[],displayName:`AccordionContent`}})),J,we,Y,X,Z,Q,$;t((()=>{Ce(),J=r(),we={title:`Components/Accordion`,component:U,parameters:{layout:`centered`},tags:[`autodocs`]},Y={args:{type:`single`,collapsible:!0,className:`w-[450px]`},render:e=>(0,J.jsxs)(U,{...e,children:[(0,J.jsxs)(W,{value:`item-1`,children:[(0,J.jsx)(G,{children:`Is it accessible?`}),(0,J.jsx)(K,{children:`Yes. It adheres to the WAI-ARIA design pattern and includes proper keyboard navigation and screen reader support.`})]}),(0,J.jsxs)(W,{value:`item-2`,children:[(0,J.jsx)(G,{children:`Is it styled?`}),(0,J.jsx)(K,{children:`Yes. It comes with default styles that can be easily customized to match your design system.`})]}),(0,J.jsxs)(W,{value:`item-3`,children:[(0,J.jsx)(G,{children:`Is it animated?`}),(0,J.jsx)(K,{children:`Yes. It uses CSS animations for smooth expand and collapse transitions.`})]})]})},X={args:{type:`multiple`,className:`w-[450px]`},render:e=>(0,J.jsxs)(U,{...e,children:[(0,J.jsxs)(W,{value:`item-1`,children:[(0,J.jsx)(G,{children:`Can multiple items be open?`}),(0,J.jsx)(K,{children:`Yes! In multiple mode, you can have multiple accordion items open at the same time.`})]}),(0,J.jsxs)(W,{value:`item-2`,children:[(0,J.jsx)(G,{children:`How does it work?`}),(0,J.jsx)(K,{children:`Set type="multiple" on the Accordion component to enable this behavior.`})]}),(0,J.jsxs)(W,{value:`item-3`,children:[(0,J.jsx)(G,{children:`What about closing?`}),(0,J.jsx)(K,{children:`Each item can be independently opened and closed without affecting others.`})]})]})},Z={args:{type:`single`,defaultValue:`item-2`,collapsible:!0,className:`w-[450px]`},render:e=>(0,J.jsxs)(U,{...e,children:[(0,J.jsxs)(W,{value:`item-1`,children:[(0,J.jsx)(G,{children:`First Item`}),(0,J.jsx)(K,{children:`Content for the first item.`})]}),(0,J.jsxs)(W,{value:`item-2`,children:[(0,J.jsx)(G,{children:`Second Item (Default Open)`}),(0,J.jsx)(K,{children:`This item is open by default because defaultValue is set to "item-2".`})]}),(0,J.jsxs)(W,{value:`item-3`,children:[(0,J.jsx)(G,{children:`Third Item`}),(0,J.jsx)(K,{children:`Content for the third item.`})]})]})},Q={args:{type:`single`,collapsible:!0,className:`w-[500px]`},render:e=>(0,J.jsxs)(U,{...e,children:[(0,J.jsxs)(W,{value:`q1`,children:[(0,J.jsx)(G,{children:`What payment methods do you accept?`}),(0,J.jsx)(K,{children:`We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers.`})]}),(0,J.jsxs)(W,{value:`q2`,children:[(0,J.jsx)(G,{children:`How long does shipping take?`}),(0,J.jsx)(K,{children:`Standard shipping takes 5-7 business days. Express shipping (2-3 days) and overnight options are also available at checkout.`})]}),(0,J.jsxs)(W,{value:`q3`,children:[(0,J.jsx)(G,{children:`What is your return policy?`}),(0,J.jsx)(K,{children:`We offer a 30-day money-back guarantee. Items must be unused and in original packaging. Return shipping is free for defective items.`})]}),(0,J.jsxs)(W,{value:`q4`,children:[(0,J.jsx)(G,{children:`Do you offer technical support?`}),(0,J.jsx)(K,{children:`Yes! Our support team is available 24/7 via email, chat, and phone. Enterprise customers get dedicated account managers.`})]})]})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    type: "single",
    collapsible: true,
    className: "w-[450px]"
  },
  render: (args: ComponentProps<typeof Accordion>) => <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern and includes proper
          keyboard navigation and screen reader support.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that can be easily customized to
          match your design system.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It uses CSS animations for smooth expand and collapse transitions.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    type: "multiple",
    className: "w-[450px]"
  },
  render: (args: ComponentProps<typeof Accordion>) => <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Can multiple items be open?</AccordionTrigger>
        <AccordionContent>
          Yes! In multiple mode, you can have multiple accordion items open at
          the same time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How does it work?</AccordionTrigger>
        <AccordionContent>
          Set type="multiple" on the Accordion component to enable this behavior.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What about closing?</AccordionTrigger>
        <AccordionContent>
          Each item can be independently opened and closed without affecting others.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    type: "single",
    defaultValue: "item-2",
    collapsible: true,
    className: "w-[450px]"
  },
  render: (args: ComponentProps<typeof Accordion>) => <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>First Item</AccordionTrigger>
        <AccordionContent>Content for the first item.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second Item (Default Open)</AccordionTrigger>
        <AccordionContent>
          This item is open by default because defaultValue is set to "item-2".
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Third Item</AccordionTrigger>
        <AccordionContent>Content for the third item.</AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    type: "single",
    collapsible: true,
    className: "w-[500px]"
  },
  render: (args: ComponentProps<typeof Accordion>) => <Accordion {...args}>
      <AccordionItem value="q1">
        <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
        <AccordionContent>
          We accept all major credit cards (Visa, MasterCard, American Express),
          PayPal, and bank transfers for enterprise customers.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="q2">
        <AccordionTrigger>How long does shipping take?</AccordionTrigger>
        <AccordionContent>
          Standard shipping takes 5-7 business days. Express shipping (2-3 days)
          and overnight options are also available at checkout.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="q3">
        <AccordionTrigger>What is your return policy?</AccordionTrigger>
        <AccordionContent>
          We offer a 30-day money-back guarantee. Items must be unused and in
          original packaging. Return shipping is free for defective items.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="q4">
        <AccordionTrigger>Do you offer technical support?</AccordionTrigger>
        <AccordionContent>
          Yes! Our support team is available 24/7 via email, chat, and phone.
          Enterprise customers get dedicated account managers.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...Q.parameters?.docs?.source}}},$=[`Single`,`Multiple`,`DefaultOpen`,`FAQ`]}))();export{Z as DefaultOpen,Q as FAQ,X as Multiple,Y as Single,$ as __namedExportsOrder,we as default};