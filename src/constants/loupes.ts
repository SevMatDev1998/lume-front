import keplerAdvancedPhoto from "@/assets/loupes/kepler-advanced.jpg";
import keplerAdvancedFront from "@/assets/loupes/ka-front.jpg";
import keplerAdvancedBack from "@/assets/loupes/ka-back.jpg";
import keplerAdvancedLight from "@/assets/loupes/ka-light.jpg";
import keplerAdvancedCurve from "@/assets/loupes/ka-frame-curve.jpg";
import keplerAdvancedPanto from "@/assets/loupes/ka-frame-panto.jpg";
import keplerAdvancedCarbon from "@/assets/loupes/ka-frame-carbon.jpg";
import keplerAdvancedSport from "@/assets/loupes/ka-frame-sport.jpg";
import keplerReflektPhoto from "@/assets/loupes/kepler-reflekt.jpg";
import keplerReflektFront from "@/assets/loupes/kr-front.jpg";
import keplerReflektBack from "@/assets/loupes/kr-back.jpg";
import keplerReflektLight from "@/assets/loupes/kr-light.jpg";
import keplerReflektCurve from "@/assets/loupes/kr-frame-curve.jpg";
import keplerReflektCarbon from "@/assets/loupes/kr-frame-carbon.jpg";
import keplerReflektIcon from "@/assets/loupes/kr-frame-icon.jpg";
import keplerReflektPanto from "@/assets/loupes/kr-frame-panto.jpg";
import keplerKompaktPhoto from "@/assets/loupes/kepler-kompakt.jpg";
import keplerKompaktFront from "@/assets/loupes/kk-front.jpg";
import keplerKompaktBack from "@/assets/loupes/kk-back.jpg";
import keplerKompaktLight from "@/assets/loupes/kk-light.jpg";
import keplerKompaktGallery1 from "@/assets/loupes/kk-gallery-1.jpg";
import keplerKompaktGallery2 from "@/assets/loupes/kk-gallery-2.jpg";
import keplerKompaktGallery3 from "@/assets/loupes/kk-gallery-3.jpg";
import galileanHdPhoto from "@/assets/loupes/galilean-hd.jpg";
import galileanHdFront from "@/assets/loupes/gh-front.jpg";
import galileanHdBack from "@/assets/loupes/gh-back.jpg";
import galileanHdLight from "@/assets/loupes/gh-light.jpg";
import galileanHdGallery1 from "@/assets/loupes/gh-gallery-1.jpg";
import galileanHdGallery2 from "@/assets/loupes/gh-gallery-2.jpg";
import galileanHdGallery3 from "@/assets/loupes/gh-gallery-3.jpg";
import galileanHdGallery4 from "@/assets/loupes/gh-gallery-4.jpg";
import galileanEssentialPhoto from "@/assets/loupes/galilean-essential.jpg";
import galileanEssentialFront from "@/assets/loupes/ge-front.jpg";
import galileanEssentialBack from "@/assets/loupes/ge-back.jpg";
import galileanEssentialGallery1 from "@/assets/loupes/ge-gallery-1.jpg";
import galileanEssentialGallery2 from "@/assets/loupes/ge-gallery-2.jpg";
import galileanEssentialGallery3 from "@/assets/loupes/ge-gallery-3.jpg";
import { LoupePage } from "@/types";

export const FITTING_STEPS = [
  {
    title: "Free fitting",
    text: "We come to your clinic and you try the demo set.",
  },
  { title: "Measurements", text: "Working distance, angle, prescription." },
  { title: "Frame and colour", text: "Choose frame, temple tips and options." },
  { title: "Made in Denmark", text: "6 to 8 weeks, quality checked." },
  { title: "Delivery", text: "We adjust the loupe on you at your chair." },
];

