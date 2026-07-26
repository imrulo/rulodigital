import { siteConfig, canonical } from "@/lib/site-config";

export function organizationJsonLd() {
  const sameAs: string[] = [siteConfig.githubProfileUrl];
  const tg = siteConfig.telegramUsername.trim();
  if (tg) {
    sameAs.push(`https://t.me/${tg.replace(/^@/, "")}`);
  }

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rulo.digital",
    alternateName: siteConfig.name,
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
    name: "Landing page + sistema de captación (lanzamiento)",
    provider: {
      "@type": "Organization",
      name: "Rulo.digital",
      url: siteConfig.url,
      email: siteConfig.contactEmail,
    },
    areaServed: ["ES", "EU"],
    availableLanguage: "Spanish",
    offers: {
      "@type": "Offer",
      price: siteConfig.offer.price,
      priceCurrency: siteConfig.offer.currency,
      url: canonical(siteConfig.links.servicios),
      availability: "https://schema.org/LimitedAvailability",
      description: siteConfig.offer.headline,
    },
    serviceType: "Diseño y desarrollo web orientado a conversión",
    description:
      "Landing de alta conversión, captación de leads y base SEO local para profesionales. Agenda en línea opcional cuando encaja con el negocio.",
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
