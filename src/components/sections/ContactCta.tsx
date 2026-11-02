import RouteEnum from "@/enums/route.enum";
import { ButtonLink, Container } from "@/components/ui";

export const ContactCta = () => (
  <section className="bg-ink text-white">
    <Container className="flex flex-col items-start justify-between gap-4 py-12 sm:flex-row sm:items-center">
      <div>
        <h2 className="text-xl font-semibold">Want to try them on?</h2>
        <p className="mt-1 text-sm text-white/60">We will visit your clinic in Yerevan for a free fitting.</p>
      </div>
      <ButtonLink href={RouteEnum.BOOKING} variant="light">
        Book a visit
      </ButtonLink>
    </Container>
  </section>
);
