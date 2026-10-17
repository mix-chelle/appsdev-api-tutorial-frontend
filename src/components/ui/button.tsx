import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "tertiary";
  children: ReactNode;
};

const variants = {
  primary: "bg-burgundy text-ivory hover:bg-wine",
  secondary: "border border-line bg-paper text-burgundy hover:border-burgundy/40 hover:bg-parchment",
  tertiary: "text-burgundy hover:text-claret",
};

export function Button({ variant = "primary", className, children, type = "button", ...props }: ButtonProps) {
  return (
    <button type={type} className={cn("inline-flex min-h-11 cursor-pointer items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium tracking-wide transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 motion-reduce:transform-none", variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
