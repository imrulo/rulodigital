import { Sparkles } from "lucide-react";

export function WeeklyClientsStrip({ count }: { count: number }) {
  return (
    <div className="border-y border-border bg-secondary/60">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 py-3 sm:flex-row sm:items-center sm:px-6">
        <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <Sparkles className="size-4 text-accent" aria-hidden />
          Clientes atendidos esta semana:{" "}
          <span className="rounded-full bg-primary px-3 py-1 text-white">{count}</span>
        </p>
        <p className="text-xs text-muted-foreground">
          Prioridad a quien responde rápido. Si quieres tu landing en 48h, no dejes el WhatsApp para
          “luego”.
        </p>
      </div>
    </div>
  );
}
