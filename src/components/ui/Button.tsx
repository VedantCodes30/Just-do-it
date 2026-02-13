import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-bold transition-all disabled:opacity-50 disabled:pointer-events-none active:scale-95";

  const variants = {
    primary:
      "bg-orange-gradient text-white shadow-lg hover:shadow-orange-500/20 hover:scale-105",
    secondary:
      "bg-transparent border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizes = {
    sm: "gap-2 px-4 py-2 text-sm",
    md: "gap-2 px-6 py-3 text-base",
    lg: "gap-3 px-8 py-4 text-lg",
  };

  return (
    <button
      className={twMerge(
        clsx(baseStyles, variants[variant], sizes[size], className),
      )}
      {...props}
    />
  );
}
