'use client'

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "./mode-toogle"
import Image from "next/image"



export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    // const [showLogin, setShowLogin] = useState(false)

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Features", href: "/features" },
        { label: "About Us", href: "/aboutus" },
        { label: "Contact Us", href: "/contact" },
    ]

    // const openLogin = () => {
    //     setMenuOpen(false)
    //     setShowLogin(true)
    // }

    return (
        <>
            <header className="w-full bg-white dark:bg-black text-black dark:text-white px-6 py-4 shadow-md fixed top-0 z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* <Link href="/" className="text-xl font-bold flex items-center gap-2">
                        <div className="bg-orange-500 rounded w-5 h-5" />
                        <span className="text-black dark:text-white">teamify</span>
                    </Link> */}
                    <div>
                        {/* Light mode text logo */}
                        <Link href="/" className="block dark:hidden text-xl font-bold text-black">
                            teamify
                        </Link>

                        {/* Dark mode image logo */}
                        <Link href="/" className="hidden dark:block">
                            <Image src="/logo.png" alt="teamify logo" width={100} height={50} />
                        </Link>
                    </div>


                    <nav className="hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium hover:text-orange-500 transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        <div className="hidden md:block">
                            <ModeToggle />
                        </div>

                        <Link href="/Login">
                            <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white hidden md:inline-block">
                                Sign In
                            </Button>
                        </Link>


                        {/* Mobile */}
                        <div className="md:hidden flex items-center gap-3">
                            <ModeToggle />
                            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
                                <SheetTrigger aria-label="Open mobile menu">
                                    <Menu className="w-6 h-6" />
                                </SheetTrigger>
                                <SheetContent
                                    side="top"
                                    className="bg-white dark:bg-black text-black dark:text-white w-full py-6 px-4"
                                >
                                    <div className="flex items-center justify-start mb-6">
                                        <Link
                                            href="/"
                                            className="text-lg font-bold flex items-center gap-2"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            <div className="bg-orange-500 rounded-md w-5 h-5" />
                                            <span className="text-black dark:text-white">teamify</span>
                                        </Link>
                                    </div>

                                    <div className="border-b border-gray-300 dark:border-gray-700 mb-6" />

                                    <nav className="flex flex-col space-y-4">
                                        {navItems.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setMenuOpen(false)}
                                                className="text-base font-medium hover:text-orange-500"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </nav>

                                    <div className="mt-6">
                                        <Link href="/Login" className="block w-full mt-4">
                                            <Button
                                                variant="default"
                                                className="bg-orange-500 hover:bg-orange-600 text-white w-full"
                                            >
                                                Sign In
                                            </Button>
                                        </Link>

                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
