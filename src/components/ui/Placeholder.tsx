import { ComponentProps } from "react";
import { cn } from "@/utils/cn";

export const Placeholder = ({ className, children, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "flex items-center justify-center bg-linear-to-br from-[#d9dde4] to-[#eef0f3] text-xs text-muted",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);
