import { cn } from "@/lib/utils/tailwind-merge";
import { Info } from "lucide-react";

export default function SubmitFeedback({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  // Don't render a <p> if no children provided
  if (!children) return null;

  return (
    <p
      {...props}
      className={cn(
        "flex items-center text-sm gap-2 my-2 text-red-500 font-semibold justify-center",
        className
      )}
    >
      <Info size={18} /> {children}
    </p>
  );
}
