import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import type { AppLocale } from "@/i18n/routing";
import { site } from "@/lib/site";
import { WhatsAppLink } from "@/components/conversion/whatsapp-link";

type WhyWorkWithMeSectionProps = {
  locale: AppLocale;
};

export async function WhyWorkWithMeSection({ locale }: WhyWorkWithMeSectionProps) {
  const t = await getTranslations("Why");
  const points = t.raw("points") as Array<{ title: string; text: string }>;

  return (
    <section id="contact" className="scroll-mt-24 bg-cream pb-20 pt-4 sm:pb-28">
      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden bg-stone">
              <Image
                src={site.portraitUrl}
                alt={`${site.brand}${site.eth}`}
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="eyebrow">{t("eyebrow")}</p>
            <h2 className="mt-4 max-w-2xl font-heading text-4xl tracking-tight text-navy sm:text-5xl">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("subtitle")}
            </p>

            <div className="mt-8 space-y-6">
              {points.map((point) => (
                <div key={point.title} className="border-t border-border pt-5">
                  <h3 className="font-heading text-2xl text-navy">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {t("nextStep")}
            </p>

            <Button asChild variant="whatsapp" size="xl" className="mt-6">
              <WhatsAppLink locale={locale} intent="final">
                {t("cta")}
              </WhatsAppLink>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
