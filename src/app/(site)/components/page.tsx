import type { Metadata } from "next";
import { Geist, Montserrat, Noto_Sans, Noto_Sans_Armenian } from "next/font/google";
import { ReactNode } from "react";
import RouteEnum from "@/enums/route.enum";
import {
  Badge,
  Button,
  ButtonLink,
  Chip,
  Container,
  Field,
  Input,
  Placeholder,
  Select,
  Textarea,
} from "@/components/ui";
import { ContentSection, InfoCard } from "@/components/sections/ContentSection";
import { OrderButton } from "@/components/product/OrderButton";
import { FontPreview } from "@/components/styleguide/FontPreview";

export const metadata: Metadata = {
  title: "Components",
  robots: { index: false, follow: false },
};

const geist = Geist({ subsets: ["latin", "cyrillic"] });
const notoSans = Noto_Sans({ subsets: ["latin", "cyrillic"] });
const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });
const notoArmenian = Noto_Sans_Armenian({ subsets: ["armenian"] });

const withArmenian = (fontFamily: string) => `${fontFamily}, ${notoArmenian.style.fontFamily}`;

const FONT_OPTIONS = [
  { label: "Inter (now)", fontFamily: "var(--font-sans)" },
  { label: "Geist", fontFamily: withArmenian(geist.style.fontFamily) },
  { label: "Noto Sans", fontFamily: withArmenian(notoSans.style.fontFamily) },
  { label: "Montserrat", fontFamily: withArmenian(montserrat.style.fontFamily) },
];

const SAMPLES = {
  hy: {
    title: "Լուպաներ ատամնաբույժների և վիրաբույժների համար",
    text: "Մենք կօգնենք ընտրել մոդելը և խոշորացումը ձեր աշխատանքի համար։",
  },
  ru: {
    title: "Лупы для стоматологов и хирургов",
    text: "Мы поможем выбрать модель и увеличение для вашей работы.",
  },
  en: {
    title: "Loupes for dentists and surgeons",
    text: "We help you choose the model and magnification for your work.",
  },
};

const TYPE_SCALE = [
  {
    name: "Display",
    className: "text-4xl leading-tight font-semibold tracking-tight sm:text-5xl",
    size: "36 → 48px",
    kind: "title",
  },
  { name: "H1", className: "text-3xl font-semibold tracking-tight sm:text-4xl", size: "30 → 36px", kind: "title" },
  { name: "H2", className: "text-2xl font-semibold tracking-tight sm:text-3xl", size: "24 → 30px", kind: "title" },
  { name: "H3", className: "text-xl font-semibold", size: "20px", kind: "title" },
  { name: "Lead", className: "text-base text-muted", size: "16px", kind: "text" },
  { name: "Body", className: "text-sm", size: "14px", kind: "text" },
  { name: "Caption", className: "text-xs text-muted", size: "12px", kind: "text" },
  { name: "Eyebrow", className: "text-xs tracking-widest text-muted uppercase", size: "12px", kind: "text" },
] as const;

const WEIGHTS = [
  ["font-normal", "400"],
  ["font-medium", "500"],
  ["font-semibold", "600"],
  ["font-bold", "700"],
];

const COLORS = [
  { name: "ink", className: "bg-ink", hex: "#14181f", use: "Text, primary buttons, dark blocks" },
  { name: "muted", className: "bg-muted", hex: "#6b7280", use: "Secondary text" },
  { name: "line", className: "bg-line", hex: "#e5e7eb", use: "Borders and dividers" },
  { name: "soft", className: "bg-soft", hex: "#f4f5f7", use: "Card and block backgrounds" },
  { name: "accent", className: "bg-accent", hex: "#1f4fd8", use: "Accent, not used yet" },
];

const Group = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="flex flex-col gap-3">
    <p className="text-xs tracking-wider text-muted uppercase">{title}</p>
    <div className="flex flex-wrap items-center gap-3">{children}</div>
  </div>
);

