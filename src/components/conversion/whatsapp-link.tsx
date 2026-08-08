"use client";

import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import type { AppLocale } from "@/i18n/routing";
import {
  whatsappHref,
  type WhatsAppIntent,
} from "@/lib/whatsapp";

type WhatsAppLinkProps = {
  locale: AppLocale;
  intent: WhatsAppIntent;
  projectName?: string;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
  onClick?: () => void;
};

export function WhatsAppLink({
  locale,
  intent,
  projectName,
  className,
  children,
  "aria-label": ariaLabel,
  onClick,
}: WhatsAppLinkProps) {
  const t = useTranslations("WhatsAppMessages");

  const href = whatsappHref({
    locale,
    intent,
    projectName,
    messages: {
      default: t("default"),
      hero: t("hero"),
      project: t("project"),
      maison: t("maison"),
      final: t("final"),
      nav: t("nav"),
    },
  });

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
