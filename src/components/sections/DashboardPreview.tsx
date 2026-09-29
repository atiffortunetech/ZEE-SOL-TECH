"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { dashboardTypes } from "@/config/services";
import { sectionImages } from "@/config/images";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const kpis = [
  { label: "Revenue", value: "$128k" },
  { label: "Orders", value: "1,842" },
  { label: "Customers", value: "936" },
  { label: "Conversion", value: "3.8%" },
];

const bars = [42, 58, 36, 72, 64, 80, 55, 70, 88, 60, 75, 92];

export function DashboardPreview() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <SectionHeading
            eyebrow="Dashboards"
            title="Clarity for every decision"
            description="Business, sales, finance, HR, inventory, and operations dashboards designed for real-time understanding."
          />
          <div className="relative hidden aspect-[16/10] overflow-hidden rounded-3xl border border-border lg:block">
            <Image
              src={sectionImages.software}
              alt="Analytics dashboard preview"
              fill
              className="object-cover"
              sizes="40vw"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {dashboardTypes.map((type) => (
            <span
              key={type}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted"
            >
              {type}
            </span>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-surface p-4 md:p-6">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-accent-secondary">
                Live Preview
              </p>
              <h3 className="font-display text-2xl font-semibold">Operations Overview</h3>
            </div>
            <Button href="/services/dashboard-development" variant="outline" size="sm">
              Explore Dashboards
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-2xl border border-border bg-surface-elevated p-4"
              >
                <p className="text-xs text-muted">{kpi.label}</p>
                <p className="mt-2 font-display text-2xl font-semibold">{kpi.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="rounded-2xl border border-border bg-surface-elevated p-4">
              <p className="mb-4 text-sm text-muted">Sales Chart</p>
              <div className="flex h-40 items-end gap-2">
                {bars.map((height, index) => (
                  <motion.div
                    key={index}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-accent/30 to-accent-secondary/80"
                    initial={reduceMotion ? false : { height: 0 }}
                    whileInView={reduceMotion ? undefined : { height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04, duration: 0.5 }}
                    style={reduceMotion ? { height: `${height}%` } : undefined}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-surface-elevated p-4">
                <p className="text-sm text-muted">Recent Activity</p>
                <ul className="mt-3 space-y-2 text-sm text-foreground/90">
                  <li>New order synced</li>
                  <li>Lead moved to proposal</li>
                  <li>Inventory threshold alert</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-surface-elevated p-4">
                <p className="text-sm text-muted">Tasks · Notifications</p>
                <ul className="mt-3 space-y-2 text-sm text-foreground/90">
                  <li>Follow up with 4 leads</li>
                  <li>Approve weekly report</li>
                  <li>Growth +12% this week</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
