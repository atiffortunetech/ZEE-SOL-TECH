import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "outline" | "light" | "onDark";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
};

const variants = {
  primary: "bg-accent text-white hover:bg-accent-secondary shadow-sm",
  secondary: "bg-foreground text-white hover:bg-foreground/90",
  ghost: "bg-transparent text-foreground hover:bg-surface-elevated",
  outline:
    "bg-white text-foreground border border-border hover:border-accent/40 hover:bg-accent-soft",
  light: "bg-white text-slate-900 hover:bg-white/90 shadow-sm",
  onDark:
    "border border-white/35 bg-transparent text-white hover:border-white hover:bg-white/10",
};

const sizes = {
  sm: "h-10 px-4 text-sm font-semibold",
  md: "h-11 px-5 text-sm font-semibold",
  lg: "h-12 px-6 text-base font-semibold",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-2xl transition-colors duration-200 focus-ring disabled:opacity-60 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
