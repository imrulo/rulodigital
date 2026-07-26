import { HomeHero } from "@/components/home/home-hero";
import { TrustBar } from "@/components/home/trust-bar";
import { HowItWorks48h } from "@/components/home/how-it-works-48h";
import { OfferCardSection } from "@/components/home/offer-card-section";
import { SocialProofSection } from "@/components/home/social-proof-section";
import { NicheSiloLinks } from "@/components/home/niche-silo-links";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { FaqSection } from "@/components/home/faq-section";
import { LeadMagnetOptIn } from "@/components/home/lead-magnet-opt-in";
import { JsonLd } from "@/components/seo/json-ld";
import { homeFaqItems } from "@/lib/faq";
import { productJsonLd } from "@/lib/jsonld";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.titleDefault,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
  },
};

/**
 * Embudo corto + silo nichos + Product schema en home.
 */
export default function HomePage() {
  return (
    <>
      <JsonLd data={productJsonLd()} />
      <HomeHero />
      <TrustBar />
      <SocialProofSection />
      <NicheSiloLinks />
      <HowItWorks48h />
      <OfferCardSection />
      <FaqSection items={homeFaqItems} />
      <LeadMagnetOptIn />
      <FinalCtaSection />
    </>
  );
}
