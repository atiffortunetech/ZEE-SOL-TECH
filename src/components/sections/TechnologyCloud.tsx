"use client";

import { motion, useReducedMotion } from "framer-motion";
import { technologies } from "@/config/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TechnologyCloud() {
  const reduceMotion = useReducedMotion();
  const groups = Object.entries(technologies) as [string, readonly string[]][];

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Technology"
          title="A modern technology ecosystem"
          description="Edit this list in /config/navigation.ts to show only technologies your team actually uses."
        />
        <div className="mt-12 space-y-8">
          {groups.map(([group, items]) => (
            <div key={group}>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-accent-secondary">
                {group}
              </p>
              <div className="flex flex-wrap gap-3">
                {items.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="rounded-xl border border-border bg-surface-elevated px-4 py-2 text-sm text-foreground"
                    initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    whileHover={reduceMotion ? undefined : { y: -3 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
