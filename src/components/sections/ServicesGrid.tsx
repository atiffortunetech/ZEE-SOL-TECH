"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Palette,
  PenTool,
  Layout,
  Code2,
  ShoppingBag,
  Cpu,
  Users,
  Network,
  BarChart3,
  Cloud,
  Smartphone,
  Server,
  Workflow,
  LifeBuoy,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { services } from "@/config/services";
import { serviceImages, sectionImages } from "@/config/images";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp } from "@/lib/motion";

const iconMap: Record<string, LucideIcon> = {
  Palette,
  PenTool,
  Layout,
  Code2,
  ShoppingBag,
  Cpu,
  Users,
  Network,
  BarChart3,
  Cloud,
  Smartphone,
  Server,
  Workflow,
  LifeBuoy,
};

export function ServicesGrid({
  limit,
  showHeading = true,
}: {
  limit?: number;
  showHeading?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const items = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-20 md:py-28" id="services">
      <Container>
        {showHeading ? (
          <SectionHeading
            eyebrow="Services"
            title="Everything your business needs to go digital"
            description="From brand systems and websites to custom software platforms — one team across the full digital stack."
          />
        ) : null}

        <motion.div
          className={`grid gap-4 sm:grid-cols-2 xl:grid-cols-3 ${showHeading ? "mt-12" : ""}`}
          variants={reduceMotion ? undefined : staggerContainer}
          initial={reduceMotion ? undefined : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.1 }}
        >
          {items.map((service) => {
            const Icon = iconMap[service.icon] ?? Code2;
            const image = serviceImages[service.id] ?? sectionImages.studio;
            return (
              <motion.article
                key={service.id}
                variants={reduceMotion ? undefined : fadeUp}
                className="group overflow-hidden rounded-2xl border border-border bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent/35"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-elevated">
                  <Image
                    src={image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/90 text-accent-secondary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.shortDescription}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted/90">
                        · {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent-secondary transition group-hover:gap-2"
                  >
                    Learn More
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
