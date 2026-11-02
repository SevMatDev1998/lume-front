import { ReactNode } from "react";
import { Container } from "@/components/ui";

type PageHeadingProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  actions?: ReactNode;
};

export const PageHeading = ({ eyebrow, title, children, actions }: PageHeadingProps) => (
  <Container className="py-10 sm:py-14">
    {eyebrow && <p className="mb-3 text-xs tracking-widest text-muted uppercase">{eyebrow}</p>}
    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
    {children && <div className="mt-3 max-w-2xl text-muted">{children}</div>}
    {actions && <div className="mt-6 flex flex-wrap gap-3">{actions}</div>}
  </Container>
);
