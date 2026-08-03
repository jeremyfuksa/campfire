import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{n as i,t as a}from"./utils-DwVtoTFj.js";import{n as o,t as s}from"./dist-C5S42fdU.js";var c,l,u,d;function f(){return(f=t((()=>{c=e(n(),1),o(),i(),l=r(),u=s(`text-foreground`,{variants:{level:{1:`text-(length:--heading-h1-size) font-(--heading-h1-weight) leading-(--heading-h1-line-height) tracking-(--heading-h1-letter-spacing)`,2:`text-(length:--heading-h2-size) font-(--heading-h2-weight) leading-(--heading-h2-line-height) tracking-(--heading-h2-letter-spacing)`,3:`text-(length:--heading-h3-size) font-(--heading-h3-weight) leading-(--heading-h3-line-height) tracking-(--heading-h3-letter-spacing)`,4:`text-(length:--heading-h4-size) font-(--heading-h4-weight) leading-(--heading-h4-line-height) tracking-(--heading-h4-letter-spacing)`,5:`text-(length:--heading-h5-size) font-(--heading-h5-weight) leading-(--heading-h5-line-height) tracking-(--heading-h5-letter-spacing)`,6:`text-(length:--heading-h6-size) font-(--heading-h6-weight) leading-(--heading-h6-line-height) tracking-(--heading-h6-letter-spacing)`}},defaultVariants:{level:2}}),d=c.forwardRef(({className:e,level:t=2,as:n,...r},i)=>{let o=n??`h${t}`;return(0,l.jsx)(o,{ref:i,className:a(u({level:t,className:e})),...r})}),d.displayName=`Heading`,d.__docgenInfo={description:``,methods:[],displayName:`Heading`,props:{level:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3 | 4 | 5 | 6`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`},{name:`literal`,value:`6`}]},description:``,defaultValue:{value:`2`,computed:!1}},as:{required:!1,tsType:{name:`literal`,value:"`h${HeadingLevel}`"},description:``}},composes:[`VariantProps`]}})))()}var p,m,h,g,_,v,y,b,x;function S(){return(S=t((()=>{f(),p=r(),m={title:`Components/Heading`,component:d,parameters:{layout:`padded`},tags:[`autodocs`],argTypes:{level:{control:`select`,options:[1,2,3,4,5,6]},as:{control:`select`,options:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`]}}},h={args:{level:2,children:`Gather around the campfire`}},g={args:{level:1,children:`Page title`}},_={args:{level:2,children:`Section title`}},v={args:{level:3,children:`Subsection title`}},y={render:()=>(0,p.jsxs)(`div`,{className:`flex flex-col gap-4 max-w-2xl`,children:[(0,p.jsx)(d,{level:1,children:`Heading 1 — page title`}),(0,p.jsx)(d,{level:2,children:`Heading 2 — section`}),(0,p.jsx)(d,{level:3,children:`Heading 3 — subsection`}),(0,p.jsx)(d,{level:4,children:`Heading 4 — component title`}),(0,p.jsx)(d,{level:5,children:`Heading 5 — card title`}),(0,p.jsx)(d,{level:6,children:`Heading 6 — small title`})]})},b={name:`Visual ≠ semantic level`,render:()=>(0,p.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,p.jsx)(d,{level:2,as:`h1`,children:`H1 element styled as level 2`}),(0,p.jsxs)(`p`,{className:`text-sm text-muted-foreground`,children:[`Use `,(0,p.jsx)(`code`,{children:`as`}),` to keep semantic order while picking a different visual size.`]})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    level: 2,
    children: "Gather around the campfire"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    children: "Page title"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    level: 2,
    children: "Section title"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    level: 3,
    children: "Subsection title"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-2xl">
      <Heading level={1}>Heading 1 — page title</Heading>
      <Heading level={2}>Heading 2 — section</Heading>
      <Heading level={3}>Heading 3 — subsection</Heading>
      <Heading level={4}>Heading 4 — component title</Heading>
      <Heading level={5}>Heading 5 — card title</Heading>
      <Heading level={6}>Heading 6 — small title</Heading>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Visual ≠ semantic level",
  render: () => <div className="flex flex-col gap-2">
      <Heading level={2} as="h1">
        H1 element styled as level 2
      </Heading>
      <p className="text-sm text-muted-foreground">
        Use <code>as</code> to keep semantic order while picking a different
        visual size.
      </p>
    </div>
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Level1`,`Level2`,`Level3`,`Hierarchy`,`SemanticOverride`]})))()}S();export{h as Default,y as Hierarchy,g as Level1,_ as Level2,v as Level3,b as SemanticOverride,x as __namedExportsOrder,m as default};