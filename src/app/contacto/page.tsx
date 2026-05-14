import type { Metadata } from "next";
import { CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CalendlyEmbed } from "@/components/home/calendly-embed";
import { ContactForm } from "@/components/contact/contact-form";
import { canonical, getBookingHref, getTelegramHref, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contacto — Calendly + formulario",
  description:
    "Reserva en Calendly o deja datos en el formulario. También puedes usar el WhatsApp flotante para ir directo al chat.",
  alternates: { canonical: canonical(siteConfig.links.contacto) },
  openGraph: {
    title: "Contacto | Rulo.digital",
    description: "Calendly + formulario + email. Elige el canal con menos fricción para ti.",
    url: canonical(siteConfig.links.contacto),
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
            No mandes un “hola” vacío: dime qué vendes y en qué ciudad operas. Si prefieres calendario,
            reserva abajo. Si quieres chat directo, usa el botón flotante de WhatsApp.
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
                href={getBookingHref()}
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir Calendly para reservar desde contacto"
              >
                <CalendarClock className="size-5" aria-hidden />
                Reservar (Calendly)
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

      <section id="reserva" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-heading text-2xl font-semibold">Formulario (opcional)</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Si te va mejor escribir con calma, adelante. Al enviar, te propongo reservar en Calendly para
              cerrar el siguiente paso.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-semibold">Calendly</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Integración real por URL pública. Configura{" "}
              <code className="rounded bg-secondary px-1 py-0.5 font-mono text-xs">NEXT_PUBLIC_CALENDLY_URL</code>{" "}
              en Vercel para ver el embed aquí.
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
