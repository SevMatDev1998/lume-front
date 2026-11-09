import Image from "next/image";
import { Placeholder } from "@/components/ui";
import { cn } from "@/utils/cn";

type ProductImageProps = {
  src?: string;
  alt: string;
  sizes: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export const ProductImage = ({ src, alt, sizes, className, imageClassName, priority }: ProductImageProps) =>
  src ? (
    <div className={cn("relative overflow-hidden bg-soft", className)}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={cn("object-cover", imageClassName)} />
    </div>
  ) : (
    <Placeholder className={className}>Photo</Placeholder>
  );
