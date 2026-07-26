"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { contactFormPath, getWhatsAppHref, siteConfig } from "@/lib/site-config";

export function HomeHero() {
  const poster = siteConfig.heroImageUrl;
  const videoSrc = siteConfig.heroVideoUrl;
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () => setIsDesktop(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-primary text-white">
      <div className="absolute inset-0">
        <Image
          src={poster}
          alt="Rulo.digital — sistemas de captación para profesionales"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmkwyJ//Z"
        />
        {isDesktop && videoSrc ? (
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-35"
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
            poster={poster}
            aria-label="Vídeo demo del hero (solo escritorio)"
          >
            <source src={videoSrc} type="video/webm" />
          </video>
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/70 to-primary" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-end lg:justify-between lg:py-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge className="bg-accent text-primary hover:bg-accent">
              Lanzamiento: {siteConfig.offer.headline}
            </Badge>

            <h1 className="mt-5 font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Landing de conversión lista en{" "}
              <span className="text-accent">48h</span> — para que coaches, clínicas y
              profesionales reciban mensajes, no “visitas”.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-200 sm:text-lg">
              {siteConfig.tagline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="xl"
                className="shadow-[0_16px_60px_rgba(0,255,157,0.28)]"
              >
                <a
                  href={getWhatsAppHref()}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={siteConfig.cta.primaryAria}
                >
                  <MessageCircle className="size-5" aria-hidden />
                  {siteConfig.cta.primaryLabel}
                </a>
              </Button>
              <Button
                asChild
                size="xl"
                variant="secondary"
                className="border-white/20 bg-white/10 text-white hover:bg-white/20"
              >
                <Link href={contactFormPath()} aria-label="Ir al formulario de contacto">
                  {siteConfig.cta.secondaryLabel}
                </Link>
              </Button>
            </div>
            <p className="mt-3 text-xs text-neutral-300 sm:max-w-[360px]">
              Respuesta directa. Si en tu proyecto encaja una agenda en línea, la integramos cuando
              tú lo pidas.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md lg:mb-2"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold text-neutral-200">Pack Express</p>
              <p className="mt-2 font-heading text-3xl font-semibold text-white">
                {siteConfig.offer.price} €{" "}
                <span className="text-base font-medium text-neutral-300">(lanzamiento)</span>
              </p>
            </div>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-neutral-200">
            <li>— Landing pensada para vender (no “para existir”).</li>
            <li>— WhatsApp + formulario corto + microcopy de confianza.</li>
            <li>— Performance y SEO base para menos fricción.</li>
          </ul>
          <div className="mt-5 rounded-xl border border-white/10 bg-primary/40 p-3 text-xs text-neutral-200">
            Solo <span className="font-semibold text-white">{siteConfig.offer.slotsTotal} plazas</span>{" "}
            a este precio. Cuando se cierren, sube o se pausa.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
