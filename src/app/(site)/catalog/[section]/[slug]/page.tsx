import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { catalogSectionRoute, RouteEnum } from "@/enums/route.enum";
import { Badge, ButtonLink, Chip, Container, Placeholder } from "@/components/ui";
import { OrderButton } from "@/components/product/OrderButton";
import { OPTION_LABELS } from "@/constants/catalog";
import { getCatalog, getProduct } from "@/api/catalog";
import { OptionType } from "@/types";
import { optionValues } from "@/utils/catalog";

const ORDER_OPTION_TYPES: OptionType[] = ["MAGNIFICATION", "COLOR", "SIZE"];

export async function generateStaticParams() {
  return (await getCatalog()).flatMap((product) =>
    product.category ? [{ section: product.category.slug, slug: product.slug }] : [],
  );
}

export async function generateMetadata({ params }: PageProps<"/catalog/[section]/[slug]">): Promise<Metadata> {
  const product = await getProduct((await params).slug);
  return product ? { title: product.name, description: product.description ?? undefined } : {};
}

const ProductContent = async ({ params }: Pick<PageProps<"/catalog/[section]/[slug]">, "params">) => {
  const { section, slug } = await params;
  const product = await getProduct(slug);
  if (!product?.category || product.category.slug !== section) notFound();

  const optionGroups = (Object.keys(OPTION_LABELS) as OptionType[])
    .map((type) => ({ type, values: optionValues(product, type) }))
    .filter(({ values }) => values.length > 0);
  const orderOption = ORDER_OPTION_TYPES.map((type) => ({ type, values: optionValues(product, type) })).find(
    ({ values }) => values.length > 1,
  );

  return (
    <Container className="py-8">
      <nav className="mb-6 text-xs text-muted">
        <Link href={RouteEnum.CATALOG}>Products</Link> /{" "}
        <Link href={catalogSectionRoute(section)}>{product.category.name}</Link> / {product.name}
      </nav>
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <Placeholder className="aspect-4/3 rounded-xl">Main photo</Placeholder>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((index) => (
              <Placeholder key={index} className="aspect-4/3 rounded-md" />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Badge>ExamVision · {product.subcategory.name}</Badge>
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          {product.description && <p className="text-muted">{product.description}</p>}
          {optionGroups.map(({ type, values }) => (
            <div key={type}>
              <p className="mb-2 text-xs tracking-wider text-muted uppercase">{OPTION_LABELS[type]}</p>
              <div className="flex flex-wrap gap-2">
                {values.map((value) => (
                  <Chip key={value} className="px-3 py-1 text-sm">
                    {value}
                  </Chip>
                ))}
              </div>
            </div>
          ))}
          <div className="flex flex-wrap gap-3">
            <OrderButton
              productSlug={product.slug}
              productName={product.name}
              options={orderOption && { label: OPTION_LABELS[orderOption.type], values: orderOption.values }}
            />
            <ButtonLink href={RouteEnum.CONFIGURATOR} variant="outline">
              Configure in 3D
            </ButtonLink>
            {product.pdfUrl && (
              <ButtonLink href={product.pdfUrl} target="_blank" rel="noreferrer" variant="outline">
                Download PDF
              </ButtonLink>
            )}
          </div>
          {product.specs.length > 0 && (
            <dl className="grid grid-cols-2 gap-2">
              {product.specs.map(({ label, value }) => (
                <div key={label} className="rounded-lg bg-soft p-3">
                  <dt className="text-xs text-muted">{label}</dt>
                  <dd className="font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </Container>
  );
};

export default function ProductPage({ params }: PageProps<"/catalog/[section]/[slug]">) {
  return (
    <Suspense fallback={<Container className="py-8 text-muted">Loading…</Container>}>
      <ProductContent params={params} />
    </Suspense>
  );
}
