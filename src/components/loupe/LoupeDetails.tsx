"use client";

import Image from "next/image";
import { useState } from "react";
import { LoupePage } from "@/types";
import { cn } from "@/utils/cn";

type LoupeDetailsProps = LoupePage["details"][number] & { startNumber: number; flipped?: boolean; name: string };

export const LoupeDetails = ({ image, spots, startNumber, flipped, name }: LoupeDetailsProps) => {
  const [active, setActive] = useState(0);

  const photo = (
    <div className="relative aspect-square overflow-hidden rounded-2xl bg-soft">
      <Image src={image} alt={name} fill unoptimized sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      {spots.map((spot, index) => (
        <button
          key={spot.title}
          type="button"
          aria-label={spot.title}
          onMouseEnter={() => setActive(index)}
          onFocus={() => setActive(index)}
          onClick={() => setActive(index)}
          style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
          className={cn(
            "absolute flex size-7.5 -translate-1/2 items-center justify-center rounded-full bg-[#8a1414] text-[13px] font-semibold text-white transition-transform",
            index === active && "scale-125",
          )}
        >
          {startNumber + index}
        </button>
      ))}
    </div>
  );

  return (
    <div className={cn("grid items-center gap-10 lg:gap-16", flipped ? "lg:grid-cols-[1fr_1.1fr]" : "lg:grid-cols-[1.1fr_1fr]")}>
      {!flipped && photo}
      <div className="flex flex-col">
        {spots.map((spot, index) => (
          <button
            key={spot.title}
            type="button"
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
            className={cn(
              "border-b border-line py-3.5 text-left transition-opacity",
              flipped && "lg:text-right",
              index === active ? "opacity-100" : "opacity-55 hover:opacity-100",
            )}
          >
            <span className="block text-xl font-normal">
              {startNumber + index}. {spot.title}
            </span>
            <span className="mt-1 block font-light text-muted">{spot.text}</span>
          </button>
        ))}
      </div>
      {flipped && photo}
    </div>
  );
};
