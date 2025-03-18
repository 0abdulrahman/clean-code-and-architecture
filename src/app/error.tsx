"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <main className="flex flex-col gap-8 min-h-screen items-center justify-center">
          {/* Headline */}
          <h1 className="text-red-500 font-bold text-5xl">
            Something went wrong!
          </h1>

          {/* Description */}
          <p>{error.message}</p>

          {/* Action */}
          <Button variant="secondary" onClick={reset}>
            Try again
          </Button>
        </main>
      </body>
    </html>
  );
}
