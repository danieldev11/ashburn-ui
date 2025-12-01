# Ashburn/UI v0

This is the component library for Ashburn Automations. It provides a set of reusable, accessible, and styled components for building consistent user interfaces.

## Features

- **Primitives**: Base UI components derived from shadcn/ui (Button, Input, Card, etc.).
- **Layout**: Layout wrappers for consistent spacing and alignment (PageShell, Section, Container, Grid).
- **Motion**: Animation components following a 3-tier energy system (SectionReveal, StaggerList, ParallaxLayer).
- **Sections**: Pre-built marketing sections (Hero, Services, Pricing, etc.).
- **Dashboard**: Shell and components for dashboard applications.

## Usage

### 1. Installation

Ensure you have the required dependencies installed in your Next.js project:

```bash
npm install class-variance-authority clsx tailwind-merge framer-motion lucide-react @radix-ui/react-slot @radix-ui/react-avatar @radix-ui/react-dialog @radix-ui/react-accordion
```

### 2. Styles

Import the global styles in your root layout:

```tsx
import "../path/to/ashburn-ui/styles/globals.css";
```

Or copy the contents of `styles/globals.css` into your project's global CSS file.

### 3. Components

Import components directly:

```tsx
import { Button } from "@/ashburn-ui/app/primitives/button";
import { HeroPrimary } from "@/ashburn-ui/marketing/patterns/HeroPrimary";

export default function Page() {
  return (
    <HeroPrimary
      headline="Welcome to Ashburn"
      primaryCta={{ label: "Get Started", href: "/start" }}
    />
  );
}
```

## Documentation

- [Primitives](docs/primitives.md)
- [Motion](docs/motion.md)
- [Sections](docs/sections.md)

## Theme

The design system uses CSS variables defined in `styles/globals.css`. You can override these variables to customize the theme for specific clients.

```css
:root {
  --color-primary: 221 83% 53%; /* HSL values */
  --radius-md: 0.5rem;
}
```
