"use client";

import { ReactNode, useId, useState } from "react";

export const ReadMore = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <div className="flex flex-col gap-4">
      <div
        id={contentId}
        className="grid transition-[grid-template-rows] duration-500 ease-out data-[open=false]:grid-rows-[0fr] data-[open=true]:grid-rows-[1fr]"
        data-open={isOpen}
      >
        <div className="overflow-hidden" inert={!isOpen}>
          {children}
        </div>
      </div>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((open) => !open)}
        className="group relative inline-flex h-14 w-max items-center gap-3 pr-7"
      >
        <span className="absolute inset-y-0 left-0 w-14 rounded-full bg-ink transition-[width] duration-500 ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:w-full group-focus-visible:w-full" />
        <svg
          viewBox="0 0 24 24"
          className="relative m-4 size-6 stroke-white stroke-[1.5] transition-transform duration-300 group-aria-expanded:rotate-45"
          aria-hidden
        >
          <path d="M12 3v18M3 12h18" />
        </svg>
        <span className="relative text-sm font-bold tracking-[0.15em] text-ink uppercase transition-colors duration-300 group-hover:text-white group-focus-visible:text-white">
          {isOpen ? "Show less" : "Read more"}
        </span>
      </button>
    </div>
  );
};
