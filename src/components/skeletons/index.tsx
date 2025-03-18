import { cn } from "@/lib/utils/tailwind-merge";
import { Skeleton } from "../ui/skeleton";

export function Circle({ className, ...props }: React.ComponentProps<typeof Skeleton>) {
  return <Skeleton {...props} className={cn("rounded-full size-8", className)} />;
}

export function Square({ className, ...props }: React.ComponentProps<typeof Skeleton>) {
  return <Skeleton {...props} className={cn("rounded-lg size-8", className)} />;
}

export function Bar({ className, ...props }: React.ComponentProps<typeof Skeleton>) {
  return <Skeleton {...props} className={cn("rounded-lg h-8 min-w-12", className)} />;
}
