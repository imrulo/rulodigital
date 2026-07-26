import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact/contact-form";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { canonical, getTelegramHref, getWhatsAppHref, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contacto — WhatsApp y formulario",
  description:
    "Escríbeme por WhatsApp o deja tus datos en el formulario. Respuesta humana, sin rodeos, pensada para avanzar rápido.",
  alternates: { canonical: canonical(siteConfig.links.contacto) },
  openGraph: {
    title: "Contacto | Rulo.digital",
    description: "WhatsApp, email y formulario. Elige el canal que te resulte más natural.",
    url: canonical(siteConfig.links.contacto),
    type: "website",
  },
};

export default function ContactoPage() {
  const tg = getTelegramHref();

  return (
    <div className="bg-white">
      <Breadcrumbs items={[{ name: "Contacto", path: siteConfig.links.contacto }]} />
      <section className="border-b border-border bg-secondary/30 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">Contacto</h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Cuéntame qué vendes y en qué ciudad trabajas. Si mandas un “hola” vacío, no sabré ayudarte:
            un par de líneas ya marcan la diferencia entre perder el tiempo y cerrar una semana con
            consultas nuevas.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Email:{" "}
            <a
              className="font-semibold text-foreground underline-offset-4 hover:underline"
              href={`mailto:${siteConfig.contactEmail}`}
            >
              {siteConfig.contactEmail}
            </a>
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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
            {tg ? (
              <Button asChild size="xl" variant="secondary">
                <a href={tg} target="_blank" rel="noreferrer" aria-label="Abrir Telegram">
                  Telegram
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div id="formulario" className="max-w-xl scroll-mt-24">
          <h2 className="font-heading text-2xl font-semibold">Formulario (opcional)</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Si prefieres dejarlo por escrito con calma, perfecto. Te respondo con el siguiente paso claro
            para que tengas una landing que trabaje por ti.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
