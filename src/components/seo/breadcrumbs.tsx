import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, type BreadcrumbItem } from "@/lib/jsonld";
import { siteConfig } from "@/lib/site-config";

type Crumb = { name: string; path: string };

/** Migas visuales + BreadcrumbList schema. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: BreadcrumbItem[] = [
    { name: "Inicio", path: siteConfig.links.home },
    ...items,
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(trail)} />
      <nav aria-label="Migas de pan" className="border-b border-border bg-secondary/20">
        <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-1.5 px-4 py-3 text-xs text-muted-foreground sm:px-6">
          {trail.map((item, i) => {
            const isLast = i === trail.length - 1;
            return (
              <li key={`${item.path}-${item.name}`} className="flex items-center gap-1.5">
                {i > 0 ? <span aria-hidden>/</span> : null}
                {isLast ? (
                  <span className="font-medium text-foreground" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="hover:text-foreground hover:underline">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
