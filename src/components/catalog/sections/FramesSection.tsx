import RouteEnum from "@/enums/route.enum";
import { ProductImage } from "@/components/product/ProductImage";
import { getCategoryProducts } from "@/api/catalog";
import { optionValues, specValue } from "@/utils/catalog";
import { Button, ButtonLink, Chip } from "@/components/ui";
import { ContentSection } from "@/components/sections/ContentSection";
import { PageHeading } from "@/components/sections/PageHeading";
import { cn } from "@/utils/cn";

const ChipList = ({ label, items }: { label: string; items: string[] }) =>
  items.length > 0 && (
    <div>
      <p className="mb-1.5 text-xs tracking-wider text-muted uppercase">{label}</p>
      <div className="flex flex-wrap gap-1">
        {items.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </div>
    </div>
  );

export const FramesSection = async () => {
  const frames = await getCategoryProducts("frames");

  return (
    <>
      <PageHeading
        eyebrow="Products"
        title="ExamVision Frames"
        actions={
          <>
            <ButtonLink href={RouteEnum.CONFIGURATOR}>Design your own loupe</ButtonLink>
            <ButtonLink href={RouteEnum.BOOKING} variant="outline">
              Try them on
            </ButtonLink>
          </>
        }
      >
        The frame matters as much as the magnification. Choose the shape, colour and size that fit you.
      </PageHeading>

      {frames.map((frame, index) => (
        <section key={frame.slug} id={frame.slug} className="scroll-mt-16 border-t border-line">
          <div className="grid items-center lg:grid-cols-2">
            <ProductImage
              src={frame.images[0]}
              alt={frame.name}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={cn("aspect-video lg:aspect-auto lg:h-full lg:min-h-[28rem]", index % 2 && "lg:order-2")}
            />
            <div className="flex flex-col gap-4 px-4 py-10 sm:px-10 lg:px-16">
              <span className="text-xs tracking-widest text-muted">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="text-3xl font-semibold">{frame.name}</h2>
              <p className="max-w-md text-muted">{frame.description}</p>
              <p className="text-sm">
                {[specValue(frame, "Material"), specValue(frame, "Weight")].filter(Boolean).join(" · ")}
              </p>
              <ChipList label="Colours" items={optionValues(frame, "COLOR")} />
              <ChipList label="Temple tips" items={optionValues(frame, "TEMPLE_TIP")} />
              <ChipList label="Sizes" items={optionValues(frame, "SIZE")} />
              <ChipList label="Fits loupes" items={specValue(frame, "Fits loupes")?.split(", ") ?? []} />
            </div>
          </div>
        </section>
      ))}

      <ContentSection title="Downloads">
        <Button variant="outline">Corporate Brochure Dental (PDF)</Button>
      </ContentSection>
    </>
  );
};
