"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { LoupePage } from "@/types";
import { cn } from "@/utils/cn";

type MagnificationViewerProps = Pick<LoupePage, "magnifications" | "viewer"> & {
  image: StaticImageData;
};

export const MagnificationViewer = ({
  image,
  magnifications,
  viewer,
}: MagnificationViewerProps) => {
  const [active, setActive] = useState(0);
  const current = magnifications[active];

  const facts = [
    { value: current.value, label: "magnification" },
    { value: current.fieldOfView, label: "field of view" },
    { value: current.depthOfField, label: "depth of field" },
  ];

  return (
    <div className="grid items-center gap-14 lg:grid-cols-2">
      <div className="relative mx-auto aspect-square w-full max-w-105 overflow-hidden rounded-full border border-line bg-soft">
        <Image
          src={image}
          alt={`Preview at ${current.value}`}
          fill
          unoptimized
          sizes="420px"
          style={{ transform: `scale(${current.zoom})` }}
          className="object-cover transition-transform duration-500"
        />
      </div>
      <div>
        <p className="text-xs tracking-widest text-muted uppercase">
          {viewer.eyebrow}
        </p>
        <h2 className="mt-2 mb-3.5 text-4xl font-light tracking-tight sm:text-[2.75rem]">
          {viewer.title}
        </h2>
        <p className="max-w-[60ch] text-lg font-light text-muted">
          {viewer.text}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {magnifications.map((magnification, index) => (
            <button
              key={magnification.value}
              type="button"
              aria-pressed={index === active}
              onClick={() => setActive(index)}
              className={cn(
                "rounded-full border px-4.5 py-2.5 text-[15px] font-medium tabular-nums",
                index === active
                  ? "border-ink bg-ink text-page"
                  : "border-line hover:border-ink",
              )}
            >
              {magnification.value}
            </button>
          ))}
        </div>
        <dl className="mt-6 grid grid-cols-3 gap-4">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dd className="text-[2.125rem] font-light tabular-nums">
                {fact.value}
              </dd>
              <dt className="text-[13px] text-muted">{fact.label}</dt>
            </div>
          ))}
        </dl>
        <p className="mt-4">{current.use}</p>
      </div>
    </div>
  );
};
