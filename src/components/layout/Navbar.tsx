"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { WHATSAPP_NUMBER } from "@/data/constants";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isRTL = locale === "ar";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/services`, label: t("services") },
    { href: `/${locale}/nationalities`, label: t("nationalities") },
    { href: `/${locale}/cities`, label: t("cities") },
    { href: `/${locale}/blog`, label: t("blog") },
    { href: `/${locale}/faq`, label: t("faq") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  const otherLocale = locale === "ar" ? "en" : "ar";
  const otherLocalePath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      )}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">ا</span>
            </div>
            <div className={isRTL ? "text-right" : "text-left"}>
              <p className="font-bold text-primary text-sm leading-tight">
                {locale === "ar" ? "شركة الاستقدام السعودية" : "Saudi Recruitment"}
              </p>
              <p className="text-xs text-muted-foreground">
                {locale === "ar" ? "خدمات العمالة المنزلية" : "Domestic Labor Services"}
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-primary/5",
                  pathname === link.href ? "text-primary font-semibold" : "text-gray-700"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href={otherLocalePath} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
              {otherLocale === "ar" ? "عربي" : "English"}
            </Link>
            <a
              href={`tel:${WHATSAPP_NUMBER}`}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span dir="ltr">{WHATSAPP_NUMBER}</span>
            </a>
            <Button asChild size="sm">
              <Link href={`/${locale}/contact#request`}>{t("requestNow")}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t bg-white py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-primary/5",
                  pathname === link.href ? "text-primary font-semibold bg-primary/5" : "text-gray-700"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 px-4 flex flex-col gap-2">
              <Link href={otherLocalePath} className="text-sm text-gray-600 hover:text-primary">
                {otherLocale === "ar" ? "عربي" : "English"}
              </Link>
              <Button asChild size="sm" className="w-full">
                <Link href={`/${locale}/contact#request`} onClick={() => setIsOpen(false)}>
                  {t("requestNow")}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
