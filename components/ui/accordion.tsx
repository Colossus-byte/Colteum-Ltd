"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  question: string;
  answer: string;
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-white/8">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between py-5 text-left gap-6"
            aria-expanded={open === i}
          >
            <span className="text-sm font-medium text-[--text-body]">{item.question}</span>
            <ChevronDown
              size={16}
              className={cn(
                "shrink-0 text-[--text-muted] transition-transform duration-200",
                open === i && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-300",
              open === i ? "max-h-80 pb-5" : "max-h-0"
            )}
          >
            <p className="text-sm text-[--text-muted] leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
