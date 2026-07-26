import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BeforeAfterGrid } from "@/components/home/before-after-grid";
import { caseStudies } from "@/lib/case-studies";
import { canonical, getWhatsAppHref, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Ejemplos — patrones de conversión por nicho",
  description:
    "Casos y estructuras de landing para coaches, dentistas y abogados. Criterio de conversión, no portfolio de postureo.",
  alternates: { canonical: canonical(siteConfig.links.ejemplos) },
  openGraph: {
    title: "Ejemplos — portfolio | Rulo.digital",
    description:
      "Patrones de conversión por nicho: problema, cambio y siguiente paso claro.",
    url: canonical(siteConfig.links.ejemplos),
    type: "website",
  },
};

export default function EjemplosPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-border bg-secondary/30 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">Ejemplos</h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Patrones de conversión por nicho: qué fallaba, qué cambiamos y qué acción pedimos. Cuando
            tengamos URLs de clientes publicadas con permiso, las sustituiremos aquí con métricas
            reales.
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
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16" aria-labelledby="casos-heading">
        <h2 id="casos-heading" className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
          Casos por nicho
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Cada patrón enlaza a su landing de nicho y a un WhatsApp con mensaje prellenado.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {caseStudies.map((c) => (
            <Card key={c.title} className="flex flex-col overflow-hidden pt-0">
              <CardHeader className="pb-3 pt-6">
                <CardDescription className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {c.niche}
                </CardDescription>
                <CardTitle className="font-heading text-lg leading-snug tracking-tight text-balance">
                  {c.title}
                </CardTitle>
              </CardHeader>
              <div className="relative mx-0 aspect-[16/10] bg-muted">
                <Image
                  src={c.img}
                  alt={`Ejemplo visual — ${c.niche}`}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardContent className="flex flex-1 flex-col gap-3 pb-6 pt-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">Problema: </span>
                  {c.problem}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">Cambio: </span>
                  {c.change}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">Resultado esperado: </span>
                  {c.outcome}
                </p>
                <div className="mt-auto flex flex-col gap-2 pt-2">
                  <Button asChild size="lg" className="w-full">
                    <a
                      href={getWhatsAppHref(c.waMessage)}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`WhatsApp — caso ${c.niche}`}
                    >
                      <MessageCircle className="size-4" aria-hidden />
                      Quiero este enfoque
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="secondary" className="w-full">
                    <Link href={c.nichePath}>Ver landing {c.niche.toLowerCase()}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <BeforeAfterGrid />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="rounded-2xl border border-border bg-secondary/30 p-6 sm:p-8">
          <p className="text-sm text-muted-foreground sm:text-base">
            ¿Tu sector no está listado? El patrón es el mismo: mensaje claro, prueba y un solo
            siguiente paso. Escríbeme y lo adaptamos.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a
                href={getWhatsAppHref()}
                target="_blank"
                rel="noreferrer"
                aria-label={siteConfig.cta.primaryAria}
              >
                <MessageCircle className="size-4" aria-hidden />
                {siteConfig.cta.primaryLabel}
              </a>
            </Button>
            <Button asChild variant="secondary">
              <Link href={siteConfig.links.contacto}>{siteConfig.cta.secondaryLabel}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
