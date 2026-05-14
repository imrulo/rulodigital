import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getWhatsAppHref, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Sobre mí — confianza sin postureo",
  description:
    "Quién está detrás de rulo.digital, cómo trabajo, y por qué priorizo conversión y velocidad por encima del ruido.",
  alternates: { canonical: siteConfig.links.sobre },
  openGraph: {
    title: "Sobre mí · rulo.digital",
    description:
      "Breve, personal y directo: trabajo para que escriban clientes, no para inflar egos con sliders.",
    url: `${siteConfig.url}${siteConfig.links.sobre}`,
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
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=70"
                alt="Retrato placeholder del profesional detrás de rulo.digital"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 40vw"
                priority
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Imagen placeholder: sustituye por tu foto real (misma energía: cercana, profesional).
            </p>
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
              <p>
                {siteConfig.tagline}
              </p>
            </div>

            <Separator className="my-10" />

            <div className="rounded-2xl border border-border bg-secondary/30 p-6">
              <p className="text-sm font-semibold text-foreground">Si quieres trabajar juntos</p>
              <p className="mt-2 text-sm text-muted-foreground">
                El mejor filtro es el WhatsApp: 20 segundos y sabemos si es real.
              </p>
              <Button asChild className="mt-4" size="lg">
                <a href={getWhatsAppHref()} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-5" />
                  Escribirme ahora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
