import Link from "next/link";
import RouteEnum, { catalogSectionRoute, productRoute } from "@/enums/route.enum";
import { getCategoryProducts } from "@/api/catalog";
import { optionValues } from "@/utils/catalog";
import { ButtonLink, Chip, Container, Placeholder } from "@/components/ui";
import { PageHeading } from "@/components/sections/PageHeading";
import { LoupeSolutions } from "@/components/catalog/LoupeSolutions";

export const LoupesSection = async () => {
  const loupes = await getCategoryProducts("loupes");

  return (
    <>
      <PageHeading
        eyebrow="Products"
        title="ExamVision Loupes"
        actions={
          <>
            <ButtonLink href={RouteEnum.CONFIGURATOR}>Design your own</ButtonLink>
            <ButtonLink href={catalogSectionRoute("magnifications")} variant="outline">
              Compare magnifications
            </ButtonLink>
          </>
        }
      >
        Five loupe systems, Galilean and Kepler. Magnification from 2.3x to 7.6x, made to your measurements.
      </PageHeading>

      <Container className="pb-14">
        <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:px-0 lg:grid-cols-5">
          {loupes.map((model) => (
            <Link
              key={model.slug}
              href={productRoute("loupes", model.slug)}
              className="w-56 shrink-0 snap-start overflow-hidden rounded-xl bg-soft sm:w-auto"
            >
              <Placeholder className="aspect-3/4">Photo</Placeholder>
              <div className="flex flex-col gap-2 p-3">
                <p className="text-sm font-semibold">{model.name}</p>
                <p className="text-xs text-muted">{model.description}</p>
                <div className="flex flex-wrap gap-1">
                  {optionValues(model, "MAGNIFICATION").map((magnification) => (
                    <Chip key={magnification}>{magnification}</Chip>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>

      <LoupeSolutions />
    </>
  );
};
