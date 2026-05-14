import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { canonical, getWhatsAppHref, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Servicios — Pack express + captación",
  description:
    "Detalle de la oferta: landing de conversión + sistema de captación en plazo express. Lanzamiento 397 € (10 plazas).",
  alternates: { canonical: canonical(siteConfig.links.servicios) },
  openGraph: {
    title: "Servicios — Pack express + captación | Rulo.digital",
    description:
      "Landing + captación lista en modo express. Precio lanzamiento 397 € (solo primeros 10).",
    url: canonical(siteConfig.links.servicios),
    type: "website",
  },
};

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
            {siteConfig.tagline} Aquí va el detalle, sin humo: qué incluye, qué no incluye, y por qué
            el precio de lanzamiento es una ventaja temporal para ti (y un límite de calidad para mí).
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="xl">
              <a
                href={getWhatsAppHref()}
                target="_blank"
                rel="noreferrer"
                aria-label="Hablar por WhatsApp sobre el pack express"
              >
                <MessageCircle className="size-5" aria-hidden />
                Hablar por WhatsApp
              </a>
            </Button>
            <Button asChild size="xl" variant="secondary">
              <Link href={siteConfig.links.contacto} aria-label="Ir a contacto y formulario">
                Ir a contacto
              </Link>
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
                Aterrizamos objetivo: qué vendes, a quién, qué acción quieres (contacto, llamada,
                lead). Si el mensaje es débil, lo reforzamos antes de construir nada.
              </p>
              <p>
                <span className="font-semibold text-foreground">2) Landing de conversión.</span>{" "}
                Jerarquía visual clara, prueba social, objeciones resueltas “en escena”, y CTAs que no
                dejan dudas. Mobile-first de verdad: en tu sector, el móvil manda.
              </p>
              <p>
                <span className="font-semibold text-foreground">3) Sistema de captación.</span>{" "}
                Contacto directo (WhatsApp), formulario simple y microcopy que empuja a escribir sin
                parecer desesperado. Si tu negocio necesita agenda en línea, la integramos cuando encaje
                (por ejemplo Calendly u otra herramienta).
              </p>
              <p>
                <span className="font-semibold text-foreground">4) Performance + SEO base.</span>{" "}
                Velocidad extrema (menos rebote), metadatos correctos, Open Graph, datos estructurados
                donde aplica, y buenas prácticas para que Google entienda la página.
              </p>
              <Separator />
              <p>
                <span className="font-semibold text-foreground">Qué no es:</span> no es una tienda
                online compleja, no es una marca corporativa con 40 subpáginas, y no es un “rediseño
                infinito”. Es una máquina corta, potente y publicada.
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
                <p className="mt-2 font-heading text-5xl font-semibold">397 €</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Solo primeros {siteConfig.offer.slotsTotal}. Cuando se cierre, sube o se pausa.
                </p>
              </div>
              <Button asChild className="w-full" size="xl">
                <a
                  href={getWhatsAppHref()}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Apartar plaza por WhatsApp"
                >
                  <MessageCircle className="size-5" aria-hidden />
                  Apartar plaza
                </a>
              </Button>
              <p className="text-xs text-muted-foreground">
                Si necesitas integraciones avanzadas (CRM, ads, tracking fino), lo vemos como fase 2.
                Primero: que entren clientes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
