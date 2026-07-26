import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { projects } from "@/lib/site";

export async function SelectedWorkSection() {
  const t = await getTranslations("Work");

  return (
    <section id="work" className="scroll-mt-24 bg-cream py-20 sm:py-28">
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

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => {
            const itemKey = `items.${project.id}` as const;
            return (
              <Reveal key={project.id} delay={index * 0.06}>
                <article className="group">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div
                      className="relative aspect-[16/10] overflow-hidden"
                      style={{ backgroundColor: project.panel }}
                    >
                      <Image
                        src={project.image}
                        alt={t(`${itemKey}.name`)}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={
                          project.fit === "contain"
                            ? "object-contain p-10 transition-transform duration-700 group-hover:scale-[1.02] sm:p-14"
                            : "object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        }
                      />
                    </div>
                    <div className="mt-5 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sea">
                          {t(`${itemKey}.tag`)} · {t(`${itemKey}.location`)}
                        </p>
                        <h3 className="mt-2 font-heading text-3xl text-navy">
                          {t(`${itemKey}.name`)}
                        </h3>
                      </div>
                      <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-navy transition-colors group-hover:border-sea group-hover:text-sea">
                        <ArrowUpRight className="h-4 w-4" />
                        <span className="sr-only">{t("viewProject")}</span>
                      </span>
                    </div>
                  </a>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-medium text-navy">{t("problemLabel")} — </span>
                    {t(`${itemKey}.problem`)}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-medium text-navy">{t("resultLabel")} — </span>
                    {t(`${itemKey}.result`)}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
