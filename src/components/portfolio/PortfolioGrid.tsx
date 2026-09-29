"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import {
  getItemsByTab,
  portfolioItems,
  portfolioTabs,
  type PortfolioItem,
  type PortfolioTabId,
} from "@/config/portfolio";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 24;

const floatingImages = portfolioItems
  .filter((item) => item.category === "logo" || item.category === "brand")
  .slice(0, 8);

export function PortfolioGrid({
  limit,
  showHero = true,
}: {
  limit?: number;
  showHero?: boolean;
}) {
  const [tab, setTab] = useState<PortfolioTabId>("all");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [active, setActive] = useState<PortfolioItem | null>(null);
  const reduceMotion = useReducedMotion();

  const filtered = useMemo(() => {
    const list = getItemsByTab(tab);
    if (typeof limit === "number") return list.slice(0, limit);
    return list;
  }, [tab, limit]);

  const shown = typeof limit === "number" ? filtered : filtered.slice(0, visible);
  const canLoadMore = typeof limit !== "number" && visible < filtered.length;

  function changeTab(next: PortfolioTabId) {
    setTab(next);
    setVisible(PAGE_SIZE);
  }

  useEffect(() => {
    if (!active) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <div>
      {showHero ? (
        <div className="mb-12 grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              Portfolio
            </p>
            <h1 className="font-display max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Every brief. On the wall.
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted md:text-lg">
              Logos, systems, websites, apps, illustrations, and more — from past
              and present.
            </p>
          </div>

          <div className="relative mx-auto hidden h-56 w-full max-w-xl lg:block">
            {floatingImages.map((item, index) => {
              const offsets = [
                "left-[4%] top-[18%] rotate-[-10deg]",
                "left-[22%] top-[6%] rotate-[6deg]",
                "left-[40%] top-[20%] rotate-[-4deg]",
                "left-[58%] top-[8%] rotate-[8deg]",
                "left-[12%] top-[48%] rotate-[4deg]",
                "left-[34%] top-[52%] rotate-[-8deg]",
                "left-[54%] top-[46%] rotate-[5deg]",
                "left-[72%] top-[30%] rotate-[-6deg]",
              ];
              return (
                <motion.div
                  key={item.id}
                  className={cn(
                    "absolute h-28 w-24 overflow-hidden rounded-md border border-border bg-white shadow-lg",
                    offsets[index],
                  )}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={
                    reduceMotion
                      ? undefined
                      : { opacity: 1, y: [0, index % 2 === 0 ? -6 : 6, 0] }
                  }
                  transition={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: { delay: index * 0.05, duration: 0.4 },
                          y: {
                            delay: 0.4 + index * 0.05,
                            duration: 5 + index * 0.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }
                  }
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      ) : null}

      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Portfolio categories"
      >
        {portfolioTabs.map((item) => {
          const count =
            item.id === "all"
              ? portfolioItems.length
              : getItemsByTab(item.id).length;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={tab === item.id}
              onClick={() => changeTab(item.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition focus-ring",
                tab === item.id
                  ? "border-accent bg-accent text-white"
                  : "border-border bg-white text-muted hover:border-accent/30 hover:text-foreground",
              )}
            >
              {item.label}
              <span className="ml-2 opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {shown.map((item) => (
            <motion.article
              layout
              key={item.id}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
              className={cn(
                "group relative aspect-square overflow-hidden rounded-sm border border-border",
                item.tile === "dark" && "bg-[#111]",
                item.tile === "light" && "bg-white",
                item.tile === "accent" && "bg-accent",
                item.tile === "media" && "bg-surface-elevated",
              )}
            >
              <button
                type="button"
                onClick={() => setActive(item)}
                className="absolute inset-0 block w-full cursor-zoom-in text-left focus-ring"
                aria-label={`View ${item.title}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={cn(
                    "transition duration-500 group-hover:scale-[1.03]",
                    item.category === "logo" || item.category === "brand"
                      ? "object-contain p-6 md:p-8"
                      : "object-cover",
                  )}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-3 opacity-0 transition group-hover:opacity-100">
                  <p className="truncate text-xs font-medium text-white">
                    {item.title}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-white/75">
                    {item.categoryLabel}
                  </p>
                </div>
              </button>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {typeof limit !== "number" ? (
        <div className="mt-10 flex flex-col items-center gap-3">
          <p className="text-sm text-muted">
            Showing {shown.length} of {filtered.length} projects
          </p>
          {canLoadMore ? (
            <button
              type="button"
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="rounded-full bg-accent px-8 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-accent-secondary focus-ring"
            >
              Load more projects
            </button>
          ) : null}
        </div>
      ) : null}

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="Close preview"
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
              onClick={() => setActive(null)}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={active.title}
              initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <div
                className={cn(
                  "relative min-h-[50vh] flex-1 md:min-h-[60vh]",
                  active.tile === "dark" && "bg-[#111]",
                  active.tile === "light" && "bg-white",
                  active.tile === "accent" && "bg-accent",
                  active.tile === "media" && "bg-surface-elevated",
                )}
              >
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className={cn(
                    active.category === "logo" || active.category === "brand"
                      ? "object-contain p-8 md:p-14"
                      : "object-contain p-4 md:p-8",
                  )}
                  sizes="(max-width: 900px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-border px-5 py-4 md:px-6">
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                    {active.categoryLabel}
                  </p>
                  <p className="truncate font-display text-lg font-semibold text-foreground md:text-xl">
                    {active.title}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-muted transition hover:bg-surface-elevated hover:text-foreground focus-ring"
                >
                  Close
                  <X className="h-4 w-4" aria-hidden />
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
