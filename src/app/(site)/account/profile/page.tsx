import type { Metadata } from "next";
import { Button, Field, Input } from "@/components/ui";
import { ProfileFields } from "@/components/account/ProfileFields";

export const metadata: Metadata = { title: "Profile" };

export default function ProfilePage() {
  return (
    <>
      <h1 className="mb-6 text-2xl font-semibold">Profile</h1>
      <form className="flex max-w-md flex-col gap-4">
        <ProfileFields />
        <Field label="Email">
          <Input name="email" type="email" disabled />
        </Field>
        <Button type="submit" className="w-max">
          Save
        </Button>
      </form>
    </>
  );
}
