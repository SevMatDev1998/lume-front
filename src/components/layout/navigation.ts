import RouteEnum, { catalogSectionRoute, professionRoute } from "@/enums/route.enum";
import { CATALOG_SECTIONS } from "@/constants/catalog";
import { PROFESSION_AUDIENCES } from "@/constants/professions";

export const MAIN_NAV = [
  { href: RouteEnum.CONFIGURATOR, label: "3D Configurator" },
  { href: RouteEnum.ABOUT, label: "About" },
  { href: RouteEnum.CONTACT, label: "Contact" },
];

export const DROPDOWN_NAV = [
  {
    label: "Products",
    href: RouteEnum.CATALOG,
    items: CATALOG_SECTIONS.map((section) => ({ href: catalogSectionRoute(section.slug), title: section.title })),
  },
  {
    label: "Professions",
    href: RouteEnum.PROFESSIONS,
    items: PROFESSION_AUDIENCES.map((profession) => ({ href: professionRoute(profession.slug), title: profession.title })),
  },
  {
    label: "Service & Warranty",
    href: RouteEnum.SERVICE,
    items: [
      { href: `${RouteEnum.SERVICE}#service`, title: "Service" },
      { href: `${RouteEnum.SERVICE}#warranty`, title: "Warranty" },
    ],
  },
];
