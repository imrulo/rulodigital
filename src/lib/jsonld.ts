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
    "@id": `${siteConfig.url.replace(/\/$/, "")}/#organization`,
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
      "@id": `${siteConfig.url.replace(/\/$/, "")}/#organization`,
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

/** Product + Offer para rich results comerciales (Pack Express). */
export function productJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Pack Express — Landing + captación en 48h",
    description: siteConfig.description,
    brand: {
      "@type": "Brand",
      name: "Rulo.digital",
    },
    image: siteConfig.logoUrl,
    offers: {
      "@type": "Offer",
      url: canonical(siteConfig.links.servicios),
      priceCurrency: siteConfig.offer.currency,
      price: siteConfig.offer.price,
      availability: "https://schema.org/LimitedAvailability",
      priceValidUntil: "2026-12-31",
      seller: {
        "@type": "Organization",
        name: "Rulo.digital",
        url: siteConfig.url,
      },
    },
  };
}

export type BreadcrumbItem = { name: string; path: string };

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonical(item.path),
    })),
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rulo",
    url: canonical(siteConfig.links.sobre),
    image: siteConfig.aboutPortraitUrl,
    jobTitle: "Especialista en landings de conversión",
    worksFor: {
      "@type": "Organization",
      name: "Rulo.digital",
      url: siteConfig.url,
    },
    email: siteConfig.contactEmail,
    sameAs: [siteConfig.githubProfileUrl],
    description:
      "Construyo landings y sistemas de captación express para coaches, clínicas y profesionales.",
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
