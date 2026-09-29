"use client";

import { useState } from "react";
import { Check, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PackageInquiryModal } from "@/components/sections/PackageInquiryModal";
import { formatPriceLabel, cn } from "@/lib/utils";
import type { PricingPackage } from "@/config/packages";

export function PricingCard({
  pkg,
  onGetStarted,
}: {
  pkg: PricingPackage;
  onGetStarted?: (pkg: PricingPackage) => void;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border bg-white p-6 transition-all duration-500 ease-out md:p-7",
        "hover:-translate-y-2 hover:scale-[1.015] hover:shadow-[0_28px_60px_-28px_rgba(15,118,110,0.45)]",
        pkg.popular
          ? "border-accent/50 shadow-[0_18px_40px_-24px_rgba(15,118,110,0.35)] ring-1 ring-accent/20"
          : "border-border shadow-sm hover:border-accent/45",
      )}
    >
      <span
        className={cn(
          "absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent via-teal-400 to-accent-secondary transition-transform duration-500 group-hover:scale-x-100",
          pkg.popular && "scale-x-100",
        )}
        aria-hidden
      />

      <span
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-accent-soft/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />

      {pkg.popular ? (
        <span className="absolute right-5 top-5 z-10 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white shadow-sm transition group-hover:bg-accent-secondary">
          Recommended
        </span>
      ) : null}

      <div className="relative z-10 mb-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted transition-colors group-hover:text-accent">
          Package
        </p>
        <h3 className="font-display mt-2 text-2xl font-semibold text-foreground transition-colors group-hover:text-accent-secondary">
          {pkg.name}
        </h3>
        {pkg.idealFor ? (
          <p className="mt-2 text-sm leading-relaxed text-muted">{pkg.idealFor}</p>
        ) : null}
        <div className="mt-5 flex items-end gap-2">
          <p className="font-display text-4xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent">
            {formatPriceLabel(pkg.startingPrice, pkg.currency)}
          </p>
        </div>
        <p className="mt-2 text-xs text-muted">
          {pkg.billingNote ??
            (pkg.billingType === "monthly" ? "Monthly program" : "One-time engagement")}
        </p>
      </div>

      <ul className="relative z-10 mb-8 flex flex-1 flex-col gap-2.5">
        {pkg.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-foreground/85"
          >
            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft transition duration-300 group-hover:scale-110 group-hover:bg-accent">
              <Check
                className="h-3 w-3 text-accent transition-colors group-hover:text-white"
                aria-hidden
              />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => onGetStarted?.(pkg)}
        className={cn(
          "relative z-10 inline-flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl text-sm font-semibold transition-all duration-300 focus-ring",
          pkg.popular
            ? "bg-accent text-white group-hover:bg-accent-secondary group-hover:shadow-lg group-hover:shadow-accent/25"
            : "border border-border bg-slate-50 text-foreground group-hover:border-accent group-hover:bg-accent group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent/20",
        )}
      >
        <span>{pkg.cta}</span>
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden
        />
      </button>
    </article>
  );
}

export function PricingSection({
  title,
  subtitle,
  packages,
  id,
}: {
  title: string;
  subtitle: string;
  packages: PricingPackage[];
  id?: string;
}) {
  const [selected, setSelected] = useState<PricingPackage | null>(null);

  return (
    <section id={id} className="py-16 md:py-24">
      <div className="mb-12 max-w-3xl">
        <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">{title}</h2>
        <p className="mt-4 text-muted md:text-lg">{subtitle}</p>
      </div>
      <div
        className={cn(
          "grid gap-5",
          packages.length === 1
            ? "max-w-md"
            : packages.length === 4
              ? "md:grid-cols-2 xl:grid-cols-4"
              : "md:grid-cols-2 xl:grid-cols-3",
        )}
      >
        {packages.map((item) => (
          <PricingCard
            key={item.id}
            pkg={item}
            onGetStarted={(pkg) => setSelected(pkg)}
          />
        ))}
      </div>
      <div className="mt-10 flex flex-col gap-4 rounded-[1.75rem] border border-border bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between md:p-8">
        <div>
          <h3 className="font-display text-2xl font-semibold">Need something custom?</h3>
          <p className="mt-2 text-sm text-muted">
            Tell us about your requirements and we&apos;ll prepare a tailored proposal.
          </p>
        </div>
        <Button href="/contact">Request a custom quote</Button>
      </div>

      <PackageInquiryModal
        open={Boolean(selected)}
        pkg={selected}
        category={title}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
