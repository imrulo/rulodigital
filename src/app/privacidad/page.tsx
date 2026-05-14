import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal/legal-page-shell";
import { privacidadHtml } from "@/legal/bodies/privacidad";
import { canonical, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Política de privacidad de rulo.digital.",
  alternates: { canonical: canonical(siteConfig.links.privacidad) },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Política de privacidad | Rulo.digital",
    url: canonical(siteConfig.links.privacidad),
    type: "article",
  },
};

export default function PrivacidadPage() {
  return (
    <LegalPageShell title="Política de privacidad" updated="14 de mayo de 2026">
      <div dangerouslySetInnerHTML={{ __html: privacidadHtml }} />
    </LegalPageShell>
  );
}
