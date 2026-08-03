import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{n as r,t as i}from"./utils-DwVtoTFj.js";import{n as a,t as o}from"./badge-BSdAIanZ.js";function s({className:e,...t}){return(0,h.jsx)(`div`,{"data-slot":`table-container`,className:`relative w-full overflow-x-auto`,children:(0,h.jsx)(`table`,{"data-slot":`table`,className:i(`w-full caption-bottom text-sm`,e),...t})})}function c({className:e,...t}){return(0,h.jsx)(`thead`,{"data-slot":`table-header`,className:i(`[&_tr]:border-b`,e),...t})}function l({className:e,...t}){return(0,h.jsx)(`tbody`,{"data-slot":`table-body`,className:i(`[&_tr:last-child]:border-0`,e),...t})}function u({className:e,...t}){return(0,h.jsx)(`tfoot`,{"data-slot":`table-footer`,className:i(`bg-muted/50 border-t font-medium last:[&>tr]:border-b-0`,e),...t})}function d({className:e,...t}){return(0,h.jsx)(`tr`,{"data-slot":`table-row`,className:i(`hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors`,e),...t})}function f({className:e,...t}){return(0,h.jsx)(`th`,{"data-slot":`table-head`,className:i(`text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]`,e),...t})}function p({className:e,...t}){return(0,h.jsx)(`td`,{"data-slot":`table-cell`,className:i(`p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]`,e),...t})}function m({className:e,...t}){return(0,h.jsx)(`caption`,{"data-slot":`table-caption`,className:i(`text-muted-foreground mt-4 text-sm`,e),...t})}var h;function g(){return(g=e((()=>{t(),r(),h=n(),s.__docgenInfo={description:``,methods:[],displayName:`Table`},c.__docgenInfo={description:``,methods:[],displayName:`TableHeader`},l.__docgenInfo={description:``,methods:[],displayName:`TableBody`},u.__docgenInfo={description:``,methods:[],displayName:`TableFooter`},f.__docgenInfo={description:``,methods:[],displayName:`TableHead`},d.__docgenInfo={description:``,methods:[],displayName:`TableRow`},p.__docgenInfo={description:``,methods:[],displayName:`TableCell`},m.__docgenInfo={description:``,methods:[],displayName:`TableCaption`}})))()}var _,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{g(),a(),_=n(),v={title:`Components/Table`,component:s,parameters:{layout:`padded`},tags:[`autodocs`]},y=[{id:`INV001`,customer:`John Doe`,amount:`$250.00`,status:`Paid`},{id:`INV002`,customer:`Jane Smith`,amount:`$150.00`,status:`Pending`},{id:`INV003`,customer:`Bob Johnson`,amount:`$350.00`,status:`Paid`},{id:`INV004`,customer:`Alice Brown`,amount:`$450.00`,status:`Paid`},{id:`INV005`,customer:`Charlie Wilson`,amount:`$550.00`,status:`Pending`}],b={render:()=>(0,_.jsxs)(s,{children:[(0,_.jsx)(c,{children:(0,_.jsxs)(d,{children:[(0,_.jsx)(f,{children:`Invoice`}),(0,_.jsx)(f,{children:`Customer`}),(0,_.jsx)(f,{children:`Amount`}),(0,_.jsx)(f,{children:`Status`})]})}),(0,_.jsx)(l,{children:y.map(e=>(0,_.jsxs)(d,{children:[(0,_.jsx)(p,{className:`font-medium`,children:e.id}),(0,_.jsx)(p,{children:e.customer}),(0,_.jsx)(p,{children:e.amount}),(0,_.jsx)(p,{children:e.status})]},e.id))})]})},x={render:()=>(0,_.jsxs)(s,{children:[(0,_.jsx)(m,{children:`A list of your recent invoices.`}),(0,_.jsx)(c,{children:(0,_.jsxs)(d,{children:[(0,_.jsx)(f,{children:`Invoice`}),(0,_.jsx)(f,{children:`Customer`}),(0,_.jsx)(f,{className:`text-right`,children:`Amount`})]})}),(0,_.jsx)(l,{children:y.map(e=>(0,_.jsxs)(d,{children:[(0,_.jsx)(p,{className:`font-medium`,children:e.id}),(0,_.jsx)(p,{children:e.customer}),(0,_.jsx)(p,{className:`text-right`,children:e.amount})]},e.id))})]})},S={render:()=>(0,_.jsxs)(s,{children:[(0,_.jsx)(c,{children:(0,_.jsxs)(d,{children:[(0,_.jsx)(f,{children:`Invoice`}),(0,_.jsx)(f,{children:`Customer`}),(0,_.jsx)(f,{className:`text-right`,children:`Amount`})]})}),(0,_.jsx)(l,{children:y.map(e=>(0,_.jsxs)(d,{children:[(0,_.jsx)(p,{className:`font-medium`,children:e.id}),(0,_.jsx)(p,{children:e.customer}),(0,_.jsx)(p,{className:`text-right`,children:e.amount})]},e.id))}),(0,_.jsx)(u,{children:(0,_.jsxs)(d,{children:[(0,_.jsx)(p,{colSpan:2,children:`Total`}),(0,_.jsx)(p,{className:`text-right`,children:`$1,750.00`})]})})]})},C={render:()=>(0,_.jsxs)(s,{children:[(0,_.jsx)(c,{children:(0,_.jsxs)(d,{children:[(0,_.jsx)(f,{children:`Invoice`}),(0,_.jsx)(f,{children:`Customer`}),(0,_.jsx)(f,{children:`Amount`}),(0,_.jsx)(f,{children:`Status`})]})}),(0,_.jsx)(l,{children:y.map(e=>(0,_.jsxs)(d,{children:[(0,_.jsx)(p,{className:`font-medium`,children:e.id}),(0,_.jsx)(p,{children:e.customer}),(0,_.jsx)(p,{children:e.amount}),(0,_.jsx)(p,{children:(0,_.jsx)(o,{variant:e.status===`Paid`?`default`:`secondary`,children:e.status})})]},e.id))})]})},w={render:()=>(0,_.jsxs)(s,{children:[(0,_.jsx)(c,{children:(0,_.jsxs)(d,{children:[(0,_.jsx)(f,{children:`Name`}),(0,_.jsx)(f,{children:`Email`}),(0,_.jsx)(f,{children:`Role`})]})}),(0,_.jsxs)(l,{children:[(0,_.jsxs)(d,{className:`bg-muted/50`,children:[(0,_.jsx)(p,{children:`John Doe`}),(0,_.jsx)(p,{children:`john@example.com`}),(0,_.jsx)(p,{children:`Admin`})]}),(0,_.jsxs)(d,{children:[(0,_.jsx)(p,{children:`Jane Smith`}),(0,_.jsx)(p,{children:`jane@example.com`}),(0,_.jsx)(p,{children:`User`})]}),(0,_.jsxs)(d,{className:`bg-muted/50`,children:[(0,_.jsx)(p,{children:`Bob Johnson`}),(0,_.jsx)(p,{children:`bob@example.com`}),(0,_.jsx)(p,{children:`User`})]})]})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map(invoice => <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.customer}</TableCell>
            <TableCell>{invoice.amount}</TableCell>
            <TableCell>{invoice.status}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map(invoice => <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.customer}</TableCell>
            <TableCell className="text-right">{invoice.amount}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map(invoice => <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.customer}</TableCell>
            <TableCell className="text-right">{invoice.amount}</TableCell>
          </TableRow>)}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">$1,750.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map(invoice => <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.customer}</TableCell>
            <TableCell>{invoice.amount}</TableCell>
            <TableCell>
              <Badge variant={invoice.status === "Paid" ? "default" : "secondary"}>
                {invoice.status}
              </Badge>
            </TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="bg-muted/50">
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
        <TableRow className="bg-muted/50">
          <TableCell>Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...w.parameters?.docs?.source}}},T=[`Default`,`WithCaption`,`WithFooter`,`WithBadges`,`Striped`]})))()}E();export{b as Default,w as Striped,C as WithBadges,x as WithCaption,S as WithFooter,T as __namedExportsOrder,v as default};