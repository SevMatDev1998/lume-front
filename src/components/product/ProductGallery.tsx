"use client";

import { MouseEvent, useState } from "react";
import { cn } from "@/utils/cn";
import { ProductImage } from "./ProductImage";

const moveZoomOrigin = ({ clientX, clientY, currentTarget }: MouseEvent<HTMLDivElement>) => {
  const { left, top, width, height } = currentTarget.getBoundingClientRect();
  currentTarget.style.setProperty("--zoom-x", `${((clientX - left) / width) * 100}%`);
  currentTarget.style.setProperty("--zoom-y", `${((clientY - top) / height) * 100}%`);
};

const ZoomableImage = ({ src, alt }: { src?: string; alt: string }) => {
  const [tapped, setTapped] = useState(false);

  return (
    <div
      onMouseMove={moveZoomOrigin}
      onClick={(event) => {
        moveZoomOrigin(event);
        setTapped(!tapped);
      }}
      className="group cursor-zoom-in overflow-hidden rounded-xl"
    >
      <ProductImage
        src={src}
        alt={alt}
        sizes="100vw"
        className={cn(
          "aspect-4/3 origin-[var(--zoom-x,50%)_var(--zoom-y,50%)] transition-transform duration-200 group-hover:scale-200",
          tapped && "pointer-coarse:scale-200",
        )}
        priority
      />
    </div>
  );
};

export const ProductGallery = ({ images, name }: { images: string[]; name: string }) => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <ZoomableImage key={images[active]} src={images[active]} alt={name} />
      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-2">
          {images.slice(0, 8).map((image, index) => (
            <button
              key={image}
              onClick={() => setActive(index)}
              aria-label={`Show photo ${index + 1}`}
              className={cn(
                "overflow-hidden rounded-md ring-offset-2 transition",
                index === active ? "ring-2 ring-ink" : "opacity-70 hover:opacity-100",
              )}
            >
              <ProductImage src={image} alt="" sizes="(min-width: 1024px) 12vw, 25vw" className="aspect-4/3" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
