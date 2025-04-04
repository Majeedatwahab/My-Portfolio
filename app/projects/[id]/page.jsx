"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "Furniro",
        description: "A modern eCommerce website for furniture shopping.",
        image: "/assets/furniro-website.png",
        fullDescription:
            "Furniro is a sleek and user-friendly eCommerce platform...",
        technologies: ["React", "Next.js", "Tailwind CSS"],
        demoUrl: "https://furniro-ecommerce-website.vercel.app/",
        githubUrl: "https://github.com/Majeedatwahab/Furniro-Ecommerce-Website",
        purpose: "",
        features: "",
        TechnicalHurdles: "",
        LessonsLearned: "",
       
    },
    {
        id: 2,
        title: "Furniro",
        description: "A modern eCommerce website for furniture shopping.",
        image: "/assets/furniro-website.png",
        fullDescription:
            "Furniro is a sleek and user-friendly eCommerce platform...",
        technologies: ["React", "Next.js", "Tailwind CSS"],
        demoUrl: "https://furniro-ecommerce-website.vercel.app/",
        githubUrl: "https://github.com/Majeedatwahab/Furniro-Ecommerce-Website",
        purpose: "",
        features: "",
        TechnicalHurdles: "",
        LessonsLearned: "",

    },
    {
        id: 3,
        title: "Furniro",
        description: "A modern eCommerce website for furniture shopping.",
        image: "/assets/furniro-website.png",
        fullDescription:
            "Furniro is a sleek and user-friendly eCommerce platform...",
        technologies: ["React", "Next.js", "Tailwind CSS"],
        demoUrl: "https://furniro-ecommerce-website.vercel.app/",
        githubUrl: "https://github.com/Majeedatwahab/Furniro-Ecommerce-Website",
        purpose: "",
        features: "",
        TechnicalHurdles: "",
        LessonsLearned: "",

    },
    {
        id: 4,
        title: "Furniro",
        description: "A modern eCommerce website for furniture shopping.",
        image: "/assets/furniro-website.png",
        fullDescription:
            "Furniro is a sleek and user-friendly eCommerce platform...",
        technologies: ["React", "Next.js", "Tailwind CSS"],
        demoUrl: "https://furniro-ecommerce-website.vercel.app/",
        githubUrl: "https://github.com/Majeedatwahab/Furniro-Ecommerce-Website",
        purpose: "",
        features: "",
        TechnicalHurdles: "",
        LessonsLearned: "",

    },
    {
        id: 5,
        title: "Furniro",
        description: "A modern eCommerce website for furniture shopping.",
        image: "/assets/furniro-website.png",
        fullDescription:
            "Furniro is a sleek and user-friendly eCommerce platform...",
        technologies: ["React", "Next.js", "Tailwind CSS"],
        demoUrl: "https://furniro-ecommerce-website.vercel.app/",
        githubUrl: "https://github.com/Majeedatwahab/Furniro-Ecommerce-Website",
        purpose: "",
        features: "",
        TechnicalHurdles: "",
        LessonsLearned: "",

    },
];

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find((p) => p.id.toString() === id);

    if (!project) {
        return <div className="text-center text-white">Project not found.</div>;
    }

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
    );
}
