import { HomeHero } from "@/components/home/home-hero";
import { TrustBar } from "@/components/home/trust-bar";
import { HowItWorks48h } from "@/components/home/how-it-works-48h";
import { OfferCardSection } from "@/components/home/offer-card-section";
import { BeforeAfterGrid } from "@/components/home/before-after-grid";
import { SocialProofSection } from "@/components/home/social-proof-section";
import { PhasesSection } from "@/components/home/phases-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { FaqSection } from "@/components/home/faq-section";
import { LeadMagnetOptIn } from "@/components/home/lead-magnet-opt-in";
import { homeFaqItems } from "@/lib/faq";
import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactFormPath, getWhatsAppHref, siteConfig } from "@/lib/site-config";

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

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustBar />
      <HowItWorks48h />
      <OfferCardSection />
      <SocialProofSection />
      <BeforeAfterGrid />
      <PhasesSection />
      <section className="bg-white py-16 sm:py-20" id="hablar" aria-labelledby="hablar-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 id="hablar-heading" className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Hablemos y lo dejamos en marcha
            </h2>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Respuesta directa por WhatsApp: me cuentas qué vendes y qué quieres que pase cuando entra
              alguien. Si en tu proyecto encaja una agenda en línea, la integramos cuando tú lo pidas.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button asChild size="xl" className="shadow-[0_16px_60px_rgba(0,255,157,0.22)]">
              <a
                href={getWhatsAppHref()}
                target="_blank"
                rel="noreferrer"
                aria-label={siteConfig.cta.primaryAria}
              >
                <MessageCircle className="size-5" aria-hidden />
                {siteConfig.cta.primaryLabel}
              </a>
            </Button>
            <Button asChild size="xl" variant="secondary">
              <Link href={contactFormPath()} aria-label="Ir al formulario de contacto">
                {siteConfig.cta.secondaryLabel}
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <LeadMagnetOptIn />
      <FaqSection items={homeFaqItems} />
      <FinalCtaSection />
    </>
  );
}
