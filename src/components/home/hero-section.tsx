"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { maisonImages, whatsappHref } from "@/lib/site";

type HeroSectionProps = {
  locale: AppLocale;
};

export function HeroSection({ locale }: HeroSectionProps) {
  const t = useTranslations("Hero");
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-[calc(100dvh-4.25rem)] overflow-hidden">
      <Image
        src={maisonImages.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(18,24,32,0.82)_0%,rgba(18,24,32,0.58)_48%,rgba(18,24,32,0.28)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(176,138,74,0.18),transparent_42%)]" />

      <div className="section-shell relative flex min-h-[calc(100dvh-4.25rem)] flex-col justify-end pb-16 pt-24 sm:pb-20 sm:pt-28">
        <motion.div
          className="max-w-3xl"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-heading text-5xl leading-none tracking-[-0.04em] text-cream sm:text-6xl md:text-7xl">
            {t("brand")}
            <span className="text-gold-soft">{t("eth")}</span>
          </p>
          <h1 className="mt-6 max-w-2xl font-heading text-3xl leading-[1.08] tracking-[-0.03em] text-cream sm:text-4xl md:text-5xl">
            {t("headline")}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
            {t("subheadline")}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild variant="accent" size="xl">
              <a href={whatsappHref(locale)} target="_blank" rel="noopener noreferrer">
                {t("ctaPrimary")}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="border-cream/35 bg-transparent text-cream hover:bg-cream/10 hover:text-cream"
            >
              <Link href="/#work">{t("ctaSecondary")}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
