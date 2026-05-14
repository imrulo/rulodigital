import Link from "next/link";
import { CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CalendlyEmbed } from "@/components/home/calendly-embed";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { NicheContent } from "@/lib/niche-copy";
import { getBookingHref, siteConfig } from "@/lib/site-config";
import { faqJsonLd } from "@/lib/jsonld";

export function NicheLanding({ content }: { content: NicheContent }) {
  const faqItems = content.faq.map((f) => ({ question: f.question, answer: f.answer }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqItems)) }}
      />
      <section className="relative isolate overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary to-primary" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Badge className="bg-accent text-primary hover:bg-accent">Lanzamiento: {siteConfig.offer.headline}</Badge>
          <h1 className="mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
            {content.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-200 sm:text-lg">{content.sub}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="xl"
              className="shadow-[0_16px_60px_rgba(0,255,157,0.28)]"
            >
              <a href={getBookingHref()} target="_blank" rel="noreferrer">
                <CalendarClock className="size-5" aria-hidden />
                Reservar intro (Calendly)
              </a>
            </Button>
            <Button asChild size="xl" variant="secondary" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
              <Link href={siteConfig.links.home}>Volver a inicio</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">Qué resolvemos en tu página</h2>
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

      <section className="border-y border-border bg-secondary/30 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">Preguntas frecuentes</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {content.faq.map((f) => (
              <Card key={f.question} className="border-border bg-white">
                <CardHeader>
                  <CardTitle className="text-base font-semibold leading-snug">{f.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">Reserva</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Elige hueco en Calendly. Si tu URL aún no está configurada en producción, añade{" "}
            <code className="rounded bg-secondary px-1 py-0.5 font-mono text-xs">NEXT_PUBLIC_CALENDLY_URL</code> en Vercel.
          </p>
          <div className="mt-8">
            <CalendlyEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
