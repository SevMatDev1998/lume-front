import type { Metadata } from "next";
import Link from "next/link";
import RouteEnum from "@/enums/route.enum";
import { Button, Field, Input } from "@/components/ui";
import { AuthHeading } from "@/components/auth/AuthHeading";
import { ProfileFields } from "@/components/account/ProfileFields";

export const metadata: Metadata = { title: "Sign up" };

export default function RegisterPage() {
  return (
    <>
      <AuthHeading title="Sign up">You need an account to place an order and track it</AuthHeading>
      <form className="flex flex-col gap-4">
        <ProfileFields />
        <Field label="Email">
          <Input name="email" type="email" autoComplete="email" />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Password">
            <Input name="password" type="password" autoComplete="new-password" />
          </Field>
          <Field label="Repeat password">
            <Input name="passwordRepeat" type="password" autoComplete="new-password" />
          </Field>
        </div>
        <label className="flex items-center gap-2 text-xs text-muted">
          <input type="checkbox" name="consent" /> I agree with the privacy policy
        </label>
        <Button type="submit" block>
          Sign up
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-muted">
        Already have an account?{" "}
        <Link href={RouteEnum.LOGIN} className="text-ink underline">
          Log in
        </Link>
      </p>
    </>
  );
}
