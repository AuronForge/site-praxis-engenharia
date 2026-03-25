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
  primaryCTA?: CTALink;
  secondaryCTA?: CTALink;
  stats?: Stat[];
  backgroundImage?: string;
  variant?: 'full' | 'compact';
  scrollIndicator?: {
    label: string;
    href: string;
  };
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
  variant,
  scrollIndicator,
}: HeroProps): React.ReactElement {
  // Auto-detect compact variant if no CTAs and stats
  const effectiveVariant = variant ?? (!primaryCTA && !secondaryCTA && !stats ? 'compact' : 'full');

  return (
    <HeroSection
      badge={badge}
      title={title}
      subtitle={subtitle}
      highlightWord={highlightWord}
      description={description}
      primaryCta={
        primaryCTA
          ? {
              label: primaryCTA.text,
              href: primaryCTA.href,
            }
          : undefined
      }
      secondaryCta={
        secondaryCTA
          ? {
              label: secondaryCTA.text,
              href: secondaryCTA.href,
            }
          : undefined
      }
      stats={stats}
      singleLineStatLabels={Boolean(scrollIndicator)}
      backgroundImageUrl={backgroundImage}
      variant={effectiveVariant}
      scrollIndicator={scrollIndicator}
    />
  );
}
