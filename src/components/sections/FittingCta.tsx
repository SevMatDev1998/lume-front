import RouteEnum from "@/enums/route.enum";
import { ButtonLink, Container } from "@/components/ui";

export const FittingCta = () => (
  <section className="bg-ink text-white">
    <Container className="flex flex-col items-center gap-6 py-20 text-center sm:py-28">
      <h2 className="text-4xl font-light tracking-tight sm:text-5xl">Try them in your clinic. Free.</h2>
      <p className="max-w-xl text-lg font-light text-white/70">
        We visit your clinic anywhere in Armenia, take your measurements and let you evaluate the optics in your own
        working position. The fitting is complimentary and carries no obligation.
      </p>
      <ButtonLink href={RouteEnum.BOOKING} variant="light" className="mt-2">
        Book a visit
      </ButtonLink>
    </Container>
  </section>
);
