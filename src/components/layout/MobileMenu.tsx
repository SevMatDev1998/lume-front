"use client";

import Link from "next/link";
import { MouseEvent, useRef } from "react";
import RouteEnum from "@/enums/route.enum";
import { ButtonLink } from "@/components/ui";
import useAuth from "@/hooks/useAuth";
import { Logo } from "./Logo";
import { DROPDOWN_NAV, MAIN_NAV } from "./navigation";

export const MobileMenu = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { status } = useAuth();

  const closeOnLinkClick = (event: MouseEvent) => {
    if (event.target instanceof Element && event.target.closest("a")) dialogRef.current?.close();
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => dialogRef.current?.showModal()}
        aria-label="Open menu"
        aria-haspopup="dialog"
        aria-controls="mobile-menu"
        className="-mr-2 flex size-10 items-center justify-center text-xl"
      >
        ☰
      </button>

      <dialog
        ref={dialogRef}
        id="mobile-menu"
        aria-label="Menu"
        onClick={closeOnLinkClick}
        className="m-0 h-dvh max-h-none w-full max-w-none bg-white text-ink backdrop:bg-transparent open:flex open:flex-col"
      >
        <div className="flex h-header shrink-0 items-center justify-between border-b border-line px-4 sm:px-6">
          <Logo />
          <form method="dialog">
            <button aria-label="Close menu" className="-mr-2 flex size-10 items-center justify-center text-xl">
              ✕
            </button>
          </form>
        </div>

        <nav className="flex flex-1 flex-col overflow-y-auto px-4 pt-2 pb-6 sm:px-6">
          {DROPDOWN_NAV.map((menu) => (
            <details key={menu.href} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {menu.label}
                <span className="text-sm text-muted transition-transform group-open:rotate-180">▾</span>
              </summary>
              <div className="flex flex-col pb-3">
                <Link href={menu.href} className="py-2 text-sm font-medium">
                  All {menu.label.toLowerCase()}
                </Link>
                {menu.items.map((item) => (
                  <Link key={item.href} href={item.href} className="py-2 text-sm text-muted">
                    {item.title}
                  </Link>
                ))}
              </div>
            </details>
          ))}
          {MAIN_NAV.map((item) => (
            <Link key={item.href} href={item.href} className="border-b border-line py-4 text-lg font-semibold">
              {item.label}
            </Link>
          ))}
          <div className="mt-auto flex flex-col gap-2 pt-6">
            <ButtonLink href={RouteEnum.BOOKING} block>
              Book a visit
            </ButtonLink>
            {status === "user" ? (
              <ButtonLink href={RouteEnum.ACCOUNT} variant="outline" block>
                My account
              </ButtonLink>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <ButtonLink href={RouteEnum.LOGIN} variant="outline" block>
                  Log in
                </ButtonLink>
                <ButtonLink href={RouteEnum.REGISTER} variant="outline" block>
                  Sign up
                </ButtonLink>
              </div>
            )}
          </div>
        </nav>
      </dialog>
    </div>
  );
};
