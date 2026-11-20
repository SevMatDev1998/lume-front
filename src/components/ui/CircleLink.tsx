import Link from "next/link";
import { ComponentProps } from "react";
import { cn } from "@/utils/cn";

export const CircleLink = ({ className, children, ...props }: ComponentProps<typeof Link>) => (
  <Link className={cn("group relative inline-flex h-14 w-max items-center px-10", className)} {...props}>
    <span className="absolute inset-y-0 left-0 w-14 rounded-full bg-black/15 transition-[width] duration-500 ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:w-full group-focus-visible:w-full" />
    <span className="relative text-sm font-bold tracking-[0.15em] text-ink uppercase">{children}</span>
  </Link>
);
