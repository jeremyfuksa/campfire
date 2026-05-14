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
          toast.success("Saved", {
            description: "Your preferences are stored.",
          })
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

// Action toast — undo / view / retry patterns. The action button is the
// canonical way to offer follow-up navigation from a toast.
export const WithAction = {
  render: () => (
    <div className="flex flex-col gap-2 items-start">
      <Button
        onClick={() =>
          toast("Draft saved", {
            description: "We saved your draft automatically.",
            action: {
              label: "View",
              onClick: () => alert("Navigate to draft"),
            },
          })
        }
      >
        Trigger action toast
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          const id = toast("Item deleted", {
            description: "You can still undo this.",
            action: {
              label: "Undo",
              onClick: () => {
                toast.dismiss(id);
                toast.success("Restored");
              },
            },
          });
        }}
      >
        Trigger undo toast
      </Button>
      <Toaster />
    </div>
  ),
};

// Promise toast — show loading → resolved/rejected automatically.
export const Promise_ = {
  name: "Promise toast",
  render: () => (
    <div className="flex flex-col gap-2 items-start">
      <Button
        onClick={() => {
          const sleep = (ms: number) =>
            new Promise<{ name: string }>((resolve) =>
              setTimeout(() => resolve({ name: "field notes #04" }), 1500),
            );

          void toast.promise(sleep(1500), {
            loading: "Publishing…",
            success: (data) => `Published "${data.name}"`,
            error: "Publish failed",
          });
        }}
      >
        Trigger promise toast
      </Button>
      <Button
        variant="destructive"
        onClick={() => {
          const fail = () =>
            new Promise<void>((_, reject) =>
              setTimeout(() => reject(new Error("Network")), 1500),
            );

          void toast.promise(fail(), {
            loading: "Saving…",
            success: "Saved",
            error: "Could not save. Check your connection.",
          });
        }}
      >
        Trigger failing promise
      </Button>
      <Toaster />
    </div>
  ),
};

// Position variants — by default toasts appear bottom-right; consumers
// can override per-Toaster or per-toast.
export const Positions = {
  render: () => (
    <div className="flex flex-col gap-2 items-start">
      <Button onClick={() => toast("Top right", { position: "top-right" })}>
        Top right
      </Button>
      <Button onClick={() => toast("Top center", { position: "top-center" })}>
        Top center
      </Button>
      <Button onClick={() => toast("Bottom left", { position: "bottom-left" })}>
        Bottom left
      </Button>
      <Toaster />
    </div>
  ),
};

// Rich content — toasts can carry icons, custom JSX, longer descriptions.
export const RichContent = {
  render: () => (
    <div className="flex flex-col gap-2 items-start">
      <Button
        onClick={() =>
          toast.info("New release available", {
            description:
              "v0.9.0 includes the editorial theme system and tighter typography rules.",
            duration: 6000,
            action: {
              label: "Read changelog",
              onClick: () => alert("CHANGELOG.md"),
            },
          })
        }
      >
        Info with description + action
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast(
            <span>
              <strong>Campfire</strong> · running on Storybook now
            </span>,
            { duration: 4000 },
          )
        }
      >
        Toast with JSX content
      </Button>
      <Toaster />
    </div>
  ),
};