export default function ComponentsPage() {
  return (
    <Container className="py-10 sm:py-14">
      <p className="mb-3 text-xs tracking-widest text-muted uppercase">Design system</p>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Components</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Fonts, sizes, colours and UI components of the site. Switch the font to compare it in Armenian, Russian and
        English.
      </p>

      <div className="mt-8">
        <FontPreview options={FONT_OPTIONS}>
          <section className="flex flex-col gap-10">
            <h2 className="text-2xl font-semibold tracking-tight">Languages</h2>
            {Object.entries(SAMPLES).map(([lang, sample]) => (
              <div key={lang} className="grid gap-3 border-b border-line pb-8 lg:grid-cols-[80px_1fr]">
                <span className="text-xs tracking-widest text-muted uppercase">{lang}</span>
                <div className="flex flex-col gap-3">
                  <p className="text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">{sample.title}</p>
                  <p className="text-base text-muted">{sample.text}</p>
                  <div className="flex flex-wrap gap-3">
                    <Button>{sample.title.split(" ")[0]}</Button>
                    <Button variant="outline">{sample.title.split(" ")[0]}</Button>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="mt-14 flex flex-col gap-6">
            <h2 className="text-2xl font-semibold tracking-tight">Type scale</h2>
            {TYPE_SCALE.map((style) => (
              <div key={style.name} className="grid gap-2 border-b border-line pb-6 lg:grid-cols-[200px_1fr]">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold">{style.name}</span>
                  <span className="text-xs text-muted">{style.size}</span>
                  <code className="text-[11px] break-all text-muted">{style.className}</code>
                </div>
                <div className="flex flex-col gap-2">
                  {Object.entries(SAMPLES).map(([lang, sample]) => (
                    <p key={lang} className={style.className}>
                      {style.kind === "title" ? sample.title : sample.text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="mt-14 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tight">Weights</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {WEIGHTS.map(([className, weight]) => (
                <div key={className} className="rounded-xl bg-soft p-5">
                  <p className={`text-2xl ${className}`}>Aa Яя Աա</p>
                  <p className="mt-2 text-xs text-muted">
                    {className} · {weight}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </FontPreview>
      </div>

      <ContentSection title="Colours" className="mt-14">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {COLORS.map((color) => (
            <div key={color.name} className="overflow-hidden rounded-xl border border-line">
              <div className={`h-20 ${color.className}`} />
              <div className="p-3">
                <p className="text-sm font-semibold">{color.name}</p>
                <p className="text-xs text-muted">{color.hex}</p>
                <p className="mt-1 text-xs text-muted">{color.use}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Buttons">
        <div className="flex flex-col gap-6">
          <Group title="Variants">
            <Button>Primary</Button>
            <Button variant="outline">Outline</Button>
            <span className="rounded-xl bg-ink p-3">
              <Button variant="light">Light</Button>
            </span>
            <Button disabled>Disabled</Button>
          </Group>
          <Group title="Sizes">
            <Button size="sm">Small</Button>
            <Button>Medium</Button>
          </Group>
          <Group title="Link and modal">
            <ButtonLink href={RouteEnum.CATALOG}>ButtonLink</ButtonLink>
            <OrderButton productName="Kepler Advanced 5.0x" />
          </Group>
        </div>
      </ContentSection>

      <ContentSection title="Form fields">
        <div className="grid max-w-2xl gap-4 sm:grid-cols-2">
          <Field label="Input">
            <Input placeholder="Placeholder" />
          </Field>
          <Field label="With error" error="This field is required">
            <Input />
          </Field>
          <Field label="Select">
            <Select>
              <option>Dentist</option>
              <option>Student</option>
            </Select>
          </Field>
          <Field label="Disabled">
            <Input disabled value="Disabled" />
          </Field>
          <div className="sm:col-span-2">
            <Field label="Textarea">
              <Textarea placeholder="Comment" />
            </Field>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Badges and chips">
        <Group title="Badge">
          <Badge>● Official ExamVision partner</Badge>
        </Group>
        <div className="mt-6">
          <Group title="Chip">
            {["2.5x", "4.0x", "7.6x"].map((value) => (
              <Chip key={value}>{value}</Chip>
            ))}
          </Group>
        </div>
      </ContentSection>

      <ContentSection title="Cards and placeholders">
        <div className="grid gap-3 sm:grid-cols-3">
          <InfoCard title="InfoCard">Card with a title and short text, used for benefits and specs.</InfoCard>
          <Placeholder className="aspect-video rounded-xl">Placeholder</Placeholder>
          <div className="rounded-xl border border-line p-5 text-sm">Bordered card</div>
        </div>
      </ContentSection>
    </Container>
  );
}
