"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"

interface SectionRevealProps {
    children: React.ReactNode
    className?: string
    delay?: number
}

export function SectionReveal({
    children,
    className,
    delay = 0,
}: SectionRevealProps) {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: delay,
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
