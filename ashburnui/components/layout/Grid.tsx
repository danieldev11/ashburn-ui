import * as React from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    cols?: 1 | 2 | 3 | 4
    gap?: "sm" | "md" | "lg"
}

const colsStyles = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
}

const gapStyles = {
    sm: "gap-4",
    md: "gap-8",
    lg: "gap-12",
}

export function Grid({
    className,
    children,
    cols = 3,
    gap = "md",
    ...props
}: GridProps) {
    return (
        <div
            className={cn("grid", colsStyles[cols], gapStyles[gap], className)}
            {...props}
        >
            {children}
        </div>
    )
}
