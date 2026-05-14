import { siteConfig, getWhatsAppHref } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { CalendarClock, Mail, MessageCircle } from "lucide-react";

export function CalendlyEmbed({ className }: { className?: string }) {
  const url = siteConfig.calendlyUrl.trim();
  if (!url) {
    return (
      <div
        className={
          className ??
          "rounded-2xl border border-border bg-secondary/40 p-6 sm:p-8"
        }
      >
        <div className="flex items-start gap-3">
          <CalendarClock className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">
              Agenda en línea: en breve activo aquí mismo
            </p>
            <p>
              Estoy enlazando Calendly para que reserves sin fricción. Cuando esté listo, verás el
              calendario embebido en esta misma zona.
            </p>
            <p>
              Mientras tanto, lo más rápido es{" "}
              <span className="font-medium text-foreground">WhatsApp</span> (botón flotante abajo a
              la derecha) o un email a{" "}
              <a
                className="font-medium text-accent underline underline-offset-2 hover:opacity-90"
                href={`mailto:${siteConfig.contactEmail}`}
              >
                {siteConfig.contactEmail}
              </a>
              .
            </p>
            <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg">
                <a href={getWhatsAppHref()} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" />
                  Hablar por WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={`mailto:${siteConfig.contactEmail}`}>
                  <Mail className="size-4" />
                  Escribir por email
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Si gestionas el deploy: variable{" "}
              <code className="rounded bg-white/80 px-1 py-0.5 font-mono text-[11px] text-foreground">
                NEXT_PUBLIC_CALENDLY_URL
              </code>{" "}
              en Vercel (valor = tu enlace público de Calendly).
            </p>
          </div>
        </div>
      </div>
    );
  }

  const embedUrl = (() => {
    try {
      const u = new URL(url);
      u.searchParams.set("embed_domain", "1");
      if (!u.searchParams.has("embed")) u.searchParams.set("embed", "true");
      return u.toString();
    } catch {
      const joiner = url.includes("?") ? "&" : "?";
      return `${url}${joiner}embed=true&embed_domain=1`;
    }
  })();

  return (
    <div className={className}>
      <iframe
        title="Reserva una llamada"
        src={embedUrl}
        className="h-[720px] w-full rounded-2xl border border-border bg-white"
        loading="lazy"
      />
    </div>
  );
}
