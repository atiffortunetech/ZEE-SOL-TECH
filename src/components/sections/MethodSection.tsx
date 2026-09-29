"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { processSteps, whyChooseUs } from "@/config/navigation";
import { sectionImages } from "@/config/images";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function MethodSection() {
  const [active, setActive] = useState(processSteps[0]?.number ?? "01");
  const reduceMotion = useReducedMotion();
  const current = processSteps.find((step) => step.number === active) ?? processSteps[0];

  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="A simple path from idea to launch"
          description="Six clear stages — so you always know what happens next."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {processSteps.map((step) => (
            <button
              key={step.number}
              type="button"
              onClick={() => setActive(step.number)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition focus-ring",
                active === step.number
                  ? "bg-accent text-white"
                  : "bg-surface-elevated text-muted hover:text-foreground",
              )}
            >
              {step.number} {step.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current?.number}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            className="mt-8 grid overflow-hidden rounded-3xl border border-border bg-background lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="relative min-h-[220px] lg:min-h-full">
              <Image
                src={sectionImages.process}
                alt={`${current?.title ?? "Process"} stage`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="p-8 md:p-10">
              <h3 className="font-display text-3xl font-semibold">{current?.title}</h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                {current?.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {whyChooseUs.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-border bg-background p-6"
            >
              <h3 className="font-display text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
