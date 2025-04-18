"use client"
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";

export default function Projects() {
    const [filter, setFilter] = useState("all");
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Furniro",
            description: "A modern eCommerce website for furniture shopping.",
            image: "/assets/furniro-website.png",
            category: "web",
            technologies: ["React", "Next.js", "Tailwind CSS"],
            demoUrl: "https://furniro-ecommerce-website.vercel.app/",
            githubUrl: "https://github.com/Majeedatwahab/Furniro-Ecommerce-Website",
            fullDescription:
                "Furniro is a sleek and user-friendly eCommerce platform for purchasing furniture online. It features seamless navigation, secure payments, and an engaging shopping experience.",
        },
        {
            id: 2,
            title: "Chatter",
            description: "A blogging website for content creators.",
            image: "/assets/chatter-maeuve.jpeg",
            category: "web",
            technologies: ["React", "Next.js", "Firebase", "Tailwind CSS"],
            demoUrl: "https://chatter-mauve-six.vercel.app/",
            githubUrl: "https://github.com/Majeedatwahab/chatter",
            fullDescription:
                "Chatter is a blogging platform that allows users to write, share, and engage with content. Features include user authentication, a rich text editor, and real-time comments.",
        },
        {
            id: 3,
            title: "AI Learning Companion",
            description: "An AI-powered learning assistant for interactive education.",
            image: "/assets/ai-learning-companion.png",
            category: "web",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel AI Chatbot", "Gemini AI API"],
            demoUrl: "https://my-vercel-ai-chatbot.vercel.app/",
            githubUrl: "https://github.com/Majeedatwahab/ai-learning-companion",
            fullDescription:
                "AI Learning Companion is a smart educational assistant that provides interactive learning experiences, personalized study materials, and AI-driven recommendations to enhance knowledge retention.",
        },
        {
            "id": 4,
            "title": "Bean-Scene Coffee Landing Page",
            "description": "A sleek and modern coffee shop landing page designed to attract customers with an inviting UI and seamless navigation.",
            "image": "/assets/cafe-landing-page.png",
            "category": "web",
            "technologies": ["React", "Tailwind CSS"],
            "demoUrl": "https://bean-scene-coffee-landing-page.vercel.app/",
            "githubUrl": "https://github.com/Majeedatwahab/bean-scene-coffee-landing-page",
            "fullDescription":
                "Bean-Scene Coffee Landing Page is a visually engaging and fully responsive website that highlights premium coffee blends, features a beautifully designed menu, and encourages customer engagement through intuitive UI elements. Optimized for performance and accessibility, ensuring a delightful user experience."
        },
        {
            "id": 5,
            "title": " Drift Aura Sportscar Website",
            "description": "A visually stunning sports car showcase website featuring high-performance vehicles and immersive user experience.",
            "image": "/assets/drift-aura.png",
            "category": "web",
            "technologies": ["React", "Next.js", "Tailwind CSS", "Swiperjs"],
            "demoUrl": "https://drift-aura-car-site.vercel.app/",
            "githubUrl": "https://github.com/Majeedatwahab/drift-aura-sports-cars",
            "fullDescription":
                "Drift Aura is a sleek and dynamic web experience that showcases high-end sports cars with stunning visuals, detailed specifications, and an engaging UI. Designed for car enthusiasts, this platform offers a seamless browsing experience with smooth animations, interactive elements, and a modern aesthetic."
        },
        {
            "id": 6,
            "title": "Virtual Health Assistant Dashboard",
            "description": "A comprehensive dashboard designed to manage medical tasks, appointments, and patient data, all in one place with an intuitive user interface.",
            "image": "/assets/medical-dashboard.png",
            "category": "web",
            "technologies": ["React", "Tailwind CSS", "Chart.js"],
            "demoUrl": "https://medical-dashboard-web.netlify.app/",
            "githubUrl": "https://github.com/Majeedatwahab/medical-dashboard",
            "fullDescription":
                "The Virtual Medical Assistant Dashboard offers a user-friendly and interactive interface for managing patient data, medical records, and appointment scheduling. It features dynamic charts and real-time updates to ensure smooth tracking of appointments, patient history, and medical tasks. Ideal for healthcare professionals, this dashboard enhances efficiency and provides a seamless digital solution to manage medical practices."
        }


    ];

    const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter);

    const categories = [
        { id: "all", label: "All Projects" },
        { id: "web", label: "Web Apps" }
    ];

    return (
        <section id="projects" className="py-20 bg-black relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500" />
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">MY PROJECTS</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6" />
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Explore my recent work showcasing my skills in frontend development, responsive design, and interactive user
                        experiences.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <Button
                            key={category.id}
                            variant={filter === category.id ? "default" : "outline"}
                            onClick={() => setFilter(category.id)}
                            className={
                                filter === category.id
                                    ? "bg-gradient-to-r from-purple-600 to-cyan-600 border-none"
                                    : "border-purple-500 text-black hover:text-white hover:bg-purple-500/20"
                            }
                        >
                            {category.label}
                        </Button>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="group bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                            <div className="relative overflow-hidden aspect-video">
                                <Image src={project.image} alt={project.title} width={800} height={600} className="object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech) => (
                                        <Badge key={tech} variant="outline" className="bg-purple-500/10 text-purple-300 border-purple-500/30">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    <Button variant="default" size="sm" className="bg-gradient-to-r from-purple-600 to-cyan-600 flex-1" asChild>
                                        <Link href={`/projects/${project.id}`}  rel="noopener noreferrer">
                                            <ExternalLink className="h-4 w-4 mr-2" />
                                            Read More
                                        </Link>
                                    </Button>
                                    <Button variant="outline" size="sm" className="border-purple-500 hover:bg-purple-500/20 text-black hover:text-white" asChild>
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <FaGithub className="h-4 w-4 mr-2" />
                                            Code
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
