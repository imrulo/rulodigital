import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/reveal";

export async function WhatIDeliverSection() {
  const t = await getTranslations("Deliver");
  const items = t.raw("items") as Array<{ title: string; text: string }>;

  return (
    <section className="border-y border-border/80 bg-stone py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="mt-4 max-w-3xl font-heading text-4xl tracking-tight text-navy sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("subtitle")}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="h-full">
                <p className="font-heading text-4xl text-sea/55">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-heading text-2xl text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
