"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import {
  ANALYTICS_CONSENT_EVENT,
  hasAnalyticsConsent,
  trackEvent,
} from "@/lib/analytics";

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN?.trim() ?? "";
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";

/**
 * Carga Plausible y/o GA4 solo tras consentimiento (accept_all).
 * Delega clics a WhatsApp y vista de #oferta.
 */
export function AnalyticsProvider() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = () => setAllowed(hasAnalyticsConsent());
    sync();
    window.addEventListener(ANALYTICS_CONSENT_EVENT, sync);
    return () => window.removeEventListener(ANALYTICS_CONSENT_EVENT, sync);
  }, []);

  useEffect(() => {
    if (!allowed) return;

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor?.href) return;
      if (anchor.href.includes("wa.me") || anchor.href.includes("api.whatsapp.com")) {
        trackEvent("wa_click", { path: window.location.pathname });
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [allowed]);

  useEffect(() => {
    if (!allowed) return;
    const el = document.getElementById("oferta");
    if (!el || typeof IntersectionObserver === "undefined") return;

    let fired = false;
    const io = new IntersectionObserver(
      (entries) => {
        if (fired) return;
        if (entries.some((e) => e.isIntersecting)) {
          fired = true;
          trackEvent("view_offer", { path: window.location.pathname });
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [allowed]);

  if (!allowed) return null;

  return (
    <>
      {plausibleDomain ? (
        <Script
          defer
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      ) : null}
      {gaId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}
    </>
  );
}
