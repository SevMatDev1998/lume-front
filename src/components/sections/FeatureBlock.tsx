import Image from "next/image";
import { Container } from "@/components/ui";
import { ShowcaseFeature } from "@/types";
import { cn } from "@/utils/cn";

type FeatureBlockProps = ShowcaseFeature & {
  alt: string;
  flipped?: boolean;
  imageClassName?: string;
};

export const FeatureBlock = ({
  title,
  image,
  subtitle,
  paragraphs,
  points,
  alt,
  flipped,
  imageClassName,
}: FeatureBlockProps) => (
  <section className="border-b border-line">
    <Container className="grid items-center gap-10 py-16 sm:py-22 lg:grid-cols-2 lg:gap-16">
      <div
        className={cn(
          "relative aspect-4/3 overflow-hidden rounded-2xl bg-soft",
          flipped && "lg:order-last",
        )}
      >
        <Image
          src={image}
          alt={alt}
          fill
          unoptimized
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={cn("object-cover", imageClassName)}
        />
      </div>
      <div className="flex flex-col gap-4.5">
        <h2 className="text-4xl leading-tight font-light tracking-tight sm:text-5xl">
          {title}
        </h2>
        {subtitle && <p className="text-xl font-normal">{subtitle}</p>}
        {paragraphs?.map((paragraph) => (
          <p key={paragraph} className="text-lg font-light text-muted">
            {paragraph}
          </p>
        ))}
        {points && (
          <ul className="flex list-disc flex-col gap-1.5 pl-5 text-lg font-light text-muted">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </Container>
  </section>
);
