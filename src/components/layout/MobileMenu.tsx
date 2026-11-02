"use client";

import Link from "next/link";
import { useState } from "react";
import RouteEnum from "@/enums/route.enum";
import { ButtonLink } from "@/components/ui";
import { DROPDOWN_NAV, MAIN_NAV } from "./navigation";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open} className="p-2 text-xl">
        {open ? "✕" : "☰"}
      </button>
      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-30 overflow-y-auto bg-white px-4 py-6">
          {DROPDOWN_NAV.map((menu) => (
            <div key={menu.href}>
              <Link href={menu.href} onClick={close} className="block py-3 text-lg font-semibold">
                {menu.label}
              </Link>
              <div className="mb-4 border-l border-line pl-4">
                {menu.items.map((item) => (
                  <Link key={item.href} href={item.href} onClick={close} className="block py-2 text-sm text-muted">
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          {MAIN_NAV.map((item) => (
            <Link key={item.href} href={item.href} onClick={close} className="block py-3 text-lg font-semibold">
              {item.label}
            </Link>
          ))}
          <div className="mt-6 flex flex-col gap-2">
            <ButtonLink href={RouteEnum.BOOKING} onClick={close} block>
              Book a visit
            </ButtonLink>
            <ButtonLink href={RouteEnum.REGISTER} onClick={close} variant="outline" block>
              Sign up
            </ButtonLink>
            <ButtonLink href={RouteEnum.LOGIN} onClick={close} variant="outline" block>
              Log in
            </ButtonLink>
          </div>
        </div>
      )}
    </div>
  );
};
