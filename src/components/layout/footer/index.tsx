import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils/tailwind-merge";
import { useTranslations } from "next-intl";

export function Footer() {
  // Translation
  const t = useTranslations();

  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        {/* Copyright */}
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} {t("application-title")} {t("all-rights-reserved")}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <nav className="flex gap-4 md:gap-6">
            <Link href="/terms" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {t("terms")}
            </Link>
            <Link href="/privacy" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {t("privacy")}
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {t("about")}
            </Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {t("contact")}
            </Link>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "text-muted-foreground hover:text-primary")}>
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "text-muted-foreground hover:text-primary")}>
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "text-muted-foreground hover:text-primary")}>
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
