import type { Metadata } from "next";
import Link from "next/link";
import RouteEnum from "@/enums/route.enum";
import { AuthHeading } from "@/components/auth/AuthHeading";
import LoginContainer from "@/containers/auth/LoginContainer";

export const metadata: Metadata = { title: "Log in" };

export default function LoginPage() {
  return (
    <>
      <AuthHeading title="Log in">Log in to place an order</AuthHeading>
      <LoginContainer />
      <p className="mt-6 text-center text-sm text-muted">
        No account?{" "}
        <Link href={RouteEnum.REGISTER} className="text-ink underline">
          Sign up
        </Link>
      </p>
    </>
  );
}
