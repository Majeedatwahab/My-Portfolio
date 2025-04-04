"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "../../components/ui/button"

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (id) => {
        setMobileMenuOpen(false)
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link
                    href="/"
                    className="text-sm sm:text-xl lg:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
                >
                    MJ.DEV
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 lg:space-x-8">
                    {["home", "about", "skills", "projects", "blog", "contact",].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className="text-gray-300 hover:text-white uppercase text-xs sm:text-sm lg:text-base tracking-wider transition-colors"
                        >
                            {item}
                        </button>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-md z-40 w-full">
                    <nav className="flex flex-col items-center justify-center h-full space-y-6">
                        {["home", "about", "skills", "projects", "blog", "contact"].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="text-gray-300 hover:text-white uppercase text-base sm:text-lg tracking-wider transition-colors"
                            >
                                {item}
                            </button>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    )
}
