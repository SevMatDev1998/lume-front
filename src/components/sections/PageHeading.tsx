import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { Container } from "@/components/ui";
import { cn } from "@/utils/cn";

type PageHeadingProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  actions?: ReactNode;
  image?: StaticImageData;
  className?: string;
  imageClassName?: string;
  fullScreen?: boolean;
};

export const PageHeading = ({
  eyebrow,
  title,
  children,
  actions,
  image,
  className,
  imageClassName,
  fullScreen,
}: PageHeadingProps) => {
  const content = (
    <Container
      className={cn(
        "relative py-10 sm:py-14",
        image && "flex min-h-105 flex-col justify-center sm:min-h-120",
        fullScreen &&
          "min-h-[calc(100svh-var(--spacing-header))] max-lg:justify-end sm:min-h-[calc(100svh-var(--spacing-header))]",
      )}
    >
      {eyebrow && (
        <p className={cn("mb-3 text-xs tracking-widest uppercase", image ? "text-white/70" : "text-muted")}>
          {eyebrow}
        </p>
      )}
      <h1
        className={cn(
          "text-3xl font-semibold tracking-tight sm:text-4xl",
          fullScreen && "text-4xl leading-tight font-light sm:text-6xl",
        )}
      >
        {title}
      </h1>
      {children && (
        <div
          className={cn(
            "mt-3 max-w-2xl",
            image ? "text-white/80" : "text-muted",
            fullScreen && "mt-8 flex max-w-lg flex-col gap-6 text-lg leading-relaxed font-light sm:text-xl",
          )}
        >
          {children}
        </div>
      )}
      {actions && <div className={cn("mt-6 flex flex-wrap gap-3", fullScreen && "mt-10")}>{actions}</div>}
    </Container>
  );

  if (!image) return content;

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-(--heading-bg) text-white [--heading-bg:var(--color-neutral-600)]",
        className,
      )}
    >
      <div
        className={cn("absolute inset-0", fullScreen ? "lg:left-auto lg:w-[60%]" : "sm:left-auto sm:h-full sm:max-w-[60%]")}
        style={fullScreen ? undefined : { aspectRatio: `${image.width} / ${image.height}` }}
      >
        <Image
          src={image}
          alt=""
          fill
          unoptimized
          preload
          sizes="(min-width: 1024px) 60vw, 100vw"
          className={cn(
            "object-cover object-[70%_top]",
            fullScreen && "max-lg:object-[calc(50%-20px)_top]",
            imageClassName,
          )}
        />
        <div
          className={cn(
            "absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent lg:from-(--heading-bg) lg:via-transparent lg:via-30%",
            !fullScreen && "sm:from-(--heading-bg) sm:via-transparent sm:via-30%",
          )}
        />
      </div>
      {content}
    </section>
  );
};
