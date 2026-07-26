"use client";

import { AnalyticsProvider } from "@/components/analytics/analytics-provider";
import { ExitIntentOffer } from "@/components/conversion/exit-intent-offer";

export function SiteClientEffects() {
  return (
    <>
      <AnalyticsProvider />
      <ExitIntentOffer />
    </>
  );
}
