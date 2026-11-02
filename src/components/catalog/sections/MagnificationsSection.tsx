import Link from "next/link";
import RouteEnum, { productRoute } from "@/enums/route.enum";
import { LOUPE_MODELS } from "@/constants/catalog";
import { ButtonLink, Chip } from "@/components/ui";
import { ContentSection, InfoCard } from "@/components/sections/ContentSection";
import { PageHeading } from "@/components/sections/PageHeading";

const GALILEAN_TABLE = [
  ["2.3x", "Galilean HD", "12 cm", "28 cm", "Everyday use, easy to get used to"],
  ["2.5x", "Galilean Essential", "11 cm", "25 cm", "Entry level diagnostics"],
  ["2.8x", "Galilean HD", "10.5 cm", "20 cm", "General and some special treatments"],
  ["3.0x", "Galilean Essential", "8.3 cm", "15 cm", "Diagnostics and some special treatments"],
  ["3.3x", "Galilean HD", "8 cm", "15 cm", "Demanding diagnostics, LED light recommended"],
  ["3.8x", "Galilean HD", "6.5 cm", "10 cm", "High precision, Total light recommended"],
];

const KEPLER_TABLE = [
  ["3.4x", "Kepler Kompakt", "9.5 cm", "11.5 cm"],
  ["4.0x", "Kepler Advanced", "6.5 cm", "8 cm"],
  ["4.0x", "Kepler Reflekt", "7.6 cm", "13 cm"],
  ["5.0x", "Kepler Kompakt", "6.2 cm", "8 cm"],
  ["5.0x", "Kepler Advanced", "6 cm", "7 cm"],
  ["6.0x", "Kepler Reflekt", "5.6 cm", "8 cm"],
  ["6.0x", "Kepler Advanced", "5.5 cm", "6 cm"],
  ["7.0x", "Kepler Advanced", "5 cm", "5 cm"],
  ["7.6x", "Kepler Kompakt", "4.3 cm", "4.3 cm"],
];

const LENS_SYSTEMS = [
  {
    title: "Galilean",
    text: "Small and light with a bright image that works without extra light. More freedom of movement and depth of field. Best for first loupes and all day general work.",
  },
  {
    title: "Kepler",
    text: "Stronger magnification with prisms and a sharp image from edge to edge, with Fine Focus on each ocular. Less light passes through, so an LED light is recommended. Best for near microscopic work.",
  },
];

const MagnificationTable = ({ headers, rows }: { headers: string[]; rows: string[][] }) => (
  <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
    <table className="w-full min-w-[560px] text-left text-sm">
      <thead className="text-xs tracking-wider text-muted uppercase">
        <tr className="border-b border-line">
          {headers.map((header) => (
            <th key={header} className="py-3 pr-4 font-normal">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.join()} className="border-b border-line">
            {row.map((cell, index) => (
              <td key={index} className={index === 0 ? "py-3 pr-4 font-semibold" : "py-3 pr-4"}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const MagnificationsSection = () => (
  <>
    <PageHeading
      eyebrow="Products"
      title="ExamVision Magnifications"
      actions={
        <>
          <ButtonLink href="#range">Range of magnification</ButtonLink>
          <ButtonLink href={RouteEnum.BOOKING} variant="outline">
            Try them on
          </ButtonLink>
        </>
      }
    >
      15 magnifications in five loupe systems: Galilean Essential, Galilean HD, Kepler Kompakt, Kepler Reflekt and
      Kepler Advanced.
    </PageHeading>

    <ContentSection title="Why loupes and magnification">
      <div className="grid gap-3 sm:grid-cols-2">
        <InfoCard title="Better vision, better treatment">
          Loupes fitted to you make precise work easier and lead to better results for your patients.
        </InfoCard>
        <InfoCard title="Ergonomics and comfort">
          You work at a safe distance with a straight back, which helps to avoid neck and back pain.
        </InfoCard>
      </div>
    </ContentSection>

    <ContentSection
      id="range"
      title="15 magnifications in five loupe systems"
      intro="Choose the lowest magnification that does the job, a higher one makes the posture harder. Many doctors use a Galilean and a Kepler loupe for different tasks."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {LOUPE_MODELS.map((model) => (
          <Link
            key={model.slug}
            href={productRoute("loupes", model.slug)}
            className="flex flex-col gap-2 rounded-xl border border-line p-4 hover:border-ink"
          >
            <p className="font-semibold">{model.name}</p>
            <div className="flex flex-wrap gap-1">
              {model.magnifications.map((magnification) => (
                <Chip key={magnification}>{magnification}</Chip>
              ))}
            </div>
            <p className="text-xs text-muted">{model.description}</p>
          </Link>
        ))}
      </div>
    </ContentSection>

    <ContentSection title="Two lens systems">
      <div className="grid gap-3 sm:grid-cols-2">
        {LENS_SYSTEMS.map((system) => (
          <InfoCard key={system.title} title={system.title}>
            {system.text}
          </InfoCard>
        ))}
      </div>
    </ContentSection>

    <ContentSection
      title="Galilean lens system"
      intro="Field of view and depth of field at a 45 cm working distance. Real values depend on your distance, prescription and age."
    >
      <MagnificationTable
        headers={["Magnification", "Loupe", "Field of view", "Depth of field", "Best for"]}
        rows={GALILEAN_TABLE}
      />
    </ContentSection>

    <ContentSection title="Kepler lens system" intro="An LED light is recommended for higher magnifications.">
      <MagnificationTable headers={["Magnification", "Loupe", "Field of view", "Depth of field"]} rows={KEPLER_TABLE} />
    </ContentSection>
  </>
);
