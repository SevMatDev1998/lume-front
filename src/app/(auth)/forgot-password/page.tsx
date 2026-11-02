import type { Metadata } from "next";
import Link from "next/link";
import RouteEnum from "@/enums/route.enum";
import { Button, Field, Input } from "@/components/ui";
import { AuthHeading } from "@/components/auth/AuthHeading";

export const metadata: Metadata = { title: "Forgot password" };

export default function ForgotPasswordPage() {
  return (
    <>
      <AuthHeading title="Forgot password?">We will send you a reset link</AuthHeading>
      <form className="flex flex-col gap-4">
        <Field label="Email">
          <Input name="email" type="email" autoComplete="email" />
        </Field>
        <Button type="submit" block>
          Send link
        </Button>
      </form>
      <Link href={RouteEnum.LOGIN} className="mt-6 block text-center text-sm underline">
        ← Back to log in
      </Link>
    </>
  );
}
