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
        <div className="relative min-h-screen w-full bg-background overflow-hidden">
            {/* Custom Aurora-like Background */}
            <motion.div
                className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-pink-500/10 blur-2xl animate-pulse"
                aria-hidden="true"
            />

            {/* Meteors floating */}
            <Meteors number={20} className="absolute inset-0 z-0 pointer-events-none" />

            {/* Water ripple wave effect */}
            <Ripple />

            <div className="relative z-10 flex flex-col justify-between min-h-screen">
                <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center max-w-3xl w-full space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="uppercase text-xs tracking-widest text-muted-foreground dark:text-slate-300">
                                Your Remote Company Hub
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
                        >
                            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-transparent dark:from-white dark:to-slate-900/10">
                                Welcome To Your <AuroraText>Virtual Office</AuroraText>
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-slate-300 px-2 sm:px-6"
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
                                <RainbowButton>
                                    Setup Your Company
                                </RainbowButton>
                            </Link>

                            <Button
                                variant="outline"
                                className="hover:scale-105 transition-transform duration-300 shadow-md"
                            >
                                Instant Demo
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
