import Link from "next/link";
import { productRoute } from "@/enums/route.enum";
import { ButtonLink, Placeholder } from "@/components/ui";
import { getCategoryProducts } from "@/api/catalog";
import { CatalogProduct } from "@/types";
import { ContentSection } from "@/components/sections/ContentSection";
import { PageHeading } from "@/components/sections/PageHeading";

const AccessoryGrid = ({ items }: { items: CatalogProduct[] }) => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {items.map(({ slug, name, description }) => (
      <Link
        key={slug}
        href={productRoute("accessories", slug)}
        className="overflow-hidden rounded-xl border border-line hover:border-ink"
      >
        <Placeholder className="aspect-video">Photo</Placeholder>
        <div className="p-4">
          <h3 className="font-semibold">{name}</h3>
          {description && <p className="mt-1 text-sm text-muted">{description}</p>}
        </div>
      </Link>
    ))}
  </div>
);

export const AccessoriesSection = async () => {
  const accessories = await getCategoryProducts("accessories");
  const bySubcategory = (slug: string) => accessories.filter((product) => product.subcategory.slug === slug);

  return (
    <>
      <PageHeading
        eyebrow="Products"
        title="ExamVision Accessories"
        actions={
          <>
            <ButtonLink href="#loupes">Loupe accessories</ButtonLink>
            <ButtonLink href="#lights" variant="outline">
              Light accessories
            </ButtonLink>
          </>
        }
      >
        Protection, comfort and style for your loupes and lights.
      </PageHeading>

      <ContentSection id="loupes" title="Loupe accessories">
        <AccessoryGrid items={bySubcategory("loupe-accessories")} />
      </ContentSection>

      <ContentSection id="lights" title="Light accessories">
        <AccessoryGrid items={bySubcategory("light-accessories")} />
      </ContentSection>
    </>
  );
};
