import { ShieldCheck, Timer, Zap } from "lucide-react";

const items = [
  { icon: Timer, title: "48 horas", desc: "Brief → landing → publicada. Sin meses eternos." },
  { icon: ShieldCheck, title: "Precio cerrado", desc: "397 € lanzamiento. Solo 10 plazas." },
  { icon: Zap, title: "Hecha para escribirte", desc: "CTA claro + WhatsApp. Menos fricción." },
];

export function TrustBar() {
  return (
    <section className="bg-white" aria-label="Señales de confianza">
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
