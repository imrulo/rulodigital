import type { Metadata } from "next";
import { NicheLanding } from "@/components/niche/niche-landing";
import { nicheDentistas } from "@/lib/niche-copy";
import { canonical, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: nicheDentistas.title,
  description: nicheDentistas.description,
  alternates: { canonical: canonical(siteConfig.links.paraDentistas) },
  openGraph: {
    title: nicheDentistas.title,
    description: nicheDentistas.description,
    url: canonical(siteConfig.links.paraDentistas),
    type: "website",
  },
};

export default function ParaDentistasPage() {
  return <NicheLanding content={nicheDentistas} />;
}
