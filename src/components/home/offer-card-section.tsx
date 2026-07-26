import Link from "next/link";
import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getWhatsAppHref, siteConfig } from "@/lib/site-config";

const bullets = [
  "Landing de alta conversión (mobile-first)",
  "Contacto directo (WhatsApp) + formulario corto",
  "Microcopy de confianza y CTAs sin ruido",
  "SEO técnico base + velocidad extrema",
  "Agenda en línea opcional si encaja con tu flujo",
];

const whyNotCheap = [
  "Diagnóstico express: afinamos el mensaje antes de diseñar",
  "Criterio por nicho (objeciones, CTA, prueba), no plantilla genérica",
  "Stack rápido (Next.js) pensado para menos rebote y más contacto",
];

export function OfferCardSection() {
  return (
    <section className="bg-white py-16 sm:py-20" id="oferta" aria-labelledby="oferta-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <h2
              id="oferta-heading"
              className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Pack Express — {siteConfig.offer.price} €
            </h2>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              No compres una web. Compra un sistema que te traiga conversaciones. Precio de
              lanzamiento limitado a {siteConfig.offer.slotsTotal} plazas.
            </p>

            <div className="mt-6 rounded-2xl border border-border bg-secondary/30 p-5">
              <p className="text-sm font-semibold text-foreground">
                ¿Por qué no 99 € como otras landings express?
              </p>
              <ul className="mt-3 space-y-2">
                {whyNotCheap.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-muted-foreground">
                Detalle completo y garantía de plazo en{" "}
                <Link href={siteConfig.links.servicios} className="font-medium text-foreground underline">
                  Servicios
                </Link>
                .
              </p>
            </div>
          </div>

          <Card className="border-border shadow-[0_18px_80px_rgba(0,0,0,0.08)]">
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <CardTitle className="font-heading text-2xl">Lanzamiento</CardTitle>
                <Badge>{siteConfig.offer.headline}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Precio transparente. Entrega en 48h hábiles tras brief completo.
              </p>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex items-end gap-2">
                <p className="font-heading text-5xl font-semibold">{siteConfig.offer.price} €</p>
                <p className="pb-2 text-sm text-muted-foreground line-through">699 €</p>
              </div>
              <ul className="space-y-2">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 size-4 text-accent" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="rounded-xl border border-border bg-secondary/40 p-3 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">Garantía de plazo: </span>
                si no entrego la primera versión en 48h hábiles tras brief + pago (por causa mía),
                devolución del 100%.
              </p>
              <Button asChild size="xl" className="w-full">
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
                Solo {siteConfig.offer.slotsTotal} plazas a {siteConfig.offer.price} €. Si entras
                tarde, el precio sube o se cierra hasta nueva fecha.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
