"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { architectureLayers, softwareSolutions } from "@/config/services";
import { sectionImages } from "@/config/images";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function SoftwareArchitecture() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Custom Software"
              title="Software built around your business"
              description="We don't force your business into generic software. We build systems around the way your business actually works."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {softwareSolutions.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-border bg-surface-elevated px-3 py-1.5 text-xs text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
            <Button href="/services/software-development" className="mt-8">
              Build My Software
            </Button>
          </div>

          <div className="space-y-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-border">
              <Image
                src={sectionImages.software}
                alt="Custom software and CRM dashboards"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="relative rounded-3xl border border-border bg-surface p-6 md:p-8">
              <p className="mb-6 text-xs uppercase tracking-[0.2em] text-accent-secondary">
                Architecture
              </p>
              <div className="space-y-3">
                {architectureLayers.map((layer, index) => (
                  <motion.div
                    key={layer}
                    initial={reduceMotion ? false : { opacity: 0, x: 20 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-xl border border-border bg-gradient-to-r from-accent/10 to-transparent px-4 py-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">{layer}</span>
                      <span className="text-xs text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
