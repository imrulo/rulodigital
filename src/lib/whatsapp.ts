import { site } from "@/lib/site";
import type { AppLocale } from "@/i18n/routing";

export type WhatsAppIntent =
  | "default"
  | "hero"
  | "project"
  | "maison"
  | "final"
  | "nav";

type MessageBag = {
  default: string;
  hero: string;
  project: string;
  maison: string;
  final: string;
  nav: string;
};

export function resolveWhatsAppMessage(
  intent: WhatsAppIntent,
  messages: MessageBag,
  projectName?: string,
): string {
  switch (intent) {
    case "default":
      return messages.default;
    case "hero":
      return messages.hero;
    case "project":
      return messages.project.replace("{project}", projectName ?? "");
    case "maison":
      return messages.maison;
    case "final":
      return messages.final;
    case "nav":
      return messages.nav;
    default: {
      const _exhaustive: never = intent;
      return _exhaustive;
    }
  }
}

/** Build wa.me link. Prefer passing i18n messages from the caller. */
export function whatsappHref(options: {
  locale: AppLocale;
  intent?: WhatsAppIntent;
  projectName?: string;
  messages?: MessageBag;
}): string {
  const intent = options.intent ?? "default";
  const fallback: MessageBag = {
    default:
      options.locale === "es"
        ? site.whatsapp.messageEs
        : site.whatsapp.messageEn,
    hero:
      options.locale === "es"
        ? site.whatsapp.messageEs
        : site.whatsapp.messageEn,
    project:
      options.locale === "es"
        ? `Hola Rulo — vi {project} en rulo.digital y quiero algo de ese nivel.`
        : `Hi Rulo — I saw {project} on rulo.digital and want something at that level.`,
    maison:
      options.locale === "es"
        ? "Hola Rulo — vi el caso Maison Soleil y quiero un proyecto similar."
        : "Hi Rulo — I saw the Maison Soleil case and want a similar project.",
    final:
      options.locale === "es"
        ? "Hola Rulo — quiero explorar un sistema digital premium para mi negocio."
        : "Hi Rulo — I’d like to explore a premium digital system for my business.",
    nav:
      options.locale === "es"
        ? site.whatsapp.messageEs
        : site.whatsapp.messageEn,
  };

  const text = resolveWhatsAppMessage(
    intent,
    options.messages ?? fallback,
    options.projectName,
  );

  return `https://wa.me/${site.whatsapp.phone}?text=${encodeURIComponent(text)}`;
}
