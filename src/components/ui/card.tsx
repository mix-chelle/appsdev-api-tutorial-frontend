import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
type CardProps = { children: ReactNode; className?: string };
export function Card({ children, className }: CardProps) {
  return <div className={cn("overflow-hidden rounded-3xl border border-line bg-paper text-ink shadow-card transition-[translate,box-shadow,border-color] duration-300 ease-out", className)}>{children}</div>;
}
