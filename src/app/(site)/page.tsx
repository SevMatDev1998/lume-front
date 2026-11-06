import Image from "next/image";
import Link from "next/link";
import heroPhoto from "@/assets/hero-loupes.jpg";
import RouteEnum, { productRoute, professionRoute } from "@/enums/route.enum";
import { ProductImage } from "@/components/product/ProductImage";
import { getCategoryProducts } from "@/api/catalog";
import { Badge, ButtonLink, Container, Placeholder } from "@/components/ui";
import { ContactCta } from "@/components/sections/ContactCta";
import { PROFESSION_AUDIENCES } from "@/constants/professions";

export default async function HomePage() {
  const loupes = (await getCategoryProducts("loupes")).slice(0, 4);

  return (
    <>
      <section className="grid lg:grid-cols-2">
        <Container className="flex flex-col justify-center gap-5 py-14 lg:py-24 lg:pr-12">
          <Badge>● Official ExamVision partner</Badge>
          <h1 className="text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
            Precision Made Personal
          </h1>
          <p className="max-w-md text-muted">
            Handcrafted loupes from Denmark, made for the way you see and work.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={RouteEnum.CATALOG}>View products</ButtonLink>
            <ButtonLink href={RouteEnum.CONTACT} variant="outline">
              Contact us
            </ButtonLink>
          </div>
        </Container>
        <div className="relative min-h-72 bg-black lg:min-h-[520px]">
          <Image
            src={heroPhoto}
            alt="Two people wearing ExamVision loupes"
            fill
            unoptimized
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <Container className="border-t border-line py-14">
        <h2 className="mb-6 text-2xl font-semibold">Models</h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {loupes.map((loupe) => (
            <Link
              key={loupe.slug}
              href={productRoute("loupes", loupe.slug)}
              className="overflow-hidden rounded-xl border border-line"
            >
              <ProductImage
                src={loupe.images[0]}
                alt={loupe.name}
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="aspect-4/3"
              />
              <p className="p-3 text-sm font-semibold">{loupe.name}</p>
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
          <p className="text-muted">More than magnification. A vision tailored to you. Discover the craftsmanship, personalisation and quality behind ExamVision.</p>
        </div>
      </Container>

      <ContactCta />
    </>
  );
}
