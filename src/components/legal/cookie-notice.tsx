"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ANALYTICS_CONSENT_EVENT } from "@/lib/analytics";
import { COOKIE_CONSENT_STORAGE_KEY } from "@/lib/cookie-consent";
import { siteConfig } from "@/lib/site-config";

const SCROLL_DISMISS_Y = 96;
const BANNER_SELECTOR = "[data-cookie-bar]";

function saveDismiss(value: string) {
  try {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value);
  } catch {
    /* noop */
  }
}

/**
 * Banner inferior: fondo #0A0A0A, texto blanco, CTA verde #00D68F “Aceptar todo”, enlace a /cookies.
 * Se oculta al hacer scroll (umbral), al pulsar “Aceptar todo”, o al interactuar con enlaces/botones fuera del banner.
 */
export function CookieNotice() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);

  const dismiss = useCallback((value: string) => {
    saveDismiss(value);
    setOpen(false);
    openRef.current = false;
    if (value === "accept_all") {
      window.dispatchEvent(new Event(ANALYTICS_CONSENT_EVENT));
    }
  }, []);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  useEffect(() => {
    setMounted(true);
    try {
      const v = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
      if (!v) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!open) return;

    const onScroll = () => {
      if (window.scrollY >= SCROLL_DISMISS_Y) dismiss("scroll");
    };

    const onPointerDown = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      if (t.closest(BANNER_SELECTOR)) return;
      const interactive =
        t.closest("a[href]") ||
        t.closest("button") ||
        t.closest('[role="button"]') ||
        (t instanceof HTMLInputElement && (t.type === "submit" || t.type === "button"));
      if (interactive) dismiss("cta_outside");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("pointerdown", onPointerDown, true);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointerdown", onPointerDown, true);
    };
  }, [open, dismiss]);

  if (!mounted || !open) return null;

  return (
    <>
      <div className="h-[5.25rem] w-full sm:h-20" aria-hidden />
      <div
        data-cookie-bar
        className="fixed bottom-0 left-0 right-0 z-[42] border-t border-white/10 px-4 py-3.5 shadow-[0_-12px_40px_rgba(0,0,0,0.45)] supports-[padding:max(0px)]:pb-[max(0.75rem,env(safe-area-inset-bottom))]"
        style={{ backgroundColor: "#0A0A0A", color: "#fafafa" }}
        role="region"
        aria-label="Cookies"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pr-28">
          <p className="max-w-3xl text-xs leading-relaxed text-neutral-200 sm:text-sm">
            Usamos cookies necesarias para el funcionamiento del sitio y, con tu elección, recordamos
            preferencias. Consulta la{" "}
            <Link
              href={siteConfig.links.cookies}
              className="font-semibold text-white underline underline-offset-2 hover:opacity-90"
            >
              política de cookies
            </Link>
            .
          </p>
          <div className="flex shrink-0 items-center gap-2 sm:justify-end">
            <button
              type="button"
              className="rounded-xl px-5 py-2.5 text-sm font-semibold text-[#0A0A0A] transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#00D68F" }}
              onClick={() => dismiss("accept_all")}
            >
              Aceptar todo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
