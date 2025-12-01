"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"

interface StaggerListProps<T> {
    items: T[]
    renderItem: (item: T, index: number) => React.ReactNode
    className?: string
    staggerDelay?: number
}

export function StaggerList<T>({
    items,
    renderItem,
    className,
    staggerDelay = 0.1,
}: StaggerListProps<T>) {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
        >
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.4,
                                ease: "easeOut",
                            },
                        },
                    }}
                >
                    {renderItem(item, index)}
                </motion.div>
            ))}
        </motion.div>
    )
}
