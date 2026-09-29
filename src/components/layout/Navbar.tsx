"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Palette,
  PenTool,
  Code2,
  BarChart3,
  Cpu,
  Users,
  Cloud,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { navigation, serviceMegaMenu } from "@/config/navigation";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const serviceIconMap: Record<string, LucideIcon> = {
  Palette,
  PenTool,
  Code2,
  BarChart3,
  Cpu,
  Users,
  Cloud,
  Smartphone,
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduceMotion = useReducedMotion();
  const solid = scrolled || open || servicesOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 140);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-border bg-white/95 shadow-sm shadow-slate-900/5 backdrop-blur-md"
          : "border-b border-white/10 bg-slate-950/70 backdrop-blur-md",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-[4.5rem]">
        <BrandLogo solid={solid} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navigation.map((item) =>
            item.label === "Services" ? (
              <div
                key={item.href + item.label}
                className="relative"
                onMouseEnter={openServices}
                onMouseLeave={scheduleCloseServices}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-medium transition-colors focus-ring",
                    solid
                      ? servicesOpen
                        ? "bg-surface-elevated text-foreground"
                        : "text-muted hover:bg-surface-elevated hover:text-foreground"
                      : "text-white/80 hover:bg-white/10 hover:text-white",
                  )}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onFocus={openServices}
                  onBlur={scheduleCloseServices}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      servicesOpen && "rotate-180",
                    )}
                    aria-hidden
                  />
                </Link>
              </div>
            ) : (
              <Link
                key={item.href + item.label}
                href={item.href}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm font-medium transition-colors focus-ring",
                  solid
                    ? "text-muted hover:bg-surface-elevated hover:text-foreground"
                    : "text-white/80 hover:bg-white/10 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="sm">
            {siteConfig.cta.primary}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-xl border focus-ring lg:hidden",
            solid
              ? "border-border bg-white text-foreground"
              : "border-white/20 bg-white/10 text-white",
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => {
            setOpen((v) => !v);
            setMobileServicesOpen(false);
          }}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {servicesOpen ? (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-x-0 top-full hidden border-b border-border bg-white shadow-xl shadow-slate-900/10 lg:block"
            onMouseEnter={openServices}
            onMouseLeave={scheduleCloseServices}
          >
            <div className="container-page py-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_240px]">
                <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                  {serviceMegaMenu.groups.map((group) => (
                    <div key={group.title}>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                        {group.title}
                      </p>
                      <ul className="space-y-1">
                        {group.items.map((service) => {
                          const Icon = serviceIconMap[service.icon] ?? Code2;
                          return (
                            <li key={service.href + service.label}>
                              <Link
                                href={service.href}
                                className="group flex gap-3 rounded-2xl p-3 transition-colors hover:bg-slate-50 focus-ring"
                                onClick={() => setServicesOpen(false)}
                              >
                                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent transition group-hover:bg-accent group-hover:text-white">
                                  <Icon className="h-4 w-4" aria-hidden />
                                </span>
                                <span className="min-w-0">
                                  <span className="block text-sm font-semibold text-foreground">
                                    {service.label}
                                  </span>
                                  <span className="mt-0.5 block text-xs leading-relaxed text-muted">
                                    {service.description}
                                  </span>
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>

                <aside className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 p-6 text-white">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
                      Start here
                    </p>
                    <h3 className="mt-3 font-display text-xl font-semibold leading-snug">
                      {serviceMegaMenu.cta.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {serviceMegaMenu.cta.description}
                    </p>
                  </div>
                  <div className="mt-6 space-y-2">
                    <Link
                      href={serviceMegaMenu.cta.href}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 focus-ring"
                      onClick={() => setServicesOpen(false)}
                    >
                      {serviceMegaMenu.cta.label}
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <Link
                      href={serviceMegaMenu.viewAll.href}
                      className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-4 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10 focus-ring"
                      onClick={() => setServicesOpen(false)}
                    >
                      {serviceMegaMenu.viewAll.label}
                    </Link>
                  </div>
                </aside>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            className="border-t border-border bg-white lg:hidden"
          >
            <nav className="container-page flex max-h-[calc(100dvh-4rem)] flex-col gap-1 overflow-y-auto py-4" aria-label="Mobile">
              {navigation.map((item) =>
                item.label === "Services" ? (
                  <div key={item.href + item.label} className="rounded-xl">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base text-foreground hover:bg-surface-elevated"
                      aria-expanded={mobileServicesOpen}
                      onClick={() => setMobileServicesOpen((v) => !v)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-muted transition-transform",
                          mobileServicesOpen && "rotate-180",
                        )}
                        aria-hidden
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {mobileServicesOpen ? (
                        <motion.div
                          initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mb-2 ml-2 space-y-1 border-l border-border pl-3">
                            <Link
                              href="/services"
                              className="block rounded-lg px-3 py-2 text-sm font-medium text-accent hover:bg-accent-soft"
                              onClick={() => setOpen(false)}
                            >
                              All services
                            </Link>
                            {serviceMegaMenu.groups.flatMap((group) =>
                              group.items.map((service) => (
                                <Link
                                  key={service.href + service.label}
                                  href={service.href}
                                  className="block rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface-elevated hover:text-foreground"
                                  onClick={() => setOpen(false)}
                                >
                                  {service.label}
                                </Link>
                              )),
                            )}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.href + item.label}
                    href={item.href}
                    className="rounded-xl px-3 py-3 text-base text-foreground hover:bg-surface-elevated"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <Button href="/contact" className="mt-3 w-full">
                {siteConfig.cta.primary}
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
