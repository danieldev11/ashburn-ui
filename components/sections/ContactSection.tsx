import * as React from "react"
import { Button } from "../../app/primitives/button"
import { Input } from "../../app/primitives/input"
import { Textarea } from "../../app/primitives/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../app/primitives/card"
import { Container } from "../layout/Container"
import { Section } from "../layout/Section"
import { SectionReveal } from "../motion/SectionReveal"

interface ContactSectionProps {
    headline?: string
    subheadline?: string
    emailEndpoint?: string
}

export function ContactSection({
    headline = "Get in touch",
    subheadline = "We'd love to hear from you. Fill out the form below.",
    emailEndpoint = "/api/contact",
}: ContactSectionProps) {
    return (
        <Section>
            <Container size="sm">
                <SectionReveal>
                    <Card>
                        <CardHeader className="text-center">
                            <CardTitle className="text-2xl">{headline}</CardTitle>
                            <CardDescription>{subheadline}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4" action={emailEndpoint} method="POST">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Name
                                        </label>
                                        <Input id="name" name="name" placeholder="John Doe" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Email
                                        </label>
                                        <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Message
                                    </label>
                                    <Textarea id="message" name="message" placeholder="How can we help you?" className="min-h-[120px]" required />
                                </div>
                                <Button type="submit" className="w-full">
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </SectionReveal>
            </Container>
        </Section>
    )
}
