import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card"
import { Container } from "../layout/Container"
import { Section } from "../layout/Section"
import { Grid } from "../layout/Grid"
import { StaggerList } from "../motion/StaggerList"
import { SectionReveal } from "../motion/SectionReveal"

interface ServiceItem {
    title: string
    description: string
    icon?: React.ReactNode
}

interface ServicesGridProps {
    headline?: string
    subheadline?: string
    services: ServiceItem[]
}

export function ServicesGrid({
    headline,
    subheadline,
    services,
}: ServicesGridProps) {
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

                <Grid cols={3} gap="md">
                    <StaggerList
                        items={services}
                        className="contents"
                        renderItem={(service, index) => (
                            <Card key={index} className="h-full">
                                <CardHeader>
                                    {service.icon && (
                                        <div className="mb-4 text-primary">{service.icon}</div>
                                    )}
                                    <CardTitle>{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        )}
                    />
                </Grid>
            </Container>
        </Section>
    )
}
