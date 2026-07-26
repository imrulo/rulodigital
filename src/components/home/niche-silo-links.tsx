import Link from "next/link";
import { allNiches } from "@/lib/niche-copy";
import { siteConfig } from "@/lib/site-config";

/** Enlaces internos del silo comercial (home → nichos → oferta). */
export function NicheSiloLinks() {
  return (
    <section className="border-y border-border bg-white py-12" aria-labelledby="nichos-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="nichos-heading" className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
          Landings por perfil
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Elige tu nicho: mismo Pack Express ({siteConfig.offer.price} € / 48h), mensaje adaptado.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {allNiches.map((n) => (
            <li key={n.key}>
              <Link
                href={n.path}
                className="block rounded-2xl border border-border bg-secondary/30 p-5 transition-colors hover:border-accent/40 hover:bg-secondary/50"
              >
                <p className="text-sm font-semibold text-foreground">{n.breadcrumbLabel}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {n.sub}
                </p>
                <p className="mt-3 text-xs font-semibold text-accent">Ver landing →</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
