import type { Metadata } from "next";
import { catalogSectionRoute } from "@/enums/route.enum";
import { CATALOG_SECTIONS } from "@/constants/catalog";
import { ButtonLink, Container, Placeholder } from "@/components/ui";
import { ContactCta } from "@/components/sections/ContactCta";
import { cn } from "@/utils/cn";

export const metadata: Metadata = {
  title: "Loupes & Lights",
  description: "ExamVision loupes, LED lights, frames and accessories in Armenia.",
};

export default function CatalogPage() {
  return (
    <>
      <section className="relative flex min-h-72 items-end bg-ink text-white sm:min-h-96">
        <Container className="py-10">
          <p className="mb-3 text-xs tracking-widest text-white/60 uppercase">Lume · ExamVision</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Loupes & Lights</h1>
          <p className="mt-3 max-w-md text-white/70">
            Handmade Danish loupes fitted to you. Magnification from 2.3x to 7.6x.
          </p>
        </Container>
      </section>

      {CATALOG_SECTIONS.map((section, index) => (
        <section key={section.slug} className="border-b border-line">
          <div className="grid items-center lg:grid-cols-2">
            <Placeholder className={cn("aspect-video lg:aspect-auto lg:h-full lg:min-h-96", index % 2 && "lg:order-2")}>
              {section.title} photo
            </Placeholder>
            <div className="flex flex-col gap-4 px-4 py-10 sm:px-10 lg:px-16">
              <span className="text-xs tracking-widest text-muted">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="text-3xl font-semibold">{section.title}</h2>
              <p className="max-w-md text-muted">{section.description}</p>
              <ButtonLink href={catalogSectionRoute(section.slug)} variant="outline" className="w-max">
                Explore →
              </ButtonLink>
            </div>
          </div>
        </section>
      ))}

      <ContactCta />
    </>
  );
}
