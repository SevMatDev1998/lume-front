import type { Metadata } from "next";
import { Button, Field, Input } from "@/components/ui";
import { AuthHeading } from "@/components/auth/AuthHeading";

export const metadata: Metadata = { title: "New password" };

export default function ResetPasswordPage() {
  return (
    <>
      <AuthHeading title="New password" />
      <form className="flex flex-col gap-4">
        <Field label="New password">
          <Input name="password" type="password" autoComplete="new-password" />
        </Field>
        <Field label="Repeat password">
          <Input name="passwordRepeat" type="password" autoComplete="new-password" />
        </Field>
        <Button type="submit" block>
          Save
        </Button>
      </form>
    </>
  );
}
