"use client"

import Link from "next/link"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <footer className="bg-black border-t border-gray-800 py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-between items-center">
                    <div className="mb-8 md:mb-0">
                        <Link
                            href="/"
                            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
                        >
                            MJ.DEV
                        </Link>
                        <p className="text-gray-400 mt-2 max-w-md">
                            Creating exceptional digital experiences with clean code and cutting-edge technologies.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                        <div>
                            <h3 className="text-white font-bold mb-4">Navigation</h3>
                            <ul className="space-y-2">
                                {["Home", "About", "Skills", "Projects", "Blog", "Contact"].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={`#${item.toLowerCase()}`}
                                            className="text-gray-400 hover:text-purple-400 transition-colors"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                       
                        <div className="col-span-2 md:col-span-1">
                            <h3 className="text-white font-bold mb-4">Contact</h3>
                            <ul className="space-y-2">
                                <li className="text-gray-400">
                                    <span className="block">Kaduna State</span>
                                    <span className="block">Nigeria</span>
                                </li>
                                <li>
                                    <a href="mailto:majeedatabdulwahabayo@gmail.com" className="text-gray-400 break-all sm:break-keeph over:text-purple-400 transition-colors">
                                        majeedatabdulwahabayo@gmail.com
                                    </a>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Majeedat Abdulwahab. All rights reserved.
                    </p>

                   

                    <Button
                        variant="outline"
                        size="icon"
                        className="mt-6 md:mt-0 rounded-full border-purple-500 hover:bg-purple-500/20 text-black hover:text-white"
                        onClick={scrollToTop}
                    >
                        <ArrowUp className="h-5 w-5" />
                        <span className="sr-only">Back to top</span>
                    </Button>
                </div>
            </div>
        </footer>
    )
}

