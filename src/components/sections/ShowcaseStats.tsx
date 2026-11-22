import { Container } from "@/components/ui";
import { ShowcaseHero } from "@/types";

export const ShowcaseStats = ({ stats }: { stats: ShowcaseHero["stats"] }) => (
  <section className="border-b border-line">
    <Container className="flex flex-col gap-10 py-16 sm:py-22">
      <p className="text-xs tracking-widest text-muted uppercase">In numbers</p>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-4xl leading-tight font-light tabular-nums sm:text-[3.25rem]">
              {stat.value}
            </p>
            <p className="text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);
