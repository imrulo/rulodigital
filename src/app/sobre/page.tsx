import type { Metadata } from "next";
import Image from "next/image";
import { CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { canonical, getBookingHref, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Sobre mí — confianza sin postureo",
  description:
    "Quién está detrás de rulo.digital, cómo trabajo, y por qué priorizo conversión y velocidad por encima del ruido.",
  alternates: { canonical: canonical(siteConfig.links.sobre) },
  openGraph: {
    title: "Sobre mí | Rulo.digital",
    description:
      "Breve, personal y directo: trabajo para que escriban clientes, no para inflar egos con sliders.",
    url: canonical(siteConfig.links.sobre),
    type: "profile",
  },
};

export default function SobrePage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-secondary">
              <Image
                src={siteConfig.aboutPortraitUrl}
                alt="Retrato de Rulo, fundador de Rulo.digital, en entorno profesional"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">Sobre mí</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Soy Rulo. Construyo sistemas digitales simples que hacen una sola cosa muy bien: que la
              gente correcta te escriba.
            </p>

            <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                He visto demasiadas webs “perfectas” que no venden ni un café. También he visto
                páginas feas que facturan porque dicen la verdad en el orden correcto. Yo me quedo
                con lo segundo… pero sin renunciar a un diseño limpio que respalde confianza.
              </p>
              <p>
                Mi forma de trabajar es directa: te hago preguntas incómodas al principio para que no
                pagues incertidumbre después. Si no encajamos, te lo digo. Si encajamos, te entrego
                rapidez y claridad — porque la oportunidad tiene fecha de caducidad.
              </p>
              <p>{siteConfig.tagline}</p>
            </div>

            <Separator className="my-10" />

            <div className="rounded-2xl border border-border bg-secondary/30 p-6">
              <p className="text-sm font-semibold text-foreground">Si quieres trabajar juntos</p>
              <p className="mt-2 text-sm text-muted-foreground">
                El mejor filtro es una intro corta en Calendly: agenda, contexto y decisión sin perder
                días en buzones.
              </p>
              <Button asChild className="mt-4" size="lg">
                <a
                  href={getBookingHref()}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Reservar intro con Rulo en Calendly"
                >
                  <CalendarClock className="size-5" aria-hidden />
                  Reservar intro (Calendly)
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
