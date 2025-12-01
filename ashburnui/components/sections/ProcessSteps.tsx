import * as React from "react"
import { Container } from "../layout/Container"
import { Section } from "../layout/Section"
import { StaggerList } from "../motion/StaggerList"
import { SectionReveal } from "../motion/SectionReveal"

interface StepItem {
    title: string
    description: string
}

interface ProcessStepsProps {
    headline?: string
    steps: StepItem[]
}

export function ProcessSteps({ headline, steps }: ProcessStepsProps) {
    return (
        <Section>
            <Container>
                {headline && (
                    <SectionReveal className="mb-12 text-center md:mb-16">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            {headline}
                        </h2>
                    </SectionReveal>
                )}

                <div className="relative">
                    {/* Connecting line for desktop */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

                    <StaggerList
                        items={steps}
                        className="space-y-12"
                        renderItem={(step, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col gap-8 md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-4 top-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border bg-background text-sm font-bold shadow-sm md:left-1/2">
                                    {index + 1}
                                </div>

                                {/* Content */}
                                <div className="ml-12 md:ml-0 md:w-1/2 md:px-12">
                                    <div
                                        className={`flex flex-col gap-2 ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                            }`}
                                    >
                                        <h3 className="text-xl font-bold">{step.title}</h3>
                                        <p className="text-muted-foreground">{step.description}</p>
                                    </div>
                                </div>

                                {/* Empty side for balance */}
                                <div className="hidden md:block md:w-1/2" />
                            </div>
                        )}
                    />
                </div>
            </Container>
        </Section>
    )
}
