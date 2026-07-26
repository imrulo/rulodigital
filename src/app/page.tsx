import { HomeHero } from "@/components/home/home-hero";
import { TrustBar } from "@/components/home/trust-bar";
import { HowItWorks48h } from "@/components/home/how-it-works-48h";
import { OfferCardSection } from "@/components/home/offer-card-section";
import { SocialProofSection } from "@/components/home/social-proof-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { FaqSection } from "@/components/home/faq-section";
import { LeadMagnetOptIn } from "@/components/home/lead-magnet-opt-in";
import { homeFaqItems } from "@/lib/faq";
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
 * Embudo corto: hero → confianza → proceso → oferta → FAQ → lead magnet suave → cierre.
 * Comparadores / fases viven en /ejemplos y /servicios para no diluir la decisión.
 */
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustBar />
      <SocialProofSection />
      <HowItWorks48h />
      <OfferCardSection />
      <FaqSection items={homeFaqItems} />
      <LeadMagnetOptIn />
      <FinalCtaSection />
    </>
  );
}
