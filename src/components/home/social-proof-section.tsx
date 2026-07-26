import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppHref, siteConfig } from "@/lib/site-config";

/**
 * Bloque de confianza sin testimonios inventados.
 * Cuando haya casos reales firmados, sustituir este contenido por citas verificables.
 */
export function SocialProofSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="prueba-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2
            id="prueba-heading"
            className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Confianza sin postureo
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            No publico métricas ni testimonios que no pueda respaldar. Lo que sí te garantizo es un
            proceso claro, precio cerrado y entrega orientada a que te escriban.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          <li className="rounded-2xl border border-border bg-secondary/30 p-5">
            <p className="text-sm font-semibold text-foreground">Proceso en 3 pasos</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Brief → construcción → publicación. Sabes qué pasa cada día.
            </p>
          </li>
          <li className="rounded-2xl border border-border bg-secondary/30 p-5">
            <p className="text-sm font-semibold text-foreground">Precio transparente</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.offer.headline}. Sin presupuestos hinchados “a medida”.
            </p>
          </li>
          <li className="rounded-2xl border border-border bg-secondary/30 p-5">
            <p className="text-sm font-semibold text-foreground">Canal humano</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              WhatsApp o formulario. Respuesta directa, sin embudo eterno.
            </p>
          </li>
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg">
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
          <Button asChild size="lg" variant="secondary">
            <Link href={siteConfig.links.ejemplos}>Ver enfoque en ejemplos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
