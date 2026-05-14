import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal/legal-page-shell";
import { terminosHtml } from "@/legal/bodies/terminos";
import { canonical, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Términos y condiciones de uso de rulo.digital.",
  alternates: { canonical: canonical(siteConfig.links.terminos) },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Términos y condiciones | Rulo.digital",
    url: canonical(siteConfig.links.terminos),
    type: "article",
  },
};

export default function TerminosPage() {
  return (
    <LegalPageShell title="Términos y condiciones" updated="14 de mayo de 2026">
      <div dangerouslySetInnerHTML={{ __html: terminosHtml }} />
    </LegalPageShell>
  );
}
