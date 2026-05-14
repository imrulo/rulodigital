"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Laura Méndez",
    role: "Nutrición clínica",
    quote:
      "En pocos días tenía una página que pedía cita sin rodeos. Pasé de ‘me miran y se van’ a mensajes diarios.",
    img: "https://i.pravatar.cc/240?img=32",
  },
  {
    name: "Iván Ortega",
    role: "Reformas / obra local",
    quote:
      "Lo que más me gustó: claridad. Sin párrafos eternos. La gente llega, entiende y escribe. Eso es dinero.",
    img: "https://i.pravatar.cc/240?img=12",
  },
  {
    name: "Paula Rivas",
    role: "Consultora RRHH",
    quote:
      "No soy técnica y no lo necesité. Rulo me lo dejó listo y medible. CTA claro + formulario corto fue un acierto brutal.",
    img: "https://i.pravatar.cc/240?img=5",
  },
];

export function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="testimonios-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 id="testimonios-heading" className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Testimonios (resultados, no adjetivos)
            </h2>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Ejemplos de formato y tono para tu sector. Sustituye por testimonios firmados cuando los tengas.
            </p>
          </div>
          <div className="flex gap-2">
            <motion.button
              type="button"
              whileTap={{ scale: 0.98 }}
              className="rounded-xl border border-border bg-white px-4 py-2 text-sm font-semibold"
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Ver testimonio anterior"
            >
              Anterior
            </motion.button>
            <motion.button
              type="button"
              whileTap={{ scale: 0.98 }}
              className="rounded-xl border border-border bg-primary px-4 py-2 text-sm font-semibold text-white"
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Ver siguiente testimonio"
            >
              Siguiente
            </motion.button>
          </div>
        </div>

        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="min-w-0 shrink-0 grow-0 basis-[min(520px,85vw)] rounded-2xl border border-border bg-secondary/30 p-6"
              >
                <Quote className="size-5 text-accent" aria-hidden />
                <p className="mt-3 text-sm leading-relaxed text-foreground sm:text-base">
                  “{t.quote}”
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-border">
                    <Image
                      src={t.img}
                      alt={`Retrato de ${t.name}, ${t.role}`}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
