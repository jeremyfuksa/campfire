import type { Meta, StoryObj } from "@storybook/react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const meta = {
  title: "Components/HoverCard",
  component: HoverCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <i className="fa-solid fa-calendar mr-2 h-4 w-4 opacity-70"></i>
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const Simple: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="underline cursor-pointer">Hover me</span>
      </HoverCardTrigger>
      <HoverCardContent>
        <p className="text-sm">This is a simple hover card with text content.</p>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const WithLink: Story = {
  render: () => (
    <p className="text-sm">
      Visit our{" "}
      <HoverCard>
        <HoverCardTrigger asChild>
          <a href="#" className="underline">
            documentation
          </a>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Documentation</h4>
            <p className="text-sm text-muted-foreground">
              Learn how to use our components with detailed guides and examples.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>{" "}
      to learn more.
    </p>
  ),
};

export const ProductPreview: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">MacBook Pro</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <div className="h-40 bg-muted rounded-md flex items-center justify-center">
            <i className="fa-solid fa-laptop text-4xl text-muted-foreground"></i>
          </div>
          <h4 className="font-semibold">MacBook Pro 16"</h4>
          <p className="text-sm text-muted-foreground">
            The most powerful MacBook Pro ever is here. With the blazing-fast
            M2 Pro or M2 Max chip.
          </p>
          <div className="flex justify-between items-center pt-2">
            <span className="text-lg font-bold">$2,499</span>
            <Button size="sm">View Details</Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
