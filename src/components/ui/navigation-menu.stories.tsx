import type { Meta, StoryObj } from "@storybook/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";

const meta = {
  title: "Components/NavigationMenu",
  component: NavigationMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 w-[400px]">
              <NavigationMenuLink href="#" className="block p-3 rounded hover:bg-accent">
                <div className="font-medium">Product 1</div>
                <p className="text-sm text-muted-foreground">Description</p>
              </NavigationMenuLink>
              <NavigationMenuLink href="#" className="block p-3 rounded hover:bg-accent">
                <div className="font-medium">Product 2</div>
                <p className="text-sm text-muted-foreground">Description</p>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 w-[400px]">
              <NavigationMenuLink href="#" className="block p-3 rounded hover:bg-accent">
                <div className="font-medium">Solution 1</div>
                <p className="text-sm text-muted-foreground">Description</p>
              </NavigationMenuLink>
              <NavigationMenuLink href="#" className="block p-3 rounded hover:bg-accent">
                <div className="font-medium">Solution 2</div>
                <p className="text-sm text-muted-foreground">Description</p>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className="px-4 py-2">
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export const WithGrid: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-2 gap-3 p-4 w-[600px]">
              <NavigationMenuLink href="#" className="block p-3 rounded hover:bg-accent">
                <i className="fa-solid fa-rocket text-lg mb-2"></i>
                <div className="font-medium">Fast Performance</div>
                <p className="text-sm text-muted-foreground">
                  Lightning-fast load times
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink href="#" className="block p-3 rounded hover:bg-accent">
                <i className="fa-solid fa-shield text-lg mb-2"></i>
                <div className="font-medium">Secure</div>
                <p className="text-sm text-muted-foreground">
                  Enterprise-grade security
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink href="#" className="block p-3 rounded hover:bg-accent">
                <i className="fa-solid fa-chart-line text-lg mb-2"></i>
                <div className="font-medium">Analytics</div>
                <p className="text-sm text-muted-foreground">
                  Detailed insights
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink href="#" className="block p-3 rounded hover:bg-accent">
                <i className="fa-solid fa-users text-lg mb-2"></i>
                <div className="font-medium">Collaboration</div>
                <p className="text-sm text-muted-foreground">
                  Work together seamlessly
                </p>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export const Simple: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className="px-4 py-2">
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className="px-4 py-2">
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className="px-4 py-2">
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
