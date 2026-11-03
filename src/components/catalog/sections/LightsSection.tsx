import Link from "next/link";
import { catalogSectionRoute, productRoute } from "@/enums/route.enum";
import { getCategoryProducts } from "@/api/catalog";
import { ButtonLink, Placeholder } from "@/components/ui";
import { ContentSection, InfoCard } from "@/components/sections/ContentSection";
import { PageHeading } from "@/components/sections/PageHeading";

const LIGHT_SPECS = [
  ["Colour temperature", "Neutral white, about 5,000 to 6,500 K"],
  ["Intensity", "About 10,000 to 20,000 lux at 35 cm suits most dental work"],
  ["Mounting", "Connect system slides on and can be locked in place"],
];

const BATTERY_GUIDE = [
  {
    title: "Safe charging",
    points: [
      "Use only original, undamaged batteries and approved chargers.",
      "Charge under supervision, in a room with a smoke alarm.",
      "Keep the charger away from flammable materials.",
    ],
  },
  {
    title: "Caution",
    points: [
      "Do not modify or repair the light yourself.",
      "Do not look directly into the light.",
      "Do not short circuit the battery.",
    ],
  },
  {
    title: "Battery care",
    points: ["Keep the charge above 30%.", "A battery lasts about 500 charges."],
  },
  {
    title: "Cleaning and disinfection",
    points: [
      "Wipe with a soft cloth and keep the jacks clean.",
      "The light is not waterproof, wipe off splashes right away.",
      "Use alcohol free products only. No ultrasonic cleaners, autoclaves or UV.",
    ],
  },
];

export const LightsSection = async () => {
  const lights = await getCategoryProducts("lights");

  return (
    <>
      <PageHeading
        eyebrow="Products"
        title="ExamVision Lights"
        actions={
          <>
            <ButtonLink href="#range">View light range</ButtonLink>
            <ButtonLink href={`${catalogSectionRoute("accessories")}#lights`} variant="outline">
              Light accessories
            </ButtonLink>
          </>
        }
      >
        Add bright, white, shadow free light exactly in your field of view. Slim and light LEDs with a focused spot.
      </PageHeading>

      <ContentSection id="range" title="Light range">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {lights.map((light) => (
            <Link
              key={light.slug}
              href={productRoute("lights", light.slug)}
              className="overflow-hidden rounded-xl border border-line"
            >
              <Placeholder className="aspect-4/3">Photo</Placeholder>
              <div className="p-4">
                <p className="font-semibold">{light.name}</p>
                <p className="mt-1 text-sm text-muted">{light.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </ContentSection>

      <ContentSection
        title="Illumination exactly where you want it"
        intro="The light should match your loupes. During the fitting we help you choose the light and mount it at the right angle."
      >
        <dl className="grid gap-3 sm:grid-cols-3">
          {LIGHT_SPECS.map(([label, value]) => (
            <div key={label} className="rounded-xl bg-soft p-5">
              <dt className="text-xs tracking-wider text-muted uppercase">{label}</dt>
              <dd className="mt-2 font-semibold">{value}</dd>
            </div>
          ))}
        </dl>
      </ContentSection>

      <ContentSection
        title="Battery safety, use and maintenance"
        intro="ExamVision lights use lithium ion batteries. Follow these rules to keep them safe and long lasting."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {BATTERY_GUIDE.map((group) => (
            <InfoCard key={group.title} title={group.title}>
              <ul className="flex list-disc flex-col gap-1 pl-4">
                {group.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </InfoCard>
          ))}
        </div>
      </ContentSection>
    </>
  );
};
