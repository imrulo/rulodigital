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
      "Landing de alta conversión, captación de leads, reservas cuando encajan con tu negocio, y base SEO local para profesionales.",
  };
}

export function videoObjectJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: siteConfig.demoVideo.name,
    description: siteConfig.demoVideo.description,
    thumbnailUrl: siteConfig.demoVideo.posterUrl,
    uploadDate: "2026-05-14T08:00:00+00:00",
    contentUrl: siteConfig.demoVideo.contentUrl,
    isFamilyFriendly: true,
    publisher: {
      "@type": "Organization",
      name: "Rulo.digital",
      logo: {
        "@type": "ImageObject",
        url: siteConfig.logoUrl,
      },
    },
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
