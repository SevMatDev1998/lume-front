import Link from "next/link";
import RouteEnum, { catalogSectionRoute } from "@/enums/route.enum";
import { getCategoryProducts } from "@/api/catalog";
import { ButtonLink, Container, Placeholder } from "@/components/ui";

const BENEFITS = [
  {
    title: "Magnification and ergonomics go hand in hand",
    text: "The right working distance and declination angle keep your neck and back straight during long treatments.",
  },
  {
    title: "Ergonomic guidance",
    text: "During the fitting we look at how you sit and work, and set up the loupes for your real posture.",
  },
  {
    title: "Longer working life",
    text: "BLP and VLP coatings protect your eyes from UV and blue violet light from curing lamps and LEDs.",
  },
  {
    title: "Your perfect loupe",
    text: "Award winning Danish design, Red Dot Product Design Award in 2010, 2012, 2014, 2019 and 2024.",
  },
];

export const LoupeSolutions = async () => {
  const frames = await getCategoryProducts("frames");

  return (
    <>
      <section className="border-t border-line">
        <Container className="grid gap-10 py-14 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            <p className="text-xs tracking-widest text-muted uppercase">Made for you</p>
            <h2 className="text-3xl font-semibold tracking-tight">Customised loupe solutions</h2>
            <p className="text-muted">
              ExamVision loupes are made for dentists, hygienists, surgeons and students. Every pair is built to your
              measurements.
            </p>
            <p className="text-muted">
              Lume measures you at your clinic in Yerevan, and the loupes are handmade in Denmark under the supervision
              of optometrists.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={RouteEnum.BOOKING}>Book a fitting</ButtonLink>
              <ButtonLink href={catalogSectionRoute("optics-safety")} variant="outline">
                Optics & Safety →
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {BENEFITS.map((benefit) => (
              <div key={benefit.title} className="rounded-xl bg-soft p-5">
                <h3 className="mb-2 font-semibold">{benefit.title}</h3>
                <p className="text-sm text-muted">{benefit.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line">
        <div className="grid items-center lg:grid-cols-2">
          <Placeholder className="aspect-video lg:aspect-auto lg:h-full lg:min-h-96">Ergonomics photo</Placeholder>
          <div className="flex flex-col gap-4 px-4 py-10 sm:px-10 lg:px-16">
            <h2 className="text-3xl font-semibold">Ergonomics</h2>
            <p className="max-w-md text-muted">
              Try ExamVision loupes yourself and get advice from your local partner. We bring the demo set to you.
            </p>
            <ButtonLink href={RouteEnum.BOOKING} variant="outline" className="w-max">
              Book a visit
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <Container className="flex flex-col gap-6 py-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">Durable, yet fashionable frames</h2>
            <p className="mt-3 text-muted">
              Choose the frame and colour that fit you. Combine them with your loupe and see the result in 3D.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {frames.map((frame) => (
              <Link
                key={frame.slug}
                href={`${catalogSectionRoute("frames")}#${frame.slug}`}
                className="rounded-full border border-line bg-white px-4 py-2 text-sm hover:border-ink"
              >
                {frame.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={RouteEnum.CONFIGURATOR}>Design your own</ButtonLink>
            <ButtonLink href={catalogSectionRoute("frames")} variant="outline">
              All frames →
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
};
