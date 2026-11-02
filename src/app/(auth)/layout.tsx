import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { Logo } from "@/components/layout/Logo";

export const metadata: Metadata = {
  robots: { index: false },
};

export default function AuthLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-soft">
      <Container className="flex h-16 items-center">
        <Logo />
      </Container>
      <div className="flex flex-1 items-start justify-center px-4 py-8 sm:items-center">
        <div className="w-full max-w-md rounded-2xl border border-line bg-white p-6 sm:p-8">{children}</div>
      </div>
    </div>
  );
}
