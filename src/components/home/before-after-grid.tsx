"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type CaseProps = {
  title: string;
  beforeSrc: string;
  afterSrc: string;
};

const cases: CaseProps[] = [
  {
    title: "Clínica local — de “bonita” a “cita”",
    beforeSrc:
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=1200&q=70",
    afterSrc:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Profesional — mensaje confuso → mensaje binario",
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
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Ejemplos reales (antes / después)
          </h2>
          <p className="mt-3 text-base text-neutral-300 sm:text-lg">
            No es “cambiar fotos”. Es cambiar jerarquía: qué ve primero alguien, qué entiende en 3
            segundos y qué hace después.
          </p>
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

function BeforeAfterCard({ title, beforeSrc, afterSrc }: CaseProps) {
  const [pct, setPct] = useState(52);
  const clip = useMemo(() => `inset(0 ${100 - pct}% 0 0)`, [pct]);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm font-semibold text-neutral-200">{title}</p>
      <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-xl border border-white/10">
        <Image src={afterSrc} alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
        <motion.div className="absolute inset-0" style={{ clipPath: `inset(${clip})` }}>
          <Image src={beforeSrc} alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
        </motion.div>
        <div className="absolute bottom-3 left-3 right-3 rounded-full bg-black/40 px-3 py-2 backdrop-blur">
          <input
            aria-label={`Slider antes/después: ${title}`}
            type="range"
            min={10}
            max={90}
            value={pct}
            onChange={(e) => setPct(Number(e.target.value))}
            className="w-full accent-accent"
          />
          <div className="mt-2 flex justify-between text-[11px] font-semibold text-white/90">
            <span>Antes</span>
            <span>Después</span>
          </div>
        </div>
      </div>
    </div>
  );
}