export const LOUPE_PAGES: Record<string, LoupePage> = {
  "kepler-advanced": {
    hero: {
      image: keplerAdvancedPhoto,
      background: "[--heading-bg:#0d0606]",
      intro:
        "4.0x to 7.0x in a single loupe. At 49 g, Kepler Advanced is the lightest adjustable loupe we offer.",
      highlight:
        "The only loupe with 4-in-1 magnification: 4.0x, 5.0x, 6.0x, 7.0x",
    },
    stats: [
      { value: "4 in 1", label: "magnifications in one loupe" },
      { value: "49 g", label: "full loupe with oculars" },
      { value: "31–69 cm", label: "working distance, set to you" },
      { value: "5 years", label: "warranty" },
    ],
    details: [
      {
        image: keplerAdvancedFront,
        spots: [
          {
            x: 38,
            y: 46,
            title: "Turn'N'Click System",
            text: "4 magnifications in 1 loupe, with easy adjustment system.",
          },
          {
            x: 75,
            y: 76,
            title: "Ultra-lightweight",
            text: "Kepler Advanced is at just 49 grams the world's lightest adjustable loupe, for ultimate comfort and all-day wear.",
          },
          {
            x: 64,
            y: 47,
            title: "Customisable Declination",
            text: "Personalised declination angle up to 40º for optimised posture and tailored working distance from 31 cm to 69 cm to meet your ergonomic and vision precision needs.",
          },
          {
            x: 49,
            y: 64,
            title: "Wide and Crystal Clear",
            text: "Wide field of view and a depth of field that supports clear vision across the entire area seen through the lens.",
          },
          {
            x: 30,
            y: 39,
            title: "Carbon Reinforced Structure",
            text: "Light, stable carbon composite housing with titanium cover for precise adjustments.",
          },
        ],
      },
      {
        image: keplerAdvancedBack,
        spots: [
          {
            x: 80,
            y: 26,
            title: "High Quality Lenses",
            text: "Hi-index multi-layer lenses: Lighter, thinner and more impact-resistant. No reflections and no colour separation.",
          },
          {
            x: 37,
            y: 80,
            title: "BlueLight Protection (BLP)",
            text: "An optimal eye protection, safeguarding your eyes from harmful UV and Blue-Violet light.",
          },
          {
            x: 23,
            y: 56,
            title: "Non-reflection Housing",
            text: "Get a relaxed and crystal-clear image without any disturbing reflections.",
          },
          {
            x: 31,
            y: 61,
            title: "Prismatic System",
            text: "Unique advanced incorporated Kepler system.",
          },
          {
            x: 44,
            y: 37,
            title: "LED Lights",
            text: "Compatible with a range of LED lights. Slides smoothly on and off, and maintains the light in a stable manner.",
          },
          {
            x: 16,
            y: 51,
            title: "Fine-adjustable Focus",
            text: "Adjustable fine-focus on each ocular allows you to achieve a perfectly focused image.",
          },
        ],
      },
    ],
    magnifications: [
      {
        value: "4.0x",
        fieldOfView: "6.5 cm",
        depthOfField: "8 cm",
        zoom: 1.2,
        use: "General procedures and diagnosis.",
      },
      {
        value: "5.0x",
        fieldOfView: "6 cm",
        depthOfField: "7 cm",
        zoom: 1.5,
        use: "Intricate restorative work.",
      },
      {
        value: "6.0x",
        fieldOfView: "5.5 cm",
        depthOfField: "6 cm",
        zoom: 1.8,
        use: "Endodontics and fine detail.",
      },
      {
        value: "7.0x",
        fieldOfView: "5 cm",
        depthOfField: "5 cm",
        zoom: 2.15,
        use: "Near-microscopic work.",
      },
    ],
    viewer: {
      eyebrow: "Turn'N'Click",
      title: "One click, a new magnification",
      text: "Choose a step to see what changes in your field of view at 40 cm.",
    },
    light: {
      image: keplerAdvancedLight,
      paragraphs: [
        "We recommend adding a light to your Kepler Advanced to get even more out of every magnification.",
        "Kepler Advanced works with ExamVision LED lights. The light slides smoothly on and off and stays steady, so the illumination falls exactly where you work.",
      ],
    },
    frames: [
      { name: "Panto", image: keplerAdvancedPanto },
      { name: "Curve", image: keplerAdvancedCurve },
      { name: "Sport", image: keplerAdvancedSport },
      { name: "Carbon", image: keplerAdvancedCarbon },
    ],
  },
  "kepler-reflekt": {
    hero: {
      image: keplerReflektPhoto,
      background: "[--heading-bg:#1c1c1e]",
      intro:
        "Sit upright and still see everything around you. Kepler Reflekt sits low in the lens, so your patient, your tools and your x-rays stay in view without taking the loupes off.",
      highlight: "The world's lightest reflective loupe: 4.0x and 6.0x",
    },
    stats: [
      { value: "4.0x | 6.0x", label: "magnifications" },
      { value: "37 g", label: "two oculars with lenses" },
      { value: "44–68 cm", label: "working distance, set to you" },
      { value: "5 years", label: "warranty" },
    ],
    details: [
      {
        image: keplerReflektFront,
        spots: [
          {
            x: 95,
            y: 65,
            title: "Comfortable, Relaxed Ergonomics",
            text: "Find your most comfortable, relaxed position and we tailor-make your Kepler Reflekt to work for you.",
          },
          {
            x: 30,
            y: 18,
            title: "Unmatched Peripheral Vision",
            text: "No need to remove loupes during procedures to look elsewhere.",
          },
          {
            x: 38,
            y: 35,
            title: "Lightweight and Robust",
            text: "Titanium and magnesium casing make for durable and light oculars.",
          },
          {
            x: 23,
            y: 43,
            title: "Customised Declination",
            text: "Precise declination to suit your desired working position.",
          },
          {
            x: 83,
            y: 89,
            title: "Fine-adjustable Focus",
            text: "Adjustable fine-focus on each ocular allows you to achieve a perfectly focused image on both eyes.",
          },
        ],
      },
      {
        image: keplerReflektBack,
        spots: [
          {
            x: 63,
            y: 20,
            title: "High Quality Lenses",
            text: "Hi-index multi-layer lenses: Lighter, thinner and more impact-resistant. No reflections or colour separation.",
          },
          {
            x: 36,
            y: 40,
            title: "LED Lights",
            text: "Compatible with our high-end Total LED lights.",
          },
          {
            x: 30,
            y: 65,
            title: "BlueLight Protection (BLP)",
            text: "An optimal eye protection, available in both ocular and carrier, which safeguards your eyes from harmful UV and blue-violet light.",
          },
          {
            x: 13,
            y: 72,
            title: "Prismatic System",
            text: "Unique integrated Kepler prismatic system for sharp image quality.",
          },
        ],
      },
    ],
    magnifications: [
      {
        value: "4.0x",
        fieldOfView: "7.2 cm",
        depthOfField: "13 cm",
        zoom: 1.2,
        use: "General procedures, diagnosis and all-day wear.",
      },
      {
        value: "6.0x",
        fieldOfView: "5.6 cm",
        depthOfField: "8 cm",
        zoom: 1.8,
        use: "Intricate procedures that need high magnification.",
      },
    ],
    viewer: {
      eyebrow: "Two magnifications",
      title: "Pick the detail you need",
      text: "Choose a magnification to see what changes in your field of view at 45 cm.",
    },
    light: {
      image: keplerReflektLight,
      paragraphs: [
        "We recommend adding a light to your Kepler Reflekt to get even more out of every magnification.",
        "Kepler Reflekt works with the ExamVision Total LED. The coaxial connector sets the light at the right angle, so the illumination falls exactly where you work.",
      ],
    },
    frames: [
      { name: "Curve", image: keplerReflektCurve },
      { name: "Carbon", image: keplerReflektCarbon },
      { name: "Icon", image: keplerReflektIcon },
      { name: "Panto", image: keplerReflektPanto },
    ],
  },
  "kepler-kompakt": {
    hero: {
      image: keplerKompaktPhoto,
      background: "[--heading-bg:#292929]",
      intro:
        "3.4x, 5.0x and 7.6x in our most compact Kepler. Redesigned in 2025 to be even lighter, with a refined fine focus for deep cavities and microsurgery.",
      highlight: "Our lightest high magnification loupe: up to 7.6x",
    },
    stats: [
      { value: "up to 7.6x", label: "three magnifications" },
      { value: "37 g", label: "two oculars with lenses" },
      { value: "33–65 cm", label: "working distance, set to you" },
      { value: "5 years", label: "warranty" },
    ],
    details: [
      {
        image: keplerKompaktFront,
        spots: [
          {
            x: 60,
            y: 40,
            title: "Wide and Crystal-clear Field of View",
            text: "Crystal-clear image from edge to edge and a wide field of view for precise work, even in the most demanding procedures. A lightweight, ultra-compact loupe with fine-focus for optimal visual sharpness.",
          },
          {
            x: 39,
            y: 22,
            title: "Freedom of Movement",
            text: "Maintained by excellent depth of field.",
          },
          {
            x: 47,
            y: 34,
            title: "Light and Compact",
            text: "Engineered with titanium and carbon for a lightweight, durable and truly compact design.",
          },
          {
            x: 69,
            y: 57,
            title: "Precision Optical Engineering",
            text: "Get a relaxed and crystal-clear image without any disturbing reflections.",
          },
          {
            x: 85,
            y: 66,
            title: "Fine-adjustable Focus",
            text: "Adjustable fine-focus on each ocular allows you to achieve a perfectly focused image.",
          },
        ],
      },
      {
        image: keplerKompaktBack,
        spots: [
          {
            x: 57,
            y: 20,
            title: "High Quality Lenses",
            text: "Hi-index multi-layer lenses: Lighter, thinner and more impact-resistant. No reflections or colour separation.",
          },
          {
            x: 27,
            y: 71,
            title: "Prisma Lens System Available",
            text: "Extra declination available for improved posture.",
          },
          {
            x: 33,
            y: 67,
            title: "BlueLight Protection (BLP)",
            text: "An optimal eye protection, safeguarding your eyes from harmful UV and blue-violet light.",
          },
        ],
      },
    ],
    magnifications: [
      {
        value: "3.4x",
        fieldOfView: "9.5 cm",
        depthOfField: "11.5 cm",
        zoom: 1.1,
        use: "General and restorative procedures.",
      },
      {
        value: "5.0x",
        fieldOfView: "6.2 cm",
        depthOfField: "8 cm",
        zoom: 1.5,
        use: "Intricate restorative work.",
      },
      {
        value: "7.6x",
        fieldOfView: "4.3 cm",
        depthOfField: "3.5 cm",
        zoom: 2.3,
        use: "Endodontics, microsurgery and deep cavities.",
      },
    ],
    viewer: {
      eyebrow: "Three magnifications",
      title: "Up to 7.6x for the finest detail",
      text: "Choose a magnification to see what changes in your field of view at 45 cm.",
    },
    light: {
      image: keplerKompaktLight,
      paragraphs: [
        "We recommend adding a light to your Kepler Kompakt to get even more out of every magnification.",
        "Kepler Kompakt works with ExamVision LED lights. The connection system keeps the light stable, so bright, shadow-free illumination falls exactly where you work.",
      ],
    },
    frames: [
      { name: "with LED light", image: keplerKompaktGallery1 },
      { name: "side view", image: keplerKompaktGallery2 },
      { name: "on a titanium frame", image: keplerKompaktGallery3 },
    ],
  },
  "galilean-hd": {
    hero: {
      image: galileanHdPhoto,
      background: "[--heading-bg:#262425]",
      intro:
        "The most comfortable loupe you will ever wear. Ultra-light titanium, a wide field of view and deep focus for full days of basic to intermediate work.",
      highlight: "4 magnifications: 2.3x, 2.8x, 3.3x, 3.8x",
    },
    stats: [
      { value: "2.3–3.8x", label: "four magnifications" },
      { value: "26 g", label: "two oculars with lenses" },
      { value: "30–60 cm", label: "working distance, set to you" },
      { value: "5 years", label: "warranty" },
    ],
    details: [
      {
        image: galileanHdFront,
        spots: [
          {
            x: 40,
            y: 20,
            title: "Accommodate Any Prescription",
            text: "Your prescription can be built into the loupe and the outer lenses to enable you to work in comfort.",
          },
          {
            x: 55,
            y: 43,
            title: "Working Distance",
            text: "Tailored from 30-60 cm to meet your ergonomic and vision precision needs.",
          },
          {
            x: 40,
            y: 35,
            title: "Declination Angle",
            text: "Personalised declination angles up to 40° for optimised posture and comfort.",
          },
          {
            x: 89,
            y: 70,
            title: "Maximum Field Depth and Width",
            text: "HD gives you the best depth of field and a wide and sharp image.",
          },
          {
            x: 45,
            y: 39,
            title: "Titanium Ocular Casing",
            text: "Strong high-end titanium housing which gives a crystal-clear image with true colour transmission. Choose between three exclusive colours: Blue Slate, Rose Gold and Raw.",
          },
        ],
      },
      {
        image: galileanHdBack,
        spots: [
          {
            x: 70,
            y: 18,
            title: "Adjustable Titanium and Carbon Frame",
            text: "The frame is stable, strong and adjustable and can be precisely fitted to your features.",
          },
          {
            x: 55,
            y: 50,
            title: "Non-allergy Nosepad",
            text: "The comfortable support nosepad in transparent silicon is available in several sizes, ensuring a perfect fit.",
          },
          {
            x: 48,
            y: 45,
            title: "LED Lights",
            text: "The LED loupe light is attached by a connection system and maintains the light in a stable manner.",
          },
          {
            x: 40,
            y: 65,
            title: "Highest-quality Custom Lenses",
            text: "Tailor your carrier and loupe lenses and adapt your prescription as needed in line with eyesight changes.",
          },
          {
            x: 41,
            y: 74,
            title: "BlueLight Protection (BLP)",
            text: "An optimal eye protection, safeguarding your eyes from harmful UV and Blue-Violet light.",
          },
        ],
      },
    ],
    magnifications: [
      {
        value: "2.3x",
        fieldOfView: "12 cm",
        depthOfField: "28 cm",
        zoom: 1.05,
        use: "Diagnosis and general procedures, with the widest view.",
      },
      {
        value: "2.8x",
        fieldOfView: "10.5 cm",
        depthOfField: "20 cm",
        zoom: 1.15,
        use: "All-day wear for general dentistry.",
      },
      {
        value: "3.3x",
        fieldOfView: "8 cm",
        depthOfField: "15 cm",
        zoom: 1.25,
        use: "Restorative and surgical work.",
      },
      {
        value: "3.8x",
        fieldOfView: "6.5 cm",
        depthOfField: "10 cm",
        zoom: 1.35,
        use: "Intermediate procedures that need more detail.",
      },
    ],
    viewer: {
      eyebrow: "Four magnifications",
      title: "Wide view, deep focus",
      text: "Choose a magnification to see what changes in your field of view at 45 cm.",
    },
    light: {
      image: galileanHdLight,
      paragraphs: [
        "We recommend adding a light to your Galilean HD to get even more out of every magnification.",
        "Galilean HD works with ExamVision LED lights. The connection system keeps the light stable, so bright, shadow-free illumination falls exactly where you work.",
      ],
    },
    frames: [
      { name: "Red Dot design award winner", image: galileanHdGallery1 },
      { name: "Rose Gold oculars on Carbon frame", image: galileanHdGallery2 },
      { name: "coloured oculars", image: galileanHdGallery3 },
      { name: "Blue Slate, Rose Gold and Raw", image: galileanHdGallery4 },
    ],
  },
  "galilean-essential": {
    hero: {
      image: galileanEssentialPhoto,
      background: "[--heading-bg:#3b3937]",
      intro:
        "The finest entry-level loupe, made to your measurements in Denmark. A smart first choice for students, hygienists and anyone new to loupes.",
      highlight: "2 magnifications: 2.5x and 3.0x",
    },
    stats: [
      { value: "2.5x | 3.0x", label: "magnifications" },
      { value: "19 g", label: "two oculars with lenses" },
      { value: "30–55 cm", label: "working distance, set to you" },
      { value: "5 years", label: "warranty" },
    ],
    details: [
      {
        image: galileanEssentialFront,
        spots: [
          {
            x: 30,
            y: 20,
            title: "Accommodates Any Prescription",
            text: "Your prescription can be built into the loupe and the outer lenses to enable you to work in comfort.",
          },
          {
            x: 53,
            y: 50,
            title: "Working Distance",
            text: "Tailored from 30-55 cm to meet your ergonomic, vision and precision needs.",
          },
          {
            x: 33,
            y: 42,
            title: "Light, Bioplastic Ocular",
            text: "Great optical quality with minimised glare thanks to dark, non-reflective housing.",
          },
          {
            x: 90,
            y: 65,
            title: "Maximum Field Depth and Width",
            text: "The Galilean Essential loupe gives you a great depth of field and a wide and sharp image.",
          },
          {
            x: 37,
            y: 27,
            title: "Declination Angle",
            text: "Personalised declination angles up to 40° for optimised posture and comfort.",
          },
        ],
      },
      {
        image: galileanEssentialBack,
        spots: [
          {
            x: 66,
            y: 15,
            title: "Stainless-steel Quality Essential Metro Frame",
            text: "The Essential Metro frame design is a timeless, unisex style.",
          },
          {
            x: 50,
            y: 50,
            title: "Non-allergy Nosepad",
            text: "The comfortable support nosepad in silicon is available in several sizes, ensuring a perfect fit.",
          },
          {
            x: 32,
            y: 45,
            title: "LED Lights",
            text: "Compatible with a range of LED lights. Slides smoothly on and off, and maintains the light in a stable manner.",
          },
          {
            x: 63,
            y: 22,
            title: "Highest-quality Custom Lenses",
            text: "Tailor your carrier and loupe lenses and adapt your prescription as needed in line with eyesight changes.",
          },
          {
            x: 40,
            y: 70,
            title: "BlueLight Protection (BLP)",
            text: "An optimal eye protection, safeguarding your eyes from harmful UV and Blue-Violet light.",
          },
        ],
      },
    ],
    magnifications: [
      {
        value: "2.5x",
        fieldOfView: "11 cm",
        depthOfField: "25 cm",
        zoom: 1.1,
        use: "Hygiene, diagnosis and everyday work.",
      },
      {
        value: "3.0x",
        fieldOfView: "8.3 cm",
        depthOfField: "15 cm",
        zoom: 1.2,
        use: "More detail for students and general dentistry.",
      },
    ],
    viewer: {
      eyebrow: "Two magnifications",
      title: "Your first step into magnification",
      text: "Choose a magnification to see what changes in your field of view at 45 cm.",
    },
    frames: [
      {
        name: "on the Essential Metro frame",
        image: galileanEssentialGallery1,
      },
      { name: "at work", image: galileanEssentialGallery2 },
      { name: "everyday wear", image: galileanEssentialGallery3 },
    ],
  },
};
