import { FittingCta } from "@/components/sections/FittingCta";
import { FeatureBlock } from "@/components/sections/FeatureBlock";
import { ShowcaseStats } from "@/components/sections/ShowcaseStats";
import { LightPage } from "@/types";

type LightShowcaseProps = { name: string; page: LightPage };

export const LightShowcase = ({ name, page }: LightShowcaseProps) => (
  <>
    <div className="theme-dark">
      <ShowcaseStats stats={page.stats} />
      {page.features.map((feature, index) => (
        <FeatureBlock
          key={feature.title}
          {...feature}
          alt={`${name}, ${feature.title}`}
          flipped={index % 2 === 1}
        />
      ))}
    </div>
    <FittingCta />
  </>
);
