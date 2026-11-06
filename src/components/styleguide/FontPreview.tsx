"use client";

import { ReactNode, useState } from "react";
import { cn } from "@/utils/cn";

type FontOption = { label: string; fontFamily: string };

export const FontPreview = ({ options, children }: { options: FontOption[]; children: ReactNode }) => {
  const [active, setActive] = useState(options[0]);

  return (
    <>
      <div className="sticky top-header z-20 -mx-4 mb-8 flex gap-2 overflow-x-auto border-b border-line bg-white/95 px-4 py-3 backdrop-blur sm:mx-0 sm:px-0">
        {options.map((option) => (
          <button
            key={option.label}
            onClick={() => setActive(option)}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2 text-sm transition-colors",
              option.label === active.label ? "border-ink bg-ink text-white" : "border-line hover:border-ink",
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div style={{ fontFamily: active.fontFamily }}>{children}</div>
    </>
  );
};
