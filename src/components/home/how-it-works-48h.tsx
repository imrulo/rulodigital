import { CalendarClock, Hammer, Rocket } from "lucide-react";

const steps = [
  {
    icon: CalendarClock,
    title: "Día 0 — Brief express (30 min)",
    body: "Me dices qué vendes, a quién, y qué debe pasar cuando alguien llega. Sin paja: objetivo + oferta + prueba.",
  },
  {
    icon: Hammer,
    title: "Día 1 — Construcción + iteración rápida",
    body: "Montaje de la landing + captación. Copy directo, diseño limpio, CTAs claros. Si hace falta, lo afinamos en caliente.",
  },
  {
    icon: Rocket,
    title: "Día 2 — Publicación + medición",
    body: "Te lo dejo online, veloz, con tracking básico para ver qué pasa. Reservas con Calendly y chat flotante listos para convertir curiosos en conversaciones.",
  },
];

export function HowItWorks48h() {
  return (
    <section className="bg-secondary/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Cómo lo entrego en modo <span className="text-accent">express</span>
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Sin comité interminable. Sin “lo vemos la semana que viene”. Tres pasos visibles, con
            entrega real.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((s, idx) => (
            <div key={s.title} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-muted-foreground">Paso {idx + 1}</span>
                <s.icon className="size-5 text-accent" aria-hidden />
              </div>
              <h3 className="mt-3 font-heading text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
