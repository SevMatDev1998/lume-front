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
};

export const PageHeading = ({ eyebrow, title, children, actions, image }: PageHeadingProps) => {
  const content = (
    <Container
      className={cn("relative py-10 sm:py-14", image && "flex min-h-105 flex-col justify-center sm:min-h-120")}
    >
      {eyebrow && (
        <p className={cn("mb-3 text-xs tracking-widest uppercase", image ? "text-white/70" : "text-muted")}>
          {eyebrow}
        </p>
      )}
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
      {children && <div className={cn("mt-3 max-w-2xl", image ? "text-white/80" : "text-muted")}>{children}</div>}
      {actions && <div className="mt-6 flex flex-wrap gap-3">{actions}</div>}
    </Container>
  );

  if (!image) return content;

  return (
    <section className="relative overflow-hidden bg-neutral-600 text-white">
      <div className="absolute inset-0 lg:left-auto lg:w-[60%]">
        <Image
          src={image}
          alt=""
          fill
          unoptimized
          preload
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover object-[70%_top]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent lg:from-neutral-600 lg:via-transparent lg:via-30%" />
      </div>
      {content}
    </section>
  );
};
