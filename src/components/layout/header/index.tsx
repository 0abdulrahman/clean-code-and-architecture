"use client";

import { useState } from "react";
import Link from "next/link";
import { LogOut, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { SwitchLocale } from "./components/switch-locale";
import { signOut, useSession } from "next-auth/react";

export function Header() {
  // Translation
  const t = useTranslations();

  // State
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hooks
  const { data: session } = useSession();

  // Functions
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <span className="font-bold text-xl">{t("application-title")}</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {/* Navigation */}
          {session ? (
            <div className="flex flex-col items-end">
              {t("hello-user", { user: session.user.firstName })}
              <Button variant="link" className="p-0 h-fit font-semibold" onClick={() => signOut()}>
                {t("logout")} <LogOut />
              </Button>
            </div>
          ) : (
            <Link href="/auth/login" className="text-sm font-medium transition-colors hover:text-primary">
              {t("login")}
            </Link>
          )}

          {/* Locale switcher */}
          <SwitchLocale />
        </nav>

        {/* Mobile Menu Button and Language Switcher */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Locale switcher */}
          <SwitchLocale />

          {/* Menu trigger */}
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container py-4 space-y-2">
            <Link href="/auth/login" className="block py-2 text-sm font-medium transition-colors hover:text-primary" onClick={closeMenu}>
              {t("login")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
