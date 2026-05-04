import type { Meta } from "@storybook/react";
import { toast } from "sonner";
import { Toaster } from "./sonner";
import { Button } from "./button";

const meta = {
  title: "Components/Sonner",
  component: Toaster,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Toaster>;

export default meta;

export const Default = {
  render: () => (
    <div className="flex flex-col gap-2 items-start">
      <Button onClick={() => toast("Welcome to the campfire")}>
        Show toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.success("Saved", { description: "Your preferences are stored." })
        }
      >
        Success toast
      </Button>
      <Button
        variant="destructive"
        onClick={() =>
          toast.error("Something went wrong", {
            description: "We couldn't reach the server.",
          })
        }
      >
        Error toast
      </Button>
      <Toaster />
    </div>
  ),
};
