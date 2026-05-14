import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  variant?: "header" | "footer";
  className?: string;
  priority?: boolean;
};

const variantClass: Record<NonNullable<BrandLogoProps["variant"]>, string> = {
  header: "h-8 w-[min(200px,52vw)] sm:h-9 sm:w-[220px]",
  footer: "h-10 w-[240px] sm:h-11 sm:w-[260px]",
};

export function BrandLogo({ variant = "header", className, priority }: BrandLogoProps) {
  return (
    <span className={cn("relative inline-block shrink-0", variantClass[variant], className)}>
      <Image
        src={siteConfig.logoUrl}
        alt={siteConfig.name}
        fill
        className="object-contain object-left"
        sizes={variant === "footer" ? "260px" : "220px"}
        priority={priority ?? variant === "header"}
      />
    </span>
  );
}
