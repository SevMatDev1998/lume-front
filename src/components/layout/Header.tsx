import Link from "next/link";
import RouteEnum from "@/enums/route.enum";
import { Container } from "@/components/ui";
import { Logo } from "./Logo";
import { AuthLink } from "./AuthLink";
import { MobileMenu } from "./MobileMenu";
import { NavDropdown } from "./NavDropdown";
import { DROPDOWN_NAV, MAIN_NAV } from "./navigation";

export const Header = () => (
  <>
    <Link
      href={RouteEnum.BOOKING}
      className="block bg-black py-1.5 text-center text-[13px] text-white transition-opacity hover:opacity-75"
    >
      Book a visit
    </Link>
    <header className="sticky top-0 z-30 border-b border-line bg-white/95 backdrop-blur">
      <Container className="flex h-header items-center justify-between gap-4 xl:gap-6">
        <Logo />
        <nav className="hidden items-center gap-5 text-[15px] text-ink/80 xl:gap-8 lg:flex">
          {DROPDOWN_NAV.map((menu) => (
            <NavDropdown key={menu.href} {...menu} />
          ))}
          {MAIN_NAV.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <AuthLink className="hidden text-[15px] whitespace-nowrap underline-offset-4 hover:underline lg:block" />
        <MobileMenu />
      </Container>
    </header>
  </>
);
