import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { canonical, getWhatsAppHref, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Ejemplos — casos (antes/después mental)",
  description:
    "Portfolio orientado a conversión: ejemplos de estructura, claridad y captación. Escríbeme y vemos tu caso.",
  alternates: { canonical: canonical(siteConfig.links.ejemplos) },
  openGraph: {
    title: "Ejemplos — portfolio | Rulo.digital",
    description:
      "Casos y ejemplos de landings enfocadas a clientes (no a “premios de diseño”).",
    url: canonical(siteConfig.links.ejemplos),
    type: "website",
  },
};

const cases = [
  {
    eyebrow: "Servicio local",
    title: "De visitas a conversación",
    desc: "Reordené la página para que el usuario entienda el beneficio en 3 segundos y escriba. CTA único, prueba social arriba y formulario corto.",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=70",
  },
  {
    eyebrow: "Profesional independiente",
    title: "De mensaje confuso a oferta binaria",
    desc: "Menos párrafos, más decisión: qué problema resuelves, para quién y qué hacer ahora. Más conversaciones con menos “curiosos”.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=70",
  },
  {
    eyebrow: "Captación",
    title: "Lead magnet + CTA",
    desc: "Checklist + contacto como atajo. La gente descarga, pero si está caliente, escribe al momento: ahí está el valor.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=70",
  },
] as const;

export default function EjemplosPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-border bg-secondary/30 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">Ejemplos</h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Esto no es un portfolio “bonito”. Es una demostración de criterio: prioridades, foco, y
            conversión. Cuando trabajemos juntos, tu caso será tan claro como estos — pero con tu
            oferta y tu prueba social.
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

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <Card key={`${c.eyebrow}-${c.title}`} className="flex flex-col overflow-hidden pt-0">
              <CardHeader className="pb-3 pt-6">
                <CardDescription className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {c.eyebrow}
                </CardDescription>
                <CardTitle className="font-heading text-lg leading-snug tracking-tight text-balance">
                  {c.title}
                </CardTitle>
              </CardHeader>
              <div className="relative mx-0 aspect-[16/10] bg-muted">
                <Image
                  src={c.img}
                  alt=""
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover"
                  aria-hidden
                />
              </div>
              <CardContent className="flex flex-1 flex-col pb-6 pt-4">
                <p className="text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-secondary/30 p-6 sm:p-8">
          <p className="text-sm text-muted-foreground">
            ¿Quieres ver un demo real en vivo? Escríbeme por WhatsApp y te digo encaje, alcance y qué
            necesito para arrancar.
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
              <Link href={siteConfig.links.contacto} aria-label="Ir al formulario de contacto">
                Ir a contacto
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
