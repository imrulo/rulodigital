"use client";

import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import type { AppLocale } from "@/i18n/routing";
import { WhatsAppLink } from "@/components/conversion/whatsapp-link";

type WhatsAppFabProps = {
  locale: AppLocale;
};

export function WhatsAppFab({ locale }: WhatsAppFabProps) {
  const t = useTranslations("WhatsAppFab");
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-50 sm:bottom-7 sm:right-7"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={reduceMotion ? undefined : { opacity: 1 }}
      transition={{ delay: 0.45, duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <WhatsAppLink
        locale={locale}
        intent="default"
        aria-label={t("label")}
        className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#1f6b4a] text-white shadow-sm transition-colors hover:bg-[#18563b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
      >
        <MessageCircle className="h-6 w-6" />
      </WhatsAppLink>
    </motion.div>
  );
}
