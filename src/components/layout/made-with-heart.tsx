"use client";

import { useTranslations } from "next-intl";

/**
 * Footer easter egg / signature:
 * “Made with ♥” — heart glyph instead of the word “love”,
 * plus the imrulo.eth keychain mark.
 */
export function MadeWithHeart() {
  const t = useTranslations("Footer");

  return (
    <p className="text-xs text-cream/55">
      <span>{t("madeWithPrefix")}</span>{" "}
      <span
        className="inline-block translate-y-[1px] text-sm leading-none text-gold-soft"
        aria-label={t("madeWithAria")}
        title={t("madeWithTitle")}
      >
        ♥
      </span>
      <span className="mx-1.5 text-cream/25" aria-hidden>
        ·
      </span>
      <span className="font-heading tracking-tight text-cream/70">{t("keychain")}</span>
    </p>
  );
}
