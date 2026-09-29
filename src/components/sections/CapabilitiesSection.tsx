import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  capabilities,
  digitalSolutions,
  industryExpertise,
  studioStats,
} from "@/config/navigation";
import { sectionImages } from "@/config/images";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function CapabilitiesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-accent-soft/50 to-transparent" />
      <Container className="relative">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-surface-elevated lg:aspect-auto lg:min-h-[560px]">
              <Image
                src={sectionImages.studio}
                alt="ZEE Sol Tech software house team collaborating on UI UX and product design"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/35 to-transparent p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
                  Software house principles
                </p>
                <p className="mt-2 max-w-sm font-display text-2xl font-semibold text-white">
                  Built for brands, websites, and custom digital products.
                </p>
              </div>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="How we work"
              title="Principles that guide every digital product engagement"
              description="ZEE Sol Tech combines brand strategy, website development, UI/UX, and custom software engineering — so your digital presence stays coherent from first mark to shipped product."
            />

            <ol className="mt-12 space-y-0 divide-y divide-border border-y border-border">
              {capabilities.map((item) => (
                <li
                  key={item.number}
                  className="grid gap-3 py-6 sm:grid-cols-[4.5rem_1fr] sm:gap-6"
                >
                  <p className="font-mono text-sm font-semibold text-accent">{item.number}</p>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted md:text-base">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function DigitalSolutionsSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Digital solutions"
            title="Software development services search teams actually need"
            description="From SEO-friendly website design to CRM development, SaaS platforms, and mobile apps — explore the capabilities buyers hire ZEE Sol Tech for."
          />
          <Button href="/services" variant="secondary" className="shrink-0 self-start md:self-auto">
            View all services
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border md:grid-cols-2">
          {digitalSolutions.map((item) => (
            <Link
              key={item.number}
              href={item.href}
              className="group flex flex-col justify-between bg-white p-7 transition hover:bg-accent-soft/40 md:p-9 focus-ring"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-xs font-semibold text-accent">{item.number}</p>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                    {item.keyword}
                  </span>
                </div>
                <h3 className="font-display mt-5 text-2xl font-semibold leading-snug text-foreground group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted md:text-base">
                  {item.description}
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
                Explore service
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function IndustryExpertiseSection() {
  return (
    <section className="relative overflow-hidden py-20 text-white md:py-28">
      <Image
        src={sectionImages.seo}
        alt="SEO and digital growth strategy for business websites"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-950/88 to-teal-950/80" />

      <Container className="relative">
        <div className="max-w-3xl">
          <p className="section-label mb-4 !text-teal-200">Who we build for</p>
          <h2 className="font-display text-3xl font-semibold leading-[1.1] md:text-4xl lg:text-5xl">
            Industries and teams that hire our digital product studio
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Whether you need a logo design agency, website development company, or custom software
            partner — ZEE Sol Tech adapts delivery to your market, buyers, and growth stage.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {industryExpertise.map((item, index) => (
            <article key={item.title} className="border-t border-white/15 pt-5">
              <p className="font-mono text-xs font-semibold text-teal-300">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display mt-3 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm text-white/70 md:text-base">
            Ready for branding, an SEO-ready website, CRM software, or a SaaS MVP?
          </p>
          <Button href="/contact" variant="light">
            Request a project quote
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </Container>
    </section>
  );
}

export function ReceiptsSection() {
  return (
    <section className="relative overflow-hidden py-16 text-white md:py-20">
      <Image
        src={sectionImages.software}
        alt="Custom software and dashboard development metrics"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-accent/90" />
      <Container className="relative">
        <p className="text-sm font-semibold text-white/80">By the numbers</p>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          {studioStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl font-semibold md:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-white/75">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
