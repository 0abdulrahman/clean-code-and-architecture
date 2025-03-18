"use client";

import { Check, ChevronDown, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Locale, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils/tailwind-merge";

export function SwitchLocale({ className }: { className?: string }) {
  // Translation
  const locale = useLocale();

  // Navigation
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Variables
  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "العربية" },
  ];

  // Functions
  const switchLocale = (locale: Locale) => {
    router.push(`${pathname}?${searchParams.toString()}`, { locale });
  };

  return (
    <DropdownMenu>
      {/* Trigger */}
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className={cn("gap-1 px-2", className)}>
          {/* Icon */}
          <Globe className="h-4 w-4" />

          {/* Name */}
          <span className="hidden sm:inline-block">{languages.find((lang) => lang.code === locale)?.name}</span>

          {/* Icon */}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      {/* Dropdown */}
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => switchLocale(language.code as Locale)}
            className="flex items-center justify-between">
            {language.name}
            {locale === language.code && <Check className="h-4 w-4 ml-2" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
