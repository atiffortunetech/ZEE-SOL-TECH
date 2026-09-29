import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { sectionImages } from "@/config/images";
import { cn } from "@/lib/utils";

export function CTASection({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  className,
}: {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  className?: string;
}) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-border">
          <Image
            src={sectionImages.cta}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1160px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-slate-900/45" />
          <div className="relative max-w-2xl px-6 py-12 md:px-12 md:py-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
              Next step
            </p>
            <h2 className="font-display text-3xl font-semibold text-white md:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-white/75 md:text-lg">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={primaryHref} variant="light" size="lg">
                {primaryLabel}
              </Button>
              {secondaryHref && secondaryLabel ? (
                <Button href={secondaryHref} variant="onDark" size="lg">
                  {secondaryLabel}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
