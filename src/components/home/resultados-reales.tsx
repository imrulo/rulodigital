import { TrendingUp, Users, Timer } from "lucide-react";

const metrics = [
  {
    icon: Users,
    label: "Clientes esta semana",
    value: "+14",
    hint: "Mensajes entrantes cualificados en landings recientes (promedio interno).",
  },
  {
    icon: TrendingUp,
    label: "Tasa de contacto",
    value: "↑ 3,1×",
    hint: "Mejora típica al pasar de web “institucional” a landing con CTA único y prueba social fuerte.",
  },
  {
    icon: Timer,
    label: "Tiempo de entrega",
    value: "Express",
    hint: "Iteración rápida con foco en conversión: menos semanas vacías, más consultas en marcha.",
  },
];

export function ResultadosRealesSection() {
  return (
    <section className="border-y border-border bg-secondary/40 py-14 sm:py-16" aria-labelledby="resultados-reales-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 id="resultados-reales-heading" className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Resultados reales
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Métricas orientadas a negocio: no “visitas bonitas”, sino conversaciones que pueden cerrar.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-border bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-2 text-accent">
                <m.icon className="size-5" aria-hidden />
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{m.label}</span>
              </div>
              <p className="mt-3 font-heading text-3xl font-semibold text-foreground">{m.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.hint}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
