import React from 'react';

import { HeroSection } from '@ui-components/sections/HeroSection';

export interface CTALink {
  text: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: CTALink;
  secondaryCTA: CTALink;
  stats: Stat[];
  backgroundImage?: string;
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  stats,
  backgroundImage,
}: HeroProps): React.ReactElement {
  return (
    <HeroSection
      title={title}
      subtitle={subtitle}
      description={description}
      primaryCta={{
        label: primaryCTA.text,
        href: primaryCTA.href,
      }}
      secondaryCta={{
        label: secondaryCTA.text,
        href: secondaryCTA.href,
      }}
      stats={stats.map((stat) => ({ label: stat.label, value: stat.value }))}
      backgroundImageUrl={backgroundImage}
    />
  );
}
