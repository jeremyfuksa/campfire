import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{n as i,r as a}from"./dist-Dlyn9OaY.js";import{n as o,r as s}from"./dist-D7HkfZMy.js";import{a as c,i as ee}from"./dist-BK-Z8wev.js";import{n as l,t as u}from"./utils-DwVtoTFj.js";import{a as te,c as ne,d as re,i as ie,l as ae,n as oe,o as se,r as ce,s as le,t as d,u as ue}from"./dist-DR8umWhS.js";import{n as de,r as fe,t as f}from"./button-CTqIoSi4.js";function pe(e){let t=({children:e})=>(0,p.jsx)(p.Fragment,{children:e});return t.displayName=`${e}.Slottable`,t.__radixId=m,t}var p,m;function me(){return(me=t((()=>{n(),p=r(),m=Symbol(`radix.slottable`)})))()}var h,g,_,v,he,y,b,x,S,C,w,T,E,D,O,ge,_e,k,A,j,M,N,P,F,I,L,R,ve,ye,be,xe,Se,Ce,we,Te,Ee;function De(){return(De=t((()=>{h=e(n(),1),a(),o(),re(),c(),me(),g=r(),_=`AlertDialog`,[v,he]=i(_,[ue]),y=ue(),b=e=>{let{__scopeAlertDialog:t,...n}=e,r=y(t);return(0,g.jsx)(se,{...r,...n,modal:!0})},b.displayName=_,x=`AlertDialogTrigger`,S=h.forwardRef((e,t)=>{let{__scopeAlertDialog:n,...r}=e,i=y(n);return(0,g.jsx)(ne,{...i,...r,ref:t})}),S.displayName=x,C=`AlertDialogPortal`,w=e=>{let{__scopeAlertDialog:t,...n}=e,r=y(t);return(0,g.jsx)(te,{...r,...n})},w.displayName=C,T=`AlertDialogOverlay`,E=h.forwardRef((e,t)=>{let{__scopeAlertDialog:n,...r}=e,i=y(n);return(0,g.jsx)(ie,{...i,...r,ref:t})}),E.displayName=T,D=`AlertDialogContent`,[O,ge]=v(D),_e=pe(`AlertDialogContent`),k=h.forwardRef((e,t)=>{let{__scopeAlertDialog:n,children:r,...i}=e,a=y(n),o=h.useRef(null),c=s(t,o),l=h.useRef(null);return(0,g.jsx)(ae,{contentName:D,titleName:A,docsSlug:`alert-dialog`,children:(0,g.jsx)(O,{scope:n,cancelRef:l,children:(0,g.jsxs)(oe,{role:`alertdialog`,...a,...i,ref:c,onOpenAutoFocus:ee(i.onOpenAutoFocus,e=>{e.preventDefault(),l.current?.focus({preventScroll:!0})}),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault(),children:[(0,g.jsx)(_e,{children:r}),(0,g.jsx)(R,{contentRef:o})]})})})}),k.displayName=D,A=`AlertDialogTitle`,j=h.forwardRef((e,t)=>{let{__scopeAlertDialog:n,...r}=e,i=y(n);return(0,g.jsx)(le,{...i,...r,ref:t})}),j.displayName=A,M=`AlertDialogDescription`,N=h.forwardRef((e,t)=>{let{__scopeAlertDialog:n,...r}=e,i=y(n);return(0,g.jsx)(ce,{...i,...r,ref:t})}),N.displayName=M,P=`AlertDialogAction`,F=h.forwardRef((e,t)=>{let{__scopeAlertDialog:n,...r}=e,i=y(n);return(0,g.jsx)(d,{...i,...r,ref:t})}),F.displayName=P,I=`AlertDialogCancel`,L=h.forwardRef((e,t)=>{let{__scopeAlertDialog:n,...r}=e,{cancelRef:i}=ge(I,n),a=y(n),o=s(t,i);return(0,g.jsx)(d,{...a,...r,ref:o})}),L.displayName=I,R=({contentRef:e})=>{let t=`\`${D}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${D}\` by passing a \`${M}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${D}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return h.useEffect(()=>{document.getElementById(e.current?.getAttribute(`aria-describedby`))||console.warn(t)},[t,e]),null},ve=b,ye=S,be=w,xe=E,Se=k,Ce=F,we=L,Te=j,Ee=N})))()}function z({...e}){return(0,J.jsx)(ve,{"data-slot":`alert-dialog`,...e})}function B({...e}){return(0,J.jsx)(ye,{"data-slot":`alert-dialog-trigger`,...e})}function Oe({...e}){return(0,J.jsx)(be,{"data-slot":`alert-dialog-portal`,...e})}function ke({className:e,...t}){return(0,J.jsx)(xe,{"data-slot":`alert-dialog-overlay`,className:u(`data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50`,e),...t})}function V({className:e,...t}){return(0,J.jsxs)(Oe,{children:[(0,J.jsx)(ke,{}),(0,J.jsx)(Se,{"data-slot":`alert-dialog-content`,className:u(`bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg`,e),...t})]})}function H({className:e,...t}){return(0,J.jsx)(`div`,{"data-slot":`alert-dialog-header`,className:u(`flex flex-col gap-2 text-center sm:text-left`,e),...t})}function U({className:e,...t}){return(0,J.jsx)(`div`,{"data-slot":`alert-dialog-footer`,className:u(`flex flex-col-reverse gap-2 sm:flex-row sm:justify-end`,e),...t})}function W({className:e,...t}){return(0,J.jsx)(Te,{"data-slot":`alert-dialog-title`,className:u(`text-lg font-semibold`,e),...t})}function G({className:e,...t}){return(0,J.jsx)(Ee,{"data-slot":`alert-dialog-description`,className:u(`text-muted-foreground text-sm`,e),...t})}function K({className:e,...t}){return(0,J.jsx)(Ce,{className:u(de(),e),...t})}function q({className:e,...t}){return(0,J.jsx)(we,{className:u(de({variant:`outline`}),e),...t})}var J;function Ae(){return(Ae=t((()=>{n(),De(),l(),fe(),J=r(),z.__docgenInfo={description:``,methods:[],displayName:`AlertDialog`},Oe.__docgenInfo={description:``,methods:[],displayName:`AlertDialogPortal`},ke.__docgenInfo={description:``,methods:[],displayName:`AlertDialogOverlay`},B.__docgenInfo={description:``,methods:[],displayName:`AlertDialogTrigger`},V.__docgenInfo={description:``,methods:[],displayName:`AlertDialogContent`},H.__docgenInfo={description:``,methods:[],displayName:`AlertDialogHeader`},U.__docgenInfo={description:``,methods:[],displayName:`AlertDialogFooter`},W.__docgenInfo={description:``,methods:[],displayName:`AlertDialogTitle`},G.__docgenInfo={description:``,methods:[],displayName:`AlertDialogDescription`},K.__docgenInfo={description:``,methods:[],displayName:`AlertDialogAction`},q.__docgenInfo={description:``,methods:[],displayName:`AlertDialogCancel`}})))()}var Y,je,X,Z,Q,$,Me;function Ne(){return(Ne=t((()=>{Ae(),fe(),Y=r(),je={title:`Components/AlertDialog`,component:z,parameters:{layout:`centered`},tags:[`autodocs`]},X={render:()=>(0,Y.jsxs)(z,{children:[(0,Y.jsx)(B,{asChild:!0,children:(0,Y.jsx)(f,{variant:`outline`,children:`Show Dialog`})}),(0,Y.jsxs)(V,{children:[(0,Y.jsxs)(H,{children:[(0,Y.jsx)(W,{children:`Are you absolutely sure?`}),(0,Y.jsx)(G,{children:`This action cannot be undone. This will permanently delete your account and remove your data from our servers.`})]}),(0,Y.jsxs)(U,{children:[(0,Y.jsx)(q,{children:`Cancel`}),(0,Y.jsx)(K,{children:`Continue`})]})]})]})},Z={render:()=>(0,Y.jsxs)(z,{children:[(0,Y.jsx)(B,{asChild:!0,children:(0,Y.jsx)(f,{variant:`destructive`,children:`Delete Account`})}),(0,Y.jsxs)(V,{children:[(0,Y.jsxs)(H,{children:[(0,Y.jsx)(W,{children:`Delete Account`}),(0,Y.jsx)(G,{children:`This will permanently delete your account. All your data will be lost and cannot be recovered.`})]}),(0,Y.jsxs)(U,{children:[(0,Y.jsx)(q,{children:`Cancel`}),(0,Y.jsx)(K,{className:`bg-destructive text-destructive-foreground hover:bg-destructive/90`,children:`Delete`})]})]})]})},Q={render:()=>(0,Y.jsxs)(z,{children:[(0,Y.jsx)(B,{asChild:!0,children:(0,Y.jsx)(f,{children:`Submit Form`})}),(0,Y.jsxs)(V,{children:[(0,Y.jsxs)(H,{children:[(0,Y.jsx)(W,{children:`Confirm submission`}),(0,Y.jsx)(G,{children:`Are you sure you want to submit this form? Please review all information before confirming.`})]}),(0,Y.jsxs)(U,{children:[(0,Y.jsx)(q,{children:`Review`}),(0,Y.jsx)(K,{children:`Submit`})]})]})]})},$={render:()=>(0,Y.jsxs)(z,{children:[(0,Y.jsx)(B,{asChild:!0,children:(0,Y.jsx)(f,{variant:`outline`,children:`Show Message`})}),(0,Y.jsxs)(V,{children:[(0,Y.jsxs)(H,{children:[(0,Y.jsx)(W,{children:`Important Notice`}),(0,Y.jsx)(G,{children:`This is an important message that requires acknowledgment.`})]}),(0,Y.jsx)(U,{children:(0,Y.jsx)(K,{children:`I Understand`})})]})]})},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Me=[`Default`,`Destructive`,`Confirmation`,`WithoutCancel`]})))()}Ne();export{Q as Confirmation,X as Default,Z as Destructive,$ as WithoutCancel,Me as __namedExportsOrder,je as default};