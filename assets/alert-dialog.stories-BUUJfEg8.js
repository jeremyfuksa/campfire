import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{n as i,r as a}from"./dist-DIs3RLZS.js";import{n as o,r as s}from"./dist-Cd9gDrEs.js";import{o as ee,s as c}from"./dist-Dq2sm8oD.js";import{n as l,t as u}from"./utils-CDLLjGU_.js";import{a as te,c as ne,d as re,i as ie,l as ae,n as oe,o as se,r as ce,s as le,t as ue,u as de}from"./dist-D7YTkeLs.js";import{n as fe,r as pe,t as d}from"./button-DCO8oKDq.js";function me(e){let t=({children:e})=>(0,f.jsx)(f.Fragment,{children:e});return t.displayName=`${e}.Slottable`,t.__radixId=p,t}var f,p,he=t((()=>{n(),f=r(),p=Symbol(`radix.slottable`)})),m,h,g,_,ge,v,y,b,x,S,C,w,T,E,_e,ve,D,O,k,A,j,M,N,P,F,I,L,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe=t((()=>{m=e(n(),1),a(),o(),re(),c(),he(),h=r(),g=`AlertDialog`,[_,ge]=i(g,[de]),v=de(),y=e=>{let{__scopeAlertDialog:t,...n}=e,r=v(t);return(0,h.jsx)(se,{...r,...n,modal:!0})},y.displayName=g,b=`AlertDialogTrigger`,x=m.forwardRef((e,t)=>{let{__scopeAlertDialog:n,...r}=e,i=v(n);return(0,h.jsx)(ne,{...i,...r,ref:t})}),x.displayName=b,S=`AlertDialogPortal`,C=e=>{let{__scopeAlertDialog:t,...n}=e,r=v(t);return(0,h.jsx)(te,{...r,...n})},C.displayName=S,w=`AlertDialogOverlay`,T=m.forwardRef((e,t)=>{let{__scopeAlertDialog:n,...r}=e,i=v(n);return(0,h.jsx)(ie,{...i,...r,ref:t})}),T.displayName=w,E=`AlertDialogContent`,[_e,ve]=_(E),D=me(`AlertDialogContent`),O=m.forwardRef((e,t)=>{let{__scopeAlertDialog:n,children:r,...i}=e,a=v(n),o=m.useRef(null),c=s(t,o),l=m.useRef(null);return(0,h.jsx)(ae,{contentName:E,titleName:k,docsSlug:`alert-dialog`,children:(0,h.jsx)(_e,{scope:n,cancelRef:l,children:(0,h.jsxs)(oe,{role:`alertdialog`,...a,...i,ref:c,onOpenAutoFocus:ee(i.onOpenAutoFocus,e=>{e.preventDefault(),l.current?.focus({preventScroll:!0})}),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault(),children:[(0,h.jsx)(D,{children:r}),(0,h.jsx)(L,{contentRef:o})]})})})}),O.displayName=E,k=`AlertDialogTitle`,A=m.forwardRef((e,t)=>{let{__scopeAlertDialog:n,...r}=e,i=v(n);return(0,h.jsx)(le,{...i,...r,ref:t})}),A.displayName=k,j=`AlertDialogDescription`,M=m.forwardRef((e,t)=>{let{__scopeAlertDialog:n,...r}=e,i=v(n);return(0,h.jsx)(ce,{...i,...r,ref:t})}),M.displayName=j,N=`AlertDialogAction`,P=m.forwardRef((e,t)=>{let{__scopeAlertDialog:n,...r}=e,i=v(n);return(0,h.jsx)(ue,{...i,...r,ref:t})}),P.displayName=N,F=`AlertDialogCancel`,I=m.forwardRef((e,t)=>{let{__scopeAlertDialog:n,...r}=e,{cancelRef:i}=ve(F,n),a=v(n),o=s(t,i);return(0,h.jsx)(ue,{...a,...r,ref:o})}),I.displayName=F,L=({contentRef:e})=>{let t=`\`${E}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${E}\` by passing a \`${j}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${E}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return m.useEffect(()=>{document.getElementById(e.current?.getAttribute(`aria-describedby`))||console.warn(t)},[t,e]),null},ye=y,be=x,xe=C,Se=T,Ce=O,we=P,Te=I,Ee=A,De=M}));function R({...e}){return(0,q.jsx)(ye,{"data-slot":`alert-dialog`,...e})}function z({...e}){return(0,q.jsx)(be,{"data-slot":`alert-dialog-trigger`,...e})}function ke({...e}){return(0,q.jsx)(xe,{"data-slot":`alert-dialog-portal`,...e})}function Ae({className:e,...t}){return(0,q.jsx)(Se,{"data-slot":`alert-dialog-overlay`,className:u(`data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50`,e),...t})}function B({className:e,...t}){return(0,q.jsxs)(ke,{children:[(0,q.jsx)(Ae,{}),(0,q.jsx)(Ce,{"data-slot":`alert-dialog-content`,className:u(`bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg`,e),...t})]})}function V({className:e,...t}){return(0,q.jsx)(`div`,{"data-slot":`alert-dialog-header`,className:u(`flex flex-col gap-2 text-center sm:text-left`,e),...t})}function H({className:e,...t}){return(0,q.jsx)(`div`,{"data-slot":`alert-dialog-footer`,className:u(`flex flex-col-reverse gap-2 sm:flex-row sm:justify-end`,e),...t})}function U({className:e,...t}){return(0,q.jsx)(Ee,{"data-slot":`alert-dialog-title`,className:u(`text-lg font-semibold`,e),...t})}function W({className:e,...t}){return(0,q.jsx)(De,{"data-slot":`alert-dialog-description`,className:u(`text-muted-foreground text-sm`,e),...t})}function G({className:e,...t}){return(0,q.jsx)(we,{className:u(fe(),e),...t})}function K({className:e,...t}){return(0,q.jsx)(Te,{className:u(fe({variant:`outline`}),e),...t})}var q,je=t((()=>{n(),Oe(),l(),pe(),q=r(),R.__docgenInfo={description:``,methods:[],displayName:`AlertDialog`},ke.__docgenInfo={description:``,methods:[],displayName:`AlertDialogPortal`},Ae.__docgenInfo={description:``,methods:[],displayName:`AlertDialogOverlay`},z.__docgenInfo={description:``,methods:[],displayName:`AlertDialogTrigger`},B.__docgenInfo={description:``,methods:[],displayName:`AlertDialogContent`},V.__docgenInfo={description:``,methods:[],displayName:`AlertDialogHeader`},H.__docgenInfo={description:``,methods:[],displayName:`AlertDialogFooter`},U.__docgenInfo={description:``,methods:[],displayName:`AlertDialogTitle`},W.__docgenInfo={description:``,methods:[],displayName:`AlertDialogDescription`},G.__docgenInfo={description:``,methods:[],displayName:`AlertDialogAction`},K.__docgenInfo={description:``,methods:[],displayName:`AlertDialogCancel`}})),J,Me,Y,X,Z,Q,$;t((()=>{je(),pe(),J=r(),Me={title:`Components/AlertDialog`,component:R,parameters:{layout:`centered`},tags:[`autodocs`]},Y={render:()=>(0,J.jsxs)(R,{children:[(0,J.jsx)(z,{asChild:!0,children:(0,J.jsx)(d,{variant:`outline`,children:`Show Dialog`})}),(0,J.jsxs)(B,{children:[(0,J.jsxs)(V,{children:[(0,J.jsx)(U,{children:`Are you absolutely sure?`}),(0,J.jsx)(W,{children:`This action cannot be undone. This will permanently delete your account and remove your data from our servers.`})]}),(0,J.jsxs)(H,{children:[(0,J.jsx)(K,{children:`Cancel`}),(0,J.jsx)(G,{children:`Continue`})]})]})]})},X={render:()=>(0,J.jsxs)(R,{children:[(0,J.jsx)(z,{asChild:!0,children:(0,J.jsx)(d,{variant:`destructive`,children:`Delete Account`})}),(0,J.jsxs)(B,{children:[(0,J.jsxs)(V,{children:[(0,J.jsx)(U,{children:`Delete Account`}),(0,J.jsx)(W,{children:`This will permanently delete your account. All your data will be lost and cannot be recovered.`})]}),(0,J.jsxs)(H,{children:[(0,J.jsx)(K,{children:`Cancel`}),(0,J.jsx)(G,{className:`bg-destructive text-destructive-foreground hover:bg-destructive/90`,children:`Delete`})]})]})]})},Z={render:()=>(0,J.jsxs)(R,{children:[(0,J.jsx)(z,{asChild:!0,children:(0,J.jsx)(d,{children:`Submit Form`})}),(0,J.jsxs)(B,{children:[(0,J.jsxs)(V,{children:[(0,J.jsx)(U,{children:`Confirm submission`}),(0,J.jsx)(W,{children:`Are you sure you want to submit this form? Please review all information before confirming.`})]}),(0,J.jsxs)(H,{children:[(0,J.jsx)(K,{children:`Review`}),(0,J.jsx)(G,{children:`Submit`})]})]})]})},Q={render:()=>(0,J.jsxs)(R,{children:[(0,J.jsx)(z,{asChild:!0,children:(0,J.jsx)(d,{variant:`outline`,children:`Show Message`})}),(0,J.jsxs)(B,{children:[(0,J.jsxs)(V,{children:[(0,J.jsx)(U,{children:`Important Notice`}),(0,J.jsx)(W,{children:`This is an important message that requires acknowledgment.`})]}),(0,J.jsx)(H,{children:(0,J.jsx)(G,{children:`I Understand`})})]})]})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Account</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete your account. All your data will be lost
            and cannot be recovered.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Submit Form</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm submission</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to submit this form? Please review all
            information before confirming.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Review</AlertDialogCancel>
          <AlertDialogAction>Submit</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Message</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Important Notice</AlertDialogTitle>
          <AlertDialogDescription>
            This is an important message that requires acknowledgment.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>I Understand</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Destructive`,`Confirmation`,`WithoutCancel`]}))();export{Z as Confirmation,Y as Default,X as Destructive,Q as WithoutCancel,$ as __namedExportsOrder,Me as default};