import { CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBookingHref, siteConfig } from "@/lib/site-config";

export function FinalCtaSection() {
  return (
    <section className="bg-primary py-16 text-white sm:py-20" aria-labelledby="final-cta-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-8 sm:p-12">
          <h2
            id="final-cta-heading"
            className="max-w-3xl font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Si has llegado hasta aquí, ya sabes si lo necesitas.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-neutral-200 sm:text-lg">
            No te voy a marear con “estrategia digital”. Esto es simple: una landing + captación con
            plazo express y{" "}
            <span className="font-semibold text-accent">{siteConfig.offer.headline}</span>. El
            siguiente paso es reservar una intro en Calendly (o el chat flotante si prefieres ir
            directo).
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="xl" className="shadow-[0_18px_70px_rgba(0,255,157,0.25)]">
              <a
                href={getBookingHref()}
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir Calendly para reservar intro final"
              >
                <CalendarClock className="size-5" aria-hidden />
                Reservar intro (Calendly)
              </a>
            </Button>
            <p className="text-xs text-neutral-300 sm:max-w-sm">
              Si eres de los que piensa demasiado: piensa esto — cada día sin sistema, estás regalando
              clientes a quien sí lo tenga claro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
