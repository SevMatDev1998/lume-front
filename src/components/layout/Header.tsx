import Link from "next/link";
import RouteEnum from "@/enums/route.enum";
import { Container } from "@/components/ui";
import { Logo } from "./Logo";
import { AuthLink } from "./AuthLink";
import { MobileMenu } from "./MobileMenu";
import { NavDropdown } from "./NavDropdown";
import { ScrollHeader } from "./ScrollHeader";
import { DROPDOWN_NAV, MAIN_NAV } from "./navigation";

const STAGGER_MS = 50;
const SLIDE_AWAY =
  "transition-[translate,opacity] duration-400 ease-[cubic-bezier(.25,.46,.45,.94)] lg:group-data-[scroll=down]/header:-translate-y-header lg:group-data-[scroll=down]/header:opacity-0";

const NAV_ITEMS = [
  ...DROPDOWN_NAV.map((menu) => <NavDropdown key={menu.href} {...menu} />),
  ...MAIN_NAV.map((item) => (
    <Link key={item.href} href={item.href} className="whitespace-nowrap hover:text-ink">
      {item.label}
    </Link>
  )),
];

export const Header = () => (
  <>
    <Link
      href={RouteEnum.BOOKING}
      className="block bg-black py-1.5 text-center text-[13px] text-white transition-opacity hover:opacity-75"
    >
      Book a visit
    </Link>
    <ScrollHeader className="sticky top-0 z-30 border-b border-line bg-white/95 backdrop-blur transition-[background-color,border-color,backdrop-filter] duration-500 data-[scroll=down]:pointer-events-none data-[scroll=down]:border-transparent data-[scroll=down]:bg-transparent data-[scroll=down]:backdrop-blur-none">
      <Container className="relative flex h-header items-center justify-end gap-4 sm:justify-between xl:gap-6">
        <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 rounded-xl transition-[background-color,box-shadow,translate,opacity] duration-500 max-lg:group-data-[scroll=down]/header:-translate-y-header max-lg:group-data-[scroll=down]/header:opacity-0 sm:static sm:translate-x-0 lg:-ml-5 lg:px-5 lg:py-3 lg:group-data-[scroll=down]/header:bg-white lg:group-data-[scroll=down]/header:shadow-[0_0_24px_rgb(0_0_0/0.12)]">
          <Logo />
        </div>
        <nav className="hidden items-center gap-5 font-nav text-sm leading-[1.3125rem] text-black xl:gap-8 lg:flex">
          {NAV_ITEMS.map((item, index) => (
            <div key={item.key} className={SLIDE_AWAY} style={{ transitionDelay: `${index * STAGGER_MS}ms` }}>
              {item}
            </div>
          ))}
        </nav>
        <AuthLink
          className={`hidden font-nav text-sm leading-[1.3125rem] whitespace-nowrap text-black underline-offset-4 hover:underline lg:block ${SLIDE_AWAY}`}
          style={{ transitionDelay: `${NAV_ITEMS.length * STAGGER_MS}ms` }}
        />
        <div className="pointer-events-auto -mr-2 rounded-xl transition-[background-color,box-shadow] duration-500 group-data-[scroll=down]/header:bg-white group-data-[scroll=down]/header:shadow-[0_0_24px_rgb(0_0_0/0.12)] lg:hidden">
          <MobileMenu />
        </div>
      </Container>
    </ScrollHeader>
  </>
);
