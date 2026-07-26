import { getTranslations } from "next-intl/server";
import { BrandMark } from "@/components/layout/brand-mark";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { whatsappHref } from "@/lib/site";

type SiteHeaderProps = {
  locale: AppLocale;
};

export async function SiteHeader({ locale }: SiteHeaderProps) {
  const t = await getTranslations({ locale, namespace: "Nav" });

  const items = [
    { href: "/", label: t("home") },
    { href: "/#work", label: t("work") },
    { href: "/#how", label: t("how") },
    { href: "/#contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-cream/80 backdrop-blur-md">
      <div className="section-shell flex h-[4.25rem] items-center justify-between gap-4">
        <BrandMark />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <Button asChild variant="whatsapp" size="default">
            <a href={whatsappHref(locale)} target="_blank" rel="noopener noreferrer">
              {t("whatsapp")}
            </a>
          </Button>
        </div>

        <MobileMenu locale={locale} items={items} />
      </div>
    </header>
  );
}
