import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getWhatsAppHref, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Ejemplos — casos (antes/después mental)",
  description:
    "Portfolio orientado a conversión: ejemplos de estructura, claridad y captación. Si quieres el tuyo en 48h, escribe por WhatsApp.",
  alternates: { canonical: siteConfig.links.ejemplos },
  openGraph: {
    title: "Ejemplos — portfolio · rulo.digital",
    description:
      "Casos y ejemplos de landings enfocadas a clientes (no a “premios de diseño”).",
    url: `${siteConfig.url}${siteConfig.links.ejemplos}`,
    type: "website",
  },
};

const cases = [
  {
    title: "Servicio local: de visitas a WhatsApp",
    desc: "Reordené la página para que el usuario entienda el beneficio en 3 segundos y escriba. CTA único, prueba social arriba, y formulario corto.",
    img: "https://images.unsplash.com/photo-1504384308090-c54be3855468?auto=format&fit=crop&w=1400&q=70",
  },
  {
    title: "Profesional: mensaje confuso → oferta binaria",
    desc: "Menos párrafos, más decisión: qué problema resuelves, para quién, y qué hacer ahora. Resultado: más conversaciones con menos “curiosos”.",
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f556d?auto=format&fit=crop&w=1400&q=70",
  },
  {
    title: "Captación rápida: lead magnet + CTA",
    desc: "Checklist + WhatsApp como atajo. La gente descarga, pero si está caliente, contacta al momento (que es donde está el dinero).",
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
              <a href={getWhatsAppHref()} target="_blank" rel="noreferrer">
                <MessageCircle className="size-5" />
                Quiero mi caso en 48h
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <Card key={c.title} className="overflow-hidden">
              <div className="relative aspect-[16/11]">
                <Image
                  src={c.img}
                  alt=""
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-heading text-lg">{c.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-secondary/30 p-6 sm:p-8">
          <p className="text-sm text-muted-foreground">
            ¿Quieres ver un demo real en vivo? En WhatsApp te digo si tu caso encaja en{" "}
            <span className="font-semibold text-foreground">48 horas</span> y qué necesito para
            arrancar hoy.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href={getWhatsAppHref()} target="_blank" rel="noreferrer">
                Hablar por WhatsApp
              </a>
            </Button>
            <Button asChild variant="secondary">
              <Link href={siteConfig.links.contacto}>Reservar llamada</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
