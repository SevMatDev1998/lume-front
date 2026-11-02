import { ReactNode } from "react";

export const AuthHeading = ({ title, children }: { title: string; children?: ReactNode }) => (
  <div className="mb-6">
    <h1 className="text-2xl font-semibold">{title}</h1>
    {children && <p className="mt-1 text-sm text-muted">{children}</p>}
  </div>
);
