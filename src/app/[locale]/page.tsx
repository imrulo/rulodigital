import { setRequestLocale } from "next-intl/server";
import { DifferentiatorSection } from "@/components/home/differentiator-section";
import { FitFilterSection } from "@/components/home/fit-filter-section";
import { HeroSection } from "@/components/home/hero-section";
import { HowIWorkSection } from "@/components/home/how-i-work-section";
import { MaisonCaseStudy } from "@/components/home/maison-case-study";
import { SelectedWorkSection } from "@/components/home/selected-work-section";
import { WhatIDeliverSection } from "@/components/home/what-i-deliver-section";
import { WhoIWorkWithSection } from "@/components/home/who-i-work-with-section";
import { WhyWorkWithMeSection } from "@/components/home/why-work-with-me-section";
import type { AppLocale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const appLocale = locale as AppLocale;

  return (
    <>
      <HeroSection locale={appLocale} />
      <DifferentiatorSection />
      <SelectedWorkSection />
      <MaisonCaseStudy locale={appLocale} />
      <WhoIWorkWithSection />
      <WhatIDeliverSection />
      <FitFilterSection />
      <WhyWorkWithMeSection locale={appLocale} />
      <HowIWorkSection />
    </>
  );
}
