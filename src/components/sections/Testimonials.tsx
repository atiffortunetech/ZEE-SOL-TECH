"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/config/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const AUTO_MS = 5200;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const touchStartX = useRef<number | null>(null);

  const count = testimonials.length;
  const active = testimonials[index] ?? testimonials[0];

  function goTo(next: number, dir?: number) {
    const normalized = ((next % count) + count) % count;
    setDirection(dir ?? (normalized > index ? 1 : -1));
    if (index === 0 && normalized === count - 1) setDirection(-1);
    if (index === count - 1 && normalized === 0) setDirection(1);
    setIndex(normalized);
  }

  function go(delta: number) {
    setDirection(delta > 0 ? 1 : -1);
    setIndex((current) => (current + delta + count) % count);
  }

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = window.setInterval(() => go(1), AUTO_MS);
    return () => window.clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, reduceMotion, index, count]);

  const slideTransition = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 260, damping: 30, mass: 0.8 };

  // Show 3 cards on desktop: previous, active, next
  const visible = [-1, 0, 1].map((offset) => {
    const i = (index + offset + count) % count;
    return { item: testimonials[i], offset, i };
  });

  return (
    <section
      className="overflow-hidden border-y border-border bg-white py-20 md:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Testimonials"
            title="What clients say about working with us"
            description="Real feedback from branding, website, software, CRM, and product collaborations."
          />
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:border-accent/40 hover:bg-accent-soft focus-ring"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:border-accent/40 hover:bg-accent-soft focus-ring"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Mobile / tablet: single featured slide */}
        <div
          className="relative mt-12 md:hidden"
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => {
            if (touchStartX.current == null) return;
            const delta = (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
            if (Math.abs(delta) > 40) go(delta < 0 ? 1 : -1);
            touchStartX.current = null;
          }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article
              key={active.id}
              custom={direction}
              initial={
                reduceMotion
                  ? false
                  : { x: direction > 0 ? 56 : -56, opacity: 0 }
              }
              animate={{ x: 0, opacity: 1 }}
              exit={
                reduceMotion
                  ? undefined
                  : { x: direction > 0 ? -40 : 40, opacity: 0 }
              }
              transition={slideTransition}
              className="rounded-[1.75rem] border border-border bg-background p-6 shadow-sm"
            >
              <Quote className="h-8 w-8 text-accent/40" aria-hidden />
              <div className="mt-4 flex gap-1" aria-label={`${active.rating} out of 5 stars`}>
                {Array.from({ length: active.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-5 text-lg leading-relaxed text-foreground">
                “{active.quote}”
              </p>
              <div className="mt-8 flex items-center gap-3 border-t border-border pt-5">
                <div className="relative h-11 w-11 overflow-hidden rounded-full">
                  <Image
                    src={active.avatar}
                    alt={active.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold">{active.name}</p>
                  <p className="text-xs text-muted">
                    {active.position} · {active.company}
                  </p>
                </div>
                <span className="ml-auto rounded-full bg-accent-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent">
                  {active.projectType}
                </span>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        {/* Desktop: advanced multi-card stage */}
        <div className="relative mt-12 hidden md:block">
          <div className="grid grid-cols-3 items-stretch gap-5">
            {visible.map(({ item, offset, i }) => {
              const isCenter = offset === 0;
              return (
                <motion.button
                  key={`${item.id}-${i}-${offset}`}
                  type="button"
                  onClick={() => {
                    if (offset !== 0) go(offset);
                  }}
                  animate={{
                    scale: isCenter ? 1 : 0.94,
                    y: isCenter ? 0 : 12,
                    opacity: isCenter ? 1 : 0.55,
                  }}
                  transition={slideTransition}
                  className={cn(
                    "rounded-[1.75rem] border p-6 text-left transition focus-ring",
                    isCenter
                      ? "border-accent/25 bg-background shadow-xl shadow-slate-900/5"
                      : "border-border bg-surface cursor-pointer hover:opacity-80",
                  )}
                  aria-current={isCenter ? "true" : undefined}
                >
                  <div className="flex items-start justify-between gap-3">
                    <Quote
                      className={cn(
                        "h-7 w-7",
                        isCenter ? "text-accent/45" : "text-muted/40",
                      )}
                      aria-hidden
                    />
                    <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-accent">
                      {item.projectType}
                    </span>
                  </div>
                  <div className="mt-4 flex gap-1">
                    {Array.from({ length: item.rating }).map((_, star) => (
                      <Star
                        key={star}
                        className={cn(
                          "h-3.5 w-3.5",
                          isCenter
                            ? "fill-accent text-accent"
                            : "fill-muted/40 text-muted/40",
                        )}
                      />
                    ))}
                  </div>
                  <p
                    className={cn(
                      "mt-5 leading-relaxed",
                      isCenter
                        ? "text-base text-foreground md:text-lg"
                        : "line-clamp-5 text-sm text-muted",
                    )}
                  >
                    “{item.quote}”
                  </p>
                  <div className="mt-8 flex items-center gap-3 border-t border-border pt-5">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-foreground">
                        {item.name}
                      </p>
                      <p className="truncate text-xs text-muted">
                        {item.position} · {item.company}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Testimonials">
            {testimonials.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show testimonial from ${item.name}`}
                onClick={() => goTo(i)}
                className={cn(
                  "h-2.5 rounded-full transition focus-ring",
                  i === index ? "w-8 bg-accent" : "w-2.5 bg-border hover:bg-muted",
                )}
              />
            ))}
          </div>
          <p className="text-xs text-muted">
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            {!reduceMotion ? (
              <span className="ml-2 opacity-70">
                · {paused ? "Paused" : "Auto-playing"}
              </span>
            ) : null}
          </p>
        </div>
      </Container>
    </section>
  );
}
