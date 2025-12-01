import * as React from "react"
import { Check } from "lucide-react"
import { Button } from "../../app/primitives/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../app/primitives/card"
import { Badge } from "../../app/primitives/badge"
import { Container } from "../layout/Container"
import { Section } from "../layout/Section"
import { Grid } from "../layout/Grid"
import { SectionReveal } from "../motion/SectionReveal"

interface PricingFeature {
    text: string
    included: boolean
}

interface PricingTier {
    name: string
    price: string
    description: string
    features: PricingFeature[]
    ctaLabel: string
    ctaHref: string
    popular?: boolean
}

interface PricingTiersProps {
    headline?: string
    subheadline?: string
    tiers: PricingTier[]
}

export function PricingTiers({ headline, subheadline, tiers }: PricingTiersProps) {
    return (
        <Section>
            <Container>
                {(headline || subheadline) && (
                    <SectionReveal className="mb-12 text-center md:mb-16">
                        {headline && (
                            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                                {headline}
                            </h2>
                        )}
                        {subheadline && (
                            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                                {subheadline}
                            </p>
                        )}
                    </SectionReveal>
                )}

                <Grid cols={3} gap="lg">
                    {tiers.map((tier, index) => (
                        <SectionReveal key={index} delay={index * 0.1} className="h-full">
                            <Card className={`flex h-full flex-col ${tier.popular ? "border-primary shadow-lg" : ""}`}>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-xl">{tier.name}</CardTitle>
                                        {tier.popular && <Badge>Most Popular</Badge>}
                                    </div>
                                    <div className="mt-4">
                                        <span className="text-4xl font-bold">{tier.price}</span>
                                        <span className="text-muted-foreground">/month</span>
                                    </div>
                                    <CardDescription className="mt-2">{tier.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <ul className="space-y-3">
                                        {tier.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm">
                                                <Check className={`h-4 w-4 ${feature.included ? "text-primary" : "text-muted-foreground/50"}`} />
                                                <span className={feature.included ? "" : "text-muted-foreground line-through"}>
                                                    {feature.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full" variant={tier.popular ? "default" : "outline"} asChild>
                                        <a href={tier.ctaHref}>{tier.ctaLabel}</a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </SectionReveal>
                    ))}
                </Grid>
            </Container>
        </Section>
    )
}
