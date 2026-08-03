import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{n as i,t as a}from"./createLucideIcon-D4Czp6j_.js";import{n as o,t as s}from"./chevron-right-ByLsb6_d.js";import{n as c,t as l}from"./house-DNU_zrj0.js";import{n as u,t as d}from"./inbox-ByjGVhNn.js";import{n as f,t as p}from"./search-Ch90_uef.js";import{n as m,t as h}from"./settings-BE-K_bqF.js";import{n as ee,t as g}from"./users-CrAwKLZL.js";import{n as te,t as _}from"./utils-DwVtoTFj.js";import{r as ne,t as v}from"./dist-C_FIoz-e.js";import{n as re,t as ie}from"./dist-C5S42fdU.js";import{r as ae,t as oe}from"./button-CTqIoSi4.js";import{n as se,t as ce}from"./input-DUy9koNX.js";import{i as le,n as ue,r as de,t as fe}from"./collapsible-jvwr6QcH.js";import{n as pe,t as me}from"./separator-Dd5ufHqj.js";import{a as he,c as ge,n as _e,o as ve,r as ye,t as be}from"./sheet-Dd1yzYET.js";import{n as xe}from"./skeleton-PyChwVx_.js";import{a as Se,i as Ce,n as we,r as Te,t as Ee}from"./tooltip-DOJBPnVr.js";var y,b;function x(){return(x=t((()=>{i(),y=[[`path`,{d:`M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z`,key:`1rqfz7`}],[`path`,{d:`M14 2v4a2 2 0 0 0 2 2h4`,key:`tnqrlb`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]],b=a(`file-text`,y)})))()}var S,C;function w(){return(w=t((()=>{i(),S=[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M9 3v18`,key:`fh3hqa`}]],C=a(`panel-left`,S)})))()}function De(){let[e,t]=T.useState(void 0);return T.useEffect(()=>{let e=window.matchMedia(`(max-width: 767px)`),n=()=>{t(window.innerWidth<E)};return e.addEventListener(`change`,n),t(window.innerWidth<E),()=>e.removeEventListener(`change`,n)},[]),!!e}var T,E;function Oe(){return(Oe=t((()=>{T=e(n(),1),E=768})))()}function D(){let e=U.useContext(G);if(!e)throw Error(`useSidebar must be used within a SidebarProvider.`);return e}function O({defaultOpen:e=!0,open:t,onOpenChange:n,className:r,style:i,children:a,...o}){let s=De(),[c,l]=U.useState(!1),[u,d]=U.useState(e),f=t??u,p=U.useCallback(e=>{let t=typeof e==`function`?e(f):e;n?n(t):d(t),document.cookie=`${Ne}=${t}; path=/; max-age=${Pe}`},[n,f]),m=U.useCallback(()=>s?l(e=>!e):p(e=>!e),[s,p,l]);U.useEffect(()=>{let e=e=>{e.key===Re&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),m())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[m]);let h=f?`expanded`:`collapsed`,ee=U.useMemo(()=>({state:h,open:f,setOpen:p,isMobile:s,openMobile:c,setOpenMobile:l,toggleSidebar:m}),[h,f,p,s,c,l,m]);return(0,W.jsx)(G.Provider,{value:ee,children:(0,W.jsx)(Te,{delayDuration:0,children:(0,W.jsx)(`div`,{"data-slot":`sidebar-wrapper`,style:{"--sidebar-width":Fe,"--sidebar-width-icon":Le,...i},className:_(`group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full`,r),...o,children:a})})})}function k({side:e=`left`,variant:t=`sidebar`,collapsible:n=`offcanvas`,className:r,children:i,...a}){let{isMobile:o,state:s,openMobile:c,setOpenMobile:l}=D();return n===`none`?(0,W.jsx)(`div`,{"data-slot":`sidebar`,className:_(`bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col`,r),...a,children:i}):o?(0,W.jsx)(be,{open:c,onOpenChange:l,...a,children:(0,W.jsxs)(_e,{"data-sidebar":`sidebar`,"data-slot":`sidebar`,"data-mobile":`true`,className:`bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden`,style:{"--sidebar-width":Ie},side:e,children:[(0,W.jsxs)(he,{className:`sr-only`,children:[(0,W.jsx)(ve,{children:`Sidebar`}),(0,W.jsx)(ye,{children:`Displays the mobile sidebar.`})]}),(0,W.jsx)(`div`,{className:`flex h-full w-full flex-col`,children:i})]})}):(0,W.jsxs)(`div`,{className:`group peer text-sidebar-foreground hidden md:block`,"data-state":s,"data-collapsible":s===`collapsed`?n:``,"data-variant":t,"data-side":e,"data-slot":`sidebar`,children:[(0,W.jsx)(`div`,{"data-slot":`sidebar-gap`,className:_(`relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear`,`group-data-[collapsible=offcanvas]:w-0`,`group-data-[side=right]:rotate-180`,t===`floating`||t===`inset`?`group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]`:`group-data-[collapsible=icon]:w-(--sidebar-width-icon)`)}),(0,W.jsx)(`div`,{"data-slot":`sidebar-container`,className:_(`fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex`,e===`left`?`left-0 group-data-[collapsible=offcanvas]:-left-(--sidebar-width)`:`right-0 group-data-[collapsible=offcanvas]:-right-(--sidebar-width)`,t===`floating`||t===`inset`?`p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]`:`group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l`,r),...a,children:(0,W.jsx)(`div`,{"data-sidebar":`sidebar`,"data-slot":`sidebar-inner`,className:`bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-xs`,children:i})})]})}function A({className:e,onClick:t,...n}){let{toggleSidebar:r}=D();return(0,W.jsxs)(oe,{"data-sidebar":`trigger`,"data-slot":`sidebar-trigger`,variant:`ghost`,size:`icon`,className:_(`size-7`,e),onClick:e=>{t?.(e),r()},...n,children:[(0,W.jsx)(C,{}),(0,W.jsx)(`span`,{className:`sr-only`,children:`Toggle Sidebar`})]})}function j({className:e,...t}){return(0,W.jsx)(`main`,{"data-slot":`sidebar-inset`,className:_(`bg-background relative flex w-full flex-1 flex-col`,`md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-xs md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2`,e),...t})}function ke({className:e,...t}){return(0,W.jsx)(ce,{"data-slot":`sidebar-input`,"data-sidebar":`input`,className:_(`bg-background h-8 w-full shadow-none`,e),...t})}function M({className:e,...t}){return(0,W.jsx)(`div`,{"data-slot":`sidebar-header`,"data-sidebar":`header`,className:_(`flex flex-col gap-2 p-2`,e),...t})}function Ae({className:e,...t}){return(0,W.jsx)(`div`,{"data-slot":`sidebar-footer`,"data-sidebar":`footer`,className:_(`flex flex-col gap-2 p-2`,e),...t})}function je({className:e,...t}){return(0,W.jsx)(me,{"data-slot":`sidebar-separator`,"data-sidebar":`separator`,className:_(`bg-sidebar-border mx-2 w-auto`,e),...t})}function N({className:e,...t}){return(0,W.jsx)(`div`,{"data-slot":`sidebar-content`,"data-sidebar":`content`,className:_(`flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden`,e),...t})}function P({className:e,...t}){return(0,W.jsx)(`div`,{"data-slot":`sidebar-group`,"data-sidebar":`group`,className:_(`relative flex w-full min-w-0 flex-col p-2`,e),...t})}function F({className:e,asChild:t=!1,...n}){return(0,W.jsx)(t?v:`div`,{"data-slot":`sidebar-group-label`,"data-sidebar":`group-label`,className:_(`text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0`,`group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0`,e),...n})}function I({className:e,...t}){return(0,W.jsx)(`div`,{"data-slot":`sidebar-group-content`,"data-sidebar":`group-content`,className:_(`w-full text-sm`,e),...t})}function L({className:e,...t}){return(0,W.jsx)(`ul`,{"data-slot":`sidebar-menu`,"data-sidebar":`menu`,className:_(`flex w-full min-w-0 flex-col gap-1`,e),...t})}function R({className:e,...t}){return(0,W.jsx)(`li`,{"data-slot":`sidebar-menu-item`,"data-sidebar":`menu-item`,className:_(`group/menu-item relative`,e),...t})}function z({asChild:e=!1,isActive:t=!1,variant:n=`default`,size:r=`default`,tooltip:i,className:a,...o}){let s=e?v:`button`,{isMobile:c,state:l}=D(),u=(0,W.jsx)(s,{"data-slot":`sidebar-menu-button`,"data-sidebar":`menu-button`,"data-size":r,"data-active":t,className:_(ze({variant:n,size:r}),a),...o});return i?(typeof i==`string`&&(i={children:i}),(0,W.jsxs)(Ee,{children:[(0,W.jsx)(Ce,{asChild:!0,children:u}),(0,W.jsx)(we,{side:`right`,align:`center`,hidden:l!==`collapsed`||c,...i})]})):u}function B({className:e,...t}){return(0,W.jsx)(`div`,{"data-slot":`sidebar-menu-badge`,"data-sidebar":`menu-badge`,className:_(`text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none`,`peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground`,`peer-data-[size=sm]/menu-button:top-1`,`peer-data-[size=default]/menu-button:top-1.5`,`peer-data-[size=lg]/menu-button:top-2.5`,`group-data-[collapsible=icon]:hidden`,e),...t})}function Me({className:e,...t}){return(0,W.jsx)(`ul`,{"data-slot":`sidebar-menu-sub`,"data-sidebar":`menu-sub`,className:_(`border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5`,`group-data-[collapsible=icon]:hidden`,e),...t})}function V({className:e,...t}){return(0,W.jsx)(`li`,{"data-slot":`sidebar-menu-sub-item`,"data-sidebar":`menu-sub-item`,className:_(`group/menu-sub-item relative`,e),...t})}function H({asChild:e=!1,size:t=`md`,isActive:n=!1,className:r,...i}){return(0,W.jsx)(e?v:`a`,{"data-slot":`sidebar-menu-sub-button`,"data-sidebar":`menu-sub-button`,"data-size":t,"data-active":n,className:_(`text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0`,`data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground`,t===`sm`&&`text-xs`,t===`md`&&`text-sm`,`group-data-[collapsible=icon]:hidden`,r),...i})}var U,W,Ne,Pe,Fe,Ie,Le,Re,G,ze;function Be(){return(Be=t((()=>{U=e(n(),1),ne(),re(),w(),Oe(),te(),ae(),se(),pe(),ge(),xe(),Se(),W=r(),Ne=`sidebar_state`,Pe=604800,Fe=`16rem`,Ie=`18rem`,Le=`3rem`,Re=`b`,G=U.createContext(null),ze=ie(`peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0`,{variants:{variant:{default:`hover:bg-sidebar-accent hover:text-sidebar-accent-foreground`,outline:`bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]`},size:{default:`h-8 text-sm`,sm:`h-7 text-xs`,lg:`h-12 text-sm group-data-[collapsible=icon]:p-0!`}},defaultVariants:{variant:`default`,size:`default`}}),k.__docgenInfo={description:``,methods:[],displayName:`Sidebar`,props:{side:{required:!1,tsType:{name:`union`,raw:`"left" | "right"`,elements:[{name:`literal`,value:`"left"`},{name:`literal`,value:`"right"`}]},description:``,defaultValue:{value:`"left"`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`"sidebar" | "floating" | "inset"`,elements:[{name:`literal`,value:`"sidebar"`},{name:`literal`,value:`"floating"`},{name:`literal`,value:`"inset"`}]},description:``,defaultValue:{value:`"sidebar"`,computed:!1}},collapsible:{required:!1,tsType:{name:`union`,raw:`"offcanvas" | "icon" | "none"`,elements:[{name:`literal`,value:`"offcanvas"`},{name:`literal`,value:`"icon"`},{name:`literal`,value:`"none"`}]},description:``,defaultValue:{value:`"offcanvas"`,computed:!1}}}},N.__docgenInfo={description:``,methods:[],displayName:`SidebarContent`},Ae.__docgenInfo={description:``,methods:[],displayName:`SidebarFooter`},P.__docgenInfo={description:``,methods:[],displayName:`SidebarGroup`},I.__docgenInfo={description:``,methods:[],displayName:`SidebarGroupContent`},F.__docgenInfo={description:``,methods:[],displayName:`SidebarGroupLabel`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}},M.__docgenInfo={description:``,methods:[],displayName:`SidebarHeader`},ke.__docgenInfo={description:``,methods:[],displayName:`SidebarInput`},j.__docgenInfo={description:``,methods:[],displayName:`SidebarInset`},L.__docgenInfo={description:``,methods:[],displayName:`SidebarMenu`},B.__docgenInfo={description:``,methods:[],displayName:`SidebarMenuBadge`},z.__docgenInfo={description:``,methods:[],displayName:`SidebarMenuButton`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},isActive:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},tooltip:{required:!1,tsType:{name:`union`,raw:`string | React.ComponentProps<typeof TooltipContent>`,elements:[{name:`string`},{name:`ReactComponentProps`,raw:`React.ComponentProps<typeof TooltipContent>`,elements:[{name:`TooltipContent`}]}]},description:``},variant:{defaultValue:{value:`"default"`,computed:!1},required:!1},size:{defaultValue:{value:`"default"`,computed:!1},required:!1}}},R.__docgenInfo={description:``,methods:[],displayName:`SidebarMenuItem`},Me.__docgenInfo={description:``,methods:[],displayName:`SidebarMenuSub`},H.__docgenInfo={description:``,methods:[],displayName:`SidebarMenuSubButton`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`"sm" | "md"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},isActive:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}},V.__docgenInfo={description:``,methods:[],displayName:`SidebarMenuSubItem`},O.__docgenInfo={description:``,methods:[],displayName:`SidebarProvider`,props:{defaultOpen:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},open:{required:!1,tsType:{name:`boolean`},description:``},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``}}},je.__docgenInfo={description:``,methods:[],displayName:`SidebarSeparator`},A.__docgenInfo={description:``,methods:[],displayName:`SidebarTrigger`}})))()}var K,Ve,q,J,Y,X,Z,Q,He;function $(){return($=t((()=>{o(),x(),c(),u(),f(),m(),ee(),Be(),le(),K=r(),Ve={title:`Components/Sidebar`,component:k,parameters:{layout:`fullscreen`},tags:[`autodocs`]},q=[{title:`Home`,icon:l},{title:`Inbox`,icon:d},{title:`Team`,icon:g},{title:`Settings`,icon:h}],J={render:()=>(0,K.jsxs)(O,{children:[(0,K.jsxs)(k,{children:[(0,K.jsx)(M,{children:(0,K.jsx)(`div`,{className:`px-3 py-2 font-semibold`,children:`Campfire`})}),(0,K.jsx)(N,{children:(0,K.jsxs)(P,{children:[(0,K.jsx)(F,{children:`Application`}),(0,K.jsx)(I,{children:(0,K.jsx)(L,{children:q.map(e=>(0,K.jsx)(R,{children:(0,K.jsxs)(z,{children:[(0,K.jsx)(e.icon,{}),(0,K.jsx)(`span`,{children:e.title})]})},e.title))})})]})}),(0,K.jsx)(Ae,{children:(0,K.jsx)(`div`,{className:`px-3 py-2 text-xs text-muted-foreground`,children:`v0.8.x`})})]}),(0,K.jsxs)(j,{children:[(0,K.jsxs)(`header`,{className:`flex h-12 items-center border-b px-4`,children:[(0,K.jsx)(A,{}),(0,K.jsx)(`h1`,{className:`ml-3 font-medium`,children:`Dashboard`})]}),(0,K.jsx)(`main`,{className:`p-6 text-sm text-muted-foreground`,children:`Toggle the trigger to collapse the sidebar.`})]})]})},Y={render:()=>(0,K.jsxs)(O,{children:[(0,K.jsxs)(k,{children:[(0,K.jsx)(M,{children:(0,K.jsx)(`div`,{className:`px-3 py-2 font-semibold`,children:`Campfire`})}),(0,K.jsx)(N,{children:(0,K.jsxs)(P,{children:[(0,K.jsx)(F,{children:`Application`}),(0,K.jsx)(I,{children:(0,K.jsxs)(L,{children:[(0,K.jsx)(R,{children:(0,K.jsxs)(z,{children:[(0,K.jsx)(l,{}),(0,K.jsx)(`span`,{children:`Home`})]})}),(0,K.jsx)(R,{children:(0,K.jsxs)(z,{isActive:!0,children:[(0,K.jsx)(d,{}),(0,K.jsx)(`span`,{children:`Inbox`})]})}),(0,K.jsx)(R,{children:(0,K.jsxs)(z,{children:[(0,K.jsx)(g,{}),(0,K.jsx)(`span`,{children:`Team`})]})})]})})]})})]}),(0,K.jsxs)(j,{children:[(0,K.jsxs)(`header`,{className:`flex h-12 items-center border-b px-4`,children:[(0,K.jsx)(A,{}),(0,K.jsx)(`h1`,{className:`ml-3 font-medium`,children:`Inbox`})]}),(0,K.jsx)(`main`,{className:`p-6 text-sm text-muted-foreground`,children:`The active item has the primary-subtle background treatment.`})]})]})},X={render:()=>(0,K.jsxs)(O,{children:[(0,K.jsxs)(k,{children:[(0,K.jsx)(M,{children:(0,K.jsx)(`div`,{className:`flex items-center gap-2 px-2 py-2`,children:(0,K.jsxs)(`div`,{className:`relative flex-1`,children:[(0,K.jsx)(p,{className:`absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground`}),(0,K.jsx)(ke,{placeholder:`Search`,className:`pl-8`})]})})}),(0,K.jsx)(N,{children:(0,K.jsx)(P,{children:(0,K.jsx)(I,{children:(0,K.jsx)(L,{children:q.map(e=>(0,K.jsx)(R,{children:(0,K.jsxs)(z,{children:[(0,K.jsx)(e.icon,{}),(0,K.jsx)(`span`,{children:e.title})]})},e.title))})})})})]}),(0,K.jsxs)(j,{children:[(0,K.jsxs)(`header`,{className:`flex h-12 items-center border-b px-4`,children:[(0,K.jsx)(A,{}),(0,K.jsx)(`h1`,{className:`ml-3 font-medium`,children:`Search`})]}),(0,K.jsx)(`main`,{className:`p-6 text-sm text-muted-foreground`,children:`Type to filter the sidebar.`})]})]})},Z={render:()=>(0,K.jsxs)(O,{children:[(0,K.jsxs)(k,{children:[(0,K.jsx)(M,{children:(0,K.jsx)(`div`,{className:`px-3 py-2 font-semibold`,children:`Campfire`})}),(0,K.jsx)(N,{children:(0,K.jsxs)(P,{children:[(0,K.jsx)(F,{children:`Updates`}),(0,K.jsx)(I,{children:(0,K.jsxs)(L,{children:[(0,K.jsxs)(R,{children:[(0,K.jsxs)(z,{children:[(0,K.jsx)(d,{}),(0,K.jsx)(`span`,{children:`Inbox`})]}),(0,K.jsx)(B,{children:`24`})]}),(0,K.jsxs)(R,{children:[(0,K.jsxs)(z,{children:[(0,K.jsx)(g,{}),(0,K.jsx)(`span`,{children:`Team`})]}),(0,K.jsx)(B,{children:`3`})]})]})})]})})]}),(0,K.jsxs)(j,{children:[(0,K.jsx)(`header`,{className:`flex h-12 items-center border-b px-4`,children:(0,K.jsx)(A,{})}),(0,K.jsx)(`main`,{className:`p-6 text-sm text-muted-foreground`,children:`Badges sit at the right of menu items.`})]})]})},Q={name:`Collapsible group`,render:()=>(0,K.jsxs)(O,{children:[(0,K.jsxs)(k,{children:[(0,K.jsx)(M,{children:(0,K.jsx)(`div`,{className:`px-3 py-2 font-semibold`,children:`Campfire`})}),(0,K.jsx)(N,{children:(0,K.jsx)(P,{children:(0,K.jsxs)(L,{children:[(0,K.jsx)(fe,{defaultOpen:!0,children:(0,K.jsxs)(R,{children:[(0,K.jsx)(de,{asChild:!0,children:(0,K.jsxs)(z,{children:[(0,K.jsx)(b,{}),(0,K.jsx)(`span`,{children:`Documents`}),(0,K.jsx)(s,{className:`ml-auto transition-transform data-[state=open]:rotate-90`})]})}),(0,K.jsx)(ue,{children:(0,K.jsxs)(Me,{children:[(0,K.jsx)(V,{children:(0,K.jsx)(H,{children:`Drafts`})}),(0,K.jsx)(V,{children:(0,K.jsx)(H,{children:`Published`})}),(0,K.jsx)(V,{children:(0,K.jsx)(H,{children:`Archived`})})]})})]})}),(0,K.jsx)(je,{}),(0,K.jsx)(R,{children:(0,K.jsxs)(z,{children:[(0,K.jsx)(h,{}),(0,K.jsx)(`span`,{children:`Settings`})]})})]})})})]}),(0,K.jsxs)(j,{children:[(0,K.jsx)(`header`,{className:`flex h-12 items-center border-b px-4`,children:(0,K.jsx)(A,{})}),(0,K.jsx)(`main`,{className:`p-6 text-sm text-muted-foreground`,children:`Click "Documents" to expand/collapse.`})]})]})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="px-3 py-2 font-semibold">Campfire</div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map(item => <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>)}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div className="px-3 py-2 text-xs text-muted-foreground">v0.8.x</div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center border-b px-4">
          <SidebarTrigger />
          <h1 className="ml-3 font-medium">Dashboard</h1>
        </header>
        <main className="p-6 text-sm text-muted-foreground">
          Toggle the trigger to collapse the sidebar.
        </main>
      </SidebarInset>
    </SidebarProvider>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="px-3 py-2 font-semibold">Campfire</div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Home />
                    <span>Home</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive>
                    <Inbox />
                    <span>Inbox</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Users />
                    <span>Team</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center border-b px-4">
          <SidebarTrigger />
          <h1 className="ml-3 font-medium">Inbox</h1>
        </header>
        <main className="p-6 text-sm text-muted-foreground">
          The active item has the primary-subtle background treatment.
        </main>
      </SidebarInset>
    </SidebarProvider>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2 py-2">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <SidebarInput placeholder="Search" className="pl-8" />
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map(item => <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>)}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center border-b px-4">
          <SidebarTrigger />
          <h1 className="ml-3 font-medium">Search</h1>
        </header>
        <main className="p-6 text-sm text-muted-foreground">
          Type to filter the sidebar.
        </main>
      </SidebarInset>
    </SidebarProvider>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="px-3 py-2 font-semibold">Campfire</div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Updates</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Inbox />
                    <span>Inbox</span>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>24</SidebarMenuBadge>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Users />
                    <span>Team</span>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>3</SidebarMenuBadge>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center border-b px-4">
          <SidebarTrigger />
        </header>
        <main className="p-6 text-sm text-muted-foreground">
          Badges sit at the right of menu items.
        </main>
      </SidebarInset>
    </SidebarProvider>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: "Collapsible group",
  render: () => <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="px-3 py-2 font-semibold">Campfire</div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              <Collapsible defaultOpen>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <FileText />
                      <span>Documents</span>
                      <ChevronRight className="ml-auto transition-transform data-[state=open]:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>Drafts</SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>Published</SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>Archived</SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
              <SidebarSeparator />
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center border-b px-4">
          <SidebarTrigger />
        </header>
        <main className="p-6 text-sm text-muted-foreground">
          Click "Documents" to expand/collapse.
        </main>
      </SidebarInset>
    </SidebarProvider>
}`,...Q.parameters?.docs?.source}}},He=[`Default`,`WithActiveItem`,`WithSearch`,`WithBadges`,`Collapsible_`]})))()}$();export{Q as Collapsible_,J as Default,Y as WithActiveItem,Z as WithBadges,X as WithSearch,He as __namedExportsOrder,Ve as default};