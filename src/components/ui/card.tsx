import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
type CardProps = { children: ReactNode; className?: string };
export function Card({ children, className }: CardProps) {
  return <div className={cn("overflow-hidden rounded-xl border border-line bg-paper text-ink shadow-soft transition-[box-shadow,border-color] duration-200 ease-out", className)}>{children}</div>;
}
