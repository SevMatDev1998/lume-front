import RouteEnum from "@/enums/route.enum";
import { ButtonLink } from "@/components/ui";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center gap-4 px-4 py-24 text-center">
        <p className="text-7xl font-semibold">404</p>
        <p className="text-muted">This page does not exist</p>
        <div className="flex gap-3">
          <ButtonLink href={RouteEnum.HOME}>Home</ButtonLink>
          <ButtonLink href={RouteEnum.CATALOG} variant="outline">
            Products
          </ButtonLink>
        </div>
      </main>
      <Footer />
    </>
  );
}
