import totalHero from "@/assets/lights/total-hero.jpg";
import total1 from "@/assets/lights/total-1.jpg";
import total2 from "@/assets/lights/total-2.jpg";
import total3 from "@/assets/lights/total-3.jpg";
import total4 from "@/assets/lights/total-4.jpg";
import total5 from "@/assets/lights/total-5.jpg";
import total6 from "@/assets/lights/total-6.jpg";
import nanoHero from "@/assets/lights/nano-hero.jpg";
import nano1 from "@/assets/lights/nano-1.jpg";
import nano2 from "@/assets/lights/nano-2.jpg";
import nano3 from "@/assets/lights/nano-3.jpg";
import alphaHero from "@/assets/lights/alpha-hero.jpg";
import alpha1 from "@/assets/lights/alpha-1.jpg";
import alpha2 from "@/assets/lights/alpha-2.jpg";
import alpha3 from "@/assets/lights/alpha-3.jpg";
import focusHero from "@/assets/lights/focus-hero.jpg";
import focus1 from "@/assets/lights/focus-1.jpg";
import focus2 from "@/assets/lights/focus-2.jpg";
import focus3 from "@/assets/lights/focus-3.jpg";
import { LightPage } from "@/types";

const FLICKER_FREE =
  "Flicker-free video: artificial lighting appears continuous to our eyes, but it illuminates using high-frequency pulses of light. Flickering occurs on video when the frame rate captures different levels of light. ExamVision lights have been engineered to keep the level of illumination constant, so the end result will always be clear, flicker-free video.";

const FOCUS_XTEND = {
  title: "Focus Xtend Control Unit",
  paragraphs: [
    "ExamVision's range of lights is specially designed to give you the illumination you need and prefer. The Focus Xtend control unit is operated by pressing the front panel, with your hand or elbow. A short press will activate the unit, and further clicks will cycle the unit through low, medium and high settings. Focus Xtend gives you approx. 6 to 24 hours operating time depending on chosen light intensity.",
    FLICKER_FREE,
  ],
};

