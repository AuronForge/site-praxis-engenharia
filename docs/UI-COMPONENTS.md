# UI Components - Sections

This folder contains **presentational section components** used to compose page layouts.

## Architecture

Following our architecture principles:

- ✅ **Presentational only** - No business logic, no API calls
- ✅ **Props-driven** - All data passed via props
- ✅ **Reusable** - Can be used across different pages
- ✅ **Typed** - Full TypeScript with exported interfaces
- ✅ **Testable** - Easy to test with mock data

## Sections

### 1. Header (`Header/`)

Top navigation bar with logo, menu items, and CTA button.

**Props:**

- `logo` - Logo image and alt text
- `navigation` - Array of navigation items
- `ctaButton` - Call-to-action button config

### 2. Hero (`Hero/`)

Above-the-fold hero section with headline, CTAs, and stats.

**Props:**

- `title`, `subtitle` - Main headline (subtitle can be colored differently)
- `description` - Hero description text
- `primaryCTA`, `secondaryCTA` - Call-to-action buttons
- `stats` - Array of metric stats
- `backgroundImage` - Hero background image path

### 3. ServicesSection (`ServicesSection/`)

Services overview with 3 cards and CTA banner.

**Props:**

- `title`, `subtitle`, `description` - Section header
- `services` - Array of service objects (icon, title, description, features, link)
- `ctaBanner` - Bottom banner with CTA

### 4. ExperienceSection (`ExperienceSection/`)

Company experience showcase with features and image collage.

**Props:**

- `badge`, `title`, `subtitle`, `description` - Text content
- `features` - Array of feature bullets
- `images` - Array of images for collage
- `stats` - Mini stats row

### 5. PlatformSection (`PlatformSection/`)

Dark-themed platform features section.

**Props:**

- `title`, `description` - Section header
- `features` - Array of 6 platform features

### 6. SegmentsSection (`SegmentsSection/`)

Market segments with metric cards.

**Props:**

- `title`, `description` - Section header
- `segments` - Array of segment objects (icon, value, label, description)

### 7. TestimonialsSection (`TestimonialsSection/`)

Client testimonials and logos.

**Props:**

- `title` - Section title
- `testimonials` - Array of testimonial objects
- `clientLogos` - Array of client logo images

### 8. Footer (`Footer/`)

Site footer with links and contact info.

**Props:**

- `logo`, `description` - Company info
- `sections` - Footer link columns
- `social` - Social media links
- `copyright`, `legalLinks` - Bottom bar content

## Usage

### In a Page Component

```typescript
import { Hero, ServicesSection } from '@ui-components/sections';

export function MyPage() {
  const heroData = {
    title: 'Welcome',
    subtitle: 'to Our Site',
    // ... more props
  };

  return (
    <>
      <Hero {...heroData} />
      <ServicesSection {...servicesData} />
    </>
  );
}
```

### Component Structure

Each section follows this structure:

```
SectionName/
├── SectionName.tsx       # Component implementation
├── SectionName.test.tsx  # Component tests (TODO)
├── SectionName.module.scss # Component styles (TODO)
└── index.ts              # Barrel export
```

## Implementation Status

All sections are currently **stubbed with TODO placeholders**.

To implement a section:

1. Open the `.tsx` file
2. Replace the placeholder with actual implementation
3. Add styles in `.module.scss`
4. Write tests in `.test.tsx`
5. Follow design from `/attachments/design.jpg`

## Design Guidelines

- Use **semantic HTML** (`<section>`, `<article>`, etc.)
- Include proper **ARIA labels** for accessibility
- Make components **responsive** (mobile-first)
- Use **CSS Modules** for scoped styling
- Follow **BEM naming** conventions in CSS

## Testing

Each section should have tests covering:

- Rendering with required props
- Rendering with optional props
- Proper HTML structure
- Accessibility (ARIA labels, landmarks)
- User interactions (clicks, etc.)

Example:

```typescript
describe('Hero', () => {
  it('should render title and subtitle', () => {
    render(<Hero title="Test" subtitle="Subtitle" {...otherProps} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

## Architecture Rules

Per [docs/ARCHITECTURE.md](../../../docs/ARCHITECTURE.md):

- ✅ Sections are **presentational components**
- ✅ Accept props, render UI
- ✅ No API calls (use services layer)
- ✅ No business logic (use core/utils)
- ✅ Emit events via callback props

## Next Steps

1. Implement each section component
2. Add CSS Modules for styling
3. Write comprehensive tests
4. Ensure 90%+ test coverage
5. Document any complex interactions
