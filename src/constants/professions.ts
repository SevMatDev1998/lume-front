import dentistsPhoto from "@/assets/professions/dentists.jpg";
import hygienistsPhoto from "@/assets/professions/hygienists.jpg";
import studentsPhoto from "@/assets/professions/students.jpg";
import surgeonsPhoto from "@/assets/professions/surgeons.jpg";

export const PROFESSIONS = [
  { value: "DENTIST", label: "Dentist" },
  { value: "HYGIENIST", label: "Hygienist" },
  { value: "SURGEON", label: "Surgeon" },
  { value: "STUDENT", label: "Student" },
  { value: "OTHER", label: "Other" },
] as const;

export const PROFESSION_AUDIENCES = [
  {
    slug: "dentists",
    photo: dentistsPhoto,
    title: "Dentists",
    description:
      "More precision and a healthy posture during long treatments. Kepler loupes for endodontics and prosthetics.",
  },
  {
    slug: "hygienists",
    photo: hygienistsPhoto,
    title: "Hygienists",
    description: "Lightweight Galilean loupes with a wide field of view for daily hygiene work.",
  },
  {
    slug: "surgeons",
    photo: surgeonsPhoto,
    title: "Surgeons",
    description: "High magnification and bright LED light for implantology and oral surgery.",
  },
  {
    slug: "students",
    photo: studentsPhoto,
    title: "Students",
    description: "Start with the right posture from day one. Special conditions for dental students and young doctors.",
  },
];
