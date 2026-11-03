import type { Metadata } from "next";
import ProfileContainer from "@/containers/account/ProfileContainer";

export const metadata: Metadata = { title: "Profile" };

export default function ProfilePage() {
  return (
    <>
      <h1 className="mb-6 text-2xl font-semibold">Profile</h1>
      <ProfileContainer />
    </>
  );
}
