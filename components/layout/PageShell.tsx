import * as React from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export interface PageShellProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export function PageShell({ className, children, ...props }: PageShellProps) {
    return (
        <main
            className={cn(
                "min-h-screen w-full bg-background text-foreground",
                className
            )}
            {...props}
        >
            {children}
        </main>
    )
}
