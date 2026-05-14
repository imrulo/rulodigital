"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getWhatsAppHref, siteConfig } from "@/lib/site-config";

/** Vídeo demo corto (placeholder). Sustituye por tu export en `public/hero.webm` para máximo control. */
const DEMO_VIDEO_SRC =
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm";

export function HomeHero() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const id = window.setTimeout(() => setShowVideo(true), 900);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!showVideo) return;
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {
      // autoplay puede fallar: no bloquea la landing
    });
  }, [showVideo]);

  return (
    <section className="relative isolate overflow-hidden bg-primary text-white">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmkwyJ//Z"
        />
        {showVideo ? (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover opacity-35"
            muted
            playsInline
            loop
            preload="metadata"
            poster="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60"
          >
            <source src={DEMO_VIDEO_SRC} type="video/webm" />
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
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-accent text-primary hover:bg-accent">
                Lanzamiento: {siteConfig.offer.headline}
              </Badge>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-200">
                <Play className="size-3 text-accent" aria-hidden />
                Demo en vivo (15s) de fondo
              </span>
            </div>

            <h1 className="mt-5 font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Landing + captación lista en{" "}
              <span className="text-accent">48 horas</span>. Clientes escribiendo, no “visitas”.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-200 sm:text-lg">
              {siteConfig.tagline} Te lo creo en vivo mientras tus clientes te escriben: foco total en
              conversión, claridad y velocidad.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="xl"
                className="shadow-[0_16px_60px_rgba(0,255,157,0.28)]"
              >
                <a href={getWhatsAppHref()} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-5" />
                  Hablar por WhatsApp
                </a>
              </Button>
              <p className="text-xs text-neutral-300 sm:max-w-[240px]">
                CTA con mensaje prellenado:{" "}
                <span className="text-white/90">“Hola Rulo, quiero mi landing page en 48h”</span>
              </p>
            </div>
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
              <p className="text-xs font-semibold text-neutral-200">Oferta principal</p>
              <p className="mt-2 font-heading text-3xl font-semibold text-white">
                397 € <span className="text-base font-medium text-neutral-300">(lanzamiento)</span>
              </p>
            </div>
            <Sparkles className="size-6 text-accent" aria-hidden />
          </div>
          <ul className="mt-4 space-y-2 text-sm text-neutral-200">
            <li>— Landing pensada para vender (no “para existir”).</li>
            <li>— WhatsApp + formulario + microcopy de confianza.</li>
            <li>— Performance brutal: menos fricción = más consultas.</li>
          </ul>
          <div className="mt-5 rounded-xl border border-white/10 bg-primary/40 p-3 text-xs text-neutral-200">
            Urgencia real: solo <span className="font-semibold text-white">10 plazas</span> a este
            precio. Si estás aquí, aún puedes entrar — pero no prometo que mañana siga igual.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
