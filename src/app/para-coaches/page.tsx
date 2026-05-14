import type { Metadata } from "next";
import { NicheLanding } from "@/components/niche/niche-landing";
import { nicheCoaches } from "@/lib/niche-copy";
import { canonical, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: nicheCoaches.title,
  description: nicheCoaches.description,
  alternates: { canonical: canonical(siteConfig.links.paraCoaches) },
  openGraph: {
    title: nicheCoaches.title,
    description: nicheCoaches.description,
    url: canonical(siteConfig.links.paraCoaches),
    type: "website",
  },
};

export default function ParaCoachesPage() {
  return <NicheLanding content={nicheCoaches} />;
}
