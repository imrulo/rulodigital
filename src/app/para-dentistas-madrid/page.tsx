import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { LeadMagnetOptIn } from "@/components/home/lead-magnet-opt-in";
import { faqJsonLd, productJsonLd } from "@/lib/jsonld";
import { canonical, getWhatsAppHref, siteConfig } from "@/lib/site-config";

const path = "/para-dentistas-madrid";

const faq = [
  {
    question: "¿Sirve si ya tengo web de la clínica en Madrid?",
    answer:
      "Sí. Muchas clínicas mantienen la web institucional y usan una landing para campañas o búsquedas de cita/urgencia. El objetivo es una sola acción: escribir o llamar.",
  },
  {
    question: "¿Incluye SEO local para Madrid?",
    answer:
      "Incluye base on-page (título, H1, mensajes con ciudad/servicio). La ficha de Google Business Profile y reseñas las alineamos contigo si aportan confianza.",
  },
  {
    question: "¿Cuánto tarda?",
    answer:
      "Pack Express: 48 horas hábiles tras brief completo y pago, con garantía de plazo (devolución si el retraso es imputable).",
  },
];

export const metadata: Metadata = {
  title: "Landing para dentistas en Madrid | Citas en 48h — 397 €",
  description:
    "Landing de conversión para clínicas dentales en Madrid: servicios claros, WhatsApp/cita y SEO local base. Pack Express 397 €.",
  alternates: { canonical: canonical(path) },
  openGraph: {
    title: "Landing para dentistas en Madrid | Rulo.digital",
    description:
      "Página orientada a citas para clínicas en Madrid. Entrega express 48h. Precio lanzamiento 397 €.",
    url: canonical(path),
    type: "website",
  },
};

export default function ParaDentistasMadridPage() {
  const wa = getWhatsAppHref(
    "Hola Rulo, tengo clínica dental en Madrid y quiero mi landing en 48h",
  );

  return (
    <div className="bg-white">
      <JsonLd data={productJsonLd()} />
      <JsonLd
        data={faqJsonLd(faq.map((f) => ({ question: f.question, answer: f.answer })))}
      />
      <Breadcrumbs
        items={[
          { name: "Para dentistas", path: siteConfig.links.paraDentistas },
          { name: "Madrid", path },
        ]}
      />

      <section className="relative isolate overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary to-primary" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold text-accent">Madrid · Pack Express</p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
            Landing para dentistas en Madrid que convierte búsquedas en citas
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-200 sm:text-lg">
            Quien busca “dentista Madrid” o una urgencia decide en segundos. Te dejo una página clara,
            con CTA a WhatsApp o cita, SEO local base y entrega en 48h hábiles —{" "}
            {siteConfig.offer.price} € (lanzamiento).
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="xl">
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
              <Link href={siteConfig.links.paraDentistas}>Ver landing general dentistas</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
          Qué incluye para clínicas en Madrid
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            "Mensaje orientado a cita (no catálogo eterno).",
            "Bloque de confianza: equipo, clínica, reseñas si las tienes.",
            "CTA móvil a un toque (WhatsApp / llamar / formulario).",
            "On-page local: dentista + Madrid sin spam de keywords.",
          ].map((b) => (
            <li
              key={b}
              className="rounded-2xl border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground"
            >
              {b}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted-foreground">
          Más detalle del pack y garantía de plazo en{" "}
          <Link href={siteConfig.links.servicios} className="font-medium text-foreground underline">
            Servicios
          </Link>
          . Guía relacionada:{" "}
          <Link
            href="/recursos/landing-vs-web-clinicas-dentales"
            className="font-medium text-foreground underline"
          >
            Landing vs web para clínicas
          </Link>
          .
        </p>
      </section>

      <section className="border-y border-border bg-secondary/30 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-semibold">Preguntas frecuentes</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {faq.map((f) => (
              <div key={f.question} className="rounded-2xl border border-border bg-white p-5">
                <p className="text-sm font-semibold">{f.question}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadMagnetOptIn defaultMagnet="dentistas" />
    </div>
  );
}
