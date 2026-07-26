import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsAppFab } from "@/components/conversion/whatsapp-fab";
import { routing, type AppLocale } from "@/i18n/routing";
import { site } from "@/lib/site";
import "../globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, `/${l}`]),
  ) as Record<string, string>;

  return {
    metadataBase: new URL(site.url),
    applicationName: site.name,
    title: {
      default: t("title"),
      template: `%s | ${site.brand}${site.eth}`,
    },
    description: t("description"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ...languages,
        "x-default": `/${routing.defaultLocale}`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      url: `${site.url}/${locale}`,
      siteName: site.name,
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: site.portraitUrl,
          width: 1200,
          height: 630,
          alt: t("ogAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [site.portraitUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: [{ url: site.logoUrl, type: "image/png" }],
      apple: [{ url: site.logoUrl, sizes: "180x180", type: "image/png" }],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const appLocale = locale as AppLocale;

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: `${site.brand}${site.eth}`,
    url: `${site.url}/${locale}`,
    image: site.portraitUrl,
    sameAs: [site.github],
    jobTitle: "Digital systems designer",
    worksFor: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };

  return (
    <html lang={locale} className={`${display.variable} ${body.variable}`}>
      <body className="min-h-dvh font-sans text-foreground antialiased">
        <NextIntlClientProvider messages={messages}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
          />
          <SiteHeader locale={appLocale} />
          <main>{children}</main>
          <SiteFooter locale={appLocale} />
          <WhatsAppFab locale={appLocale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
