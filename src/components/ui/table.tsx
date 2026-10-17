import type { TableHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
export function Table({ className, ...props }: TableHTMLAttributes<HTMLTableElement>) {
  return <div className="overflow-x-auto rounded-xl border border-line bg-paper shadow-card"><table className={cn("w-full min-w-[640px] text-left text-sm [&_th]:px-4 [&_th]:py-3.5 [&_th]:text-[11px] [&_th]:font-semibold [&_th]:uppercase [&_th]:tracking-[0.12em] [&_th]:text-burgundy md:[&_th]:px-5 md:[&_th]:py-4 [&_td]:px-4 [&_td]:py-3.5 md:[&_td]:px-5 md:[&_td]:py-4 [&_thead]:bg-parchment [&_thead]:border-b [&_thead]:border-line [&_tbody_tr]:border-t [&_tbody_tr]:border-line [&_tbody_tr]:transition-colors [&_tbody_tr]:duration-200 [&_tbody_tr]:hover:bg-ivory", className)} {...props} /></div>;
}
