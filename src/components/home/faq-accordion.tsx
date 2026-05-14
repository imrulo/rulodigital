"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/lib/jsonld";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, idx) => (
        <AccordionItem key={item.question} value={`item-${idx}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
