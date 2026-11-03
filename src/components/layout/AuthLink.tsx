"use client";

import Link from "next/link";
import { ComponentProps } from "react";
import RouteEnum from "@/enums/route.enum";
import useAuth from "@/hooks/useAuth";

export const AuthLink = (props: Omit<ComponentProps<typeof Link>, "href" | "children">) => {
  const { status } = useAuth();
  const isUser = status === "user";

  return (
    <Link href={isUser ? RouteEnum.ACCOUNT : RouteEnum.LOGIN} {...props}>
      {isUser ? "My account" : "Log in"}
    </Link>
  );
};
