import Link from "next/link";
import RouteEnum, { catalogSectionRoute, professionRoute } from "@/enums/route.enum";
import { Badge, ButtonLink, Container, Placeholder } from "@/components/ui";
import { ContactCta } from "@/components/sections/ContactCta";
import { PROFESSION_AUDIENCES } from "@/constants/professions";

const MODELS = ["Kepler Advanced", "Kepler Reflekt", "Kepler Kompakt", "Galilean HD"];

export default function HomePage() {
  return (
    <>
      <section className="grid lg:grid-cols-2">
        <Container className="flex flex-col justify-center gap-5 py-14 lg:py-24 lg:pr-12">
          <Badge>● Official ExamVision partner</Badge>
          <h1 className="text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
            Loupes for dentists and surgeons
          </h1>
          <p className="max-w-md text-muted">
            We help you choose the model and magnification for your work. Fitting and consultation are free.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={RouteEnum.CATALOG}>View products</ButtonLink>
            <ButtonLink href={RouteEnum.CONTACT} variant="outline">
              Contact us
            </ButtonLink>
          </div>
        </Container>
        <Placeholder className="min-h-72 lg:min-h-[520px]">Hero photo</Placeholder>
      </section>

      <Container className="border-t border-line py-14">
        <h2 className="mb-6 text-2xl font-semibold">Models</h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {MODELS.map((model) => (
            <Link key={model} href={catalogSectionRoute("loupes")} className="overflow-hidden rounded-xl border border-line">
              <Placeholder className="aspect-4/3">Photo</Placeholder>
              <p className="p-3 text-sm font-semibold">{model}</p>
            </Link>
          ))}
        </div>
      </Container>

      <Container className="border-t border-line py-14">
        <h2 className="mb-6 text-2xl font-semibold">Who it is for</h2>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {PROFESSION_AUDIENCES.map((profession) => (
            <Link
              key={profession.slug}
              href={professionRoute(profession.slug)}
              className="rounded-xl bg-soft p-5 text-sm font-semibold hover:bg-line"
            >
              {profession.title}
            </Link>
          ))}
        </div>
      </Container>

      <Container className="grid items-center gap-8 border-t border-line py-14 lg:grid-cols-2">
        <Placeholder className="aspect-video rounded-xl">Made in Denmark</Placeholder>
        <div>
          <h2 className="mb-3 text-2xl font-semibold">Why ExamVision</h2>
          <p className="text-muted">Handmade in Denmark, fitted to you, Red Dot Award, ISO 13485.</p>
        </div>
      </Container>

      <ContactCta />
    </>
  );
}
