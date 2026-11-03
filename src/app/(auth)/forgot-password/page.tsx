import type { Metadata } from "next";
import Link from "next/link";
import RouteEnum from "@/enums/route.enum";
import { AuthHeading } from "@/components/auth/AuthHeading";
import ForgotPasswordContainer from "@/containers/auth/ForgotPasswordContainer";

export const metadata: Metadata = { title: "Forgot password" };

export default function ForgotPasswordPage() {
  return (
    <>
      <AuthHeading title="Forgot password?">We will send you a reset link</AuthHeading>
      <ForgotPasswordContainer />
      <Link href={RouteEnum.LOGIN} className="mt-6 block text-center text-sm underline">
        ← Back to log in
      </Link>
    </>
  );
}
