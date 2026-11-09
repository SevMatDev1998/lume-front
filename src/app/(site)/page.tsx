import { getImageProps } from "next/image";
import Link from "next/link";
import heroDesktopPhoto from "@/assets/hero-desktop.jpg";
import heroMobilePhoto from "@/assets/hero-mobile.jpg";
import RouteEnum, { professionRoute } from "@/enums/route.enum";
import { ModelCard } from "@/components/catalog/ModelCard";
import { getCategoryProducts } from "@/api/catalog";
import { Badge, ButtonLink, Container, Placeholder } from "@/components/ui";
import { ContactCta } from "@/components/sections/ContactCta";
import { PROFESSION_AUDIENCES } from "@/constants/professions";

const heroImage = { alt: "Two people wearing ExamVision loupes", fill: true, unoptimized: true } as const;
const heroDesktop = getImageProps({ ...heroImage, src: heroDesktopPhoto }).props;
const heroMobile = getImageProps({ ...heroImage, src: heroMobilePhoto, fetchPriority: "high" }).props;

export default async function HomePage() {
  const loupes = await getCategoryProducts("loupes");

  return (
    <>
      <section className="relative flex min-h-[calc(100svh-var(--spacing-header))] items-end bg-black text-white lg:items-center">
        <div className="absolute inset-0 lg:left-auto lg:w-[60%] xl:w-[70%]">
          <picture>
            <source media="(min-width: 640px)" srcSet={heroDesktop.src} />
            <img {...heroMobile} alt={heroMobile.alt} className="object-cover" />
          </picture>
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent lg:bg-linear-to-r lg:from-black lg:via-transparent lg:via-10%" />
        </div>
        <Container className="relative flex w-full flex-col gap-5 py-14 lg:py-20">
          <Badge className="border-white/30 text-white/80">● Official ExamVision dealer</Badge>
          <h1 className="max-w-lg text-4xl leading-tight font-semibold tracking-tight sm:text-6xl">
            Precision Made Personal
          </h1>
          <p className="max-w-md text-white/80">
            Handcrafted loupes from Denmark, made for the way you see and work.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={RouteEnum.CATALOG} variant="light">
              View products
            </ButtonLink>
            <ButtonLink
              href={RouteEnum.CONTACT}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-ink"
            >
              Contact us
            </ButtonLink>
          </div>
        </Container>
      </section>

      <Container className="border-t border-line py-14">
        <h2 className="mb-6 text-2xl font-semibold">Loupes</h2>
        <div className="flex flex-wrap justify-center gap-4 *:w-[calc(50%-0.5rem)] lg:*:w-[calc((100%-2rem)/3)]">
          {loupes.map((loupe) => (
            <ModelCard key={loupe.slug} product={loupe} />
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
