import { siteConfig, getBookingHref } from "@/lib/site-config";
import { getCalendlyEmbedSrc } from "@/lib/booking";
import { Button } from "@/components/ui/button";
import { CalendarClock, Mail } from "lucide-react";

export function CalendlyEmbed({ className }: { className?: string }) {
  const embedUrl = getCalendlyEmbedSrc();

  if (!embedUrl) {
    return (
      <div
        className={
          className ?? "rounded-2xl border border-border bg-secondary/40 p-6 sm:p-8"
        }
      >
        <div className="flex items-start gap-3">
          <CalendarClock className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">Calendly: configura tu URL pública</p>
            <p>
              Añade <code className="rounded bg-white/80 px-1 py-0.5 font-mono text-[11px] text-foreground">NEXT_PUBLIC_CALENDLY_URL</code>{" "}
              en Vercel con tu enlace de Calendly para ver el calendario embebido aquí.
            </p>
            <p>
              Mientras tanto: reserva desde el enlace directo (si ya lo tienes) o escribe a{" "}
              <a
                className="font-medium text-accent underline underline-offset-2 hover:opacity-90"
                href={`mailto:${siteConfig.contactEmail}`}
              >
                {siteConfig.contactEmail}
              </a>
              . Para chat instantáneo usa el botón flotante de WhatsApp.
            </p>
            <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg">
                <a
                  href={getBookingHref()}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir página de reserva (Calendly o contacto)"
                >
                  <CalendarClock className="size-4" aria-hidden />
                  Intentar abrir reservas
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={`mailto:${siteConfig.contactEmail}`} aria-label={`Enviar email a ${siteConfig.contactEmail}`}>
                  <Mail className="size-4" aria-hidden />
                  Escribir por email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <iframe
        title="Calendly: reservar una llamada con Rulo.digital"
        src={embedUrl}
        className="h-[720px] w-full rounded-2xl border border-border bg-white"
        loading="lazy"
      />
    </div>
  );
}
