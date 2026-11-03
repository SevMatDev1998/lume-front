"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import RouteEnum from "@/enums/route.enum";
import { cn } from "@/utils/cn";
import ApiInstance from "@/api/api";
import useAppDispatch from "@/hooks/useAppDispatch";
import { logOut } from "@/store/slices/auth.slice";

const ITEMS = [
  { href: RouteEnum.ACCOUNT, label: "My orders" },
  { href: RouteEnum.ACCOUNT_PROFILE, label: "Profile" },
];

export const AccountNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
    dispatch(ApiInstance.util.resetApiState());
    router.push(RouteEnum.HOME);
  };

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
      <button onClick={handleLogOut} className="rounded-lg px-3 py-2 text-left text-sm text-muted hover:text-ink">
        Log out
      </button>
    </nav>
  );
};
