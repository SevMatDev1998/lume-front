import type { Metadata } from "next";
import { Button } from "@/components/ui";
import { AuthHeading } from "@/components/auth/AuthHeading";

export const metadata: Metadata = { title: "Check your email" };

export default function VerifyEmailPage() {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl text-blue-700">
        ✉
      </div>
      <AuthHeading title="Check your email">
        We sent you a link. Open it to confirm your email.
      </AuthHeading>
      <Button variant="outline">Send the email again</Button>
    </div>
  );
}
