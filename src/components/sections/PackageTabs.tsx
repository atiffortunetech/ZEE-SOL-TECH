"use client";

import { useState } from "react";
import { pricingGroups, type PricingPackage } from "@/config/packages";
import { PricingCard } from "@/components/ui/PricingCard";
import { PackageInquiryModal } from "@/components/sections/PackageInquiryModal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function PackageTabs({ initialTab = "logo" }: { initialTab?: string }) {
  const [active, setActive] = useState(
    pricingGroups.some((g) => g.id === initialTab) ? initialTab : pricingGroups[0]?.id,
  );
  const [selected, setSelected] = useState<PricingPackage | null>(null);
  const group = pricingGroups.find((g) => g.id === active) ?? pricingGroups[0];

  if (!group) return null;

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Package categories"
      >
        {pricingGroups.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={active === item.id}
            onClick={() => setActive(item.id)}
            className={cn(
              "rounded-full border px-3.5 py-2 text-xs font-semibold transition focus-ring md:text-sm",
              active === item.id
                ? "border-accent bg-accent text-white"
                : "border-border bg-white text-muted hover:border-accent/30 hover:text-foreground",
            )}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="mt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {group.title}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          {group.title} packages
        </h2>
        <p className="mt-4 max-w-3xl text-muted md:text-lg">{group.subtitle}</p>
      </div>

      <div
        className={cn(
          "mt-10 grid gap-5",
          group.packages.length === 1
            ? "max-w-lg"
            : group.packages.length === 4
              ? "md:grid-cols-2 xl:grid-cols-4"
              : "md:grid-cols-2 xl:grid-cols-3",
        )}
      >
        {group.packages.map((item) => (
          <PricingCard
            key={item.id}
            pkg={item}
            onGetStarted={(pkg) => setSelected(pkg)}
          />
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-4 rounded-[1.75rem] border border-border bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between md:p-8">
        <div>
          <h3 className="font-display text-xl font-semibold md:text-2xl">
            Need something custom?
          </h3>
          <p className="mt-2 text-sm text-muted">
            Tell us about your requirements and we&apos;ll prepare a tailored proposal.
          </p>
        </div>
        <Button href="/contact">Request a custom quote</Button>
      </div>

      <PackageInquiryModal
        open={Boolean(selected)}
        pkg={selected}
        category={group.title}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}
