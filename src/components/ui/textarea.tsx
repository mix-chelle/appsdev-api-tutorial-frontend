import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string;
};

export function Textarea({ className, error, ...props }: TextareaProps) {
  return (
    <div>
      <textarea className={cn("w-full rounded-lg border bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-muted/70 focus:border-burgundy focus:ring-2 focus:ring-burgundy/15", error ? "border-red-500" : "border-line", className)} {...props} />
      {error && <p className="mt-1 text-xs text-red-700">{error}</p>}
    </div>
  );
}
