"use client";

import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import type { AppLocale } from "@/i18n/routing";
import { whatsappHref } from "@/lib/site";

type WhatsAppFabProps = {
  locale: AppLocale;
};

export function WhatsAppFab({ locale }: WhatsAppFabProps) {
  const t = useTranslations("WhatsAppFab");
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={whatsappHref(locale)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("label")}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1f6b4a] text-white shadow-[0_12px_30px_rgba(18,24,32,0.28)] transition-colors hover:bg-[#18563b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:bottom-7 sm:right-7"
      initial={reduceMotion ? false : { y: 12, scale: 0.96 }}
      animate={reduceMotion ? undefined : { y: 0, scale: 1 }}
      transition={{ delay: 0.45, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -2 }}
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
}
