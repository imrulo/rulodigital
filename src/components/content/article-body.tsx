import type { BlogPost } from "@/lib/content/posts";
import { ArticleCta } from "@/components/content/article-cta";
import Link from "next/link";

function intentLabel(intent: BlogPost["intent"]): string {
  switch (intent) {
    case "commercial":
      return "Comercial";
    case "niche":
      return "Nicho";
    case "top":
      return "Checklist";
    case "consideration":
      return "Consideración";
    default: {
      const _exhaustive: never = intent;
      return _exhaustive;
    }
  }
}

export function ArticleBody({ post }: { post: BlogPost }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="border-b border-border pb-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent">
          {intentLabel(post.intent)} · {post.readingMinutes} min
        </p>
        <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">{post.description}</p>
        <p className="mt-3 text-xs text-muted-foreground">
          Publicado el{" "}
          {new Date(post.publishedAt).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </header>

      <div className="mt-10 space-y-10">
        {post.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
              {section.heading}
            </h2>
            {section.paragraphs.map((p, i) => (
              <p
                key={`${section.heading}-${i}`}
                className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
              >
                {p}
              </p>
            ))}
            {section.bullets?.length ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground sm:text-base">
                {section.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>

      <div className="mt-12">
        <ArticleCta
          primaryLabel={post.ctaPrimary.label}
          primaryHref={post.ctaPrimary.href}
          waMessage={post.ctaPrimary.waMessage}
          secondaryLabel={post.ctaSecondary?.label}
          secondaryHref={post.ctaSecondary?.href}
        />
      </div>

      {post.related.length ? (
        <aside className="mt-10 border-t border-border pt-8" aria-label="Enlaces relacionados">
          <p className="text-sm font-semibold text-foreground">Sigue leyendo / enlaces útiles</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {post.related.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="inline-flex rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs font-medium hover:border-accent/40"
                >
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}
    </article>
  );
}
