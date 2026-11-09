import Link from "next/link";
import RouteEnum, { catalogSectionRoute } from "@/enums/route.enum";
import { CATALOG_SECTIONS } from "@/constants/catalog";
import { Container } from "@/components/ui";
import { Logo } from "./Logo";
import { MAIN_NAV } from "./navigation";

export const Footer = () => (
  <footer className="mt-auto border-t border-line bg-soft">
    <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
      <div className="flex flex-col gap-3">
        <Logo />
        <p className="text-sm text-muted">Official ExamVision dealer in Armenia.</p>
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <span className="mb-1 text-xs tracking-wider text-muted uppercase">Products</span>
        {CATALOG_SECTIONS.map((section) => (
          <Link key={section.slug} href={catalogSectionRoute(section.slug)} className="hover:underline">
            {section.title}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <span className="mb-1 text-xs tracking-wider text-muted uppercase">Company</span>
        {MAIN_NAV.map((item) => (
          <Link key={item.href} href={item.href} className="hover:underline">
            {item.label}
          </Link>
        ))}
        <Link href={RouteEnum.ACCOUNT} className="hover:underline">
          My account
        </Link>
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <span className="mb-1 text-xs tracking-wider text-muted uppercase">Contact</span>
        <span>+374 77 210119</span>
        <span>artush.stomatology@gmail.com</span>
        <span>4 Mazmanian street, Yerevan</span>
      </div>
    </Container>
    <Container className="border-t border-line py-5 text-xs text-muted">
      © Lume · Official ExamVision dealer
    </Container>
  </footer>
);
