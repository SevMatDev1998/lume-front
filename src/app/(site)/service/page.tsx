import type { Metadata } from "next";
import RouteEnum from "@/enums/route.enum";
import { Badge, ButtonLink, Container, Placeholder } from "@/components/ui";
import { ContactCta } from "@/components/sections/ContactCta";

export const metadata: Metadata = {
  title: "Service & Warranty",
  description: "Official warranty, adjustment, cleaning and repair of ExamVision loupes in Armenia.",
};

const SERVICES = [
  ["Fitting and adjustment", "We set the working distance and angle for you, and adjust them again whenever you need."],
  ["Cleaning and check-up", "Professional cleaning of lenses and frame, and a check of the optics and screws."],
  ["Repair", "We send the loupes to ExamVision in Denmark and give you a replacement while you wait."],
  ["Spare parts", "Visionshields, temple tips, nose pads, batteries and cables for your LED light."],
  ["Prescription change", "If your vision changes, we update the prescription lenses in your loupes."],
];

const WARRANTY = [
  ["Official manufacturer warranty", "Every ExamVision loupe and LED light bought from Lume is covered by the ExamVision warranty."],
  ["Handled in Yerevan", "You bring the loupes to us, we take care of everything with ExamVision in Denmark."],
  ["Replacement while you wait", "You get loupes to work with until yours come back from repair."],
];

const STEPS = [
  ["Order", "You choose a model and leave an order on the site."],
  ["Measurement", "We visit you and take measurements in your working posture."],
  ["Production", "Your loupes are handmade in Denmark."],
  ["Delivery", "We bring them to you and adjust them in place."],
  ["Service", "Free check-ups and help for the whole time you use them."],
];

export default function ServicePage() {
  return (
    <>
      <section className="grid lg:grid-cols-2">
        <Container className="flex flex-col justify-center gap-4 py-14 lg:pr-12">
          <Badge>● Service & Warranty</Badge>
          <h1 className="text-4xl font-semibold tracking-tight">We stay with you after the purchase</h1>
          <p className="text-muted">Adjustment, warranty, cleaning and repair. All in Yerevan, with the official dealer.</p>
          <ButtonLink href={RouteEnum.BOOKING} className="w-max">
            Book a service visit
          </ButtonLink>
        </Container>
        <Placeholder className="min-h-64">Service photo</Placeholder>
      </section>

      <Container id="service" className="scroll-mt-header border-t border-line py-14">
        <h2 className="mb-6 text-2xl font-semibold">Service</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(([title, text]) => (
            <div key={title} className="rounded-xl bg-soft p-6">
              <h3 className="mb-2 font-semibold">{title}</h3>
              <p className="text-sm text-muted">{text}</p>
            </div>
          ))}
        </div>
      </Container>

      <Container id="warranty" className="scroll-mt-header border-t border-line py-14">
        <h2 className="mb-2 text-2xl font-semibold">Warranty</h2>
        <p className="mb-6 max-w-2xl text-muted">Warranty terms and periods come from ExamVision. Keep your order number, we find everything by it.</p>
        <div className="grid gap-3 sm:grid-cols-3">
          {WARRANTY.map(([title, text]) => (
            <div key={title} className="rounded-xl border border-line p-6">
              <h3 className="mb-2 font-semibold">✓ {title}</h3>
              <p className="text-sm text-muted">{text}</p>
            </div>
          ))}
        </div>
      </Container>

      <Container className="border-t border-line py-14">
        <h2 className="mb-6 text-2xl font-semibold">After you order</h2>
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map(([title, text], index) => (
            <li key={title} className="flex flex-col gap-2 rounded-xl border border-line p-5">
              <span className="text-xs tracking-widest text-muted">{String(index + 1).padStart(2, "0")}</span>
              <p className="font-semibold">{title}</p>
              <p className="text-sm text-muted">{text}</p>
            </li>
          ))}
        </ol>
      </Container>

      <ContactCta />
    </>
  );
}
