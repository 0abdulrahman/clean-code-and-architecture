import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils/tailwind-merge";
import Link from "next/link";

export default function NotFound() {
  return (
    <html>
      <body>
        <main className="flex flex-col gap-8 min-h-screen items-center justify-center">
          {/* Headline */}
          <h1 className="text-red-500 font-bold text-9xl">404</h1>

          {/* Description */}
          <p>Page not found.</p>

          {/* Action */}
          <Link href="/" className={cn(buttonVariants({ variant: "link" }))}>
            Go to homepage
          </Link>
        </main>
      </body>
    </html>
  );
}
