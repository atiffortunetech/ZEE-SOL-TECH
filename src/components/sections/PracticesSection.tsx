import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { practices } from "@/config/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PracticesSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Full-stack creative and product delivery"
          description="Six focused capabilities under one team — so strategy, design, and build stay aligned."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {practices.map((practice) => (
            <Link
              key={practice.number}
              href={practice.href}
              className="group overflow-hidden rounded-3xl border border-border bg-white transition hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-elevated">
                <Image
                  src={practice.image}
                  alt={practice.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 font-mono text-xs font-semibold text-accent">
                  {practice.number}
                </span>
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    {practice.title}
                  </h3>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted transition group-hover:text-accent" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {practice.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
