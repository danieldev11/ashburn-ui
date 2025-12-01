"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface MagneticCardProps {
    children: React.ReactNode
    className?: string
}

export function MagneticCard({ children, className }: MagneticCardProps) {
    const ref = React.useRef<HTMLDivElement>(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 })
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 })

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!ref.current) return

        const { left, top, width, height } = ref.current.getBoundingClientRect()

        const centerX = left + width / 2
        const centerY = top + height / 2

        const distanceX = e.clientX - centerX
        const distanceY = e.clientY - centerY

        x.set(distanceX / 10)
        y.set(distanceY / 10)
    }

    function handleMouseLeave() {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseX, y: mouseY }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
