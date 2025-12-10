import React from "react";
import { render } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { useForm } from "react-hook-form";

vi.mock("recharts", async (importOriginal) => {
  const actual = await importOriginal<typeof import("recharts")>();
  return {
    ...actual,
    ResponsiveContainer: ({
      width = 400,
      height = 300,
      children,
    }: {
      width?: number | string;
      height?: number | string;
      children: React.ReactNode | ((args: { width: number; height: number }) => React.ReactNode);
    }) => {
      const resolvedWidth = typeof width === "number" ? width : 400;
      const resolvedHeight = typeof height === "number" ? height : 300;
      return (
        <div style={{ width: resolvedWidth, height: resolvedHeight }}>
          {typeof children === "function"
            ? children({ width: resolvedWidth, height: resolvedHeight })
            : children}
        </div>
      );
    },
  };
});

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AspectRatio,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Calendar,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  Checkbox,
  Chip,
  CodeBlock,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
  CopyButton,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  EmptyState,
  FileUpload,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  HelperText,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Input,
  InputOTP,
  InputOTPSlot,
  KeyboardKey,
  Label,
  Link,
  ListGroup,
  ListGroupItem,
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  RadioGroup,
  RadioGroupItem,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  ScrollArea,
  ScrollBar,
  SearchInput,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Skeleton,
  Slider,
  StatCard,
  StatusDot,
  Stepper,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../lib";

const FormExample = () => {
  const form = useForm<{ name: string }>({ defaultValues: { name: "" } });

  const FieldInput = React.forwardRef<
    HTMLInputElement,
    React.ComponentProps<"input">
  >((props, ref) => <input ref={ref} {...props} />);
  FieldInput.displayName = "FieldInput";

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <FieldInput aria-label="name" {...field} />
            </FormControl>
            <FormDescription>Enter your name</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
};

const ComponentGallery = () => (
  <div>
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Accordion Trigger</AccordionTrigger>
        <AccordionContent>Accordion Content</AccordionContent>
      </AccordionItem>
    </Accordion>

    <Alert>
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>Alert body</AlertDescription>
    </Alert>

    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Open</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm</AlertDialogTitle>
          <AlertDialogDescription>Are you sure?</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

    <AspectRatio ratio={16 / 9}>
      <div>Aspect content</div>
    </AspectRatio>

    <Avatar>
      <AvatarImage src="https://via.placeholder.com/40" alt="avatar" />
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>

    <Badge>Badge</Badge>

    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Page</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>

    <Button>Button</Button>

    <Calendar mode="single" selected={new Date()} />

    <Card>
      <CardHeader>
        <CardTitle>Card</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardHeader>
      <CardContent>Body</CardContent>
      <CardFooter>Footer</CardFooter>
    </Card>

    <div style={{ width: 320, height: 200 }}>
      <ChartContainer
        config={{ value: { label: "Value", color: "hsl(var(--primary))" } }}
        style={{ width: "100%", height: "100%" }}
      >
        <BarChart data={[{ name: "A", value: 10 }]}>
          <XAxis dataKey="name" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="value" fill="var(--color-value)" />
        </BarChart>
      </ChartContainer>
    </div>

    <Checkbox id="cb" />

    <Chip>Chip</Chip>

    <CodeBlock code="const x = 1;" />

    <Collapsible>
      <CollapsibleTrigger>Open</CollapsibleTrigger>
      <CollapsibleContent>Hidden</CollapsibleContent>
    </Collapsible>

    <ContextMenu>
      <ContextMenuTrigger>Trigger</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Item</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuLabel>Label</ContextMenuLabel>
      </ContextMenuContent>
    </ContextMenu>

    <CopyButton text="copy me" />

    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog</DialogTitle>
          <DialogDescription>Description</DialogDescription>
        </DialogHeader>
        <DialogFooter>Footer</DialogFooter>
      </DialogContent>
    </Dialog>

    <Drawer>
      <DrawerTrigger>Open Drawer</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer</DrawerTitle>
          <DrawerDescription>Description</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>Footer</DrawerFooter>
      </DrawerContent>
    </Drawer>

    <DropdownMenu>
      <DropdownMenuTrigger>Dropdown</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Label</DropdownMenuLabel>
        <DropdownMenuItem>Item</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Shortcut <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    <EmptyState title="Title" description="Description" />

    <FileUpload onFilesSelected={() => {}} />

    <FormExample />

    <HelperText>Helper text</HelperText>

    <HoverCard>
      <HoverCardTrigger>Hover</HoverCardTrigger>
      <HoverCardContent>Content</HoverCardContent>
    </HoverCard>

    <Input aria-label="input" />
    <InputOTP maxLength={4}>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
    </InputOTP>
    <KeyboardKey>⌘</KeyboardKey>
    <Label htmlFor="input">Label</Label>
    <Link href="#">Link</Link>

    <ListGroup>
      <ListGroupItem>Item</ListGroupItem>
    </ListGroup>

    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Menu</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Item</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>

    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuIndicator />
    </NavigationMenu>

    <Pagination>
      <PaginationContent>
        <PaginationPrevious href="#" />
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationNext href="#" />
      </PaginationContent>
    </Pagination>

    <Popover>
      <PopoverTrigger>Open Popover</PopoverTrigger>
      <PopoverContent>Popover content</PopoverContent>
    </Popover>

    <Progress value={50} />

    <RadioGroup defaultValue="one">
      <RadioGroupItem value="one" id="one" />
    </RadioGroup>

    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={50}>Left</ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>Right</ResizablePanel>
    </ResizablePanelGroup>

    <ScrollArea className="h-10 w-10">
      <div style={{ height: 40 }}>Content</div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>

    <SearchInput suggestions={["one", "two"]} />

    <Select defaultValue="item-1">
      <SelectTrigger>
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="item-1">Item 1</SelectItem>
      </SelectContent>
    </Select>

    <Separator />

    <Sheet>
      <SheetTrigger>Open Sheet</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet</SheetTitle>
          <SheetDescription>Description</SheetDescription>
        </SheetHeader>
        <SheetFooter>Footer</SheetFooter>
      </SheetContent>
    </Sheet>

    <Skeleton className="h-4 w-4" />

    <Slider defaultValue={[50]} />

    <StatCard label="Label" value="Value" />

    <StatusDot status="active" />

    <Stepper
      steps={[
        { label: "One" },
        { label: "Two" },
        { label: "Three" },
      ]}
      currentStep={1}
    />

    <Switch aria-label="switch" />

    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Head</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Cell</TableCell>
        </TableRow>
      </TableBody>
      <TableCaption>Caption</TableCaption>
    </Table>

    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content</TabsContent>
    </Tabs>

    <Textarea aria-label="textarea" />

    <Toggle aria-label="toggle">Toggle</Toggle>

    <ToggleGroup type="single">
      <ToggleGroupItem value="item">Item</ToggleGroupItem>
    </ToggleGroup>

    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Trigger</TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>
    </TooltipProvider>

  </div>
);

describe("design system components", () => {
  it("render without crashing", () => {
    const { container } = render(<ComponentGallery />);
    expect(container).toBeTruthy();
  });
});
