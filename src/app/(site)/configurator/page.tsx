import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHeading } from "@/components/sections/PageHeading";
import { Configurator } from "@/components/configurator/Configurator";

export const metadata: Metadata = {
  title: "3D Configurator",
  description: "Combine an ExamVision loupe, magnification, frame and colour and see it in 3D.",
};

export default function ConfiguratorPage() {
  return (
    <>
      <PageHeading eyebrow="3D Configurator" title="Build your loupes">
        Choose the loupe, magnification, frame and colour, and see the result.
      </PageHeading>
      <Container className="pb-16">
        <Configurator />
      </Container>
    </>
  );
}
