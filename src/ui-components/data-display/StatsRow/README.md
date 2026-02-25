# StatsRow Component

A reusable, accessible component for displaying statistics in a horizontal row with responsive wrapping.

## Features

✅ **Semantic HTML** - Uses `<dl>`, `<dt>`, `<dd>` for accessibility  
✅ **Responsive** - Wraps to column layout on mobile  
✅ **Variants** - Light (for dark backgrounds) and dark (for light backgrounds)  
✅ **Optional Helper** - Supporting text for each stat  
✅ **Flexible** - Works with any number of items  
✅ **Accessible** - WCAG 2.1 AA compliant

## Usage

### Basic Example

```typescript
import { StatsRow } from '@ui-components/data-display/StatsRow';

function App() {
  return (
    <StatsRow
      items={[
        { value: '25+', label: 'Anos de Experiência' },
        { value: '500+', label: 'Projetos Concluídos' },
        { value: '100%', label: 'Conformidade ANVISA' },
      ]}
      variant="dark"
    />
  );
}
```

### With Helper Text

```typescript
<StatsRow
  items={[
    { value: '25+', label: 'Anos de Experiência', helper: 'Desde 1999' },
    { value: '500+', label: 'Projetos Concluídos', helper: 'Em todo Brasil' },
    { value: '100%', label: 'Conformidade', helper: 'Certificado ISO 9001' },
  ]}
  variant="light"
/>
```

### Light Variant (for dark backgrounds)

```typescript
<div style={{ background: '#1E3A8A', padding: '2rem' }}>
  <StatsRow
    items={[
      { value: '25+', label: 'Years' },
      { value: '500+', label: 'Projects' },
    ]}
    variant="light"
  />
</div>
```

### Dark Variant (for light backgrounds)

```typescript
<div style={{ background: '#FFFFFF', padding: '2rem' }}>
  <StatsRow
    items={[
      { value: '25+', label: 'Years' },
      { value: '500+', label: 'Projects' },
    ]}
    variant="dark"
  />
</div>
```

## Props

### `StatsRowProps`

| Prop      | Type                | Required | Default   | Description                              |
| --------- | ------------------- | -------- | --------- | ---------------------------------------- |
| `items`   | `StatItem[]`        | Yes      | -         | Array of statistics to display           |
| `variant` | `"light" \| "dark"` | No       | `"light"` | Visual variant for different backgrounds |

### `StatItem`

| Property | Type     | Required | Description                   |
| -------- | -------- | -------- | ----------------------------- |
| `value`  | `string` | Yes      | Statistic value (e.g., "25+") |
| `label`  | `string` | Yes      | Statistic label/description   |
| `helper` | `string` | No       | Optional helper/subtitle text |

## Design System

Based on **Praxis Design System**:

### Colors

**Light Variant:**

