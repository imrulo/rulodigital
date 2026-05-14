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
import { ResultadosRealesSection } from "@/components/home/resultados-reales";
import { homeFaqItems } from "@/lib/faq";
import { getWeeklyClientsServed } from "@/lib/weekly-clients";
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

export default function HomePage() {
  const weekly = getWeeklyClientsServed();

  return (
    <>
      <HomeHero />
      <WeeklyClientsStrip count={weekly} />
      <TrustBar />
      <ResultadosRealesSection />
      <HowItWorks48h />
      <OfferCardSection />
      <BeforeAfterGrid />
      <TestimonialsCarousel />
      <PhasesSection />
      <section className="bg-white py-16 sm:py-20" id="reserva" aria-labelledby="reserva-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 id="reserva-heading" className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Reserva (Calendly)
            </h2>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Elige hueco en el calendario. Configura{" "}
              <code className="rounded bg-secondary px-1 py-0.5 font-mono text-xs">
                NEXT_PUBLIC_CALENDLY_URL
              </code>{" "}
              en Vercel con tu URL pública de Calendly para activar el embed en producción.
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
