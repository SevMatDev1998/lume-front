import Link from "next/link";
import { catalogSectionRoute } from "@/enums/route.enum";
import { CATALOG_SECTIONS } from "@/constants/catalog";
import { Container } from "@/components/ui";
import { cn } from "@/utils/cn";

export const CatalogSubnav = ({ active }: { active: string }) => (
  <div className="border-b border-line">
    <Container className="flex gap-6 overflow-x-auto text-sm whitespace-nowrap">
      {CATALOG_SECTIONS.map((section) => (
        <Link
          key={section.slug}
          href={catalogSectionRoute(section.slug)}
          className={cn(
            "border-b-2 py-3",
            section.slug === active ? "border-ink font-semibold" : "border-transparent text-muted hover:text-ink",
          )}
        >
          {section.title}
        </Link>
      ))}
    </Container>
  </div>
);
