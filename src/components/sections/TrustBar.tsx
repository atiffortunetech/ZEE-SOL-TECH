"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setCount(value);
      return;
    }
    let frame = 0;
    const frames = 40;
    const tick = () => {
      frame += 1;
      setCount(Math.round((value * frame) / frames));
      if (frame < frames) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, reduceMotion, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface-elevated/60 py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Trust"
          title="Built for ambitious businesses"
          description="Placeholder social proof — replace stats and audience labels with your real figures when ready."
          align="center"
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {siteConfig.audiences.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-surface-elevated px-4 py-2 text-sm text-muted"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {siteConfig.stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="rounded-2xl border border-border bg-surface p-5 text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <p className="font-display text-3xl font-semibold text-foreground md:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
