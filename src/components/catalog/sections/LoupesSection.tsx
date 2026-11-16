import headingPhoto from "@/assets/loupes-heading.jpg";
import RouteEnum, { catalogSectionRoute } from "@/enums/route.enum";
import { getCategoryProducts } from "@/api/catalog";
import { ButtonLink, Container } from "@/components/ui";
import { ModelCard } from "@/components/catalog/ModelCard";
import { PageHeading } from "@/components/sections/PageHeading";
import { LoupeSolutions } from "@/components/catalog/LoupeSolutions";

export const LoupesSection = async () => {
  const loupes = await getCategoryProducts("loupes");

  return (
    <>
      <PageHeading
        eyebrow="Products"
        title="ExamVision Loupes"
        image={headingPhoto}
        actions={
          <>
            <ButtonLink href={RouteEnum.BOOKING} variant="light">
              Book a visit
            </ButtonLink>
            <ButtonLink
              href={RouteEnum.CONFIGURATOR}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-ink"
            >
              Design your own
            </ButtonLink>
          </>
        }
      >
        Five systems, all made to your measurements. Not sure which one to choose? We will help you pick at a fitting.
      </PageHeading>

      <Container className="py-10 sm:py-14">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {loupes.map((model) => (
            <ModelCard key={model.slug} product={model} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <ButtonLink href={catalogSectionRoute("magnifications")} variant="outline">
            Compare magnifications
          </ButtonLink>
        </div>
      </Container>

      <LoupeSolutions />
    </>
  );
};
