import * as React from "react"
import { Button } from "../../app/primitives/button"
import { Badge } from "../../app/primitives/badge"
import { Container } from "../../components/layout/Container"
import { Section } from "../../components/layout/Section"
import { SectionReveal } from "../../components/motion/SectionReveal"
import { ParallaxLayer } from "../motion/ParallaxLayer"

interface HeroPrimaryProps {
    headline: string
    subheadline?: string
    primaryCta?: { label: string; href: string }
    secondaryCta?: { label: string; href: string }
    badge?: string
    backgroundSlot?: React.ReactNode
}

export function HeroPrimary({
    headline,
    subheadline,
    primaryCta,
    secondaryCta,
    badge,
    backgroundSlot,
}: HeroPrimaryProps) {
    return (
        <Section className="relative overflow-hidden" spacing="xl">
            {backgroundSlot && (
                <div className="absolute inset-0 z-0 opacity-20">{backgroundSlot}</div>
            )}

            <Container className="relative z-10 flex flex-col items-center text-center">
                <SectionReveal>
                    {badge && (
                        <Badge variant="secondary" className="mb-6">
                            {badge}
                        </Badge>
                    )}
                </SectionReveal>

                <SectionReveal delay={0.1}>
                    <h1 className="mb-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        {headline}
                    </h1>
                </SectionReveal>

                {subheadline && (
                    <SectionReveal delay={0.2}>
                        <p className="mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                            {subheadline}
                        </p>
                    </SectionReveal>
                )}

                <SectionReveal delay={0.3}>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        {primaryCta && (
                            <Button size="lg" asChild>
                                <a href={primaryCta.href}>{primaryCta.label}</a>
                            </Button>
                        )}
                        {secondaryCta && (
                            <Button variant="outline" size="lg" asChild>
                                <a href={secondaryCta.href}>{secondaryCta.label}</a>
                            </Button>
                        )}
                    </div>
                </SectionReveal>
            </Container>
        </Section>
    )
}
