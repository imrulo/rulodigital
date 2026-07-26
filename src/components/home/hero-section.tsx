"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { site, whatsappHref } from "@/lib/site";

type HeroSectionProps = {
  locale: AppLocale;
};

export function HeroSection({ locale }: HeroSectionProps) {
  const t = useTranslations("Hero");
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-[calc(100dvh-4.25rem)] overflow-hidden bg-navy text-cream">
      <Image
        src={site.portraitUrl}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_18%] sm:object-[center_22%]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(105deg,rgba(13,18,24,0.92)_0%,rgba(18,24,32,0.78)_42%,rgba(18,24,32,0.42)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(47,111,106,0.28),transparent_42%)]"
      />

      <div className="section-shell relative flex min-h-[calc(100dvh-4.25rem)] flex-col justify-end pb-16 pt-28 sm:pb-20 sm:pt-32">
        <motion.div
          className="max-w-3xl"
          initial={reduceMotion ? false : { y: 18 }}
          animate={reduceMotion ? undefined : { y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-heading text-5xl leading-none tracking-[-0.04em] text-cream sm:text-6xl md:text-7xl">
            {t("brand")}
            <span className="text-sea-soft">{t("eth")}</span>
          </p>
          <h1 className="mt-6 max-w-3xl font-heading text-3xl leading-[1.08] tracking-[-0.03em] text-cream sm:text-4xl md:text-5xl">
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
              <Link href="/#maison">{t("ctaSecondary")}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
