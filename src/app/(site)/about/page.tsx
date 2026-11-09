import type { Metadata } from "next";
import { Badge, Container, Placeholder } from "@/components/ui";
import { ContactCta } from "@/components/sections/ContactCta";

export const metadata: Metadata = {
  title: "About us",
  description: "Lume is the official ExamVision dealer in Armenia.",
};

const STATS = [
  ["10+", "years of experience"],
  ["500+", "doctors with loupes"],
  ["1", "official dealer in Armenia"],
];

const STEPS = ["You choose a model on the site", "We contact you and take measurements", "Your loupes are made for you"];

export default function AboutPage() {
  return (
    <>
      <section className="grid lg:grid-cols-2">
        <Container className="flex flex-col justify-center gap-4 py-14 lg:pr-12">
          <Badge>● About us</Badge>
          <h1 className="text-4xl font-semibold tracking-tight">Lume, official ExamVision dealer</h1>
          <p className="text-muted">Who we are, since when we work and how we help: loupe selection, fittings and service.</p>
        </Container>
        <Placeholder className="min-h-64">Team photo</Placeholder>
      </section>

      <Container className="grid gap-3 border-t border-line py-14 sm:grid-cols-3">
        {STATS.map(([value, label]) => (
          <div key={label} className="rounded-xl bg-soft p-6">
            <p className="text-3xl font-semibold">{value}</p>
            <p className="text-sm text-muted">{label}</p>
          </div>
        ))}
      </Container>

      <Container className="border-t border-line py-14">
        <h2 className="mb-6 text-2xl font-semibold">How we work</h2>
        <ol className="grid gap-3 sm:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step} className="rounded-xl bg-soft p-6">
              <p className="text-3xl font-semibold">{index + 1}</p>
              <p className="text-sm text-muted">{step}</p>
            </li>
          ))}
        </ol>
      </Container>

      <ContactCta />
    </>
  );
}
