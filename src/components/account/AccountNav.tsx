"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import RouteEnum from "@/enums/route.enum";
import { cn } from "@/utils/cn";

const ITEMS = [
  { href: RouteEnum.ACCOUNT, label: "My orders" },
  { href: RouteEnum.ACCOUNT_PROFILE, label: "Profile" },
];

export const AccountNav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2 overflow-x-auto lg:flex-col">
      {ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "rounded-lg px-3 py-2 text-sm whitespace-nowrap",
            pathname === item.href ? "bg-soft font-semibold" : "text-muted hover:text-ink",
          )}
        >
          {item.label}
        </Link>
      ))}
      <button className="rounded-lg px-3 py-2 text-left text-sm text-muted hover:text-ink">Log out</button>
    </nav>
  );
};
