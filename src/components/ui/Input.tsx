import { clsx } from "clsx";
import { InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={twMerge(
          clsx(
            "w-full p-4 rounded-2xl bg-[var(--color-brand-surface)] text-white placeholder-white/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-orange)] transition-all",
            className,
          ),
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };
