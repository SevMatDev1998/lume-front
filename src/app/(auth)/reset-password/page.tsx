import type { Metadata } from "next";
import { Suspense } from "react";
import { AuthHeading } from "@/components/auth/AuthHeading";
import ResetPasswordContainer from "@/containers/auth/ResetPasswordContainer";

export const metadata: Metadata = { title: "New password" };

export default function ResetPasswordPage() {
  return (
    <>
      <AuthHeading title="New password" />
      <Suspense>
        <ResetPasswordContainer />
      </Suspense>
    </>
  );
}
