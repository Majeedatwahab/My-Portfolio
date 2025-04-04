"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
    const [typedText, setTypedText] = useState("")
    const fullText = "FRONTEND DEVELOPER"
    const typingSpeed = 100

    useEffect(() => {
        if (typedText.length < fullText.length) {
            const timeout = setTimeout(() => {
                setTypedText(fullText.slice(0, typedText.length + 1))
            }, typingSpeed)
            return () => clearTimeout(timeout)
        }
    }, [typedText])

    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about")
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section id="home" className="relative h-screen flex flex-col justify-center items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/50 z-0" />

            {/* Background grid effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] z-0" />

            <div className="container mx-auto px-6 sm:px-8 z-10">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 ml-4 sm:mb-6 leading-tight ">
                    <span className="block">HELLO, I'M</span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                        MAJEEDAT WAHAB
                    </span>
                </h1>

                <div className="h-10 sm:h-12 mb-6">
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-light">
                        <span className="inline-block border-r-4 border-purple-500 pr-1 animate-pulse">{typedText}</span>
                    </h2>
                </div>

                <p className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg md:text-xl mb-8 sm:mb-10">
                    Crafting exceptional digital experiences with clean code and cutting-edge technologies. Specializing in React,
                    Next.js, and modern frontend architecture.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#projects">
                        <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-4 sm:py-6 rounded-md">
                            View My Work
                        </Button>
                    </a>

                    <a href="#contact">
                        <Button
                            variant="outline"
                            className="border-purple-500 text-white hover:bg-purple-500/20 text-black hover:text-white px-6 sm:px-8 py-4 sm:py-6 rounded-md"
                        >
                            Contact Me
                        </Button>
                    </a>
                </div>
            </div>

            <button
                onClick={scrollToAbout}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
                aria-label="Scroll down"
            >
                <ArrowDown className="h-8 w-8 sm:h-10 sm:w-10 text-purple-500" />
            </button>
        </section>
    )
}
