import type { Metadata } from "next";
import Link from "next/link";
import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { canonical, getWhatsAppHref, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Servicios — Pack express + captación",
  description:
    "Detalle de la oferta: landing de conversión + sistema de captación en 48h. Lanzamiento 397 € (10 plazas). Garantía de plazo.",
  alternates: { canonical: canonical(siteConfig.links.servicios) },
  openGraph: {
    title: "Servicios — Pack express + captación | Rulo.digital",
    description:
      "Landing + captación en 48h hábiles. Precio lanzamiento 397 €. Garantía de plazo con devolución.",
    url: canonical(siteConfig.links.servicios),
    type: "website",
  },
};

const whyPremium = [
  "Copy y estructura pensados para tu nicho (no plantilla genérica de 99 €).",
  "Diagnóstico express antes de diseñar: menos páginas bonitas que no venden.",
  "Base técnica rápida (Next.js) + SEO on-page para que Google y el usuario entiendan la oferta.",
  "Un solo embudo claro: WhatsApp / formulario, sin distracciones.",
];

export default function ServiciosPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-border bg-secondary/30 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold text-accent">Oferta principal</p>
          <h1 className="mt-3 max-w-3xl font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            No te vendo una web. Te vendo un sistema que te hable con clientes.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {siteConfig.tagline} Aquí va el detalle: qué incluye, por qué no es 99 €, y la garantía
            de plazo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="xl">
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
              <Link href={siteConfig.links.contacto}>{siteConfig.cta.secondaryLabel}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Qué incluye el Pack express</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">1) Diagnóstico express (30 min).</span>{" "}
                Aterrizamos objetivo: qué vendes, a quién, qué acción quieres. Si el mensaje es débil,
                lo reforzamos antes de construir.
              </p>
              <p>
                <span className="font-semibold text-foreground">2) Landing de conversión.</span>{" "}
                Jerarquía clara, objeciones resueltas en página y CTAs sin dudas. Mobile-first.
              </p>
              <p>
                <span className="font-semibold text-foreground">3) Sistema de captación.</span>{" "}
                WhatsApp + formulario corto. Agenda en línea opcional si encaja.
              </p>
              <p>
                <span className="font-semibold text-foreground">4) Performance + SEO base.</span>{" "}
                Velocidad, metadatos, Open Graph y datos estructurados donde aplica.
              </p>
              <Separator />
              <p>
                <span className="font-semibold text-foreground">Qué no es:</span> tienda online
                compleja, marca corporativa de 40 subpáginas, ni rediseño infinito.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border shadow-[0_18px_80px_rgba(0,0,0,0.08)]">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Inversión</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Precio lanzamiento</p>
                <p className="mt-2 font-heading text-5xl font-semibold">{siteConfig.offer.price} €</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Solo primeros {siteConfig.offer.slotsTotal}. Cuando se cierre, sube o se pausa.
                </p>
              </div>
              <Button asChild className="w-full" size="xl">
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
              <p className="text-xs text-muted-foreground">
                Integraciones avanzadas (CRM, ads, tracking fino) = fase 2. Primero: que entren
                clientes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section
        className="border-y border-border bg-secondary/30 py-14 sm:py-16"
        aria-labelledby="por-que-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="por-que-heading" className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
            Por qué {siteConfig.offer.price} € y no 99 €
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            El mercado tiene landings baratas y rápidas. Esta oferta compite por criterio de
            conversión y entrega seria — no por ser la más barata.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {whyPremium.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl border border-border bg-white p-4 text-sm text-foreground"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 sm:py-16" aria-labelledby="garantia-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl border border-border bg-primary px-6 py-10 text-white sm:px-10">
            <h2 id="garantia-heading" className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              Garantía de plazo (48h hábiles)
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-200 sm:text-base">
              Si, tras el <span className="font-semibold text-white">brief completo</span> y el{" "}
              <span className="font-semibold text-white">pago</span>, no entrego la primera versión
              publicada en <span className="text-accent">48 horas hábiles</span> por causa imputable
              a mí, te devuelvo el <span className="font-semibold text-white">100%</span> del Pack
              Express. No aplica si faltan materiales, cambias el alcance a mitad, o el retraso es
              ajeno (accesos, dominio, terceros).
            </p>
            <div className="mt-8">
              <Button asChild size="xl">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
