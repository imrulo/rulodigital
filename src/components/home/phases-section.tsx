import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppHref } from "@/lib/site-config";

export function PhasesSection() {
  return (
    <section className="bg-secondary/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Fase 1 y Fase 2 (nichos)
            </h2>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Primero domino el patrón de conversión para servicios locales y profesionales. Luego lo
              escalo a nichos concretos con plantillas probadas (sin perder personalización donde
              importa).
            </p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold text-accent">Fase 1 — Ahora</p>
              <h3 className="mt-2 font-heading text-xl font-semibold">Negocios que viven de consultas</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Clínicas, talleres, agencias pequeñas, coaches, abogados, arquitectos… Si tu ingreso
                depende de que alguien te escriba, esto es para ti.
              </p>
            </div>
            <div className="rounded-2xl border border-dashed border-border bg-white/60 p-6">
              <p className="text-xs font-semibold text-muted-foreground">Fase 2 — Siguiente oleada</p>
              <h3 className="mt-2 font-heading text-xl font-semibold">Productos digitales + embudos</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Si ya captas leads, el siguiente paso es automatizar sin perder humanidad: páginas de
                aplicación, reservas, y seguimiento. Lo hablamos cuando la Fase 1 esté cerrada con
                resultados.
              </p>
              <Button asChild className="mt-4" variant="secondary">
                <a href={getWhatsAppHref("Hola Rulo, quiero saber si encajo en Fase 1 o 2")} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" />
                  Preguntar por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
