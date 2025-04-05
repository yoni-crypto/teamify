'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Ripple } from "./magicui/ripple"
import { Meteors } from "./magicui/meteors"
import { AuroraText } from "./magicui/aurora-text"
import { RainbowButton } from "./magicui/rainbow-button"

export default function HeroSection() {
    const { resolvedTheme } = useTheme()
    const isDark = resolvedTheme === "dark"

    return (
        <div

        // style={{
        //     backgroundImage: "url('/bg.png')",
        //     backgroundSize: "cover",
        //     backgroundPosition: "center",
        //     backgroundRepeat: "no-repeat"
        // }}
            className={`relative min-h-screen flex flex-col justify-between px-4 sm:px-8 md:px-16 transition-colors duration-500 ${isDark ? 'bg-[#050505] text-white' : 'bg-white text-black'
                }`}
        >
            {/* Top Nav */}
            <div className="py-6 flex justify-between items-center w-full max-w-7xl mx-auto">
                <div className="text-xl sm:text-2xl font-bold">🚀 VirtualOffice</div>
                <div className="flex items-center gap-4 text-sm">
                    <Link href="/terms" className="hover:underline opacity-70">Terms</Link>
                    <Link href="/privacy" className="hover:underline opacity-70">Privacy</Link>
                </div>
            </div>

            {/* Hero Content */}
            <div className="flex flex-col items-center justify-center text-center flex-grow gap-6 max-w-3xl mx-auto px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                >
                    <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                        Welcome To Your <AuroraText>Virtual Office</AuroraText> 
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-base sm:text-lg md:text-xl opacity-70 px-2 sm:px-6"
                >

                    Launch your company in minutes. Collaborate, manage, and grow — all from one digital workspace.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto"
                >
                    <RainbowButton>Instant Demo</RainbowButton>
                    <Button
                        variant="outline"
                        className={`w-full sm:w-auto px-6 py-2 text-lg rounded-xl border ${isDark ? 'text-white border-white' : 'text-black border-black'
                            }`}
                    >
                        Setup Your Company
                    </Button>
                </motion.div>
            </div>

            {/* Footer */}
            <div className="text-sm opacity-60 text-center py-6">
                &copy; {new Date().getFullYear()} VirtualOffice Inc.
            </div>
            {/* <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
                <Meteors number={30} />
                
            </div> */}
            <Ripple />
        </div>
    )
}
