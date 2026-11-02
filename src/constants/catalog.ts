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

export const LOUPE_MODELS = [
  {
    slug: "kepler-advanced",
    name: "Kepler Advanced",
    magnifications: ["4.0x", "5.0x", "6.0x", "7.0x"],
    description: "Four magnifications in one loupe, for the most demanding work.",
  },
  {
    slug: "kepler-reflekt",
    name: "Kepler Reflekt",
    magnifications: ["4.0x", "6.0x"],
    description: "Ultra light with a steep angle, for long high precision treatments.",
  },
  {
    slug: "kepler-kompakt",
    name: "Kepler Kompakt",
    magnifications: ["3.4x", "5.0x", "7.6x"],
    description: "Compact housing with a sharp image from edge to edge.",
  },
  {
    slug: "galilean-hd",
    name: "Galilean HD",
    magnifications: ["2.3x", "2.8x", "3.3x", "3.8x"],
    description: "Lightweight titanium housings for basic and intermediate procedures.",
  },
  {
    slug: "galilean-essential",
    name: "Galilean Essential",
    magnifications: ["2.5x", "3.0x"],
    description: "Entry level loupes for students, hygienists and first time users.",
  },
];

const TEMPLE_TIP_COLORS = ["Petrol", "Burgundy", "Vanilla", "Army", "Orange", "Black", "Grey"];

const ALL_LOUPES = ["Kepler Advanced", "Kepler Reflekt", "Kepler Kompakt", "Galilean HD", "Galilean Essential"];

export const FRAME_MODELS = [
  {
    slug: "curve",
    name: "Curve",
    description: "A wrap around frame with the largest number of colour combinations.",
    material: "Titanium",
    weight: null,
    sizes: ["Small", "Large"],
    colors: ["Rose Gold", "Blue Slate", "Lunar Grey"],
    templeTips: TEMPLE_TIP_COLORS,
    loupes: ALL_LOUPES,
  },
  {
    slug: "carbon",
    name: "Carbon",
    description: "Carbon fibre front with titanium temples, comfortable for the whole day and any prescription.",
    material: "Carbon fibre and titanium",
    weight: "13.5 g",
    sizes: ["Small", "Large"],
    colors: ["Rose Gold", "Blue Slate", "Raw"],
    templeTips: TEMPLE_TIP_COLORS,
    loupes: ["Kepler Advanced", "Kepler Reflekt", "Galilean HD", "Galilean Essential"],
  },
  {
    slug: "panto",
    name: "Panto",
    description: "A light, rounded vintage frame that suits most faces and multifocal prescriptions.",
    material: "Titanium",
    weight: "10.6 g",
    sizes: ["Small", "Medium", "Large"],
    colors: ["Midnight Blue", "Desert Rose", "Lunar Grey", "Dusty Gold", "Rose Gold", "Sage Green", "Pure White"],
    templeTips: TEMPLE_TIP_COLORS,
    loupes: ALL_LOUPES,
  },
  {
    slug: "sport",
    name: "Sport",
    description: "The Red Dot winning sport frame, redesigned to be lighter and better balanced.",
    material: "Titanium",
    weight: "14.4 g",
    sizes: ["Small", "Large"],
    colors: ["Lunar Grey", "Midnight Blue", "Desert Rose"],
    templeTips: TEMPLE_TIP_COLORS,
    loupes: ALL_LOUPES,
  },
  {
    slug: "icon",
    name: "Icon",
    description: "An elegant titanium frame with a custom loupe angle, hidden cables and optional gemstones.",
    material: "Titanium",
    weight: null,
    sizes: ["Small", "Medium", "Large"],
    colors: ["Black", "Azure Blue", "Red", "Raw"],
    templeTips: [],
    loupes: ALL_LOUPES,
  },
  {
    slug: "metro-essential",
    name: "Metro Essential",
    description: "A timeless unisex stainless steel frame from the Essential range, made for students and hygienists.",
    material: "Stainless steel",
    weight: null,
    sizes: ["Small", "Large"],
    colors: ["Urban Violet", "City Green", "Downtown Mocha"],
    templeTips: TEMPLE_TIP_COLORS,
    loupes: ALL_LOUPES,
  },
];

export const LIGHT_MODELS = [
  {
    slug: "total-pure-intense",
    name: "Total Pure & Total Intense",
    description: "The brightest lights in the range.",
  },
  {
    slug: "essential-nano",
    name: "Essential Nano",
    description: "Ultra compact light for everyday work.",
  },
  {
    slug: "essential-alpha",
    name: "Essential Alpha",
    description: "A simple and light entry level light.",
  },
  {
    slug: "focus-bright-true",
    name: "Focus Bright & Focus True",
    description: "Focused light with a sharp, even spot.",
  },
];

export const FRAME_COLORS = [
  { slug: "black", name: "Black", hex: "#14181f" },
  { slug: "graphite", name: "Graphite", hex: "#4b5563" },
  { slug: "silver", name: "Silver", hex: "#c7ccd3" },
  { slug: "navy", name: "Navy", hex: "#1e3a8a" },
  { slug: "red", name: "Red", hex: "#b91c1c" },
  { slug: "rose", name: "Rose", hex: "#e8a3a3" },
];