export const LIGHT_PAGES: Record<string, LightPage> = {
  "total-pure-intense": {
    hero: {
      image: totalHero,
      background: "[--heading-bg:#3a3d3e]",
      intro:
        "The Total LED light system is vital to achieving perfect vision. Slim and lightweight with a perfect light spot.",
      highlight: "Easy on the eye: no hot-spot, no glare",
    },
    stats: [
      { value: "5,000 | 6,500 K", label: "Total Pure and Total Intense" },
      { value: "25,400 lux", label: "Total Intense at 35 cm" },
      { value: "33 g", label: "lamp with frame part and cable" },
      { value: "8 h", label: "minimum at high intensity" },
    ],
    features: [
      {
        title: "We care for your eyes",
        image: total1,
        paragraphs: [
          'In all ExamVision Total LED lights, we use "natural white" (≤5,000 to ≤6,500 Kelvin) LEDs for the most natural lighting possible. When considering LEDs with higher Kelvin (more blue light) than the ExamVision Total range, remember that this means consequently higher lux (or foot candles), but it also means more unnatural light, eye strain and risk of retinal damage.',
        ],
      },
      {
        title: "Covers the whole range of Lux-demands",
        image: total2,
        paragraphs: [
          "The Total LED light system enhances visual comfort. It provides a perfect, round light spot of 63 mm at a distance of 40 cm.",
          "Total LED is available in two colour temperatures, Total Pure (5,000 K) & Total Intense LED (6,500 K).",
          "Furthermore, the Total Pure LED has a CRI >90, which gives you perfect colour rendering.",
        ],
      },
      {
        title: "Total Intense",
        image: total3,
        subtitle: "Bright, natural white ≤6,500 Kelvin",
        points: [
          "CRI above 70",
          "Light intensity min. 25,400 lux at 35 cm",
          "Light spot, 63 mm at 40 cm",
          "Brightness settings go in high, medium and low",
          "Lamp weight only 33 g (incl. Framepart & Cable)",
        ],
      },
      {
        title: "Total Pure",
        image: total4,
        subtitle: "Bright, natural white ≤5,000 Kelvin",
        points: [
          "CRI above 90",
          "Light intensity min. 21,500 lux at 35 cm",
          "Light spot, 63 mm at 40 cm",
          "Brightness settings go in high, medium and low",
          "Lamp weight only 33 g (incl. Framepart & Cable)",
        ],
      },
      {
        title: "PowerGo Control Unit",
        image: total5,
        paragraphs: [
          "ExamVision's unique PowerGo control unit is operated easily by pressing the front panel, with your hand or forearm. A short press will activate the unit, and further clicks will cycle the unit through low, medium and high settings. PowerGo weighs only 155 g and provides a minimum of eight hours at high intensity.",
          FLICKER_FREE,
        ],
      },
      {
        title: "Total LED Connect system",
        image: total6,
        paragraphs: [
          "The lamp slides smoothly on and off, yet maintains the light in a stable manner. The light can be adjusted easily, both horizontally and vertically allowing you to adapt it to any working position.",
          "A new addition to the Total LED is the coaxial connector. This allows for steeper angles, which is necessary with our Kepler Reflekt and can also be a helpful addition to reduce shadowing when working with Galilean or Kepler direct vision loupes, as the light beam can align exactly with the line of sight.",
        ],
      },
    ],
  },
  "essential-nano": {
    hero: {
      image: nanoHero,
      background: "[--heading-bg:#3f4143]",
      intro:
        "Essential Nano is an ultra-compact LED light, delivering natural white light exactly where you need it.",
      highlight: "Ultra-compact design, weighing only 9 grams",
    },
    stats: [
      { value: "9 g", label: "lamp weight" },
      { value: "24,700 lux", label: "light intensity at 35 cm" },
      { value: "80 mm", label: "light spot at 35 cm" },
      { value: "24 h", label: "operating time, up to" },
    ],
    features: [
      {
        title: "Ultra-compact design",
        image: nano1,
        paragraphs: [
          "Essential Nano is an ultra-compact LED light, delivering natural white light exactly where you need it. Weighing only 9 grams, and featuring the elegant Connect mounting system, where the light can be locked to the loupe, or easily removed.",
        ],
      },
      {
        title: "Natural white light",
        image: nano2,
        points: [
          "Natural white light ≤6,500 Kelvin",
          "Light intensity 24,700 lux at 35 cm",
          "Light spot, 80 mm at 35 cm",
          "Brightness settings go in high, medium and low",
          "Lamp weight only 9 g",
          "Up to 24 hours operating time",
        ],
      },
      { ...FOCUS_XTEND, image: nano3 },
    ],
  },
  "essential-alpha": {
    hero: {
      image: alphaHero,
      background: "[--heading-bg:#3a3d3e]",
      intro:
        "A lightweight LED system at an affordable price, easy to use and mount on your loupes. The portable control unit fastens to clothing with a belt clip.",
      highlight: "Affordable, light, stylish",
    },
    stats: [
      { value: "11 g", label: "lamp weight" },
      { value: "37,000 lux", label: "maximum with the dial" },
      { value: "85 mm", label: "light spot at 35 cm" },
      { value: "12 h", label: "operating time, up to" },
    ],
    features: [
      {
        title: "Stepless brightness setting",
        image: alpha1,
        paragraphs: [
          "Essential Alpha is a simple LED light system, delivering natural white light exactly where you need it. Weighing only 11 grams, and featuring the elegant Connect fixing system, where the light can be locked to the loupe.",
        ],
      },
      {
        title: "Natural white light",
        image: alpha2,
        points: [
          "Natural white light ≤6,300 Kelvin",
          "Light intensity 14,000 lux at 35 cm",
          "Light spot, 85 mm at 35 cm",
          "Stepless brightness settings",
          "Lamp weight only 11 g",
          "Up to 12 hours operating time",
        ],
      },
      {
        title: "Essential Alpha Control unit",
        image: alpha3,
        paragraphs: [
          "Finger-tip dial control to vary the output from 14,000 up to 37,000 lux. Get the exact intensity you want and need for all situations and procedures.",
          "The control unit contains a rechargeable lithium-ion battery and is easily mounted to clothing via a belt clip. Quality illumination at an affordable price.",
        ],
      },
    ],
  },
  "focus-bright-true": {
    hero: {
      image: focusHero,
      background: "[--heading-bg:#353332]",
      intro:
        "The Focus LED system provides an evenly illuminated field of view in a slim, lightweight design.",
      highlight: "Gentle on the eyes with even, shadow-free light",
    },
    stats: [
      { value: "17 g", label: "lamp weight" },
      { value: "18,600 lux", label: "Focus Bright at 35 cm" },
      { value: "70 mm", label: "light spot at 35 cm" },
      { value: "6–24 h", label: "operating time" },
    ],
    features: [
      {
        title: "Focus Bright",
        image: focus1,
        subtitle: "Bright, neutral white ≤6,500 Kelvin",
        points: [
          "Light intensity 18,600 lux at 35 cm",
          "Light spot, 70 mm at 35 cm",
          "Brightness settings go in high, medium and low",
          "Lamp weight only 17 g",
          "Up to 6-24 hours operating time",
        ],
      },
      {
        title: "Focus True",
        image: focus2,
        subtitle: "True colour, low-blue ≤6,000 Kelvin",
        points: [
          "Light intensity 15,800 lux at 35 cm",
          "Light spot, 70 mm at 35 cm",
          "Brightness settings go in high, medium and low",
          "Lamp weight only 17 g",
          "Up to 6-24 hours operating time",
        ],
      },
      { ...FOCUS_XTEND, image: focus3 },
    ],
  },
};
