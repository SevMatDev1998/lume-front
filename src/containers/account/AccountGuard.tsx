"use client";

import { ReactNode, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { loginRoute } from "@/utils/redirect";

const AccountGuard = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { status } = useAuth();

  useEffect(() => {
    if (status === "guest") router.replace(loginRoute(pathname));
  }, [status, router, pathname]);

  if (status !== "user") return <p className="py-10 text-sm text-muted">Loading…</p>;

  return children;
};

export default AccountGuard;
