"use client"

import * as React from "react"
import { Card, CardContent } from "../../app/primitives/card"
import { Section } from "../../components/layout/Section"
import { motion } from "framer-motion"

interface Testimonial {
    quote: string
    author: string
    role?: string
    company?: string
}

interface TestimonialMarqueeProps {
    testimonials: Testimonial[]
}

export function TestimonialMarquee({ testimonials }: TestimonialMarqueeProps) {
    // Duplicate items for infinite loop
    const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

    return (
        <Section className="overflow-hidden">
            <div className="flex flex-col gap-8">
                {/* Row 1: Left to Right */}
                <div className="relative flex w-full overflow-hidden">
                    <motion.div
                        className="flex gap-6"
                        animate={{ x: [0, -1000] }}
                        transition={{
                            repeat: Infinity,
                            duration: 40,
                            ease: "linear",
                        }}
                    >
                        {duplicatedTestimonials.map((t, i) => (
                            <Card key={`row1-${i}`} className="w-[350px] shrink-0 bg-secondary/30">
                                <CardContent className="p-6">
                                    <p className="mb-4 text-lg italic">"{t.quote}"</p>
                                    <div>
                                        <p className="font-semibold">{t.author}</p>
                                        {(t.role || t.company) && (
                                            <p className="text-sm text-muted-foreground">
                                                {t.role}
                                                {t.role && t.company && " at "}
                                                {t.company}
                                            </p>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: Right to Left */}
                <div className="relative flex w-full overflow-hidden">
                    <motion.div
                        className="flex gap-6"
                        animate={{ x: [-1000, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 45,
                            ease: "linear",
                        }}
                    >
                        {duplicatedTestimonials.map((t, i) => (
                            <Card key={`row2-${i}`} className="w-[350px] shrink-0 bg-secondary/30">
                                <CardContent className="p-6">
                                    <p className="mb-4 text-lg italic">"{t.quote}"</p>
                                    <div>
                                        <p className="font-semibold">{t.author}</p>
                                        {(t.role || t.company) && (
                                            <p className="text-sm text-muted-foreground">
                                                {t.role}
                                                {t.role && t.company && " at "}
                                                {t.company}
                                            </p>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </motion.div>
                </div>
            </div>
        </Section>
    )
}
