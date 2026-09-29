"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { featuredWork } from "@/config/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function FeaturedWork() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [active, setActive] = useState(0);

  function updateControls() {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < max - 8);

    const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-work-card]"));
    if (!cards.length) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let closestDist = Number.POSITIVE_INFINITY;
    cards.forEach((card, index) => {
      const mid = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(mid - center);
      if (dist < closestDist) {
        closestDist = dist;
        closest = index;
      }
    });
    setActive(closest);
  }

  function scrollByCard(direction: -1 | 1) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-work-card]");
    const amount = card ? card.offsetWidth + 20 : el.clientWidth * 0.75;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateControls();
    el.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);
    return () => {
      el.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
    };
  }, []);

  return (
    <section className="overflow-hidden bg-white py-20 md:py-28">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects that show the range"
            description="Scroll through recent brand, web, and product work from the studio."
          />
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                disabled={!canPrev}
                aria-label="Previous projects"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-foreground transition hover:border-accent/40 hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-35 focus-ring"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                disabled={!canNext}
                aria-label="Next projects"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-foreground transition hover:border-accent/40 hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-35 focus-ring"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent/40 hover:bg-accent-soft focus-ring"
            >
              Browse portfolio
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </Container>

      <div className="relative mt-10">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-[max(1.25rem,calc((100vw-1160px)/2+1.25rem))] pb-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-6 md:px-[max(2rem,calc((100vw-1160px)/2+2rem))]"
        >
          {featuredWork.map((item, index) => (
            <article
              key={item.number}
              data-work-card
              className={cn(
                "group relative w-[78vw] max-w-[420px] shrink-0 snap-start overflow-hidden rounded-[1.75rem] border border-border bg-background sm:w-[340px] md:w-[380px]",
                index === active && "ring-1 ring-accent/25",
              )}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-surface-elevated">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 78vw, 380px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-200">
                    {item.number} · {item.type}
                  </p>
                  <h3 className="font-display mt-2 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/75">
                    {item.summary}
                  </p>
                </div>
              </div>
            </article>
          ))}

          <Link
            href="/portfolio"
            className="flex w-[70vw] max-w-[280px] shrink-0 snap-start flex-col items-start justify-between rounded-[1.75rem] border border-dashed border-accent/35 bg-accent-soft p-6 transition hover:border-accent hover:bg-accent/10 focus-ring sm:w-[240px]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Full archive
            </p>
            <div>
              <p className="font-display text-3xl font-semibold text-foreground">
                See all work
              </p>
              <p className="mt-2 text-sm text-muted">
                Logos, websites, apps, and brand systems.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
              Open portfolio
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </span>
          </Link>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {featuredWork.map((item, index) => (
            <button
              key={item.number}
              type="button"
              aria-label={`Go to ${item.title}`}
              onClick={() => {
                const el = trackRef.current;
                const card = el?.querySelectorAll<HTMLElement>("[data-work-card]")[index];
                card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
              }}
              className={cn(
                "h-2 rounded-full transition focus-ring",
                index === active ? "w-7 bg-accent" : "w-2 bg-border hover:bg-muted",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
