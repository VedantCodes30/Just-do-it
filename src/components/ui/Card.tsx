import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "highlight";
}

export function Card({
  className,
  variant = "default",
  children,
  ...props
}: CardProps) {
  const baseStyles = "rounded-3xl p-6 transition-all";

  const variants = {
    default: "bg-[var(--color-brand-surface)] border border-white/5 shadow-2xl",
    highlight: "bg-orange-gradient text-white shadow-orange-500/20 shadow-xl",
  };

  return (
    <div
      className={twMerge(clsx(baseStyles, variants[variant], className))}
      {...props}
    >
      {children}
    </div>
  );
}
