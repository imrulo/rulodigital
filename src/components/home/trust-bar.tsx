import { ShieldCheck, Timer, Zap } from "lucide-react";

const items = [
  { icon: Timer, title: "48h", desc: "Tiempo claro. Sin meses eternos." },
  { icon: ShieldCheck, title: "Confianza", desc: "Prueba social + estructura de venta sólida." },
  { icon: Zap, title: "Velocidad", desc: "Web rápida = más leads (y menos rebote)." },
];

export function TrustBar() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-10 sm:grid-cols-3 sm:px-6">
        {items.map((it) => (
          <div
            key={it.title}
            className="flex items-start gap-3 rounded-2xl border border-border bg-secondary/40 p-4"
          >
            <it.icon className="mt-0.5 size-5 text-accent" aria-hidden />
            <div>
              <p className="text-sm font-semibold text-foreground">{it.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
