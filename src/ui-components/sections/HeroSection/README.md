# HeroSection Component

A fully responsive, accessible hero section component with background image, CTAs, and statistics.

## Features

✅ **Badge/Pill** - Optional certification or announcement badge  
✅ **H1 Title** - Main headline with optional highlighted word  
✅ **Subtitle** - Optional supporting text  
✅ **Description** - Engaging description paragraph  
✅ **Dual CTAs** - Primary and secondary call-to-action buttons  
✅ **Statistics** - Display key metrics/achievements  
✅ **Background Image** - Full-screen background with dark overlay  
✅ **Responsive** - Mobile-first, fully responsive design  
✅ **Accessible** - WCAG 2.1 AA compliant

## Usage

### Basic Example

```typescript
import { HeroSection } from '@ui-components/sections/HeroSection';

function HomePage() {
  return (
    <HeroSection
      badge="Certificações e Reconhecimento"
      title="Engenharia Clínica de Excelência"
      highlightWord="Excelência"
      subtitle="Soluções Completas para Gestão Hospitalar"
      description="Oferecemos um portfólio integrado de serviços para garantir a segurança e eficiência de equipamentos médicos."
      primaryCta={{
        label: 'Fale com Especialista',
        href: '#contato',
      }}
      secondaryCta={{
        label: 'Conheça os Serviços',
        href: '#servicos',
      }}
      stats={[
        { value: '25+', label: 'Anos de Experiência' },
        { value: '500+', label: 'Projetos Concluídos' },
        { value: '100%', label: 'Conformidade ANVISA' },
      ]}
      backgroundImageUrl="/images/hero-background.jpg"
    />
  );
}
```

### Without Optional Props

```typescript
<HeroSection
  // No badge
  title="Engenharia Clínica"
  // No highlightWord
  // No subtitle
  description="Soluções completas para gestão hospitalar."
  primaryCta={{ label: 'Contato', href: '#contato' }}
  secondaryCta={{ label: 'Saiba Mais', href: '#sobre' }}
  stats={[
    { value: '25+', label: 'Anos' },
  ]}
  // No backgroundImageUrl - will use dark gradient background
/>
```

### With Stat Helper Text

```typescript
stats={[
  {
    value: '25+',
    label: 'Anos de Experiência',
    helper: 'Desde 1999'
  },
  {
    value: '500+',
    label: 'Projetos Concluídos',
    helper: 'Em todo Brasil'
  },
]}
```

## Props

### `HeroSectionProps`

| Prop                 | Type        | Required | Description                              |
| -------------------- | ----------- | -------- | ---------------------------------------- |
| `badge`              | `string`    | No       | Badge/pill text above title              |
| `title`              | `string`    | Yes      | Main H1 title                            |
| `highlightWord`      | `string`    | No       | Word to highlight in title with gradient |
| `subtitle`           | `string`    | No       | Subtitle text below title                |
| `description`        | `string`    | Yes      | Description paragraph                    |
| `primaryCta`         | `CTAButton` | Yes      | Primary call-to-action button            |
| `secondaryCta`       | `CTAButton` | Yes      | Secondary call-to-action button          |
| `stats`              | `Stat[]`    | Yes      | Array of statistics to display           |
| `backgroundImageUrl` | `string`    | No       | Background image URL (optional)          |

### `CTAButton`

| Property | Type     | Required | Description             |
| -------- | -------- | -------- | ----------------------- |
| `label`  | `string` | Yes      | Button text             |
| `href`   | `string` | Yes      | Button link destination |

### `Stat`

| Property | Type     | Required | Description                   |
| -------- | -------- | -------- | ----------------------------- |
| `value`  | `string` | Yes      | Statistic value (e.g., "25+") |
| `label`  | `string` | Yes      | Statistic label               |
| `helper` | `string` | No       | Optional helper/subtitle text |

## Design System

Based on **Praxis Design System**:

### Colors

- **Primary 700**: #1E3A8A (dark blue)
- **Primary 600**: #1E40AF (medium blue)
- **Primary 50**: #EFF6FF (light blue)
- **Gray 900**: #121826 (almost black)
- **White**: #FFFFFF

### Typography

- **Display/H1**: 48px, Bold 700 (36px on mobile, 32px on small mobile)
- **Body Large**: 20px, Regular 400 (18px on mobile)
- **Font Family**: Inter

### Spacing

Following the 4px grid system:

- 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 64px, 96px

### Border Radius

- **Full**: 9999px (badge/pill)
- **Medium**: 8px (buttons)
- **Large**: 16px

## Accessibility

### Keyboard Navigation

