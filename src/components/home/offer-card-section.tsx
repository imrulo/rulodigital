import { Check, CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getBookingHref, siteConfig } from "@/lib/site-config";

const bullets = [
  "Landing de alta conversión (mobile-first)",
  "CTA principal a Calendly + WhatsApp flotante (un solo chat)",
  "Formulario + microcopy anti-fantasmas",
  "SEO técnico base + velocidad extrema",
  "Señales de confianza + prueba social (la tuya)",
];

export function OfferCardSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Servicio / oferta principal
            </h2>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              No compres una web. Compra un sistema que te traiga conversaciones. Esta oferta está
              pensada para negocios y profesionales que necesitan clientes ya — no “presencia
              digital”.
            </p>
            <div className="mt-6 rounded-2xl border border-border bg-secondary/30 p-5 text-sm text-muted-foreground">
              Si quieres ordenar prioridades, reserva una intro corta en Calendly. Si ya lo tienes
              claro, el chat flotante también está disponible.
            </div>
          </div>

          <Card className="border-border shadow-[0_18px_80px_rgba(0,0,0,0.08)]">
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <CardTitle className="font-heading text-2xl">Pack Express — Lanzamiento</CardTitle>
                <Badge>{siteConfig.offer.headline}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Precio transparente. Entrega clara. Enfoque: conversión.
              </p>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex items-end gap-2">
                <p className="font-heading text-5xl font-semibold">397 €</p>
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
              <Button asChild size="xl" className="w-full">
                <a
                  href={getBookingHref()}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Reservar la oferta de lanzamiento en Calendly"
                >
                  <CalendarClock className="size-5" aria-hidden />
                  Reservar con Calendly
                </a>
              </Button>
              <p className="text-xs text-muted-foreground">
                Plazas limitadas a {siteConfig.offer.slotsTotal}. Si entras tarde, el precio sube
                o se cierra hasta nueva fecha.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
