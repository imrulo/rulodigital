import { siteConfig } from "@/lib/site-config";

export function organizationJsonLd() {
  const sameAs: string[] = [siteConfig.githubProfileUrl];
  const tg = siteConfig.telegramUsername.trim();
  if (tg) {
    sameAs.push(`https://t.me/${tg.replace(/^@/, "")}`);
  }

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.contactEmail,
    logo: siteConfig.logoUrl,
    sameAs,
  };
}

export function serviceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Landing + sistema de captación en 48 horas",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.contactEmail,
    },
    areaServed: "ES",
    availableLanguage: "Spanish",
    offers: {
      "@type": "Offer",
      price: siteConfig.offer.price,
      priceCurrency: siteConfig.offer.currency,
      url: `${siteConfig.url}${siteConfig.links.servicios}`,
      availability: "https://schema.org/LimitedAvailability",
      description: siteConfig.offer.headline,
    },
    serviceType: "Diseño y desarrollo web orientado a conversión",
    description:
      "Landing page profesional + flujo de captación (CTA, WhatsApp, formulario) listo en 48 horas para negocios y profesionales.",
  };
}

export type FaqItem = { question: string; answer: string };

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
