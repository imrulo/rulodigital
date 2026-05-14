import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal/legal-page-shell";
import { reembolsosHtml } from "@/legal/bodies/reembolsos";
import { canonical, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de reembolsos",
  description: "Política de reembolsos de rulo.digital.",
  alternates: { canonical: canonical(siteConfig.links.reembolsos) },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Política de reembolsos | Rulo.digital",
    url: canonical(siteConfig.links.reembolsos),
    type: "article",
  },
};

export default function ReembolsosPage() {
  return (
    <LegalPageShell title="Política de reembolsos" updated="14 de mayo de 2026">
      <div dangerouslySetInnerHTML={{ __html: reembolsosHtml }} />
    </LegalPageShell>
  );
}
