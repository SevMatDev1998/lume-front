import { OptionType } from "@/types";

export const CATALOG_SECTIONS = [
  {
    slug: "loupes",
    title: "Loupes",
    description: "Five loupe systems, Galilean and Kepler. Magnification from 2.3x to 7.6x, made to your measurements.",
  },
  {
    slug: "lights",
    title: "LED Lights",
    description: "Bright, white, shadow-free light exactly in your field of view.",
  },
  {
    slug: "magnifications",
    title: "Magnifications",
    description: "Which magnification to choose and how the loupe systems differ.",
  },
  {
    slug: "optics-safety",
    title: "Optics & Safety",
    description: "Lenses, blue light protection and prescription options.",
  },
  {
    slug: "frames",
    title: "Frames",
    description: "Lightweight titanium and carbon frames in many colours.",
  },
  {
    slug: "accessories",
    title: "Accessories",
    description: "Visionshields, cases, neck cords and temple tips.",
  },
] as const;

export const findCatalogSection = (slug: string) => CATALOG_SECTIONS.find((section) => section.slug === slug);

export const COLOR_SWATCHES: Record<string, string> = {
  Black: "#14181f",
  Raw: "#b9b4ab",
  Red: "#b3262e",
  "Rose Gold": "#c9927d",
  "Blue Slate": "#4f6475",
  "Lunar Grey": "#8b8f96",
  "Midnight Blue": "#1f2a4a",
  "Desert Rose": "#c69b8f",
  "Dusty Gold": "#b89b62",
  "Sage Green": "#8a9a7b",
  "Pure White": "#f1f1ef",
  "Azure Blue": "#2f6fae",
  "Urban Violet": "#5b4a6e",
  "City Green": "#3f5b4a",
  "Downtown Mocha": "#6b4f3f",
};

export const swatch = (color: string) => COLOR_SWATCHES[color] ?? "#9ca3af";

export const OPTION_LABELS: Record<OptionType, string> = {
  MAGNIFICATION: "Magnification",
  COLOR: "Colour",
  SIZE: "Size",
  TEMPLE_TIP: "Temple tips",
};
