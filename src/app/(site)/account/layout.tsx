import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { AccountNav } from "@/components/account/AccountNav";

export const metadata: Metadata = {
  robots: { index: false },
};

export default function AccountLayout({ children }: LayoutProps<"/account">) {
  return (
    <Container className="grid gap-8 py-10 lg:grid-cols-[200px_1fr]">
      <aside>
        <AccountNav />
      </aside>
      <section>{children}</section>
    </Container>
  );
}
