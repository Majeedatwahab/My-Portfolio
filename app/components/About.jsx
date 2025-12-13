"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FileText } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-black relative">
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">ABOUT ME</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 border-2 border-purple-500 rounded-xl transform translate-x-3 translate-y-3 z-0" />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 rounded-xl z-10" />
              <Image
                src="/assets/bg-hero-image.jpeg"
                alt="Majeedat Abdulwahab - Frontend Developer"
                fill
                className="rounded-xl object-cover z-20 relative"
              />
            </div>
          </div>

          <div className="text-white">
            <h3 className="text-2xl font-semibold text-purple-400 mb-3">Who I Am</h3>

            <p className="text-gray-300 mb-6">
              I'm a Frontend Developer specializing in building clean, responsive, and high-performance user interfaces. I work primarily with React and Next.js, turning ideas and designs into fast, visually polished products that feel great to use.

            </p>
            <p className="text-gray-300 mb-6">
              I transitioned into web development in 2023, and since then I've built real-world projects ranging from landing pages and eCommerce experiences to interactive web apps. I’m passionate about frontend architecture, reusable components, and intuitive UI/UX that keeps users engaged.

            </p>
            <h3 className="text-2xl font-semibold text-purple-400 mb-3">More About Me</h3>
            <p className="text-gray-300 mb-6">
              When I'm not coding, you'll probably find me enjoying good food, admiring cats, caring for my plants, or exploring sports cars. I'm a calm, introverted person who values meaningful work, creativity, and building things that truly solve problems.

            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="text-white font-bold mb-1">Name:</h4>
                <p className="text-gray-300">Majeedat Abdulwahab</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Email:</h4>
                <p className="text-gray-300 break-all sm:break-keep">
                  majeedatabdulwahabayo@gmail.com
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold mb-1">Location:</h4>
                <p className="text-gray-300">Nigeria</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Availability:</h4>
                <p className="text-gray-300">Freelance / Full-time</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://majeedat.cv/"
                target="_blank"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold rounded-md flex items-center justify-center px-6 py-3"
              >
                <FileText size={18} className="mr-2" /> Download CV
              </Link>

              <div className="flex gap-3">
                <Link href="https://github.com/majeedatwahab" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-purple-500 hover:bg-purple-500/20"
                  >
                    <FaGithub className="h-5 w-5 text-purple-500" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>

                <Link href="https://linkedin.com/in/majeedat-abdulwahab-" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-purple-500 hover:bg-purple-500/20"
                  >
                    <FaLinkedin className="h-5 w-5 text-purple-500" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>

                <Link href="https://twitter.com/majeedahwahab" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-purple-500 hover:bg-purple-500/20"
                  >
                    <FaXTwitter className="h-5 w-5 text-purple-500" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
