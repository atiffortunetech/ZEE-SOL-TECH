"use client";

import { useId } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

function LogoMark({ bright }: { bright?: boolean }) {
  const id = useId().replace(/:/g, "");
  const gradientId = `zeeMark-${id}`;

  return (
    <svg
      viewBox="0 0 92 92"
      className="h-9 w-9 shrink-0 md:h-10 md:w-10"
      aria-hidden
    >
      <defs>
        <linearGradient id={gradientId} x1="12" y1="14" x2="96" y2="106" gradientUnits="userSpaceOnUse">
          <stop stopColor={bright ? "#2dd4bf" : "#14b8a6"} />
          <stop offset="1" stopColor="#0f766e" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="92" height="92" rx="22" fill={`url(#${gradientId})`} />
      <path
        fill="#ffffff"
        d="M25 23h42v13H48.5L62 52h12v17H25V56h24.5L37 36H25V23z"
      />
      <rect x="62" y="61" width="8" height="8" fill={bright ? "#115e59" : "#0f766e"} />
      <rect x="70" y="61" width="8" height="8" fill={bright ? "#115e59" : "#0f766e"} />
      <rect x="70" y="69" width="8" height="8" fill={bright ? "#115e59" : "#0f766e"} />
    </svg>
  );
}

export function BrandLogo({
  variant = "auto",
  solid = true,
  className,
}: {
  variant?: "light" | "dark" | "auto";
  solid?: boolean;
  className?: string;
}) {
  const onDark = variant === "dark" || (variant === "auto" && !solid);

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex max-w-[min(100%,220px)] items-center gap-2.5 focus-ring rounded-lg",
        className,
      )}
      aria-label={`${siteConfig.name} home`}
    >
      <LogoMark bright={onDark} />
      <span className="min-w-0 leading-tight">
        <span
          className={cn(
            "block font-display text-[15px] font-semibold tracking-tight md:text-base",
            onDark ? "text-white" : "text-foreground",
          )}
        >
          {siteConfig.name}
        </span>
        <span
          className={cn(
            "mt-0.5 block text-[8px] font-semibold uppercase tracking-[0.14em] md:text-[9px] md:tracking-[0.16em]",
            onDark ? "text-white/55" : "text-muted",
          )}
        >
          Software House & Digital Studio
        </span>
      </span>
    </Link>
  );
}
