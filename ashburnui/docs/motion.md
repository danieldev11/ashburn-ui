# Ashburn/UI Motion

Motion components are built using Framer Motion and follow the 3-tier energy system.

## Tiers

### Tier 1 (Low Energy)
- Duration: 0.18–0.25s
- Ease: `ease-out`
- Usage: Micro-interactions, hover states, small UI feedback.

### Tier 2 (Medium Energy)
- Duration: 0.3–0.45s
- Usage: Section reveals, list staggering, page transitions.
- Components: `SectionReveal`, `StaggerList`

### Tier 3 (High Energy)
- Duration: 0.6–0.9s
- Usage: Hero sections, marquees, parallax effects.
- Components: `ParallaxLayer`, `MagneticCard`

## Components

### SectionReveal
Reveals content as it scrolls into view.
```tsx
<SectionReveal>
  <h2>Hello World</h2>
</SectionReveal>
```

### StaggerList
Staggers the entrance of a list of items.
```tsx
<StaggerList
  items={items}
  renderItem={(item) => <div>{item.name}</div>}
/>
```

### ParallaxLayer
Moves content at a different speed than scroll.
```tsx
<ParallaxLayer offset={50}>
  <img src="..." />
</ParallaxLayer>
```

### MagneticCard
Card that follows the cursor on hover.
```tsx
<MagneticCard>
  <Card>...</Card>
</MagneticCard>
```
