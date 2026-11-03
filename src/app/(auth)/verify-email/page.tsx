import type { Metadata } from "next";
import { Suspense } from "react";
import VerifyEmailContainer from "@/containers/auth/VerifyEmailContainer";

export const metadata: Metadata = { title: "Confirm your email" };

export default function VerifyEmailPage() {
  return (
    <Suspense>
      <VerifyEmailContainer />
    </Suspense>
  );
}
