import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal/legal-page-shell";
import { buildAvisoLegalHtml } from "@/legal/bodies/aviso-legal";
import { canonical, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Aviso legal de rulo.digital.",
  alternates: { canonical: canonical(siteConfig.links.avisoLegal) },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Aviso legal | Rulo.digital",
    url: canonical(siteConfig.links.avisoLegal),
    type: "article",
  },
};

export default function AvisoLegalPage() {
  return (
    <LegalPageShell title="Aviso legal" updated="26 de julio de 2026">
      <div dangerouslySetInnerHTML={{ __html: buildAvisoLegalHtml() }} />
    </LegalPageShell>
  );
}
