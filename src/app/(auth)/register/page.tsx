import type { Metadata } from "next";
import Link from "next/link";
import RouteEnum from "@/enums/route.enum";
import { AuthHeading } from "@/components/auth/AuthHeading";
import SignUpContainer from "@/containers/auth/SignUpContainer";

export const metadata: Metadata = { title: "Sign up" };

export default function RegisterPage() {
  return (
    <>
      <AuthHeading title="Sign up">You need an account to place an order and track it</AuthHeading>
      <SignUpContainer />
      <p className="mt-6 text-center text-sm text-muted">
        Already have an account?{" "}
        <Link href={RouteEnum.LOGIN} className="text-ink underline">
          Log in
        </Link>
      </p>
    </>
  );
}
