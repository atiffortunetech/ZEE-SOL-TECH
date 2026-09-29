"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { processSteps } from "@/config/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function ProcessTimeline() {
  const [active, setActive] = useState<string | null>(processSteps[0]?.number ?? null);
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-28" id="process">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="How we turn ideas into products"
          description="A clear path from discovery to long-term support — with room to expand each step."
        />

        <div className="mt-12 space-y-3">
          {processSteps.map((step) => {
            const open = active === step.number;
            return (
              <div
                key={step.number}
                className={cn(
                  "overflow-hidden rounded-2xl border border-border bg-surface transition",
                  open && "border-accent/30",
                )}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-ring"
                  aria-expanded={open}
                  onClick={() => setActive(open ? null : step.number)}
                  onMouseEnter={() => setActive(step.number)}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm text-accent-secondary">
                      {step.number}
                    </span>
                    <span className="font-display text-lg font-semibold md:text-xl">
                      {step.title}
                    </span>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-muted transition",
                      open && "rotate-180 text-accent-secondary",
                    )}
                    aria-hidden
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <p className="px-5 pb-5 pl-[4.25rem] text-sm leading-relaxed text-muted md:text-base">
                        {step.description}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
