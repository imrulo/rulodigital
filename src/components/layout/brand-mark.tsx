import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-baseline gap-0.5 font-heading text-[1.65rem] leading-none tracking-[-0.04em] text-navy",
        className,
      )}
      aria-label="imrulo.eth"
    >
      <span>imrulo</span>
      <span className="text-[0.72em] font-normal text-gold transition-colors group-hover:text-gold-soft">
        .eth
      </span>
    </Link>
  );
}
