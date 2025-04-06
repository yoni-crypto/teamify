'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Ripple } from "./magicui/ripple"
import { AuroraText } from "./magicui/aurora-text"
import { RainbowButton } from "./magicui/rainbow-button"
import { Meteors } from "./magicui/meteors"

export default function HeroSection() {

    return (
        <div className={`relative min-h-screen w-full transition-colors duration-500 dark:bg-background`}>
            {/* Meteors Background */}
            <Meteors number={35} className="absolute inset-0 z-0 pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-between min-h-screen">
                {/* Hero Content */}
                <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center max-w-3xl w-full space-y-8">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
                        >
                            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-transparent dark:from-white dark:to-slate-900/10">
                                Welcome To Your <AuroraText>Virtual Office</AuroraText>
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-base sm:text-lg md:text-xl opacity-80 px-2 sm:px-6"
                        >
                            Launch your company in minutes. Collaborate, manage, and grow — all from one digital workspace.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
                        >
                            <Link href="/setup-office" className="w-full sm:w-auto">
                                <RainbowButton>Setup Your Company</RainbowButton>
                                
                            </Link>
                            <Button>Instant Demo</Button>

                        </motion.div>
                    </div>
                </div>

                
                
            </div>

            <Ripple />
        </div>
    )
}
