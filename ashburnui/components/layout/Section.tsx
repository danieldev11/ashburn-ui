import * as React from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    spacing?: "none" | "sm" | "md" | "lg" | "xl"
}

const spacingStyles = {
    none: "py-0",
    sm: "py-8 md:py-12",
    md: "py-12 md:py-16",
    lg: "py-16 md:py-24",
    xl: "py-24 md:py-32",
}

export function Section({
    className,
    children,
    spacing = "lg",
    ...props
}: SectionProps) {
    return (
        <section
            className={cn("w-full", spacingStyles[spacing], className)}
            {...props}
        >
            {children}
        </section>
    )
}
