import { ComponentProps, ReactNode } from "react";
import { cn } from "@/utils/cn";

const CONTROL_CLASS =
  "w-full rounded-md border border-line bg-white px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted/70 focus:border-ink";

type FieldProps = { label?: string; error?: string; children: ReactNode };

export const Field = ({ label, error, children }: FieldProps) => (
  <label className="flex flex-col gap-1.5">
    {label && <span className="text-xs text-muted">{label}</span>}
    {children}
    {error && <span className="text-xs text-red-600">{error}</span>}
  </label>
);

export const Input = ({ className, ...props }: ComponentProps<"input">) => (
  <input className={cn(CONTROL_CLASS, className)} {...props} />
);

export const Textarea = ({ className, ...props }: ComponentProps<"textarea">) => (
  <textarea className={cn(CONTROL_CLASS, "min-h-24 resize-y", className)} {...props} />
);

export const Select = ({ className, ...props }: ComponentProps<"select">) => (
  <select className={cn(CONTROL_CLASS, "appearance-none", className)} {...props} />
);
