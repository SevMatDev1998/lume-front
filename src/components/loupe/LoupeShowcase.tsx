import Image from "next/image";
import { Container } from "@/components/ui";
import { FittingCta } from "@/components/sections/FittingCta";
import { FeatureBlock } from "@/components/sections/FeatureBlock";
import { ShowcaseStats } from "@/components/sections/ShowcaseStats";
import { FITTING_STEPS } from "@/constants/loupes";
import { LoupePage } from "@/types";
import { cn } from "@/utils/cn";
import { LoupeDetails } from "./LoupeDetails";
import { MagnificationViewer } from "./MagnificationViewer";

type LoupeShowcaseProps = { name: string; page: LoupePage };

export const LoupeShowcase = ({ name, page }: LoupeShowcaseProps) => {
  const spotOffsets = page.details.map((_, index) =>
    page.details
      .slice(0, index)
      .reduce((count, group) => count + group.spots.length, 1),
  );

  return (
    <>
      <div className="theme-dark">
        <ShowcaseStats stats={page.stats} />

        <section className="border-b border-line">
          <Container className="flex flex-col gap-18 py-16 sm:py-22">
            <div>
              <p className="text-xs tracking-widest text-muted uppercase">
                Details
              </p>
              <h2 className="mt-2 text-4xl font-light tracking-tight sm:text-[2.75rem]">
                Built for long, precise work
              </h2>
            </div>
            {page.details.map((group, index) => (
              <LoupeDetails
                key={group.spots[0].title}
                {...group}
                name={name}
                startNumber={spotOffsets[index]}
                flipped={index % 2 === 1}
              />
            ))}
          </Container>
        </section>

        <section className="bg-soft">
          <Container className="py-16 sm:py-22">
            <MagnificationViewer
              image={page.details[0].image}
              magnifications={page.magnifications}
              viewer={page.viewer}
            />
          </Container>
        </section>

        {page.light && (
          <FeatureBlock
            {...page.light}
            title="Light where you need it"
            alt={`${name} with an LED light`}
            imageClassName="object-[50%_35%]"
          />
        )}

        <section className="border-b border-line">
          <Container className="flex flex-col gap-10 py-16 sm:py-22">
            <div className="mx-auto flex max-w-2xl flex-col gap-3 text-center">
              <h2 className="text-4xl font-light tracking-tight sm:text-[2.75rem]">
                The Perfect Combination of Precision and Elegance
              </h2>
              <p className="text-lg font-light text-muted">
                Your patients see your loupes every day, so choose a frame that
                feels like you. Each one is balanced for {name}, light enough to
                forget after the first patient.
              </p>
            </div>
            <div
              className={cn(
                "grid gap-6",
                page.frames.length % 2 ? "sm:grid-cols-3" : "sm:grid-cols-2",
              )}
            >
              {page.frames.map((frame) => (
                <div
                  key={frame.name}
                  className="relative aspect-3/2 overflow-hidden rounded-xl bg-soft"
                >
                  <Image
                    src={frame.image}
                    alt={`${name}, ${frame.name}`}
                    fill
                    unoptimized
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section>
          <Container className="flex flex-col gap-8 py-16 sm:py-22">
            <h2 className="text-4xl font-light tracking-tight sm:text-[2.75rem]">
              From fitting to first patient
            </h2>
            <ol className="grid gap-4 sm:grid-cols-5">
              {FITTING_STEPS.map((step, index) => (
                <li key={step.title} className="border-t-2 border-ink pt-4">
                  <p className="text-[13px] text-muted">Step {index + 1}</p>
                  <p className="mt-1 mb-1.5 text-[17px] font-medium">
                    {step.title}
                  </p>
                  <p className="text-sm text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      </div>

      <FittingCta />
    </>
  );
};
