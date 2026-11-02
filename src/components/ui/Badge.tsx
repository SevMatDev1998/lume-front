import { ComponentProps } from "react";
import { cn } from "@/utils/cn";

export const Badge = ({ className, ...props }: ComponentProps<"span">) => (
  <span
    className={cn(
      "inline-flex w-max items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs text-muted",
      className,
    )}
    {...props}
  />
);

export const Chip = ({ className, ...props }: ComponentProps<"span">) => (
  <span className={cn("rounded border border-line bg-white px-1.5 py-0.5 text-[11px]", className)} {...props} />
);
