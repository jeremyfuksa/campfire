import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{n as i,r as a}from"./dist-Dlyn9OaY.js";import{n as o,r as s}from"./dist-D7HkfZMy.js";import{n as c,t as l}from"./dist-Cxw2ZfM3.js";import{a as u,i as ee,r as d,t as te}from"./dist-BK-Z8wev.js";import{n as f,t as ne}from"./dist-CVJt7rz-.js";import{n as re,t as ie}from"./dist-CF8blSvU.js";import{a as ae,i as oe,o as p,r as se,s as ce}from"./dist-Bi-iiZch.js";import{n as le,t as ue}from"./dist-DhTwOzzW.js";import{n as de,t as fe}from"./chevron-down-C9obF-2S.js";import{n as pe,t as m}from"./utils-DwVtoTFj.js";function me(e){return e?`open`:`closed`}var h,g,_,v,y,b,x,S,he,C,w,T,ge,E,_e,ve,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,ye,H,U,be;function xe(){return(xe=t((()=>{h=e(n(),1),a(),c(),o(),u(),ne(),d(),ce(),ie(),ue(),g=r(),_=`Accordion`,v=[`Home`,`End`,`ArrowDown`,`ArrowUp`,`ArrowLeft`,`ArrowRight`],[y,b,x]=l(_),[S,he]=i(_,[x,p]),C=p(),w=h.forwardRef((e,t)=>{let{type:n,...r}=e,i=r,a=r;return(0,g.jsx)(y.Provider,{scope:e.__scopeAccordion,children:n===`multiple`?(0,g.jsx)(D,{...a,ref:t}):(0,g.jsx)(ve,{...i,ref:t})})}),w.displayName=_,[T,ge]=S(_),[E,_e]=S(_,{collapsible:!1}),ve=h.forwardRef((e,t)=>{let{value:n,defaultValue:r,onValueChange:i=()=>{},collapsible:a=!1,...o}=e,[s,c]=f({prop:n,defaultProp:r??``,onChange:i,caller:_});return(0,g.jsx)(T,{scope:e.__scopeAccordion,value:h.useMemo(()=>s?[s]:[],[s]),onItemOpen:c,onItemClose:h.useCallback(()=>a&&c(``),[a,c]),children:(0,g.jsx)(E,{scope:e.__scopeAccordion,collapsible:a,children:(0,g.jsx)(A,{...o,ref:t})})})}),D=h.forwardRef((e,t)=>{let{value:n,defaultValue:r,onValueChange:i=()=>{},...a}=e,[o,s]=f({prop:n,defaultProp:r??[],onChange:i,caller:_}),c=h.useCallback(e=>s((t=[])=>[...t,e]),[s]),l=h.useCallback(e=>s((t=[])=>t.filter(t=>t!==e)),[s]);return(0,g.jsx)(T,{scope:e.__scopeAccordion,value:o,onItemOpen:c,onItemClose:l,children:(0,g.jsx)(E,{scope:e.__scopeAccordion,collapsible:!0,children:(0,g.jsx)(A,{...a,ref:t})})})}),[O,k]=S(_),A=h.forwardRef((e,t)=>{let{__scopeAccordion:n,disabled:r,dir:i,orientation:a=`vertical`,...o}=e,c=h.useRef(null),l=s(c,t),u=b(n),d=le(i)===`ltr`,f=ee(e.onKeyDown,e=>{if(!v.includes(e.key))return;let t=e.target,n=u().filter(e=>!e.ref.current?.disabled),r=n.findIndex(e=>e.ref.current===t),i=n.length;if(r===-1)return;e.preventDefault();let o=r,s=i-1,c=()=>{o=r+1,o>s&&(o=0)},l=()=>{o=r-1,o<0&&(o=s)};switch(e.key){case`Home`:o=0;break;case`End`:o=s;break;case`ArrowRight`:a===`horizontal`&&(d?c():l());break;case`ArrowDown`:a===`vertical`&&c();break;case`ArrowLeft`:a===`horizontal`&&(d?l():c());break;case`ArrowUp`:a===`vertical`&&l()}n[o%i].ref.current?.focus()});return(0,g.jsx)(O,{scope:n,disabled:r,direction:i,orientation:a,children:(0,g.jsx)(y.Slot,{scope:n,children:(0,g.jsx)(te.div,{...o,"data-orientation":a,ref:l,onKeyDown:r?void 0:f})})})}),j=`AccordionItem`,[M,N]=S(j),P=h.forwardRef((e,t)=>{let{__scopeAccordion:n,value:r,...i}=e,a=k(j,n),o=ge(j,n),s=C(n),c=re(),l=r&&o.value.includes(r)||!1,u=a.disabled||e.disabled;return(0,g.jsx)(M,{scope:n,open:l,disabled:u,triggerId:c,children:(0,g.jsx)(oe,{"data-orientation":a.orientation,"data-state":me(l),...s,...i,ref:t,disabled:u,open:l,onOpenChange:e=>{e?o.onItemOpen(r):o.onItemClose(r)}})})}),P.displayName=j,F=`AccordionHeader`,I=h.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,i=k(_,n),a=N(F,n);return(0,g.jsx)(te.h3,{"data-orientation":i.orientation,"data-state":me(a.open),"data-disabled":a.disabled?``:void 0,...r,ref:t})}),I.displayName=F,L=`AccordionTrigger`,R=h.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,i=k(_,n),a=N(L,n),o=_e(L,n),s=C(n);return(0,g.jsx)(y.ItemSlot,{scope:n,children:(0,g.jsx)(ae,{"aria-disabled":a.open&&!o.collapsible||void 0,"data-orientation":i.orientation,id:a.triggerId,...s,...r,ref:t})})}),R.displayName=L,z=`AccordionContent`,B=h.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,i=k(_,n),a=N(z,n),o=C(n);return(0,g.jsx)(se,{role:`region`,"aria-labelledby":a.triggerId,"data-orientation":i.orientation,...o,...r,ref:t,style:{"--radix-accordion-content-height":`var(--radix-collapsible-content-height)`,"--radix-accordion-content-width":`var(--radix-collapsible-content-width)`,...e.style}})}),B.displayName=z,V=w,ye=P,H=I,U=R,be=B})))()}function W({...e}){return(0,J.jsx)(V,{"data-slot":`accordion`,...e})}function G({className:e,...t}){return(0,J.jsx)(ye,{"data-slot":`accordion-item`,className:m(`border-b last:border-b-0`,e),...t})}function K({className:e,children:t,...n}){return(0,J.jsx)(H,{className:`flex`,children:(0,J.jsxs)(U,{"data-slot":`accordion-trigger`,className:m(`focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-hidden hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180`,e),...n,children:[t,(0,J.jsx)(fe,{className:`text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-normal ease-out`})]})})}function q({className:e,children:t,...n}){return(0,J.jsx)(be,{"data-slot":`accordion-content`,className:`data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm`,...n,children:(0,J.jsx)(`div`,{className:m(`pt-0 pb-4`,e),children:t})})}var J;function Se(){return(Se=t((()=>{n(),xe(),de(),pe(),J=r(),W.__docgenInfo={description:``,methods:[],displayName:`Accordion`},G.__docgenInfo={description:``,methods:[],displayName:`AccordionItem`},K.__docgenInfo={description:``,methods:[],displayName:`AccordionTrigger`},q.__docgenInfo={description:``,methods:[],displayName:`AccordionContent`}})))()}var Y,Ce,X,Z,Q,$,we;function Te(){return(Te=t((()=>{Se(),Y=r(),Ce={title:`Components/Accordion`,component:W,parameters:{layout:`centered`},tags:[`autodocs`]},X={args:{type:`single`,collapsible:!0,className:`w-[450px]`},render:e=>(0,Y.jsxs)(W,{...e,children:[(0,Y.jsxs)(G,{value:`item-1`,children:[(0,Y.jsx)(K,{children:`Is it accessible?`}),(0,Y.jsx)(q,{children:`Yes. It adheres to the WAI-ARIA design pattern and includes proper keyboard navigation and screen reader support.`})]}),(0,Y.jsxs)(G,{value:`item-2`,children:[(0,Y.jsx)(K,{children:`Is it styled?`}),(0,Y.jsx)(q,{children:`Yes. It comes with default styles that can be easily customized to match your design system.`})]}),(0,Y.jsxs)(G,{value:`item-3`,children:[(0,Y.jsx)(K,{children:`Is it animated?`}),(0,Y.jsx)(q,{children:`Yes. It uses CSS animations for smooth expand and collapse transitions.`})]})]})},Z={args:{type:`multiple`,className:`w-[450px]`},render:e=>(0,Y.jsxs)(W,{...e,children:[(0,Y.jsxs)(G,{value:`item-1`,children:[(0,Y.jsx)(K,{children:`Can multiple items be open?`}),(0,Y.jsx)(q,{children:`Yes! In multiple mode, you can have multiple accordion items open at the same time.`})]}),(0,Y.jsxs)(G,{value:`item-2`,children:[(0,Y.jsx)(K,{children:`How does it work?`}),(0,Y.jsx)(q,{children:`Set type="multiple" on the Accordion component to enable this behavior.`})]}),(0,Y.jsxs)(G,{value:`item-3`,children:[(0,Y.jsx)(K,{children:`What about closing?`}),(0,Y.jsx)(q,{children:`Each item can be independently opened and closed without affecting others.`})]})]})},Q={args:{type:`single`,defaultValue:`item-2`,collapsible:!0,className:`w-[450px]`},render:e=>(0,Y.jsxs)(W,{...e,children:[(0,Y.jsxs)(G,{value:`item-1`,children:[(0,Y.jsx)(K,{children:`First Item`}),(0,Y.jsx)(q,{children:`Content for the first item.`})]}),(0,Y.jsxs)(G,{value:`item-2`,children:[(0,Y.jsx)(K,{children:`Second Item (Default Open)`}),(0,Y.jsx)(q,{children:`This item is open by default because defaultValue is set to "item-2".`})]}),(0,Y.jsxs)(G,{value:`item-3`,children:[(0,Y.jsx)(K,{children:`Third Item`}),(0,Y.jsx)(q,{children:`Content for the third item.`})]})]})},$={args:{type:`single`,collapsible:!0,className:`w-[500px]`},render:e=>(0,Y.jsxs)(W,{...e,children:[(0,Y.jsxs)(G,{value:`q1`,children:[(0,Y.jsx)(K,{children:`What payment methods do you accept?`}),(0,Y.jsx)(q,{children:`We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers.`})]}),(0,Y.jsxs)(G,{value:`q2`,children:[(0,Y.jsx)(K,{children:`How long does shipping take?`}),(0,Y.jsx)(q,{children:`Standard shipping takes 5-7 business days. Express shipping (2-3 days) and overnight options are also available at checkout.`})]}),(0,Y.jsxs)(G,{value:`q3`,children:[(0,Y.jsx)(K,{children:`What is your return policy?`}),(0,Y.jsx)(q,{children:`We offer a 30-day money-back guarantee. Items must be unused and in original packaging. Return shipping is free for defective items.`})]}),(0,Y.jsxs)(G,{value:`q4`,children:[(0,Y.jsx)(K,{children:`Do you offer technical support?`}),(0,Y.jsx)(q,{children:`Yes! Our support team is available 24/7 via email, chat, and phone. Enterprise customers get dedicated account managers.`})]})]})},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},we=[`Single`,`Multiple`,`DefaultOpen`,`FAQ`]})))()}Te();export{Q as DefaultOpen,$ as FAQ,Z as Multiple,X as Single,we as __namedExportsOrder,Ce as default};