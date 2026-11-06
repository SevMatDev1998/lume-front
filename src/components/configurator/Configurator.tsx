"use client";

import { ReactNode, useState } from "react";
import { swatch } from "@/constants/catalog";
import { CatalogProduct } from "@/types";
import { optionValues } from "@/utils/catalog";
import { OrderButton } from "@/components/product/OrderButton";
import { cn } from "@/utils/cn";
import { ConfiguratorSelection, ConfiguratorViewer } from "./ConfiguratorViewer";

const OptionGroup = ({ step, title, children }: { step: number; title: string; children: ReactNode }) => (
  <fieldset className="border-b border-line py-5 last:border-b-0">
    <legend className="mb-3 text-xs tracking-wider text-muted uppercase">
      {step}. {title}
    </legend>
    <div className="flex flex-wrap gap-2">{children}</div>
  </fieldset>
);

const OptionButton = ({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) => (
  <button
    onClick={onClick}
    className={cn(
      "rounded-full border px-4 py-2 text-sm transition-colors",
      active ? "border-ink bg-ink text-white" : "border-line hover:border-ink",
    )}
  >
    {children}
  </button>
);

type ConfiguratorProps = { loupes: CatalogProduct[]; frames: CatalogProduct[] };

export const Configurator = ({ loupes, frames }: ConfiguratorProps) => {
  const [loupe, setLoupe] = useState(loupes[0]);
  const [magnification, setMagnification] = useState(optionValues(loupes[0], "MAGNIFICATION")[0] ?? "");
  const [frame, setFrame] = useState(frames[0]);
  const [color, setColor] = useState(optionValues(frames[0], "COLOR")[0] ?? "");

  const selectLoupe = (model: ConfiguratorSelection["loupe"]) => {
    setLoupe(model);
    setMagnification(optionValues(model, "MAGNIFICATION")[0] ?? "");
  };

  const selectFrame = (model: ConfiguratorSelection["frame"]) => {
    setFrame(model);
    setColor(optionValues(model, "COLOR")[0] ?? "");
  };

  return (
    <div className="grid overflow-hidden rounded-2xl border border-line lg:grid-cols-[1fr_380px]">
      <div className="lg:sticky lg:top-header lg:h-[calc(100vh-var(--spacing-header))] lg:max-h-[640px]">
        <ConfiguratorViewer loupe={loupe} magnification={magnification} frame={frame} color={color} />
      </div>

      <div className="flex flex-col px-5 sm:px-6">
        <OptionGroup step={1} title="Loupe model">
          {loupes.map((model) => (
            <OptionButton key={model.slug} active={model.slug === loupe.slug} onClick={() => selectLoupe(model)}>
              {model.name}
            </OptionButton>
          ))}
        </OptionGroup>

        <OptionGroup step={2} title="Magnification">
          {optionValues(loupe, "MAGNIFICATION").map((value) => (
            <OptionButton key={value} active={value === magnification} onClick={() => setMagnification(value)}>
              {value}
            </OptionButton>
          ))}
        </OptionGroup>

        <OptionGroup step={3} title="Frame">
          {frames.map((model) => (
            <OptionButton key={model.slug} active={model.slug === frame.slug} onClick={() => selectFrame(model)}>
              {model.name}
            </OptionButton>
          ))}
        </OptionGroup>

        <OptionGroup step={4} title={`Frame colour · ${color}`}>
          {optionValues(frame, "COLOR").map((option) => (
            <button
              key={option}
              onClick={() => setColor(option)}
              aria-label={option}
              title={option}
              className={cn(
                "size-9 rounded-full border-2 ring-offset-2 transition",
                option === color ? "border-white ring-2 ring-ink" : "border-line",
              )}
              style={{ backgroundColor: swatch(option) }}
            />
          ))}
        </OptionGroup>

        <div className="flex flex-col gap-3 py-5">
          <OrderButton
            productSlug={loupe.slug}
            productName={loupe.name}
            selection={[magnification, `${frame.name} frame`, color].filter(Boolean).join(" · ")}
          />
          <p className="text-xs text-muted">Price and delivery time are discussed by phone.</p>
        </div>
      </div>
    </div>
  );
};
