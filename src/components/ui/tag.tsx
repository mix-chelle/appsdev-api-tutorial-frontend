import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
type TagProps = { children: ReactNode; className?: string };
export function Tag({ children, className }: TagProps) {
  return <span className={cn("inline-flex items-center rounded-md border border-line bg-parchment px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-burgundy", className)}>{children}</span>;
}
