import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppHref, siteConfig } from "@/lib/site-config";

type Props = {
  primaryLabel: string;
  primaryHref: string;
  waMessage?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function ArticleCta({
  primaryLabel,
  primaryHref,
  waMessage,
  secondaryLabel,
  secondaryHref,
}: Props) {
  const primaryIsWa = primaryHref === "whatsapp";
  const href = primaryIsWa ? getWhatsAppHref(waMessage) : primaryHref;

  return (
    <div className="rounded-2xl border border-border bg-secondary/40 p-6 sm:p-8">
      <p className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
        ¿Listo para una landing que pida clientes?
      </p>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">
        Pack Express a {siteConfig.offer.price} € — entrega en 48h hábiles, con garantía de plazo.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg">
          <a
            href={href}
            target={primaryIsWa ? "_blank" : undefined}
            rel={primaryIsWa ? "noreferrer" : undefined}
            aria-label={primaryIsWa ? siteConfig.cta.primaryAria : primaryLabel}
          >
            {primaryIsWa ? <MessageCircle className="size-4" aria-hidden /> : null}
            {primaryLabel}
          </a>
        </Button>
        {secondaryLabel && secondaryHref ? (
          <Button asChild size="lg" variant="secondary">
            <Link href={secondaryHref}>{secondaryLabel}</Link>
          </Button>
        ) : null}
      </div>
    </div>
  );
}
