import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-_akqGrVk.js";import{B as i,M as a,S as o,at as s,h as c,j as l,m as u,r as d,t as f}from"./lucide-react-B9ev7WLa.js";import{n as p,t as m}from"./utils-D2Sa0ztS.js";import{r as h,t as g}from"./dist-3P59oYRp.js";import{n as ee,t as te}from"./dist-DHomCeAx.js";import{r as ne,t as re}from"./button-RVltMg_M.js";import{n as ie,t as ae}from"./input-s7NpxzvF.js";import{i as oe,n as se,r as ce,t as le}from"./collapsible-BF-ZqYMf.js";import{n as ue,t as de}from"./separator-CRNNTAOi.js";import{a as fe,c as pe,n as me,o as he,r as ge,t as _e}from"./sheet-Dk1I08ZG.js";import{n as ve,t as _}from"./skeleton-Cw_JK4lO.js";import{a as ye,i as be,n as xe,r as Se,t as Ce}from"./tooltip-u3kpGh6m.js";function we(){let[e,t]=v.useState(void 0);return v.useEffect(()=>{let e=window.matchMedia(`(max-width: ${y-1}px)`),n=()=>{t(window.innerWidth<y)};return e.addEventListener(`change`,n),t(window.innerWidth<y),()=>e.removeEventListener(`change`,n)},[]),!!e}var v,y,Te=t((()=>{v=e(n(),1),y=768}));function b(){let e=B.useContext(K);if(!e)throw Error(`useSidebar must be used within a SidebarProvider.`);return e}function x({defaultOpen:e=!0,open:t,onOpenChange:n,className:r,style:i,children:a,...o}){let s=we(),[c,l]=B.useState(!1),[u,d]=B.useState(e),f=t??u,p=B.useCallback(e=>{let t=typeof e==`function`?e(f):e;n?n(t):d(t),document.cookie=`${H}=${t}; path=/; max-age=${U}`},[n,f]),h=B.useCallback(()=>s?l(e=>!e):p(e=>!e),[s,p,l]);B.useEffect(()=>{let e=e=>{e.key===je&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),h())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[h]);let g=f?`expanded`:`collapsed`,ee=B.useMemo(()=>({state:g,open:f,setOpen:p,isMobile:s,openMobile:c,setOpenMobile:l,toggleSidebar:h}),[g,f,p,s,c,l,h]);return(0,V.jsx)(K.Provider,{value:ee,children:(0,V.jsx)(Se,{delayDuration:0,children:(0,V.jsx)(`div`,{"data-slot":`sidebar-wrapper`,style:{"--sidebar-width":W,"--sidebar-width-icon":Ae,...i},className:m(`group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full`,r),...o,children:a})})})}function S({side:e=`left`,variant:t=`sidebar`,collapsible:n=`offcanvas`,className:r,children:i,...a}){let{isMobile:o,state:s,openMobile:c,setOpenMobile:l}=b();return n===`none`?(0,V.jsx)(`div`,{"data-slot":`sidebar`,className:m(`bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col`,r),...a,children:i}):o?(0,V.jsx)(_e,{open:c,onOpenChange:l,...a,children:(0,V.jsxs)(me,{"data-sidebar":`sidebar`,"data-slot":`sidebar`,"data-mobile":`true`,className:`bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden`,style:{"--sidebar-width":G},side:e,children:[(0,V.jsxs)(fe,{className:`sr-only`,children:[(0,V.jsx)(he,{children:`Sidebar`}),(0,V.jsx)(ge,{children:`Displays the mobile sidebar.`})]}),(0,V.jsx)(`div`,{className:`flex h-full w-full flex-col`,children:i})]})}):(0,V.jsxs)(`div`,{className:`group peer text-sidebar-foreground hidden md:block`,"data-state":s,"data-collapsible":s===`collapsed`?n:``,"data-variant":t,"data-side":e,"data-slot":`sidebar`,children:[(0,V.jsx)(`div`,{"data-slot":`sidebar-gap`,className:m(`relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear`,`group-data-[collapsible=offcanvas]:w-0`,`group-data-[side=right]:rotate-180`,t===`floating`||t===`inset`?`group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]`:`group-data-[collapsible=icon]:w-(--sidebar-width-icon)`)}),(0,V.jsx)(`div`,{"data-slot":`sidebar-container`,className:m(`fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex`,e===`left`?`left-0 group-data-[collapsible=offcanvas]:-left-(--sidebar-width)`:`right-0 group-data-[collapsible=offcanvas]:-right-(--sidebar-width)`,t===`floating`||t===`inset`?`p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]`:`group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l`,r),...a,children:(0,V.jsx)(`div`,{"data-sidebar":`sidebar`,"data-slot":`sidebar-inner`,className:`bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-xs`,children:i})})]})}function C({className:e,onClick:t,...n}){let{toggleSidebar:r}=b();return(0,V.jsxs)(re,{"data-sidebar":`trigger`,"data-slot":`sidebar-trigger`,variant:`ghost`,size:`icon`,className:m(`size-7`,e),onClick:e=>{t?.(e),r()},...n,children:[(0,V.jsx)(o,{}),(0,V.jsx)(`span`,{className:`sr-only`,children:`Toggle Sidebar`})]})}function Ee({className:e,...t}){let{toggleSidebar:n}=b();return(0,V.jsx)(`button`,{"data-sidebar":`rail`,"data-slot":`sidebar-rail`,"aria-label":`Toggle Sidebar`,tabIndex:-1,onClick:n,title:`Toggle Sidebar`,className:m(`hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex`,`in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize`,`[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize`,`hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full`,`[[data-side=left][data-collapsible=offcanvas]_&]:-right-2`,`[[data-side=right][data-collapsible=offcanvas]_&]:-left-2`,e),...t})}function w({className:e,...t}){return(0,V.jsx)(`main`,{"data-slot":`sidebar-inset`,className:m(`bg-background relative flex w-full flex-1 flex-col`,`md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-xs md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2`,e),...t})}function T({className:e,...t}){return(0,V.jsx)(ae,{"data-slot":`sidebar-input`,"data-sidebar":`input`,className:m(`bg-background h-8 w-full shadow-none`,e),...t})}function E({className:e,...t}){return(0,V.jsx)(`div`,{"data-slot":`sidebar-header`,"data-sidebar":`header`,className:m(`flex flex-col gap-2 p-2`,e),...t})}function D({className:e,...t}){return(0,V.jsx)(`div`,{"data-slot":`sidebar-footer`,"data-sidebar":`footer`,className:m(`flex flex-col gap-2 p-2`,e),...t})}function O({className:e,...t}){return(0,V.jsx)(de,{"data-slot":`sidebar-separator`,"data-sidebar":`separator`,className:m(`bg-sidebar-border mx-2 w-auto`,e),...t})}function k({className:e,...t}){return(0,V.jsx)(`div`,{"data-slot":`sidebar-content`,"data-sidebar":`content`,className:m(`flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden`,e),...t})}function A({className:e,...t}){return(0,V.jsx)(`div`,{"data-slot":`sidebar-group`,"data-sidebar":`group`,className:m(`relative flex w-full min-w-0 flex-col p-2`,e),...t})}function j({className:e,asChild:t=!1,...n}){return(0,V.jsx)(t?g:`div`,{"data-slot":`sidebar-group-label`,"data-sidebar":`group-label`,className:m(`text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0`,`group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0`,e),...n})}function De({className:e,asChild:t=!1,...n}){return(0,V.jsx)(t?g:`button`,{"data-slot":`sidebar-group-action`,"data-sidebar":`group-action`,className:m(`text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0`,`after:absolute after:-inset-2 md:after:hidden`,`group-data-[collapsible=icon]:hidden`,e),...n})}function M({className:e,...t}){return(0,V.jsx)(`div`,{"data-slot":`sidebar-group-content`,"data-sidebar":`group-content`,className:m(`w-full text-sm`,e),...t})}function N({className:e,...t}){return(0,V.jsx)(`ul`,{"data-slot":`sidebar-menu`,"data-sidebar":`menu`,className:m(`flex w-full min-w-0 flex-col gap-1`,e),...t})}function P({className:e,...t}){return(0,V.jsx)(`li`,{"data-slot":`sidebar-menu-item`,"data-sidebar":`menu-item`,className:m(`group/menu-item relative`,e),...t})}function F({asChild:e=!1,isActive:t=!1,variant:n=`default`,size:r=`default`,tooltip:i,className:a,...o}){let s=e?g:`button`,{isMobile:c,state:l}=b(),u=(0,V.jsx)(s,{"data-slot":`sidebar-menu-button`,"data-sidebar":`menu-button`,"data-size":r,"data-active":t,className:m(Me({variant:n,size:r}),a),...o});return i?(typeof i==`string`&&(i={children:i}),(0,V.jsxs)(Ce,{children:[(0,V.jsx)(be,{asChild:!0,children:u}),(0,V.jsx)(xe,{side:`right`,align:`center`,hidden:l!==`collapsed`||c,...i})]})):u}function Oe({className:e,asChild:t=!1,showOnHover:n=!1,...r}){return(0,V.jsx)(t?g:`button`,{"data-slot":`sidebar-menu-action`,"data-sidebar":`menu-action`,className:m(`text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0`,`after:absolute after:-inset-2 md:after:hidden`,`peer-data-[size=sm]/menu-button:top-1`,`peer-data-[size=default]/menu-button:top-1.5`,`peer-data-[size=lg]/menu-button:top-2.5`,`group-data-[collapsible=icon]:hidden`,n&&`peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0`,e),...r})}function I({className:e,...t}){return(0,V.jsx)(`div`,{"data-slot":`sidebar-menu-badge`,"data-sidebar":`menu-badge`,className:m(`text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none`,`peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground`,`peer-data-[size=sm]/menu-button:top-1`,`peer-data-[size=default]/menu-button:top-1.5`,`peer-data-[size=lg]/menu-button:top-2.5`,`group-data-[collapsible=icon]:hidden`,e),...t})}function ke({className:e,showIcon:t=!1,...n}){let r=B.useMemo(()=>`${Math.floor(Math.random()*40)+50}%`,[]);return(0,V.jsxs)(`div`,{"data-slot":`sidebar-menu-skeleton`,"data-sidebar":`menu-skeleton`,className:m(`flex h-8 items-center gap-2 rounded-md px-2`,e),...n,children:[t&&(0,V.jsx)(_,{className:`size-4 rounded-md`,"data-sidebar":`menu-skeleton-icon`}),(0,V.jsx)(_,{className:`h-4 max-w-(--skeleton-width) flex-1`,"data-sidebar":`menu-skeleton-text`,style:{"--skeleton-width":r}})]})}function L({className:e,...t}){return(0,V.jsx)(`ul`,{"data-slot":`sidebar-menu-sub`,"data-sidebar":`menu-sub`,className:m(`border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5`,`group-data-[collapsible=icon]:hidden`,e),...t})}function R({className:e,...t}){return(0,V.jsx)(`li`,{"data-slot":`sidebar-menu-sub-item`,"data-sidebar":`menu-sub-item`,className:m(`group/menu-sub-item relative`,e),...t})}function z({asChild:e=!1,size:t=`md`,isActive:n=!1,className:r,...i}){return(0,V.jsx)(e?g:`a`,{"data-slot":`sidebar-menu-sub-button`,"data-sidebar":`menu-sub-button`,"data-size":t,"data-active":n,className:m(`text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0`,`data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground`,t===`sm`&&`text-xs`,t===`md`&&`text-sm`,`group-data-[collapsible=icon]:hidden`,r),...i})}var B,V,H,U,W,G,Ae,je,K,Me,Ne=t((()=>{B=e(n(),1),h(),ee(),f(),Te(),p(),ne(),ie(),ue(),pe(),ve(),ye(),V=r(),H=`sidebar_state`,U=3600*24*7,W=`16rem`,G=`18rem`,Ae=`3rem`,je=`b`,K=B.createContext(null),Me=te(`peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0`,{variants:{variant:{default:`hover:bg-sidebar-accent hover:text-sidebar-accent-foreground`,outline:`bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]`},size:{default:`h-8 text-sm`,sm:`h-7 text-xs`,lg:`h-12 text-sm group-data-[collapsible=icon]:p-0!`}},defaultVariants:{variant:`default`,size:`default`}}),S.__docgenInfo={description:``,methods:[],displayName:`Sidebar`,props:{side:{required:!1,tsType:{name:`union`,raw:`"left" | "right"`,elements:[{name:`literal`,value:`"left"`},{name:`literal`,value:`"right"`}]},description:``,defaultValue:{value:`"left"`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`"sidebar" | "floating" | "inset"`,elements:[{name:`literal`,value:`"sidebar"`},{name:`literal`,value:`"floating"`},{name:`literal`,value:`"inset"`}]},description:``,defaultValue:{value:`"sidebar"`,computed:!1}},collapsible:{required:!1,tsType:{name:`union`,raw:`"offcanvas" | "icon" | "none"`,elements:[{name:`literal`,value:`"offcanvas"`},{name:`literal`,value:`"icon"`},{name:`literal`,value:`"none"`}]},description:``,defaultValue:{value:`"offcanvas"`,computed:!1}}}},k.__docgenInfo={description:``,methods:[],displayName:`SidebarContent`},D.__docgenInfo={description:``,methods:[],displayName:`SidebarFooter`},A.__docgenInfo={description:``,methods:[],displayName:`SidebarGroup`},De.__docgenInfo={description:``,methods:[],displayName:`SidebarGroupAction`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}},M.__docgenInfo={description:``,methods:[],displayName:`SidebarGroupContent`},j.__docgenInfo={description:``,methods:[],displayName:`SidebarGroupLabel`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}},E.__docgenInfo={description:``,methods:[],displayName:`SidebarHeader`},T.__docgenInfo={description:``,methods:[],displayName:`SidebarInput`},w.__docgenInfo={description:``,methods:[],displayName:`SidebarInset`},N.__docgenInfo={description:``,methods:[],displayName:`SidebarMenu`},Oe.__docgenInfo={description:``,methods:[],displayName:`SidebarMenuAction`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},showOnHover:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}},I.__docgenInfo={description:``,methods:[],displayName:`SidebarMenuBadge`},F.__docgenInfo={description:``,methods:[],displayName:`SidebarMenuButton`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},isActive:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},tooltip:{required:!1,tsType:{name:`union`,raw:`string | React.ComponentProps<typeof TooltipContent>`,elements:[{name:`string`},{name:`ReactComponentProps`,raw:`React.ComponentProps<typeof TooltipContent>`,elements:[{name:`TooltipContent`}]}]},description:``},variant:{defaultValue:{value:`"default"`,computed:!1},required:!1},size:{defaultValue:{value:`"default"`,computed:!1},required:!1}}},P.__docgenInfo={description:``,methods:[],displayName:`SidebarMenuItem`},ke.__docgenInfo={description:``,methods:[],displayName:`SidebarMenuSkeleton`,props:{showIcon:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}},L.__docgenInfo={description:``,methods:[],displayName:`SidebarMenuSub`},z.__docgenInfo={description:``,methods:[],displayName:`SidebarMenuSubButton`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`"sm" | "md"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},isActive:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}},R.__docgenInfo={description:``,methods:[],displayName:`SidebarMenuSubItem`},x.__docgenInfo={description:``,methods:[],displayName:`SidebarProvider`,props:{defaultOpen:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},open:{required:!1,tsType:{name:`boolean`},description:``},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``}}},Ee.__docgenInfo={description:``,methods:[],displayName:`SidebarRail`},O.__docgenInfo={description:``,methods:[],displayName:`SidebarSeparator`},C.__docgenInfo={description:``,methods:[],displayName:`SidebarTrigger`}})),q,Pe,J,Y,X,Z,Q,$,Fe;t((()=>{f(),Ne(),oe(),q=r(),Pe={title:`Components/Sidebar`,component:S,parameters:{layout:`fullscreen`},tags:[`autodocs`]},J=[{title:`Home`,icon:a},{title:`Inbox`,icon:l},{title:`Team`,icon:d},{title:`Settings`,icon:u}],Y={render:()=>(0,q.jsxs)(x,{children:[(0,q.jsxs)(S,{children:[(0,q.jsx)(E,{children:(0,q.jsx)(`div`,{className:`px-3 py-2 font-semibold`,children:`Campfire`})}),(0,q.jsx)(k,{children:(0,q.jsxs)(A,{children:[(0,q.jsx)(j,{children:`Application`}),(0,q.jsx)(M,{children:(0,q.jsx)(N,{children:J.map(e=>(0,q.jsx)(P,{children:(0,q.jsxs)(F,{children:[(0,q.jsx)(e.icon,{}),(0,q.jsx)(`span`,{children:e.title})]})},e.title))})})]})}),(0,q.jsx)(D,{children:(0,q.jsx)(`div`,{className:`px-3 py-2 text-xs text-muted-foreground`,children:`v0.8.x`})})]}),(0,q.jsxs)(w,{children:[(0,q.jsxs)(`header`,{className:`flex h-12 items-center border-b px-4`,children:[(0,q.jsx)(C,{}),(0,q.jsx)(`h1`,{className:`ml-3 font-medium`,children:`Dashboard`})]}),(0,q.jsx)(`main`,{className:`p-6 text-sm text-muted-foreground`,children:`Toggle the trigger to collapse the sidebar.`})]})]})},X={render:()=>(0,q.jsxs)(x,{children:[(0,q.jsxs)(S,{children:[(0,q.jsx)(E,{children:(0,q.jsx)(`div`,{className:`px-3 py-2 font-semibold`,children:`Campfire`})}),(0,q.jsx)(k,{children:(0,q.jsxs)(A,{children:[(0,q.jsx)(j,{children:`Application`}),(0,q.jsx)(M,{children:(0,q.jsxs)(N,{children:[(0,q.jsx)(P,{children:(0,q.jsxs)(F,{children:[(0,q.jsx)(a,{}),(0,q.jsx)(`span`,{children:`Home`})]})}),(0,q.jsx)(P,{children:(0,q.jsxs)(F,{isActive:!0,children:[(0,q.jsx)(l,{}),(0,q.jsx)(`span`,{children:`Inbox`})]})}),(0,q.jsx)(P,{children:(0,q.jsxs)(F,{children:[(0,q.jsx)(d,{}),(0,q.jsx)(`span`,{children:`Team`})]})})]})})]})})]}),(0,q.jsxs)(w,{children:[(0,q.jsxs)(`header`,{className:`flex h-12 items-center border-b px-4`,children:[(0,q.jsx)(C,{}),(0,q.jsx)(`h1`,{className:`ml-3 font-medium`,children:`Inbox`})]}),(0,q.jsx)(`main`,{className:`p-6 text-sm text-muted-foreground`,children:`The active item has the primary-subtle background treatment.`})]})]})},Z={render:()=>(0,q.jsxs)(x,{children:[(0,q.jsxs)(S,{children:[(0,q.jsx)(E,{children:(0,q.jsx)(`div`,{className:`flex items-center gap-2 px-2 py-2`,children:(0,q.jsxs)(`div`,{className:`relative flex-1`,children:[(0,q.jsx)(c,{className:`absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground`}),(0,q.jsx)(T,{placeholder:`Search`,className:`pl-8`})]})})}),(0,q.jsx)(k,{children:(0,q.jsx)(A,{children:(0,q.jsx)(M,{children:(0,q.jsx)(N,{children:J.map(e=>(0,q.jsx)(P,{children:(0,q.jsxs)(F,{children:[(0,q.jsx)(e.icon,{}),(0,q.jsx)(`span`,{children:e.title})]})},e.title))})})})})]}),(0,q.jsxs)(w,{children:[(0,q.jsxs)(`header`,{className:`flex h-12 items-center border-b px-4`,children:[(0,q.jsx)(C,{}),(0,q.jsx)(`h1`,{className:`ml-3 font-medium`,children:`Search`})]}),(0,q.jsx)(`main`,{className:`p-6 text-sm text-muted-foreground`,children:`Type to filter the sidebar.`})]})]})},Q={render:()=>(0,q.jsxs)(x,{children:[(0,q.jsxs)(S,{children:[(0,q.jsx)(E,{children:(0,q.jsx)(`div`,{className:`px-3 py-2 font-semibold`,children:`Campfire`})}),(0,q.jsx)(k,{children:(0,q.jsxs)(A,{children:[(0,q.jsx)(j,{children:`Updates`}),(0,q.jsx)(M,{children:(0,q.jsxs)(N,{children:[(0,q.jsxs)(P,{children:[(0,q.jsxs)(F,{children:[(0,q.jsx)(l,{}),(0,q.jsx)(`span`,{children:`Inbox`})]}),(0,q.jsx)(I,{children:`24`})]}),(0,q.jsxs)(P,{children:[(0,q.jsxs)(F,{children:[(0,q.jsx)(d,{}),(0,q.jsx)(`span`,{children:`Team`})]}),(0,q.jsx)(I,{children:`3`})]})]})})]})})]}),(0,q.jsxs)(w,{children:[(0,q.jsx)(`header`,{className:`flex h-12 items-center border-b px-4`,children:(0,q.jsx)(C,{})}),(0,q.jsx)(`main`,{className:`p-6 text-sm text-muted-foreground`,children:`Badges sit at the right of menu items.`})]})]})},$={name:`Collapsible group`,render:()=>(0,q.jsxs)(x,{children:[(0,q.jsxs)(S,{children:[(0,q.jsx)(E,{children:(0,q.jsx)(`div`,{className:`px-3 py-2 font-semibold`,children:`Campfire`})}),(0,q.jsx)(k,{children:(0,q.jsx)(A,{children:(0,q.jsxs)(N,{children:[(0,q.jsx)(le,{defaultOpen:!0,children:(0,q.jsxs)(P,{children:[(0,q.jsx)(ce,{asChild:!0,children:(0,q.jsxs)(F,{children:[(0,q.jsx)(i,{}),(0,q.jsx)(`span`,{children:`Documents`}),(0,q.jsx)(s,{className:`ml-auto transition-transform data-[state=open]:rotate-90`})]})}),(0,q.jsx)(se,{children:(0,q.jsxs)(L,{children:[(0,q.jsx)(R,{children:(0,q.jsx)(z,{children:`Drafts`})}),(0,q.jsx)(R,{children:(0,q.jsx)(z,{children:`Published`})}),(0,q.jsx)(R,{children:(0,q.jsx)(z,{children:`Archived`})})]})})]})}),(0,q.jsx)(O,{}),(0,q.jsx)(P,{children:(0,q.jsxs)(F,{children:[(0,q.jsx)(u,{}),(0,q.jsx)(`span`,{children:`Settings`})]})})]})})})]}),(0,q.jsxs)(w,{children:[(0,q.jsx)(`header`,{className:`flex h-12 items-center border-b px-4`,children:(0,q.jsx)(C,{})}),(0,q.jsx)(`main`,{className:`p-6 text-sm text-muted-foreground`,children:`Click "Documents" to expand/collapse.`})]})]})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Fe=[`Default`,`WithActiveItem`,`WithSearch`,`WithBadges`,`Collapsible_`]}))();export{$ as Collapsible_,Y as Default,X as WithActiveItem,Q as WithBadges,Z as WithSearch,Fe as __namedExportsOrder,Pe as default};