- **Tab** - Navigate through CTA buttons
- **Enter/Space** - Activate CTA links

### Screen Readers

- Single H1 on page (semantic heading structure)
- `role="status"` on badge for announcements
- `aria-label` on all CTA links
- Semantic HTML (`<section>`, `<h1>`, `<a>`)

### ARIA Support

- Badge has `role="status"` for status announcements
- CTAs are proper `<a>` links (not buttons styled as links)
- Proper heading hierarchy

### Responsive Behavior

#### Desktop (≥1280px)

- Max content width: 900px
- 3-column stats grid
- Horizontal CTA layout
- Title: 48px

#### Tablet (768px - 1023px)

- 3-column stats grid (smaller gaps)
- Horizontal CTA layout
- Title: 48px

#### Mobile (<768px)

- Single column stats
- Stacked CTAs (full width)
- Title: 36px (32px on very small screens)
- Increased padding/spacing

## Visual Examples

### Background Overlay

The component applies a dark gradient overlay over the background image:

```scss
background: linear-gradient(135deg, rgba(18, 24, 38, 0.95) 0%, rgba(30, 58, 138, 0.85) 100%);
```

This ensures text readability on any background image.

### Highlighted Word

The `highlightWord` prop creates a gradient text effect:

```scss
background: linear-gradient(135deg, #1e40af 0%, #eff6ff 100%);
background-clip: text;
-webkit-text-fill-color: transparent;
```

### CTAs

- **Primary**: Solid blue background with shadow and lift effect on hover
- **Secondary**: Transparent with white border and subtle fill on hover

## Testing

Run tests:

```bash
npm test -- HeroSection.test.tsx
```

The component includes comprehensive tests for:

- ✅ Rendering all elements (20 tests)
- ✅ Badge visibility
- ✅ Title with/without highlight
- ✅ Subtitle conditional rendering
- ✅ CTA links and attributes
- ✅ Stats display (including helper text)
- ✅ Background image application
- ✅ Accessibility (H1, ARIA, landmarks)
- ✅ Edge cases (empty stats, invalid highlight)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Minimal re-renders (functional component with no internal state)
- CSS modules for scoped styling
- Optimized background images (use next-gen formats like WebP)
- Lazy-load background images for better LCP

### Optimization Tips

```typescript
// Use optimized images
backgroundImageUrl="/images/hero-bg.webp"

// Or use picture element for art direction
<picture>
  <source media="(max-width: 768px)" srcset="hero-mobile.webp" />
  <source media="(min-width: 769px)" srcset="hero-desktop.webp" />
</picture>
```

## Examples

### Minimal Hero

```typescript
<HeroSection
  title="Welcome to Praxis"
  description="Your trusted partner in clinical engineering."
  primaryCta={{ label: 'Get Started', href: '/start' }}
  secondaryCta={{ label: 'Learn More', href: '/about' }}
  stats={[]}
/>
```

### Full-Featured Hero

```typescript
<HeroSection
  badge="ISO 9001 Certified"
  title="Engenharia Clínica de Excelência"
  highlightWord="Excelência"
  subtitle="Soluções Completas"
  description="Full-service clinical engineering solutions."
  primaryCta={{ label: 'Contact', href: '#contact' }}
  secondaryCta={{ label: 'Services', href: '#services' }}
  stats={[
    { value: '25+', label: 'Years', helper: 'Since 1999' },
    { value: '500+', label: 'Projects', helper: 'Nationwide' },
    { value: '100%', label: 'Compliance', helper: 'ANVISA Certified' },
  ]}
  backgroundImageUrl="/images/hospital-bg.jpg"
/>
```

## Related Components

- **Header** - Navigation header (layout component)
- **Footer** - Site footer (section component)
- **ServicesSection** - Services showcase

## Architecture

Following the project's architecture principles:

- ✅ **Presentational component** - No business logic
- ✅ **Props-driven** - All data via props
- ✅ **Reusable** - Can be used on any page
- ✅ **Testable** - 90%+ test coverage
- ✅ **Accessible** - WCAG 2.1 AA compliant

Location: `src/ui-components/sections/HeroSection/`

This is in the **sections** folder because it's a page section component designed for above-the-fold hero areas.

## Future Enhancements

Potential improvements:

- [ ] Video background support
- [ ] Animated stats counter (count-up effect)
- [ ] Parallax scrolling effect
- [ ] Multiple background images (carousel)
- [ ] Custom icon support for stats
- [ ] Animation on scroll (fade-in effects)
- [ ] A/B testing variants

## License

Private - Praxis Engenharia Clínica
