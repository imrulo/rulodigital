import type { Metadata } from "next";
import { NicheLanding } from "@/components/niche/niche-landing";
import { nicheAbogados } from "@/lib/niche-copy";
import { canonical, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: nicheAbogados.title,
  description: nicheAbogados.description,
  alternates: { canonical: canonical(siteConfig.links.paraAbogados) },
  openGraph: {
    title: nicheAbogados.title,
    description: nicheAbogados.description,
    url: canonical(siteConfig.links.paraAbogados),
    type: "website",
  },
};

export default function ParaAbogadosPage() {
  return <NicheLanding content={nicheAbogados} />;
}
