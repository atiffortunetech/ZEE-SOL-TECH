"use client";

import { useState } from "react";
import Image from "next/image";
import { getPricingGroup, type PricingPackage } from "@/config/packages";
import { sectionImages } from "@/config/images";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PricingCard } from "@/components/ui/PricingCard";
import { PackageInquiryModal } from "@/components/sections/PackageInquiryModal";

export function PackagesTeaser() {
  const logo = getPricingGroup("logo");
  const [selected, setSelected] = useState<PricingPackage | null>(null);
  if (!logo) return null;

  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.85fr]">
          <SectionHeading
            eyebrow="Packages"
            title="Transparent starting packages"
            description="Logo packages preview — explore every practice and price on the packages page."
          />
          <div className="relative hidden aspect-[16/10] overflow-hidden rounded-3xl border border-border lg:block">
            <Image
              src={sectionImages.branding}
              alt="Brand and package design"
              fill
              className="object-cover"
              sizes="40vw"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-start lg:justify-end">
          <Button href="/pricing" variant="outline">
            See all packages
          </Button>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {logo.packages.map((pkg) => (
            <PricingCard
              key={pkg.id}
              pkg={pkg}
              onGetStarted={(item) => setSelected(item)}
            />
          ))}
        </div>
      </Container>

      <PackageInquiryModal
        open={Boolean(selected)}
        pkg={selected}
        category={logo.title}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
