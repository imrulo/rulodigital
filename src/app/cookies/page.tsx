import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal/legal-page-shell";
import { cookiesHtml } from "@/legal/bodies/cookies";
import { canonical, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Política de cookies de rulo.digital.",
  alternates: { canonical: canonical(siteConfig.links.cookies) },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Política de cookies | Rulo.digital",
    url: canonical(siteConfig.links.cookies),
    type: "article",
  },
};

export default function CookiesPage() {
  return (
    <LegalPageShell title="Política de cookies" updated="14 de mayo de 2026">
      <div dangerouslySetInnerHTML={{ __html: cookiesHtml }} />
    </LegalPageShell>
  );
}
