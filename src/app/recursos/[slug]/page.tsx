import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/content/article-body";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { blogPosts, getPostBySlug } from "@/lib/content/posts";
import { articleJsonLd } from "@/lib/jsonld";
import { canonical } from "@/lib/site-config";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Recurso no encontrado" };

  const path = `/recursos/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: canonical(path) },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonical(path),
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function RecursoArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const path = `/recursos/${post.slug}`;

  return (
    <div className="bg-white">
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.description,
          path,
          publishedAt: post.publishedAt,
        })}
      />
      <Breadcrumbs
        items={[
          { name: "Recursos", path: "/recursos" },
          { name: post.title, path },
        ]}
      />
      <ArticleBody post={post} />
    </div>
  );
}
