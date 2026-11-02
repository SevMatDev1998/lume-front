import { ButtonLink, Placeholder } from "@/components/ui";
import { ContentSection } from "@/components/sections/ContentSection";
import { PageHeading } from "@/components/sections/PageHeading";

const LOUPE_ACCESSORIES = [
  [
    "Visionshield MAX",
    "Full face visor in XXL. Flexible, does not splinter, can be cleaned and reused. Fits any ExamVision loupe.",
  ],
  [
    "Visionshield L & XL",
    "Full face visor against splashes. L fits Galilean, XL fits Kepler loupes. Has a cutout for the light.",
  ],
  ["Sideshields", "Almost invisible side protection against splashes. Disposable, three pairs in a pack."],
  ["Cleaning solution", "With a microfibre cloth it removes dirt, dust and grease from the lenses."],
  ["Temple tip extender", "Keeps the loupes in place so they do not slide."],
  ["Coloured temple tips", "Latex free, anti allergy tips in many colours."],
  ["Neck cord", "Extra security. Free with every ExamVision loupe."],
  ["Nose pads", "Latex free clear silicone."],
  ["Jewels", "A diamond, ruby or sapphire for the Icon frame, handmade by a Danish jeweller."],
  ["Loupe case", "For work and travel, for the loupe only or the loupe with the light."],
];

const LIGHT_ACCESSORIES = [
  [
    "PowerGo control unit",
    "Touch the front with a hand or forearm to switch between low, medium and high. 155 g, 8+ hours on high.",
  ],
  [
    "Focus Xtend control unit",
    "Hands free control for a sterile workflow. Up to 24 hours on low, about 6 hours on high.",
  ],
  ["Curing filter", "Magnetic flip filter with dichroic glass that blocks UV and near UV light."],
  [
    "LED Connect system",
    "Slide on mount that can be locked. The coaxial version allows steeper angles and less shadow.",
  ],
  ["Cable clips and adapters", "Hold the cable on the temples and on your clothes."],
  ["Belt clip", "Clip with a ratchet that rotates."],
];

const AccessoryGrid = ({ items }: { items: string[][] }) => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {items.map(([title, text]) => (
      <article key={title} className="overflow-hidden rounded-xl border border-line">
        <Placeholder className="aspect-video">Photo</Placeholder>
        <div className="p-4">
          <h3 className="font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-muted">{text}</p>
        </div>
      </article>
    ))}
  </div>
);

export const AccessoriesSection = () => (
  <>
    <PageHeading
      eyebrow="Products"
      title="ExamVision Accessories"
      actions={
        <>
          <ButtonLink href="#loupes">Loupe accessories</ButtonLink>
          <ButtonLink href="#lights" variant="outline">
            Light accessories
          </ButtonLink>
        </>
      }
    >
      Protection, comfort and style for your loupes and lights.
    </PageHeading>

    <ContentSection id="loupes" title="Loupe accessories">
      <AccessoryGrid items={LOUPE_ACCESSORIES} />
    </ContentSection>

    <ContentSection id="lights" title="Light accessories">
      <AccessoryGrid items={LIGHT_ACCESSORIES} />
    </ContentSection>
  </>
);
