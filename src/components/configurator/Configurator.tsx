"use client";

import { ReactNode, useState } from "react";
import { FRAME_COLORS, FRAME_MODELS, LOUPE_MODELS } from "@/constants/catalog";
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

export const Configurator = () => {
  const [loupe, setLoupe] = useState(LOUPE_MODELS[0]);
  const [magnification, setMagnification] = useState(loupe.magnifications[0]);
  const [frame, setFrame] = useState(FRAME_MODELS[0]);
  const [color, setColor] = useState(FRAME_COLORS[0]);

  const selectLoupe = (model: ConfiguratorSelection["loupe"]) => {
    setLoupe(model);
    setMagnification(model.magnifications[0]);
  };

  return (
    <div className="grid overflow-hidden rounded-2xl border border-line lg:grid-cols-[1fr_380px]">
      <div className="lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:max-h-[640px]">
        <ConfiguratorViewer loupe={loupe} magnification={magnification} frame={frame} color={color} />
      </div>

      <div className="flex flex-col px-5 sm:px-6">
        <OptionGroup step={1} title="Loupe model">
          {LOUPE_MODELS.map((model) => (
            <OptionButton key={model.slug} active={model.slug === loupe.slug} onClick={() => selectLoupe(model)}>
              {model.name}
            </OptionButton>
          ))}
        </OptionGroup>

        <OptionGroup step={2} title="Magnification">
          {loupe.magnifications.map((value) => (
            <OptionButton key={value} active={value === magnification} onClick={() => setMagnification(value)}>
              {value}
            </OptionButton>
          ))}
        </OptionGroup>

        <OptionGroup step={3} title="Frame">
          {FRAME_MODELS.map((model) => (
            <OptionButton key={model.slug} active={model.slug === frame.slug} onClick={() => setFrame(model)}>
              {model.name}
            </OptionButton>
          ))}
        </OptionGroup>

        <OptionGroup step={4} title={`Frame colour · ${color.name}`}>
          {FRAME_COLORS.map((option) => (
            <button
              key={option.slug}
              onClick={() => setColor(option)}
              aria-label={option.name}
              className={cn(
                "size-9 rounded-full border-2 ring-offset-2 transition",
                option.slug === color.slug ? "border-white ring-2 ring-ink" : "border-line",
              )}
              style={{ backgroundColor: option.hex }}
            />
          ))}
        </OptionGroup>

        <div className="flex flex-col gap-3 py-5">
          <OrderButton productName={`${loupe.name} ${magnification} · ${frame.name} frame, ${color.name}`} />
          <p className="text-xs text-muted">Price and delivery time are discussed by phone.</p>
        </div>
      </div>
    </div>
  );
};
