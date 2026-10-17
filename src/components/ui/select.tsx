import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  error?: string;
};

export function Select({ className, error, children, ...props }: SelectProps) {
  return (
    <div>
      <select
        className={cn("w-full rounded-lg border bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-[border-color,box-shadow] duration-200 focus:border-burgundy focus:ring-2 focus:ring-burgundy/15", error ? "border-red-500" : "border-line", className)}
        aria-invalid={error ? true : undefined}
        {...props}
      >
        {children}
      </select>
      {error && <p className="mt-1 text-xs text-red-700">{error}</p>}
    </div>
  );
}
