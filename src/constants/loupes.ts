import keplerAdvancedPhoto from "@/assets/loupes/kepler-advanced.jpg";
import keplerAdvancedFront from "@/assets/loupes/ka-front.jpg";
import keplerAdvancedBack from "@/assets/loupes/ka-back.jpg";
import keplerAdvancedLight from "@/assets/loupes/ka-light.jpg";
import keplerAdvancedCurve from "@/assets/loupes/ka-frame-curve.jpg";
import keplerAdvancedPanto from "@/assets/loupes/ka-frame-panto.jpg";
import keplerAdvancedCarbon from "@/assets/loupes/ka-frame-carbon.jpg";
import keplerAdvancedSport from "@/assets/loupes/ka-frame-sport.jpg";
import { LoupePage } from "@/types";

export const FITTING_STEPS = [
  { title: "Free fitting", text: "We come to your clinic and you try the demo set." },
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
      intro: "4.0x to 7.0x in a single loupe. At 49 g, Kepler Advanced is the lightest adjustable loupe we offer.",
      highlight: "The only loupe with 4-in-1 magnification: 4.0x, 5.0x, 6.0x, 7.0x",
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
          { x: 38, y: 46, title: "Turn'N'Click System", text: "4 magnifications in 1 loupe, with easy adjustment system." },
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
          { x: 31, y: 61, title: "Prismatic System", text: "Unique advanced incorporated Kepler system." },
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
      { value: "4.0x", fieldOfView: "6.5 cm", depthOfField: "8 cm", zoom: 1.2, use: "General procedures and diagnosis." },
      { value: "5.0x", fieldOfView: "6 cm", depthOfField: "7 cm", zoom: 1.5, use: "Intricate restorative work." },
      { value: "6.0x", fieldOfView: "5.5 cm", depthOfField: "6 cm", zoom: 1.8, use: "Endodontics and fine detail." },
      { value: "7.0x", fieldOfView: "5 cm", depthOfField: "5 cm", zoom: 2.15, use: "Near-microscopic work." },
    ],
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
};
