import * as React from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    size?: "sm" | "md" | "lg" | "xl" | "full"
}

const sizeStyles = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-[1400px]",
    full: "max-w-full",
}

export function Container({
    className,
    children,
    size = "lg",
    ...props
}: ContainerProps) {
    return (
        <div
            className={cn(
                "mx-auto w-full px-4 sm:px-6 lg:px-8",
                sizeStyles[size],
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}
