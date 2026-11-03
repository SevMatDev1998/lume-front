import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHeading } from "@/components/sections/PageHeading";
import { Configurator } from "@/components/configurator/Configurator";
import { getCategoryProducts } from "@/api/catalog";

export const metadata: Metadata = {
  title: "3D Configurator",
  description: "Combine an ExamVision loupe, magnification, frame and colour and see it in 3D.",
};

export default async function ConfiguratorPage() {
  const [loupes, frames] = await Promise.all([getCategoryProducts("loupes"), getCategoryProducts("frames")]);

  return (
    <>
      <PageHeading eyebrow="3D Configurator" title="Build your loupes">
        Choose the loupe, magnification, frame and colour, and see the result.
      </PageHeading>
      <Container className="pb-16">
        <Configurator loupes={loupes} frames={frames} />
      </Container>
    </>
  );
}
