import { cn } from "./utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      role="status"
      aria-live="polite"
      aria-busy={props["aria-busy"] ?? "true"}
      {...props}
    />
  );
}

export { Skeleton };
