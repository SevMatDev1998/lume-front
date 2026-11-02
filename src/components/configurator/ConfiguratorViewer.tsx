import { FRAME_COLORS, FRAME_MODELS, LOUPE_MODELS } from "@/constants/catalog";

export type ConfiguratorSelection = {
  loupe: (typeof LOUPE_MODELS)[number];
  magnification: string;
  frame: (typeof FRAME_MODELS)[number];
  color: (typeof FRAME_COLORS)[number];
};

export const ConfiguratorViewer = ({ loupe, magnification, frame, color }: ConfiguratorSelection) => (
  <div className="relative flex h-full min-h-80 flex-col items-center justify-center gap-6 bg-linear-to-br from-[#e6e9ee] to-[#f7f8fa] p-6">
    <div className="flex items-center gap-10" aria-hidden>
      {[0, 1].map((side) => (
        <span key={side} className="size-20 rounded-full border-[10px] sm:size-28" style={{ borderColor: color.hex }} />
      ))}
    </div>
    <p className="text-xs tracking-widest text-muted uppercase">3D model goes here</p>
    <div className="absolute inset-x-4 bottom-4 flex flex-wrap justify-center gap-2 text-xs">
      {[loupe.name, magnification, `${frame.name} frame`, color.name].map((label) => (
        <span key={label} className="rounded-full bg-white/80 px-3 py-1 backdrop-blur">
          {label}
        </span>
      ))}
    </div>
  </div>
);
