import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CATALOG_SECTIONS, findCatalogSection } from "@/constants/catalog";
import { Container } from "@/components/ui";
import { CatalogSubnav } from "@/components/catalog/CatalogSubnav";
import { SECTION_CONTENT } from "@/components/catalog/sections";
import { ContactCta } from "@/components/sections/ContactCta";

export function generateStaticParams() {
  return CATALOG_SECTIONS.map((section) => ({ section: section.slug }));
}

export async function generateMetadata({ params }: PageProps<"/catalog/[section]">): Promise<Metadata> {
  const section = findCatalogSection((await params).section);
  return section ? { title: section.title, description: section.description } : {};
}

const SectionContent = async ({ params }: Pick<PageProps<"/catalog/[section]">, "params">) => {
  const section = findCatalogSection((await params).section);
  if (!section) notFound();
  const Content = SECTION_CONTENT[section.slug];

  return (
    <>
      <CatalogSubnav active={section.slug} />
      <Content />
    </>
  );
};

export default function CatalogSectionPage({ params }: PageProps<"/catalog/[section]">) {
  return (
    <>
      <Suspense fallback={<Container className="min-h-96 py-14 text-muted">Loading…</Container>}>
        <SectionContent params={params} />
      </Suspense>
      <ContactCta />
    </>
  );
}
