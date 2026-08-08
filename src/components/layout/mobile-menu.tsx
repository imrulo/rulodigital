"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { WhatsAppLink } from "@/components/conversion/whatsapp-link";

type NavItem = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  locale: AppLocale;
  items: NavItem[];
};

export function MobileMenu({ locale, items }: MobileMenuProps) {
  const t = useTranslations("Nav");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label={open ? t("closeMenu") : t("openMenu")}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </Button>

      {open ? (
        <div className="fixed inset-x-0 top-[4.25rem] z-40 border-b border-border bg-cream/95 px-5 py-6 backdrop-blur-md">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-heading text-2xl text-navy"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <LanguageSwitcher />
            <Button asChild variant="whatsapp" size="lg">
              <WhatsAppLink
                locale={locale}
                intent="nav"
                onClick={() => setOpen(false)}
              >
                {t("whatsapp")}
              </WhatsAppLink>
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
