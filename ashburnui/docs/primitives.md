# Ashburn/UI Primitives

These components are derived from shadcn/ui but adapted to use Ashburn global tokens.

## Components

### Button
Standard button component with variants.
- Variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
- Sizes: `default`, `sm`, `lg`, `icon`

### Input
Standard text input.

### Textarea
Standard textarea input.

### Card
Container for grouped content.
- Subcomponents: `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`

### Badge
Small status indicator or label.
- Variants: `default`, `secondary`, `destructive`, `outline`

### Avatar
Image element with fallback.
- Subcomponents: `AvatarImage`, `AvatarFallback`

### Dialog
Modal dialog window.
- Subcomponents: `DialogTrigger`, `DialogContent`, `DialogHeader`, `DialogFooter`, `DialogTitle`, `DialogDescription`

### Sheet
Slide-out sidebar/drawer.
- Subcomponents: `SheetTrigger`, `SheetContent`, `SheetHeader`, `SheetFooter`, `SheetTitle`, `SheetDescription`

### Accordion
Vertically stacked set of interactive headings.
- Subcomponents: `AccordionItem`, `AccordionTrigger`, `AccordionContent`

## Usage

All primitives use CSS variables defined in `styles/globals.css`. Do not override colors with arbitrary hex values.
