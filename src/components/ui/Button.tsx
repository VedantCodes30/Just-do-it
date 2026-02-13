import { clsx } from "clsx";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "success" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "brutal-btn flex items-center justify-center gap-2",
          {
            "bg-[var(--color-main)]": variant === "primary",
            "bg-[var(--color-secondary)] text-white": variant === "secondary",
            "bg-[var(--color-danger)] text-white": variant === "danger",
            "bg-[var(--color-success)]": variant === "success",
            "bg-white text-black border-3 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none":
              variant === "outline",
            "text-sm py-2 px-4 shadow-[3px_3px_0px_0px_#000000]": size === "sm",
            "text-base py-3 px-6": size === "md",
            "text-lg py-4 px-8 shadow-[6px_6px_0px_0px_#000000]": size === "lg",
          },
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button };
