import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export type Crumb = { name: string; path?: string };

export function Breadcrumbs({
  items,
  className,
  tone = "light",
}: {
  items: Crumb[];
  className?: string;
  tone?: "light" | "dark";
}) {
  if (items.length < 2) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "border-b",
        tone === "dark" ? "border-white/10 bg-slate-950/40" : "border-border bg-white/80",
        className,
      )}
    >
      <Container className="flex flex-wrap items-center gap-1.5 py-3 text-xs sm:text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <span key={`${item.name}-${index}`} className="inline-flex items-center gap-1.5">
              {index > 0 ? (
                <ChevronRight
                  className={cn(
                    "h-3.5 w-3.5 shrink-0",
                    tone === "dark" ? "text-white/35" : "text-muted",
                  )}
                  aria-hidden
                />
              ) : null}
              {isLast || !item.path ? (
                <span
                  className={cn(
                    "font-medium",
                    tone === "dark" ? "text-white/85" : "text-foreground",
                  )}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className={cn(
                    "transition hover:underline",
                    tone === "dark" ? "text-teal-100/80 hover:text-white" : "text-muted hover:text-accent",
                  )}
                >
                  {item.name}
                </Link>
              )}
            </span>
          );
        })}
      </Container>
    </nav>
  );
}
