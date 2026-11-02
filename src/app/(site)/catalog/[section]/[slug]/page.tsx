import Link from "next/link";
import { Suspense } from "react";
import { catalogSectionRoute, RouteEnum } from "@/enums/route.enum";
import { Badge, Button, ButtonLink, Container, Placeholder } from "@/components/ui";
import { OrderButton } from "@/components/product/OrderButton";

const MAGNIFICATIONS = ["4.0x", "5.0x", "6.0x", "7.0x"];
const SPECS = [
  ["Weight", "49 g"],
  ["Working distance", "31–69 cm"],
  ["Declination", "up to 40°"],
  ["Protection", "BLP"],
];

const ProductContent = async ({ params }: Pick<PageProps<"/catalog/[section]/[slug]">, "params">) => {
  const { section, slug } = await params;
  const name = slug.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());

  return (
    <Container className="py-8">
      <nav className="mb-6 text-xs text-muted">
        <Link href={RouteEnum.CATALOG}>Products</Link> / <Link href={catalogSectionRoute(section)}>{section}</Link> /{" "}
        {name}
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
          <Badge>ExamVision</Badge>
          <h1 className="text-3xl font-semibold">{name}</h1>
          <p className="text-muted">Product description from the API.</p>
          <div>
            <p className="mb-2 text-xs tracking-wider text-muted uppercase">Magnification</p>
            <div className="flex flex-wrap gap-2">
              {MAGNIFICATIONS.map((magnification) => (
                <Button key={magnification} variant="outline" size="sm">
                  {magnification}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <OrderButton productName={name} />
            <ButtonLink href={RouteEnum.CONFIGURATOR} variant="outline">
              Configure in 3D
            </ButtonLink>
            <Button variant="outline">Download PDF</Button>
          </div>
          <dl className="grid grid-cols-2 gap-2">
            {SPECS.map(([label, value]) => (
              <div key={label} className="rounded-lg bg-soft p-3">
                <dt className="text-xs text-muted">{label}</dt>
                <dd className="font-semibold">{value}</dd>
              </div>
            ))}
          </dl>
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
