import { getTranslations } from "next-intl/server";
import { BrandMark } from "@/components/layout/brand-mark";
import { MadeWithHeart } from "@/components/layout/made-with-heart";
import type { AppLocale } from "@/i18n/routing";
import { site, whatsappHref } from "@/lib/site";

type SiteFooterProps = {
  locale: AppLocale;
};

export async function SiteFooter({ locale }: SiteFooterProps) {
  const t = await getTranslations({ locale, namespace: "Footer" });
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-navy text-cream">
      <div className="section-shell flex flex-col gap-8 py-14 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-md space-y-4">
          <BrandMark showWordmark={false} onDark />
          <p className="font-heading text-2xl tracking-tight text-cream">
            {site.brand}
            <span className="text-sea-soft">{site.eth}</span>
          </p>
          <p className="text-sm leading-relaxed text-cream/75">{t("tagline")}</p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/80 transition-colors hover:text-sea-soft"
          >
            {t("github")}
          </a>
          <a
            href={whatsappHref(locale)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/80 transition-colors hover:text-sea-soft"
          >
            {t("whatsapp")}
          </a>
          <p className="pt-2 text-xs text-cream/50">
            © {year} {site.name}. {t("rights")}
          </p>
          <MadeWithHeart />
        </div>
      </div>
    </footer>
  );
}
