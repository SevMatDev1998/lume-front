import { Button, ButtonLink, Placeholder } from "@/components/ui";
import { ContentSection, InfoCard } from "@/components/sections/ContentSection";
import { PageHeading } from "@/components/sections/PageHeading";

const BUILT_IN = [
  ["Eye protection", "Coatings that filter harmful light are built into the lenses."],
  ["Smudge resistance", "Lenses repel dust, grease and fingerprints."],
  ["No reflections", "Anti reflective optics give a clear, bright image."],
  ["Any prescription", "Loupe and carrier lenses take any prescription, and can be updated later."],
];

const LENS_TYPES = [
  [
    "Monofocal lenses",
    "Correct one distance. Good for most users under 40. Later a near or intermediate correction may be needed.",
  ],
  [
    "Multifocal lenses",
    "Several powers in one lens without visible lines. They replace bifocals and are easy to get used to.",
  ],
];

const COATINGS = [
  ["Hi-index lenses", "Thinner and lighter than standard lenses. Standard in all loupes."],
  [
    "VLP coating",
    "Vision and Lens Protection: scratch resistant, anti reflective, filters 99% of UV and repels dust. Standard on all lenses.",
  ],
];

const BLP_RISKS = [
  "Long hours under LED light above 4,500 K",
  "Age over 45",
  "Family history of AMD",
  "Early signs of AMD",
];

export const OpticsSafetySection = () => (
  <>
    <PageHeading
      eyebrow="Products"
      title="Top quality optics and specialist advice"
      actions={
        <>
          <ButtonLink href="#optical-solutions">Optical solutions</ButtonLink>
          <ButtonLink href="#coatings" variant="outline">
            Coatings and filters
          </ButtonLink>
        </>
      }
    >
      Loupes fitted to you improve both your vision and your posture.
    </PageHeading>

    <section className="border-t border-line">
      <div className="grid items-center lg:grid-cols-2">
        <Placeholder className="aspect-video lg:aspect-auto lg:h-full lg:min-h-96">Optometrist photo</Placeholder>
        <div className="flex flex-col gap-4 px-4 py-10 sm:px-10 lg:px-16">
          <h2 className="text-3xl font-semibold">Optical specialists</h2>
          <p className="max-w-md text-muted">
            We take your measurements at your workplace. Danish optometrists make every loupe to measure, and each one
            passes quality control before it is shipped.
          </p>
        </div>
      </div>
    </section>

    <ContentSection
      title="The most customisable loupes on the market"
      intro="Together we choose the oculars and carrier lenses that fit your eyes and your work."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {BUILT_IN.map(([title, text]) => (
          <InfoCard key={title} title={title}>
            {text}
          </InfoCard>
        ))}
      </div>
    </ContentSection>

    <ContentSection id="optical-solutions" title="Optical solutions" intro="Carrier lenses are fully made for you.">
      <div className="grid gap-3 sm:grid-cols-2">
        {LENS_TYPES.map(([title, text]) => (
          <InfoCard key={title} title={title}>
            {text}
          </InfoCard>
        ))}
      </div>
    </ContentSection>

    <ContentSection
      id="coatings"
      title="Protective coatings and filters"
      intro="Coatings built into the lenses make the loupe lighter, more scratch resistant and brighter."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {COATINGS.map(([title, text]) => (
          <InfoCard key={title} title={title}>
            {text}
          </InfoCard>
        ))}
      </div>
    </ContentSection>

    <ContentSection
      title="Extra protection against blue violet light"
      intro="Blue violet light between 400 and 455 nm passes the VLP coating and can contribute to cataract and AMD."
    >
      <div className="grid gap-3 lg:grid-cols-2">
        <InfoCard title="BlueLight Protection (BLP)">
          Optional for ocular and carrier lenses. About three times more effective against UV and blue violet light than
          standard prescription lenses. It does not replace a filter for UV curing lights.
        </InfoCard>
        <InfoCard title="Recommended if you have">
          <ul className="flex list-disc flex-col gap-1 pl-4">
            {BLP_RISKS.map((risk) => (
              <li key={risk}>{risk}</li>
            ))}
          </ul>
        </InfoCard>
      </div>
    </ContentSection>

    <ContentSection title="Downloads">
      <Button variant="outline">Corporate Brochure Dental (PDF)</Button>
    </ContentSection>
  </>
);
