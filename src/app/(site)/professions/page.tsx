import type { Metadata } from "next";
import RouteEnum from "@/enums/route.enum";
import { PROFESSION_AUDIENCES } from "@/constants/professions";
import { ButtonLink, Container, Placeholder } from "@/components/ui";
import { ContactCta } from "@/components/sections/ContactCta";
import { cn } from "@/utils/cn";

export const metadata: Metadata = {
  title: "Professions",
  description: "ExamVision loupes for dentists, hygienists, surgeons and dental students in Armenia.",
};

const STUDENT_BENEFITS = [
  "Special price for students and young doctors",
  "Free fitting at your university",
  "Help choosing the first magnification",
];

export default function ProfessionsPage() {
  return (
    <>
      <section className="flex min-h-72 items-end bg-ink text-white sm:min-h-96">
        <Container className="py-10">
          <p className="mb-3 text-xs tracking-widest text-white/60 uppercase">Lume · ExamVision</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Made for your profession</h1>
          <p className="mt-3 max-w-md text-white/70">Every specialty needs its own magnification, light and posture.</p>
        </Container>
      </section>

      <nav className="sticky top-16 z-20 border-b border-line bg-white/95 backdrop-blur">
        <Container className="flex gap-6 overflow-x-auto py-3 text-sm whitespace-nowrap">
          {PROFESSION_AUDIENCES.map((profession) => (
            <a key={profession.slug} href={`#${profession.slug}`} className="text-muted hover:text-ink">
              {profession.title}
            </a>
          ))}
        </Container>
      </nav>

      {PROFESSION_AUDIENCES.map((profession, index) => (
        <section key={profession.slug} id={profession.slug} className="scroll-mt-28 border-b border-line">
          <div className="grid items-center lg:grid-cols-2">
            <Placeholder className={cn("aspect-video lg:aspect-auto lg:h-full lg:min-h-96", index % 2 && "lg:order-2")}>
              {profession.title} photo
            </Placeholder>
            <div className="flex flex-col gap-4 px-4 py-10 sm:px-10 lg:px-16">
              <span className="text-xs tracking-widest text-muted">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="text-3xl font-semibold">{profession.title}</h2>
              <p className="max-w-md text-muted">{profession.description}</p>
              {profession.slug === "students" && (
                <ul className="flex flex-col gap-2 text-sm">
                  {STUDENT_BENEFITS.map((benefit) => (
                    <li key={benefit}>✓ {benefit}</li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-3">
                <ButtonLink href={RouteEnum.CATALOG} variant="outline">
                  Find your loupe →
                </ButtonLink>
                <ButtonLink href={RouteEnum.BOOKING}>Book a fitting</ButtonLink>
              </div>
            </div>
          </div>
        </section>
      ))}

      <ContactCta />
    </>
  );
}
