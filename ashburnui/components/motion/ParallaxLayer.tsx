"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxLayerProps {
    children: React.ReactNode
    offset?: number
    className?: string
}

export function ParallaxLayer({
    children,
    offset = 50,
    className,
}: ParallaxLayerProps) {
    const ref = React.useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], [-offset, offset])

    return (
        <div ref={ref} className={className}>
            <motion.div style={{ y }}>{children}</motion.div>
        </div>
    )
}
