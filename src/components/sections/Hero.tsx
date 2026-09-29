"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { homeHeroSlides } from "@/config/heroes";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroLeadForm } from "@/components/sections/HeroLeadForm";
import { cn } from "@/lib/utils";

export function Hero() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduceMotion = useReducedMotion();
  const slide = homeHeroSlides[index] ?? homeHeroSlides[0];
  const timerRef = useRef<number | null>(null);

  function resetTimer() {
    if (timerRef.current) window.clearInterval(timerRef.current);
    if (reduceMotion) return;
    timerRef.current = window.setInterval(() => {
      setDirection(1);
      setIndex((current) => (current + 1) % homeHeroSlides.length);
    }, 6500);
  }

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduceMotion]);

  function goTo(next: number) {
    const normalized = (next + homeHeroSlides.length) % homeHeroSlides.length;
    setDirection(normalized > index || (index === homeHeroSlides.length - 1 && normalized === 0) ? 1 : -1);
    if (index === 0 && normalized === homeHeroSlides.length - 1) setDirection(-1);
    if (index === homeHeroSlides.length - 1 && normalized === 0) setDirection(1);
    setIndex(normalized);
    resetTimer();
  }

  function go(delta: number) {
    setDirection(delta > 0 ? 1 : -1);
    setIndex((current) => (current + delta + homeHeroSlides.length) % homeHeroSlides.length);
    resetTimer();
  }

  const slideTransition = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 260, damping: 32, mass: 0.8 };

  return (
    <section className="relative overflow-hidden pt-24 md:pt-28">
      {/* Background track — slides horizontally */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 flex h-full"
          animate={{ x: `${-index * 100}vw` }}
          transition={slideTransition}
        >
          {homeHeroSlides.map((item, i) => (
            <div key={item.id} className="relative h-full w-screen shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority={i === 0}
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/55 to-slate-900/35" />
            </div>
          ))}
        </motion.div>
      </div>

      <Container className="relative grid items-center gap-8 py-14 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="overflow-hidden text-white">
          <motion.div
            key={slide.id}
            initial={
              reduceMotion
                ? false
                : { x: direction > 0 ? 72 : -72, opacity: 0.35 }
            }
            animate={{ x: 0, opacity: 1 }}
            transition={slideTransition}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
              {slide.eyebrow}
            </p>
            <h1 className="font-display max-w-2xl text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              {slide.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              {slide.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={slide.ctaHref} variant="light" size="lg">
                {slide.ctaLabel}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button href="/portfolio" variant="onDark" size="lg">
                View portfolio
              </Button>
            </div>
          </motion.div>

          <div className="mt-10 flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition hover:bg-white/10 focus-ring"
              aria-label="Previous slide"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition hover:bg-white/10 focus-ring"
              aria-label="Next slide"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
            <div className="ml-2 flex gap-2" role="tablist" aria-label="Hero slides">
              {homeHeroSlides.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={cn(
                    "h-2.5 rounded-full transition focus-ring",
                    i === index ? "w-8 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70",
                  )}
                />
              ))}
            </div>
          </div>

          <p className="mt-6 text-sm text-white/60">
            Prefer email?{" "}
            <Link href="/contact" className="underline underline-offset-2 hover:text-white">
              Open full contact form
            </Link>
          </p>
        </div>

        <HeroLeadForm className="w-full lg:ml-auto lg:max-w-[420px]" />
      </Container>
    </section>
  );
}
