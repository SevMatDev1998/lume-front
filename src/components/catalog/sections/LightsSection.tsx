import Image from "next/image";
import headingPhoto from "@/assets/lights-heading.jpg";
import batteryPhoto from "@/assets/lights-battery.jpg";
import accessoriesPhoto from "@/assets/lights-accessories.jpg";
import RouteEnum, { catalogSectionRoute } from "@/enums/route.enum";
import {
  BATTERY_CARE,
  BATTERY_CAUTIONS,
  ILLUMINATION_DETAILS,
  ILLUMINATION_INTRO,
  LIGHT_CARD_IMAGES,
  SAFE_CHARGING_TIPS,
} from "@/constants/lights";
import { ModelCard } from "@/components/catalog/ModelCard";
import { getCategoryProducts } from "@/api/catalog";
import { ButtonLink, CircleLink, Container, ReadMore } from "@/components/ui";
import { ContentSection, InfoCard } from "@/components/sections/ContentSection";
import { PageHeading } from "@/components/sections/PageHeading";

export const LightsSection = async () => {
  const lights = await getCategoryProducts("lights");

  return (
    <>
      <PageHeading
        eyebrow="Products"
        title="ExamVision Lights"
        image={headingPhoto}
        imageClassName="max-sm:object-[50%_75%]"
        actions={
          <>
            <ButtonLink href={RouteEnum.BOOKING} variant="light">
              Book a visit
            </ButtonLink>
            <ButtonLink
              href="#range"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-ink"
            >
              View light range
            </ButtonLink>
          </>
        }
      >
        Add bright, white, shadow free light exactly in your field of view. Slim
        and light LEDs with a focused spot.
      </PageHeading>

      <ContentSection id="range" title="Light range">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {lights.map((light) => {
            const cardImage = LIGHT_CARD_IMAGES[light.slug];
            return (
              <ModelCard
                key={light.slug}
                product={
                  cardImage
                    ? { ...light, images: [cardImage, ...light.images] }
                    : light
                }
              />
            );
          })}
        </div>
      </ContentSection>

      <section className="bg-[#f6f6f6]">
        <Container className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[56fr_44fr] lg:gap-0">
          <div className="relative aspect-4/3">
            <Image
              src={batteryPhoto}
              alt="ExamVision Total LED with its battery on a dental tray"
              fill
              unoptimized
              sizes="(min-width: 1280px) 700px, (min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex max-w-md flex-col lg:pl-20 xl:max-w-none xl:pl-32">
            <h2 className="mb-8 text-4xl font-light tracking-tight xl:text-5xl">
              Battery Safety, Use & Maintenance
            </h2>
            <div className="flex flex-col gap-3 text-lg leading-relaxed font-light text-muted">
              <p>
                A lithium-ion battery, or Li-ion battery, is a special type of
                rechargeable battery. Li-ion batteries are characterized by
                higher specific energy, energy density, and energy efficiency
                and a longer cycle life and overall lifespan than other types of
                rechargeable batteries.
              </p>
              <p>
                Please read the information below to ensure best safety, use and
                care of your batteries.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ContentSection
        title="Safe Charging of Batteries"
        intro={
          <>
            <p>
              All light products from ExamVision will be accompanied (in
              packaging/case) by a paper insert emphasising the importance of
              not charging or using batteries that are damaged or faulty.
            </p>
            <p className="mt-2">
              To minimise the risk of fire and injury when charging batteries,
              please follow these important safety tips:
            </p>
          </>
        }
      >
        <div className="flex flex-col gap-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SAFE_CHARGING_TIPS.map((tip) => (
              <InfoCard key={tip.title} title={tip.title}>
                {tip.text}
              </InfoCard>
            ))}
          </div>
          <p className="max-w-2xl text-muted">
            By following these general guidelines, you can reduce the risk of
            fire and ensure safer charging of your batteries. For further safety
            instructions continue below.
          </p>
          <ReadMore>
            <div className="grid gap-8 pt-2 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold">Caution!</h3>
                <ul className="flex list-disc flex-col gap-2 pl-4 text-muted">
                  {BATTERY_CAUTIONS.map((caution) => (
                    <li key={caution}>{caution}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-5">
                {BATTERY_CARE.map((item) => (
                  <div key={item.title} className="flex flex-col gap-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-muted">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </ReadMore>
        </div>
      </ContentSection>

      <ContentSection
        title="Illumination Exactly Where You Want It"
        intro="ExamVision specialises in optical solutions and offers a wide range of dental and surgical headlights to supplement your magnifying loupe. A loupe light will add precision and improved vision to your daily work routine."
      >
        <div className="flex max-w-3xl flex-col gap-4">
          <h3 className="text-xl font-semibold">Light is Not Just Light</h3>
          {ILLUMINATION_INTRO.map((paragraph) => (
            <p key={paragraph} className="text-muted">
              {paragraph}
            </p>
          ))}
          <ReadMore>
            <div className="flex flex-col gap-6 pt-2">
              {ILLUMINATION_DETAILS.map((detail) => (
                <div key={detail.title} className="flex flex-col gap-2">
                  <h3 className="font-semibold">{detail.title}</h3>
                  {detail.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </ReadMore>
        </div>
      </ContentSection>

      <section className="bg-[#f6f6f6]">
        <Container className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[56fr_44fr] lg:gap-0">
          <div className="relative aspect-4/3">
            <Image
              src={accessoriesPhoto}
              alt="ExamVision loupes with LED light and a Visionshield"
              fill
              unoptimized
              sizes="(min-width: 1280px) 700px, (min-width: 1024px) 55vw, 100vw"
              className="object-cover object-[50%_30%]"
            />
          </div>
          <div className="flex max-w-md flex-col lg:pl-20 xl:max-w-none xl:pl-32">
            <h2 className="mb-8 text-4xl font-light tracking-tight xl:text-5xl">
              Light Accessories
            </h2>
            <p className="text-lg leading-relaxed font-light text-muted">
              ExamVision provides a range of products which complement and
              complete your loupes. Our specialists in optics and ergonomics
              ensure a solution tailored entirely to you.
            </p>
            <CircleLink
              href={`${catalogSectionRoute("accessories")}#lights`}
              className="mt-12"
            >
              Accessories
            </CircleLink>
          </div>
        </Container>
      </section>
    </>
  );
};
