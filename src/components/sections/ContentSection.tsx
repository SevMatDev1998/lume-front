import { ReactNode } from "react";
import { Container } from "@/components/ui";
import { cn } from "@/utils/cn";

type ContentSectionProps = {
  id?: string;
  title: string;
  intro?: ReactNode;
  className?: string;
  children?: ReactNode;
};

export const ContentSection = ({ id, title, intro, className, children }: ContentSectionProps) => (
  <section id={id} className={cn("scroll-mt-16 border-t border-line", className)}>
    <Container className="py-14">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {intro && <div className="mt-3 max-w-2xl text-muted">{intro}</div>}
      {children && <div className="mt-8">{children}</div>}
    </Container>
  </section>
);

export const InfoCard = ({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) => (
  <div className={cn("rounded-xl bg-soft p-5", className)}>
    <h3 className="mb-2 font-semibold">{title}</h3>
    <div className="text-sm text-muted">{children}</div>
  </div>
);
