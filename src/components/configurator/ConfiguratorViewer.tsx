import { swatch } from "@/constants/catalog";
import { CatalogProduct } from "@/types";

export type ConfiguratorSelection = {
  loupe: CatalogProduct;
  magnification: string;
  frame: CatalogProduct;
  color: string;
};

export const ConfiguratorViewer = ({ loupe, magnification, frame, color }: ConfiguratorSelection) => (
  <div className="relative flex h-full min-h-80 flex-col items-center justify-center gap-6 bg-linear-to-br from-[#e6e9ee] to-[#f7f8fa] p-6">
    <div className="flex items-center gap-10" aria-hidden>
      {[0, 1].map((side) => (
        <span
          key={side}
          className="size-20 rounded-full border-[10px] sm:size-28"
          style={{ borderColor: swatch(color) }}
        />
      ))}
    </div>
    <p className="text-xs tracking-widest text-muted uppercase">3D model goes here</p>
    <div className="absolute inset-x-4 bottom-4 flex flex-wrap justify-center gap-2 text-xs">
      {[loupe.name, magnification, `${frame.name} frame`, color].filter(Boolean).map((label) => (
        <span key={label} className="rounded-full bg-white/80 px-3 py-1 backdrop-blur">
          {label}
        </span>
      ))}
    </div>
  </div>
);
