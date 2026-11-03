import Link from "next/link";
import RouteEnum from "@/enums/route.enum";
import { ButtonLink, Container } from "@/components/ui";
import { Logo } from "./Logo";
import { AuthLink } from "./AuthLink";
import { MobileMenu } from "./MobileMenu";
import { NavDropdown } from "./NavDropdown";
import { DROPDOWN_NAV, MAIN_NAV } from "./navigation";

export const Header = () => (
  <header className="sticky top-0 z-30 border-b border-line bg-white/95 backdrop-blur">
    <Container className="flex h-16 items-center justify-between gap-6">
      <Logo />
      <nav className="hidden items-center gap-6 text-sm text-ink/80 xl:gap-8 lg:flex">
        {DROPDOWN_NAV.map((menu) => (
          <NavDropdown key={menu.href} {...menu} />
        ))}
        {MAIN_NAV.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-ink">
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="hidden items-center gap-4 lg:flex">
        <AuthLink className="text-sm underline-offset-4 hover:underline" />
        <ButtonLink href={RouteEnum.BOOKING} size="sm">
          Book a visit
        </ButtonLink>
      </div>
      <MobileMenu />
    </Container>
  </header>
);
