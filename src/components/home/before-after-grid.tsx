"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";

type CaseProps = {
  title: string;
  caption: string;
  beforeSrc: string;
  afterSrc: string;
};

const cases: CaseProps[] = [
  {
    title: "Clínica local — de “bonita” a “cita”",
    caption: "Antes: mucha información y poco CTA. Después: promesa clara + WhatsApp visible.",
    beforeSrc:
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=1200&q=70",
    afterSrc:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Profesional — mensaje confuso → mensaje binario",
    caption: "Antes: párrafos largos. Después: problema → solución → acción en pocos segundos.",
    beforeSrc:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=70",
    afterSrc:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=70",
  },
];

export function BeforeAfterGrid() {
  return (
    <section className="bg-primary py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-neutral-200">
            <SlidersHorizontal className="size-3.5 text-accent" aria-hidden />
            Demo visual (no son capturas de clientes reales)
          </div>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Comparador antes / después
          </h2>
          <p className="mt-3 text-base text-neutral-300 sm:text-lg">
            Así se entiende el tipo de salto que busco en una landing:{" "}
            <span className="font-medium text-white">abajo</span> va la versión “nueva” (mensaje
            ordenado, foco en contacto). <span className="font-medium text-white">Encima</span> va la
            versión “vieja” (ruido, prioridades mezcladas).{" "}
            <span className="text-accent">Mueve la barra</span> para revelar más de una capa u otra.
          </p>
          <ol className="mt-4 list-decimal space-y-1 pl-5 text-sm text-neutral-300 sm:text-base">
            <li>Mira la composición de la imagen de abajo (resultado).</li>
            <li>Arrastra el control hacia la izquierda para ver más “antes” encima.</li>
            <li>Hacia la derecha para ver más “después” (la base).</li>
          </ol>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {cases.map((c) => (
            <BeforeAfterCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfterCard({ title, caption, beforeSrc, afterSrc }: CaseProps) {
  const [pct, setPct] = useState(52);
  const clip = useMemo(() => `inset(0 ${100 - pct}% 0 0)`, [pct]);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm font-semibold text-neutral-100">{title}</p>
      <p className="mt-1 text-xs text-neutral-400">{caption}</p>
      <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-xl border border-white/10">
        <Image
          src={afterSrc}
          alt="Versión después (demo)"
          fill
          className="object-cover"
          sizes="(max-width:1024px) 100vw, 50vw"
        />
        <motion.div className="absolute inset-0" style={{ clipPath: `inset(${clip})` }}>
          <Image
            src={beforeSrc}
            alt="Versión antes (demo)"
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
        </motion.div>
        <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/95">
          Arrastra
        </div>
        <div className="absolute bottom-3 left-3 right-3 rounded-full bg-black/40 px-3 py-2 backdrop-blur">
          <input
            aria-label={`Comparador antes/después: ${title}`}
            type="range"
            min={10}
            max={90}
            value={pct}
            onChange={(e) => setPct(Number(e.target.value))}
            className="w-full accent-accent"
          />
          <div className="mt-2 flex justify-between text-[11px] font-semibold text-white/90">
            <span>← Más “antes”</span>
            <span>Más “después” →</span>
          </div>
        </div>
      </div>
    </div>
  );
}
