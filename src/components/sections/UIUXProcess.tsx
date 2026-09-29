"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { uiuxServices } from "@/config/services";
import { sectionImages } from "@/config/images";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const stages = [
  { title: "Wireframe", image: sectionImages.process },
  { title: "UI", image: sectionImages.uiux },
  { title: "Prototype", image: sectionImages.apps },
  { title: "Product", image: sectionImages.websites },
];

export function UIUXProcess() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionHeading
            eyebrow="UI/UX"
            title="Design that makes software easy to use"
            description="Research, flows, systems, and polished interfaces — shaped for clarity and conversion."
          />
          <div className="relative hidden aspect-[16/10] overflow-hidden rounded-3xl border border-border lg:block">
            <Image
              src={sectionImages.uiux}
              alt="UI UX design process"
              fill
              className="object-cover"
              sizes="40vw"
            />
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {uiuxServices.map((item) => (
            <span
              key={item}
              className="rounded-lg border border-border px-3 py-1.5 text-xs text-muted"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.title}
              className="overflow-hidden rounded-2xl border border-border bg-surface"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={stage.image}
                  alt={stage.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="p-5">
                <p className="font-mono text-xs text-accent-secondary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold">{stage.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <Button href="/services/ui-ux" className="mt-8">
          Discuss Your Idea
        </Button>
      </Container>
    </section>
  );
}
