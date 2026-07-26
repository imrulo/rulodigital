export type AnalyticsEvent =
  | "wa_click"
  | "form_submit"
  | "lead_magnet_submit"
  | "view_offer"
  | "exit_intent_open"
  | "niche_cta";

export type AnalyticsProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: AnalyticsProps }) => void;
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export const ANALYTICS_CONSENT_EVENT = "rulo:cookie-consent";

export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const v = window.localStorage.getItem("rulo-digital-cookie-consent-v1");
    return v === "accept_all";
  } catch {
    return false;
  }
}

/** Emite evento de conversión (Plausible / dataLayer / gtag si existen). */
export function trackEvent(name: AnalyticsEvent, props?: AnalyticsProps): void {
  if (typeof window === "undefined") return;

  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...props });
  } catch {
    /* noop */
  }

  if (typeof window.plausible === "function") {
    window.plausible(name, props ? { props } : undefined);
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", name, props);
  }

  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", name, props ?? {});
  }
}
