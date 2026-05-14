import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CalendlyEmbed } from "@/components/home/calendly-embed";
import { ContactForm } from "@/components/contact/contact-form";
import { getWhatsAppHref, getTelegramHref, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contacto — WhatsApp / Calendly",
  description:
    "Reserva en Calendly o escribe por WhatsApp. Respuesta rápida, sin formularios eternos (pero si quieres dejar datos, también puedes).",
  alternates: { canonical: siteConfig.links.contacto },
  openGraph: {
    title: "Contacto · rulo.digital",
    description: "WhatsApp + Calendly. Elige el canal con menos fricción para ti.",
    url: `${siteConfig.url}${siteConfig.links.contacto}`,
    type: "website",
  },
};

export default function ContactoPage() {
  const tg = getTelegramHref();

  return (
    <div className="bg-white">
      <section className="border-b border-border bg-secondary/30 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">Contacto</h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Si quieres tu landing en 48 horas, no mandes un “hola”. Dime qué vendes y qué ciudad eres.
            Si prefieres calendario, reserva abajo. Si quieres velocidad absoluta: WhatsApp.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="xl">
              <a href={getWhatsAppHref()} target="_blank" rel="noreferrer">
                <MessageCircle className="size-5" />
                WhatsApp (recomendado)
              </a>
            </Button>
            {tg ? (
              <Button asChild size="xl" variant="secondary">
                <a href={tg} target="_blank" rel="noreferrer">
                  Telegram
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-heading text-2xl font-semibold">Formulario (opcional)</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Si te va mejor escribir con calma, adelante. Al enviar, te doy el atajo a WhatsApp con
              el texto ya montado.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-semibold">Calendly</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Perfecto si necesitas una ventana cerrada. Si el embed no aparece, configura la URL en
              Vercel.
            </p>
            <div className="mt-6">
              <CalendlyEmbed />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
