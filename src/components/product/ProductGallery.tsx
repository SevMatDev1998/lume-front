"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";
import { ProductImage } from "./ProductImage";

export const ProductGallery = ({ images, name }: { images: string[]; name: string }) => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <ProductImage
        src={images[active]}
        alt={name}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="aspect-4/3 rounded-xl"
        priority
      />
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
