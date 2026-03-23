import React from 'react';

import { HeroSection } from '@ui-components/sections/HeroSection';

export interface CTALink {
  text: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
  helper?: string;
  icon?: 'trophy' | 'chart' | 'shield';
}

export interface HeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  highlightWord?: string;
  description: string;
  primaryCTA: CTALink;
  secondaryCTA: CTALink;
  stats: Stat[];
  backgroundImage?: string;
}

export function Hero({
  badge,
  title,
  subtitle,
  highlightWord,
  description,
  primaryCTA,
  secondaryCTA,
  stats,
  backgroundImage,
}: HeroProps): React.ReactElement {
  return (
    <HeroSection
      badge={badge}
      title={title}
      subtitle={subtitle}
      highlightWord={highlightWord}
      description={description}
      primaryCta={{
        label: primaryCTA.text,
        href: primaryCTA.href,
      }}
      secondaryCta={{
        label: secondaryCTA.text,
        href: secondaryCTA.href,
      }}
      stats={stats}
      backgroundImageUrl={backgroundImage}
    />
  );
}
