import Link from "next/link";
import { ComponentProps } from "react";
import { cn } from "@/utils/cn";

type Variant = "primary" | "outline" | "light";
type Size = "sm" | "md";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-ink/85",
  outline: "border border-ink text-ink hover:bg-ink hover:text-white",
  light: "bg-white text-ink hover:bg-white/85",
};

const SIZES: Record<Size, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
};

type StyleProps = { variant?: Variant; size?: Size; block?: boolean };

const buttonClass = ({ variant = "primary", size = "md", block }: StyleProps, className?: string) =>
  cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors disabled:opacity-50",
    VARIANTS[variant],
    SIZES[size],
    block && "w-full",
    className,
  );

export const Button = ({ variant, size, block, className, ...props }: ComponentProps<"button"> & StyleProps) => (
  <button className={buttonClass({ variant, size, block }, className)} {...props} />
);

export const ButtonLink = ({ variant, size, block, className, ...props }: ComponentProps<typeof Link> & StyleProps) => (
  <Link className={buttonClass({ variant, size, block }, className)} {...props} />
);
