"use client";

import { ComponentProps } from "react";
import useScrollDirection from "@/hooks/useScrollDirection";
import { cn } from "@/utils/cn";

export const ScrollHeader = ({ className, ...props }: ComponentProps<"header">) => {
  const direction = useScrollDirection();

  return <header data-scroll={direction} className={cn("group/header", className)} {...props} />;
};
