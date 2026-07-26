import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { LeadMagnetOptIn } from "@/components/home/lead-magnet-opt-in";
import { blogPosts } from "@/lib/content/posts";
import { canonical, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Recursos — guías de landings y conversión",
  description:
    "Artículos bottom-funnel sobre landings de conversión, precios, errores típicos y nichos (coaches, dentistas, abogados).",
  alternates: { canonical: canonical("/recursos") },
  openGraph: {
    title: "Recursos | Rulo.digital",
    description: "Guías para decidir, comparar y convertir con una landing express.",
    url: canonical("/recursos"),
    type: "website",
  },
};

function intentLabel(intent: (typeof blogPosts)[number]["intent"]): string {
  switch (intent) {
    case "consideration":
      return "Consideración";
    case "commercial":
      return "Comercial";
    case "top":
      return "Checklist";
    case "niche":
      return "Nicho";
    default: {
      const _exhaustive: never = intent;
      return _exhaustive;
    }
  }
}

export default function RecursosPage() {
  const sorted = [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  return (
    <div className="bg-white">
      <Breadcrumbs items={[{ name: "Recursos", path: "/recursos" }]} />
      <section className="border-b border-border bg-secondary/30 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">Recursos</h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Contenido orientado a decisión de compra: precios, estructuras por nicho y errores que
            matan leads. Cada pieza enlaza al Pack Express o a su landing de nicho.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <ul className="grid gap-4 md:grid-cols-2">
          {sorted.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/recursos/${post.slug}`}
                className="block h-full rounded-2xl border border-border bg-secondary/20 p-6 transition-colors hover:border-accent/40 hover:bg-secondary/40"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {intentLabel(post.intent)} · {post.readingMinutes} min
                </p>
                <h2 className="mt-2 font-heading text-lg font-semibold tracking-tight text-balance">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.description}</p>
                <p className="mt-4 text-xs font-semibold text-accent">Leer →</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div id="checklist">
        <LeadMagnetOptIn />
      </div>

      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 sm:pb-16">
        <p className="text-sm text-muted-foreground">
          ¿Prefieres ir directo a la oferta?{" "}
          <Link href={siteConfig.links.servicios} className="font-medium text-foreground underline">
            Ver Pack Express {siteConfig.offer.price} €
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
