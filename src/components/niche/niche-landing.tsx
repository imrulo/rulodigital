import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { LeadMagnetOptIn } from "@/components/home/lead-magnet-opt-in";
import type { NicheContent } from "@/lib/niche-copy";
import { contactFormPath, getWhatsAppHref, siteConfig } from "@/lib/site-config";
import { faqJsonLd, productJsonLd } from "@/lib/jsonld";

export function NicheLanding({ content }: { content: NicheContent }) {
  const faqItems = content.faq.map((f) => ({ question: f.question, answer: f.answer }));
  const wa = getWhatsAppHref(content.waMessage);

  return (
    <>
      <JsonLd data={faqJsonLd(faqItems)} />
      <JsonLd data={productJsonLd()} />
      <Breadcrumbs items={[{ name: content.breadcrumbLabel, path: content.path }]} />

      <section className="relative isolate overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary to-primary" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Badge className="bg-accent text-primary hover:bg-accent">
            Lanzamiento: {siteConfig.offer.headline}
          </Badge>
          <h1 className="mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
            {content.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-200 sm:text-lg">
            {content.sub}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="xl"
              className="shadow-[0_16px_60px_rgba(0,255,157,0.28)]"
            >
              <a href={wa} target="_blank" rel="noreferrer" aria-label={siteConfig.cta.primaryAria}>
                <MessageCircle className="size-5" aria-hidden />
                {siteConfig.cta.primaryLabel}
              </a>
            </Button>
            <Button
              asChild
              size="xl"
              variant="secondary"
              className="border-white/20 bg-white/10 text-white hover:bg-white/20"
            >
              <Link href={contactFormPath()}>{siteConfig.cta.secondaryLabel}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
            Qué resolvemos en tu página
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {content.bullets.map((b) => (
              <li
                key={b}
                className="rounded-2xl border border-border bg-secondary/30 px-4 py-3 text-sm leading-relaxed text-foreground sm:text-base"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="border-y border-border bg-secondary/30 py-10"
        aria-label="Enlaces del silo"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:px-6">
          <p className="text-sm font-semibold text-foreground">Sigue explorando:</p>
          <Link
            href={siteConfig.links.servicios}
            className="text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            Pack Express {siteConfig.offer.price} €
          </Link>
          <Link
            href={siteConfig.links.ejemplos}
            className="text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            Ejemplos de conversión
          </Link>
          <Link
            href={siteConfig.links.contacto}
            className="text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            Contacto
          </Link>
          <Link
            href={`${siteConfig.links.home}#oferta`}
            className="text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            Ver oferta en inicio
          </Link>
          <Link
            href={siteConfig.links.recursos}
            className="text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            Recursos / guías
          </Link>
          {content.key === "dentistas" ? (
            <Link
              href={siteConfig.links.paraDentistasMadrid}
              className="text-sm font-medium text-accent underline-offset-4 hover:underline"
            >
              Dentistas Madrid
            </Link>
          ) : null}
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
            Preguntas frecuentes
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {content.faq.map((f) => (
              <Card key={f.question} className="border-border bg-white">
                <CardHeader>
                  <CardTitle className="text-base font-semibold leading-snug">{f.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <LeadMagnetOptIn defaultMagnet={content.key} />

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
            Siguiente paso
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Te entrego un proyecto listo para generar conversaciones: mensaje claro, prueba y un
            camino simple hacia el contacto. Pack Express a {siteConfig.offer.price} € con garantía
            de plazo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="xl">
              <a href={wa} target="_blank" rel="noreferrer" aria-label={siteConfig.cta.primaryAria}>
                <MessageCircle className="size-5" aria-hidden />
                {siteConfig.cta.primaryLabel}
              </a>
            </Button>
            <Button asChild size="xl" variant="secondary">
              <Link href={contactFormPath()}>{siteConfig.cta.secondaryLabel}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
