import type { LabelHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & { children: ReactNode; error?: boolean | string };
export function Label({ className, children, error, ...props }: LabelProps) {
  return <label className={cn("mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em]", error ? "text-red-700" : "text-ink", className)} {...props}>{children}</label>;
}
