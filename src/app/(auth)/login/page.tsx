import type { Metadata } from "next";
import Link from "next/link";
import RouteEnum from "@/enums/route.enum";
import { Button, Field, Input } from "@/components/ui";
import { AuthHeading } from "@/components/auth/AuthHeading";

export const metadata: Metadata = { title: "Log in" };

export default function LoginPage() {
  return (
    <>
      <AuthHeading title="Log in">Log in to place an order</AuthHeading>
      <form className="flex flex-col gap-4">
        <Field label="Email">
          <Input name="email" type="email" autoComplete="email" />
        </Field>
        <Field label="Password">
          <Input name="password" type="password" autoComplete="current-password" />
        </Field>
        <Link href={RouteEnum.FORGOT_PASSWORD} className="self-end text-xs underline">
          Forgot password?
        </Link>
        <Button type="submit" block>
          Log in
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-muted">
        No account?{" "}
        <Link href={RouteEnum.REGISTER} className="text-ink underline">
          Sign up
        </Link>
      </p>
    </>
  );
}