- Value: Primary 50 (#EFF6FF)
- Label: White 90% opacity
- Helper: White 60% opacity

**Dark Variant:**

- Value: Primary 600 (#1E40AF)
- Label: Gray 700 (#374151)
- Helper: Gray 600 (#4B5563)

### Typography

- **Value**: 48px, Bold 700 (36px on mobile, 32px on small screens)
- **Label**: 16px, Medium 500 (14px on mobile)
- **Helper**: 14px, Regular 400 (12px on mobile)
- **Font Family**: Inter

### Spacing

- Gap between items: 32px (24px on mobile)
- Column layout on screens <768px

## Accessibility

### Semantic HTML

The component uses proper HTML semantics for definition lists:

```html
<dl>
  Definition List (parent container)
  <dt>Definition Term (value - e.g., "25+")</dt>
  <dd>Definition Description (label - e.g., "Anos")</dd>
  <dd>Definition Description (helper - optional)</dd>
</dl>
```

This provides proper structure for screen readers to announce statistics meaningfully.

### Screen Reader Support

- Screen readers will announce: "Definition list, 3 items"
- Each stat is read as: "25+, Anos de Experiência"
- Helper text is announced as additional context

### Keyboard Navigation

- No interactive elements (display-only component)
- If wrapping in links/buttons, ensure proper focus management

## Responsive Behavior

### Desktop (≥768px)

- Horizontal flexbox layout
- Items distributed evenly with 32px gap
- Min-width: 200px per item
- Text-align: center

### Mobile (<768px)

- Vertical stack (column layout)
- 24px gap between items
- Full width items
- Maintains center alignment

## Visual Examples

### Light Variant (Dark Background)

Perfect for hero sections or dark-themed areas:

```typescript
<section style={{ background: '#121826' }}>
  <StatsRow
    items={[
      { value: '25+', label: 'Anos' },
      { value: '500+', label: 'Projetos' },
    ]}
    variant="light"
  />
</section>
```

### Dark Variant (Light Background)

Perfect for content sections with white/light backgrounds:

```typescript
<section style={{ background: '#F9FAFB' }}>
  <StatsRow
    items={[
      { value: '25+', label: 'Anos' },
      { value: '500+', label: 'Projetos' },
    ]}
    variant="dark"
  />
</section>
```

## Testing

Run tests:

```bash
npm test -- StatsRow.test.tsx
```

The component includes comprehensive tests for:

- ✅ Rendering all items (15 tests)
- ✅ Correct item count
- ✅ Helper text display
- ✅ Variant application (light/dark)
- ✅ Semantic HTML (`<dl>`, `<dt>`, `<dd>`)
- ✅ Edge cases (empty array, single item, many items)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance

- Pure functional component (no state)
- CSS modules for scoped styling
- Minimal re-renders
- Lightweight (~1KB gzipped)

## Examples

### Minimal (2 items)

```typescript
<StatsRow
  items={[
    { value: '100%', label: 'Quality' },
    { value: '24/7', label: 'Support' },
  ]}
/>
```

### Maximum (Many items - wraps responsively)

```typescript
<StatsRow
  items={[
    { value: '25+', label: 'Years' },
    { value: '500+', label: 'Projects' },
    { value: '100%', label: 'Quality' },
    { value: '50+', label: 'Clients' },
    { value: '10+', label: 'Awards' },
  ]}
  variant="dark"
/>
```

### With All Features

```typescript
<StatsRow
  items={[
    {
      value: '25+',
      label: 'Anos de Experiência',
      helper: 'Desde 1999'
    },
    {
      value: '500+',
      label: 'Projetos Concluídos',
      helper: 'Em todo o Brasil'
    },
    {
      value: '100%',
      label: 'Conformidade ANVISA',
      helper: 'Certificado ISO 9001'
    },
  ]}
  variant="light"
/>
```

## Integration with HeroSection

The StatsRow component can be used standalone or integrated with other components:

```typescript
// The HeroSection component already uses its own stats implementation
// But you can use StatsRow separately:

<HeroSection {...heroProps} />

<section>
  <h2>Additional Statistics</h2>
  <StatsRow
    items={[...]}
    variant="dark"
  />
</section>
```

## Related Components

- **HeroSection** - Uses integrated stats display
- **Card** - Can contain StatsRow
- **Section** - Layout component for stats

## Architecture

Following the project's architecture principles:

- ✅ **Presentational component** - No business logic
- ✅ **Props-driven** - All data via props
- ✅ **Reusable** - Can be used anywhere
- ✅ **Testable** - 90%+ test coverage
- ✅ **Accessible** - Semantic HTML, WCAG compliant

Location: `src/ui-components/data-display/StatsRow/`

This is in the **data-display** folder because it displays data (statistics) without user interaction.

## Future Enhancements

Potential improvements:

- [ ] Animated counter effect (count-up animation)
- [ ] Icon support for each stat
- [ ] Custom color props
- [ ] Orientation prop (horizontal/vertical)
- [ ] Border/divider between items
- [ ] Hover effects
- [ ] Click handlers for interactive stats

## License

Private - Praxis Engenharia Clínica
