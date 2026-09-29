import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
  image = "/heroes/hero-websites.jpg",
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={`${title}${eyebrow ? ` — ${eyebrow}` : ""}`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/78 via-slate-950/55 to-slate-900/30" />
      </div>

      <Container className="relative py-16 md:py-20">
        <div className="max-w-3xl text-white">
          {eyebrow ? (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              {description}
            </p>
          ) : null}
          {(primaryHref && primaryLabel) || (secondaryHref && secondaryLabel) ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryHref && primaryLabel ? (
                <Button href={primaryHref} variant="light" size="lg">
                  {primaryLabel}
                </Button>
              ) : null}
              {secondaryHref && secondaryLabel ? (
                <Button href={secondaryHref} variant="onDark" size="lg">
                  {secondaryLabel}
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
