import { HomeHero } from "@/components/home/home-hero";
import { TrustBar } from "@/components/home/trust-bar";
import { WeeklyClientsStrip } from "@/components/conversion/weekly-clients-strip";
import { HowItWorks48h } from "@/components/home/how-it-works-48h";
import { OfferCardSection } from "@/components/home/offer-card-section";
import { BeforeAfterGrid } from "@/components/home/before-after-grid";
import { TestimonialsCarousel } from "@/components/home/testimonials-carousel";
import { PhasesSection } from "@/components/home/phases-section";
import { CalendlyEmbed } from "@/components/home/calendly-embed";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { FaqSection } from "@/components/home/faq-section";
import { LeadMagnetOptIn } from "@/components/home/lead-magnet-opt-in";
import { homeFaqItems } from "@/lib/faq";
import { getWeeklyClientsServed } from "@/lib/weekly-clients";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Landing + captación en 48h — lanzamiento 397 €",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Landing + captación en 48h — lanzamiento 397 €",
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
  },
};

export default function HomePage() {
  const weekly = getWeeklyClientsServed();

  return (
    <>
      <HomeHero />
      <WeeklyClientsStrip count={weekly} />
      <TrustBar />
      <HowItWorks48h />
      <OfferCardSection />
      <BeforeAfterGrid />
      <TestimonialsCarousel />
      <PhasesSection />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Reserva (Calendly) — si prefieres calendario a chat
            </h2>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Si ya sabes que quieres slot, reserva. Si quieres respuesta ya, WhatsApp gana siempre.
            </p>
          </div>
          <div className="mt-8">
            <CalendlyEmbed />
          </div>
        </div>
      </section>
      <LeadMagnetOptIn />
      <FaqSection items={homeFaqItems} />
      <FinalCtaSection />
    </>
  );
}
