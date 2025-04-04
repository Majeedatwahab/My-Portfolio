import Link from "next/link";
import Image from "next/image";

"use client";


import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";



const ProjectDetails = [
    {
        id: 1,
        title: "Next.js Portfolio",
        description: "A simple Next.js application featuring a blog, projects, and about page.",
        image: "/images/portfolio/nextjs.png",
        link: "https://github.com/michaeljones1992/mj-portfolio",
        linkText: "GitHub",
        linkIcon: <FaGithub />
    },
    // Add more projects here...
 
]

export default function ProjectDetails(){
    return (
        <section className="container mx-auto px-4 py-20 text-white">
            <Link
                href="/"
                className="text-sm sm:text-xl lg:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
            >
                MJ.DEV
            </Link>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <Image src={project.image} alt={project.title} width={800} height={600} className="rounded-lg mb-6" />

            <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                    <Badge key={tech} className="bg-purple-500/10 text-purple-300 border-purple-500/30">
                        {tech}
                    </Badge>
                ))}
            </div>

            <p className="text-gray-300 mb-6">{project.fullDescription}</p>

            <div className="flex gap-4">
                <Button asChild className="bg-gradient-to-r from-purple-600 to-cyan-600">
                    <a href={project.demoUrl} target="_blank">
                        <FaExternalLinkAlt className="mr-2" />
                        Live Demo
                    </a>
                </Button>

                <Button asChild variant="outline" className="border-purple-500 text-white">
                    <a href={project.githubUrl} target="_blank">
                        <FaGithub className="mr-2" />
                        View Code
                    </a>
                </Button>
            </div>
        </section>
    )
}